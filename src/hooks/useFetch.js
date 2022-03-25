import { useState, useEffect } from "react";

const useFetch = (url, city) => {
	const [data, setData] = useState(null)
	const [error, setError] = useState(null);
	const [isPending, setIsPending] = useState(true);

	useEffect(() => {
		fetch(url, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				"city": city
			}),
		})
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
				// err.json()
				// 	.then(body => {
				// 	setData(null);
				// 	setError((body.message === "city not found") ? "Your city does not exist :(" : body.message)
				// 	setIsPending(false);
				// });
				setData(null);
				setError((err.message === "city not found") ? "Your city does not exist :(" : err.message);
				setIsPending(false);
			})
	}, [url, city])

	return {data, error, isPending};
}

export default useFetch;