import { categoriesApi } from '@/entities/category/api/api'
import { newsApi } from '@/entities/news/api/api'
import { newsSlice } from '@/entities/news/model/slice'
import { combineReducers } from '@reduxjs/toolkit'

export const rootReducer = combineReducers({
	news: newsSlice.reducer,
	[newsApi.reducerPath]: newsApi.reducer,
	[categoriesApi.reducerPath]: categoriesApi.reducer,
})
