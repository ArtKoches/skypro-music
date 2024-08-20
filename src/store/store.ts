import {
	TypedUseSelectorHook,
	useDispatch,
	useSelector,
	useStore,
} from 'react-redux'
import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { authReducer } from './features/authSlice'
import { currPlaylistReducer } from './features/currPlaylistSlice'
import { barControlsReducer } from './features/barControlsSlice'

export const makeStore = () => {
	return configureStore({
		reducer: combineReducers({
			auth: authReducer,
			currPlaylist: currPlaylistReducer,
			barControls: barControlsReducer,
		}),
	})
}

export type AppStore = ReturnType<typeof makeStore>
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']

export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
export const useAppStore: () => AppStore = useStore
