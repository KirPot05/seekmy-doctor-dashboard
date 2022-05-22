

export default function Navbar() {
    return (
        <nav className="flex justify-between py-5 px-10 shadow-md sticky top-0 bg-white z-10">
            <div>
                <img src="https://seekmy.health/Images/logo.svg" alt="" />
            </div>

            <div className="flex items-center space-x-6 font-bold text-lg">

                <span className="cursor-pointer">For Patients</span>
                
                <span className="cursor-pointer">
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="20" fill="currentColor" className="bi bi-download" viewBox="0 0 16 16">
                        <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z" />
                        <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z" />
                    </svg>
                </span>
                
                <span className="cursor-pointer">Log In</span>
            </div>
        </nav>
    )
}
