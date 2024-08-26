'use client'

import React, { useState } from 'react'
import styles from './Login.module.css'
import classNames from 'classnames'
import Image from 'next/image'
import Link from 'next/link'
import { routes } from '@/lib/routes'
import { useAppDispatch } from '@/store/store'
import { userApi } from '@/api/userApi'
import { useRouter } from 'next/navigation'
import ErrorMsg from '../ErrorMsg/ErrorMsg'

export default function Login() {
	const dispatch = useAppDispatch()
	const router = useRouter()

	const [error, setError] = useState<string | null>(null)
	const [loginData, setLoginData] = useState({
		email: '',
		password: '',
	})

	const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = event.target
		setLoginData({ ...loginData, [name]: value })
		setError(null)
	}

	const signIn = async () => {
		if (!loginData.email.trim()) {
			setError('Введите почту')
			return
		}
		if (!loginData.password.trim()) {
			setError('Введите пароль')
			return
		}
		if (loginData.password.length < 6) {
			setError('Пароль должен содержать не менее 6 символов.')
			return
		}

		try {
			await dispatch(userApi.getUser(loginData)).unwrap()
			router.push(routes.HOME)
		} catch (err: unknown) {
			const error = err as Error
			setError(error.message)
			console.error(error.message)
		}
	}

	return (
		<div className={styles.wrapper}>
			<div className={styles.container_enter}>
				<div className={styles.modal__block}>
					<form className={styles.modal__form_login} action='#'>
						<a href='#'>
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
						{error && <ErrorMsg error={error} />}
						<button className={styles.modal__btn_enter} onClick={signIn}>
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
