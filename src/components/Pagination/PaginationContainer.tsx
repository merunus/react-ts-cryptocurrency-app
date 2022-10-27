import React from "react";
import ReactPaginate from "react-paginate";
import { TPaginationContProps } from "./types";
import styles from "./Pagination.module.scss";
import arrowLeftDisabled from "../../assets/images/arrow-left-disabled.svg";
import arrowRightDisabled from "../../assets/images/arrow-right-disabled.svg";
import arrowRightActive from "../../assets/images/arrow-right-active.svg";
import arrowLeftActive from "../../assets/images/arrow-left-active.svg";

const PaginationContainer: React.FC<TPaginationContProps> = ({
  handleChangePage,
  initialPage,
  isBigScreen,
  totalPages,
}) => {
  return (
    <section className={styles.paginationContainer}>
      <ReactPaginate
        forcePage={initialPage - 1}
        breakLabel={<div className={styles.break}>...</div>}
        nextLabel={
          <img
            src={
              initialPage === totalPages ? arrowRightDisabled : arrowRightActive
            }
            alt="arrow-left"
          />
        }
        containerClassName={styles.container}
        pageClassName={styles.page}
        pageLinkClassName={styles.pageLink}
        previousClassName={`${styles.previous}`}
        previousLinkClassName={styles.previousLink}
        nextLinkClassName={styles.nextLink}
        nextClassName={`${styles.next}`}
        disabledClassName={styles.disabled}
        activeClassName={styles.pageActive}
        activeLinkClassName={styles.pageLinkActive}
        onPageChange={handleChangePage}
        pageRangeDisplayed={isBigScreen ? 3 : 1}
        marginPagesDisplayed={isBigScreen ? 3 : 2}
        pageCount={totalPages}
        previousLabel={
          <img
            src={initialPage === 1 ? arrowLeftDisabled : arrowLeftActive}
            alt="arrow-left"
          />
        }
        disableInitialCallback={true}
      />
    </section>
  );
};

export default PaginationContainer;
