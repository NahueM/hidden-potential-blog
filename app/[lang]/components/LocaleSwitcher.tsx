'use client'
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

type Props = {
  lang: string
}

export default function LocaleSwitcher({lang}: Props) {
  const pathName = usePathname()
  const redirectedPathName = (locale: string) => {
    if (!pathName) return '/'
    const segments = pathName.split('/')
    segments[1] = locale
    return segments.join('/')
  }

  return (
    <div className="inline-flex list-none items-center p-2 rounded-md cursor-pointer text-gray-800">
      <Link 
        href={redirectedPathName('en')} 
        key={'en'} 
        className={`px-4 py-2 text-sm rounded-l-md no-underline ${lang === 'en' ? 'bg-violet-600' : 'bg-gray-500'}`} 
      >
        {'en'}
      </Link>
      <Link 
        href={redirectedPathName('es')} 
        key={'es'} 
        className={`px-4 py-2 text-sm rounded-r-md no-underline ${lang === 'es' ? 'bg-violet-600':'bg-gray-500'}`} 
      >
        {'es'}
      </Link>
    </div>
  )
}