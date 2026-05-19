import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  totalItems: number;
  itemsPerPage: number;
}

export default function Pagination({ 
  currentPage, 
  totalPages, 
  onPageChange, 
  totalItems, 
  itemsPerPage 
}: PaginationProps) {
  const startItem = (currentPage - 1) * itemsPerPage + 1;
  const endItem = Math.min(currentPage * itemsPerPage, totalItems);

  const getPageNumbers = () => {
    const pages = [];
    const maxVisiblePages = 5;
    
    if (totalPages <= maxVisiblePages) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      if (currentPage <= 3) {
        for (let i = 1; i <= 4; i++) {
          pages.push(i);
        }
        pages.push('...');
        pages.push(totalPages);
      } else if (currentPage >= totalPages - 2) {
        pages.push(1);
        pages.push('...');
        for (let i = totalPages - 3; i <= totalPages; i++) {
          pages.push(i);
        }
      } else {
        pages.push(1);
        pages.push('...');
        for (let i = currentPage - 1; i <= currentPage + 1; i++) {
          pages.push(i);
        }
        pages.push('...');
        pages.push(totalPages);
      }
    }
    
    return pages;
  };

  if (totalPages <= 1) return null;

  return (
    <div className="flex flex-col sm:flex-row items-center justify-between gap-4 py-6">
      {/* Informations sur les éléments affichés */}
      <div className="text-sm text-gray-600">
        Showing {startItem} to {endItem} of {totalItems} results
      </div>

      {/* Pagination */}
      <div className="flex items-center gap-2">
        {/* Bouton précédent */}
        <button
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
            currentPage === 1
              ? "bg-gray-100 text-gray-400 cursor-not-allowed"
              : "bg-white text-gray-600 hover:bg-gray-50 border border-gray-200 hover:border-gray-300"
          }`}
          aria-label="Previous page"
        >
          <FaChevronLeft className="text-sm" />
        </button>

        {/* Numéros de pages */}
        <div className="flex items-center gap-1">
          {getPageNumbers().map((page, index) => (
            <button
              key={index}
              onClick={() => typeof page === 'number' && onPageChange(page)}
              disabled={page === '...'}
              className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-medium transition-all duration-300 ${
                page === currentPage
                  ? "bg-blue-600 text-white"
                  : page === '...'
                  ? "text-gray-400 cursor-default"
                  : "bg-white text-gray-600 hover:bg-gray-50 border border-gray-200 hover:border-gray-300"
              }`}
              aria-label={typeof page === 'number' ? `Page ${page}` : 'More pages'}
            >
              {page}
            </button>
          ))}
        </div>

        {/* Bouton suivant */}
        <button
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
            currentPage === totalPages
              ? "bg-gray-100 text-gray-400 cursor-not-allowed"
              : "bg-white text-gray-600 hover:bg-gray-50 border border-gray-200 hover:border-gray-300"
          }`}
          aria-label="Next page"
        >
          <FaChevronRight className="text-sm" />
        </button>
      </div>

      {/* Sélecteur d'éléments par page */}
      <div className="flex items-center gap-2 text-sm text-gray-600">
        <span>Show:</span>
        <select
          value={itemsPerPage}
          onChange={(e) => {
            // TODO: Implement items per page change functionality
            console.log('Change items per page to:', e.target.value);
          }}
          className="px-2 py-1 border border-gray-200 rounded-md focus:border-blue-500 focus:outline-none text-sm"
        >
          <option value={12}>12</option>
          <option value={24}>24</option>
          <option value={48}>48</option>
          <option value={96}>96</option>
        </select>
        <span>per page</span>
      </div>
    </div>
  );
}
