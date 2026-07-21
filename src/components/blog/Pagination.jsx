const Pagination = () => {
  return (
    <section className="pagination">
      <button className="hover-btn">Earlier</button>

      <div className="page-numbers">
        <span className="active-page hover-link">01</span>
        <span className="hover-link">02</span>
        <span className="hover-link">03</span>
      </div>

      <button className="hover-btn">Later</button>
    </section>
  );
};

export default Pagination;