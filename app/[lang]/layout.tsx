'use client'
import './globals.css'
import Navbar from './components/Navbar';
import { i18n } from '../../i18n-config'
import GoogleAnalytics from './components/GoogleAnalitycs';
import VerticalAd from './components/VerticalAd';

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }))
}

export default function RootLayout({
  children,
  params
}: {
  children: React.ReactNode 
  params: { lang: string }
}) {

return (
  <html lang={params.lang}>
    <body className="bg-slate-800">
      {process.env.GOOGLE_ANALYTICS_ID ? (
      <GoogleAnalytics ga_id={process.env.GOOGLE_ANALYTICS_ID}/>
        ) : null}
        <Navbar />
        <div className='flex justify-center px-4 md:px-6  max-w-7xl e  mx-auto'>
          {process.env.NODE_ENV === 'production' && typeof window !== 'undefined' && <VerticalAd />}
          <main className="flex justify-center px-4 md:px-6 prose max-w-7xl prose-slate prose-invert mx-auto">
            {children}
          </main>
          {process.env.NODE_ENV === 'production' && typeof window !== 'undefined' && <VerticalAd />}
        </div>
    </body>
  </html>
)
}