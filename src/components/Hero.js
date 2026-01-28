'use client';

import { useState } from 'react'
import SearchIcon from './icons/SearchIcon'
import { Dialog, DialogPanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'


export default function hero({ onSearch }) {
  const [query, setQuery ] = useState("");
  const [postcode, setPostcode] = useState("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault();
      if (onSearch){
        onSearch(query, postcode)
      }
  }

  return (
    <div className="bg-white">
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div
          aria-hidden="true"
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        >
          <div
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
            className="relative left-[calc(50%-11rem)] aspect-1155/678 w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          />
        </div>
        <div className="bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="relative isolate overflow-hidden bg-[#9bbad3] px-6 py-24 shadow-2xl sm:rounded-3xl sm:px-24 xl:py-32">
            <h2 className="mx-auto max-w-3xl text-center text-4xl font-semibold tracking-tight text-[#F5EFEB] sm:text-5xl">
              Buy it by me
            </h2>
            <p className="mx-auto mt-6 max-w-lg text-center text-lg text-[#F5EFEB]">
            Support local buisnesses - Find everyday items near you, no delivery needed
            </p>
            <form className="mx-auto mt-10 flex max-w-md gap-x-4">
              <label htmlFor="search product" className="sr-only">
                search product
              </label>
              <input
                id="product-search"
                name="search"
                type="search"
                required
                placeholder="search for items near you"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="min-w-0 w-2/3 rounded-md bg-white/5 px-3.5 py-2 text-base text-[] outline-1 -outline-offset-1 outline-white/10 placeholder:text-[#F5EFEB] focus:outline-2 focus:-outline-offset-2 focus:outline-white sm:text-sm/6"
              />
              <label htmlFor="post-code" className="sr-only">
                Post code
              </label>
              <input
                id="post-code"
                name="postcode"
                type="text"
                required
                placeholder="e.g. SW1A 1AA"
                autoComplete="postal-code"
                value={postcode}
                onChange={(e) =>setPostcode(e.target.value)}
                className="min-w-0 w-1/3 rounded-md bg-white/5 px-3.5 py-2 text-base text-[#F5EFEB] outline-1 -outline-offset-1 outline-white/10 placeholder:text-[#F5EFEB] focus:outline-2 focus:-outline-offset-2 focus:outline-white sm:text-sm/6"
              />
              <button
                type="submit"
                className="flex-none rounded-md bg-[#F5EFEB] px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-xs hover:bg-[#2F4156] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                <SearchIcon className="w-6 h-6"/>
              </button>
            </form>
            <svg
              viewBox="0 0 1024 1024"
              aria-hidden="true"
              className="absolute top-1/2 left-1/2 -z-10 size-[64rem] -translate-x-1/2"
            >
              <circle r={512} cx={512} cy={512} fill="url(#759c1415-0410-454c-8f7c-9a820de03641)" fillOpacity="0.7" />
              <defs>
                <radialGradient
                  r={1}
                  cx={0}
                  cy={0}
                  id="759c1415-0410-454c-8f7c-9a820de03641"
                  gradientUnits="userSpaceOnUse"
                  gradientTransform="translate(512 512) rotate(90) scale(512)"
                >
                  <stop stopColor="#7775D6" />
                  <stop offset={1} stopColor="#E935C1" stopOpacity={0} />
                </radialGradient>
              </defs>
            </svg>
          </div>
        </div>
      </div>
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
        >
          <div
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
            className="relative left-[calc(50%+3rem)] aspect-1155/678 w-[36.125rem] -translate-x-1/2 bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
          />
        </div>
      </div>
    </div>
  )
}
