import React from 'react'
import styles from './Sidebar.module.css'
import Image from 'next/image'
import SidebarPersonal from '../SidebarPersonal/SidebarPersonal'

export default function Sidebar() {
	return (
		<div className={styles.main__sidebar}>
			<SidebarPersonal />

			<div className={styles.sidebar__block}>
				<div className={styles.sidebar__list}>
					<div className={styles.sidebar__item}>
						<a className={styles.sidebar__link} href='#'>
							<Image
								className={styles.sidebar__img}
								src='/img/playlist01.png'
								alt="day's playlist"
								width={250}
								height={150}
								priority
							/>
						</a>
					</div>
					<div className={styles.sidebar__item}>
						<a className={styles.sidebar__link} href='#'>
							<Image
								className={styles.sidebar__img}
								src='/img/playlist02.png'
								alt="day's playlist"
								width={250}
								height={150}
								priority
							/>
						</a>
					</div>
					<div className={styles.sidebar__item}>
						<a className={styles.sidebar__link} href='#'>
							<Image
								className={styles.sidebar__img}
								src='/img/playlist03.png'
								alt="day's playlist"
								width={250}
								height={150}
								priority
							/>
						</a>
					</div>
				</div>
			</div>
		</div>
	)
}
