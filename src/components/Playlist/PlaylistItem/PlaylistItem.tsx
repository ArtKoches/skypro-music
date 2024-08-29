import { TrackDataType } from '@/lib/types'
import { useAppSelector } from '@/store/store'
import styles from './PlaylistItem.module.css'
import Track from '@/components/Track/Track'

export default function PlaylistItem() {
	const { currPlaylist, isLoading } = useAppSelector(state => state.playlist)

	return (
		<div className={styles.content__playlist}>
			{isLoading
				? 'Загрузка треков...'
				: currPlaylist.map((track: TrackDataType) => (
						<Track key={track._id} {...track} />
					))}
		</div>
	)
}
