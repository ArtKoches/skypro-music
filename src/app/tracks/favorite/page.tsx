'use client'

import Filter from '@/components/Filter/FilterMain/Filter'
import PlaylistItem from '@/components/Playlist/PlaylistItem/PlaylistItem'
import PlaylistColumnTitle from '@/components/Playlist/PlaylistTitle/PlaylistTitle'
import Search from '@/components/Search/Search'
import styles from '../../../components/Playlist/PlaylistMain/Playlist.module.css'
import React from 'react'
import { useAppSelector } from '@/store/store'
import PrivateRoute from '@/components/PrivateRoute/PrivateRoute'

export default function Favorite() {
	const { favoritePlaylist } = useAppSelector(state => state.playlist)

	return (
		<PrivateRoute>
			<div className={styles.main__centerblock}>
				<Search />
				<h2 className={styles.centerblock__h2}>Избранное</h2>
				<Filter playlist={favoritePlaylist} />
				<div className={styles.centerblock__content}>
					<PlaylistColumnTitle />
					<PlaylistItem playlist={favoritePlaylist} />
				</div>
			</div>
		</PrivateRoute>
	)
}
