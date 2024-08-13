'use client'

import { tracksDataTypes } from '@/lib/types'
import { useEffect, useRef, useState } from 'react'
import Controls from '../Player/Controls/Controls'
import PlayingTrack from '../Player/PlayingTrack/PlayingTrack'
import Volume from '../Volume/Volume'
import styles from './Bar.module.css'

type Props = {
	tracksData: tracksDataTypes[]
}

export default function Bar({ tracksData }: Props) {
	const audioRef = useRef<HTMLAudioElement | null>(null)
	const [playing, setPlaying] = useState<boolean>(false)
	const [loop, setLoop] = useState<boolean>(false)
	const [volume, setVolume] = useState<number>(0.5)

	useEffect(() => {
		const audio = audioRef.current
		if (audio) {
			audio.volume = volume
		}
	}, [volume])

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setVolume(Number(event.target.value))
	}

	const togglePlay = () => {
		const audio = audioRef.current
		playing ? audio?.pause() : audio?.play()
		setPlaying(prev => !prev)
	}

	const toggleLoop = () => {
		const audio = audioRef.current
		if (audio) {
			loop ? (audio.loop = false) : (audio.loop = true)
		}
		setLoop(prev => !prev)
	}

	const handleWarningInfo = () => {
		alert('Еще не реализовано')
	}

	return (
		<div className={styles.bar}>
			<div className={styles.bar__content}>
				<div className={styles.bar__player_progress} />
				<div className={styles.bar__player_block}>
					<div className={styles.bar__player}>
						<audio ref={audioRef} src={tracksData[14].track_file}>
							Ваш браузер не поддерживает встроенное аудио.
						</audio>
						<Controls
							togglePlay={togglePlay}
							playing={playing}
							toggleLoop={toggleLoop}
							loop={loop}
							handleWarningInfo={handleWarningInfo}
						/>
						<PlayingTrack />
					</div>
					<Volume volume={volume} handleChange={handleChange} />
				</div>
			</div>
		</div>
	)
}
