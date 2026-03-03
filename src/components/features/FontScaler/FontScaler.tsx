'use client'

import { useEffect, useCallback } from 'react'

interface FontScalerProps {
	isFullScreen?: boolean
}

export const FontScaler = ({ isFullScreen = false }: FontScalerProps) => {
	const handleResize = useCallback(() => {
		if (typeof window === 'undefined' || isFullScreen) return

		const width = window.innerWidth
		const height = window.innerHeight
		const maxScale = 1
		let scale = 1

		if (width <= 480) {
			scale = 1
		} else if (width <= 1054) {
			const widthRatio = width / 1054
			const heightRatio = height / 1405
			scale = Math.min(widthRatio, heightRatio, maxScale)
		} else {
			const widthRatio = width / 1920
			const heightRatio = height / 1080
			scale = Math.min(widthRatio, heightRatio, maxScale)
		}

		const safeFontSize = scale * 100

		document.documentElement.style.setProperty('font-size', `${safeFontSize}px`)

		window.dispatchEvent(new CustomEvent('font-resize', { detail: { scale } }))
	}, [isFullScreen])

	useEffect(() => {
		handleResize()

		window.addEventListener('resize', handleResize)
		window.addEventListener('orientationchange', handleResize)

		return () => {
			window.removeEventListener('resize', handleResize)
			window.removeEventListener('orientationchange', handleResize)
		}
	}, [handleResize])

	return null
}
