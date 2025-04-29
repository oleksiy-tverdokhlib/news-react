import React from 'react'
import styles from './LatestNews.module.css'
import BannersList from '../BannersList/BannersList'
import BannerListWithSkeleton from '../BannersList/BannersList'
import { useFetch } from '../../helpers/hooks/useFetch'
import { getLatestNews } from '../../api/apiNews'

const LatestNews = () => {
	const { data, isLoading } = useFetch(getLatestNews)

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
