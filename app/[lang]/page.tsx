import Posts from '@/app/[lang]/components/Posts';
import MyProfilePic from './components/MyProfilePic';
import { getDictionary } from '../../get-dictionary'
import { Locale } from '../../i18n-config'
import LocaleSwitcher from './components/LocaleSwitcher';
import Head from 'next/head';
import GoogleAddsense from './components/GoogleAddsense';

export const revalidate = 86400;

export default async function Home({params: { lang }} : {params: {lang: Locale}}) {
    
  const dictionary = await getDictionary(lang)

  return (
    <div className="mx-auto">
      <Head>
        <title>Crecimiento Personal: Consejos y Recursos para Transformar Tu Vida | [Hidden Potential]</title>
				<meta name="description" content="Descubre consejos prácticos y técnicas comprobadas para el crecimiento personal en áreas como el bienestar emocional, el desarrollo profesional y las relaciones personales. Obtén inspiración y recursos para alcanzar tu máximo potencial y crear una vida plena y significativa."/>
        <GoogleAddsense />
			</Head>
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
