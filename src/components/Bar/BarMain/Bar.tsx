'use client'

import { tracksDataTypes } from '@/lib/types'
import { useEffect, useRef, useState } from 'react'
import Controls from '../Player/Controls/Controls'
import PlayingTrack from '../Player/PlayingTrack/PlayingTrack'
import Volume from '../Volume/Volume'
import styles from './Bar.module.css'
import Progress from '../Progress/Progress'
import { trackFormattedTime } from '@/utils/helpers'

type Props = {
	track: tracksDataTypes | null
}

export default function Bar({ track }: Props) {
	const [playing, setPlaying] = useState<boolean>(true)
	const [loop, setLoop] = useState<boolean>(false)
	const [volume, setVolume] = useState<number>(0.5)
	const [currentTime, setCurrentTime] = useState<number>(0)
	const audioRef = useRef<HTMLAudioElement | null>(null)
	const audio = audioRef.current
	const duration = audio?.duration || 0

	useEffect(() => {
		if (audio) {
			audio.volume = volume
		}
	}, [volume, audio])

	const handleChangeVolume = (event: React.ChangeEvent<HTMLInputElement>) => {
		setVolume(Number(event.target.value))
	}

	const handleChangeDuration = (event: React.ChangeEvent<HTMLInputElement>) => {
		if (audio) {
			audio.currentTime = Number(event.target.value)
		}
	}

	const handleTimeUpdate = (event: React.ChangeEvent<HTMLAudioElement>) => {
		setCurrentTime(event.currentTarget.currentTime)
	}

	const togglePlay = () => {
		if (audio) {
			playing ? audio.pause() : audio.play()
		}
		setPlaying(prev => !prev)
	}

	const toggleLoop = () => {
		if (audio) {
			loop ? (audio.loop = false) : (audio.loop = true)
		}
		setLoop(prev => !prev)
	}

	// FIXME:
	const handleWarningInfo = () => alert('Еще не реализовано')

	return (
		<div className={styles.bar}>
			<div className={styles.bar__content}>
				<div className={styles.bar__timer}>
					<p>
						{trackFormattedTime(currentTime)} |{trackFormattedTime(duration)}
					</p>
				</div>
				<audio
					autoPlay
					ref={audioRef}
					src={track?.track_file}
					onTimeUpdate={handleTimeUpdate}
				>
					Ваш браузер не поддерживает встроенное аудио.
				</audio>
				<Progress
					max={duration}
					value={currentTime}
					step={0.01}
					onChange={handleChangeDuration}
				/>
				<div className={styles.bar__player_block}>
					<div className={styles.bar__player}>
						<Controls
							togglePlay={togglePlay}
							playing={playing}
							toggleLoop={toggleLoop}
							loop={loop}
							handleWarningInfo={handleWarningInfo}
						/>
						<PlayingTrack track={track} />
					</div>
					<Volume value={volume} onChange={handleChangeVolume} />
				</div>
			</div>
		</div>
	)
}
