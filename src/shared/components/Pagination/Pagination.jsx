import ReactPaginate from 'react-paginate';
import PropTypes from 'prop-types';

import styles from './pagination.module.scss';

const Pagination = ({ onPageClick, pageCount = 1, currentPage = 1 }) => {
    return (
        <div className={styles.paginationContainer}>
            <ReactPaginate
                nextLabel=""
                onPageChange={onPageClick}
                pageRangeDisplayed={3}
                marginPagesDisplayed={1}
                pageCount={pageCount}
                previousLabel=""
                pageClassName={styles.item}
                pageLinkClassName={styles.link}
                previousClassName={styles.item}
                previousLinkClassName={styles.prevLink}
                nextClassName={styles.item}
                nextLinkClassName={styles.nextLink}
                breakLabel="..."
                breakClassName={styles.item}
                breakLinkClassName={styles.link}
                activeClassName={styles.active}
                renderOnZeroPageCount={null}
                className={styles.pagination}
                forcePage={currentPage - 1}
            />
        </div>
    );
};

Pagination.propTypes = {
    onPageClick: PropTypes.func.isRequired,
    pageCount: PropTypes.number.isRequired,
    currentPage: PropTypes.number,
};

export default Pagination;
