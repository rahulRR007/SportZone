import React, { useEffect, useState } from 'react';
import '../css/Preloader.css'; // Import the CSS file for preloader styles

const Preloader = ({ setLoadingComplete }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
      setLoadingComplete(true);
    }, 3000); // Adjust the timeout duration as needed

    return () => clearTimeout(timer);
  }, [setLoadingComplete]);

  if (!loading) return null;

  return (
    <div id="preloader">
      <div className="ps-bg"></div>
      <div className="content">
        <ul className="ps-logo">
          <li className="let">Let</li>
          <li className="the">The</li>
          <li className="world">World</li>
          <li className="play">Play</li>
        </ul>
      </div>
    </div>
  );
};

export default Preloader;
