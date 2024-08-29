import { TrackDataType } from '@/lib/types'
import { useAppSelector } from '@/store/store'
import styles from './PlaylistItem.module.css'
import Track from '@/components/Track/Track'

type Props = {
	playlist: TrackDataType[]
}

export default function PlaylistItem({ playlist }: Props) {
	const { isLoading } = useAppSelector(state => state.playlist)

	return (
		<div className={styles.content__playlist}>
			{isLoading
				? 'Загрузка треков...'
				: playlist.map((track: TrackDataType) => (
						<Track key={track._id} {...track} />
					))}
		</div>
	)
}
