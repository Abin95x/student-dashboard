

 export interface PaginationPropsType {
    totalPages: number;
    currentPage: number;
    onPageChange: (page: number) => void;
    itemCount?:any; 
  }