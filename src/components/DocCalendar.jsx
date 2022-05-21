import calendar from '../assets/calendar.png';
import cal1 from '../assets/cal1.png';
import cal2 from '../assets/cal2.png';
import calHelp from '../assets/cal-help.png';

function DocCalendar() {
  return (
    <div className='flex justify-center mt-10 px-20 pt-20 pb-44 space-x-20 bg-gray-300'>

        <div>
            <div className='text-center'>
                <h2 className='text-4xl font-bold'>Need to change your plan?</h2>
                <p className='text-lg'>Edit time sets easily and organize your work</p>
            </div>

            <div className='flex flex-col items-center mt-5'>
                <img src={calendar} alt="" />
                <img src={cal1} className="-m-24" alt="" />
                <img src={calHelp} className="-mt-32" alt="" />
            </div>
        </div>

        <div >
            <div className='text-center'>
                <h2 className='text-4xl font-bold'>Every doctor deserves a holiday</h2>
            </div>

            <div className='flex flex-col items-center mt-10'>
                <img src={calendar} alt="" />
                <img src={cal2}   className="-m-28" alt="" />
            </div>
        </div>

    </div>
  )
}

export default DocCalendar