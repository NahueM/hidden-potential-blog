import Posts from '@/app/components/Posts';

export default function Home() {
  return (
    <main className="px-6 mx-auto">
      <p className="dark:text-white mt-12 mb-12 text-3xl text-center">
        Hola y bienvenido 👋&nbsp;
        <span className="whitespace-nowrap">
          esto es <span className="font-bold"> Tech Blog</span>.
        </span>
      </p>
      <Posts />
    </main>
  )
}
