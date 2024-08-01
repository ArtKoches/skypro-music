import React from 'react'
import styles from './Nav.module.css'
import Image from 'next/image'
import Link from 'next/link'
import { routes } from '@/lib/routes'

export default function Nav() {
	return (
		<nav className={styles.main__nav}>
			<div className={styles.nav__logo}>
				<Image
					className={styles.logo__image}
					src='/img/logo.png'
					alt='logo'
					width={113}
					height={17}
				/>
			</div>
			<div className={styles.nav__burger}>
				<span className={styles.burger__line} />
				<span className={styles.burger__line} />
				<span className={styles.burger__line} />
			</div>
			<div className={styles.nav__menu}>
				<ul className={styles.menu__list}>
					<li className={styles.menu__item}>
						<a href='#' className={styles.menu__link}>
							Главное
						</a>
					</li>
					<li className={styles.menu__item}>
						<a href='#' className={styles.menu__link}>
							Мой плейлист
						</a>
					</li>
					<li className={styles.menu__item}>
						<Link className={styles.menu__link} href={routes.LOGIN}>
							Войти
						</Link>
					</li>
				</ul>
			</div>
		</nav>
	)
}
