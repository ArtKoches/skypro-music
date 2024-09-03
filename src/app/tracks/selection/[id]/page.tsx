'use client'

import { tracksApi } from '@/api/tracksApi'
import Playlist from '@/components/Playlist/PlaylistMain/Playlist'
import { useAppDispatch, useAppSelector } from '@/store/store'
import { useParams } from 'next/navigation'
import React, { useEffect } from 'react'

export default function Selection() {
	const dispatch = useAppDispatch()
	const { id } = useParams<{ id: string }>()
	const { selectionPlaylist, selectionName } = useAppSelector(
		state => state.playlist,
	)

	useEffect(() => {
		try {
			dispatch(tracksApi.getTracks()).unwrap()
			dispatch(tracksApi.getSelections(id))
		} catch (err) {
			const error = err as Error
			console.error(error.message)
		}
	}, [dispatch, id])

	return (
		<>
			<Playlist playlist={selectionPlaylist} title={selectionName} />
		</>
	)
}
