import { useEffect, useState } from 'react';
import { classes } from '@/utils/classData';
import DialogBox from '../DialogBox/DialogBox';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '../ui/table';
import PaginationComponent from '../PaginationComponent/PaginationComponent';




const UpcomingClasses = () => {
  const [data, setData] = useState<any[]>([]);
  const [items,setItems] = useState<number>(5)
  const [classData, setClassData] = useState<any[]>(classes);
  const [currentPage, setCurrentPage] = useState(1);

  // Function to update data
  function toChild(passedData: any[]) {
    setData(prevData => {
      // Create a map to ensure uniqueness based on id
      const dataMap = new Map(prevData.map(item => [item.id, item]));
      passedData.forEach(item => {
        dataMap.set(item.id, item);
      });
      return Array.from(dataMap.values());
    });
  }

  function toPagenation(num:number){
    setItems(num)
  }

  // useEffect to update classData when data changes
  useEffect(() => {
    if (data.length > 0) {
      setClassData(data);
    } else {
      setClassData(classes); // Reset to default classes if data is empty
    }
  }, [data]);

  // Calculate the paginated data
  const startIdx = (currentPage - 1) * items;
  const paginatedClassData = classData.slice(startIdx, startIdx + items);
  const totalPages = Math.ceil(classData.length / items);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    // <div className=''>
      <div className="flex-grow p-4 bg-white dark:bg-gray-800 rounded-2xl w-full md:w-1/2 h-[100%] ">
        <div className="flex justify-between">
          <div>
            <h1 className="text-xl font-normal">Upcoming Classes</h1>
            <label htmlFor="terms" className="text-xs">For next 7 days</label>
          </div>
          <div className="flex items-center space-x-2">
            <label htmlFor="terms" className="text-sm leading-none mr-2">Booked only</label>
            <input
              type='checkbox'
              id="terms"
              className="mr-10"
              onClick={(e) => {
                const checkbox = e.target as HTMLInputElement; // Cast e.target to HTMLInputElement
                const isChecked = checkbox.checked;
                const bookedClassesData = classData.filter(cls => cls.isBooked);
                if(bookedClassesData.length === 0){
                  return
                }
                if (!isChecked) {
                  setClassData(data); // Reset to all classes if checkbox is unchecked
                  setCurrentPage(1); // Reset to the first page
                } else {
                  if (bookedClassesData.length > 0) {
                    setClassData(bookedClassesData); // Set to booked classes if checkbox is checked and there are booked classes
                    setCurrentPage(1); // Reset to the first page
                  }
                }
              }}
            />
          </div>
        </div>
        <div className="overflow-x-auto mt-6">
          <Table className="w-full">
            <TableHeader className="bg-gray-200 dark:bg-gray-700">
              <TableRow>
                <TableHead className="text-start">Class Name</TableHead>
                <TableHead className="text-start">Staff Name</TableHead>
                <TableHead className="text-start">Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {paginatedClassData.map((cls, i) => (
                <TableRow key={cls.id}>
                  <TableCell className="text-start">
                    <div className="flex items-center">
                      <div className="text-gray-400 m-5">{startIdx + i + 1}</div>
                      <div>
                        <div className='font-medium'>{cls.className}</div>
                        <div className="text-gray-500">{cls.dateTime} </div>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell className="text-start">
                    <div className="flex items-center">
                      <img src={cls.profileImage} className="h-12 w-12 rounded-full object-cover mr-4" alt={cls.staffName} />
                      <div>
                        <div>{cls.staffName}</div>
                        <div className="text-gray-500">{cls.additionalDetails}</div>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell className="text-start">
                    {cls.isBooked ? (
                      // <Button className='rounded-lg px-10 py-3 bg-blue-500'>JOIN NOW</Button>
                      <DialogBox
                        title="Join Class?"
                        description="Click Yes to Join the class"
                        closeBtn="No"
                        confirmBtn="Yes"
                        id={cls.id}
                        toChild={toChild}
                        currentClasses={classData}
                        value="Join&nbsp;now"
                        
                      />
                    ) : (
                      <DialogBox
                        title="Are you sure?"
                        description="Click confirm to book the class"
                        closeBtn="Close"
                        confirmBtn="Confirm"
                        id={cls.id}
                        toChild={toChild}
                        currentClasses={classData}
                        value="Book&nbsp; now"
                      />
                    )}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
        <div className="flex justify-center p-8 ">
          <PaginationComponent
            totalPages={totalPages}
            currentPage={currentPage}
            onPageChange={handlePageChange}
            itemCount={toPagenation} 
            />
      </div>

      {/* </div> */}
    </div>
  );
};

export default UpcomingClasses;
