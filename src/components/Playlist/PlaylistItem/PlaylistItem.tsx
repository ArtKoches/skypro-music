import { TrackDataType } from '@/lib/types'
import { useAppSelector } from '@/store/store'
import Track from '@/components/Track/Track'
import { useMemo } from 'react'
import styles from './PlaylistItem.module.css'

type Props = {
	playlist: TrackDataType[]
}

export default function PlaylistItem({ playlist }: Props) {
	const { isLoading } = useAppSelector(state => state.playlist)

	const infoMsg = isLoading
		? 'Загрузка треков...'
		: !playlist.length && 'Треки не найдены'

	return (
		<div className={styles.content__playlist}>
			{infoMsg}
			{useMemo(() => {
				return playlist.map((track: TrackDataType) => (
					<Track key={track._id} {...track} />
				))
			}, [playlist])}
		</div>
	)
}
