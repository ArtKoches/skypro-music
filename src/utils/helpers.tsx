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
