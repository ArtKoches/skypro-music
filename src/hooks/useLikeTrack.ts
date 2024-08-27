import { tracksApi } from '@/api/tracksApi'
import { TrackDataType } from '@/lib/types'
import { setDislike, setLike } from '@/store/features/playlistSlice'
import { useAppDispatch, useAppSelector } from '@/store/store'

export function useLikeTrack(track: TrackDataType) {
	const dispatch = useAppDispatch()
	const tokens = useAppSelector(state => state.user.tokens)
	const user = useAppSelector(state => state.user.user)
	const likedTracks = useAppSelector(state => state.playlist.likedTracks)

	const isLiked = !!likedTracks.find(el => el._id === track._id)

	const handleLike = async (event: React.MouseEvent<HTMLDivElement>) => {
		event.stopPropagation()

		if (!tokens || !user) {
			alert('Нет авторизации')
			return
		}

		const fetchAction = isLiked
			? tracksApi.deleteFavoriteTrack
			: tracksApi.addFavoriteTrack

		const storeAction = isLiked ? setDislike : setLike

		try {
			await fetchAction(tokens.access, track._id)
			dispatch(storeAction(track))
		} catch (error: unknown) {
			if (error instanceof Error) {
				console.error(error.message)
			}
		}
	}

	return {
		isLiked,
		handleLike,
	}
}
