import Link from 'next/link'
import  { getPostsMeta, getPostByName } from '@/lib/posts'
import { notFound } from "next/navigation"

import 'highlight.js/styles/github-dark.css'

export const revalidate = 10;

type Props = {
    params: {
        postId: string
        language: string
    }
}

export async function generateStaticParams() {
    const posts = await getPostsMeta() // deduplicated!

    if(!posts) return []

    return posts.map((post) => ({
        postId: post.id
    }))
}

export async function generateMetadata({ params : { postId, language }}: Props) {

    const post = await getPostByName(`${language}/${postId}.mdx`) //deduped!

    if(!post) {
        return {
            title: 'Post Not Found'
        }
    }
   return {
    title: post.meta.title,
   }
}

export default async function Post({ params : { postId, language }}: Props) {

    const post = await getPostByName(`${language}/${postId}.mdx`) //deduped!

    if(!post) notFound()

    const { meta, content} = post

    const tags = meta?.tags?.split(',').map((tag, i) => (
        <Link key={i} href={`/tags/${tag}`}>{tag}</Link>
    ))

  return (
    <div className="post">
        <article className=''>
            {content}
        </article>
        <section>
            <h3>Related:</h3>
            <div className="flex flex-row gap-4">
                {tags}
            </div>
        </section>
        <p className="mb-10">
            <Link href="/">← Back to home</Link>
        </p>
    </div>
  )
}
