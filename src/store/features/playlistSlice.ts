import { tracksApi } from '@/api/tracksApi'
import { TrackDataType } from '@/lib/types'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type PlaylistStateType = {
	currPlaylist: TrackDataType[]
	shufflePlaylist: TrackDataType[]
	favoritePlaylist: TrackDataType[]
	currTrack: TrackDataType | null
	isLoading: boolean
	isPlaying: boolean
	isLoop: boolean
	isShuffle: boolean
}

const initialState: PlaylistStateType = {
	currPlaylist: [],
	shufflePlaylist: [],
	favoritePlaylist: [],
	currTrack: null,
	isLoading: true,
	isPlaying: false,
	isLoop: false,
	isShuffle: false,
}

const playlistSlice = createSlice({
	name: 'playlist',
	initialState,
	reducers: {
		setCurrTrack: (
			state,
			action: PayloadAction<{
				currTrack: TrackDataType
				currPlaylist: TrackDataType[]
			}>,
		) => {
			state.currTrack = action.payload.currTrack
			state.currPlaylist = action.payload.currPlaylist
			state.shufflePlaylist = action.payload.currPlaylist
		},

		setLike: (state, action: PayloadAction<TrackDataType>) => {
			state.favoritePlaylist.push(action.payload)
		},

		setDislike: (state, action: PayloadAction<TrackDataType>) => {
			state.favoritePlaylist = state.favoritePlaylist.filter(
				track => track._id !== action.payload._id,
			)
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
	extraReducers: builder => {
		builder
			.addCase(tracksApi.getTracks.fulfilled, (state, action) => {
				state.currPlaylist = action.payload
				state.isLoading = false
			})
			.addCase(tracksApi.getFavoriteTracks.fulfilled, (state, action) => {
				state.favoritePlaylist = action.payload
				state.isLoading = false
			})
	},
})

export const {
	setCurrTrack,
	setLike,
	setDislike,
	setPrevTrack,
	setNextTrack,
	setIsPlaying,
	setIsLoop,
	setIsShuffle,
} = playlistSlice.actions
export const playlistReducer = playlistSlice.reducer
