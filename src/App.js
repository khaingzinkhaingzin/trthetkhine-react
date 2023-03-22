import '../node_modules/bootstrap/dist/css/bootstrap.css';
import "./App.css";
import ListDemo from "./components/ListDemo";
// import ConditionalRendering from "./components/ConditionalRendering";
// import HelloWorld from "./components/HelloWorld";

function App() {
  	return (
    	<div className="App">
			Hello From Main React

			{/* <HelloWorld/> */}
			{/* <ConditionalRendering/> */}
			<ListDemo/>
    	</div>
  	);
}

export default App;