import { getIcon, roundTemp } from "../hooks/utilHooks";

const CardList = ({ data, handleClick }) => {
	return (
		<div className="card-wrap d-flex">
			{data.list.map((i, index) => {
				const id = index;
				const timestamp = new Date(i.dt * 1000);
				const day = timestamp.toLocaleString("en-us", {weekday: "long"});
				const date = timestamp.toLocaleString("en-uk", {
					day: "2-digit",
					month: "2-digit",
					year: "2-digit"
				});
				const icon = i.weather[0].description;

				return (
					<div className="card container d-flex-col align-center"  key={id} onClick={(e) => handleClick(i, e)}>
						<div className="day-date-wrap">
							<h3 className="day">{ day }</h3>
							<p className="date">{ date }</p>
						</div>
						<div className="icon-cond-wrap d-flex justify-center align-center">
							<img src={getIcon(icon)} alt="weather-icon" />
							<p className="temp light">{ roundTemp(i.main.feels_like) }°</p>
						</div>
						<p className="cond">{ i.weather[0].description }</p>
					</div>
				)
			})}
		</div>
	);
}

export default CardList;