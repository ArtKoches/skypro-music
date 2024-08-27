import { tracksApi } from '@/api/tracksApi'
import { useAppDispatch, useAppSelector } from '@/store/store'
import { useEffect } from 'react'

export function useInitLikedTracks() {
	const dispatch = useAppDispatch()
	const tokens = useAppSelector(state => state.user.tokens)

	useEffect(() => {
		if (tokens?.access) {
			dispatch(tracksApi.getFavoriteTracks(tokens.access))
		}
	}, [tokens, dispatch])
}
