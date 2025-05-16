import { Main } from '@/pages/main/ui'
import { NewsPage } from '@/pages/news'
import { createBrowserRouter } from 'react-router'
import BaseLayout from './layouts/BaseLayout'

export const appRouter = createBrowserRouter([
	{
		element: <BaseLayout />,
		errorElement: <div>Error</div>,
		children: [
			{ path: '/', element: <Main /> },
			{ path: '/news/:id', element: <NewsPage /> },
		],
	},
])
