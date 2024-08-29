'use client'

import { tracksApi } from '@/api/tracksApi'
import { TrackDataType } from '@/lib/types'
import { setCurrPlaylist, setIsLoading } from '@/store/features/playlistSlice'
import { useAppDispatch, useAppSelector } from '@/store/store'
import { useEffect } from 'react'
import Bar from '../Bar/BarMain/Bar'
import Nav from '../Nav/Nav'
import Playlist from '../Playlist/PlaylistMain/Playlist'
import Sidebar from '../Sidebar/SideBarMain/Sidebar'
import styles from './Main.module.css'

export default function Main() {
	const { currTrack } = useAppSelector(state => state.playlist)
	const dispatch = useAppDispatch()

	useEffect(() => {
		tracksApi
			.getTracks()
			.then((resp: TrackDataType[]) => dispatch(setCurrPlaylist(resp)))
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
				{currTrack && <Bar />}
			</div>
		</div>
	)
}
