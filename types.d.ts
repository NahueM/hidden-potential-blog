import { JSXElementConstructor } from "react"

type Meta = {
    id: string,
    title: string,
    date: string,
    tags: string[],
    lang: string,
    description: string
}
type BlogPost = {
    meta: Meta,
    content: ReactElement<any, string | JSXElementConstructor<any>>,
}