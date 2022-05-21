import DocCalendar from "./components/DocCalendar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import KnowMore from "./components/KnowMore";
import MedicalHistory from "./components/MedicalHistory";
import Navbar from "./components/Navbar";
import Slots from "./components/Slots";

function App() {

	return <div className="App">
		<Navbar/>
		
		<Home/>

		<Slots/>

		<DocCalendar/>

		<KnowMore/>

		<MedicalHistory/>

		<Footer/>

	</div>;

}

export default App;
