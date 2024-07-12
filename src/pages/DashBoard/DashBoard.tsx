import Header from '@/components/Header/Header';
import UpcomingClasses from '@/components/UpcomingClasses/UpcomingClasses';
import SideBar from '@/components/SideBar/SideBar';
import Assignments from '@/components/Assignments/Assignments';
import NavBar from '@/components/NavBar/NavBar';


const DashBoard = () => {
    return (
        <div className="flex h-screen">
            <div>
                <SideBar />
            </div>
            <div className="w-full flex flex-col">
                <div>
                    <Header />
                </div>
                <div className=" flex flex-col md:flex-row flex-grow  bg-slate-100 dark:bg-gray-700 gap-5 p-5  ">
                    <UpcomingClasses />
                    <Assignments />
                    <div className='md:hidden'>
                        <NavBar />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DashBoard;
