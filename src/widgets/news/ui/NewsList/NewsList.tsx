import NewsItem from '@/entities/news/ui/NewsItem/NewsItem'
import Skeleton from '@/shared/ui/Skeleton/Skeleton'
import withSkeleton from '@/shared/HOCs/withSkeleton'
import { INews } from '@/entities/news'


interface Props {
	news?: INews[]
}

const NewsList = ({ news }: Props) => {
	return (
		<ul>
			{news === undefined ? (
				<Skeleton type="item" count={10} />
			) : (
				news?.map((item) => {
					return <NewsItem key={item.id} item={item} />
				})
			)}
		</ul>
	)
}

const NewsListWithSkeleton = withSkeleton<Props>(NewsList, 'item', 10)

export default NewsListWithSkeleton
