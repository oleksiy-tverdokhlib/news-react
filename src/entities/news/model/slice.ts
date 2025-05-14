import { PAGE_SIZE } from '@/shared/constants/constants'
import { IFilters } from '@/shared/interfaces'
import type { PayloadAction } from '@reduxjs/toolkit'
import { createSlice } from '@reduxjs/toolkit'
import { INews } from './types'

interface State {
	news: INews[]
	filters: IFilters
}

const initialState: State = {
	news: [],
	filters: {
		page_number: 1,
		page_size: PAGE_SIZE,
		category: null,
		keywords: '',
	},
}

export const newsSlice = createSlice({
	name: 'news',
	initialState,
	reducers: {
		setNews: (state, { payload }: PayloadAction<INews[]>) => {
			state.news = payload
		},
		setFilters: (
			state,
			{ payload }: PayloadAction<{ key: string; value: string | null | number }>
		) => {
			const { key, value } = payload
			state.filters = { ...state.filters, [key]: value }
		},
	},
})

export const { setNews, setFilters } = newsSlice.actions

export default newsSlice.reducer
