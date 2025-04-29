import React from 'react'
import styles from './BannersList.module.css'
import withSkeleton from '../../helpers/HOCs/withSkeleton'
import NewsBanner from '../NewsBanner/NewsBanner'
import Skeleton from '../Skeleton/Skeleton'

const BannersList = ({ banners }) => {
	return (
		<ul className={banners == undefined ? null : styles.banners}>
			{banners == undefined ? (
				<Skeleton type="banner" count={30} direction="row" />
			) : (
				banners?.map((banner) => {
					return <NewsBanner key={banner.id} item={banner} />
				})
			)}
		</ul>
	)
}

const BannerListWithSkeleton = withSkeleton(BannersList, 'banner', 30, 'row')

export default BannerListWithSkeleton
