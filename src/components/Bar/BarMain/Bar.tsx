'use client'

import { tracksDataTypes } from '@/lib/types'
import { useRef, useState } from 'react'
import Controls from '../Player/Controls/Controls'
import PlayingTrack from '../Player/PlayingTrack/PlayingTrack'
import Volume from '../Volume/Volume'
import styles from './Bar.module.css'

type Props = {
	tracksData: tracksDataTypes[]
}

export default function Bar({ tracksData }: Props) {
	const audioRef = useRef<null | HTMLAudioElement>(null)
	const [playing, setPlaying] = useState<boolean>(false)

	const togglePlay = () => {
		const audio = audioRef.current
		playing ? audio?.pause() : audio?.play()
		setPlaying(prev => !prev)
	}

	return (
		<div className={styles.bar}>
			<div className={styles.bar__content}>
				<div className={styles.bar__player_progress} />
				<div className={styles.bar__player_block}>
					<div className={styles.bar__player}>
						<audio ref={audioRef} src={tracksData[22].track_file}>
							Ваш браузер не поддерживает встроенное аудио.
						</audio>
						<Controls togglePlay={togglePlay} playing={playing} />
						<PlayingTrack />
					</div>
					<Volume />
				</div>
			</div>
		</div>
	)
}
