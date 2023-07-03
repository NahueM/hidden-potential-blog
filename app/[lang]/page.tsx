import Posts from '@/app/[lang]/components/Posts';
import MyProfilePic from './components/MyProfilePic';
import { getDictionary } from '../../get-dictionary'
import { Locale } from '../../i18n-config'
import LocaleSwitcher from './components/LocaleSwitcher';

export const revalidate = 86400;

export default async function Home({params: { lang }} : {params: {lang: Locale}}) {
    
  const dictionary = await getDictionary(lang)

  return (
    <div className="mx-auto">
      <div className='w-full flex justify-end'>
        <LocaleSwitcher lang={lang}/>
      </div>
      {/* <MyProfilePic /> */}
      <div className='w-full flex justify-start'>
        <p className="text-white mt-4 mb-2 text-3xl text-center">
          {dictionary?.recentPosts} 
        </p>
      </div>
      {/* @ts-expect-error Server Component */}
      <Posts lang={lang}/>
    </div>
  )
}
