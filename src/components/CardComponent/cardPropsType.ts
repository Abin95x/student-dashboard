import { classDataTypes } from "../UpcomingClasses/classDataTypes";

export interface cardPropsType {
    paginatedClassData: any
    toChild: (passedData: classDataTypes[]) => void;
    classData: classDataTypes[];
}