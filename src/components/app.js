import { Router } from "preact-router";
import Home from "../routes/pages/Home";

const App = () => (
	<div id="app" className="app">
		<Router>
			<Home path="/" />
		</Router>
	</div>
);

export default App;
