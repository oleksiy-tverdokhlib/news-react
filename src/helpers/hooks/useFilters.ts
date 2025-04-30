import { useState } from 'react'
import { PAGE_SIZE } from '../../constants/constants'
import { IfStatement } from 'typescript'
import { IFilters } from '../../interfaces'

export const useFilters = (initialFilters: IFilters) => {
	const [filters, setFilters] = useState<IFilters>(initialFilters)

	const changeFilter = (key: string, value: string | null | number) => {
		setFilters((prev) => {
			return { ...prev, [key]: value }
		})
	}

	return { filters, changeFilter }
}
