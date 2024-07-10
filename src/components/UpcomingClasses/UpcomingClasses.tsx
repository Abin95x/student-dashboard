// import React, { useState } from 'react';
import { Checkbox } from '../ui/checkbox';
import { Button } from '../ui/button';
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '../ui/table';

import { classes } from '@/utils/classData';
import { DarkModeToggle } from '../DarkModeToggle/DarkModeToggle';

const UpcomingClasses = () => {
    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className='flex justify-between mt-10'>
                <div className='flex items-start'>
                    <div>
                        <h1 className='text-xl font-normal'>Upcoming classes</h1>
                        <label htmlFor="terms" className='text-xs'>For next 7 days</label>
                    </div>
                </div>
                <div className='flex items-end space-x-2'>
                    <div className=' flex items-center'>
                        <label
                            htmlFor="terms"
                            className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 mr-2"
                        >
                            Booked only
                        </label>
                        <Checkbox id="terms" className='mr-10'/>
                        <DarkModeToggle />
                    </div>
                </div>
            </div>

            <div className="overflow-x-auto mt-6">
                <Table className="w-full">
                    <TableHeader className="bg-gray-200">
                        <TableRow>
                            <TableHead className="text-start">Class Name</TableHead>
                            <TableHead className="text-start">Staff Name</TableHead>
                            <TableHead className="text-start">Action</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {classes.map(cls => (
                            <TableRow key={cls.id}>
                                <TableCell className="text-start">
                                    <div className='flex items-center'>
                                        <div className='text-gray-400 m-5'>
                                            {cls.id}
                                        </div>
                                        <div>
                                            <div> {cls.className}</div>
                                            <div className='text-gray-500'>{cls.date} {cls.month} {cls.time}</div>
                                        </div>
                                    </div>
                                </TableCell>
                                <TableCell className="text-start">
                                    <div className='flex items-center'>
                                        <div>
                                            <div className='text-gray-400 m-5'>
                                                <img src={cls.profileImage} className='h-12 w-12 rounded-full' alt="" />
                                            </div>
                                        </div>
                                        <div>
                                            <div>{cls.staffName}</div>
                                            <div className='text-gray-500'>{cls.additionalDetails}</div>
                                        </div>
                                    </div>
                                </TableCell>
                                <TableCell className="text-start">
                                    <Button variant="outline">Book Now</Button>
                                </TableCell>

                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>

        </div>
    );
}

export default UpcomingClasses;
