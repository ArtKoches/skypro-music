'use client'

import { tracksApi } from '@/api/api'
import { tracksDataTypes } from '@/lib/types'
import Bar from '../Bar/BarMain/Bar'
import Nav from '../Nav/Nav'
import Playlist from '../Playlist/PlaylistMain/Playlist'
import Sidebar from '../Sidebar/Sidebar'
import styles from './Main.module.css'
import { useEffect } from 'react'
import {
	setCurrPlaylistState,
	setIsLoading,
} from '@/store/features/currPlaylistSlice'
import { useAppDispatch, useAppSelector } from '@/store/store'

export default function Main() {
	const { currTrackState } = useAppSelector(state => state.currPlaylist)
	const dispatch = useAppDispatch()

	useEffect(() => {
		tracksApi
			.getTracks()
			.then((resp: tracksDataTypes[]) => dispatch(setCurrPlaylistState(resp)))
			.catch(error => {
				if (error instanceof Error) throw new Error(error.message)
			})
			.finally(() => dispatch(setIsLoading(false)))
	}, [dispatch])

	return (
		<div className={styles.wrapper}>
			<div className={styles.container}>
				<main className={styles.main}>
					<Nav />
					<Playlist />
					<Sidebar />
				</main>
				{currTrackState && <Bar />}
			</div>
		</div>
	)
}
