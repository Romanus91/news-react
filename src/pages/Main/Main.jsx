import { useEffect } from "react";
import NewsBanner from "../../components/NewsBanner/NewsBanner";
import styles from "./styles.module.css";
import { getCategories, getNews } from "../../api/apiNews";
import { useState } from "react";
import NewsList from "../../components/NewsList/NewsList";
import Skeleton from "../../components/Skeleton/Skeleton";
import Pagination from "../../components/Pagination/Pagination";
import Categories from "../../components/Categories/Categories";

export default function Main() {
  const [news, setNews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currenPapge, setCurrentPage] = useState(1);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const totalPage = 10;
  const pageSize = 10;

  const fetchNews = async (currenPapge) => {
    setIsLoading(true);
    try {
      const response = await getNews({
        page_number: currenPapge,
        page_size: pageSize,
        category: selectedCategory === "All" ? null : selectedCategory,
      });
      setNews(response.news);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchCategories = async () => {
    try {
      const response = await getCategories();
      setCategories(["All", ...response.categories]);
    } catch (error) {
      console.log(error);
    }
  };
  console.log(categories);

  useEffect(() => {
    fetchCategories();
  }, []);

  useEffect(() => {
    fetchNews(currenPapge);
  }, [currenPapge, selectedCategory]);

  const handleNextPage = () => {
    if (currenPapge < totalPage) {
      setCurrentPage(currenPapge + 1);
    }
  };

  const handlePrevPage = () => {
    if (currenPapge > 1) {
      setCurrentPage(currenPapge - 1);
    }
  };

  const handlePageClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <main className={styles.main}>
      <Categories
        categories={categories}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
      {news.length > 0 && !isLoading ? (
        <NewsBanner item={news[0]} />
      ) : (
        <Skeleton count={1} type={"banner"} />
      )}

      <Pagination
        handleNextPage={handleNextPage}
        handlePrevPage={handlePrevPage}
        handlePageClick={handlePageClick}
        totalPage={totalPage}
        currenPapge={currenPapge}
      />

      {!isLoading ? (
        <NewsList news={news} />
      ) : (
        <Skeleton count={10} type={"item"} />
      )}

      <Pagination
        handleNextPage={handleNextPage}
        handlePrevPage={handlePrevPage}
        handlePageClick={handlePageClick}
        totalPage={totalPage}
        currenPapge={currenPapge}
      />
    </main>
  );
}
