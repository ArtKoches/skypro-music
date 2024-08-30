import { createAsyncThunk } from '@reduxjs/toolkit'

const baseUrl = 'https://webdev-music-003b5b991590.herokuapp.com'

export const tracksApi = {
	getTracks: createAsyncThunk('tracks/getTracks', async () => {
		try {
			const resp = await fetch(`${baseUrl}/catalog/track/all/`)
			const respData = await resp.json()

			if (!resp.ok) {
				throw new Error(respData.message)
			}

			return respData.data
		} catch (err: unknown) {
			const error = err as Error
			console.error(error.message)
			throw new Error(error.message)
		}
	}),

	getFavoriteTracks: createAsyncThunk(
		'tracks/getFavorite',
		async (token: string) => {
			try {
				const resp = await fetch(`${baseUrl}/catalog/track/favorite/all/`, {
					method: 'GET',
					headers: {
						Authorization: `Bearer ${token}`,
					},
				})
				const respData = await resp.json()

				if (!resp.ok) {
					throw new Error(respData.message)
				}

				return respData.data
			} catch (err: unknown) {
				const error = err as Error
				console.error(error.message)
				throw new Error(error.message)
			}
		},
	),

	addFavoriteTrack: async (token: string, id: number) => {
		try {
			const resp = await fetch(`${baseUrl}/catalog/track/${id}/favorite/`, {
				method: 'POST',
				headers: {
					Authorization: `Bearer ${token}`,
				},
			})
			const respData = await resp.json()

			if (!resp.ok) {
				throw new Error(respData.message)
			}

			return respData.data
		} catch (err: unknown) {
			const error = err as Error
			console.error(error.message)
			throw new Error(error.message)
		}
	},

	deleteFavoriteTrack: async (token: string, id: number) => {
		try {
			const resp = await fetch(`${baseUrl}/catalog/track/${id}/favorite/`, {
				method: 'DELETE',
				headers: {
					Authorization: `Bearer ${token}`,
				},
			})
			const respData = await resp.json()

			if (!resp.ok) {
				throw new Error(respData.message)
			}

			return respData.data
		} catch (err: unknown) {
			const error = err as Error
			console.error(error.message)
			throw new Error(error.message)
		}
	},
}
