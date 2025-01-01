import Header from "./Header"
import Footer from "./Footer"
import Placeholder from "../assets/GRAPH.png"

export default function Projects() {
  return (
    <>
      <Header />
      <div className="flex h-full lg:h-screen  sm:h-full w-full items-right lg:flow-root justify-evenly">
        {/* project sections*/}
        <div className=" w-full lg:w-4/5 sm:w-full float-left">
          <div className="items-center flex lg:flex-row lg:flex-wrap flex-col justify-evenly pt-8 gap-8 px-4">

            <a href="projects/1" className="tooltip project-grid-item bg-white border-black border-2 w-full sm:w-1/2 lg:w-1/4 h-64">
              <div>
                <div className="flex flex-row h-3/4 text-center">
                  <img src={Placeholder} alt="Placeholder" width="450" />
                </div>
                <div className="flex flex-row border-black border-t-2 h-1/4 justify-center">
                  openbouldermap
                </div>
              </div>
              <span class="tooltip-obm"> A full-stack web application that lets you add boulders on a map!</span>
            </a>

            <a href="projects/2" className="tooltip project-grid-item bg-white border-black border-2 w-full sm:w-1/2 lg:w-1/4 h-64">
              <div>
                <div className="flex flex-row h-3/4 text-center">
                  <img src={Placeholder} alt="Placeholder" width="450" />
                </div>
                <div className="flex flex-row border-black border-t-2 h-1/4 justify-center">
                  URL shortener
                </div>
              </div>
              <span className="tooltip-url">Definetly not an URL shortener!</span>
            </a>

          </div>
        </div>

        {/* Grid background*/}
        <div className="work-grid-bg flex-col  w-0 lg:w-1/5 h-full float-right"></div>
      </div>
      <Footer />
    </>
  );
}
