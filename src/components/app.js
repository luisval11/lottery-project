import { Router } from "preact-router";
// Code-splitting is automated for `routes` directory
import Home from "../routes/home";

const App = () => (
	<div id="app" className="app">
		<Router>
			<Home path="/" />
		</Router>
	</div>
);

export default App;
