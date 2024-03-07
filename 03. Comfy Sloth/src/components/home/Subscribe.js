const Subscribe = () => {
  return (
    <section className="section subscribe-section">
      <div className="section-center">
        <h3>Join our newsletter and get 20% off</h3>
        <div className="subscribe-center">
          <article className="subscribe-content">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
              sint unde quaerat ratione soluta veniam provident adipisci cumque
              eveniet tempore?
            </p>
          </article>
          <form className="subscribe-form">
            <input
              type="email"
              className="subscribe-input"
              placeholder="enter email"
            />
            <button type="submit" className="btn subscribe-btn">
              subscribe
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Subscribe;
