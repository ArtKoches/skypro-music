import Main from '@/components/Main/Main'
import PrivateRoute from '@/components/PrivateRoute/PrivateRoute'

export default function Home() {
	return (
		<>
			<PrivateRoute>
				<Main />
			</PrivateRoute>
		</>
	)
}
