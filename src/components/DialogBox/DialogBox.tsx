import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
    DialogClose,
    DialogFooter
} from "@/components/ui/dialog"
import { dialogBoxTypes } from "./types";
import { classDataTypes } from "../UpcomingClasses/classDataTypes";

const DialogBox = ({ title, description, closeBtn, confirmBtn, id, toChild, currentClasses }: dialogBoxTypes) => {

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
        <div >
            <Dialog>
                <DialogTrigger className="border bg-white dark:bg-gray-800 dark:border-white rounded-lg px-10 py-3">Book now</DialogTrigger>
                <DialogContent className="h-56 bg-white dark:bg-gray-800">
                    <DialogHeader>
                        <DialogTitle>{title}</DialogTitle>
                        <DialogDescription>
                            {description}
                        </DialogDescription>
                    </DialogHeader>
                    <DialogFooter>
                        <DialogClose><div className="bg-white text-black border rounded-lg px-5 py-2">{closeBtn}</div> </DialogClose>
                        <DialogClose><div className="bg-blue-500 text-black border rounded-lg px-5 py-2" onClick={handleConfirm}>{confirmBtn}</div> </DialogClose>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </div>
    )
}

export default DialogBox;
