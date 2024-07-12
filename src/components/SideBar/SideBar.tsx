import profile1 from '../../assets/profile1.jpeg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

import { faHome, faFile, faChartSimple, faIndianRupeeSign, faCog, faUserGroup } from '@fortawesome/free-solid-svg-icons';

const SideBar = () => {
    return (
        <div className='md:block hidden min-h-screen w-72 bg-white dark:bg-gray-800 text-gray-800 shadow-md'>
            <div className="flex flex-col h-full">
                <div className='p-5 items-center justify-center'>
                    <img src={profile1} alt="Profile" className='h-16 w-16 mx-10 rounded-full object-cover' />
                    <div className='ml-4'>
                        <h1 className='font-bold text-lg dark:text-white mx-7'>Abin PV</h1>
                        <p className='text-gray-500 text-xs mx-7'>Intermediate</p>
                    </div>
                </div>
                <nav className="mt-4 flex-grow">
                    <ul className='flex flex-col'>
                        <Link to="/"><li className="flex items-center p-4 hover:bg-gray-200 dark:hover:text-black dark:text-white cursor-pointer">
                            <div className='h-10 w-10 mx-3 bg-gray-200  dark:bg-slate-500  flex justify-center items-center rounded-full'>
                                <FontAwesomeIcon icon={faHome}  />
                            </div>
                            Dashboard
                        </li></Link>
                        <Link to="/allclass"><li className="flex items-center p-4 hover:bg-gray-200 dark:hover:text-black dark:text-white cursor-pointer">
                            <div className='h-10 w-10 mx-3 bg-gray-200 dark:bg-slate-500 flex justify-center items-center rounded-full'>
                            <FontAwesomeIcon icon={faUserGroup}  />
                            </div>
                            All Classes
                        </li></Link>
                        <Link to="/assignment"><li className="flex items-center p-4 hover:bg-gray-200 dark:hover:text-black dark:text-white cursor-pointer">
                             <div className='h-10 w-10 mx-3 bg-gray-200  dark:bg-slate-500 flex justify-center items-center rounded-full'>
                             <FontAwesomeIcon icon={faFile}  />
                             </div>
                            Assignments
                        </li></Link>
                        <li className="flex items-center p-4 hover:bg-gray-200 dark:hover:text-black dark:text-white cursor-pointer">
                             <div className='h-10 w-10 mx-3 bg-gray-200  dark:bg-slate-500 flex justify-center items-center rounded-full'>
                             <FontAwesomeIcon icon={faChartSimple}  />
                             </div>
                            <p>Performance</p>
                        </li>
                        <li className="flex items-center p-4 hover:bg-gray-200 dark:hover:text-black dark:text-white cursor-pointer">
                             <div className='h-10 w-10 mx-3 bg-gray-200  dark:bg-slate-500 flex justify-center items-center rounded-full'>
                             <FontAwesomeIcon icon={faIndianRupeeSign}  />
                             </div>
                            <p>Fee Details</p>
                        </li>
                        <li className="flex items-center p-4  hover:bg-gray-200 dark:hover:text-black dark:text-white cursor-pointer">
                             <div className='h-10 w-10 mx-3 bg-gray-200  dark:bg-slate-500 flex justify-center items-center rounded-full'>
                             <FontAwesomeIcon icon={faCog}  />
                             </div>
                            <p>Settings</p>
                        </li>
                    </ul>
                </nav>
            </div>
            {/* Add a logout button or other additional content here if needed */}
        </div>
    );
};

export default SideBar;
