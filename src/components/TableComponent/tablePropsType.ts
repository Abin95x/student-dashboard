import { classDataTypes } from "../UpcomingClasses/classDataTypes";

export interface tablePropsType {
    paginatedClassData: any
    startIdx: number
    toChild: (passedData: classDataTypes[]) => void;
    classData: classDataTypes[];
}