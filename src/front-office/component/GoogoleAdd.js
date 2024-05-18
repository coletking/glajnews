import React, { useEffect } from 'react';

const AdSense = ({ adClient, adSlot }) => {
  
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7832400333464323';
    script.async = true;
    document.body.appendChild(script);

    const ins = document.createElement('ins');
    ins.className = 'adsbygoogle';
    ins.style.display = 'inline-block';
    ins.setAttribute('data-ad-client', adClient);
    ins.setAttribute('data-ad-slot', adSlot);
    document.body.appendChild(ins);

    (window.adsbygoogle = window.adsbygoogle || []).push({});
  }, []);

  return <div />; // Placeholder element
};

export default AdSense;

