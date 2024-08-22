import { tracksDataTypes } from '@/lib/types'
import { setCurrTrack, setIsPlaying } from '@/store/features/playlistSlice'
import { useAppDispatch, useAppSelector } from '@/store/store'
import { trackFormattedTime } from '@/utils/helpers'
import styles from './PlaylistItem.module.css'

export default function PlaylistItem() {
	const { currPlaylist, currTrack, isLoading, isPlaying } = useAppSelector(
		state => state.currPlaylist,
	)
	const dispatch = useAppDispatch()

	const handlePlay = (track: tracksDataTypes, tracks: tracksDataTypes[]) => {
		dispatch(setCurrTrack({ currTrack: track, currPlaylist: tracks }))
		dispatch(setIsPlaying(true))
	}

	return (
		<div className={styles.content__playlist}>
			{isLoading
				? 'Загрузка треков...'
				: currPlaylist.map((track: tracksDataTypes) => (
						<div
							className={styles.playlist__item}
							key={track._id}
							onClick={() => handlePlay(track, currPlaylist)}
						>
							<div className={styles.playlist__track}>
								<div className={styles.track__title}>
									<div className={styles.track__title_image}>
										{currTrack?._id === track._id ? (
											<div
												className={
													isPlaying
														? styles.playing_dot
														: styles.not_playing_dot
												}
											></div>
										) : (
											<svg className={styles.track__title_svg}>
												<use xlinkHref='img/icon/sprite.svg#icon-note' />
											</svg>
										)}
									</div>
									<div>
										<a className={styles.track__title_link} href='#'>
											{track.name} <span className={styles.track__title_span} />
										</a>
									</div>
								</div>
								<div className={styles.track__author}>
									<a className={styles.track__author_link} href='http://'>
										{track.author}
									</a>
								</div>
								<div className={styles.track__album}>
									<a className={styles.track__album_link} href='http://'>
										{track.album}
									</a>
								</div>
								<div>
									<svg className={styles.track__time_svg}>
										<use xlinkHref='img/icon/sprite.svg#icon-like' />
									</svg>
									<span className={styles.track__time_text}>
										{trackFormattedTime(track.duration_in_seconds)}
									</span>
								</div>
							</div>
						</div>
					))}
		</div>
	)
}
