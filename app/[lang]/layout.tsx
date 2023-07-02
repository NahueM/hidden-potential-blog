'use client'
import './globals.css'
import Navbar from './components/Navbar';
import { i18n } from '../../i18n-config'

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
    <body className="dark:bg-slate-800">
        <Navbar />
        <main className="flex justify-center px-4 md:px-6 prose max-w-7xl prose-slate dark:prose-invert mx-auto">
          {children}
        </main>
    </body>
  </html>
)
}