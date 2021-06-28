import { BrowserRouter as Router } from "react-router-dom";
import Page from "./Components/page";
function App() {
	return (
		<Router>
			<div className="App">
				<Page />
			</div>
		</Router>
	);
}

export default App;
