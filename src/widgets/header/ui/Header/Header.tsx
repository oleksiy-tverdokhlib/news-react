import { useTheme } from '@/app/providers/ThemeProvider'
import { ThemeButton } from '@/features/theme'
import { formDate } from '@/shared/helpers/formatDate'
import { Link } from 'react-router-dom'
import styles from './Header.module.css'

const Header = () => {
	const { isDark } = useTheme()

	return (
		<header
			className={`${styles.header} ${isDark ? styles.dark : styles.light}`}
		>
			<div className={styles.info}>
				<Link to="/">
					<h1 className={styles.title}>NEWS APP</h1>
				</Link>

				<p className={styles.date}>{formDate(new Date())}</p>
			</div>
			<ThemeButton />
		</header>
	)
}

export default Header
