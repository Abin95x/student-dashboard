import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import { faHome, faFile, faUserGroup } from '@fortawesome/free-solid-svg-icons';
import profile1 from '../../assets/profile1.jpeg';

const NavBar = () => {
    return (
        <div className='w-full h-24 bg-white dark:bg-gray-700 fixed bottom-0 left-0 right-0 border-t flex items-center justify-around'>
            <nav className="w-full">
                <ul className='flex justify-around'>
                    <li>
                        <Link to='/' className='flex justify-center items-center h-12 w-12   rounded-full'>
                            <div className=' flex flex-col items-center justify-center'>
                                <FontAwesomeIcon icon={faHome} />
                                DashBoard
                            </div>
                        </Link>
                    </li>
                    <li>
                        <Link to='/allclass' className='flex justify-center items-center h-12 w-12   rounded-full'>
                            <div className=' flex flex-col items-center justify-center'>
                                <FontAwesomeIcon icon={faUserGroup} />
                                <p>
                                    Classes
                                </p>
                            </div>
                        </Link>
                    </li>
                    <li>
                        <Link to='/assignment' className='flex justify-center items-center h-12 w-12   rounded-full'>
                            <div className=' flex flex-col items-center justify-center'>
                                <FontAwesomeIcon icon={faFile} />
                                <p>
                                    Assignment
                                </p>
                            </div>
                        </Link>
                    </li>
                    <li>
                        <div className='flex justify-center items-center h-12 w-12   rounded-full'>
                            <div className=' flex flex-col items-center justify-center'>
                                <img src={profile1} alt="Profile" className='h-5 w-5 mx-10 rounded-full' />
                                <p>
                                    Profile
                                </p>
                            </div>
                        </div>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default NavBar;
