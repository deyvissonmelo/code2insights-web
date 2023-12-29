"use client";

import { ArrowLeft, ArrowRight } from "lucide-react";
import Button from "../button";
import { HTMLAttributes } from "react";
import { DOTS, usePagination } from "./usePagination";

interface PaginationProps extends HTMLAttributes<HTMLDivElement> {
  totalItems?: number;
  pageSize?: number;
  siblingCount?: number;
  currentPage?: number;
  onPageChange?: (currentPage: number) => void;
}

const Pagination = ({
  totalItems = 0,
  pageSize = 10,
  currentPage = 1,
  onPageChange,
  siblingCount = 0,
}: PaginationProps) => {
  const paginationRange =
    usePagination({
      totalItems,
      pageSize,
      siblingCount,
      currentPage,
    }) ?? [];

  let lastPage = paginationRange ? paginationRange.length : 1;

  const onNext = () => {
    if (onPageChange) onPageChange(currentPage + 1);
  };

  const onPrevious = () => {
    if (onPageChange) onPageChange(currentPage - 1);
  };

  return (
    <div
      id="pagination-root"
      className="flex w-full items-center justify-center gap-1 px-2"
    >
      <Button
        variant="outline"
        className="flex items-center justify-start gap-1 bg-white"
        disabled={currentPage === 1}
        onClick={onPrevious}
      >
        <ArrowLeft />
        <span className="hidden">Previous</span>
      </Button>

      <div className="flex items-center justify-start gap-1">
        {paginationRange.map((pageNumber) => {
          if (pageNumber === DOTS) {
            return (
              <Button key={pageNumber} variant="outline" className="bg-white">
                &#8230;
              </Button>
            );
          }

          return (
            <Button
              key={pageNumber}
              variant={currentPage == pageNumber ? "primary" : "outline"}
              disabled={currentPage == pageNumber}
              onClick={() => {
                if (onPageChange) onPageChange((pageNumber as number));
              }}
            >
              {pageNumber}
            </Button>
          );
        })}
      </div>

      <Button
        variant="outline"
        className="flex items-center justify-start gap-1 bg-white"
        onClick={onNext}
        disabled={currentPage == lastPage}
      >
        <span className="hidden">Next</span>
        <ArrowRight />
      </Button>
    </div>
  );
};

export default Pagination;
