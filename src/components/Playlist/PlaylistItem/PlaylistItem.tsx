import React from 'react'
import styles from './PlaylistItem.module.css'

export default function PlaylistItem() {
	return (
		<div className={styles.content__playlist}>
			<div className={styles.playlist__item}>
				<div className={styles.playlist__track}>
					<div className={styles.track__title}>
						<div className={styles.track__title_image}>
							<svg className={styles.track__title_svg}>
								<use xlinkHref='img/icon/sprite.svg#icon-note' />
							</svg>
						</div>
						<div>
							<a className={styles.track__title_link} href='http://'>
								Guilt <span className={styles.track__title_span} />
							</a>
						</div>
					</div>
					<div className={styles.track__author}>
						<a className={styles.track__author_link} href='http://'>
							Nero
						</a>
					</div>
					<div className={styles.track__album}>
						<a className={styles.track__album_link} href='http://'>
							Welcome Reality
						</a>
					</div>
					<div>
						<svg className={styles.track__time_svg}>
							<use xlinkHref='img/icon/sprite.svg#icon-like' />
						</svg>
						<span className={styles.track__time_text}>4:44</span>
					</div>
				</div>
			</div>

			<div className={styles.playlist__item}>
				<div className={styles.playlist__track}>
					<div className={styles.track__title}>
						<div className={styles.track__title_image}>
							<svg className={styles.track__title_svg}>
								<use xlinkHref='img/icon/sprite.svg#icon-note' />
							</svg>
						</div>
						<div>
							<a className={styles.track__title_link} href='http://'>
								Elektro <span className={styles.track__title_span} />
							</a>
						</div>
					</div>
					<div className={styles.track__author}>
						<a className={styles.track__author_link} href='http://'>
							Dynoro, Outwork, Mr. Gee
						</a>
					</div>
					<div className={styles.track__album}>
						<a className={styles.track__album_link} href='http://'>
							Elektro
						</a>
					</div>
					<div>
						<svg className={styles.track__time_svg}>
							<use xlinkHref='img/icon/sprite.svg#icon-like' />
						</svg>
						<span className={styles.track__time_text}>2:22</span>
					</div>
				</div>
			</div>

			<div className={styles.playlist__item}>
				<div className={styles.playlist__track}>
					<div className={styles.track__title}>
						<div className={styles.track__title_image}>
							<svg className={styles.track__title_svg}>
								<use xlinkHref='img/icon/sprite.svg#icon-note' />
							</svg>
						</div>
						<div>
							<a className={styles.track__title_link} href='http://'>
								Non Stop <span className={styles.track__title_span} />
							</a>
						</div>
					</div>
					<div className={styles.track__author}>
						<a className={styles.track__author_link} href='http://'>
							Стоункат, Psychopath
						</a>
					</div>
					<div className={styles.track__album}>
						<a className={styles.track__album_link} href='http://'>
							Non Stop
						</a>
					</div>
					<div>
						<svg className={styles.track__time_svg}>
							<use xlinkHref='img/icon/sprite.svg#icon-like' />
						</svg>
						<span className={styles.track__time_text}>4:12</span>
					</div>
				</div>
			</div>

			<div className={styles.playlist__item}>
				<div className={styles.playlist__track}>
					<div className={styles.track__title}>
						<div className={styles.track__title_image}>
							<svg className={styles.track__title_svg}>
								<use xlinkHref='img/icon/sprite.svg#icon-note' />
							</svg>
						</div>
						<div>
							<a className={styles.track__title_link} href='http://'>
								Run Run <span className={styles.track__title_span} />
							</a>
						</div>
					</div>
					<div className={styles.track__author}>
						<a className={styles.track__author_link} href='http://'>
							Jaded, Will Clarke, AR/CO
						</a>
					</div>
					<div className={styles.track__album}>
						<a className={styles.track__album_link} href='http://'>
							Run Run
						</a>
					</div>
					<div>
						<svg className={styles.track__time_svg}>
							<use xlinkHref='img/icon/sprite.svg#icon-like' />
						</svg>
						<span className={styles.track__time_text}>2:54</span>
					</div>
				</div>
			</div>

			<div className={styles.playlist__item}>
				<div className={styles.playlist__track}>
					<div className={styles.track__title}>
						<div className={styles.track__title_image}>
							<svg className={styles.track__title_svg}>
								<use xlinkHref='img/icon/sprite.svg#icon-note' />
							</svg>
						</div>
						<div>
							<a className={styles.track__title_link} href='http://'>
								Eyes on Fire
								<span className={styles.track__title_span}>
									(Zeds Dead Remix)
								</span>
							</a>
						</div>
					</div>
					<div className={styles.track__author}>
						<a className={styles.track__author_link} href='http://'>
							Blue Foundation, Zeds Dead
						</a>
					</div>
					<div className={styles.track__album}>
						<a className={styles.track__album_link} href='http://'>
							Eyes on Fire
						</a>
					</div>
					<div>
						<svg className={styles.track__time_svg}>
							<use xlinkHref='img/icon/sprite.svg#icon-like' />
						</svg>
						<span className={styles.track__time_text}>5:20</span>
					</div>
				</div>
			</div>

			<div className={styles.playlist__item}>
				<div className={styles.playlist__track}>
					<div className={styles.track__title}>
						<div className={styles.track__title_image}>
							<svg className={styles.track__title_svg}>
								<use xlinkHref='img/icon/sprite.svg#icon-note' />
							</svg>
						</div>
						<div>
							<a className={styles.track__title_link} href='http://'>
								Mucho Bien
								<span className={styles.track__title_span}>
									(Hi Profile Remix)
								</span>
							</a>
						</div>
					</div>
					<div className={styles.track__author}>
						<a className={styles.track__author_link} href='http://'>
							HYBIT, Mr. Black, Offer Nissim, Hi Profile
						</a>
					</div>
					<div className={styles.track__album}>
						<a className={styles.track__album_link} href='http://'>
							Mucho Bien
						</a>
					</div>
					<div>
						<svg className={styles.track__time_svg}>
							<use xlinkHref='img/icon/sprite.svg#icon-like' />
						</svg>
						<span className={styles.track__time_text}>3:41</span>
					</div>
				</div>
			</div>

			<div className={styles.playlist__item}>
				<div className={styles.playlist__track}>
					<div className={styles.track__title}>
						<div className={styles.track__title_image}>
							<svg className={styles.track__title_svg}>
								<use xlinkHref='img/icon/sprite.svg#icon-note' />
							</svg>
						</div>
						<div>
							<a className={styles.track__title_link} href='http://'>
								How Deep Is Your Love
								<span className={styles.track__title_span} />
							</a>
						</div>
					</div>
					<div className={styles.track__author}>
						<a className={styles.track__author_link} href='http://'>
							Calvin Harris, Disciples
						</a>
					</div>
					<div className={styles.track__album}>
						<a className={styles.track__album_link} href='http://'>
							How Deep Is Your Love
						</a>
					</div>
					<div>
						<svg className={styles.track__time_svg}>
							<use xlinkHref='img/icon/sprite.svg#icon-like' />
						</svg>
						<span className={styles.track__time_text}>3:32</span>
					</div>
				</div>
			</div>

			<div className={styles.playlist__item}>
				<div className={styles.playlist__track}>
					<div className={styles.track__title}>
						<div className={styles.track__title_image}>
							<svg className={styles.track__title_svg}>
								<use xlinkHref='img/icon/sprite.svg#icon-note' />
							</svg>
						</div>
						<div>
							<a className={styles.track__title_link} href='http://'>
								Elektro <span className={styles.track__title_span} />
							</a>
						</div>
					</div>
					<div className={styles.track__author}>
						<a className={styles.track__author_link} href='http://'>
							Dynoro, Outwork, Mr. Gee
						</a>
					</div>
					<div className={styles.track__album}>
						<a className={styles.track__album_link} href='http://'>
							Elektro
						</a>
					</div>
					<div>
						<svg className={styles.track__time_svg}>
							<use xlinkHref='img/icon/sprite.svg#icon-like' />
						</svg>
						<span className={styles.track__time_text}>2:22</span>
					</div>
				</div>
			</div>

			<div className={styles.playlist__item}>
				<div className={styles.playlist__track}>
					<div className={styles.track__title}>
						<div className={styles.track__title_image}>
							<svg className={styles.track__title_svg}>
								<use xlinkHref='img/icon/sprite.svg#icon-note' />
							</svg>
						</div>
						<div>
							<a className={styles.track__title_link} href='http://'>
								Elektro <span className={styles.track__title_span} />
							</a>
						</div>
					</div>
					<div className={styles.track__author}>
						<a className={styles.track__author_link} href='http://'>
							Dynoro, Outwork, Mr. Gee
						</a>
					</div>
					<div className={styles.track__album}>
						<a className={styles.track__album_link} href='http://'>
							Elektro
						</a>
					</div>
					<div>
						<svg className={styles.track__time_svg}>
							<use xlinkHref='img/icon/sprite.svg#icon-like' />
						</svg>
						<span className={styles.track__time_text}>2:22</span>
					</div>
				</div>
			</div>

			<div className={styles.playlist__item}>
				<div className={styles.playlist__track}>
					<div className={styles.track__title}>
						<div className={styles.track__title_image}>
							<svg className={styles.track__title_svg}>
								<use xlinkHref='img/icon/sprite.svg#icon-note' />
							</svg>
						</div>
						<div>
							<a className={styles.track__title_link} href='http://'>
								Elektro <span className={styles.track__title_span} />
							</a>
						</div>
					</div>
					<div className={styles.track__author}>
						<a className={styles.track__author_link} href='http://'>
							Dynoro, Outwork, Mr. Gee
						</a>
					</div>
					<div className={styles.track__album}>
						<a className={styles.track__album_link} href='http://'>
							Elektro
						</a>
					</div>
					<div>
						<svg className={styles.track__time_svg}>
							<use xlinkHref='img/icon/sprite.svg#icon-like' />
						</svg>
						<span className={styles.track__time_text}>2:22</span>
					</div>
				</div>
			</div>

			<div className={styles.playlist__item}>
				<div className={styles.playlist__track}>
					<div className={styles.track__title}>
						<div className={styles.track__title_image}>
							<svg className={styles.track__title_svg}>
								<use xlinkHref='img/icon/sprite.svg#icon-note' />
							</svg>
						</div>
						<div>
							<a className={styles.track__title_link} href='http://'>
								Elektro <span className={styles.track__title_span} />
							</a>
						</div>
					</div>
					<div className={styles.track__author}>
						<a className={styles.track__author_link} href='http://'>
							Dynoro, Outwork, Mr. Gee
						</a>
					</div>
					<div className={styles.track__album}>
						<a className={styles.track__album_link} href='http://'>
							Elektro
						</a>
					</div>
					<div>
						<svg className={styles.track__time_svg}>
							<use xlinkHref='img/icon/sprite.svg#icon-like' />
						</svg>
						<span className={styles.track__time_text}>2:22</span>
					</div>
				</div>
			</div>
		</div>
	)
}
