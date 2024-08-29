import React from 'react'
import styles from './PlayingTrack.module.css'
import classNames from 'classnames'
import { useAppSelector } from '@/store/store'
import { useLikeTrack } from '@/hooks/useLikeTrack'

export default function PlayingTrack() {
	const { currTrack } = useAppSelector(state => state.playlist)
	const { isLiked, handleLike } = useLikeTrack(currTrack!)

	return (
		<div className={styles.player__track_play}>
			<div className={styles.track_play__contain}>
				<div className={styles.track_play__image}>
					<svg className={styles.track_play__svg}>
						<use xlinkHref='img/icon/sprite.svg#icon-note' />
					</svg>
				</div>
				<div className={styles.track_play__author}>
					<a className={styles.track_play__author_link} href='#'>
						{currTrack?.author}
					</a>
				</div>
				<div className={styles.track_play__album}>
					<a className={styles.track_play__album_link} href='#'>
						{currTrack?.album}
					</a>
				</div>
			</div>
			<div className={styles.track_play__like_dis}>
				<div
					className={classNames(styles.track_play__like, styles._btn_icon)}
					onClick={handleLike}
				>
					<svg
						className={classNames(
							styles.track_play__like_svg,
							isLiked
								? styles.like_heartbeat_animation
								: styles.dislike_jello_animation,
						)}
					>
						<use
							xlinkHref={`img/icon/sprite.svg#${isLiked ? 'icon-like' : 'icon-dislike'}`}
						/>
					</svg>
				</div>
			</div>
		</div>
	)
}
