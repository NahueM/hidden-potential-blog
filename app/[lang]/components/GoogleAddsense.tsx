import React from 'react'

function GoogleAddsense() {
  return (
    <script async src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${process.env.GOOGLE_ADDSENSE_ID}`}
     crossOrigin="anonymous"></script>
  )
}

export default GoogleAddsense