import { classDataTypes } from "../UpcomingClasses/classDataTypes";

export interface dialogBoxTypes {
    id?: number;
    title: string;
    description: string;
    closeBtn: string;
    confirmBtn: string;
    toChild: (passedData: classDataTypes[]) => void;
    currentClasses: classDataTypes[];
  }
  