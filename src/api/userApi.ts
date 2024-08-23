import { createAsyncThunk } from '@reduxjs/toolkit'

const baseHost = 'https://webdev-music-003b5b991590.herokuapp.com/user/'

type UserDataType = {
	email: string
	password: string
}

export const userApi = {
	getUser: createAsyncThunk(
		'user/getUser',
		async ({ email, password }: UserDataType) => {
			const resp = await fetch(`${baseHost}login/`, {
				method: 'POST',
				body: JSON.stringify({ email, password }),
				headers: { 'content-type': 'application/json' },
			})

			const json = await resp.json()
			if (!resp.ok) {
				throw new Error(json.detail)
			}
			return json
		},
	),
}
