import { useState } from "react";
import Home from "./Home";
import Landing from "./Landing";
import SearchBar from "./SearchBar";

function App() {
  const [city, setCity] = useState(null);
	const [firstLoad, setFirstLoad] = useState(true);

  function handleSubmit(e) {
    e.preventDefault();
		setCity(e.target[0].value);
		setFirstLoad(false);
  }

	function goBack() {
		setFirstLoad(true);
		setCity(null);
		document.getElementsByName("city")[0].value = "";
	}

  return (
		<div className="body-wrap d-flex justify-center align-center">
			<div className="main d-flex-col">
				<div className="d-flex">
					{ !firstLoad && <button className="go-back btn" onClick={goBack}>Back</button>}
					<SearchBar handleSubmit={handleSubmit} />
				</div>
				{ firstLoad && <Landing />}
				{ city && <Home city={city} />}
			</div>
		</div>
  );
}

export default App;
