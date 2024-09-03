'use client'

import { tracksApi } from '@/api/tracksApi'
import { useAppDispatch, useAppSelector } from '@/store/store'
import Playlist from '../Playlist/PlaylistMain/Playlist'
import { useEffect } from 'react'

export default function Main() {
	const dispatch = useAppDispatch()
	const { currPlaylist } = useAppSelector(state => state.playlist)

	useEffect(() => {
		try {
			dispatch(tracksApi.getTracks())
		} catch (err) {
			const error = err as Error
			console.error(error.message)
			throw new Error(error.message)
		}
	}, [dispatch])

	return (
		<>
			<Playlist playlist={currPlaylist} title={'Треки'} />
		</>
	)
}
