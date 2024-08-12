import { tracksApi } from '@/api/api'
import { tracksDataTypes } from '@/lib/types'
import Bar from '../Bar/BarMain/Bar'
import Nav from '../Nav/Nav'
import Playlist from '../Playlist/PlaylistMain/Playlist'
import Sidebar from '../Sidebar/Sidebar'
import styles from './Main.module.css'

export default async function Main() {
	let tracksData: tracksDataTypes[] = []
	let errorMsg: string = ''

	try {
		tracksData = await tracksApi.getTracks()
	} catch (error) {
		if (error instanceof Error) {
			errorMsg = error.message
		} else {
			errorMsg = 'Неизвестная ошибка'
		}
	}

	return (
		<div className={styles.wrapper}>
			<div className={styles.container}>
				<main className={styles.main}>
					<Nav />
					<Playlist tracksData={tracksData} errorMsg={errorMsg} />
					<Sidebar />
				</main>
				<Bar tracksData={tracksData} />
			</div>
		</div>
	)
}
