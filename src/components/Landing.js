import MediaQuery from "react-responsive";

const Landing = () => {
	return (
		<div className="landing container">
			<h1>Weather forecast for your city</h1>
			<MediaQuery minWidth={951}>
				<h2><span className="light">developed in</span> React.JS <span className="light">by</span> <a href="https://github.com/auung">Aung Khant Kyaw</a></h2>
			</MediaQuery>
			<MediaQuery maxWidth={950}>
				<h2><span className="light">developed in</span> React.JS<br/><span className="light">by </span><a href="https://github.com/auung">Aung Khant Kyaw</a></h2>
			</MediaQuery>
		</div>
	);
}

export default Landing;