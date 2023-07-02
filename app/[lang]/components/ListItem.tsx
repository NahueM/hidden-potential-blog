import Link from "next/link"
import Image from "next/image"
import getFormattedDate from "@/lib/getFormattedDate"
import { Meta } from "@/types"

type Props = {
    post: Meta
}

export default function ListItem({ post }: Props) {
    const { id: name, title, date, description, imgUrl } = post
    const formattedDate = getFormattedDate(date)

    const language = name.split('/')[0]
    const id = name.split('/')[1]

    return (
        <Link href={`/posts/${language}/${id}`} className='bg-slate-900 drop-shadow-lg hover:drop-shadow-xl max-h-[600px] overflow-hidden text-ellipsis no-underline'>
            <div className='group cursor-pointer border-zinc-400 rounded-lg overflow-hidden no-underline'>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <Image
                    src={imgUrl}
                    className='mt-0 mb-0 h-60 w-full object-cover group-hover:scale-105 transition-transform duration-200 ease-in-out'
                    alt='blog img portrait'
                    width={300}
                    height={300}
                />
                <div className='flex justify-between p-5'>
                    <div >
                        <div className='text-zinc-400'>{formattedDate}</div>
                        <div className="block ">
                                <h1 className='text-lg font-bold text-indigo-500'>{title}</h1>
                                <p className='mx-1 overflow-hidden overflow-ellipsis mb-2'>
                                    {description}
                                </p>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    )
}
