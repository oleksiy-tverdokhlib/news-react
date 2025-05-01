import { useEffect, useState } from 'react'

interface FetchFunction<P, T> {
	(params?: P): Promise<T>
}

interface useFetchResult<T> {
	data: T | null | undefined
	isLoading: boolean
	error: Error | null
}

export const useFetch = <P, T>(
	fetchFunction: FetchFunction<P, T>,
	params?: P
): useFetchResult<T> => {
	const [data, setData] = useState<T | null>(null)
	const [isLoading, setIsLoading] = useState<boolean>(true)
	const [error, setError] = useState<Error | null>(null)

	const stringParams = params ? new URLSearchParams(params).toString() : ''

	useEffect(() => {
		;(async () => {
			try {
				setIsLoading(true)
				// const response = await fetchFunction(params)

				// setData(response)
			} catch (err) {
				setError(err as Error)
			} finally {
				setIsLoading(false)
			}
		})()
	}, [fetchFunction, stringParams])

	return { data, isLoading, error }
}
