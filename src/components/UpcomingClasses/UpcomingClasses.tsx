import { useEffect, useState } from 'react';
import { classes } from '@/utils/classData';
import TableComponent from '../TableComponent/TableComponent';
import PaginationComponent from '../PaginationComponent/PaginationComponent';
import CardComponent from '../CardComponent/CardComponent';

const UpcomingClasses = () => {
  const [data, setData] = useState<any[]>([]);
  const [items, setItems] = useState<number>(5);
  const [classData, setClassData] = useState<any[]>(classes);
  const [currentPage, setCurrentPage] = useState(1);

  function toChild(passedData: any[]) {
    setData(prevData => {
      const dataMap = new Map(prevData.map(item => [item.id, item]));
      passedData.forEach(item => {
        dataMap.set(item.id, item);
      });
      return Array.from(dataMap.values());
    });
  }

  function toPagination(num: number) {
    setItems(num);
  }

  useEffect(() => {
    if (data.length > 0) {
      setClassData(data);
    } else {
      setClassData(classes);
    }
  }, [data]);

  const startIdx = (currentPage - 1) * items;
  const paginatedClassData = classData.slice(startIdx, startIdx + items);
  const totalPages = Math.ceil(classData.length / items);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <>
      <div className="flex-grow p-4 bg-white dark:bg-gray-800 rounded-2xl w-full md:w-1/2 h-[100%]">
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
                const checkbox = e.target as HTMLInputElement;
                const isChecked = checkbox.checked;
                const bookedClassesData = classData.filter(cls => cls.isBooked);
                if (bookedClassesData.length === 0) {
                  return;
                }
                if (!isChecked) {
                  setClassData(data);
                  setCurrentPage(1);
                } else {
                  if (bookedClassesData.length > 0) {
                    setClassData(bookedClassesData);
                    setCurrentPage(1);
                  }
                }
              }}
            />
          </div>
        </div>
        <div className="overflow-x-auto mt-6">
          <div className='md:block hidden' >
            <TableComponent paginatedClassData={paginatedClassData} startIdx={startIdx} toChild={toChild} classData={classData} />
          </div>
          <div className='md:hidden block'>
            <CardComponent paginatedClassData={paginatedClassData} toChild={toChild} classData={classData} />
          </div>
        </div>
        <div className="flex justify-center p-8">
          <PaginationComponent
            totalPages={totalPages}
            currentPage={currentPage}
            onPageChange={handlePageChange}
            itemCount={toPagination}
          />
        </div>
      </div>
    </>
  );
};

export default UpcomingClasses;