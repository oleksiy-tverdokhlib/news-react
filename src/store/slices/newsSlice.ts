import { PAGE_SIZE } from '@/constants/constants'
import { IFilters, INews } from '@/interfaces'
import type { PayloadAction } from '@reduxjs/toolkit'
import { createSlice } from '@reduxjs/toolkit'

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
