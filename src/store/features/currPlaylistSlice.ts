import { tracksDataTypes } from '@/lib/types'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type CurrPlaylistStateType = {
	currPlaylistState: tracksDataTypes[]
	currTrackState: tracksDataTypes | null
}

const initialState: CurrPlaylistStateType = {
	currPlaylistState: [],
	currTrackState: null,
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
	},
})

export const { setCurrPlaylistState, setCurrTrackState } =
	currPlaylistSlice.actions
export const currPlaylistReducer = currPlaylistSlice.reducer
