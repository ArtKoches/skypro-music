'use client'

import { tracksApi } from '@/api/tracksApi'
import { useAppDispatch } from '@/store/store'
import Playlist from '../Playlist/PlaylistMain/Playlist'

export default function Main() {
	const dispatch = useAppDispatch()

	try {
		dispatch(tracksApi.getTracks())
	} catch (err) {
		const error = err as Error
		console.error(error.message)
		throw new Error(error.message)
	}

	return (
		<>
			<Playlist />
		</>
	)
}
