import ArticleCard from "./ArticleCard";

const ArticleList = () => {
  return (
    <section className="article-list">
      <ArticleCard
        category="ENGINEERING"
        date="March 14, 2024"
        title="Scaling Distributed Systems: Lessons from the Edge of Infrastructure."
      />

      <ArticleCard
        category="ARCHITECTURE"
        date="February 21, 2024"
        title="The Modern Data Stack is Dead. Long Live the Modular Engine."
      />

      <ArticleCard
        category="STRATEGY"
        date="January 18, 2024"
        title="Why Intellectual Clarity is the Ultimate Competitive Advantage."
      />

      <ArticleCard
        category="ENGINEERING"
        date="December 10, 2023"
        title="Rust vs C++: A Nuanced Take on Memory Safety in High-Frequency Environments."
      />

      <ArticleCard
        category="PRODUCT"
        date="November 27, 2023"
        title="Beyond MVP: Building for Permanence in a Throwaway Culture."
      />
    </section>
  );
};

export default ArticleList;