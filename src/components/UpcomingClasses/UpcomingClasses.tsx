import { useEffect, useState } from 'react';
import { classes } from '@/utils/classData'; // Assuming this imports your class data
import DialogBox from '../DialogBox/DialogBox';
import { Button } from '../ui/button';
// import { Checkbox } from '../ui/checkbox';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '../ui/table';

const UpcomingClasses = () => {
  const [data, setData] = useState<any[]>([]);
  const [classData, setClassData] = useState<any[]>(classes);

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
  console.log(data);
  console.log(classData);




  // useEffect to update classData when data changes
  useEffect(() => {
    if (data.length > 0) {
      setClassData(data);
    } else {
      setClassData(classes); // Reset to default classes if data is empty
    }
  }, [data,]);

  return (
    <div className="flex-grow p-4 bg-white dark:bg-gray-800 rounded-2xl w-full md:w-1/2">
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
              if(bookedClassesData.length===0){
                return
              }
              if (!isChecked) {
                setClassData(data); // Reset to all classes if checkbox is unchecked
              } else {
                if (bookedClassesData.length > 0) {
                  console.log(bookedClassesData);
                  setClassData(bookedClassesData); // Set to booked classes if checkbox is checked and there are booked classes
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
            {classData.map((cls, i) => (
              <TableRow key={cls.id}>
                <TableCell className="text-start">
                  <div className="flex items-center">
                    <div className="text-gray-400 m-5">{i + 1}</div>
                    <div>
                      <div>{cls.className}</div>
                      <div className="text-gray-500">{cls.date} {cls.month} {cls.time}</div>
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
                    <Button className='rounded-lg px-10 py-3 bg-blue-500'>JOIN NOW</Button>
                  ) : (
                    <DialogBox
                      title="Are you sure?"
                      description="Click confirm to book the class"
                      closeBtn="Close"
                      confirmBtn="Confirm"
                      id={cls.id}
                      toChild={toChild}
                      currentClasses={classData}
                    />
                  )}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default UpcomingClasses;
