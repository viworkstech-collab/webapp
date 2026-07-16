import BlogHero from "../components/blog/BlogHero";
import CategoryTabs from "../components/blog/CategoryTabs";
import ArticleList from "../components/blog/ArticleList";
import Pagination from "../components/blog/Pagination";

const Blog = () => {
  return (
    <>
      <BlogHero />
      <CategoryTabs />
      <ArticleList />
      <Pagination />
    </>
  );
};

export default Blog;