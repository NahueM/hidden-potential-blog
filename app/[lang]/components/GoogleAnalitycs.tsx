const GoogleAnalytics = ({ ga_id }:{ ga_id: string}) => (
    <>
      <script
        async
        src={`https://www.googletagmanager.com/gtag/js?id=${ga_id}`}
      ></script>
      <script async src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${process.env.GOOGLE_ADDSENSE_ID}`}
     crossOrigin="anonymous"></script>
      <script
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
      
            gtag('config', '${ga_id}');
          `,
        }}
      ></script>
    </>
  );
  export default GoogleAnalytics;