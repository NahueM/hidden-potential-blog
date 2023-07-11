import { getPostsMeta } from '@/lib/posts';
import ListItem from '@/app/[lang]/components/ListItem';

export default async function Posts({lang}: {lang: 'string'}) {
  const posts = await getPostsMeta(lang)

  //const latestPosts = posts?.slice(0,6)

  if(!posts) {
    return <p className="mt-10 text-center">Sorry, no posts available.</p>
  }

  return (
    <section className="mx-auto w-full">
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6 p-2 md:p-6 bg-transparent"> 
            {posts.map(post =>(
                <ListItem key={post.id} post={post} />
            ))}
        </ul>
    </section>
  )
}

