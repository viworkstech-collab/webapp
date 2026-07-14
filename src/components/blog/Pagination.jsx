const Pagination = () => {
  return (
    <section className="pagination">
      <button>Earlier</button>

      <div className="page-numbers">
        <span className="active-page">01</span>
        <span>02</span>
        <span>03</span>
      </div>

      <button>Later</button>
    </section>
  );
};

export default Pagination;