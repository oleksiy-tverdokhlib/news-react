import { useTheme } from '@/context/ThemeContext'
import { IPaginationProps } from '../../interfaces'
import styles from './Pagination.module.css'

const Pagination = ({
	totalPages,
	handleNextPage,
	handlePreviousPage,
	handlePageClick,
	currentPage,
}: IPaginationProps) => {
	const { isDark } = useTheme()
	return (
		<div
			className={`${styles.pagination} ${isDark ? styles.dark : styles.light}`}
		>
			<button
				className={styles.arrow}
				disabled={currentPage <= 1}
				onChange={handleNextPage}
			>
				{'<'}
			</button>

			<div className={styles.list}>
				{[...Array(totalPages)].map((_, index) => {
					return (
						<button
							className={styles.pageNumber}
							key={index}
							disabled={index + 1 === currentPage}
							onClick={() => handlePageClick(index + 1)}
						>
							{index + 1}
						</button>
					)
				})}
			</div>

			<button
				className={styles.arrow}
				disabled={currentPage >= totalPages}
				onChange={handlePreviousPage}
			>
				{'>'}
			</button>
		</div>
	)
}

export default Pagination
