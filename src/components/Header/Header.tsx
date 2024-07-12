import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "../../components/ui/navigation-menu";
import { DarkModeToggle } from '../DarkModeToggle/DarkModeToggle';


const Header = () => {
  return (
    <div className="bg-white dark:bg-gray-800 h-36 flex justify-between items-center" >
      <NavigationMenu className="w-full h-full text-gray-400 flex flex-col items-start justify-center px-4 ">
        <div className=" md:block hidden">
          <NavigationMenuList className="flex justify-center space-x-6 items-center px-4">
            <NavigationMenuItem className="cursor-pointer hover:text-gray-600">Blogs</NavigationMenuItem>
            <NavigationMenuItem className="cursor-pointer hover:text-gray-600">News</NavigationMenuItem>
            <NavigationMenuItem className="cursor-pointer hover:text-gray-600">Help Center</NavigationMenuItem>
            <NavigationMenuItem className="cursor-pointer hover:text-gray-600">Customer Care</NavigationMenuItem>
          </NavigationMenuList>
        </div>
        <div className=" text-black w-full">
          <h1 className="text-2xl px-4 font-bold mt-6 dark:text-white">Dashboard</h1>

        </div>
      </NavigationMenu>
      <div className=" mx-10">
      <DarkModeToggle />

      </div>
    </div>
  );
};

export default Header;
