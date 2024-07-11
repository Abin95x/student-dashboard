import profile1 from '../../assets/profile1.jpeg';

const SideBar = () => {
    return (
        <div className='md:block hidden h-full w-72 bg-white dark:bg-gray-800 text-gray-800'>
            <div className="flex flex-col h-full">
                <div className='m-5'>
                    {/* Additional content */}
                </div>
                <div className="p-4">
                    <img src={profile1} alt="Profile" className='h-10 w-10 rounded-full' />
                    <h1 className='font-bold dark:text-white'>Abin PV</h1>
                    <p className='text-gray-500 text-xs'>Intermediate</p>
                </div>
                <nav className="mt-4 flex-grow">
                    <ul>
                        <li className="p-2 hover:bg-gray-200 dark:text-white cursor-pointer">Dashboard</li>
                        <li className="p-2 hover:bg-gray-200 dark:text-white cursor-pointer">All classes</li>
                        <li className="p-2 hover:bg-gray-200 dark:text-white cursor-pointer">Assignments</li>
                        <li className="p-2 hover:bg-gray-200 dark:text-white cursor-pointer">Performance</li>
                        <li className="p-2 hover:bg-gray-200 dark:text-white cursor-pointer">Fee details</li>
                        <li className="p-2 hover:bg-gray-200 dark:text-white cursor-pointer">Settings</li>
                    </ul>
                </nav>
            </div>
            <div>
                <h1>Logout</h1>
            </div>
        </div>
    );
};

export default SideBar;
