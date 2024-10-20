export default function Header() {
  return (
      <header className="w-full h-20 bg-white flex items-center justify-between border-solid border-b-2 border-black sticky top-0 ">
          
          <div className="flex items-center justify-center border-r-2 border-black w-1/4 h-20 text-5xl border-l-2">
              <a href="/">nd</a>
          </div>
          
          <nav className="flex space-x-6 text-3xl w-3/4">
              <a href="/about" className="border-r-2 border-black w-1/3 h-20 flex items-center justify-center">
                <div className="flex items-center justify-center header-icons mr-2">
                  <svg stroke="currentColor" fill="none" strokeWidth="1.5" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M8 14s1.5 2 4 2 4-2 4-2"></path><line x1="9" x2="9.01" y1="9" y2="9"></line><line x1="15" x2="15.01" y1="9" y2="9"></line></svg>
                </div>
                About
              </a>

              <a href="/projects" className=" border-r-2 border-black w-1/3 h-20 flex items-center justify-center">
                <div className="flex items-center justify-center header-icons mr-2">
                  <svg stroke="currentColor" fill="none" strokeWidth="1.5" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m18 16 4-4-4-4"></path><path d="m6 8-4 4 4 4"></path><path d="m14.5 4-5 16"></path></svg>
                </div>
                Projects
              </a>

              <a href="/contact" className="border-r-2 border-black w-1/3 h-20 flex items-center justify-center">
                <div className="flex items-center justify-center header-icons mr-2">
                  <svg stroke="currentColor" fill="none" strokeWidth="1.5" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m3 21 1.9-5.7a8.5 8.5 0 1 1 3.8 3.8z"></path></svg>
                </div>
                Contact
              </a>
          </nav>
      </header>
  );
}
