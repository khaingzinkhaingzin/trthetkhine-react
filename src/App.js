import '../node_modules/bootstrap/dist/css/bootstrap.css';
import "./App.css";
import ToDoWithReducer from './components/reducer/ToDoWithReducer';
// import CustomReducer from './components/reducer/CustomReducer';
// import ReducerCounter from './components/reducer/ReducerCounter';
// import ContextDemo from './components/context/ContextDemo';
// import ValidationSchemaExample from './components/formik/ValidationSchemaExample';
// import SignupForm from './components/formik/SignupForm';
// import DeclarativeUI from './components/DeclarativeUI';
// import Tab from './components/Tab';
// import ToDoListEventDemo from './components/interaction/ToDoListEventDemo';
// import InputDemo from './components/stateful/InputDemo';
// import UseImmerForNestedObjRender from './components/stateful/UseImmerForNestedObjRender';
// import BatchesCounter from './components/stateful/BatchesCounter';
// import RerenderIssue from './components/stateful/RerenderIssue';
// import Counter from './components/stateful/Counter';
// import SnapShotCounter from './components/stateful/SnapShotCounter';
// import ToDoListEventDemo from './components/interaction/ToDoListEventDemo';
// import {ParentEvent} from './components/interaction/EventDemo';
// import GrayBorder from './components/GrayBorder';
// import JsxProperty from './components/JsxProperty';
// import RenderWithCondition from './components/RenderWithCondition';
// import Table from './components/Table';
// import PageComponent from './components/PageComponent';
// import {Body} from './components/PageComponent';
// import ListDemo from "./components/ListDemo";
// import ConditionalRendering from "./components/ConditionalRendering";
// import HelloWorld from "./components/HelloWorld";

function App() {
	// const headers = ['Tab1', 'Tab2', 'Tab3'];
  	return (
    	<div className="App">
			Hello From Main React

			{/* <HelloWorld/> */}
			{/* <ConditionalRendering/> */}
			{/* <ListDemo/> */}
			{/* <PageComponent/> */}
			{/* <Body/> */}
			{/* <Table/> */}
			{/* <JsxProperty/> */}
			{/* <GrayBorder>
				<h1>Hello</h1>
			</GrayBorder>
			<GrayBorder>
				<JsxProperty/>
			</GrayBorder> */}
			{/* <RenderWithCondition flag={true} /> */}
			{/* <ParentEvent/> */}
			{/* <Counter/> */}
			{/* <Counter/> */} {/* state is isolated */}
			{/* <ToDoListEventDemo/> */}
			{/* <SnapShotCounter /> */}
			{/* <BatchesCounter /> */}
			{/* <RerenderIssue /> */}
			{/* <UseImmerForNestedObjRender /> */}
			{/* <ToDoListEventDemo /> */}
			{/* <InputDemo /> */}
			{/* <Tab headers={headers}>
				<div>
					Child 1
				</div>
				<h1>
					Child 2
				</h1>
				<div>
					Child 3
				</div>
			</Tab> */}
			{/* <DeclarativeUI /> */}
			{/* <SignupForm /> */}
			{/* <ValidationSchemaExample /> */}
			{/* <ContextDemo /> */}
			{/* <ReducerCounter /> */}
			{/* <CustomReducer /> */}
			<ToDoWithReducer />
    	</div>
  	);
}

export default App;