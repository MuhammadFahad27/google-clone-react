import React from 'react'

const Footer = () => {
  return (
     <footer className="bg-zinc-100 w-full py-3 px-4 text-sm text-gray-800">
        <div className="max-w-screen-xl mx-auto">
          <div className="mb-3">
            <p>Pakistan </p>
          </div>
          <div className="flex flex-col md:flex-row md:justify-between border-t border-gray-300 pt-3">
            <div className="flex flex-wrap justify-center md:justify-start space-x-6 mb-3 md:mb-0">
              <a href="#" className="hover:underline">About</a>
              <a href="#" className="hover:underline">Advertising</a>
              <a href="#" className="hover:underline">Business</a>
              <a href="#" className="hover:underline">How Search works</a>
            </div>
            <div className="flex flex-wrap justify-center md:justify-start space-x-6">
              <a href="#" className="hover:underline">Privacy</a>
              <a href="#" className="hover:underline">Terms</a>
              <a href="#" className="hover:underline">Settings</a>
            </div>
          </div>
        </div>
      </footer>
  )
}

export default Footer