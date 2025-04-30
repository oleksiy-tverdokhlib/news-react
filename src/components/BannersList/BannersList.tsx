import styles from './BannersList.module.css'
import withSkeleton from '../../helpers/HOCs/withSkeleton'
import NewsBanner from '../NewsBanner/NewsBanner'
import Skeleton from '../Skeleton/Skeleton'
import { INews } from '../../interfaces'

interface Props {
	banners?: INews[] | null
}

const BannersList = ({ banners }: Props) => {
	return (
		<ul className={banners ? styles.banners : undefined}>
			{banners == undefined ? (
				<Skeleton type="banner" count={20} direction="row" />
			) : (
				banners?.map((banner) => {
					return <NewsBanner key={banner.id} item={banner} />
				})
			)}
		</ul>
	)
}

const BannerListWithSkeleton = withSkeleton<Props>(BannersList, 'banner', 20, 'row')

export default BannerListWithSkeleton
