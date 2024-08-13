import React from 'react'
import styles from './PlaylistItem.module.css'
import { tracksDataTypes } from '@/lib/types'
import { trackFormattedTime } from '@/utils/helpers'

type Props = {
	tracksData: tracksDataTypes[]
}

export default function PlaylistItem({ tracksData }: Props) {
	return (
		<div className={styles.content__playlist}>
			{tracksData.map((track: tracksDataTypes) => (
				<div className={styles.playlist__item} key={track._id}>
					<div className={styles.playlist__track}>
						<div className={styles.track__title}>
							<div className={styles.track__title_image}>
								<svg className={styles.track__title_svg}>
									<use xlinkHref='img/icon/sprite.svg#icon-note' />
								</svg>
							</div>
							<div>
								<a className={styles.track__title_link} href='http://'>
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
