import { useState } from "react";

// Custom hook for pagination
const usePagination = (booksData, itemsPerPage) => {
  // Calculate total number of items
  const totalItems = booksData.length;
  // State for current page
  const [currentPage, setCurrentPage] = useState(1);
  // Calculate total number of pages
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  // Generate array of page numbers
  const pages = [...Array(totalPages + 1).keys()];
  pages.shift();

  // Calculate index of last and first item on the current page
  const lastItem = currentPage * itemsPerPage;
  const firstItem = lastItem - itemsPerPage;

  // Ensure current page does not exceed total number of pages
  if (pages.length > 0 && currentPage > pages.length) {
    setCurrentPage(pages.length);
  }

  // Return sliced data for current page, list of pages, and handlers
  return [
    booksData.slice(firstItem, lastItem),
    pages,
    currentPage,
    setCurrentPage,
  ];
};

export default usePagination;
