import { getIcon } from "../hooks/utilHooks";
import { Fragment } from "react";
import MediaQuery from "react-responsive";

const Details = ({ data }) => {
	const temp = data.main.feels_like;

	return (
		<Fragment>
			<div className="weather d-flex align-center">
				<div className="d-flex align-center">
					<div className="weather-icon">
						<img src={getIcon(data.weather[0].description)} alt="weather-icon" />
					</div>
					<div className="d-flex-col justify-center">
						<span className="weather-temp light">{temp}°C</span>
						<p className="weather-cond">{data.weather[0].description}</p>
					</div>
				</div>
			</div>
			<div className="misc-stats d-flex-col justify-center">
				<MediaQuery minWidth={1401}>
					<div className="misc-stats-wrap">
						<h3>Humidity</h3>
						<p className="light">{ data.main.humidity}%</p>
					</div>
					<div className="misc-stats-wrap">
						<h3>Wind Speed</h3>
						<p  className="light">{ data.wind.speed} m/s</p>
					</div>
				</MediaQuery>
				<MediaQuery maxWidth={1400}>
					<table>
						<tr>
							<th><h3>Humidity</h3></th>
							<td><p className="light">{ data.main.humidity}%</p></td>
						</tr>
						<tr>
							<th><h3>Wind Speed</h3></th>
							<td><p  className="light">{ data.wind.speed} m/s</p></td>
						</tr>
					</table>
				</MediaQuery>	
			</div>
		</Fragment>
	);
}

export default Details;