import React from 'react'

const Footer = () => {
    return (
       <main className=" flex justify-center items-center ">
    <footer className="mt-8 mb-3  pt-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <p className="text-sm text-slate-500">Copyright © {new Date().getFullYear()} Kundi Deals. All rights reserved.</p>
          <div className="text-sm text-slate-500 flex justify-center">Made with care • Community first</div>
        </footer>
        </main>
  )
}

export default Footer