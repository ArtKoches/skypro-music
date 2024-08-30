import { useAppSelector } from '@/store/store'
import Filter from '../../Filter/FilterMain/Filter'
import Search from '../../Search/Search'
import PlaylistItem from '../PlaylistItem/PlaylistItem'
import PlaylistTitle from '../PlaylistTitle/PlaylistTitle'
import styles from './Playlist.module.css'

export default function Playlist() {
	const { currPlaylist } = useAppSelector(state => state.playlist)

	return (
		<div className={styles.main__centerblock}>
			<Search />
			<h2 className={styles.centerblock__h2}>Треки</h2>
			<Filter playlist={currPlaylist} />
			<div className={styles.centerblock__content}>
				<PlaylistTitle />
				<PlaylistItem playlist={currPlaylist} />
			</div>
		</div>
	)
}
