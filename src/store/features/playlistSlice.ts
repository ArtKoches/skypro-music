import { tracksApi } from '@/api/tracksApi'
import { TrackDataType } from '@/lib/types'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type PlaylistStateType = {
	currPlaylist: TrackDataType[]
	shufflePlaylist: TrackDataType[]
	currTrack: TrackDataType | null
	isLoading: boolean
	isPlaying: boolean
	isLoop: boolean
	isShuffle: boolean
	likedTracks: TrackDataType[]
}

const initialState: PlaylistStateType = {
	currPlaylist: [],
	shufflePlaylist: [],
	currTrack: null,
	isLoading: true,
	isPlaying: false,
	isLoop: false,
	isShuffle: false,
	likedTracks: [],
}

const playlistSlice = createSlice({
	name: 'playlist',
	initialState,
	reducers: {
		setCurrPlaylist: (state, action: PayloadAction<TrackDataType[]>) => {
			state.currPlaylist = action.payload
		},

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
			state.likedTracks.push(action.payload)
		},

		setDislike: (state, action: PayloadAction<TrackDataType>) => {
			state.likedTracks = state.likedTracks.filter(
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
	extraReducers: builder => {
		builder.addCase(tracksApi.getFavoriteTracks.fulfilled, (state, action) => {
			state.likedTracks = action.payload
		})
	},
})

export const {
	setCurrPlaylist,
	setCurrTrack,
	setLike,
	setDislike,
	setPrevTrack,
	setNextTrack,
	setIsLoading,
	setIsPlaying,
	setIsLoop,
	setIsShuffle,
} = playlistSlice.actions
export const playlistReducer = playlistSlice.reducer
