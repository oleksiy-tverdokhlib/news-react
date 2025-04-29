import React from 'react'
import styles from './LatestNews.module.css'
import BannersList from '../BannersList/BannersList'
import BannerListWithSkeleton from '../BannersList/BannersList'

const LatestNews = ({ banners, isLoading }) => {
	return (
		<section className={styles.section}>
			<BannerListWithSkeleton banners={banners} isLoading={isLoading} />
		</section>
	)
}

export default LatestNews
