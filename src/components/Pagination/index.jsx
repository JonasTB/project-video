import React from 'react'
import { Nav } from './styles';

const index = ({ framePerPage, totalFrames, paginate, nextPage, prevPage }) => {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalFrames / framePerPage); i++) {
        pageNumbers.push(i);
    }
    return (
        <Nav>
            <ul className="pagination justify-content-center">
                <li className="page-item">
                    <a className="page-link" href="#" onClick={() => prevPage()}>Previous</a>
                </li>
                {pageNumbers.map(num => (
                    <li className="page-item" key={num}>
                        <a onClick={() => paginate(num)} href="#" className="page-link">{num}</a>
                    </li>
                ))}
                <li className="page-item">
                    <a className="page-link" href="#" onClick={() => nextPage()}>Next</a>
                </li>
            </ul>
        </Nav>
    )
}

export default index