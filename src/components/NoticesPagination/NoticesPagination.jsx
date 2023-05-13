import ReactPaginate from 'react-paginate';

import styles from './notices-pagination.module.scss';

function NoticesPagination({ handlePageClick, pageCount }) {
    return (
        <div className={styles.paginationContainer}>
            <ReactPaginate
                nextLabel=""
                onPageChange={handlePageClick}
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
            />
        </div>
    );
}

export default NoticesPagination;
