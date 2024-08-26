export type tracksDataTypes = {
	_id: number
	name: string
	author: string
	release_date: string
	genre: string[]
	duration_in_seconds: number
	album: string
	logo: { type: string; data: unknown[] }
	track_file: string
	staredUser: number[]
}

export enum filterTypes {
	author = 'исполнителю',
	year = 'году выпуска',
	genre = 'жанру',
}

export type UserDataType = {
	email: string
	username: string
	_id: number
}

export type SignInDataType = {
	email: string
	password: string
}

export type SignUpDataType = {
	email: string
	password: string
	username: string
}
