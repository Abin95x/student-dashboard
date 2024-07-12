import { cardPropsType } from './cardPropsType';
import DialogBox from '../DialogBox/DialogBox';

const CardComponent = ({ paginatedClassData, toChild, classData }: cardPropsType) => {
  return (
    <>
      <div className="mt-6">
        <div className="flex flex-wrap -m-4">
          {paginatedClassData.map((cls: any) => (
            <div key={cls.id} className="p-4 w-full md:w-1/2 lg:w-1/3">
              <div className="bg-white dark:bg-gray-800 rounded-lg border dark:border-white p-6">
                <div className="flex items-center mb-4">
                  <div>
                    <div className='font-medium text-lg'>{cls.className}</div>
                    <div className="text-gray-500">{cls.dateTime}</div>
                  </div>
                </div>
                <div className="flex items-center mb-4">
                  <img src={cls.profileImage} className="h-12 w-12 rounded-full object-cover mr-4" alt={cls.staffName} />
                  <div>
                    <div className="font-medium">{cls.staffName}</div>
                    <div className="text-gray-500">{cls.additionalDetails}</div>
                  </div>
                </div>
                <div className="text-center">
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
                      value="Book&nbsp;now"
                    />
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default CardComponent;