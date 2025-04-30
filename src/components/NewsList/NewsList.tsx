import React from 'react'
import NewsItem from '../NewsItem/NewsItem'
import withSkeleton from '../../helpers/HOCs/withSkeleton'
import Skeleton from '../Skeleton/Skeleton'
import { INews } from '../../interfaces'

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
