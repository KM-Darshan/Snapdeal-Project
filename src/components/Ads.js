

import "./ads.css";

let AdsSection = () => {
  return (
    <div className="ads-section">
      <div className="ads-banner">
        <img
          src="https://tse1.mm.bing.net/th/id/OIP.6voT8dy0KsNQsEgvX7iMKwHaIq?pid=Api&P=0&h=180"
          alt="Mobile Offer"
        />
        <div className="ads-content">
          <h1>Download Snapdeal App Now</h1>
          <p>Fast, Simple & Delightful.</p>
           <p>All it takes is 30 seconds to Download.</p>
          <button>Shop Now</button>
        </div>
      </div>
    </div>
  );
};

export default AdsSection;
