import React from "react"
import {
  Bell,
  LayoutGrid,
  Maximize,
  Moon,
  Search,
  ShoppingBag,
} from "lucide-react"

const Topbar = () => {
  return (
    <>
      <section className="bg-gray-700">
        <div className="mx-auto w-full px-3 lg:w-11/12">
          <div className="flex items-center justify-between gap-6">
            {/* left */}
            <div className="flex items-center gap-12 py-5">
              {/* logo */}
              <div>
                <img
                  src="https://themesbrand.com/velzon/html/saas/assets/images/logo-light.png"
                  alt="..."
                  className="w-24"
                />
              </div>
              {/* search */}
              <div className="flex items-center  gap-3 rounded bg-gray-600 px-4 py-2.5">
                <Search size={16} color={"#9ca3af"} />
                <input
                  type="text"
                  placeholder="Search..."
                  className="bg-gray-600 text-sm caret-purple-50 focus:outline-none"
                />
              </div>
            </div>
            {/* right */}
            <div className="flex items-center gap-1">
              <div className="flex cursor-pointer items-center justify-center rounded-full bg-none duration-300 ease-out hover:bg-white/10">
                <img
                  src="https://themesbrand.com/velzon/html/saas/assets/images/flags/us.svg"
                  alt=".."
                  className="m-2.5 w-5 rounded"
                />
              </div>
              <div className="group cursor-pointer rounded-full bg-none duration-300 ease-out hover:bg-white/10">
                <LayoutGrid
                  className="m-2.5 text-white/30 duration-300 ease-out group-hover:text-white/80"
                  size={22}
                />
              </div>
              <div className="group relative cursor-pointer rounded-full bg-none duration-300 ease-out hover:bg-white/10">
                <ShoppingBag
                  className="m-2.5 text-white/30 duration-300 ease-out group-hover:text-white/80"
                  size={22}
                />
                <small className="absolute -top-1 right-1 w-fit rounded-full bg-sky-400 px-1.5 py-0.5 text-xs text-white">
                  5
                </small>
              </div>
              <div className="group cursor-pointer rounded-full bg-none duration-300 ease-out hover:bg-white/10">
                <Maximize
                  className="m-2.5 text-white/30 duration-300 ease-out group-hover:text-white/80"
                  size={22}
                />
              </div>
              <div className="group cursor-pointer rounded-full bg-none duration-300 ease-out hover:bg-white/10">
                <Moon
                  className="m-2.5 text-white/30 duration-300 ease-out group-hover:text-white/80"
                  size={22}
                />
              </div>
              <div className="group relative cursor-pointer rounded-full bg-none duration-300 ease-out hover:bg-white/10">
                <Bell
                  className="m-2.5 text-white/30 duration-300 ease-out group-hover:text-white/80"
                  size={22}
                />
                <small className="absolute -top-1 right-1 w-fit rounded-full bg-red-500 px-1.5 py-0.5 text-xs text-white">
                  3
                </small>
              </div>
              <div className="ml-4 flex cursor-pointer items-center gap-3 bg-gray-600 p-5">
                <img
                  src="https://themesbrand.com/velzon/html/saas/assets/images/users/avatar-1.jpg"
                  alt=".."
                  className="w-10 rounded-full"
                />
                <div className="flex flex-col gap-0">
                  <p className="text-sm leading-tight text-white">Anna Adame</p>
                  <p className=" text-xs text-white/50">Founder</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Topbar
