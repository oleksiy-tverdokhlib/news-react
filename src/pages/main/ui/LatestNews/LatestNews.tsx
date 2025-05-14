import BannerListWithSkeleton from '@/widgets/news/ui/BannersList/BannersList'

import styles from './LatestNews.module.css'
import { useGetLatestNewsQuery } from '@/entities/news/api/api'

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
