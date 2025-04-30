import React from 'react'
import styles from './Search.module.css'

interface Props {
	keywords: string
	setKeywords: (keywords: string) => void
}

const Search = ({ keywords, setKeywords }: Props) => {
	return (
		<div className={styles.search}>
			<input
				type="text"
				value={keywords}
				className={styles.input}
				onChange={(e) => setKeywords(e.target.value)}
				placeholder="JavaScript"
			/>
		</div>
	)
}

export default Search
