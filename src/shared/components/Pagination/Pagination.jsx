import ReactPaginate from 'react-paginate';

import styles from './pagination.module.scss';

function Pagination({ onPageClick, pageCount, currentPage }) {
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
                forcePage={currentPage}
            />
        </div>
    );
}

export default Pagination;
