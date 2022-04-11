import { BrowserRouter } from "react-router-dom";
import Router from "./routes/Router";
// Redux
import { Provider } from "react-redux";
import store from "./redux/Store";

function App() {
	return (
		<BrowserRouter>
			<Provider store={store}>
				<Router />
			</Provider>
		</BrowserRouter>
	);
}

export default App;
