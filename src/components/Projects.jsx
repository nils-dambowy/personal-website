import Header from "./Header"
import Footer from "./Footer"

export default function Projects() {
    return (
        <>
            <Header/>
            <div className="flex h-screen w-full items-right flow-root">
                {/* project sections*/}
                <div className="w-4/5 float-left">
                    <div className="flex flex-row justify-evenly pt-8">
                        <div className="project-grid-item bg-white border-black border-2 w-1/4 h-64">
                            Proj1
                        </div>
                        <div className="project-grid-item bg-white border-black border-2 w-1/4 h-64">
                            Proj2
                        </div>
                    </div>

                    <div className="flex flex-row justify-evenly pt-8">
                        <div className="project-grid-item bg-white border-black border-2 w-1/4 h-64 ">
                            <div className="flex flex-row">
                                image
                            </div>
                            <div className="flex flex-row border-black border-t-2">
                                Name
                            </div>
                        </div>
                        <div className="project-grid-item bg-white border-black border-2 w-1/4 h-64">
                            Proj4
                        </div>
                    </div>

                    <div className="flex flex-row justify-evenly pt-8">
                        <div className="project-grid-item bg-white border-black border-2 w-1/4 h-64">
                            Proj5
                        </div>
                        <div className="project-grid-item bg-white border-black border-2 w-1/4 h-64">
                            Proj6
                        </div>
                    </div>
                </div>
                {/* Grid background*/}
                <div className="work-grid-bg flex-col w-1/5 h-full float-right"></div>
            </div>
            <Footer/>
        </>
    );
}