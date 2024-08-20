import { tracksDataTypes } from '@/lib/types'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type CurrPlaylistStateType = {
	currPlaylistState: tracksDataTypes[]
	currTrackState: tracksDataTypes | null
	isLoading: boolean
}

const initialState: CurrPlaylistStateType = {
	currPlaylistState: [],
	currTrackState: null,
	isLoading: true,
}

const currPlaylistSlice = createSlice({
	name: 'currPlaylist',
	initialState,
	reducers: {
		setCurrPlaylistState: (state, action: PayloadAction<tracksDataTypes[]>) => {
			state.currPlaylistState = action.payload
		},
		setCurrTrackState: (
			state,
			action: PayloadAction<tracksDataTypes | null>,
		) => {
			state.currTrackState = action.payload
		},
		setIsLoading: (state, action: PayloadAction<boolean>) => {
			state.isLoading = action.payload
		},
	},
})

export const { setCurrPlaylistState, setCurrTrackState, setIsLoading } =
	currPlaylistSlice.actions
export const currPlaylistReducer = currPlaylistSlice.reducer
