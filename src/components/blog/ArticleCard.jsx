const ArticleCard = ({ category, date, title }) => {
  return (
    <div className="article-card">
      <p className="article-meta">
        {category} &nbsp;&nbsp; {date}
      </p>

      <h3>{title}</h3>

      <a href="/">Read Article →</a>
    </div>
  );
};

export default ArticleCard;