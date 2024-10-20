import Header from "./Header"
import Footer from "./Footer"
import Placeholder from  "../assets/GRAPH.png"

export default function Projects() {
    return (
        <>
            <Header/>
            <div className="flex h-screen w-full items-right flow-root">
                {/* project sections*/}
                <div className="w-4/5 float-left">
                    <div className="flex flex-row justify-evenly pt-8">

                        <a href="projects/1" className="project-grid-item bg-white border-black border-2 w-1/4 h-64">
                            <div>
                                <div className="flex flex-row h-3/4 text-center">
                                    <img src={Placeholder} alt="Placeholder" width="450"/>
                                </div>
                                <div className="flex flex-row border-black border-t-2 h-1/4 justify-center">
                                    Project 1
                                </div>
                            </div>
                        </a>
                        <a href="projects/2" className="project-grid-item bg-white border-black border-2 w-1/4 h-64">
                            <div>
                                <div className="flex flex-row h-3/4 text-center">
                                    <img src={Placeholder} alt="Placeholder" width="450"/>
                                </div>
                                <div className="flex flex-row border-black border-t-2 h-1/4 justify-center">
                                    Project 2
                                </div>
                            </div>
                        </a>
                    </div>

                    <div className="flex flex-row justify-evenly pt-8">
                        <a href="projects/3" className="project-grid-item bg-white border-black border-2 w-1/4 h-64">
                            <div>
                                <div className="flex flex-row h-3/4 text-center">
                                    <img src={Placeholder} alt="Placeholder" width="450"/>
                                </div>
                                <div className="flex flex-row border-black border-t-2 h-1/4 justify-center">
                                    Project 3
                                </div>
                            </div>
                        </a>
                        <a href="projects/4" className="project-grid-item bg-white border-black border-2 w-1/4 h-64">
                            <div>
                                <div className="flex flex-row h-3/4 text-center">
                                    <img src={Placeholder} alt="Placeholder" width="450"/>
                                </div>
                                <div className="flex flex-row border-black border-t-2 h-1/4 justify-center">
                                    Project 4
                                </div>
                            </div>
                        </a>
                    </div>

                    <div className="flex flex-row justify-evenly pt-8">
                        <a href="projects/5" className="project-grid-item bg-white border-black border-2 w-1/4 h-64">
                            <div>
                                <div className="flex flex-row h-3/4 text-center">
                                    <img src={Placeholder} alt="Placeholder" width="450"/>
                                </div>
                                <div className="flex flex-row border-black border-t-2 h-1/4 justify-center">
                                    Project 5
                                </div>
                            </div>
                        </a>
                        <a href="projects/6" className="project-grid-item bg-white border-black border-2 w-1/4 h-64">
                            <div>
                                <div className="flex flex-row h-3/4 text-center">
                                    <img src={Placeholder} alt="Placeholder" width="450"/>
                                </div>
                                <div className="flex flex-row border-black border-t-2 h-1/4 justify-center">
                                    Project 6
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
                {/* Grid background*/}
                <div className="work-grid-bg flex-col w-1/5 h-full float-right"></div>
            </div>
            <Footer/>
        </>
    );
}