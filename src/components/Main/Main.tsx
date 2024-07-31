import Nav from '../Nav/Nav'
import Playlist from '../Playlist/PlaylistMain/Playlist'
import Sidebar from '../Sidebar/Sidebar'
import styles from './Main.module.css'

export default function Main() {
	return (
		<main className={styles.main}>
			<Nav />
			<Playlist />
			<Sidebar />
		</main>
	)
}
