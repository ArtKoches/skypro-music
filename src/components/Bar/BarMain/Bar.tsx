'use client'

import { useEffect, useRef } from 'react'
import Controls from '../Player/Controls/Controls'
import PlayingTrack from '../Player/PlayingTrack/PlayingTrack'
import Volume from '../Volume/Volume'
import styles from './Bar.module.css'
import Progress from '../Progress/Progress'
import { trackFormattedTime } from '@/utils/helpers'
import { useAppDispatch, useAppSelector } from '@/store/store'
import {
	setElapsedTime,
	setIsLoop,
	setIsPlaying,
	setVolume,
} from '@/store/features/barControlsSlice'

export default function Bar() {
	const { currTrackState } = useAppSelector(state => state.currPlaylist)
	const { isPlaying, isLoop, volume, elapsedTime } = useAppSelector(
		state => state.barControls,
	)
	const dispatch = useAppDispatch()
	const audioRef = useRef<HTMLAudioElement | null>(null)
	const audio = audioRef.current
	const duration = audio?.duration || 0

	useEffect(() => {
		if (audio) {
			audio.volume = volume
		}
	}, [volume, audio])

	const handleChangeVolume = (event: React.ChangeEvent<HTMLInputElement>) => {
		dispatch(setVolume(Number(event.target.value)))
	}

	const handleChangeDuration = (event: React.ChangeEvent<HTMLInputElement>) => {
		if (audio) {
			audio.currentTime = Number(event.target.value)
		}
	}

	const handleTimeUpdate = (event: React.ChangeEvent<HTMLAudioElement>) => {
		dispatch(setElapsedTime(event.currentTarget.currentTime))
	}

	const togglePlay = () => {
		if (audio) {
			if (isPlaying) {
				audio.pause()
				dispatch(setIsPlaying(false))
			} else {
				audio.play()
				dispatch(setIsPlaying(true))
			}
		}
	}

	const toggleLoop = () => {
		if (audio) {
			if (isLoop) {
				audio.loop = false
				dispatch(setIsLoop(false))
			} else {
				audio.loop = true
				dispatch(setIsLoop(true))
			}
		}
	}

	// FIXME:
	const handleWarningInfo = () => alert('Еще не реализовано')

	return (
		<div className={styles.bar}>
			<div className={styles.bar__content}>
				<div className={styles.bar__timer}>
					<p>
						{trackFormattedTime(elapsedTime)} | {trackFormattedTime(duration)}
					</p>
				</div>
				<audio
					autoPlay
					ref={audioRef}
					src={currTrackState?.track_file}
					onTimeUpdate={handleTimeUpdate}
				>
					Ваш браузер не поддерживает встроенное аудио.
				</audio>
				<Progress
					max={duration}
					value={elapsedTime}
					step={0.01}
					onChange={handleChangeDuration}
				/>
				<div className={styles.bar__player_block}>
					<div className={styles.bar__player}>
						<Controls
							togglePlay={togglePlay}
							toggleLoop={toggleLoop}
							handleWarningInfo={handleWarningInfo}
						/>
						<PlayingTrack />
					</div>
					<Volume value={volume} onChange={handleChangeVolume} />
				</div>
			</div>
		</div>
	)
}
