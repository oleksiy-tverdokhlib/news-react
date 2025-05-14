import React from 'react'
import PaginationsButtons from '../PaginationsButtons/PaginationsButtons'
import { IPaginationProps } from '../../model/types'

interface Props {
	top?: boolean
	bottom?: boolean
	children: React.ReactNode
}

const Pagination = ({
	top,
	bottom,
	children,
	...paginationProps
}: Props & IPaginationProps) => {
	return (
		<>
			{top && <PaginationsButtons {...paginationProps} />}
			{children}
			{bottom && <PaginationsButtons {...paginationProps} />}
		</>
	)
}

export default Pagination
