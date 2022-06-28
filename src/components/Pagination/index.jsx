import React from 'react';
import { Nav, Pages, List, Numbers } from './styles';

const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <Nav>
      <Pages className="pagination">
        {pageNumbers.map(number => (
          <List key={number} className='page-item'>
            <Numbers onClick={() => paginate(number)} href='!#' className='page-link'>
              {number}
            </Numbers>
          </List>
        ))}
      </Pages>
    </Nav>
  );
};

export default Pagination;