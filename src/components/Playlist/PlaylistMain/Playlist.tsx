import Filter from '../../Filter/FilterMain/Filter'
import Search from '../../Search/Search'
import PlaylistItem from '../PlaylistItem/PlaylistItem'
import PlaylistTitle from '../PlaylistTitle/PlaylistTitle'
import styles from './Playlist.module.css'

type Props = {
	load: boolean
}

export default function Playlist({ load }: Props) {
	return (
		<div className={styles.main__centerblock}>
			<Search />
			<h2 className={styles.centerblock__h2}>Треки</h2>
			<Filter />
			<div className={styles.centerblock__content}>
				<PlaylistTitle />
				<PlaylistItem load={load} />
			</div>
		</div>
	)
}
