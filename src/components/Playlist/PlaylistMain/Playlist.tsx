import { useTracksFilter } from '@/hooks/useTracksFilter'
import Filter from '../../Filter/FilterMain/Filter'
import Search from '../../Search/Search'
import PlaylistItem from '../PlaylistItem/PlaylistItem'
import PlaylistTitle from '../PlaylistTitle/PlaylistTitle'
import styles from './Playlist.module.css'
import { TrackDataType } from '@/lib/types'

type Props = {
	playlist: TrackDataType[]
	title: string
}

export default function Playlist({ playlist, title }: Props) {
	playlist = useTracksFilter(playlist)

	return (
		<div className={styles.main__centerblock}>
			<Search />
			<h2 className={styles.centerblock__h2}>{title}</h2>
			<Filter />
			<div className={styles.centerblock__content}>
				<PlaylistTitle />
				<PlaylistItem playlist={playlist} />
			</div>
		</div>
	)
}
