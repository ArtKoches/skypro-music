import { format } from 'date-fns'

export const trackFormattedTime = (time: number) => format(time * 1000, 'm:ss')

export const handleVolumeProgress = (el: HTMLInputElement | null) => {
	if (el) {
		el.style.setProperty('--value', el.value)
		el.style.setProperty('--min', el.min === '' ? '0' : el.min)
		el.style.setProperty('--max', el.max === '' ? '1' : el.max)
		el.addEventListener('input', () =>
			el.style.setProperty('--value', el.value),
		)
	}
}

export const apiErrorHandler = (error: number) => {
	switch (error) {
		case 400:
			throw new Error('Некорректный запрос')
		case 401:
			throw new Error('Пользователь с таким email или паролем не найден')
		case 403:
			throw new Error('Введенный Email уже занят.')
		case 412:
			throw new Error('Неверный формат Email адреса.')
		case 500:
			throw new Error('Сервер сломался')

		default:
			throw new Error('Неизвестная ошибка')
	}
}
