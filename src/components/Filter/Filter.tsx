import React from 'react'
import styles from './Filter.module.css'
import classNames from 'classnames'

export default function Filter() {
	return (
		<div className={styles.centerblock__filter}>
			<div className={styles.filter__title}>Искать по:</div>
			<div className={classNames(styles.filter__button, styles._btn_text)}>
				исполнителю
			</div>
			<div className={classNames(styles.filter__button, styles._btn_text)}>
				году выпуска
			</div>
			<div className={classNames(styles.filter__button, styles._btn_text)}>
				жанру
			</div>
		</div>
	)
}
