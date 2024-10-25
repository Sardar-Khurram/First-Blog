"use client"
import { useEffect, useState } from 'react';
import React from 'react';
import Link from 'next/link';
import { Button } from "/components/ui/button"
import LoadingBar from 'react-top-loading-bar'
import { usePathname } from 'next/navigation';
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "/components/ui/sheet"
import { ModeToggle } from '../theme-btn';
import { setTimeout } from 'timers';


const Navbar = () => {

    const [progress, setprogress] = useState(0);
    const pathName = usePathname()

    useEffect(() => {
        setprogress(30);

        setTimeout(() => {
            setprogress(70);
        }, 100);

        setTimeout(() => {
            setprogress(100);
        }, 300);

    }, [pathName])

    useEffect(() => {
        setTimeout(() => {
            setprogress(0);
        }, 400);
    },[])

    return (
        <nav className="z-10 container mx-auto p-4 bg-background/50 sticky top-0 backdrop-blur  border-b">
            <LoadingBar
                color='#f11946'
                progress={progress}
                onLoaderFinished={() => setprogress(0)}
            />
            <div className="flex items-center justify-between">
                <div className="text-lg font-bold">
                    <Link href="/" className="text-xl font-bold">&lt;/Sardar Blog;&gt;
                    </Link>
                </div>
                <div className="hidden md:flex items-center justify-center space-x-4">
                    <Link href="/" className="hover:scale-100 hover:font-semibold transition-transform duration-500">Home
                    </Link>
                    <Link href="/about" className="hover:scale-100 hover:font-semibold transition-transform duration-500">About
                    </Link>
                    <Link href="/contact" className="hover:scale-100 hover:font-semibold transition-transform duration-500">Contact
                    </Link>
                    <Link href="/blog" className="hover:scale-100 hover:font-semibold transition-transform duration-500">Blog
                    </Link>
                    <Link href="/signin" className="">
                        <Button variant="outline" className="">Sign in</Button>
                    </Link>
                    <Link href="/login" className="">
                        <Button variant="outline" className="">Login</Button>
                    </Link>
                    <ModeToggle />
                </div>
                <div className="md:hidden flex">
                    {/* This will work as a hamburger functionality */}
                    <Sheet>
                        <SheetTrigger className="text-gray-800 hover:text-blue-600 focus:outline-none">
                            <svg className=" dark:stroke-white h-10 w-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                            </svg>
                        </SheetTrigger>
                        <span className="px-4"><ModeToggle /></span>
                        <SheetContent>
                            <SheetHeader>
                                <SheetTitle>
                                    <Link href="/" className="text-xl font-bold text-gray-800 dark:text-gray-300">Sardar Blog
                                    </Link>
                                </SheetTitle>
                                <SheetDescription className="flex gap-5 items-center justify-center flex-col">
                                    <Link href="/" className=" ">Home
                                    </Link>
                                    <Link href="/about" className=" ">About
                                    </Link>
                                    <Link href="/contact" className=" ">Contact
                                    </Link>
                                    <Link href="/blog" className=" ">Blog
                                    </Link>
                                    <Link href="/" className="">
                                        <Button variant="outline" className="bg-primary hover:bg-primary/70 focus:outline-none focus:bg-primary/70 text-xs">Sign in</Button>
                                    </Link>
                                    <Link href="/" className="">
                                        <Button variant="outline" className="bg-primary hover:bg-primary/70 focus:outline-none focus:bg-primary/70 text-xs">Login</Button>
                                    </Link>
                                </SheetDescription>
                            </SheetHeader>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </nav >
    );
};

export default Navbar;
