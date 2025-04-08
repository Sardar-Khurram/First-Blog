import matter from "gray-matter"
import fs from "fs"
import { notFound } from "next/navigation";
import rehypeDocument from 'rehype-document'
import rehypeFormat from 'rehype-format'
import rehypeStringify from 'rehype-stringify'
import remarkParse from 'remark-parse'
import remarkRehype from 'remark-rehype'
import {unified} from 'unified'
import {reporter} from 'vfile-reporter'
import { transformerCopyButton } from '@rehype-pretty/transformers'
import rehypePrettyCode from "rehype-pretty-code";


export default async function Page({ params }) {

    const filePath = `content/${params.slug}.md`;
    console.log(filePath);
    if (!fs.existsSync(filePath)) {
        notFound();
    }

    const fileContent = fs.readFileSync(filePath, "utf-8");
    const { content, data } = matter(fileContent);
    const formattedDate = new Date(data.date).toLocaleDateString();

    const processor = unified()
  .use(remarkParse)
  .use(remarkRehype)
  .use(rehypeDocument, {title: '👋🌍'})
  .use(rehypeFormat)
  .use(rehypeStringify)
  .use(rehypePrettyCode, {
    theme:'github-dark',
    transformers: [
        transformerCopyButton({
          visibility: 'always',
          feedbackDuration: 3_000,
        }),
      ],
  })

  const htmlContent = (await processor.process(content)).toString();

    return (
        <div className="max-w-5xl mx-auto p-6">
            <h1 className="text-5xl font-bold  mb-4">{data.title}</h1>
            <p className="text-lg  mb-2 border-l-4 border-gray-500 pl-4">&quot;{data.description}&quot;</p>
            <div className="flex gap-2">
                <p className="text-sm text-gray-500 mb-6 italic">By {data.author}</p>
                <p className="text-sm text-gray-500 mb-6">{formattedDate}</p>
            </div>
            <div className="prose dark:prose-invert" dangerouslySetInnerHTML={{ __html: htmlContent }} /><div />
        </div>
    )
}
