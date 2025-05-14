import { ThemeProvider } from '@/app/providers/ThemeProvider'
import '@/shared/index.css'
import React from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { store } from './appStore'
import BaseLayout from './layouts/BaseLayout'

createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<Provider store={store}>
			<ThemeProvider>
				<BaseLayout />
			</ThemeProvider>
		</Provider>
	</React.StrictMode>
)
