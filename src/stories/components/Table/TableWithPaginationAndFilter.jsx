import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Table from './Table';

const TableWithPaginationAndFilter = ({ columns, data, rowsPerPage }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [filterText, setFilterText] = useState('');
  const [sortConfig, setSortConfig] = useState({ key: null, direction: 'ascending' });

  const totalPages = Math.ceil(data.length / rowsPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleFilterChange = (e) => {
    setFilterText(e.target.value);
    setCurrentPage(1); // Reset to first page on filter change
  };

  const requestSort = (key) => {
    let direction = 'ascending';
    if (sortConfig.key === key && sortConfig.direction === 'ascending') {
      direction = 'descending';
    }
    setSortConfig({ key, direction });
  };

  const filteredData = data.filter((row) =>
    columns.some((col) => row[col].toString().toLowerCase().includes(filterText.toLowerCase()))
  );

  const sortedData = React.useMemo(() => {
    let sortableData = [...filteredData];
    if (sortConfig.key !== null) {
      sortableData.sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) {
          return sortConfig.direction === 'ascending' ? -1 : 1;
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
          return sortConfig.direction === 'ascending' ? 1 : -1;
        }
        return 0;
      });
    }
    return sortableData;
  }, [filteredData, sortConfig]);

  const paginatedData = sortedData.slice((currentPage - 1) * rowsPerPage, currentPage * rowsPerPage);

  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        value={filterText}
        onChange={handleFilterChange}
        className="filter-input"
      />
      <Table columns={columns} data={paginatedData} sortConfig={sortConfig} requestSort={requestSort} />
      <div className="pagination">
        {Array.from({ length: Math.ceil(sortedData.length / rowsPerPage) }, (_, index) => (
          <button
            key={index + 1}
            onClick={() => handlePageChange(index + 1)}
            className={index + 1 === currentPage ? 'active' : ''}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

TableWithPaginationAndFilter.propTypes = {
  columns: PropTypes.arrayOf(PropTypes.string).isRequired,
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  rowsPerPage: PropTypes.number,
};

TableWithPaginationAndFilter.defaultProps = {
  rowsPerPage: 10,
};

export default TableWithPaginationAndFilter;
