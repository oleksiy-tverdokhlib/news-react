import React, { forwardRef } from 'react'
import styles from './Categories.module.css'

const Categories = forwardRef(
	({ categories, setSelectedCategory, selectedCategory }, ref) => {
		return (
			<div ref={ref} className={styles.categories}>
				<button
					onClick={() => setSelectedCategory(null)}
					disabled={selectedCategory === 'All'}
					className={!selectedCategory ? styles.active : styles.item}
				>
					All
				</button>

				{categories.map((category) => {
					return (
						<button
							onClick={() => setSelectedCategory(category)}
							disabled={selectedCategory === category}
							className={
								selectedCategory === category ? styles.active : styles.item
							}
							key={category}
						>
							{category}
						</button>
					)
				})}
			</div>
		)
	}
)

Categories.displayName = 'Categories'

export default Categories
