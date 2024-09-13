import { tracksApi } from '@/api/tracksApi'
import { TrackDataType } from '@/lib/types'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type PlaylistStateType = {
	currPlaylist: TrackDataType[]
	shufflePlaylist: TrackDataType[]
	favoritePlaylist: TrackDataType[]
	selectionPlaylist: TrackDataType[]
	selectionData: { name: string; items: number[] }
	currTrack: TrackDataType | null
	isLoading: boolean
	isPlaying: boolean
	isLoop: boolean
	isShuffle: boolean
	filterOptions: {
		searchValue: string
		singer: string[]
		orderData: string
		genre: string[]
	}
}

const initialState: PlaylistStateType = {
	currPlaylist: [],
	shufflePlaylist: [],
	favoritePlaylist: [],
	selectionPlaylist: [],
	selectionData: { name: '', items: [] },
	currTrack: null,
	isLoading: true,
	isPlaying: false,
	isLoop: false,
	isShuffle: false,
	filterOptions: {
		searchValue: '',
		singer: [],
		orderData: 'По умолчанию',
		genre: [],
	},
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
			const sortPlaylist = [...action.payload.currPlaylist].sort(
				() => 0.5 - Math.random(),
			)

			state.currTrack = action.payload.currTrack
			state.currPlaylist = action.payload.currPlaylist
			state.shufflePlaylist = sortPlaylist
		},
		setLike: (state, action: PayloadAction<TrackDataType>) => {
			state.favoritePlaylist.push(action.payload)
		},
		setDislike: (state, action: PayloadAction<TrackDataType>) => {
			const filterNoFavorite = state.favoritePlaylist.filter(
				track => track._id !== action.payload._id,
			)

			state.favoritePlaylist = filterNoFavorite
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
		},
		setSearchValue: (state, action) => {
			state.filterOptions.searchValue = action.payload
		},
		setOrderData: (state, action) => {
			state.filterOptions.orderData = action.payload
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
			.addCase(tracksApi.getSelections.fulfilled, (state, action) => {
				const filterSelection = state.currPlaylist.filter(track => {
					return state.selectionData?.items.includes(track._id)
				})

				state.selectionPlaylist = filterSelection
				state.selectionData = action.payload
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
	setSearchValue,
	setOrderData,
} = playlistSlice.actions
export const playlistReducer = playlistSlice.reducer
