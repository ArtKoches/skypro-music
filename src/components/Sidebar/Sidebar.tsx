import React, { useEffect, useState } from 'react'
import styles from './Sidebar.module.css'
import Image from 'next/image'
import { useAppDispatch, useAppSelector } from '@/store/store'
import { logout } from '@/store/features/userSlice'
import { useRouter } from 'next/navigation'
import { routes } from '@/lib/routes'

export default function Sidebar() {
	const [isClient, setIsClient] = useState(false)
	const router = useRouter()
	const dispatch = useAppDispatch()
	const { user } = useAppSelector(state => state.user)

	const onLogout = () => {
		dispatch(logout())
		router.push(routes.LOGIN)
	}

	//FIXME:
	useEffect(() => {
		setIsClient(true)
	}, [])

	return (
		<div className={styles.main__sidebar}>
			<div className={styles.sidebar__personal}>
				<p className={styles.sidebar__personal_name}>
					{isClient && user?.username}
				</p>
				<div className={styles.sidebar__icon} onClick={onLogout}>
					<svg>
						<use xlinkHref='img/icon/sprite.svg#logout' />
					</svg>
				</div>
			</div>
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
							/>
						</a>
					</div>
				</div>
			</div>
		</div>
	)
}
