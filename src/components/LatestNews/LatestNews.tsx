import React from 'react'
import styles from './LatestNews.module.css'
import BannerListWithSkeleton from '../BannersList/BannersList'
import { useFetch } from '../../helpers/hooks/useFetch'
import { getLatestNews } from '../../api/apiNews'
import { NewsApiResponse } from './../../interfaces/index'

const LatestNews = () => {
	const { data, isLoading } = useFetch<undefined, NewsApiResponse>(
		getLatestNews
	)

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
