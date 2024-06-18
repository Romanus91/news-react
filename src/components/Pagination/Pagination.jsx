import styles from "./styles.module.css";

export default function Pagination({
  totalPage,
  handleNextPage,
  handlePrevPage,
  handlePageClick,
  currenPapge,
}) {
  return (
    <div className={styles.pagination}>
      <button
        disabled={currenPapge <= 1}
        onClick={handlePrevPage}
        className={styles.arrow}
      >
        {"<"}
      </button>
      <div className={styles.list}>
        {[...Array(totalPage)].map((_, index) => {
          return (
            <button
              onClick={() => handlePageClick(index + 1)}
              className={styles.pageNumber}
              key={index}
              disabled={index + 1 === currenPapge}
            >
              {index + 1}
            </button>
          );
        })}
      </div>
      <button disabled={currenPapge >= totalPage} onClick={handleNextPage}>
        {">"}
      </button>
    </div>
  );
}
