import { TrackDataType } from '@/lib/types'
import { useAppSelector } from '@/store/store'
import { useMemo } from 'react'

export const useTracksFilter = (playlist: TrackDataType[]) => {
	const { filterOptions } = useAppSelector(state => state.playlist)

	const tracksFilter = useMemo(() => {
		let initPlaylist = playlist

		if (filterOptions.searchValue) {
			initPlaylist = playlist.filter(track =>
				track.name
					.toLowerCase()
					.includes(filterOptions.searchValue.toLowerCase()),
			)
		}
		if (filterOptions.singer.length) {
			initPlaylist = playlist.filter(track =>
				filterOptions.singer.includes(track.author),
			)
		}
		if (filterOptions.genre.length) {
			initPlaylist = playlist.filter(track =>
				track.genre.some(genre => filterOptions.genre.includes(genre)),
			)
		}
		if (filterOptions.orderData === 'Сначала новые') {
			initPlaylist = playlist
				.slice()
				.sort(
					(a, b) =>
						new Date(b.release_date).getTime() -
						new Date(a.release_date).getTime(),
				)
		}
		if (filterOptions.orderData === 'Сначала старые') {
			initPlaylist = playlist
				.slice()
				.sort(
					(a, b) =>
						new Date(a.release_date).getTime() -
						new Date(b.release_date).getTime(),
				)
		}

		return initPlaylist
	}, [filterOptions, playlist])

	return tracksFilter
}
