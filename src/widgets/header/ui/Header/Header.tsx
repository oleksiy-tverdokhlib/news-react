import { useTheme } from '@/app/providers/ThemeProvider'
import { ThemeButton } from '@/features/theme'
import { formDate } from '@/shared/helpers/formatDate'
import styles from './Header.module.css'

const Header = () => {
	const { isDark } = useTheme()
	return (
		<header
			className={`${styles.header} ${isDark ? styles.dark : styles.light}`}
		>
			<div className={styles.info}>
				<h1 className={styles.title}>NEWS APP</h1>
				<p className={styles.date}>{formDate(new Date())}</p>
			</div>
			<ThemeButton />
		</header>
	)
}

export default Header
