import { routes } from '@/lib/routes'
import styles from './not-found.module.css'
import Link from 'next/link'

export default function NotFound() {
	return (
		<>
			<div className={styles.wrapper}>
				<div className={styles.container}>
					<div className={styles.errorBlock}>
						<h1 className={styles.errorBlock__title}>404</h1>
						<h2 className={styles.errorBlock__subtitle}>Страница не найдена</h2>
						<p className={styles.errorBlock__description}>
							Возможно, она была удалена или перенесена на другой адрес
						</p>
						<button className={styles.errorBlock__BtnReturn}>
							<Link href={routes.HOME}> Вернуться на главную</Link>
						</button>
					</div>
				</div>
			</div>
		</>
	)
}
