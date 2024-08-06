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
