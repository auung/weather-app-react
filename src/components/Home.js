import Details from "./Details";
import CardList from "./CardList";
import useFetch from "../hooks/useFetch";
import { formatCity } from "../hooks/utilHooks";
import { useState, useEffect, Fragment } from "react";

const Home = ({ city }) => {
	const {data, error, isPending} = useFetch("http://localhost:4000/weather-data", formatCity(city));
	const [detailsData, setDetails] = useState(null);
	const [firstSearch, setFirstSearch] = useState(true);
	let date = null;

	if (detailsData) {
		date = new Date(detailsData.dt * 1000).toLocaleString("en-us", {
			month: "long",
			day: "numeric",
			year: "numeric"
		})
	}

	function handleClick(data, e) {
		const selected = document.getElementsByClassName("selected")[0];
		if (selected) {
			selected.classList.remove("selected");
		}
		e.currentTarget.classList.add("selected");
		setDetails(data);
		setFirstSearch(false);
	}

	useEffect(() => {
		setDetails(null);
		setFirstSearch(true);
	}, [data])

	return (
		<Fragment>
			{ error &&
				<div className="error container">
					<h2>{ error }</h2>
				</div>
			}
			{ isPending && <div className="loading-animation"></div>}
			{ data &&
				<div className="details-card-wrap d-flex-col">
					<div className="details container d-flex">
						<div className="city d-flex-col justify-center align-center">
							<h2 className="light">{data.city}</h2>
							{ date &&
								<h3 className="light">{date}</h3>
							}
						</div>
						{ firstSearch &&
							<div className="first-search">Tap a card to see details for that day</div>
						}
						{ detailsData && <Details data={detailsData} />}
					</div>
					<CardList data={data} handleClick={handleClick} />
				</div>
			}
		</Fragment>
	);
}

export default Home;