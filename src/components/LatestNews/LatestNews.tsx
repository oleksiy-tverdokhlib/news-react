import { useGetLatestNewsQuery } from '@/store/services/newsApi'
import BannerListWithSkeleton from '../BannersList/BannersList'
import styles from './LatestNews.module.css'

const LatestNews = () => {
	const { data, isLoading } = useGetLatestNewsQuery(null)
	return (
		<section className={styles.section}>
			<BannerListWithSkeleton
				banners={data && data.news}
				isLoading={isLoading}
			/>
		</section>
	)
}

export default LatestNews
