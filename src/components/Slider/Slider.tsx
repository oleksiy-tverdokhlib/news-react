import React, { useRef } from 'react'
import styles from './Slider.module.css'
import { useTheme } from '@/context/ThemeContext'

interface Props {
	children: React.ReactElement<{ ref: React.Ref<HTMLElement | null> }>
	step?: number
}

const Slider = ({ children, step = 150 }: Props) => {
	const { isDark } = useTheme()

	const sliderRef = useRef<HTMLElement | null>(null)

	const scrollLeft = () => {
		if (!sliderRef.current) return
		sliderRef.current.scrollLeft -= step
	}

	const scrollRight = () => {
		if (!sliderRef.current) return
		sliderRef.current.scrollLeft += step
	}

	return (
		<div className={`${styles.slider} ${isDark ? styles.dark : styles.light}`}>
			<button onClick={scrollLeft} className={styles.arrow}>
				{'<'}
			</button>
			{React.cloneElement(children, { ref: sliderRef })}
			<button onClick={scrollRight} className={styles.arrow}>
				{'>'}
			</button>
		</div>
	)
}

export default Slider
