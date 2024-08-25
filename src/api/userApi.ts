import { SignInDataType } from '@/lib/types'
import { apiErrorHandler } from '@/utils/helpers'
import { createAsyncThunk } from '@reduxjs/toolkit'

const baseHost = 'https://webdev-music-003b5b991590.herokuapp.com/user/'

export const userApi = {
	getUser: createAsyncThunk(
		'user/getUser',
		async ({ email, password }: SignInDataType) => {
			const resp = await fetch(`${baseHost}login/`, {
				method: 'POST',
				body: JSON.stringify({ email, password }),
				headers: { 'content-type': 'application/json' },
			})
			const json = await resp.json()
			if (!resp.ok) {
				apiErrorHandler(resp.status)
			}
			return json
		},
	),
}
