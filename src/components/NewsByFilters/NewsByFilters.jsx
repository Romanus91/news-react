import NewsFilters from "../NewsFilters/NewsFilters";
import NewsList from "../NewsList/NewsList";
import Pagination from "../Pagination/Pagination";
import { TOTAL_PAGE } from "../constants/constants";
import styles from "./styles.module.css";

export default function NewsByFilters({
  filters,
  changeFilters,
  isLoading,
  news,
}) {
  const handleNextPage = () => {
    if (filters.page_number < TOTAL_PAGE) {
      changeFilters("page_number", filters.page_number + 1);
    }
  };

  const handlePrevPage = () => {
    if (filters.page_number > 1) {
      changeFilters("page_number", filters.page_number - 1);
    }
  };

  const handlePageClick = (pageNumber) => {
    changeFilters("page_number", pageNumber);
  };

  return (
    <section className={styles.section}>
      <NewsFilters filters={filters} changeFilters={changeFilters} />

      <Pagination
        handleNextPage={handleNextPage}
        handlePrevPage={handlePrevPage}
        handlePageClick={handlePageClick}
        totalPage={TOTAL_PAGE}
        currenPapge={filters.page_number}
      />

      <NewsList isLoading={isLoading} news={news} />

      <Pagination
        handleNextPage={handleNextPage}
        handlePrevPage={handlePrevPage}
        handlePageClick={handlePageClick}
        totalPage={TOTAL_PAGE}
        currenPapge={filters.page_number}
      />
    </section>
  );
}
