'use client'

import { routes } from '@/lib/routes'
import { useAppSelector } from '@/store/store'
import { useRouter } from 'next/navigation'
import React, { PropsWithChildren, useEffect } from 'react'

export default function PrivateRoute({ children }: PropsWithChildren) {
	const router = useRouter()
	const { user, tokens } = useAppSelector(state => state.user)

	useEffect(() => {
		if (!user || !tokens) {
			router.push(routes.LOGIN)
		}
	}, [user, tokens])

	return <>{children}</>
}
