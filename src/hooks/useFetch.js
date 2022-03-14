import { useState, useEffect } from "react";

const useFetch = (url) => {
	const [data, setData] = useState(null)
	const [error, setError] = useState(null);
	const [isPending, setIsPending] = useState(true);

	useEffect(() => {
		fetch(url)
			.then(res => {
				setData(null);
				setIsPending(true);
				if (!res.ok) {
					throw res;
				}
				return res.json();
			})
			.then(res => {
				setData({city: res.city.name, list: res.list.filter(i => new RegExp(/06:00:00/).test(i.dt_txt))});
				setError(null);
				setIsPending(false);
			})
			.catch(err => {
				err.json().then(body => {
					setData(null);
					setError((body.message === "city not found") ? "Your city does not exist :(" : body.message)
					setIsPending(false);
				});
			})
	}, [url])

	return {data, error, isPending};
}

export default useFetch;