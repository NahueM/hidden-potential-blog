import { useEffect } from 'react';

const VerticalAd = () => {
  useEffect(() => {
    //@ts-ignore
    (window.adsbygoogle = window.adsbygoogle || []).push({});
  }, []);
  
  return (
    <>
      <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5389951346312000" crossOrigin="anonymous"></script>
      <ins className="adsbygoogle"
        style={{"display": "block"}}
        data-ad-client="ca-pub-5389951346312000"
        data-ad-slot="8256914601"
        data-ad-format="auto"
        data-full-width-responsive="true"></ins>
    </>
  );
}

export default VerticalAd