'use client'

import { tracksApi } from '@/api/api'
import { tracksDataTypes } from '@/lib/types'
import Bar from '../Bar/BarMain/Bar'
import Nav from '../Nav/Nav'
import Playlist from '../Playlist/PlaylistMain/Playlist'
import Sidebar from '../Sidebar/Sidebar'
import styles from './Main.module.css'
import { useEffect, useState } from 'react'

export default function Main() {
	const [tracksData, setTracksData] = useState<tracksDataTypes[]>([])
	const [track, setTrack] = useState<tracksDataTypes | null>(null)
	const [load, setLoad] = useState<boolean>(true)

	useEffect(() => {
		tracksApi
			.getTracks()
			.then((resp: tracksDataTypes[]) => setTracksData(resp))
			.catch(error => {
				if (error instanceof Error) throw new Error(error.message)
			})
			.finally(() => setLoad(false))
	}, [])

	return (
		<div className={styles.wrapper}>
			<div className={styles.container}>
				<main className={styles.main}>
					<Nav />
					<Playlist tracksData={tracksData} setTrack={setTrack} load={load} />
					<Sidebar />
				</main>
				{track && <Bar track={track} />}
			</div>
		</div>
	)
}
