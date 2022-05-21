import pat1 from '../assets/pat1.png';
import pat2 from '../assets/pat2.png';
import swipe from '../assets/swipe.png';

function MedicalHistory() {
    return (
        <div>
            <div className="bg-green-100 p-10">

                <div>
                    <h2 className="text-center text-4xl font-bold w-6/12 m-auto">A better and safer way to  manage patient medical history</h2>
                    <p className="text-center text-green-500 mt-10 text-4xl">EMR based medical records</p>
                </div>

                <div className='mt-12 flex items-center justify-center'>
                    <img className='object-contain' src={pat1} alt="" style={{ height: "30rem" }} />
                </div>

                <div className='mt-12 flex items-center justify-center space-x-24'>
                    <div className='flex flex-col items-center'>
                        <p className='text-3xl'>Faster digital prescriptions</p>
                        <p className='text-3xl font-bold'>No pen. No paper</p>
                    </div>
                    <img className='object-contain' src={pat2} alt="" style={{ height: "30rem" }} />
                </div>
            </div>

            <div className='m-5 flex flex-col'>
                <h2 className='text-center text-5xl font-semibold mb-24'>Meet Your Next Patient</h2>
                <img className='object-contain mb-24' src={swipe} alt="" style={{ height: "30rem" }}/>
            </div>
        </div>
    )
}

export default MedicalHistory