import { ThemeProvider } from '@/app/providers/ThemeProvider'
import '@/shared/index.css'
import React from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { RouterProvider } from 'react-router-dom'
import { store } from './appStore'
import { appRouter } from './appRouter'

createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<Provider store={store}>
			<ThemeProvider>
				<RouterProvider router={appRouter} />
			</ThemeProvider>
		</Provider>
	</React.StrictMode>
)
