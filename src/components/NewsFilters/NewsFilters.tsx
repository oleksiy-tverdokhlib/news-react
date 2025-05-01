import { useAppDispatch } from '@/store'
import { useGetCategoriesQuery } from '@/store/services/newsApi'
import { setFilters } from '@/store/slices/newsSlice'
import { IFilters } from '../../interfaces'
import Categories from '../Categories/Categories'
import Search from '../Search/Search'
import Slider from '../Slider/Slider'
import styles from './NewsFilters.module.css'

interface Props {
	filters: IFilters
}

const NewsFilters = ({ filters }: Props) => {
	const { data } = useGetCategoriesQuery(null)
	const dispatch = useAppDispatch()

	return (
		<div className={styles.filters}>
			{data ? (
				<Slider>
					<Categories
						categories={data.categories}
						selectedCategory={filters.category}
						setSelectedCategory={(category) => {
							dispatch(setFilters({ key: 'category', value: category }))
						}}
					/>
				</Slider>
			) : null}

			<Search
				keywords={filters.keywords}
				setKeywords={(keywords) => {
					dispatch(setFilters({ key: 'keywords', value: keywords }))
				}}
			/>
		</div>
	)
}

export default NewsFilters
