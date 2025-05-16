import { useGetLatestNewsQuery } from '@/entities/news/api/api'
import { NewsList } from '@/widgets/news'
import styles from './LatestNews.module.css'
import { INews } from '@/entities/news'
import { useAppDispatch } from '@/app/appStore'
import { setCurrentNews } from '@/entities/news/model/slice'
import { useNavigate } from 'react-router-dom'

const LatestNews = () => {
	const { data, isLoading } = useGetLatestNewsQuery(null)
	const navigate = useNavigate()
	const dispatch = useAppDispatch()

	const navigateTo = (news: INews) => {
		dispatch(setCurrentNews(news))
		navigate(`/news/${news.id}`)
	}

	return (
		<section className={styles.section}>
			<NewsList
				type="banner"
				direction="row"
				news={data && data.news}
				isLoading={isLoading}
				viewNewsSlot={(news: INews) => (
					<p onClick={() => navigateTo(news)}>view more...</p>
				)}
			/>
		</section>
	)
}

export default LatestNews
