import React from 'react'
import styles from './PlayingTrack.module.css'
import classNames from 'classnames'

export default function PlayingTrack() {
	return (
		<div className={styles.player__track_play}>
			<div className={styles.track_play__contain}>
				<div className={styles.track_play__image}>
					<svg className={styles.track_play__svg}>
						<use xlinkHref='img/icon/sprite.svg#icon-note' />
					</svg>
				</div>
				<div className={styles.track_play__author}>
					<a className={styles.track_play__author_link} href='http://'>
						Ты та...
					</a>
				</div>
				<div className={styles.track_play__album}>
					<a className={styles.track_play__album_link} href='http://'>
						Баста
					</a>
				</div>
			</div>
			<div className={styles.track_play__like_dis}>
				<div className={classNames(styles.track_play__like, styles._btn_icon)}>
					<svg className={styles.track_play__like_svg}>
						<use xlinkHref='img/icon/sprite.svg#icon-like' />
					</svg>
				</div>
				<div
					className={classNames(styles.track_play__dislike, styles._btn_icon)}
				>
					<svg className={styles.track_play__dislike_svg}>
						<use xlinkHref='img/icon/sprite.svg#icon-dislike' />
					</svg>
				</div>
			</div>
		</div>
	)
}
