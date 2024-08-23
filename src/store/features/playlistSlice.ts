import { tracksDataTypes } from '@/lib/types'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type CurrPlaylistStateType = {
	currPlaylist: tracksDataTypes[]
	shufflePlaylist: tracksDataTypes[]
	currTrack: tracksDataTypes | null
	isLoading: boolean
	isPlaying: boolean
	isLoop: boolean
	isShuffle: boolean
}

const initialState: CurrPlaylistStateType = {
	currPlaylist: [],
	shufflePlaylist: [],
	currTrack: null,
	isLoading: true,
	isPlaying: false,
	isLoop: false,
	isShuffle: false,
}

const currPlaylistSlice = createSlice({
	name: 'currPlaylist',
	initialState,
	reducers: {
		setCurrPlaylist: (state, action: PayloadAction<tracksDataTypes[]>) => {
			state.currPlaylist = action.payload
		},

		setCurrTrack: (
			state,
			action: PayloadAction<{
				currTrack: tracksDataTypes
				currPlaylist: tracksDataTypes[]
			}>,
		) => {
			state.currTrack = action.payload.currTrack
			state.currPlaylist = action.payload.currPlaylist
			state.shufflePlaylist = action.payload.currPlaylist
		},

		setPrevTrack: state => {
			const playlist = state.isShuffle
				? state.shufflePlaylist
				: state.currPlaylist
			const currIndex = playlist.findIndex(
				track => track._id === state.currTrack?._id,
			)
			if (!currIndex) {
				return
			}
			state.currTrack = playlist[currIndex - 1]
		},

		setNextTrack: state => {
			const playlist = state.isShuffle
				? state.shufflePlaylist
				: state.currPlaylist
			const currIndex = playlist.findIndex(
				track => track._id === state.currTrack?._id,
			)
			if (currIndex === playlist.length - 1) {
				return
			}
			state.currTrack = playlist[currIndex + 1]
		},

		setIsLoading: (state, action: PayloadAction<boolean>) => {
			state.isLoading = action.payload
		},

		setIsPlaying: (state, action: PayloadAction<boolean>) => {
			state.isPlaying = action.payload
		},

		setIsLoop: (state, action: PayloadAction<boolean>) => {
			state.isLoop = action.payload
		},

		setIsShuffle: (state, action: PayloadAction<boolean>) => {
			state.isShuffle = action.payload
			state.shufflePlaylist = state.shufflePlaylist.sort(
				() => Math.random() - 0.5,
			)
		},
	},
})

export const {
	setCurrPlaylist,
	setCurrTrack,
	setPrevTrack,
	setNextTrack,
	setIsLoading,
	setIsPlaying,
	setIsLoop,
	setIsShuffle,
} = currPlaylistSlice.actions
export const currPlaylistReducer = currPlaylistSlice.reducer
