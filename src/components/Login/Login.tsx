import React from 'react'
import styles from './Login.module.css'
import classNames from 'classnames'
import Image from 'next/image'
import Link from 'next/link'

export default function Login() {
	return (
		<div className={styles.wrapper}>
			<div className={styles.container_enter}>
				<div className={styles.modal__block}>
					<form className={styles.modal__form_login} action='#'>
						<a href='../'>
							<div className={styles.modal__logo}>
								<Image
									src='/img/logo_modal.png'
									alt='logo'
									width={140}
									height={21}
								/>
							</div>
						</a>
						<input
							className={classNames(styles.modal__input, styles.login)}
							type='text'
							name='login'
							placeholder='Почта'
						/>
						<input
							className={styles.modal__input}
							type='password'
							name='password'
							placeholder='Пароль'
						/>
						<button className={styles.modal__btn_enter}>
							<a href='../index.html'>Войти</a>
						</button>
						<button className={styles.modal__btn_signup}>
							<Link href={'/signup'}>Зарегистрироваться</Link>
						</button>
					</form>
				</div>
			</div>
		</div>
	)
}
