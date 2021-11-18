import React from "react";

const Subscription = () => {
  return (
    <>
      <div className="footer-section section">
        <div className="section-center">
          <h2>Join our newsletter and get 20% off</h2>
          <div className="subscription-content">
            <div className="text sub-center">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
                sint unde quaerat ratione soluta veniam provident adipisci
                cumque eveniet tempore?
              </p>
            </div>
            <div className="email sub-center">
              <input type="email" placeholder="enter email" />
              <button type="submit" className="btn btn-primary">
                subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Subscription;
