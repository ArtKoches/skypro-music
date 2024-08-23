'use client'

import React from 'react'
import styles from './Login.module.css'
import classNames from 'classnames'
import Image from 'next/image'
import Link from 'next/link'
import { routes } from '@/lib/routes'
import { useAppDispatch, useAppSelector } from '@/store/store'
import { setLoginData } from '@/store/features/userSlice'
import { userApi } from '@/api/userApi'
import { useRouter } from 'next/navigation'

export default function Login() {
	const { loginData } = useAppSelector(state => state.user)
	const dispatch = useAppDispatch()
	const router = useRouter()

	const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = event.target
		dispatch(setLoginData({ ...loginData, [name]: value }))
	}

	const login = async () => {
		await dispatch(userApi.getUser(loginData)).unwrap()
		router.push(routes.HOME)
	}

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
							type='email'
							name='email'
							placeholder='Почта'
							value={loginData.email}
							onChange={onChange}
						/>
						<input
							className={styles.modal__input}
							type='password'
							name='password'
							placeholder='Пароль'
							value={loginData.password}
							onChange={onChange}
							autoComplete='off'
						/>
						<button className={styles.modal__btn_enter} onClick={login}>
							{/* <a href='../index.html'>Войти</a> */}
							<a href='#'>Войти</a>
						</button>
						<button className={styles.modal__btn_signup}>
							<Link href={routes.REGISTER}>Зарегистрироваться</Link>
						</button>
					</form>
				</div>
			</div>
		</div>
	)
}
