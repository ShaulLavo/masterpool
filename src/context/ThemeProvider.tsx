'use client'

import React from 'react'
import { createStore, StoreApi, useStore } from 'zustand'

interface ModeState {
	isDark: boolean
	toggleTheme: () => void
	setTheme: (theme: 'dark' | 'light') => void
	init: () => void
}

export const THEME_KEY = 'masterPool_Theme'

const ModeContext = React.createContext<StoreApi<ModeState> | null>(null)

const createModeStore = () =>
	createStore<ModeState>((set, get) => ({
		isDark: false,
		toggleTheme() {
			const current = get().isDark
			const newTheme = current ? 'light' : 'dark'
			set({ isDark: !current })
			document.documentElement.classList.toggle('dark', !current)
			document.documentElement.classList.toggle('light', current)
			document.documentElement.style.colorScheme = newTheme

			localStorage.setItem(THEME_KEY, newTheme)
		},
		setTheme(theme: 'dark' | 'light') {
			const shouldBeDark = theme === 'dark'
			set({ isDark: shouldBeDark })
			document.documentElement.classList.toggle('dark', shouldBeDark)
			document.documentElement.classList.toggle('light', !shouldBeDark)
			document.documentElement.style.colorScheme = theme

			localStorage.setItem(THEME_KEY, theme)
		},
		init() {
			if (typeof window === 'undefined') return
			const theme =
				localStorage.getItem(THEME_KEY) === 'dark' ? 'dark' : 'light'
			console.log('mode store initialized:', theme)
			set({ isDark: theme === 'dark' })
			document.documentElement.classList.toggle('dark', theme === 'dark')
			document.documentElement.classList.toggle('light', theme === 'light')
			document.documentElement.style.colorScheme = theme
		}
	}))

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
	const [store] = React.useState(() => {
		const store = createModeStore()
		store.getState().init()
		return store
	})

	return <ModeContext.Provider value={store}>{children}</ModeContext.Provider>
}

export const useModeStore = <T,>(selector: (state: ModeState) => T) => {
	const store = React.useContext(ModeContext)
	if (!store) {
		throw new Error('Missing ModeProvider')
	}
	return useStore(store, selector)
}
