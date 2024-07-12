import DialogBox from '../DialogBox/DialogBox';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '../ui/table';
import {tablePropsType} from '../TableComponent/tablePropsType'

const TableComponent = ({ paginatedClassData, startIdx, toChild, classData }: tablePropsType) => {
  return (
    <div>
      <Table className="w-full">
        <TableHeader className="bg-gray-200 dark:bg-gray-700">
          <TableRow>
            <TableHead className="text-start">Class Name</TableHead>
            <TableHead className="text-start">Staff Name</TableHead>
            <TableHead className="text-start">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {paginatedClassData.map((cls: any, i: number) => (
            <TableRow key={cls.id}>
              <TableCell className="text-start">
                <div className="flex items-center">
                  <div className="text-gray-400 m-5">{startIdx + i + 1}</div>
                  <div>
                    <div className='font-medium'>{cls.className}</div>
                    <div className="text-gray-500">{cls.dateTime}</div>
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
  )
}

export default TableComponent;