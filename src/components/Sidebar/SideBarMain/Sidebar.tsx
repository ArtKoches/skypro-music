import React, { useMemo } from 'react'
import styles from './Sidebar.module.css'
import Image from 'next/image'
import SidebarPersonal from '../SidebarPersonal/SidebarPersonal'
import Link from 'next/link'
import { selectionsList } from '@/lib/data'

export default function Sidebar() {
	return (
		<div className={styles.main__sidebar}>
			<SidebarPersonal />
			<div className={styles.sidebar__block}>
				<div className={styles.sidebar__list}>
					{useMemo(() => {
						return selectionsList.map(selection => (
							<div className={styles.sidebar__item} key={selection.id}>
								<Link
									className={styles.sidebar__link}
									href={selection.href + selection.id}
								>
									<Image
										className={styles.sidebar__img}
										src={selection.src}
										alt={selection.alt}
										width={250}
										height={150}
										priority
									/>
								</Link>
							</div>
						))
					}, [])}
				</div>
			</div>
		</div>
	)
}
