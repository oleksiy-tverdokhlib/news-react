import { INews, NewsCard } from '@/entities/news'
import withSkeleton from '@/shared/HOCs/withSkeleton'
import styles from './NewsList.module.css'

interface Props {
	news?: INews[]
	type?: 'banner' | 'item'
	direction?: 'row' | 'column'
}

const NewsList = ({ news, type = 'item' }: Props) => {
	return (
		<ul className={`${type === 'item' ? styles.items : styles.banners}`}>
			{news?.map((item) => {
				return <NewsCard key={item.id} item={item} type={type} />
			})}
		</ul>
	)
}

const NewsListWithSkeleton = withSkeleton<Props>(NewsList, 10)

export default NewsListWithSkeleton
