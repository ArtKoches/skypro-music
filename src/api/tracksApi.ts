const baseUrl = 'https://webdev-music-003b5b991590.herokuapp.com'

export const tracksApi = {
	getTracks: async function getTracks() {
		try {
			const resp = await fetch(`${baseUrl}/catalog/track/all/`)
			const respData = await resp.json()

			if (!resp.ok) {
				throw new Error(respData.message)
			}

			return respData.data
		} catch (error: unknown) {
			if (error instanceof Error) {
				throw new Error(error.message)
			} else {
				throw new Error('Неизвестная ошибка')
			}
		}
	},
}
