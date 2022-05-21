import slots from '../assets/slots.png';
import timer from '../assets/timer.png';


function Slots() {
	return (
		<div className='relative overflow-hidden'>

			<span className="bg-white border-solid border-gray-500 rounded-full m-8 text-white absolute top-40 -left-56 -z-10 opacity-20"
				style={{ width: "500px", height: "500px", padding: "200px", borderWidth: "4rem" }}
			> 10</span>


			<span className="bg-white border-solid border-8 border-gray-500 rounded-full m-8 text-white absolute -top-1/3 -right-32 -z-10 opacity-25"
				style={{ width: "400px", height: "400px", padding: "100px", borderWidth: "50px" }}
			> 10</span>

			<span className="bg-white border-solid border-8 border-gray-500 rounded-full m-8 text-white absolute -top-1/3 -right-32 opacity-25"
				style={{ width: "400px", height: "400px", padding: "100px", borderWidth: "50px" }}
			> 10</span>

			<span className="bg-white border-solid border-8 border-gray-500 rounded-full m-8 text-white absolute -bottom-40 -right-48 -z-10 opacity-25"
				style={{ width: "400px", height: "400px", padding: "100px", borderWidth: "50px" }}
			> 10</span>

			<div>
				<h2 className='text-5xl font-bold text-center mb-5'>Plan your slots</h2>

				<div className='flex items-center justify-around space-x-3 my-14 mx-10'>
					<div>
						<img className='shadow-lg object-contain h-96 rounded-3xl' src={slots} alt="" />
					</div>
					<div className='space-y-10'>
						<p className='w-96 text-3xl'> Increase the <span className='font-bold text-green-500'>Operational Efficiency</span> of your practice </p>
						<p className='w-96 text-3xl'> Make your professional <span className='font-bold text-green-500'> Life Easier </span> </p>
					</div>

				</div>
				<div className='flex justify-center'>
					<img className='object-contain h-64' src={timer} alt="" />
				</div>
			</div>


		</div>
	)
}

export default Slots