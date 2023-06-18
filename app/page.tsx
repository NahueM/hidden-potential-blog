import Posts from '@/app/components/Posts';
import MyProfilePic from './components/MyProfilePic';

export const revalidate = 10;

export default function Home() {
  return (
    <div className="mx-auto">
      <MyProfilePic />
      <p className="dark:text-white mt-12 mb-12 text-3xl text-center">
        Hola y bienvenido 👋&nbsp;
        <span className="whitespace-nowrap">
          esto es <span className="font-bold"> Tech Blog</span>.
        </span>
      </p>
      <Posts />
    </div>
  )
}
