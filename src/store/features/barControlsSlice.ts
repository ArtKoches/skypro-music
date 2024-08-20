import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type barControlsStateType = {
	isPlaying: boolean
	isLoop: boolean
	volume: number
	elapsedTime: number
}

const initialState: barControlsStateType = {
	isPlaying: false,
	isLoop: false,
	volume: 0.5,
	elapsedTime: 0,
}

const barControlsSlice = createSlice({
	name: 'barControls',
	initialState,
	reducers: {
		setIsPlaying: (state, action: PayloadAction<boolean>) => {
			state.isPlaying = action.payload
		},
		setIsLoop: (state, action: PayloadAction<boolean>) => {
			state.isLoop = action.payload
		},
		setVolume: (state, action: PayloadAction<number>) => {
			state.volume = action.payload
		},
		setElapsedTime: (state, action: PayloadAction<number>) => {
			state.elapsedTime = action.payload
		},
	},
})

export const { setIsPlaying, setIsLoop, setVolume, setElapsedTime } =
	barControlsSlice.actions
export const barControlsReducer = barControlsSlice.reducer
