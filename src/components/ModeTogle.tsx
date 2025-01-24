'use client'

import { useModeStore } from '@/context/ThemeProvider'
import { Classic } from '@theme-toggles/react'
import '@theme-toggles/react/css/Classic.css'
import React from 'react'

interface DarkModeToggleProps {
	size?: number
}

const DarkModeToggle: React.FC<DarkModeToggleProps> = ({ size = 1 }) => {
	const { isDark, toggleTheme } = useModeStore(s => s)

	return (
		/* @ts-expect-error - `Classic` component is badly typed */
		<Classic
			className={`text-[${size}rem]`}
			duration={750}
			toggle={toggleTheme}
			toggled={isDark}
		/>
	)
}

export default DarkModeToggle
