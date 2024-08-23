import { userApi } from '@/api/userApi'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type UserStateType = {
	user: string | null
	loginData: { email: string; password: string }
}

const initialState: UserStateType = {
	user: null,
	loginData: {
		email: '',
		password: '',
	},
}

const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		logout: state => {
			state.user = null
		},
		setLoginData: (
			state,
			action: PayloadAction<{ email: string; password: string }>,
		) => {
			state.loginData = action.payload
		},
	},
	extraReducers: builder => {
		builder.addCase(userApi.getUser.fulfilled, (state, action) => {
			state.user = action.payload
		})
	},
})

export const { logout, setLoginData } = userSlice.actions
export const userReducer = userSlice.reducer
