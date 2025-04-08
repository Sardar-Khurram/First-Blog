import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Link from 'next/link';
import Image from 'next/image';

const Blog = () => {
    // const contentDir = path.join(process.cwd(), 'content');
    // const contentDir = 'content'; // Adjust this path as needed
    // console.log(contentDir); // Add this line to debug
    // const dirContent = fs.readdirSync(contentDir, 'utf-8');


    const contentDir = path.join(process.cwd(), 'content');
    const dirContent = fs.readdirSync(contentDir, 'utf-8');
    console.log(dirContent); // Add this line to debug

    const blogs = dirContent.map(file => {
        const filePath = path.join(contentDir, file);
        const fileContent = fs.readFileSync(filePath, 'utf-8');
        const { content, data } = matter(fileContent);
        return { content, data };
    });

    console.log(blogs); // Add this line to debug

    return (
        <section className="container px-4 py-10 mx-auto">
            <div className="text-center mb-8">
                <h2 className="text-4xl font-bold text-gray-800 dark:text-gray-200">Top Blogs</h2>
                <p className="mt-4 text-lg text-gray-500 dark:text-gray-300">Explore our most popular blog posts.</p>
            </div>

            <div className="flex flex-col lg:flex-row lg:space-x-8">
                {blogs.map((blog, index) => (
                    <div key={index} className="w-full lg:w-1/3 p-6 mt-8 lg:mt-0 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl text-center flex flex-col">
                        <div className="relative w-full h-48">
                            <Image
                                src={`/${blog.data.image}`}
                                alt={blog.data.title}
                                layout="fill" // Makes the image fill the parent container
                                objectFit="cover" // Ensures the image covers the container like `object-cover`
                                className="rounded-t-lg" // Applies the border radius styling
                            />
                        </div>
                        <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mt-4">{blog.data.title}</h3>
                        <p className="mt-4 text-lg text-gray-500 dark:text-gray-300 flex-grow">{blog.data.description}</p>
                        <p className="mt-2 text-sm text-gray-400 dark:text-gray-500">By {blog.data.author} on {new Date(blog.data.date).toLocaleDateString()}</p>
                        <Link href={`/blogpost/${blog.data.slug}`} className="mt-6 w-full py-2 bg-primary text-white dark:text-gray-800 rounded-lg hover:bg-primary/70 focus:outline-none focus:bg-primary/70 block">Click here</Link>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Blog;