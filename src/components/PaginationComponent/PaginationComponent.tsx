import React, { useEffect, useState } from "react";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { PaginationPropsType } from "./PaginationPropsType";
import NumberDropDown from "../NumberDropDown/NumberDropDown";

interface PaginationComponentProps extends PaginationPropsType {
  totalPages: number;
  currentPage: number;
  itemCount?: (num: number) => void; // Define itemCount as a function that takes a number
}

const PaginationComponent: React.FC<PaginationComponentProps> = ({
  totalPages,
  currentPage,
  onPageChange,
  itemCount
}) => {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);
  const [data, setData] = useState<number | null>(null);

  // Callback function to handle data from child component
  const handleItemCount = (num: number) => {
    setData(num);
  };

  // Effect to monitor changes in data state
  useEffect(() => {
    if (itemCount && data !== null) {
      itemCount(data);
    }
  }, [data, itemCount]);

  return (
    <div className=" flex flex-col md:flex-row items-center">

      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious
              href="#"
              onClick={(e) => {
                e.preventDefault();
                if (currentPage > 1) {
                  onPageChange(currentPage - 1);
                }
              }}
            />
          </PaginationItem>
          {pages.map((page) => (
            <PaginationItem key={page}>
              <PaginationLink
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  onPageChange(page);
                }}
                isActive={page === currentPage}
              >
                {page}
              </PaginationLink>
            </PaginationItem>
          ))}
          <PaginationItem>
            <PaginationNext
              href="#"
              onClick={(e) => {
                e.preventDefault();
                if (currentPage < totalPages) {
                  onPageChange(currentPage + 1);
                }
              }}
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
      <Pagination>
        <NumberDropDown toChild={handleItemCount} />
      </Pagination> 
    </div>
  );
};

export default PaginationComponent;
