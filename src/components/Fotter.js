import React from "react";
import "./FooterFeatures.css";

const Footer = () => {
  const features = [
    {
      icon: "🔒",
      title: "100% SECURE PAYMENTS",
      desc: "Moving your card details to a much more secured place",
    },
    {
      icon: "🛡️",
      title: "TRUSTPAY",
      desc: "100% Payment Protection. Easy Return Policy",
    },
    {
      icon: "💬",
      title: "HELP CENTER",
      desc: "Got a question? Look no further. Browse our FAQs or submit your query here.",
    },
    {
      icon: "📱",
      title: "SHOP ON THE GO",
      desc: "Download the app and get exciting app only offers at your fingertips.",
    },
  ];

  return (
    <div className="footer-features">
      {features.map((item, index) => (
        <div key={index} className="feature-card">
          <div className="feature-icon">{item.icon}</div>
          <h4>{item.title}</h4>
          <p>{item.desc}</p>
        </div>
      ))}
    </div>
  );
};

export default Footer;