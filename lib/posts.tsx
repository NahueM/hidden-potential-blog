import rehypeAutolinkHeadings from 'rehype-autolink-headings/lib'
import rehypeHighlight from 'rehype-highlight/lib'
import rehypeSlug from 'rehype-slug'

import { compileMDX } from 'next-mdx-remote/rsc';
import Video from '@/app/[lang]/components/Video';
import CustomImage from '@/app/[lang]/components/CustomImage';

import { BlogPost, Meta } from '@/types';

type FileTree = {
    "tree": [
        {
            "path": string
        }
    ]
}

export async function getPostByName(fileName: string): Promise<BlogPost | undefined>{
    const res = await fetch(`https://raw.githubusercontent.com/nahuem/tech-blogs-mdx/main/${fileName}`, {
        method: 'GET',
        headers: {
            Accept: 'application/vnd.github+json',
            Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
            'X-GitHub-Api-Version': '2022-11-28',
        }
    })
    if(!res.ok) return undefined

    const rawMDX = await res.text();

    if(rawMDX === '404: not Found') return undefined;

    const { frontmatter, content } = await compileMDX<{title: string, date: string, tags: string[], lang: string, description: string}>({
        source: rawMDX,
        components: {
            Video,
            CustomImage
        },
        options: {
            parseFrontmatter: true,
            mdxOptions: {
                rehypePlugins: [
                    rehypeHighlight,
                    rehypeSlug,
                    [rehypeAutolinkHeadings, {
                        behavior: 'wrap'
                    }],
                ],
            },
        }
    })

    const id = fileName.replace(/\.mdx$/, '')

    const blogPostObj: BlogPost = { meta: { 
        id, 
        title:frontmatter.title, 
        date: frontmatter.date, 
        tags: frontmatter.tags,
        lang: frontmatter.lang,
        description: frontmatter.description
    }, content}

    return blogPostObj

}

export async function getPostsMeta(lang?: 'string' | null): Promise< Meta[] | undefined >{
    if(typeof lang === 'string'){
        const res = await fetch(`https://api.github.com/repos/nahuem/tech-blogs-mdx/git/trees/main?recursive=1`, {
            method: 'GET',
            headers: {
                Accept: 'application/vnd.github+json',
                Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
                'X-GitHub-Api-Version': '2022-11-28'
            }
        })
        
        if (!res.ok) return undefined

    const repoFileTree: FileTree = await res.json();

    const filesArray = repoFileTree.tree.map(obj => obj.path).filter(path => path.endsWith('.mdx'))
    const filesByLanguage = filesArray.filter(file => file.startsWith(`${lang}/`))
    
    const posts: Meta[] = []

    for(const file of filesByLanguage) {
        const post = await getPostByName(file)
        if(post) {
            const { meta } = post
            posts.push(meta)
        }
    }
    return posts.sort((a , b) => a.date < b.date ? 1 : -1)
    }
}