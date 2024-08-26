'use client'

import { routes } from '@/lib/routes'
import { useAppSelector } from '@/store/store'
import { useRouter } from 'next/navigation'
import React, { PropsWithChildren, useEffect } from 'react'

export default function PrivateRoute({ children }: PropsWithChildren) {
	const router = useRouter()
	const { user } = useAppSelector(state => state.user)

	useEffect(() => {
		if (!user) {
			router.push(routes.LOGIN)
		}
	}, [user])

	return <>{children}</>
}
