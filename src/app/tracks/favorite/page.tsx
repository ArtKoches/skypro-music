'use client'

import Filter from '@/components/Filter/FilterMain/Filter'
import PlaylistItem from '@/components/Playlist/PlaylistItem/PlaylistItem'
import PlaylistColumnTitle from '@/components/Playlist/PlaylistTitle/PlaylistTitle'
import Search from '@/components/Search/Search'
import styles from '../../../components/Playlist/PlaylistMain/Playlist.module.css'
import React from 'react'
import { useAppSelector } from '@/store/store'

export default function Favorite() {
	const { likedTracks } = useAppSelector(state => state.playlist)

	return (
		<div className={styles.main__centerblock}>
			<Search />
			<h2 className={styles.centerblock__h2}>Избранное</h2>
			<Filter />
			<div className={styles.centerblock__content}>
				<PlaylistColumnTitle />
				<PlaylistItem playlist={likedTracks} />
			</div>
		</div>
	)
}
