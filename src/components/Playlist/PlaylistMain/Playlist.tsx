import { tracksDataTypes } from '@/lib/types'
import Filter from '../../Filter/FilterMain/Filter'
import Search from '../../Search/Search'
import PlaylistItem from '../PlaylistItem/PlaylistItem'
import PlaylistTitle from '../PlaylistTitle/PlaylistTitle'
import styles from './Playlist.module.css'

type Props = {
	tracksData: tracksDataTypes[]
	errorMsg: string
}

export default function Playlist({ tracksData, errorMsg }: Props) {
	return (
		<div className={styles.main__centerblock}>
			<Search />
			<h2 className={styles.centerblock__h2}>Треки</h2>
			<Filter tracksData={tracksData} />

			{errorMsg || (
				<div className={styles.centerblock__content}>
					<PlaylistTitle />
					<PlaylistItem tracksData={tracksData} />
				</div>
			)}
		</div>
	)
}
