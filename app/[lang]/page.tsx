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
      <LocaleSwitcher />
      <MyProfilePic />
      <p className="dark:text-white mt-12 mb-12 text-3xl text-center">
        {dictionary?.greeting} 👋&nbsp;
        <span className="whitespace-nowrap">
          esto es <span className="font-bold"> Hidden Potential </span>.
        </span>
      </p>
      {/* @ts-expect-error Server Component */}
      <Posts lang={lang}/>
    </div>
  )
}
