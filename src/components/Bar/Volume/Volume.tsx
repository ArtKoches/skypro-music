import React from 'react'
import styles from './Volume.module.css'
import classNames from 'classnames'

export default function Volume() {
	return (
		<div className={styles.bar__volume_block}>
			<div className={styles.volume__content}>
				<div className={styles.volume__image}>
					<svg className={styles.volume__svg}>
						<use xlinkHref='img/icon/sprite.svg#icon-volume' />
					</svg>
				</div>
				<div className={classNames(styles.volume__progress, styles._btn)}>
					<input
						className={classNames(styles.volume__progress_line, styles._btn)}
						type='range'
						name='range'
					/>
				</div>
			</div>
		</div>
	)
}
