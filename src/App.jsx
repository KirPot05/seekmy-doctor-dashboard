import { lazy, Suspense } from "react";
const Navbar = lazy(() => import("./components/Navbar"));
const Home = lazy(() => import('./components/Home'));
const DocCalendar = lazy(() => import("./components/DocCalendar")) ;
const Footer = lazy(() => import("./components/Footer"));
const KnowMore = lazy(() => import("./components/KnowMore"));
const MedicalHistory = lazy(() => import("./components/MedicalHistory"));
const Slots = lazy(() => import("./components/Slots"));
const MeetPatient = lazy(() => import("./components/MeetPatient"));

function App() {

	return <div className="App">
		<Navbar/>
		
		<Suspense>
			<Home/>
		</Suspense>

		<Suspense>
			<Slots/>
		</Suspense>

		<Suspense>
			<DocCalendar/>
		</Suspense>

		<Suspense>
			<KnowMore/>
		</Suspense>

		<Suspense>
			<MedicalHistory/>
		</Suspense>

		<Suspense>
			<MeetPatient/>
		</Suspense>

		<Footer/>

	</div>;

}

export default App;
