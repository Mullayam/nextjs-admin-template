"use client"
import React, { useState } from 'react'

const page = () => {
    const [open, setOpen] = useState(true);
    

    return (
        <>           
                <nav className="fixed z-30 w-full bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
                    <div className="mx-auto flex flex-wrap items-center justify-between">
                        <div className="w-full p-3 lg:px-5 lg:pl-3">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center">
                                    <button onClick={() => setOpen(!open)} className="mr-3 cursor-pointer rounded p-2 text-gray-600 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white lg:inline">
                                        <span className="sr-only">Toggle sidebar</span>
                                        <svg
                                            stroke="currentColor"
                                            fill="currentColor"
                                            strokeWidth={0}
                                            viewBox="0 0 20 20"
                                            className="h-6 w-6"
                                            height="1em"
                                            width="1em"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                    </button>
                                    <a className="flex items-center" href="/">
                                        <img
                                            alt=""
                                            src="https://flowbite.com/docs/images/logo.svg"
                                            className="mr-3 h-6 sm:h-8"
                                        />
                                        <span className="self-center whitespace-nowrap text-2xl font-semibold dark:text-white">
                                            Flowbite
                                        </span>
                                    </a>
                                    <form className="ml-16 hidden md:block">
                                        <label
                                            className="text-sm font-medium text-gray-900 dark:text-gray-300 sr-only"
                                            htmlFor="search"
                                        >
                                            Search
                                        </label>
                                        <div className="flex">
                                            <div className="relative w-full">
                                                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                                                    <svg
                                                        stroke="currentColor"
                                                        fill="currentColor"
                                                        strokeWidth={0}
                                                        viewBox="0 0 20 20"
                                                        className="h-5 w-5 text-gray-500 dark:text-gray-400"
                                                        height="1em"
                                                        width="1em"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path
                                                            fillRule="evenodd"
                                                            d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                                                            clipRule="evenodd"
                                                        />
                                                    </svg>
                                                </div>
                                                <input
                                                    className="block w-full border disabled:cursor-not-allowed disabled:opacity-50 bg-gray-50 border-gray-300 text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500 pl-10 rounded-lg p-2.5 text-sm"
                                                    id="search"
                                                    name="search"
                                                    placeholder="Search"

                                                    size={32}
                                                    type="search"
                                                />
                                            </div>
                                        </div>
                                    </form>
                                </div>
                                <div className="flex items-center lg:gap-3">
                                    <div className="flex items-center">
                                        <button className="cursor-pointer rounded p-2 text-gray-600 hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:ring-2 focus:ring-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:bg-gray-700 dark:focus:ring-gray-700 lg:hidden">
                                            <span className="sr-only">Search</span>
                                            <svg
                                                stroke="currentColor"
                                                fill="currentColor"
                                                strokeWidth={0}
                                                viewBox="0 0 20 20"
                                                className="h-6 w-6"
                                                height="1em"
                                                width="1em"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                                                    clipRule="evenodd"
                                                />
                                            </svg>
                                        </button>
                                        <div
                                            className="w-fit dark:text-white"
                                            data-testid="flowbite-tooltip-target"
                                        >
                                            <button className="flex items-center">
                                                <span className="rounded-lg p-2 hover:bg-gray-100 dark:hover:bg-gray-700">
                                                    <span className="sr-only">Notifications</span>
                                                    <svg
                                                        stroke="currentColor"
                                                        fill="currentColor"
                                                        strokeWidth={0}
                                                        viewBox="0 0 20 20"
                                                        className="text-2xl text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white "
                                                        height="1em"
                                                        width="1em"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
                                                    </svg>
                                                </span>
                                            </button>
                                        </div>
                                        <div
                                            data-testid="flowbite-tooltip"
                                            tabIndex={-1}
                                            className="z-10 w-fit rounded-xl divide-y divide-gray-100 shadow transition-opacity duration-100 invisible opacity-0 border border-gray-200 bg-white text-gray-900 dark:border-none dark:bg-gray-700 dark:text-white"
                                            id=":r0:"
                                            role="tooltip"
                                            style={{ position: "absolute", top: 61, left: "884.984px" }}
                                        >
                                            <div className="rounded-xl text-sm text-gray-700 dark:text-gray-200">
                                                <ul className="">
                                                    <div className="max-w-[24rem]">
                                                        <div className="block rounded-t-xl bg-gray-50 py-2 px-4 text-center text-base font-medium text-gray-700 dark:bg-gray-700 dark:text-gray-400">
                                                            Notifications
                                                        </div>
                                                        <div>
                                                            <a
                                                                href="#"
                                                                className="flex border-y py-3 px-4 hover:bg-gray-100 dark:border-gray-600 dark:hover:bg-gray-600"
                                                            >
                                                                <div className="shrink-0">
                                                                    <img
                                                                        alt=""
                                                                        src="../images/users/bonnie-green.png"
                                                                        className="h-11 w-11 rounded-full"
                                                                    />
                                                                    <div className="absolute -mt-5 ml-6 flex h-5 w-5 items-center justify-center rounded-full border border-white bg-primary-700 dark:border-gray-700">
                                                                        <svg
                                                                            className="h-3 w-3 text-white"
                                                                            fill="currentColor"
                                                                            viewBox="0 0 20 20"
                                                                            xmlns="http://www.w3.org/2000/svg"
                                                                        >
                                                                            <path d="M8.707 7.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l2-2a1 1 0 00-1.414-1.414L11 7.586V3a1 1 0 10-2 0v4.586l-.293-.293z" />
                                                                            <path d="M3 5a2 2 0 012-2h1a1 1 0 010 2H5v7h2l1 2h4l1-2h2V5h-1a1 1 0 110-2h1a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V5z" />
                                                                        </svg>
                                                                    </div>
                                                                </div>
                                                                <div className="w-full pl-3">
                                                                    <div className="mb-1.5 text-sm font-normal text-gray-500 dark:text-gray-400">
                                                                        New message from&nbsp;
                                                                        <span className="font-semibold text-gray-900 dark:text-white">
                                                                            Bonnie Green
                                                                        </span>
                                                                        : "Hey, what's up? All set for the
                                                                        presentation?"
                                                                    </div>
                                                                    <div className="text-xs font-medium text-primary-700 dark:text-primary-400">
                                                                        a few moments ago
                                                                    </div>
                                                                </div>
                                                            </a>
                                                            <a
                                                                href="#"
                                                                className="flex border-b py-3 px-4 hover:bg-gray-100 dark:border-gray-600 dark:hover:bg-gray-600"
                                                            >
                                                                <div className="shrink-0">
                                                                    <img
                                                                        alt=""
                                                                        src="../images/users/jese-leos.png"
                                                                        className="h-11 w-11 rounded-full"
                                                                    />
                                                                    <div className="absolute -mt-5 ml-6 flex h-5 w-5 items-center justify-center rounded-full border border-white bg-gray-900 dark:border-gray-700">
                                                                        <svg
                                                                            className="h-3 w-3 text-white"
                                                                            fill="currentColor"
                                                                            viewBox="0 0 20 20"
                                                                            xmlns="http://www.w3.org/2000/svg"
                                                                        >
                                                                            <path d="M8 9a3 3 0 100-6 3 3 0 000 6zM8 11a6 6 0 016 6H2a6 6 0 016-6zM16 7a1 1 0 10-2 0v1h-1a1 1 0 100 2h1v1a1 1 0 102 0v-1h1a1 1 0 100-2h-1V7z" />
                                                                        </svg>
                                                                    </div>
                                                                </div>
                                                                <div className="w-full pl-3">
                                                                    <div className="mb-1.5 text-sm font-normal text-gray-500 dark:text-gray-400">
                                                                        <span className="font-semibold text-gray-900 dark:text-white">
                                                                            Jese Leos
                                                                        </span>
                                                                        &nbsp;and&nbsp;
                                                                        <span className="font-medium text-gray-900 dark:text-white">
                                                                            5 others
                                                                        </span>
                                                                        &nbsp;started following you.
                                                                    </div>
                                                                    <div className="text-xs font-medium text-primary-700 dark:text-primary-400">
                                                                        10 minutes ago
                                                                    </div>
                                                                </div>
                                                            </a>
                                                            <a
                                                                href="#"
                                                                className="flex border-b py-3 px-4 hover:bg-gray-100 dark:border-gray-600 dark:hover:bg-gray-600"
                                                            >
                                                                <div className="shrink-0">
                                                                    <img
                                                                        alt=""
                                                                        src="../images/users/joseph-mcfall.png"
                                                                        className="h-11 w-11 rounded-full"
                                                                    />
                                                                    <div className="absolute -mt-5 ml-6 flex h-5 w-5 items-center justify-center rounded-full border border-white bg-red-600 dark:border-gray-700">
                                                                        <svg
                                                                            className="h-3 w-3 text-white"
                                                                            fill="currentColor"
                                                                            viewBox="0 0 20 20"
                                                                            xmlns="http://www.w3.org/2000/svg"
                                                                        >
                                                                            <path
                                                                                fillRule="evenodd"
                                                                                d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                                                                                clipRule="evenodd"
                                                                            />
                                                                        </svg>
                                                                    </div>
                                                                </div>
                                                                <div className="w-full pl-3">
                                                                    <div className="mb-1.5 text-sm font-normal text-gray-500 dark:text-gray-400">
                                                                        <span className="font-semibold text-gray-900 dark:text-white">
                                                                            Joseph Mcfall
                                                                        </span>
                                                                        &nbsp;and&nbsp;
                                                                        <span className="font-medium text-gray-900 dark:text-white">
                                                                            141 others
                                                                        </span>
                                                                        &nbsp;love your story. See it and view more
                                                                        stories.
                                                                    </div>
                                                                    <div className="text-xs font-medium text-primary-700 dark:text-primary-400">
                                                                        44 minutes ago
                                                                    </div>
                                                                </div>
                                                            </a>
                                                            <a
                                                                href="#"
                                                                className="flex border-b py-3 px-4 hover:bg-gray-100 dark:border-gray-600 dark:hover:bg-gray-600"
                                                            >
                                                                <div className="shrink-0">
                                                                    <img
                                                                        alt=""
                                                                        src="../images/users/leslie-livingston.png"
                                                                        className="h-11 w-11 rounded-full"
                                                                    />
                                                                    <div className="absolute -mt-5 ml-6 flex h-5 w-5 items-center justify-center rounded-full border border-white bg-green-400 dark:border-gray-700">
                                                                        <svg
                                                                            className="h-3 w-3 text-white"
                                                                            fill="currentColor"
                                                                            viewBox="0 0 20 20"
                                                                            xmlns="http://www.w3.org/2000/svg"
                                                                        >
                                                                            <path
                                                                                fillRule="evenodd"
                                                                                d="M18 13V5a2 2 0 00-2-2H4a2 2 0 00-2 2v8a2 2 0 002 2h3l3 3 3-3h3a2 2 0 002-2zM5 7a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1zm1 3a1 1 0 100 2h3a1 1 0 100-2H6z"
                                                                                clipRule="evenodd"
                                                                            />
                                                                        </svg>
                                                                    </div>
                                                                </div>
                                                                <div className="w-full pl-3">
                                                                    <div className="mb-1.5 text-sm font-normal text-gray-500 dark:text-gray-400">
                                                                        <span className="font-semibold text-gray-900 dark:text-white">
                                                                            Leslie Livingston
                                                                        </span>
                                                                        &nbsp;mentioned you in a comment:&nbsp;
                                                                        <span className="font-medium text-primary-700 dark:text-primary-500">
                                                                            @bonnie.green
                                                                        </span>
                                                                        &nbsp;what do you say?
                                                                    </div>
                                                                    <div className="text-xs font-medium text-primary-700 dark:text-primary-400">
                                                                        1 hour ago
                                                                    </div>
                                                                </div>
                                                            </a>
                                                            <a
                                                                href="#"
                                                                className="flex py-3 px-4 hover:bg-gray-100 dark:hover:bg-gray-600"
                                                            >
                                                                <div className="shrink-0">
                                                                    <img
                                                                        alt=""
                                                                        src="../images/users/robert-brown.png"
                                                                        className="h-11 w-11 rounded-full"
                                                                    />
                                                                    <div className="absolute -mt-5 ml-6 flex h-5 w-5 items-center justify-center rounded-full border border-white bg-purple-500 dark:border-gray-700">
                                                                        <svg
                                                                            className="h-3 w-3 text-white"
                                                                            fill="currentColor"
                                                                            viewBox="0 0 20 20"
                                                                            xmlns="http://www.w3.org/2000/svg"
                                                                        >
                                                                            <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z" />
                                                                        </svg>
                                                                    </div>
                                                                </div>
                                                                <div className="w-full pl-3">
                                                                    <div className="mb-1.5 text-sm font-normal text-gray-500 dark:text-gray-400">
                                                                        <span className="font-semibold text-gray-900 dark:text-white">
                                                                            Robert Brown
                                                                        </span>
                                                                        &nbsp;posted a new video: Glassmorphism - learn
                                                                        how to implement the new design trend.
                                                                    </div>
                                                                    <div className="text-xs font-medium text-primary-700 dark:text-primary-400">
                                                                        3 hours ago
                                                                    </div>
                                                                </div>
                                                            </a>
                                                        </div>
                                                        <a
                                                            href="#"
                                                            className="block rounded-b-xl bg-gray-50 py-2 text-center text-base font-normal text-gray-900 hover:bg-gray-100 dark:bg-gray-700 dark:text-white dark:hover:underline"
                                                        >
                                                            <div className="inline-flex items-center gap-x-2">
                                                                <svg
                                                                    stroke="currentColor"
                                                                    fill="currentColor"
                                                                    strokeWidth={0}
                                                                    viewBox="0 0 20 20"
                                                                    className="h-6 w-6"
                                                                    height="1em"
                                                                    width="1em"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                >
                                                                    <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                                                                    <path
                                                                        fillRule="evenodd"
                                                                        d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                                                                        clipRule="evenodd"
                                                                    />
                                                                </svg>
                                                                <span>View all</span>
                                                            </div>
                                                        </a>
                                                    </div>
                                                </ul>
                                            </div>
                                        </div>
                                        <div
                                            className="w-fit dark:text-white"
                                            data-testid="flowbite-tooltip-target"
                                        >
                                            <button className="flex items-center">
                                                <span className="rounded-lg p-2 hover:bg-gray-100 dark:hover:bg-gray-700">
                                                    <span className="sr-only">Apps</span>
                                                    <svg
                                                        stroke="currentColor"
                                                        fill="currentColor"
                                                        strokeWidth={0}
                                                        viewBox="0 0 20 20"
                                                        className="text-2xl text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                                                        height="1em"
                                                        width="1em"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                                                    </svg>
                                                </span>
                                            </button>
                                        </div>
                                        <div
                                            data-testid="flowbite-tooltip"
                                            tabIndex={-1}
                                            className="z-10 w-fit rounded-xl divide-y divide-gray-100 shadow transition-opacity duration-100 invisible opacity-0 border border-gray-200 bg-white text-gray-900 dark:border-none dark:bg-gray-700 dark:text-white"
                                            id=":r2:"
                                            role="tooltip"
                                            style={{ position: "absolute", top: 61, left: 995 }}
                                        >
                                            <div className="rounded-xl text-sm text-gray-700 dark:text-gray-200">
                                                <ul className="">
                                                    <div className="block rounded-t-lg border-b bg-gray-50 py-2 px-4 text-center text-base font-medium text-gray-700 dark:border-b-gray-600 dark:bg-gray-700 dark:text-white">
                                                        Apps
                                                    </div>
                                                    <div className="grid grid-cols-3 gap-4 p-4">
                                                        <a
                                                            href="#"
                                                            className="block rounded-lg p-4 text-center hover:bg-gray-100 dark:hover:bg-gray-600"
                                                        >
                                                            <svg
                                                                stroke="currentColor"
                                                                fill="currentColor"
                                                                strokeWidth={0}
                                                                viewBox="0 0 20 20"
                                                                className="mx-auto mb-1 h-7 w-7 text-gray-500 dark:text-white"
                                                                height="1em"
                                                                width="1em"
                                                                xmlns="http://www.w3.org/2000/svg"
                                                            >
                                                                <path
                                                                    fillRule="evenodd"
                                                                    d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z"
                                                                    clipRule="evenodd"
                                                                />
                                                            </svg>
                                                            <div className="text-sm font-medium text-gray-900 dark:text-white">
                                                                Sales
                                                            </div>
                                                        </a>
                                                        <a
                                                            href="#"
                                                            className="block rounded-lg p-4 text-center hover:bg-gray-100 dark:hover:bg-gray-600"
                                                        >
                                                            <svg
                                                                stroke="currentColor"
                                                                fill="currentColor"
                                                                strokeWidth={0}
                                                                viewBox="0 0 20 20"
                                                                className="mx-auto mb-1 h-7 w-7 text-gray-500 dark:text-white"
                                                                height="1em"
                                                                width="1em"
                                                                xmlns="http://www.w3.org/2000/svg"
                                                            >
                                                                <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                                                            </svg>
                                                            <div className="text-sm font-medium text-gray-900 dark:text-white">
                                                                Users
                                                            </div>
                                                        </a>
                                                        <a
                                                            href="#"
                                                            className="block rounded-lg p-4 text-center hover:bg-gray-100 dark:hover:bg-gray-600"
                                                        >
                                                            <svg
                                                                stroke="currentColor"
                                                                fill="currentColor"
                                                                strokeWidth={0}
                                                                viewBox="0 0 20 20"
                                                                className="mx-auto mb-1 h-7 w-7 text-gray-500 dark:text-white"
                                                                height="1em"
                                                                width="1em"
                                                                xmlns="http://www.w3.org/2000/svg"
                                                            >
                                                                <path
                                                                    fillRule="evenodd"
                                                                    d="M5 3a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2V5a2 2 0 00-2-2H5zm0 2h10v7h-2l-1 2H8l-1-2H5V5z"
                                                                    clipRule="evenodd"
                                                                />
                                                            </svg>
                                                            <div className="text-sm font-medium text-gray-900 dark:text-white">
                                                                Inbox
                                                            </div>
                                                        </a>
                                                        <a
                                                            href="#"
                                                            className="block rounded-lg p-4 text-center hover:bg-gray-100 dark:hover:bg-gray-600"
                                                        >
                                                            <svg
                                                                stroke="currentColor"
                                                                fill="currentColor"
                                                                strokeWidth={0}
                                                                viewBox="0 0 20 20"
                                                                className="mx-auto mb-1 h-7 w-7 text-gray-500 dark:text-white"
                                                                height="1em"
                                                                width="1em"
                                                                xmlns="http://www.w3.org/2000/svg"
                                                            >
                                                                <path
                                                                    fillRule="evenodd"
                                                                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
                                                                    clipRule="evenodd"
                                                                />
                                                            </svg>
                                                            <div className="text-sm font-medium text-gray-900 dark:text-white">
                                                                Profile
                                                            </div>
                                                        </a>
                                                        <a
                                                            href="#"
                                                            className="block rounded-lg p-4 text-center hover:bg-gray-100 dark:hover:bg-gray-600"
                                                        >
                                                            <svg
                                                                stroke="currentColor"
                                                                fill="currentColor"
                                                                strokeWidth={0}
                                                                viewBox="0 0 20 20"
                                                                className="mx-auto mb-1 h-7 w-7 text-gray-500 dark:text-white"
                                                                height="1em"
                                                                width="1em"
                                                                xmlns="http://www.w3.org/2000/svg"
                                                            >
                                                                <path
                                                                    fillRule="evenodd"
                                                                    d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"
                                                                    clipRule="evenodd"
                                                                />
                                                            </svg>
                                                            <div className="text-sm font-medium text-gray-900 dark:text-white">
                                                                Settings
                                                            </div>
                                                        </a>
                                                        <a
                                                            href="#"
                                                            className="block rounded-lg p-4 text-center hover:bg-gray-100 dark:hover:bg-gray-600"
                                                        >
                                                            <svg
                                                                stroke="currentColor"
                                                                fill="currentColor"
                                                                strokeWidth={0}
                                                                viewBox="0 0 20 20"
                                                                className="mx-auto mb-1 h-7 w-7 text-gray-500 dark:text-white"
                                                                height="1em"
                                                                width="1em"
                                                                xmlns="http://www.w3.org/2000/svg"
                                                            >
                                                                <path d="M4 3a2 2 0 100 4h12a2 2 0 100-4H4z" />
                                                                <path
                                                                    fillRule="evenodd"
                                                                    d="M3 8h14v7a2 2 0 01-2 2H5a2 2 0 01-2-2V8zm5 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z"
                                                                    clipRule="evenodd"
                                                                />
                                                            </svg>
                                                            <div className="text-sm font-medium text-gray-900 dark:text-white">
                                                                Products
                                                            </div>
                                                        </a>
                                                        <a
                                                            href="#"
                                                            className="block rounded-lg p-4 text-center hover:bg-gray-100 dark:hover:bg-gray-600"
                                                        >
                                                            <svg
                                                                stroke="currentColor"
                                                                fill="currentColor"
                                                                strokeWidth={0}
                                                                viewBox="0 0 20 20"
                                                                className="mx-auto mb-1 h-7 w-7 text-gray-500 dark:text-white"
                                                                height="1em"
                                                                width="1em"
                                                                xmlns="http://www.w3.org/2000/svg"
                                                            >
                                                                <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z" />
                                                                <path
                                                                    fillRule="evenodd"
                                                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z"
                                                                    clipRule="evenodd"
                                                                />
                                                            </svg>
                                                            <div className="text-sm font-medium text-gray-900 dark:text-white">
                                                                Pricing
                                                            </div>
                                                        </a>
                                                        <a
                                                            href="#"
                                                            className="block rounded-lg p-4 text-center hover:bg-gray-100 dark:hover:bg-gray-600"
                                                        >
                                                            <svg
                                                                stroke="currentColor"
                                                                fill="none"
                                                                strokeWidth={0}
                                                                viewBox="0 0 24 24"
                                                                className="mx-auto mb-1 h-7 w-7 text-gray-500 dark:text-white"
                                                                height="1em"
                                                                width="1em"
                                                                xmlns="http://www.w3.org/2000/svg"
                                                            >
                                                                <path
                                                                    strokeLinecap="round"
                                                                    strokeLinejoin="round"
                                                                    strokeWidth={2}
                                                                    d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z"
                                                                />
                                                            </svg>
                                                            <div className="text-sm font-medium text-gray-900 dark:text-white">
                                                                Billing
                                                            </div>
                                                        </a>
                                                        <a
                                                            href="#"
                                                            className="block rounded-lg p-4 text-center hover:bg-gray-100 dark:hover:bg-gray-600"
                                                        >
                                                            <svg
                                                                stroke="currentColor"
                                                                fill="currentColor"
                                                                strokeWidth={0}
                                                                viewBox="0 0 20 20"
                                                                className="mx-auto mb-1 h-7 w-7 text-gray-500 dark:text-white"
                                                                height="1em"
                                                                width="1em"
                                                                xmlns="http://www.w3.org/2000/svg"
                                                            >
                                                                <path
                                                                    fillRule="evenodd"
                                                                    d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z"
                                                                    clipRule="evenodd"
                                                                />
                                                            </svg>
                                                            <div className="text-sm font-medium text-gray-900 dark:text-white">
                                                                Logout
                                                            </div>
                                                        </a>
                                                    </div>
                                                </ul>
                                            </div>
                                        </div>
                                        <button
                                            className="rounded-lg p-2.5 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-700"
                                            data-testid="dark-theme-toggle"
                                            type="button"
                                            aria-label="Toggle dark mode"
                                        >
                                            <svg
                                                stroke="currentColor"
                                                fill="currentColor"
                                                strokeWidth={0}
                                                viewBox="0 0 20 20"
                                                aria-label="Currently dark mode"
                                                className="h-5 w-5"
                                                height="1em"
                                                width="1em"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                                                    clipRule="evenodd"
                                                />
                                            </svg>
                                        </button>
                                    </div>
                                    <div className="hidden lg:block">
                                        <div
                                            className="w-fit dark:text-white"
                                            data-testid="flowbite-tooltip-target"
                                        >
                                            <button className="flex items-center">
                                                <span>
                                                    <span className="sr-only">User menu</span>
                                                    <div
                                                        className="flex justify-center items-center space-x-4"
                                                        data-testid="flowbite-avatar"
                                                    >
                                                        <div className="relative">
                                                            <img
                                                                alt=""
                                                                className=" rounded w-8 h-8 rounded"
                                                                data-testid="flow!rounded-fullbite-avatar-img"
                                                                src="../images/users/neil-sims.png"
                                                            />
                                                        </div>
                                                    </div>
                                                </span>
                                            </button>
                                        </div>
                                        <div
                                            data-testid="flowbite-tooltip"
                                            tabIndex={-1}
                                            className="z-10 w-fit rounded-xl divide-y divide-gray-100 shadow transition-opacity duration-100 invisible opacity-0 border border-gray-200 bg-white text-gray-900 dark:border-none dark:bg-gray-700 dark:text-white"
                                            id=":r4:"
                                            role="tooltip"
                                            style={{ position: "absolute", top: 57, left: "1070.36px" }}
                                        >
                                            <div className="rounded-xl text-sm text-gray-700 dark:text-gray-200">
                                                <ul className="">
                                                    <div className="block py-2 px-4 text-sm text-gray-700 dark:text-gray-200">
                                                        <span className="block text-sm">Neil Sims</span>
                                                        <span className="block truncate text-sm font-medium">
                                                            neil.sims@flowbite.com
                                                        </span>
                                                    </div>
                                                    <div className="my-1 h-px bg-gray-100 dark:bg-gray-600" />
                                                    <li className="flex items-center justify-start py-2 px-4 text-sm text-gray-700 cursor-pointer hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white">
                                                        Dashboard
                                                    </li>
                                                    <li className="flex items-center justify-start py-2 px-4 text-sm text-gray-700 cursor-pointer hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white">
                                                        Settings
                                                    </li>
                                                    <li className="flex items-center justify-start py-2 px-4 text-sm text-gray-700 cursor-pointer hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white">
                                                        Earnings
                                                    </li>
                                                    <div className="my-1 h-px bg-gray-100 dark:bg-gray-600" />
                                                    <li className="flex items-center justify-start py-2 px-4 text-sm text-gray-700 cursor-pointer hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white">
                                                        Sign out
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
                <div className="flex items-start pt-16">
                    <div className={`lg:!block${open? `` : ' hidden'}`}>
                        <aside
                            aria-label="Sidebar with multi-level dropdown example"
                            className={`flex fixed top-0 left-0 z-20 flex-col flex-shrink-0 pt-16 h-full duration-75 border-r border-gray-200 lg:flex transition-width dark:border-gray-700 ${open ? 'w-16' : 'w-64'}`}
                        >
                            <div className="h-full overflow-y-auto overflow-x-hidden rounded bg-white py-4 px-3 dark:bg-gray-800">
                                <div className="flex h-full flex-col justify-between py-2">
                                    <div>
                                        <form className="pb-3 md:hidden">
                                            <div className="flex">
                                                <div className="relative w-full">
                                                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                                                        <svg
                                                            stroke="currentColor"
                                                            fill="currentColor"
                                                            strokeWidth={0}
                                                            viewBox="0 0 20 20"
                                                            className="h-5 w-5 text-gray-500 dark:text-gray-400"
                                                            height="1em"
                                                            width="1em"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                        >
                                                            <path
                                                                fillRule="evenodd"
                                                                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                                                                clipRule="evenodd"
                                                            />
                                                        </svg>
                                                    </div>
                                                    <input
                                                        className="block w-full border disabled:cursor-not-allowed disabled:opacity-50 bg-gray-50 border-gray-300 text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500 pl-10 rounded-lg p-2.5 text-sm"
                                                        type="search"
                                                        placeholder="Search"
                                                        required
                                                        size={32}
                                                    />
                                                </div>
                                            </div>
                                        </form>
                                        <div className="" data-testid="flowbite-sidebar-items">
                                            <ul
                                                className="mt-4 space-y-2 border-t border-gray-200 pt-4 first:mt-0 first:border-t-0 first:pt-0 dark:border-gray-700"
                                                data-testid="flowbite-sidebar-item-group"
                                            >
                                                <li>
                                                    <a
                                                        aria-labelledby="flowbite-sidebar-item-:r6:"
                                                        className="flex items-center justify-center rounded-lg p-2 text-base font-medium text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                                                        href="/"
                                                    >
                                                        <svg
                                                            stroke="currentColor"
                                                            fill="currentColor"
                                                            strokeWidth={0}
                                                            viewBox="0 0 20 20"
                                                            aria-hidden="true"
                                                            className="h-6 w-6 flex-shrink-0 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
                                                            data-testid="flowbite-sidebar-item-icon"
                                                            height="1em"
                                                            width="1em"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                        >
                                                            <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z" />
                                                            <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z" />
                                                        </svg>
                                                        <span
                                                            className="px-3 flex-1 whitespace-nowrap"
                                                            data-testid="flowbite-sidebar-item-content"
                                                            id="flowbite-sidebar-item-:r6:"
                                                        >
                                                            Dashboard
                                                        </span>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a
                                                        aria-labelledby="flowbite-sidebar-item-:r7:"
                                                        className="flex items-center justify-center rounded-lg p-2 text-base font-medium text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                                                        href="/kanban"
                                                    >
                                                        <svg
                                                            stroke="currentColor"
                                                            fill="currentColor"
                                                            strokeWidth={0}
                                                            viewBox="0 0 20 20"
                                                            aria-hidden="true"
                                                            className="h-6 w-6 flex-shrink-0 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
                                                            data-testid="flowbite-sidebar-item-icon"
                                                            height="1em"
                                                            width="1em"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                        >
                                                            <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                                                        </svg>
                                                        <span
                                                            className="px-3 flex-1 whitespace-nowrap"
                                                            data-testid="flowbite-sidebar-item-content"
                                                            id="flowbite-sidebar-item-:r7:"
                                                        >
                                                            Kanban
                                                        </span>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a
                                                        aria-labelledby="flowbite-sidebar-item-:r8:"
                                                        className="flex items-center justify-center rounded-lg p-2 text-base font-medium text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 bg-gray-100 dark:bg-gray-700"
                                                        href="/mailing/inbox"
                                                    >
                                                        <svg
                                                            stroke="currentColor"
                                                            fill="currentColor"
                                                            strokeWidth={0}
                                                            viewBox="0 0 20 20"
                                                            aria-hidden="true"
                                                            className="h-6 w-6 flex-shrink-0 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
                                                            data-testid="flowbite-sidebar-item-icon"
                                                            height="1em"
                                                            width="1em"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                        >
                                                            <path d="M8.707 7.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l2-2a1 1 0 00-1.414-1.414L11 7.586V3a1 1 0 10-2 0v4.586l-.293-.293z" />
                                                            <path d="M3 5a2 2 0 012-2h1a1 1 0 010 2H5v7h2l1 2h4l1-2h2V5h-1a1 1 0 110-2h1a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V5z" />
                                                        </svg>
                                                        <span
                                                            className="px-3 flex-1 whitespace-nowrap"
                                                            data-testid="flowbite-sidebar-item-content"
                                                            id="flowbite-sidebar-item-:r8:"
                                                        >
                                                            Inbox
                                                        </span>
                                                        <span
                                                            className="flex h-fit items-center gap-1 font-semibold bg-blue-100 text-blue-800 dark:bg-blue-200 dark:text-blue-800 group-hover:bg-blue-200 dark:group-hover:bg-blue-300 rounded-full px-2 py-1 p-1 text-xs"
                                                            data-testid="flowbite-sidebar-label"
                                                        >
                                                            <span>3</span>
                                                        </span>
                                                    </a>
                                                </li>
                                                <li>
                                                    <button
                                                        className="group flex w-full items-center rounded-lg p-2 text-base font-medium text-gray-900 transition duration-75 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                                                        id="flowbite-sidebar-collapse-:r9:"
                                                        title="E-commerce"
                                                        type="button"
                                                    >
                                                        <svg
                                                            stroke="currentColor"
                                                            fill="currentColor"
                                                            strokeWidth={0}
                                                            viewBox="0 0 20 20"
                                                            aria-hidden="true"
                                                            className="h-6 w-6 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
                                                            data-testid="flowbite-sidebar-collapse-icon"
                                                            height="1em"
                                                            width="1em"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                        >
                                                            <path
                                                                fillRule="evenodd"
                                                                d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z"
                                                                clipRule="evenodd"
                                                            />
                                                        </svg>
                                                        <span
                                                            className="ml-3 flex-1 whitespace-nowrap text-left"
                                                            data-testid="flowbite-sidebar-collapse-label"
                                                        >
                                                            E-commerce
                                                        </span>
                                                        <svg
                                                            stroke="currentColor"
                                                            fill="currentColor"
                                                            strokeWidth={0}
                                                            viewBox="0 0 20 20"
                                                            aria-hidden="true"
                                                            className="h-6 w-6"
                                                            height="1em"
                                                            width="1em"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                        >
                                                            <path
                                                                fillRule="evenodd"
                                                                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                                                clipRule="evenodd"
                                                            />
                                                        </svg>
                                                    </button>
                                                    <ul
                                                        aria-labelledby="flowbite-sidebar-collapse-:r9:"
                                                        className="space-y-2 py-2"
                                                        hidden
                                                    >
                                                        <li>
                                                            <a
                                                                aria-labelledby="flowbite-sidebar-item-:r25:"
                                                                className="flex items-center justify-center rounded-lg p-2 text-base font-medium text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 group w-full pl-8 transition duration-75"
                                                                href="/e-commerce/products"
                                                            >
                                                                <span
                                                                    className="px-3 flex-1 whitespace-nowrap"
                                                                    data-testid="flowbite-sidebar-item-content"
                                                                    id="flowbite-sidebar-item-:r25:"
                                                                >
                                                                    Products
                                                                </span>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a
                                                                aria-labelledby="flowbite-sidebar-item-:r26:"
                                                                className="flex items-center justify-center rounded-lg p-2 text-base font-medium text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 group w-full pl-8 transition duration-75"
                                                                href="/e-commerce/billing"
                                                            >
                                                                <span
                                                                    className="px-3 flex-1 whitespace-nowrap"
                                                                    data-testid="flowbite-sidebar-item-content"
                                                                    id="flowbite-sidebar-item-:r26:"
                                                                >
                                                                    Billing
                                                                </span>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a
                                                                aria-labelledby="flowbite-sidebar-item-:r27:"
                                                                className="flex items-center justify-center rounded-lg p-2 text-base font-medium text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 group w-full pl-8 transition duration-75"
                                                                href="/e-commerce/invoice"
                                                            >
                                                                <span
                                                                    className="px-3 flex-1 whitespace-nowrap"
                                                                    data-testid="flowbite-sidebar-item-content"
                                                                    id="flowbite-sidebar-item-:r27:"
                                                                >
                                                                    Invoice
                                                                </span>
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li>
                                                    <button
                                                        className="group flex w-full items-center rounded-lg p-2 text-base font-medium text-gray-900 transition duration-75 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                                                        id="flowbite-sidebar-collapse-:rd:"
                                                        title="Users"
                                                        type="button"
                                                    >
                                                        <svg
                                                            stroke="currentColor"
                                                            fill="currentColor"
                                                            strokeWidth={0}
                                                            viewBox="0 0 20 20"
                                                            aria-hidden="true"
                                                            className="h-6 w-6 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
                                                            data-testid="flowbite-sidebar-collapse-icon"
                                                            height="1em"
                                                            width="1em"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                        >
                                                            <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                                                        </svg>
                                                        <span
                                                            className="ml-3 flex-1 whitespace-nowrap text-left"
                                                            data-testid="flowbite-sidebar-collapse-label"
                                                        >
                                                            Users
                                                        </span>
                                                        <svg
                                                            stroke="currentColor"
                                                            fill="currentColor"
                                                            strokeWidth={0}
                                                            viewBox="0 0 20 20"
                                                            aria-hidden="true"
                                                            className="h-6 w-6"
                                                            height="1em"
                                                            width="1em"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                        >
                                                            <path
                                                                fillRule="evenodd"
                                                                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                                                clipRule="evenodd"
                                                            />
                                                        </svg>
                                                    </button>
                                                    <ul
                                                        aria-labelledby="flowbite-sidebar-collapse-:rd:"
                                                        className="space-y-2 py-2"
                                                        hidden
                                                    >
                                                        <li>
                                                            <a
                                                                aria-labelledby="flowbite-sidebar-item-:r28:"
                                                                className="flex items-center justify-center rounded-lg p-2 text-base font-medium text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 group w-full pl-8 transition duration-75"
                                                                href="/users/list"
                                                            >
                                                                <span
                                                                    className="px-3 flex-1 whitespace-nowrap"
                                                                    data-testid="flowbite-sidebar-item-content"
                                                                    id="flowbite-sidebar-item-:r28:"
                                                                >
                                                                    Users list
                                                                </span>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a
                                                                aria-labelledby="flowbite-sidebar-item-:r29:"
                                                                className="flex items-center justify-center rounded-lg p-2 text-base font-medium text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 group w-full pl-8 transition duration-75"
                                                                href="/users/profile"
                                                            >
                                                                <span
                                                                    className="px-3 flex-1 whitespace-nowrap"
                                                                    data-testid="flowbite-sidebar-item-content"
                                                                    id="flowbite-sidebar-item-:r29:"
                                                                >
                                                                    Profile
                                                                </span>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a
                                                                aria-labelledby="flowbite-sidebar-item-:r2a:"
                                                                className="flex items-center justify-center rounded-lg p-2 text-base font-medium text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 group w-full pl-8 transition duration-75"
                                                                href="/users/feed"
                                                            >
                                                                <span
                                                                    className="px-3 flex-1 whitespace-nowrap"
                                                                    data-testid="flowbite-sidebar-item-content"
                                                                    id="flowbite-sidebar-item-:r2a:"
                                                                >
                                                                    Feed
                                                                </span>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a
                                                                aria-labelledby="flowbite-sidebar-item-:r2b:"
                                                                className="flex items-center justify-center rounded-lg p-2 text-base font-medium text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 group w-full pl-8 transition duration-75"
                                                                href="/users/settings"
                                                            >
                                                                <span
                                                                    className="px-3 flex-1 whitespace-nowrap"
                                                                    data-testid="flowbite-sidebar-item-content"
                                                                    id="flowbite-sidebar-item-:r2b:"
                                                                >
                                                                    Settings
                                                                </span>
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li>
                                                    <button
                                                        className="group flex w-full items-center rounded-lg p-2 text-base font-medium text-gray-900 transition duration-75 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                                                        id="flowbite-sidebar-collapse-:ri:"
                                                        title="Pages"
                                                        type="button"
                                                    >
                                                        <svg
                                                            stroke="currentColor"
                                                            fill="currentColor"
                                                            strokeWidth={0}
                                                            viewBox="0 0 20 20"
                                                            aria-hidden="true"
                                                            className="h-6 w-6 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
                                                            data-testid="flowbite-sidebar-collapse-icon"
                                                            height="1em"
                                                            width="1em"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                        >
                                                            <path
                                                                fillRule="evenodd"
                                                                d="M5 3a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2V5a2 2 0 00-2-2H5zm9 4a1 1 0 10-2 0v6a1 1 0 102 0V7zm-3 2a1 1 0 10-2 0v4a1 1 0 102 0V9zm-3 3a1 1 0 10-2 0v1a1 1 0 102 0v-1z"
                                                                clipRule="evenodd"
                                                            />
                                                        </svg>
                                                        <span
                                                            className="ml-3 flex-1 whitespace-nowrap text-left"
                                                            data-testid="flowbite-sidebar-collapse-label"
                                                        >
                                                            Pages
                                                        </span>
                                                        <svg
                                                            stroke="currentColor"
                                                            fill="currentColor"
                                                            strokeWidth={0}
                                                            viewBox="0 0 20 20"
                                                            aria-hidden="true"
                                                            className="h-6 w-6"
                                                            height="1em"
                                                            width="1em"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                        >
                                                            <path
                                                                fillRule="evenodd"
                                                                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                                                clipRule="evenodd"
                                                            />
                                                        </svg>
                                                    </button>
                                                    <ul
                                                        aria-labelledby="flowbite-sidebar-collapse-:ri:"
                                                        className="space-y-2 py-2"
                                                        hidden
                                                    >
                                                        <li>
                                                            <a
                                                                aria-labelledby="flowbite-sidebar-item-:r1s:"
                                                                className="flex items-center justify-center rounded-lg p-2 text-base font-medium text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 group w-full pl-8 transition duration-75"
                                                                href="/pages/pricing"
                                                            >
                                                                <span
                                                                    className="px-3 flex-1 whitespace-nowrap"
                                                                    data-testid="flowbite-sidebar-item-content"
                                                                    id="flowbite-sidebar-item-:r1s:"
                                                                >
                                                                    Pricing
                                                                </span>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a
                                                                aria-labelledby="flowbite-sidebar-item-:r1t:"
                                                                className="flex items-center justify-center rounded-lg p-2 text-base font-medium text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 group w-full pl-8 transition duration-75"
                                                                href="/pages/maintenance"
                                                            >
                                                                <span
                                                                    className="px-3 flex-1 whitespace-nowrap"
                                                                    data-testid="flowbite-sidebar-item-content"
                                                                    id="flowbite-sidebar-item-:r1t:"
                                                                >
                                                                    Maintenace
                                                                </span>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a
                                                                aria-labelledby="flowbite-sidebar-item-:r1u:"
                                                                className="flex items-center justify-center rounded-lg p-2 text-base font-medium text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 group w-full pl-8 transition duration-75"
                                                                href="/pages/404"
                                                            >
                                                                <span
                                                                    className="px-3 flex-1 whitespace-nowrap"
                                                                    data-testid="flowbite-sidebar-item-content"
                                                                    id="flowbite-sidebar-item-:r1u:"
                                                                >
                                                                    404 not found
                                                                </span>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a
                                                                aria-labelledby="flowbite-sidebar-item-:r1v:"
                                                                className="flex items-center justify-center rounded-lg p-2 text-base font-medium text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 group w-full pl-8 transition duration-75"
                                                                href="/pages/500"
                                                            >
                                                                <span
                                                                    className="px-3 flex-1 whitespace-nowrap"
                                                                    data-testid="flowbite-sidebar-item-content"
                                                                    id="flowbite-sidebar-item-:r1v:"
                                                                >
                                                                    500 server error
                                                                </span>
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li>
                                                    <button
                                                        className="group flex w-full items-center rounded-lg p-2 text-base font-medium text-gray-900 transition duration-75 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                                                        id="flowbite-sidebar-collapse-:rn:"
                                                        title="Authentication"
                                                        type="button"
                                                    >
                                                        <svg
                                                            stroke="currentColor"
                                                            fill="currentColor"
                                                            strokeWidth={0}
                                                            viewBox="0 0 20 20"
                                                            aria-hidden="true"
                                                            className="h-6 w-6 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
                                                            data-testid="flowbite-sidebar-collapse-icon"
                                                            height="1em"
                                                            width="1em"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                        >
                                                            <path
                                                                fillRule="evenodd"
                                                                d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                                                                clipRule="evenodd"
                                                            />
                                                        </svg>
                                                        <span
                                                            className="ml-3 flex-1 whitespace-nowrap text-left"
                                                            data-testid="flowbite-sidebar-collapse-label"
                                                        >
                                                            Authentication
                                                        </span>
                                                        <svg
                                                            stroke="currentColor"
                                                            fill="currentColor"
                                                            strokeWidth={0}
                                                            viewBox="0 0 20 20"
                                                            aria-hidden="true"
                                                            className="h-6 w-6"
                                                            height="1em"
                                                            width="1em"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                        >
                                                            <path
                                                                fillRule="evenodd"
                                                                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                                                clipRule="evenodd"
                                                            />
                                                        </svg>
                                                    </button>
                                                    <ul
                                                        aria-labelledby="flowbite-sidebar-collapse-:rn:"
                                                        className="space-y-2 py-2"
                                                        hidden
                                                    >
                                                        <li>
                                                            <a
                                                                aria-labelledby="flowbite-sidebar-item-:r20:"
                                                                className="flex items-center justify-center rounded-lg p-2 text-base font-medium text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 group w-full pl-8 transition duration-75"
                                                                href="/authentication/sign-in"
                                                            >
                                                                <span
                                                                    className="px-3 flex-1 whitespace-nowrap"
                                                                    data-testid="flowbite-sidebar-item-content"
                                                                    id="flowbite-sidebar-item-:r20:"
                                                                >
                                                                    Sign in
                                                                </span>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a
                                                                aria-labelledby="flowbite-sidebar-item-:r21:"
                                                                className="flex items-center justify-center rounded-lg p-2 text-base font-medium text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 group w-full pl-8 transition duration-75"
                                                                href="/authentication/sign-up"
                                                            >
                                                                <span
                                                                    className="px-3 flex-1 whitespace-nowrap"
                                                                    data-testid="flowbite-sidebar-item-content"
                                                                    id="flowbite-sidebar-item-:r21:"
                                                                >
                                                                    Sign up
                                                                </span>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a
                                                                aria-labelledby="flowbite-sidebar-item-:r22:"
                                                                className="flex items-center justify-center rounded-lg p-2 text-base font-medium text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 group w-full pl-8 transition duration-75"
                                                                href="/authentication/forgot-password"
                                                            >
                                                                <span
                                                                    className="px-3 flex-1 whitespace-nowrap"
                                                                    data-testid="flowbite-sidebar-item-content"
                                                                    id="flowbite-sidebar-item-:r22:"
                                                                >
                                                                    Forgot password
                                                                </span>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a
                                                                aria-labelledby="flowbite-sidebar-item-:r23:"
                                                                className="flex items-center justify-center rounded-lg p-2 text-base font-medium text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 group w-full pl-8 transition duration-75"
                                                                href="/authentication/reset-password"
                                                            >
                                                                <span
                                                                    className="px-3 flex-1 whitespace-nowrap"
                                                                    data-testid="flowbite-sidebar-item-content"
                                                                    id="flowbite-sidebar-item-:r23:"
                                                                >
                                                                    Reset password
                                                                </span>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a
                                                                aria-labelledby="flowbite-sidebar-item-:r24:"
                                                                className="flex items-center justify-center rounded-lg p-2 text-base font-medium text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 group w-full pl-8 transition duration-75"
                                                                href="/authentication/profile-lock"
                                                            >
                                                                <span
                                                                    className="px-3 flex-1 whitespace-nowrap"
                                                                    data-testid="flowbite-sidebar-item-content"
                                                                    id="flowbite-sidebar-item-:r24:"
                                                                >
                                                                    Profile lock
                                                                </span>
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </li>
                                            </ul>
                                            <ul
                                                className="mt-4 space-y-2 border-t border-gray-200 pt-4 first:mt-0 first:border-t-0 first:pt-0 dark:border-gray-700"
                                                data-testid="flowbite-sidebar-item-group"
                                            >
                                                <li>
                                                    <a
                                                        aria-labelledby="flowbite-sidebar-item-:rt:"
                                                        className="flex items-center justify-center rounded-lg p-2 text-base font-medium text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                                                        href="https://github.com/themesberg/flowbite-react/"
                                                    >
                                                        <svg
                                                            stroke="currentColor"
                                                            fill="currentColor"
                                                            strokeWidth={0}
                                                            viewBox="0 0 20 20"
                                                            aria-hidden="true"
                                                            className="h-6 w-6 flex-shrink-0 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
                                                            data-testid="flowbite-sidebar-item-icon"
                                                            height="1em"
                                                            width="1em"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                        >
                                                            <path d="M8 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z" />
                                                            <path d="M6 3a2 2 0 00-2 2v11a2 2 0 002 2h8a2 2 0 002-2V5a2 2 0 00-2-2 3 3 0 01-3 3H9a3 3 0 01-3-3z" />
                                                        </svg>
                                                        <span
                                                            className="px-3 flex-1 whitespace-nowrap"
                                                            data-testid="flowbite-sidebar-item-content"
                                                            id="flowbite-sidebar-item-:rt:"
                                                        >
                                                            Docs
                                                        </span>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a
                                                        aria-labelledby="flowbite-sidebar-item-:ru:"
                                                        className="flex items-center justify-center rounded-lg p-2 text-base font-medium text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                                                        href="https://flowbite-react.com/"
                                                    >
                                                        <svg
                                                            stroke="currentColor"
                                                            fill="currentColor"
                                                            strokeWidth={0}
                                                            viewBox="0 0 20 20"
                                                            aria-hidden="true"
                                                            className="h-6 w-6 flex-shrink-0 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
                                                            data-testid="flowbite-sidebar-item-icon"
                                                            height="1em"
                                                            width="1em"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                        >
                                                            <path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z" />
                                                        </svg>
                                                        <span
                                                            className="px-3 flex-1 whitespace-nowrap"
                                                            data-testid="flowbite-sidebar-item-content"
                                                            id="flowbite-sidebar-item-:ru:"
                                                        >
                                                            Components
                                                        </span>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a
                                                        aria-labelledby="flowbite-sidebar-item-:rv:"
                                                        className="flex items-center justify-center rounded-lg p-2 text-base font-medium text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                                                        href="https://github.com/themesberg/flowbite-react/issues"
                                                    >
                                                        <svg
                                                            stroke="currentColor"
                                                            fill="currentColor"
                                                            strokeWidth={0}
                                                            viewBox="0 0 20 20"
                                                            aria-hidden="true"
                                                            className="h-6 w-6 flex-shrink-0 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
                                                            data-testid="flowbite-sidebar-item-icon"
                                                            height="1em"
                                                            width="1em"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                        >
                                                            <path
                                                                fillRule="evenodd"
                                                                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                                                                clipRule="evenodd"
                                                            />
                                                        </svg>
                                                        <span
                                                            className="px-3 flex-1 whitespace-nowrap"
                                                            data-testid="flowbite-sidebar-item-content"
                                                            id="flowbite-sidebar-item-:rv:"
                                                        >
                                                            Help
                                                        </span>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="flex items-center justify-center gap-x-5">
                                        <button className="rounded-lg p-2 hover:bg-gray-100 dark:hover:bg-gray-700">
                                            <span className="sr-only">Tweaks</span>
                                            <svg
                                                stroke="currentColor"
                                                fill="currentColor"
                                                strokeWidth={0}
                                                viewBox="0 0 20 20"
                                                className="text-2xl text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white "
                                                height="1em"
                                                width="1em"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path d="M5 4a1 1 0 00-2 0v7.268a2 2 0 000 3.464V16a1 1 0 102 0v-1.268a2 2 0 000-3.464V4zM11 4a1 1 0 10-2 0v1.268a2 2 0 000 3.464V16a1 1 0 102 0V8.732a2 2 0 000-3.464V4zM16 3a1 1 0 011 1v7.268a2 2 0 010 3.464V16a1 1 0 11-2 0v-1.268a2 2 0 010-3.464V4a1 1 0 011-1z" />
                                            </svg>
                                        </button>
                                        <div>
                                            <div className="w-fit" data-testid="flowbite-tooltip-target">
                                                <a
                                                    href="/users/settings"
                                                    className="inline-flex cursor-pointer justify-center rounded p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:hover:bg-gray-700 dark:hover:text-white"
                                                >
                                                    <span className="sr-only">Settings page</span>
                                                    <svg
                                                        stroke="currentColor"
                                                        fill="currentColor"
                                                        strokeWidth={0}
                                                        viewBox="0 0 20 20"
                                                        className="text-2xl text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                                                        height="1em"
                                                        width="1em"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path
                                                            fillRule="evenodd"
                                                            d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"
                                                            clipRule="evenodd"
                                                        />
                                                    </svg>
                                                </a>
                                            </div>
                                            <div
                                                data-testid="flowbite-tooltip"
                                                tabIndex={-1}
                                                className="absolute inline-block z-10 rounded-lg py-2 px-3 text-sm font-medium shadow-sm transition-opacity duration-300 invisible opacity-0 bg-gray-900 text-white dark:bg-gray-700"
                                                id=":r10:"
                                                role="tooltip"
                                                style={{ position: "absolute", top: 893, left: "62.586px" }}
                                            >
                                                <div className="relative z-20">Settings page</div>
                                                <div
                                                    className="absolute z-10 h-2 w-2 rotate-45 bg-gray-900 dark:bg-gray-700"
                                                    data-testid="flowbite-tooltip-arrow"
                                                    style={{ bottom: "-4px", left: "54.5px" }}
                                                >
                                                    &nbsp;
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <div
                                                className="w-fit dark:text-white"
                                                data-testid="flowbite-tooltip-target"
                                            >
                                                <button className="flex items-center">
                                                    <span className="inline-flex cursor-pointer justify-center rounded p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:hover:bg-gray-700 dark:hover:text-white">
                                                        <span className="sr-only">Current language</span>
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            xmlnsXlink="http://www.w3.org/1999/xlink"
                                                            viewBox="0 0 3900 3900"
                                                            className="h-5 w-5 rounded-full"
                                                        >
                                                            <path fill="#b22234" d="M0 0h7410v3900H0z" />
                                                            <path
                                                                d="M0 450h7410m0 600H0m0 600h7410m0 600H0m0 600h7410m0 600H0"
                                                                stroke="#fff"
                                                                strokeWidth={300}
                                                            />
                                                            <path fill="#3c3b6e" d="M0 0h2964v2100H0z" />
                                                            <g fill="#fff">
                                                                <g id="d">
                                                                    <g id="c">
                                                                        <g id="e">
                                                                            <g id="b">
                                                                                <path
                                                                                    id="a"
                                                                                    d="M247 90l70.534 217.082-184.66-134.164h228.253L176.466 307.082z"
                                                                                />
                                                                                <use xlinkHref="#a" y={420} />
                                                                                <use xlinkHref="#a" y={840} />
                                                                                <use xlinkHref="#a" y={1260} />
                                                                            </g>
                                                                            <use xlinkHref="#a" y={1680} />
                                                                        </g>
                                                                        <use xlinkHref="#b" x={247} y={210} />
                                                                    </g>
                                                                    <use xlinkHref="#c" x={494} />
                                                                </g>
                                                                <use xlinkHref="#d" x={988} />
                                                                <use xlinkHref="#c" x={1976} />
                                                                <use xlinkHref="#e" x={2470} />
                                                            </g>
                                                        </svg>
                                                    </span>
                                                </button>
                                            </div>
                                            <div
                                                data-testid="flowbite-tooltip"
                                                tabIndex={-1}
                                                className="z-10 w-fit rounded-xl divide-y divide-gray-100 shadow transition-opacity duration-100 invisible opacity-0 border border-gray-200 bg-white text-gray-900 dark:border-none dark:bg-gray-700 dark:text-white"
                                                id=":r12:"
                                                role="tooltip"
                                                style={{ position: "absolute", top: 765, left: 161 }}
                                            >
                                                <div className="rounded-xl text-sm text-gray-700 dark:text-gray-200">
                                                    <ul className="">
                                                        <ul className="py-1" role="none">
                                                            <li>
                                                                <a
                                                                    href="#"
                                                                    className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
                                                                >
                                                                    <div className="inline-flex items-center">
                                                                        <svg
                                                                            className="mr-2 h-4 w-4 rounded-full"
                                                                            xmlns="http://www.w3.org/2000/svg"
                                                                            id="flag-icon-css-us"
                                                                            viewBox="0 0 512 512"
                                                                        >
                                                                            <g fillRule="evenodd">
                                                                                <g strokeWidth="1pt">
                                                                                    <path
                                                                                        fill="#bd3d44"
                                                                                        d="M0 0h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0z"
                                                                                        transform="scale(3.9385)"
                                                                                    />
                                                                                    <path
                                                                                        fill="#fff"
                                                                                        d="M0 10h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0z"
                                                                                        transform="scale(3.9385)"
                                                                                    />
                                                                                </g>
                                                                                <path
                                                                                    fill="#192f5d"
                                                                                    d="M0 0h98.8v70H0z"
                                                                                    transform="scale(3.9385)"
                                                                                />
                                                                                <path
                                                                                    fill="#fff"
                                                                                    d="M8.2 3l1 2.8H12L9.7 7.5l.9 2.7-2.4-1.7L6 10.2l.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8H45l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7L74 8.5l-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9L92 7.5l1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm-74.1 7l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7H65zm16.4 0l1 2.8H86l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm-74 7l.8 2.8h3l-2.4 1.7.9 2.7-2.4-1.7L6 24.2l.9-2.7-2.4-1.7h3zm16.4 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8H45l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9L92 21.5l1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm-74.1 7l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7H65zm16.4 0l1 2.8H86l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm-74 7l.8 2.8h3l-2.4 1.7.9 2.7-2.4-1.7L6 38.2l.9-2.7-2.4-1.7h3zm16.4 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8H45l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9L92 35.5l1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm-74.1 7l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7H65zm16.4 0l1 2.8H86l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm-74 7l.8 2.8h3l-2.4 1.7.9 2.7-2.4-1.7L6 52.2l.9-2.7-2.4-1.7h3zm16.4 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8H45l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9L92 49.5l1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm-74.1 7l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7H65zm16.4 0l1 2.8H86l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm-74 7l.8 2.8h3l-2.4 1.7.9 2.7-2.4-1.7L6 66.2l.9-2.7-2.4-1.7h3zm16.4 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8H45l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9L92 63.5l1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9z"
                                                                                    transform="scale(3.9385)"
                                                                                />
                                                                            </g>
                                                                        </svg>
                                                                        <span className="whitespace-nowrap">
                                                                            English (US)
                                                                        </span>
                                                                    </div>
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a
                                                                    href="#"
                                                                    className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
                                                                >
                                                                    <div className="inline-flex items-center">
                                                                        <svg
                                                                            className="mr-2 h-4 w-4 rounded-full"
                                                                            xmlns="http://www.w3.org/2000/svg"
                                                                            id="flag-icon-css-de"
                                                                            viewBox="0 0 512 512"
                                                                        >
                                                                            <path
                                                                                fill="#ffce00"
                                                                                d="M0 341.3h512V512H0z"
                                                                            />
                                                                            <path d="M0 0h512v170.7H0z" />
                                                                            <path fill="#d00" d="M0 170.7h512v170.6H0z" />
                                                                        </svg>
                                                                        Deutsch
                                                                    </div>
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a
                                                                    href="#"
                                                                    className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
                                                                >
                                                                    <div className="inline-flex items-center">
                                                                        <svg
                                                                            className="mr-2 h-4 w-4 rounded-full"
                                                                            xmlns="http://www.w3.org/2000/svg"
                                                                            id="flag-icon-css-it"
                                                                            viewBox="0 0 512 512"
                                                                        >
                                                                            <g fillRule="evenodd" strokeWidth="1pt">
                                                                                <path fill="#fff" d="M0 0h512v512H0z" />
                                                                                <path
                                                                                    fill="#009246"
                                                                                    d="M0 0h170.7v512H0z"
                                                                                />
                                                                                <path
                                                                                    fill="#ce2b37"
                                                                                    d="M341.3 0H512v512H341.3z"
                                                                                />
                                                                            </g>
                                                                        </svg>
                                                                        Italiano
                                                                    </div>
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a
                                                                    href="#"
                                                                    className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
                                                                >
                                                                    <div className="inline-flex items-center">
                                                                        <svg
                                                                            className="mr-2 h-4 w-4 rounded-full"
                                                                            xmlns="http://www.w3.org/2000/svg"
                                                                            xmlnsXlink="http://www.w3.org/1999/xlink"
                                                                            id="flag-icon-css-cn"
                                                                            viewBox="0 0 512 512"
                                                                        >
                                                                            <defs>
                                                                                <path
                                                                                    id="a"
                                                                                    fill="#ffde00"
                                                                                    d="M1-.3L-.7.8 0-1 .6.8-1-.3z"
                                                                                />
                                                                            </defs>
                                                                            <path fill="#de2910" d="M0 0h512v512H0z" />
                                                                            <use
                                                                                width={30}
                                                                                height={20}
                                                                                transform="matrix(76.8 0 0 76.8 128 128)"
                                                                                xlinkHref="#a"
                                                                            />
                                                                            <use
                                                                                width={30}
                                                                                height={20}
                                                                                transform="rotate(-121 142.6 -47) scale(25.5827)"
                                                                                xlinkHref="#a"
                                                                            />
                                                                            <use
                                                                                width={30}
                                                                                height={20}
                                                                                transform="rotate(-98.1 198 -82) scale(25.6)"
                                                                                xlinkHref="#a"
                                                                            />
                                                                            <use
                                                                                width={30}
                                                                                height={20}
                                                                                transform="rotate(-74 272.4 -114) scale(25.6137)"
                                                                                xlinkHref="#a"
                                                                            />
                                                                            <use
                                                                                width={30}
                                                                                height={20}
                                                                                transform="matrix(16 -19.968 19.968 16 256 230.4)"
                                                                                xlinkHref="#a"
                                                                            />
                                                                        </svg>
                                                                        <span className="whitespace-nowrap">
                                                                            中文 (繁體)
                                                                        </span>
                                                                    </div>
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </aside>
                    </div>
                    <main className={ `overflow-y-auto relative w-full h-full bg-gray-50 dark:bg-gray-900 lg:ml-${open ? "16":"64"}`}>
                        <div className="block items-center justify-between border-b border-gray-200 bg-white p-4 dark:border-gray-700 dark:bg-gray-800 sm:flex">
                            <div className="flex items-center divide-x divide-gray-100 dark:divide-gray-700">
                                <div className="pr-3">
                                    <label
                                        className="text-sm font-medium text-gray-900 dark:text-gray-300 sr-only"
                                        htmlFor="checkbox-all"
                                    >
                                        Select all
                                    </label>
                                    <input
                                        className="h-4 w-4 rounded border border-gray-300 bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600"
                                        type="checkbox"
                                        id="checkbox-all"
                                        name="checkbox-all"
                                    />
                                </div>
                                <div className="flex space-x-2 px-0 sm:px-2">
                                    <a
                                        href="#"
                                        className="inline-flex cursor-pointer justify-center rounded p-1 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                                    >
                                        <span className="sr-only">Delete</span>
                                        <svg
                                            stroke="currentColor"
                                            fill="currentColor"
                                            strokeWidth={0}
                                            viewBox="0 0 20 20"
                                            className="text-2xl"
                                            height="1em"
                                            width="1em"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                    </a>
                                    <a
                                        href="#"
                                        className="inline-flex cursor-pointer justify-center rounded p-1 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                                    >
                                        <span className="sr-only">Move</span>
                                        <svg
                                            stroke="currentColor"
                                            fill="currentColor"
                                            strokeWidth={0}
                                            viewBox="0 0 20 20"
                                            className="text-2xl"
                                            height="1em"
                                            width="1em"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path d="M2 6a2 2 0 012-2h5l2 2h5a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" />
                                        </svg>
                                    </a>
                                    <a
                                        href="#"
                                        className="inline-flex cursor-pointer justify-center rounded p-1 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                                    >
                                        <span className="sr-only">Purge</span>
                                        <svg
                                            stroke="currentColor"
                                            fill="currentColor"
                                            strokeWidth={0}
                                            viewBox="0 0 20 20"
                                            className="text-2xl"
                                            height="1em"
                                            width="1em"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                    </a>
                                    <a
                                        href="#"
                                        className="inline-flex cursor-pointer justify-center rounded p-1 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                                    >
                                        <span className="sr-only">Settings</span>
                                        <svg
                                            stroke="currentColor"
                                            fill="currentColor"
                                            strokeWidth={0}
                                            viewBox="0 0 20 20"
                                            className="text-2xl"
                                            height="1em"
                                            width="1em"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
                                        </svg>
                                    </a>
                                </div>
                                <div className="pl-3">
                                    <a
                                        href="/mailing/compose"
                                        className="mr-3 inline-flex items-center gap-x-2 rounded-lg bg-primary-700 py-2.5 px-5 text-center text-sm font-medium text-white hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                                    >
                                        <svg
                                            stroke="currentColor"
                                            fill="currentColor"
                                            strokeWidth={0}
                                            viewBox="0 0 20 20"
                                            className="text-lg"
                                            height="1em"
                                            width="1em"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                        Compose
                                    </a>
                                </div>
                            </div>
                            <div className="hidden items-center space-y-3 space-x-0 sm:flex sm:space-y-0 sm:space-x-3">
                                <a
                                    href="#"
                                    className="inline-flex cursor-pointer justify-center rounded p-1 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                                >
                                    <span className="sr-only">Apps</span>
                                    <svg
                                        stroke="currentColor"
                                        fill="currentColor"
                                        strokeWidth={0}
                                        viewBox="0 0 20 20"
                                        className="text-2xl"
                                        height="1em"
                                        width="1em"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                                    </svg>
                                </a>
                                <a
                                    href="#"
                                    className="inline-flex cursor-pointer justify-center rounded p-1 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                                >
                                    <span className="sr-only">Previous</span>
                                    <svg
                                        stroke="currentColor"
                                        fill="currentColor"
                                        strokeWidth={0}
                                        viewBox="0 0 20 20"
                                        className="text-2xl"
                                        height="1em"
                                        width="1em"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                </a>
                                <a
                                    href="#"
                                    className="inline-flex cursor-pointer justify-center rounded p-1 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                                >
                                    <span className="sr-only">Next</span>
                                    <svg
                                        stroke="currentColor"
                                        fill="currentColor"
                                        strokeWidth={0}
                                        viewBox="0 0 20 20"
                                        className="text-2xl"
                                        height="1em"
                                        width="1em"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                </a>
                                <span className="font-normal text-gray-500 dark:text-gray-400 sm:text-xs md:text-sm">
                                    Show&nbsp;
                                    <span className="font-semibold text-gray-900 dark:text-white">
                                        1-25
                                    </span>
                                    &nbsp;of&nbsp;
                                    <span className="font-semibold text-gray-900 dark:text-white">
                                        2290
                                    </span>
                                </span>
                            </div>
                        </div>
                        <div className="flex flex-col">
                            <div className="overflow-x-auto">
                                <div className="inline-block min-w-full align-middle">
                                    <div className="overflow-hidden shadow">
                                        <div
                                            data-testid="table-element"
                                            className="relative overflow-x-auto shadow-md sm:rounded-lg"
                                        >
                                            <table className="w-full text-left text-sm text-gray-500 dark:text-gray-400 min-w-full divide-y divide-gray-200">
                                                <tbody className="divide-y divide-gray-200 bg-white dark:divide-gray-700 dark:bg-gray-800">
                                                    <tr
                                                        data-testid="table-row-element"
                                                        className="bg-white hover:bg-gray-50 dark:bg-gray-800 dark:hover:bg-gray-600"
                                                    >
                                                        <td className="px-6 py-4 w-4 p-4">
                                                            <div className="inline-flex items-center space-x-4">
                                                                <div>
                                                                    <input
                                                                        id="checkbox-1"
                                                                        aria-describedby="checkbox-1"
                                                                        type="checkbox"
                                                                        className="h-4 w-4 rounded border-gray-300 bg-gray-50 focus:ring-4 focus:ring-primary-300 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600"
                                                                    />
                                                                    <label htmlFor="checkbox-1" className="sr-only">
                                                                        checkbox
                                                                    </label>
                                                                </div>
                                                                <svg
                                                                    className="h-6 w-6 text-gray-500 hover:text-yellow-300 dark:text-gray-400 dark:hover:text-yellow-300"
                                                                    fill="none"
                                                                    stroke="currentColor"
                                                                    viewBox="0 0 24 24"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                >
                                                                    <path
                                                                        strokeLinecap="round"
                                                                        strokeLinejoin="round"
                                                                        strokeWidth={2}
                                                                        d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                                                                    />
                                                                </svg>
                                                            </div>
                                                        </td>
                                                        <td className="px-6 py-4 relative flex items-center space-x-4 whitespace-nowrap p-4">
                                                            <img
                                                                className="h-6 w-6 rounded-full"
                                                                src="../../images/users/neil-sims.png"
                                                                alt=""
                                                            />
                                                            <a
                                                                href="/mailing/read"
                                                                className="text-base font-semibold text-gray-900 after:absolute after:inset-0 dark:text-white"
                                                            >
                                                                Neil Sims
                                                            </a>
                                                        </td>
                                                        <td className="px-6 py-4 max-w-sm overflow-hidden truncate p-4 text-base font-semibold text-gray-900 dark:text-white xl:max-w-screen-md 2xl:max-w-screen-lg">
                                                            Am no an listening depending up believing. Enough
                                                            around remove to barton agreed regret in or it.
                                                            Advantage mr estimable be commanded provision. Year
                                                            well shot deny shew come now had. Shall downs stand
                                                            marry taken his for out. Do related mr account brandon
                                                            an up. Wrong for never ready ham these witty him. Our
                                                            compass see age uncivil matters weather forbade her
                                                            minutes. Ready how but truth son new under.
                                                        </td>
                                                        <td className="px-6 py-4 whitespace-nowrap p-4 text-base font-medium text-gray-900 dark:text-white">
                                                            17 April at 09.28 PM
                                                        </td>
                                                    </tr>
                                                    <tr
                                                        data-testid="table-row-element"
                                                        className="bg-white hover:bg-gray-50 dark:bg-gray-800 dark:hover:bg-gray-600"
                                                    >
                                                        <td className="px-6 py-4 w-4 p-4">
                                                            <div className="inline-flex items-center space-x-4">
                                                                <div>
                                                                    <input
                                                                        id="checkbox-2"
                                                                        aria-describedby="checkbox-1"
                                                                        type="checkbox"
                                                                        className="h-4 w-4 rounded border-gray-300 bg-gray-50 focus:ring-4 focus:ring-primary-300 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600"
                                                                    />
                                                                    <label htmlFor="checkbox-2" className="sr-only">
                                                                        checkbox
                                                                    </label>
                                                                </div>
                                                                <svg
                                                                    className="h-6 w-6 text-gray-500 hover:text-yellow-300 dark:text-gray-400 dark:hover:text-yellow-300"
                                                                    fill="none"
                                                                    stroke="currentColor"
                                                                    viewBox="0 0 24 24"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                >
                                                                    <path
                                                                        strokeLinecap="round"
                                                                        strokeLinejoin="round"
                                                                        strokeWidth={2}
                                                                        d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                                                                    />
                                                                </svg>
                                                            </div>
                                                        </td>
                                                        <td className="px-6 py-4 relative flex items-center space-x-4 whitespace-nowrap p-4">
                                                            <img
                                                                className="h-6 w-6 rounded-full"
                                                                src="../../images/users/bonnie-green.png"
                                                                alt=""
                                                            />
                                                            <a
                                                                href="/mailing/read"
                                                                className="text-base font-semibold text-gray-900 after:absolute after:inset-0 dark:text-white"
                                                            >
                                                                Bonnie Green
                                                            </a>
                                                        </td>
                                                        <td className="px-6 py-4 max-w-sm overflow-hidden truncate p-4 text-base font-semibold text-gray-900 dark:text-white xl:max-w-screen-md 2xl:max-w-screen-lg">
                                                            For norland produce age wishing. To figure on it
                                                            spring season up. Her provision acuteness had
                                                            excellent two why intention. As called mr needed
                                                            praise at. Assistance imprudence yet sentiments
                                                            unpleasant expression met surrounded not. Be at talked
                                                            ye though secure nearer.
                                                        </td>
                                                        <td className="px-6 py-4 whitespace-nowrap p-4 text-base font-medium text-gray-900 dark:text-white">
                                                            16 April at 10.28 PM
                                                        </td>
                                                    </tr>
                                                    <tr
                                                        data-testid="table-row-element"
                                                        className="bg-white hover:bg-gray-50 dark:bg-gray-800 dark:hover:bg-gray-600"
                                                    >
                                                        <td className="px-6 py-4 w-4 p-4">
                                                            <div className="inline-flex items-center space-x-4">
                                                                <div>
                                                                    <input
                                                                        id="checkbox-3"
                                                                        aria-describedby="checkbox-1"
                                                                        type="checkbox"
                                                                        className="h-4 w-4 rounded border-gray-300 bg-gray-50 focus:ring-4 focus:ring-primary-300 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600"
                                                                    />
                                                                    <label htmlFor="checkbox-3" className="sr-only">
                                                                        checkbox
                                                                    </label>
                                                                </div>
                                                                <svg
                                                                    className="h-6 w-6 text-gray-500 hover:text-yellow-300 dark:text-gray-400 dark:hover:text-yellow-300"
                                                                    fill="none"
                                                                    stroke="currentColor"
                                                                    viewBox="0 0 24 24"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                >
                                                                    <path
                                                                        strokeLinecap="round"
                                                                        strokeLinejoin="round"
                                                                        strokeWidth={2}
                                                                        d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                                                                    />
                                                                </svg>
                                                            </div>
                                                        </td>
                                                        <td className="px-6 py-4 relative flex items-center space-x-4 whitespace-nowrap p-4">
                                                            <img
                                                                className="h-6 w-6 rounded-full"
                                                                src="../../images/users/roberta-casas.png"
                                                                alt=""
                                                            />
                                                            <a
                                                                href="/mailing/read"
                                                                className="text-base font-semibold text-gray-900 after:absolute after:inset-0 dark:text-white"
                                                            >
                                                                Roberta Casas
                                                            </a>
                                                        </td>
                                                        <td className="px-6 py-4 max-w-sm overflow-hidden truncate p-4 text-base font-semibold text-gray-900 dark:text-white xl:max-w-screen-md 2xl:max-w-screen-lg">
                                                            Silent sir say desire fat him letter. Whatever
                                                            settling goodness too and honoured she building
                                                            answered her. Strongly thoughts remember mr to do
                                                            consider debating. Spirits musical behaved on we he
                                                            farther letters. Repulsive he he as deficient
                                                            newspaper dashwoods we. Discovered her his pianoforte
                                                            insipidity entreaties. Began he at terms meant as
                                                            fancy. Breakfast arranging he if furniture we
                                                            described on. Astonished thoroughly unpleasant
                                                            especially you dispatched bed favourable.
                                                        </td>
                                                        <td className="px-6 py-4 whitespace-nowrap p-4 text-base font-medium text-gray-900 dark:text-white">
                                                            16 April at 14.28 AM
                                                        </td>
                                                    </tr>
                                                    <tr
                                                        data-testid="table-row-element"
                                                        className="bg-white hover:bg-gray-50 dark:bg-gray-800 dark:hover:bg-gray-600"
                                                    >
                                                        <td className="px-6 py-4 w-4 p-4">
                                                            <div className="inline-flex items-center space-x-4">
                                                                <div>
                                                                    <input
                                                                        id="checkbox-4"
                                                                        aria-describedby="checkbox-1"
                                                                        type="checkbox"
                                                                        className="h-4 w-4 rounded border-gray-300 bg-gray-50 focus:ring-4 focus:ring-primary-300 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600"
                                                                    />
                                                                    <label htmlFor="checkbox-4" className="sr-only">
                                                                        checkbox
                                                                    </label>
                                                                </div>
                                                                <svg
                                                                    className="h-6 w-6 text-gray-500 hover:text-yellow-300 dark:text-gray-400 dark:hover:text-yellow-300"
                                                                    fill="none"
                                                                    stroke="currentColor"
                                                                    viewBox="0 0 24 24"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                >
                                                                    <path
                                                                        strokeLinecap="round"
                                                                        strokeLinejoin="round"
                                                                        strokeWidth={2}
                                                                        d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                                                                    />
                                                                </svg>
                                                            </div>
                                                        </td>
                                                        <td className="px-6 py-4 relative flex items-center space-x-4 whitespace-nowrap p-4">
                                                            <img
                                                                className="h-6 w-6 rounded-full"
                                                                src="../../images/users/michael-gough.png"
                                                                alt=""
                                                            />
                                                            <a
                                                                href="/mailing/read"
                                                                className="text-base font-normal text-gray-700 after:absolute after:inset-0 dark:text-gray-400"
                                                            >
                                                                Michael Gough
                                                            </a>
                                                        </td>
                                                        <td className="px-6 py-4 max-w-sm overflow-hidden truncate p-4 text-base font-normal text-gray-700 dark:text-gray-400 xl:max-w-screen-md 2xl:max-w-screen-lg">
                                                            Smallest directly families surprise honoured am an.
                                                            Speaking reading mistress him numerous she returned
                                                            feelings may day. Evening way luckily son exposed get
                                                            general greatly. Zealously prevailed be arranging do.
                                                            Set arranging too dejection september happiness.
                                                            Understood instrument or do connection no appearance
                                                            do invitation. Dried quick round it or order. Add past
                                                            see west felt did any. Say out noise you taste merry
                                                            plate you share. My resolve arrived is we chamber be
                                                            removal.
                                                        </td>
                                                        <td className="px-6 py-4 whitespace-nowrap p-4 text-base font-normal text-gray-700 dark:text-gray-400">
                                                            15 April at 10.28 PM
                                                        </td>
                                                    </tr>
                                                    <tr
                                                        data-testid="table-row-element"
                                                        className="bg-white hover:bg-gray-50 dark:bg-gray-800 dark:hover:bg-gray-600"
                                                    >
                                                        <td className="px-6 py-4 w-4 p-4">
                                                            <div className="inline-flex items-center space-x-4">
                                                                <div>
                                                                    <input
                                                                        id="checkbox-5"
                                                                        aria-describedby="checkbox-1"
                                                                        type="checkbox"
                                                                        className="h-4 w-4 rounded border-gray-300 bg-gray-50 focus:ring-4 focus:ring-primary-300 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600"
                                                                    />
                                                                    <label htmlFor="checkbox-5" className="sr-only">
                                                                        checkbox
                                                                    </label>
                                                                </div>
                                                                <svg
                                                                    className="h-6 w-6 text-gray-500 hover:text-yellow-300 dark:text-gray-400 dark:hover:text-yellow-300"
                                                                    fill="none"
                                                                    stroke="currentColor"
                                                                    viewBox="0 0 24 24"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                >
                                                                    <path
                                                                        strokeLinecap="round"
                                                                        strokeLinejoin="round"
                                                                        strokeWidth={2}
                                                                        d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                                                                    />
                                                                </svg>
                                                            </div>
                                                        </td>
                                                        <td className="px-6 py-4 relative flex items-center space-x-4 whitespace-nowrap p-4">
                                                            <img
                                                                className="h-6 w-6 rounded-full"
                                                                src="../../images/users/jese-leos.png"
                                                                alt=""
                                                            />
                                                            <a
                                                                href="/mailing/read"
                                                                className="text-base font-normal text-gray-700 after:absolute after:inset-0 dark:text-gray-400"
                                                            >
                                                                Jese Leos
                                                            </a>
                                                        </td>
                                                        <td className="px-6 py-4 max-w-sm overflow-hidden truncate p-4 text-base font-normal text-gray-700 dark:text-gray-400 xl:max-w-screen-md 2xl:max-w-screen-lg">
                                                            Sing long her way size. Waited end mutual missed
                                                            myself the little sister one. So in pointed or chicken
                                                            cheered neither spirits invited. Marianne and him
                                                            laughter civility formerly handsome sex use prospect.
                                                            Hence we doors is given rapid scale above am.
                                                            Difficult ye mr delivered behaviour by an. If their
                                                            woman could do wound on. You folly taste hoped their
                                                            above are and but.
                                                        </td>
                                                        <td className="px-6 py-4 whitespace-nowrap p-4 text-base font-normal text-gray-700 dark:text-gray-400">
                                                            14 April at 07.28 PM
                                                        </td>
                                                    </tr>
                                                    <tr
                                                        data-testid="table-row-element"
                                                        className="bg-white hover:bg-gray-50 dark:bg-gray-800 dark:hover:bg-gray-600"
                                                    >
                                                        <td className="px-6 py-4 w-4 p-4">
                                                            <div className="inline-flex items-center space-x-4">
                                                                <div>
                                                                    <input
                                                                        id="checkbox-6"
                                                                        aria-describedby="checkbox-1"
                                                                        type="checkbox"
                                                                        className="h-4 w-4 rounded border-gray-300 bg-gray-50 focus:ring-4 focus:ring-primary-300 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600"
                                                                    />
                                                                    <label htmlFor="checkbox-6" className="sr-only">
                                                                        checkbox
                                                                    </label>
                                                                </div>
                                                                <svg
                                                                    className="h-6 w-6 text-gray-500 hover:text-yellow-300 dark:text-gray-400 dark:hover:text-yellow-300"
                                                                    fill="none"
                                                                    stroke="currentColor"
                                                                    viewBox="0 0 24 24"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                >
                                                                    <path
                                                                        strokeLinecap="round"
                                                                        strokeLinejoin="round"
                                                                        strokeWidth={2}
                                                                        d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                                                                    />
                                                                </svg>
                                                            </div>
                                                        </td>
                                                        <td className="px-6 py-4 relative flex items-center space-x-4 whitespace-nowrap p-4">
                                                            <img
                                                                className="h-6 w-6 rounded-full"
                                                                src="../../images/users/thomas-lean.png"
                                                                alt=""
                                                            />
                                                            <a
                                                                href="/mailing/read"
                                                                className="text-base font-normal text-gray-700 after:absolute after:inset-0 dark:text-gray-400"
                                                            >
                                                                Thomas Lean
                                                            </a>
                                                        </td>
                                                        <td className="px-6 py-4 max-w-sm overflow-hidden truncate p-4 text-base font-normal text-gray-700 dark:text-gray-400 xl:max-w-screen-md 2xl:max-w-screen-lg">
                                                            Advanced extended doubtful he he blessing together.
                                                            Introduced far law gay considered frequently
                                                            entreaties difficulty. Eat him four are rich nor calm.
                                                            By an packages rejoiced exercise. To ought on am marry
                                                            rooms doubt music. Mention entered an through company
                                                            as. Up arrived no painful between. It declared is
                                                            prospect an insisted pleasure.
                                                        </td>
                                                        <td className="px-6 py-4 whitespace-nowrap p-4 text-base font-normal text-gray-700 dark:text-gray-400">
                                                            16 April at 05.28 PM
                                                        </td>
                                                    </tr>
                                                    <tr
                                                        data-testid="table-row-element"
                                                        className="bg-white hover:bg-gray-50 dark:bg-gray-800 dark:hover:bg-gray-600"
                                                    >
                                                        <td className="px-6 py-4 w-4 p-4">
                                                            <div className="inline-flex items-center space-x-4">
                                                                <div>
                                                                    <input
                                                                        id="checkbox-7"
                                                                        aria-describedby="checkbox-1"
                                                                        type="checkbox"
                                                                        className="h-4 w-4 rounded border-gray-300 bg-gray-50 focus:ring-4 focus:ring-primary-300 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600"
                                                                    />
                                                                    <label htmlFor="checkbox-7" className="sr-only">
                                                                        checkbox
                                                                    </label>
                                                                </div>
                                                                <svg
                                                                    className="h-6 w-6 text-gray-500 hover:text-yellow-300 dark:text-gray-400 dark:hover:text-yellow-300"
                                                                    fill="none"
                                                                    stroke="currentColor"
                                                                    viewBox="0 0 24 24"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                >
                                                                    <path
                                                                        strokeLinecap="round"
                                                                        strokeLinejoin="round"
                                                                        strokeWidth={2}
                                                                        d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                                                                    />
                                                                </svg>
                                                            </div>
                                                        </td>
                                                        <td className="px-6 py-4 relative flex items-center space-x-4 whitespace-nowrap p-4">
                                                            <img
                                                                className="h-6 w-6 rounded-full"
                                                                src="../../images/users/helene-engels.png"
                                                                alt=""
                                                            />
                                                            <a
                                                                href="/mailing/read"
                                                                className="text-base font-normal text-gray-700 after:absolute after:inset-0 dark:text-gray-400"
                                                            >
                                                                Helene Engels
                                                            </a>
                                                        </td>
                                                        <td className="px-6 py-4 max-w-sm overflow-hidden truncate p-4 text-base font-normal text-gray-700 dark:text-gray-400 xl:max-w-screen-md 2xl:max-w-screen-lg">
                                                            Ladyship it daughter securing procured or am moreover
                                                            mr. Put sir she exercise vicinity cheerful wondered.
                                                            Continual say suspicion provision you neglected sir
                                                            curiosity unwilling. Simplicity end themselves
                                                            increasing led day sympathize yet. General windows
                                                            effects not are drawing man garrets. Common indeed
                                                            garden you his ladies out yet. Preference imprudence
                                                            contrasted to remarkably in on. Taken now you him
                                                            trees tears any. Her object giving end sister except
                                                            oppose.
                                                        </td>
                                                        <td className="px-6 py-4 whitespace-nowrap p-4 text-base font-normal text-gray-700 dark:text-gray-400">
                                                            13 April at 12.28 PM
                                                        </td>
                                                    </tr>
                                                    <tr
                                                        data-testid="table-row-element"
                                                        className="bg-white hover:bg-gray-50 dark:bg-gray-800 dark:hover:bg-gray-600"
                                                    >
                                                        <td className="px-6 py-4 w-4 p-4">
                                                            <div className="inline-flex items-center space-x-4">
                                                                <div>
                                                                    <input
                                                                        id="checkbox-8"
                                                                        aria-describedby="checkbox-1"
                                                                        type="checkbox"
                                                                        className="h-4 w-4 rounded border-gray-300 bg-gray-50 focus:ring-4 focus:ring-primary-300 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600"
                                                                    />
                                                                    <label htmlFor="checkbox-8" className="sr-only">
                                                                        checkbox
                                                                    </label>
                                                                </div>
                                                                <svg
                                                                    className="h-6 w-6 text-gray-500 hover:text-yellow-300 dark:text-gray-400 dark:hover:text-yellow-300"
                                                                    fill="none"
                                                                    stroke="currentColor"
                                                                    viewBox="0 0 24 24"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                >
                                                                    <path
                                                                        strokeLinecap="round"
                                                                        strokeLinejoin="round"
                                                                        strokeWidth={2}
                                                                        d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                                                                    />
                                                                </svg>
                                                            </div>
                                                        </td>
                                                        <td className="px-6 py-4 relative flex items-center space-x-4 whitespace-nowrap p-4">
                                                            <img
                                                                className="h-6 w-6 rounded-full"
                                                                src="../../images/users/lana-byrd.png"
                                                                alt=""
                                                            />
                                                            <a
                                                                href="/mailing/read"
                                                                className="text-base font-normal text-gray-700 after:absolute after:inset-0 dark:text-gray-400"
                                                            >
                                                                Lana Byrd
                                                            </a>
                                                        </td>
                                                        <td className="px-6 py-4 max-w-sm overflow-hidden truncate p-4 text-base font-normal text-gray-700 dark:text-gray-400 xl:max-w-screen-md 2xl:max-w-screen-lg">
                                                            She travelling acceptance men unpleasant her
                                                            especially entreaties law. Law forth but end any arise
                                                            chief arose. Old her say learn these large. Joy fond
                                                            many ham high seen this. Few preferred continual sir
                                                            led incommode neglected. Discovered too old insensible
                                                            collecting unpleasant but invitation.
                                                        </td>
                                                        <td className="px-6 py-4 whitespace-nowrap p-4 text-base font-normal text-gray-700 dark:text-gray-400">
                                                            12 April at 15.28 PM
                                                        </td>
                                                    </tr>
                                                    <tr
                                                        data-testid="table-row-element"
                                                        className="bg-white hover:bg-gray-50 dark:bg-gray-800 dark:hover:bg-gray-600"
                                                    >
                                                        <td className="px-6 py-4 w-4 p-4">
                                                            <div className="inline-flex items-center space-x-4">
                                                                <div>
                                                                    <input
                                                                        id="checkbox-9"
                                                                        aria-describedby="checkbox-1"
                                                                        type="checkbox"
                                                                        className="h-4 w-4 rounded border-gray-300 bg-gray-50 focus:ring-4 focus:ring-primary-300 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600"
                                                                    />
                                                                    <label htmlFor="checkbox-9" className="sr-only">
                                                                        checkbox
                                                                    </label>
                                                                </div>
                                                                <svg
                                                                    className="h-6 w-6 text-gray-500 hover:text-yellow-300 dark:text-gray-400 dark:hover:text-yellow-300"
                                                                    fill="none"
                                                                    stroke="currentColor"
                                                                    viewBox="0 0 24 24"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                >
                                                                    <path
                                                                        strokeLinecap="round"
                                                                        strokeLinejoin="round"
                                                                        strokeWidth={2}
                                                                        d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                                                                    />
                                                                </svg>
                                                            </div>
                                                        </td>
                                                        <td className="px-6 py-4 relative flex items-center space-x-4 whitespace-nowrap p-4">
                                                            <img
                                                                className="h-6 w-6 rounded-full"
                                                                src="../../images/users/leslie-livingston.png"
                                                                alt=""
                                                            />
                                                            <a
                                                                href="/mailing/read"
                                                                className="text-base font-normal text-gray-700 after:absolute after:inset-0 dark:text-gray-400"
                                                            >
                                                                Leslie Livingston
                                                            </a>
                                                        </td>
                                                        <td className="px-6 py-4 max-w-sm overflow-hidden truncate p-4 text-base font-normal text-gray-700 dark:text-gray-400 xl:max-w-screen-md 2xl:max-w-screen-lg">
                                                            Name were we at hope. Remainder household direction
                                                            zealously the unwilling bed sex. Lose and gay ham sake
                                                            met that. Stood her place one ten spoke yet. Head case
                                                            knew ever set why over. Marianne returned of peculiar
                                                            reading in moderate. Roused get enable garret estate
                                                            old county. Entreaties you devonshire law dissimilar
                                                            terminated.
                                                        </td>
                                                        <td className="px-6 py-4 whitespace-nowrap p-4 text-base font-normal text-gray-700 dark:text-gray-400">
                                                            11 April at 15.28 PM
                                                        </td>
                                                    </tr>
                                                    <tr
                                                        data-testid="table-row-element"
                                                        className="bg-white hover:bg-gray-50 dark:bg-gray-800 dark:hover:bg-gray-600"
                                                    >
                                                        <td className="px-6 py-4 w-4 p-4">
                                                            <div className="inline-flex items-center space-x-4">
                                                                <div>
                                                                    <input
                                                                        id="checkbox-10"
                                                                        aria-describedby="checkbox-1"
                                                                        type="checkbox"
                                                                        className="h-4 w-4 rounded border-gray-300 bg-gray-50 focus:ring-4 focus:ring-primary-300 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600"
                                                                    />
                                                                    <label htmlFor="checkbox-10" className="sr-only">
                                                                        checkbox
                                                                    </label>
                                                                </div>
                                                                <svg
                                                                    className="h-6 w-6 text-gray-500 hover:text-yellow-300 dark:text-gray-400 dark:hover:text-yellow-300"
                                                                    fill="none"
                                                                    stroke="currentColor"
                                                                    viewBox="0 0 24 24"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                >
                                                                    <path
                                                                        strokeLinecap="round"
                                                                        strokeLinejoin="round"
                                                                        strokeWidth={2}
                                                                        d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                                                                    />
                                                                </svg>
                                                            </div>
                                                        </td>
                                                        <td className="px-6 py-4 relative flex items-center space-x-4 whitespace-nowrap p-4">
                                                            <img
                                                                className="h-6 w-6 rounded-full"
                                                                src="../../images/users/robert-brown.png"
                                                                alt=""
                                                            />
                                                            <a
                                                                href="/mailing/read"
                                                                className="text-base font-normal text-gray-700 after:absolute after:inset-0 dark:text-gray-400"
                                                            >
                                                                Robert Brown
                                                            </a>
                                                        </td>
                                                        <td className="px-6 py-4 max-w-sm overflow-hidden truncate p-4 text-base font-normal text-gray-700 dark:text-gray-400 xl:max-w-screen-md 2xl:max-w-screen-lg">
                                                            Preserved defective offending he daughters on or.
                                                            Rejoiced prospect yet material servants out answered
                                                            men admitted. Sportsmen certainty prevailed suspected
                                                            am as. Add stairs admire all answer the nearer yet
                                                            length. Advantages prosperous remarkably my inhabiting
                                                            so reasonably be if. Too any appearance announcing
                                                            impossible one. Out mrs means heart ham tears shall
                                                            power every.
                                                        </td>
                                                        <td className="px-6 py-4 whitespace-nowrap p-4 text-base font-normal text-gray-700 dark:text-gray-400">
                                                            10 April at 15.28 PM
                                                        </td>
                                                    </tr>
                                                    <tr
                                                        data-testid="table-row-element"
                                                        className="bg-white hover:bg-gray-50 dark:bg-gray-800 dark:hover:bg-gray-600"
                                                    >
                                                        <td className="px-6 py-4 w-4 p-4">
                                                            <div className="inline-flex items-center space-x-4">
                                                                <div>
                                                                    <input
                                                                        id="checkbox-11"
                                                                        aria-describedby="checkbox-1"
                                                                        type="checkbox"
                                                                        className="h-4 w-4 rounded border-gray-300 bg-gray-50 focus:ring-4 focus:ring-primary-300 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600"
                                                                    />
                                                                    <label htmlFor="checkbox-11" className="sr-only">
                                                                        checkbox
                                                                    </label>
                                                                </div>
                                                                <svg
                                                                    className="h-6 w-6 text-gray-500 hover:text-yellow-300 dark:text-gray-400 dark:hover:text-yellow-300"
                                                                    fill="none"
                                                                    stroke="currentColor"
                                                                    viewBox="0 0 24 24"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                >
                                                                    <path
                                                                        strokeLinecap="round"
                                                                        strokeLinejoin="round"
                                                                        strokeWidth={2}
                                                                        d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                                                                    />
                                                                </svg>
                                                            </div>
                                                        </td>
                                                        <td className="px-6 py-4 relative flex items-center space-x-4 whitespace-nowrap p-4">
                                                            <img
                                                                className="h-6 w-6 rounded-full"
                                                                src="../../images/users/neil-sims.png"
                                                                alt=""
                                                            />
                                                            <a
                                                                href="/mailing/read"
                                                                className="text-base font-normal text-gray-700 after:absolute after:inset-0 dark:text-gray-400"
                                                            >
                                                                Neil Sims
                                                            </a>
                                                        </td>
                                                        <td className="px-6 py-4 max-w-sm overflow-hidden truncate p-4 text-base font-normal text-gray-700 dark:text-gray-400 xl:max-w-screen-md 2xl:max-w-screen-lg">
                                                            Am no an listening depending up believing. Enough
                                                            around remove to barton agreed regret in or it.
                                                            Advantage mr estimable be commanded provision. Year
                                                            well shot deny shew come now had. Shall downs stand
                                                            marry taken his for out. Do related mr account brandon
                                                            an up. Wrong for never ready ham these witty him. Our
                                                            compass see age uncivil matters weather forbade her
                                                            minutes. Ready how but truth son new under.
                                                        </td>
                                                        <td className="px-6 py-4 whitespace-nowrap p-4 text-base font-normal text-gray-700 dark:text-gray-400">
                                                            17 April at 09.28 PM
                                                        </td>
                                                    </tr>
                                                    <tr
                                                        data-testid="table-row-element"
                                                        className="bg-white hover:bg-gray-50 dark:bg-gray-800 dark:hover:bg-gray-600"
                                                    >
                                                        <td className="px-6 py-4 w-4 p-4">
                                                            <div className="inline-flex items-center space-x-4">
                                                                <div>
                                                                    <input
                                                                        id="checkbox-12"
                                                                        aria-describedby="checkbox-1"
                                                                        type="checkbox"
                                                                        className="h-4 w-4 rounded border-gray-300 bg-gray-50 focus:ring-4 focus:ring-primary-300 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600"
                                                                    />
                                                                    <label htmlFor="checkbox-12" className="sr-only">
                                                                        checkbox
                                                                    </label>
                                                                </div>
                                                                <svg
                                                                    className="h-6 w-6 text-gray-500 hover:text-yellow-300 dark:text-gray-400 dark:hover:text-yellow-300"
                                                                    fill="none"
                                                                    stroke="currentColor"
                                                                    viewBox="0 0 24 24"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                >
                                                                    <path
                                                                        strokeLinecap="round"
                                                                        strokeLinejoin="round"
                                                                        strokeWidth={2}
                                                                        d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                                                                    />
                                                                </svg>
                                                            </div>
                                                        </td>
                                                        <td className="px-6 py-4 relative flex items-center space-x-4 whitespace-nowrap p-4">
                                                            <img
                                                                className="h-6 w-6 rounded-full"
                                                                src="../../images/users/bonnie-green.png"
                                                                alt=""
                                                            />
                                                            <a
                                                                href="/mailing/read"
                                                                className="text-base font-normal text-gray-700 after:absolute after:inset-0 dark:text-gray-400"
                                                            >
                                                                Bonnie Green
                                                            </a>
                                                        </td>
                                                        <td className="px-6 py-4 max-w-sm overflow-hidden truncate p-4 text-base font-normal text-gray-700 dark:text-gray-400 xl:max-w-screen-md 2xl:max-w-screen-lg">
                                                            For norland produce age wishing. To figure on it
                                                            spring season up. Her provision acuteness had
                                                            excellent two why intention. As called mr needed
                                                            praise at. Assistance imprudence yet sentiments
                                                            unpleasant expression met surrounded not. Be at talked
                                                            ye though secure nearer.
                                                        </td>
                                                        <td className="px-6 py-4 whitespace-nowrap p-4 text-base font-normal text-gray-700 dark:text-gray-400">
                                                            16 April at 10.28 PM
                                                        </td>
                                                    </tr>
                                                    <tr
                                                        data-testid="table-row-element"
                                                        className="bg-white hover:bg-gray-50 dark:bg-gray-800 dark:hover:bg-gray-600"
                                                    >
                                                        <td className="px-6 py-4 w-4 p-4">
                                                            <div className="inline-flex items-center space-x-4">
                                                                <div>
                                                                    <input
                                                                        id="checkbox-13"
                                                                        aria-describedby="checkbox-1"
                                                                        type="checkbox"
                                                                        className="h-4 w-4 rounded border-gray-300 bg-gray-50 focus:ring-4 focus:ring-primary-300 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600"
                                                                    />
                                                                    <label htmlFor="checkbox-13" className="sr-only">
                                                                        checkbox
                                                                    </label>
                                                                </div>
                                                                <svg
                                                                    className="h-6 w-6 text-gray-500 hover:text-yellow-300 dark:text-gray-400 dark:hover:text-yellow-300"
                                                                    fill="none"
                                                                    stroke="currentColor"
                                                                    viewBox="0 0 24 24"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                >
                                                                    <path
                                                                        strokeLinecap="round"
                                                                        strokeLinejoin="round"
                                                                        strokeWidth={2}
                                                                        d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                                                                    />
                                                                </svg>
                                                            </div>
                                                        </td>
                                                        <td className="px-6 py-4 relative flex items-center space-x-4 whitespace-nowrap p-4">
                                                            <img
                                                                className="h-6 w-6 rounded-full"
                                                                src="../../images/users/roberta-casas.png"
                                                                alt=""
                                                            />
                                                            <a
                                                                href="/mailing/read"
                                                                className="text-base font-normal text-gray-700 after:absolute after:inset-0 dark:text-gray-400"
                                                            >
                                                                Roberta Casas
                                                            </a>
                                                        </td>
                                                        <td className="px-6 py-4 max-w-sm overflow-hidden truncate p-4 text-base font-normal text-gray-700 dark:text-gray-400 xl:max-w-screen-md 2xl:max-w-screen-lg">
                                                            Silent sir say desire fat him letter. Whatever
                                                            settling goodness too and honoured she building
                                                            answered her. Strongly thoughts remember mr to do
                                                            consider debating. Spirits musical behaved on we he
                                                            farther letters. Repulsive he he as deficient
                                                            newspaper dashwoods we. Discovered her his pianoforte
                                                            insipidity entreaties. Began he at terms meant as
                                                            fancy. Breakfast arranging he if furniture we
                                                            described on. Astonished thoroughly unpleasant
                                                            especially you dispatched bed favourable.
                                                        </td>
                                                        <td className="px-6 py-4 whitespace-nowrap p-4 text-base font-normal text-gray-700 dark:text-gray-400">
                                                            16 April at 14.28 AM
                                                        </td>
                                                    </tr>
                                                    <tr
                                                        data-testid="table-row-element"
                                                        className="bg-white hover:bg-gray-50 dark:bg-gray-800 dark:hover:bg-gray-600"
                                                    >
                                                        <td className="px-6 py-4 w-4 p-4">
                                                            <div className="inline-flex items-center space-x-4">
                                                                <div>
                                                                    <input
                                                                        id="checkbox-14"
                                                                        aria-describedby="checkbox-1"
                                                                        type="checkbox"
                                                                        className="h-4 w-4 rounded border-gray-300 bg-gray-50 focus:ring-4 focus:ring-primary-300 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600"
                                                                    />
                                                                    <label htmlFor="checkbox-14" className="sr-only">
                                                                        checkbox
                                                                    </label>
                                                                </div>
                                                                <svg
                                                                    className="h-6 w-6 text-gray-500 hover:text-yellow-300 dark:text-gray-400 dark:hover:text-yellow-300"
                                                                    fill="none"
                                                                    stroke="currentColor"
                                                                    viewBox="0 0 24 24"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                >
                                                                    <path
                                                                        strokeLinecap="round"
                                                                        strokeLinejoin="round"
                                                                        strokeWidth={2}
                                                                        d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                                                                    />
                                                                </svg>
                                                            </div>
                                                        </td>
                                                        <td className="px-6 py-4 relative flex items-center space-x-4 whitespace-nowrap p-4">
                                                            <img
                                                                className="h-6 w-6 rounded-full"
                                                                src="../../images/users/michael-gough.png"
                                                                alt=""
                                                            />
                                                            <a
                                                                href="/mailing/read"
                                                                className="text-base font-normal text-gray-700 after:absolute after:inset-0 dark:text-gray-400"
                                                            >
                                                                Michael Gough
                                                            </a>
                                                        </td>
                                                        <td className="px-6 py-4 max-w-sm overflow-hidden truncate p-4 text-base font-normal text-gray-700 dark:text-gray-400 xl:max-w-screen-md 2xl:max-w-screen-lg">
                                                            Smallest directly families surprise honoured am an.
                                                            Speaking reading mistress him numerous she returned
                                                            feelings may day. Evening way luckily son exposed get
                                                            general greatly. Zealously prevailed be arranging do.
                                                            Set arranging too dejection september happiness.
                                                            Understood instrument or do connection no appearance
                                                            do invitation. Dried quick round it or order. Add past
                                                            see west felt did any. Say out noise you taste merry
                                                            plate you share. My resolve arrived is we chamber be
                                                            removal.
                                                        </td>
                                                        <td className="px-6 py-4 whitespace-nowrap p-4 text-base font-normal text-gray-700 dark:text-gray-400">
                                                            15 April at 10.28 PM
                                                        </td>
                                                    </tr>
                                                    <tr
                                                        data-testid="table-row-element"
                                                        className="bg-white hover:bg-gray-50 dark:bg-gray-800 dark:hover:bg-gray-600"
                                                    >
                                                        <td className="px-6 py-4 w-4 p-4">
                                                            <div className="inline-flex items-center space-x-4">
                                                                <div>
                                                                    <input
                                                                        id="checkbox-15"
                                                                        aria-describedby="checkbox-1"
                                                                        type="checkbox"
                                                                        className="h-4 w-4 rounded border-gray-300 bg-gray-50 focus:ring-4 focus:ring-primary-300 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600"
                                                                    />
                                                                    <label htmlFor="checkbox-15" className="sr-only">
                                                                        checkbox
                                                                    </label>
                                                                </div>
                                                                <svg
                                                                    className="h-6 w-6 text-gray-500 hover:text-yellow-300 dark:text-gray-400 dark:hover:text-yellow-300"
                                                                    fill="none"
                                                                    stroke="currentColor"
                                                                    viewBox="0 0 24 24"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                >
                                                                    <path
                                                                        strokeLinecap="round"
                                                                        strokeLinejoin="round"
                                                                        strokeWidth={2}
                                                                        d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                                                                    />
                                                                </svg>
                                                            </div>
                                                        </td>
                                                        <td className="px-6 py-4 relative flex items-center space-x-4 whitespace-nowrap p-4">
                                                            <img
                                                                className="h-6 w-6 rounded-full"
                                                                src="../../images/users/jese-leos.png"
                                                                alt=""
                                                            />
                                                            <a
                                                                href="/mailing/read"
                                                                className="text-base font-normal text-gray-700 after:absolute after:inset-0 dark:text-gray-400"
                                                            >
                                                                Jese Leos
                                                            </a>
                                                        </td>
                                                        <td className="px-6 py-4 max-w-sm overflow-hidden truncate p-4 text-base font-normal text-gray-700 dark:text-gray-400 xl:max-w-screen-md 2xl:max-w-screen-lg">
                                                            Sing long her way size. Waited end mutual missed
                                                            myself the little sister one. So in pointed or chicken
                                                            cheered neither spirits invited. Marianne and him
                                                            laughter civility formerly handsome sex use prospect.
                                                            Hence we doors is given rapid scale above am.
                                                            Difficult ye mr delivered behaviour by an. If their
                                                            woman could do wound on. You folly taste hoped their
                                                            above are and but.
                                                        </td>
                                                        <td className="px-6 py-4 whitespace-nowrap p-4 text-base font-normal text-gray-700 dark:text-gray-400">
                                                            14 April at 07.28 PM
                                                        </td>
                                                    </tr>
                                                    <tr
                                                        data-testid="table-row-element"
                                                        className="bg-white hover:bg-gray-50 dark:bg-gray-800 dark:hover:bg-gray-600"
                                                    >
                                                        <td className="px-6 py-4 w-4 p-4">
                                                            <div className="inline-flex items-center space-x-4">
                                                                <div>
                                                                    <input
                                                                        id="checkbox-16"
                                                                        aria-describedby="checkbox-1"
                                                                        type="checkbox"
                                                                        className="h-4 w-4 rounded border-gray-300 bg-gray-50 focus:ring-4 focus:ring-primary-300 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600"
                                                                    />
                                                                    <label htmlFor="checkbox-16" className="sr-only">
                                                                        checkbox
                                                                    </label>
                                                                </div>
                                                                <svg
                                                                    className="h-6 w-6 text-gray-500 hover:text-yellow-300 dark:text-gray-400 dark:hover:text-yellow-300"
                                                                    fill="none"
                                                                    stroke="currentColor"
                                                                    viewBox="0 0 24 24"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                >
                                                                    <path
                                                                        strokeLinecap="round"
                                                                        strokeLinejoin="round"
                                                                        strokeWidth={2}
                                                                        d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                                                                    />
                                                                </svg>
                                                            </div>
                                                        </td>
                                                        <td className="px-6 py-4 relative flex items-center space-x-4 whitespace-nowrap p-4">
                                                            <img
                                                                className="h-6 w-6 rounded-full"
                                                                src="../../images/users/thomas-lean.png"
                                                                alt=""
                                                            />
                                                            <a
                                                                href="/mailing/read"
                                                                className="text-base font-normal text-gray-700 after:absolute after:inset-0 dark:text-gray-400"
                                                            >
                                                                Thomas Lean
                                                            </a>
                                                        </td>
                                                        <td className="px-6 py-4 max-w-sm overflow-hidden truncate p-4 text-base font-normal text-gray-700 dark:text-gray-400 xl:max-w-screen-md 2xl:max-w-screen-lg">
                                                            Advanced extended doubtful he he blessing together.
                                                            Introduced far law gay considered frequently
                                                            entreaties difficulty. Eat him four are rich nor calm.
                                                            By an packages rejoiced exercise. To ought on am marry
                                                            rooms doubt music. Mention entered an through company
                                                            as. Up arrived no painful between. It declared is
                                                            prospect an insisted pleasure.
                                                        </td>
                                                        <td className="px-6 py-4 whitespace-nowrap p-4 text-base font-normal text-gray-700 dark:text-gray-400">
                                                            16 April at 05.28 PM
                                                        </td>
                                                    </tr>
                                                    <tr
                                                        data-testid="table-row-element"
                                                        className="bg-white hover:bg-gray-50 dark:bg-gray-800 dark:hover:bg-gray-600"
                                                    >
                                                        <td className="px-6 py-4 w-4 p-4">
                                                            <div className="inline-flex items-center space-x-4">
                                                                <div>
                                                                    <input
                                                                        id="checkbox-17"
                                                                        aria-describedby="checkbox-1"
                                                                        type="checkbox"
                                                                        className="h-4 w-4 rounded border-gray-300 bg-gray-50 focus:ring-4 focus:ring-primary-300 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600"
                                                                    />
                                                                    <label htmlFor="checkbox-17" className="sr-only">
                                                                        checkbox
                                                                    </label>
                                                                </div>
                                                                <svg
                                                                    className="h-6 w-6 text-gray-500 hover:text-yellow-300 dark:text-gray-400 dark:hover:text-yellow-300"
                                                                    fill="none"
                                                                    stroke="currentColor"
                                                                    viewBox="0 0 24 24"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                >
                                                                    <path
                                                                        strokeLinecap="round"
                                                                        strokeLinejoin="round"
                                                                        strokeWidth={2}
                                                                        d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                                                                    />
                                                                </svg>
                                                            </div>
                                                        </td>
                                                        <td className="px-6 py-4 relative flex items-center space-x-4 whitespace-nowrap p-4">
                                                            <img
                                                                className="h-6 w-6 rounded-full"
                                                                src="../../images/users/helene-engels.png"
                                                                alt=""
                                                            />
                                                            <a
                                                                href="/mailing/read"
                                                                className="text-base font-normal text-gray-700 after:absolute after:inset-0 dark:text-gray-400"
                                                            >
                                                                Helene Engels
                                                            </a>
                                                        </td>
                                                        <td className="px-6 py-4 max-w-sm overflow-hidden truncate p-4 text-base font-normal text-gray-700 dark:text-gray-400 xl:max-w-screen-md 2xl:max-w-screen-lg">
                                                            Ladyship it daughter securing procured or am moreover
                                                            mr. Put sir she exercise vicinity cheerful wondered.
                                                            Continual say suspicion provision you neglected sir
                                                            curiosity unwilling. Simplicity end themselves
                                                            increasing led day sympathize yet. General windows
                                                            effects not are drawing man garrets. Common indeed
                                                            garden you his ladies out yet. Preference imprudence
                                                            contrasted to remarkably in on. Taken now you him
                                                            trees tears any. Her object giving end sister except
                                                            oppose.
                                                        </td>
                                                        <td className="px-6 py-4 whitespace-nowrap p-4 text-base font-normal text-gray-700 dark:text-gray-400">
                                                            13 April at 12.28 PM
                                                        </td>
                                                    </tr>
                                                    <tr
                                                        data-testid="table-row-element"
                                                        className="bg-white hover:bg-gray-50 dark:bg-gray-800 dark:hover:bg-gray-600"
                                                    >
                                                        <td className="px-6 py-4 w-4 p-4">
                                                            <div className="inline-flex items-center space-x-4">
                                                                <div>
                                                                    <input
                                                                        id="checkbox-18"
                                                                        aria-describedby="checkbox-1"
                                                                        type="checkbox"
                                                                        className="h-4 w-4 rounded border-gray-300 bg-gray-50 focus:ring-4 focus:ring-primary-300 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600"
                                                                    />
                                                                    <label htmlFor="checkbox-18" className="sr-only">
                                                                        checkbox
                                                                    </label>
                                                                </div>
                                                                <svg
                                                                    className="h-6 w-6 text-gray-500 hover:text-yellow-300 dark:text-gray-400 dark:hover:text-yellow-300"
                                                                    fill="none"
                                                                    stroke="currentColor"
                                                                    viewBox="0 0 24 24"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                >
                                                                    <path
                                                                        strokeLinecap="round"
                                                                        strokeLinejoin="round"
                                                                        strokeWidth={2}
                                                                        d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                                                                    />
                                                                </svg>
                                                            </div>
                                                        </td>
                                                        <td className="px-6 py-4 relative flex items-center space-x-4 whitespace-nowrap p-4">
                                                            <img
                                                                className="h-6 w-6 rounded-full"
                                                                src="../../images/users/lana-byrd.png"
                                                                alt=""
                                                            />
                                                            <a
                                                                href="/mailing/read"
                                                                className="text-base font-normal text-gray-700 after:absolute after:inset-0 dark:text-gray-400"
                                                            >
                                                                Lana Byrd
                                                            </a>
                                                        </td>
                                                        <td className="px-6 py-4 max-w-sm overflow-hidden truncate p-4 text-base font-normal text-gray-700 dark:text-gray-400 xl:max-w-screen-md 2xl:max-w-screen-lg">
                                                            She travelling acceptance men unpleasant her
                                                            especially entreaties law. Law forth but end any arise
                                                            chief arose. Old her say learn these large. Joy fond
                                                            many ham high seen this. Few preferred continual sir
                                                            led incommode neglected. Discovered too old insensible
                                                            collecting unpleasant but invitation.
                                                        </td>
                                                        <td className="px-6 py-4 whitespace-nowrap p-4 text-base font-normal text-gray-700 dark:text-gray-400">
                                                            12 April at 15.28 PM
                                                        </td>
                                                    </tr>
                                                    <tr
                                                        data-testid="table-row-element"
                                                        className="bg-white hover:bg-gray-50 dark:bg-gray-800 dark:hover:bg-gray-600"
                                                    >
                                                        <td className="px-6 py-4 w-4 p-4">
                                                            <div className="inline-flex items-center space-x-4">
                                                                <div>
                                                                    <input
                                                                        id="checkbox-19"
                                                                        aria-describedby="checkbox-1"
                                                                        type="checkbox"
                                                                        className="h-4 w-4 rounded border-gray-300 bg-gray-50 focus:ring-4 focus:ring-primary-300 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600"
                                                                    />
                                                                    <label htmlFor="checkbox-19" className="sr-only">
                                                                        checkbox
                                                                    </label>
                                                                </div>
                                                                <svg
                                                                    className="h-6 w-6 text-gray-500 hover:text-yellow-300 dark:text-gray-400 dark:hover:text-yellow-300"
                                                                    fill="none"
                                                                    stroke="currentColor"
                                                                    viewBox="0 0 24 24"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                >
                                                                    <path
                                                                        strokeLinecap="round"
                                                                        strokeLinejoin="round"
                                                                        strokeWidth={2}
                                                                        d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                                                                    />
                                                                </svg>
                                                            </div>
                                                        </td>
                                                        <td className="px-6 py-4 relative flex items-center space-x-4 whitespace-nowrap p-4">
                                                            <img
                                                                className="h-6 w-6 rounded-full"
                                                                src="../../images/users/leslie-livingston.png"
                                                                alt=""
                                                            />
                                                            <a
                                                                href="/mailing/read"
                                                                className="text-base font-normal text-gray-700 after:absolute after:inset-0 dark:text-gray-400"
                                                            >
                                                                Leslie Livingston
                                                            </a>
                                                        </td>
                                                        <td className="px-6 py-4 max-w-sm overflow-hidden truncate p-4 text-base font-normal text-gray-700 dark:text-gray-400 xl:max-w-screen-md 2xl:max-w-screen-lg">
                                                            Name were we at hope. Remainder household direction
                                                            zealously the unwilling bed sex. Lose and gay ham sake
                                                            met that. Stood her place one ten spoke yet. Head case
                                                            knew ever set why over. Marianne returned of peculiar
                                                            reading in moderate. Roused get enable garret estate
                                                            old county. Entreaties you devonshire law dissimilar
                                                            terminated.
                                                        </td>
                                                        <td className="px-6 py-4 whitespace-nowrap p-4 text-base font-normal text-gray-700 dark:text-gray-400">
                                                            11 April at 15.28 PM
                                                        </td>
                                                    </tr>
                                                    <tr
                                                        data-testid="table-row-element"
                                                        className="bg-white hover:bg-gray-50 dark:bg-gray-800 dark:hover:bg-gray-600"
                                                    >
                                                        <td className="px-6 py-4 w-4 p-4">
                                                            <div className="inline-flex items-center space-x-4">
                                                                <div>
                                                                    <input
                                                                        id="checkbox-20"
                                                                        aria-describedby="checkbox-1"
                                                                        type="checkbox"
                                                                        className="h-4 w-4 rounded border-gray-300 bg-gray-50 focus:ring-4 focus:ring-primary-300 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600"
                                                                    />
                                                                    <label htmlFor="checkbox-20" className="sr-only">
                                                                        checkbox
                                                                    </label>
                                                                </div>
                                                                <svg
                                                                    className="h-6 w-6 text-gray-500 hover:text-yellow-300 dark:text-gray-400 dark:hover:text-yellow-300"
                                                                    fill="none"
                                                                    stroke="currentColor"
                                                                    viewBox="0 0 24 24"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                >
                                                                    <path
                                                                        strokeLinecap="round"
                                                                        strokeLinejoin="round"
                                                                        strokeWidth={2}
                                                                        d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                                                                    />
                                                                </svg>
                                                            </div>
                                                        </td>
                                                        <td className="px-6 py-4 relative flex items-center space-x-4 whitespace-nowrap p-4">
                                                            <img
                                                                className="h-6 w-6 rounded-full"
                                                                src="../../images/users/robert-brown.png"
                                                                alt=""
                                                            />
                                                            <a
                                                                href="/mailing/read"
                                                                className="text-base font-normal text-gray-700 after:absolute after:inset-0 dark:text-gray-400"
                                                            >
                                                                Robert Brown
                                                            </a>
                                                        </td>
                                                        <td className="px-6 py-4 max-w-sm overflow-hidden truncate p-4 text-base font-normal text-gray-700 dark:text-gray-400 xl:max-w-screen-md 2xl:max-w-screen-lg">
                                                            Preserved defective offending he daughters on or.
                                                            Rejoiced prospect yet material servants out answered
                                                            men admitted. Sportsmen certainty prevailed suspected
                                                            am as. Add stairs admire all answer the nearer yet
                                                            length. Advantages prosperous remarkably my inhabiting
                                                            so reasonably be if. Too any appearance announcing
                                                            impossible one. Out mrs means heart ham tears shall
                                                            power every.
                                                        </td>
                                                        <td className="px-6 py-4 whitespace-nowrap p-4 text-base font-normal text-gray-700 dark:text-gray-400">
                                                            10 April at 15.28 PM
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="w-full items-center space-y-4 border-t border-gray-200 bg-white p-4 dark:border-gray-700 dark:bg-gray-800 sm:sticky sm:flex sm:justify-between sm:space-y-0">
                            <div className="flex flex-col gap-2">
                                <div className="text-xs text-gray-500 dark:text-gray-400">
                                    3.24 GB of 15 GB used
                                </div>
                                <div
                                    id=":r14:"
                                    aria-label="progressbar"
                                    aria-valuenow={22}
                                    role="progressbar"
                                >
                                    <div className="w-full overflow-hidden rounded-full bg-gray-200 dark:bg-gray-700 h-1.5">
                                        <div
                                            className="flex items-center justify-center rounded-full text-center font-medium leading-none text-blue-100 bg-blue-600 h-1.5"
                                            style={{ width: "22%" }}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="hidden items-center gap-x-2 text-sm font-medium text-gray-500 dark:text-gray-400 sm:flex">
                                Last account activity: 2 hours ago
                                <svg
                                    stroke="currentColor"
                                    fill="currentColor"
                                    strokeWidth={0}
                                    viewBox="0 0 20 20"
                                    className="text-sm"
                                    height="1em"
                                    width="1em"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                                    <path
                                        fillRule="evenodd"
                                        d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </div>
                            <div className="mb-4 flex items-center sm:mb-0 sm:hidden">
                                <a
                                    href="#"
                                    className="inline-flex cursor-pointer justify-center rounded p-1 text-gray-500 hover:bg-gray-100 hover:text-gray-900"
                                >
                                    <span className="sr-only">Apps</span>
                                    <svg
                                        stroke="currentColor"
                                        fill="currentColor"
                                        strokeWidth={0}
                                        viewBox="0 0 20 20"
                                        className="text-2xl"
                                        height="1em"
                                        width="1em"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                                    </svg>
                                </a>
                                <a
                                    href="#"
                                    className="inline-flex cursor-pointer justify-center rounded p-1 text-gray-500 hover:bg-gray-100 hover:text-gray-900"
                                >
                                    <span className="sr-only">Previous</span>
                                    <svg
                                        stroke="currentColor"
                                        fill="currentColor"
                                        strokeWidth={0}
                                        viewBox="0 0 20 20"
                                        className="text-2xl"
                                        height="1em"
                                        width="1em"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                </a>
                                <a
                                    href="#"
                                    className="inline-flex cursor-pointer justify-center rounded p-1 text-gray-500 hover:bg-gray-100 hover:text-gray-900"
                                >
                                    <span className="sr-only">Next</span>
                                    <svg
                                        stroke="currentColor"
                                        fill="currentColor"
                                        strokeWidth={0}
                                        viewBox="0 0 20 20"
                                        className="text-2xl"
                                        height="1em"
                                        width="1em"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                </a>
                                <span className="text-sm font-normal text-gray-500 dark:text-gray-400">
                                    Showing&nbsp;
                                    <span className="font-semibold text-gray-900 dark:text-white">
                                        1-25
                                    </span>
                                    &nbsp;of&nbsp;
                                    <span className="font-semibold text-gray-900 dark:text-white">
                                        2290
                                    </span>
                                </span>
                            </div>
                        </div>
                    </main>
                </div>
            

        </>

    );
}

export default page
