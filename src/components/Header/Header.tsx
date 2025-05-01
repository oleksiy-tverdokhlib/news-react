import { themeIcons } from '@/assets'
import { useTheme } from '@/context/ThemeContext'
import { formDate } from '../../helpers/formatDate'
import styles from './Header.module.css'

const Header = () => {
	const { isDark, toggleTheme } = useTheme()
	return (
		<header
			className={`${styles.header} ${isDark ? styles.dark : styles.light}`}
		>
			<div className={styles.info}>
				<h1 className={styles.title}>NEWS APP</h1>
				<p className={styles.date}>{formDate(new Date())}</p>
			</div>
			<img
				src={isDark ? themeIcons.light : themeIcons.dark}
				width={30}
				alt="theme"
				onClick={toggleTheme}
			/>
		</header>
	)
}

export default Header
