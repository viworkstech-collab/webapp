import BlogHero from "../components/blog/BlogHero";
import CategoryTabs from "../components/blog/CategoryTabs";
import ArticleList from "../components/blog/ArticleList";
import Pagination from "../components/blog/Pagination";
import Footer from "../components/common/Footer";
const Blog = () => {
  return (
    <>
      <BlogHero />
      <CategoryTabs />
      <ArticleList />
      <Pagination />
      <Footer />
    </>
  );
};

export default Blog;