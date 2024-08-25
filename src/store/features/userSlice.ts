import { userApi } from '@/api/userApi'
import { createSlice } from '@reduxjs/toolkit'

type UserStateType = {
	user: string | null
}

const initialState: UserStateType = {
	user: null,
}

const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		logout: state => {
			state.user = null
			localStorage.removeItem('user')
		},
	},
	extraReducers: builder => {
		builder.addCase(userApi.getUser.fulfilled, (state, action) => {
			state.user = action.payload
			localStorage.setItem('user', JSON.stringify(state.user))
		})
	},
})

export const { logout } = userSlice.actions
export const userReducer = userSlice.reducer
