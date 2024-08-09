import { tracksApi } from '@/api/api'
import Bar from '../Bar/Bar'
import Nav from '../Nav/Nav'
import Playlist from '../Playlist/PlaylistMain/Playlist'
import Sidebar from '../Sidebar/Sidebar'
import styles from './Main.module.css'
import { tracksDataTypes } from '@/lib/types'

export default async function Main() {
	const tracksData: tracksDataTypes[] = await tracksApi.getTracks()

	return (
		<div className={styles.wrapper}>
			<div className={styles.container}>
				<main className={styles.main}>
					<Nav />
					<Playlist tracksData={tracksData} />
					<Sidebar />
				</main>
				<Bar />
			</div>
		</div>
	)
}
