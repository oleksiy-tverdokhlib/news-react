import { useGetLatestNewsQuery } from '@/entities/news/api/api'
import { NewsList } from '@/widgets/news'
import styles from './LatestNews.module.css'

const LatestNews = () => {
	const { data, isLoading } = useGetLatestNewsQuery(null)
	return (
		<section className={styles.section}>
			<NewsList
				type="banner"
				direction="row"
				news={data && data.news}
				isLoading={isLoading}
			/>
		</section>
	)
}

export default LatestNews
