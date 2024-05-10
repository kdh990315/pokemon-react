import { useCallback, useEffect, useState } from "react"

const useHttpRequest = async (url, option = {}) => {
	const [data, setData] = useState(null);
	const [error, setError] = useState(null);
	const [isLoading, setIsLoading] = useState(false);

	const fetchData = useCallback( async () => {
		setIsLoading(true);

		try {
			const response = await fetch(url, option)

			if(!response.ok) {
				throw new Error('오류가 발생했습니다. fetchData');
			};

			const responseData = await response.json();
			setData(responseData);
		} catch (error) {
			setError(error.message);
		} finally {
			setIsLoading(false);
		}
	}, [url, option]);

	useEffect(() => {
		fetchData();
	}, [fetchData]);
	
	return {
		data,
		error,
		isLoading
	};
};

export default useHttpRequest;
