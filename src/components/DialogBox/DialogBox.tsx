import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
    DialogClose,
    DialogFooter
} from "@/components/ui/dialog";
import { dialogBoxTypes } from "./types";
import { classDataTypes } from "../UpcomingClasses/classDataTypes";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
const DialogBox = ({ title, description, closeBtn, confirmBtn, id, toChild, currentClasses, value }: dialogBoxTypes) => {

    const isBooked = currentClasses.find((cls: classDataTypes) => cls.id === id)?.isBooked;

    const handleConfirm = () => {
        let updatedClasses = currentClasses.map((cls: classDataTypes) => {
            if (cls.id === id) {
                return {
                    ...cls,
                    isBooked: true
                };
            }
            return cls;
        });
        toChild(updatedClasses);
    };

    return (
        <Dialog>
            <DialogTrigger className={`border ${isBooked ? 'bg-blue-500 dark:bg-blue-500 dark:border-white' : 'bg-white dark:bg-gray-800 dark:border-white'} rounded-lg px-10 py-3`}>
                {value}&nbsp;{isBooked ? <FontAwesomeIcon icon={faArrowUpRightFromSquare} /> : <div></div>}
            </DialogTrigger>

            <DialogContent className="h-56 bg-white dark:bg-gray-800">
                <DialogHeader>
                    <DialogTitle>{title}</DialogTitle>
                    <DialogDescription>
                        {description}
                    </DialogDescription>
                </DialogHeader>
                <DialogFooter>
                    <DialogClose>
                        <div className="bg-white text-black border rounded-lg px-5 py-2">{closeBtn}</div>
                    </DialogClose>
                    <DialogClose>
                        {isBooked ? (
                            <div className="bg-blue-500 text-black border rounded-lg px-5 py-2">{confirmBtn}</div>
                        ) : (
                            <div className="bg-blue-500 text-black border rounded-lg px-5 py-2" onClick={handleConfirm}>{confirmBtn}</div>
                        )}
                    </DialogClose>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
};

export default DialogBox;
