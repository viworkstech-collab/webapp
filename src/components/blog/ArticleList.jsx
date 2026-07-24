import ArticleCard from "./ArticleCard";

const ArticleList = () => {
  return (
    <section className="article-list">
      <ArticleCard
        category="Mobile Apps"
        date=""
        title="Native vs Cross-Platform Apps: Which One Is Right for Your Business?"
      />

      <ArticleCard
        category="Web Development"
        date=""
        title="10 Essential Features Every Business Website Should Have in 2026"
      />

      <ArticleCard
        category="Digital Marketing"
        date=""
        title="5 Digital Marketing Strategies That Generate More Leads"
      />

      <ArticleCard
        category="Artificial Intelligence"
        date=""
        title="How AI Is Transforming Modern Businesses"
      />

      <ArticleCard
        category="UI/UX Design"
        date=""
        title="How Great Design Improves Customer Experience"
      />
    </section>
  );
};

export default ArticleList;