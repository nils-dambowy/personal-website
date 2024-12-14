import Header from "./Header";
import Footer from "./Footer";

export default function About() {
    return (
        <>
            <Header/>
            {/* header section */}
            <div
                className="about-header-section flex flex-col sm:flex-row items-center bg-white h-auto sm:h-60 mt-1 border-black border-b-2 border-t-2">
                <div className="flex-grow flex items-center justify-center">
                    <div className="text-center lg:text-7xl sm:text-2xl">
                        <p className="bg-blue-700 text-white">nils dambowy</p>
                        <p className="">(he/him)</p>
                    </div>
                </div>
                <div className="flex-grow flex items-center justify-center">
                    <div className="text-center lg:text-7xl sm:text-2xl">
                        <p className="bg-yellow-400 text-white">computer science student</p>
                        <p className="">tu darmstadt</p>
                    </div>
                </div>
            </div>

            {/* personal section */}
            <div
                className="personal w-full lg:h-96 flex flex-col justify-center lg:flex-row items-center lg:space-x-4">
                <div
                    className="flex-wrap flex flex-col items-end justify-center bg-white lg:w-1/2 lg:max-w-xl mt-10 sm:mt-10 lg:mt-0 w-4/5">
                    <div className="border-black border-2 w-full font-bold flex items-center pl-4 h-10">
                        Professional
                        <div className="flex ml-auto space-x-2 mr-2">
                            <div className="w-5 h-5 bg-red-400 about-icons"></div>
                            <div className="w-5 h-5 bg-yellow-400 about-icons"></div>
                            <div className="w-5 h-5 bg-green-400 about-icons"></div>
                        </div>
                    </div>
                    <div
                        className="block text-sm text-center border-black border-r-2 border-l-2 border-b-2 pl-4 leading-relaxed ">
                        <p>I first dabbled in programming back in school, but it wasn’t until my computer science studies at
                        Goethe University in Frankfurt that I truly found my passion for development and artificial
                        intelligence. Now, I’m pursuing my master’s degree in computer science at TU Darmstadt.</p>

                        <p className="pt-2">I’m driven by a desire to build things that make life easier – not just
                        for me, but for the people who use them. The less we have to think about the mundane tasks of
                        daily life, the more time we have to work on bigger, cooler, and more meaningful projects.</p>

                        <p className="pt-2">Dream job: A role that bridges software development and AI, solving real-world problems in innovative ways.</p>
                    </div>
                </div>
                <div
                    className="flex-wrap flex flex-col items-end justify-center bg-white md:w-1/2 lg:max-w-xl mt-10 sm:mt-10 lg:mt-0 w-4/5 mb-10 lg:mb-0 sm:mb-10 ">
                    <div className="border-black border-2 w-full font-bold flex items-center pl-4 h-10">
                        Personal
                        <div className="flex ml-auto space-x-2 mr-2">
                            <div className="w-5 h-5 bg-red-400 about-icons"></div>
                            <div className="w-5 h-5 bg-yellow-400 about-icons"></div>
                            <div className="w-5 h-5 bg-green-400 about-icons"></div>
                        </div>
                    </div>
                    <div
                        className="text-sm text-center border-black border-r-2 border-l-2 border-b-2 pl-4 leading-relaxed">
                        <p className="pb-2"> Outside of work, I’m a passionate athlete. Whether it’s climbing, cycling, or running.<br/>
                            I love staying active, clearing my mind, and sharing these experiences with others. <br/>I believe that activities
                            like these are not just about fitness but about building connections—some of my best ideas and friendships have
                            come while out on a run or tackling a bouldering problem together.</p>
                        <p className="pb-2">
                            I grew up in Bruchköbel, completed my studies in Frankfurt, and later decided
                            to pursue my master&apos;s at TU Darmstadt. When I’m not programming, you’ll likely find me
                            planning my next trip, making music, or enjoying the outdoors. I also have a habit of getting
                            lost in documentaries and learning about niche topics
                        </p>
                    </div>
                </div>
            </div>


            <div className="flex flex-col tech bg-white h-auto border-black border-t-2 items-center justify-center">
                <div className="flex flex-row w-full justify-center">
                    <div className="flex bg-blue-400 flex-col text-center border-black border-2  w-1/5">
                        <svg className="svg-icon" viewBox="0 0 350 175" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clipPath="url(#clip0_72_7086)">
                                <g clipPath="url(#clip1_72_7086)">
                                    <path
                                        d="M350 23.4242H231.552L315.306 107.179L282.179 140.306L198.424 56.5516V175H151.576V56.5516L67.821 140.306L34.6936 107.179L118.446 23.4242H0V-23.427H118.446L34.6936 -107.179L67.821 -140.309L151.576 -56.5543V-175H198.424V-56.5543L282.179 -140.309L315.306 -107.179L231.552 -23.427H350V23.4242Z"
                                        fill="currentColor"></path>
                                </g>
                            </g>
                            <defs>
                                <clipPath id="clip0_72_7086">
                                    <rect width="350" height="175" fill="white"
                                          transform="matrix(1 0 0 -1 0 175)"></rect>
                                </clipPath>
                                <clipPath id="clip1_72_7086">
                                    <rect width="350" height="350" fill="white"
                                          transform="matrix(1 0 0 -1 0 175)"></rect>
                                </clipPath>
                            </defs>
                        </svg>
                        <p className="lg:text-7xl text-sm">Technical</p>
                        <svg className="svg-icon" viewBox="0 0 350 175" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clipPath="url(#clip0_72_7084)">
                                <g clipPath="url(#clip1_72_7084)">
                                    <path
                                        d="M350 151.576H231.552L315.306 67.821L282.179 34.6936L198.424 118.448V0H151.576V118.448L67.821 34.6936L34.6936 67.821L118.446 151.576H0V198.427H118.446L34.6936 282.179L67.821 315.309L151.576 231.554V350H198.424V231.554L282.179 315.309L315.306 282.179L231.552 198.427H350V151.576Z"
                                        fill="currentColor"></path>
                                </g>
                            </g>
                            <defs>
                                <clipPath id="clip0_72_7084">
                                    <rect width="350" height="175" fill="white"></rect>
                                </clipPath>
                                <clipPath id="clip1_72_7084">
                                    <rect width="350" height="350" fill="white"></rect>
                                </clipPath>
                            </defs>
                        </svg>
                    </div>
                    <div className="flex border-black border-r-2 border-t-2 border-b-2 w-3/6 bg-white justify-center items-center text-center">
                        <div className="flex-col flex h-full lg:pr-64 pr-2">
                            <div className="flex-grow flex items-center">
                                <div className="text-center pr-2">
                                    <div
                                        className=" w-2 h-2 lg:w-5 lg:h-5 sm:h-2 sm:w-2 bg-yellow-400 about-icons "></div>
                                </div>
                                Text1
                            </div>
                            <div className="flex-grow flex items-center justify-center">
                                <div className="text-cente pr-2">
                                    <div
                                        className="w-2 h-2 lg:w-5 lg:h-5 sm:h-2 sm:w-2 bg-yellow-400 about-icons "></div>
                                </div>
                                Text2
                            </div>
                            <div className="flex-grow flex items-center justify-center">
                                <div className="text-center pr-2">
                                    <div
                                        className="w-2 h-2 lg:w-5 lg:h-5 sm:h-2 sm:w-2 bg-yellow-400 about-icons "></div>
                                </div>
                                Text3
                            </div>
                            <div className="flex-grow flex items-center justify-center">
                                <div className="text-center pr-2">
                                    <div
                                        className="w-2 h-2 lg:w-5 lg:h-5 sm:h-2 sm:w-2 bg-yellow-400 about-icons "></div>
                                </div>
                                Text4
                            </div>
                        </div>
                        <div className="flex h-full flex-col">
                            <div className="flex-grow flex items-center">
                                <div className="text-center pr-2">
                                    <div
                                        className=" w-2 h-2 lg:w-5 lg:h-5 sm:h-2 sm:w-2 bg-yellow-400 about-icons "></div>
                                </div>
                                Text1
                            </div>
                            <div className="flex-grow flex items-center justify-center">
                                <div className="text-cente pr-2">
                                    <div
                                        className="w-2 h-2 lg:w-5 lg:h-5 sm:h-2 sm:w-2 bg-yellow-400 about-icons "></div>
                                </div>
                                Text2
                            </div>
                            <div className="flex-grow flex items-center justify-center">
                                <div className="text-center pr-2">
                                    <div
                                        className="w-2 h-2 lg:w-5 lg:h-5 sm:h-2 sm:w-2 bg-yellow-400 about-icons "></div>
                                </div>
                                Text3
                            </div>
                            <div className="flex-grow flex items-center justify-center">
                                <div className="text-center pr-2">
                                <div
                                        className="w-2 h-2 lg:w-5 lg:h-5 sm:h-2 sm:w-2 bg-yellow-400 about-icons "></div>
                                </div>
                                Text4
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex flex-row w-full justify-center">
                    <div className="text-white flex bg-green-400 flex-col text-center border-black border-2 w-1/5">
                        <svg className="svg-icon" viewBox="0 0 350 175" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clipPath="url(#clip0_72_7086)">
                                <g clipPath="url(#clip1_72_7086)">
                                    <path
                                        d="M350 23.4242H231.552L315.306 107.179L282.179 140.306L198.424 56.5516V175H151.576V56.5516L67.821 140.306L34.6936 107.179L118.446 23.4242H0V-23.427H118.446L34.6936 -107.179L67.821 -140.309L151.576 -56.5543V-175H198.424V-56.5543L282.179 -140.309L315.306 -107.179L231.552 -23.427H350V23.4242Z"
                                        fill="currentColor"></path>
                                </g>
                            </g>
                            <defs>
                                <clipPath id="clip0_72_7086">
                                    <rect width="350" height="175" fill="white"
                                          transform="matrix(1 0 0 -1 0 175)"></rect>
                                </clipPath>
                                <clipPath id="clip1_72_7086">
                                    <rect width="350" height="350" fill="white"
                                          transform="matrix(1 0 0 -1 0 175)"></rect>
                                </clipPath>
                            </defs>
                        </svg>
                        <p className="lg:text-7xl text-sm">Soft</p>
                        <svg className="svg-icon" viewBox="0 0 350 175" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clipPath="url(#clip0_72_7084)">
                                <g clipPath="url(#clip1_72_7084)">
                                    <path
                                        d="M350 151.576H231.552L315.306 67.821L282.179 34.6936L198.424 118.448V0H151.576V118.448L67.821 34.6936L34.6936 67.821L118.446 151.576H0V198.427H118.446L34.6936 282.179L67.821 315.309L151.576 231.554V350H198.424V231.554L282.179 315.309L315.306 282.179L231.552 198.427H350V151.576Z"
                                        fill="currentColor"></path>
                                </g>
                            </g>
                            <defs>
                                <clipPath id="clip0_72_7084">
                                    <rect width="350" height="175" fill="white"></rect>
                                </clipPath>
                                <clipPath id="clip1_72_7084">
                                    <rect width="350" height="350" fill="white"></rect>
                                </clipPath>
                            </defs>
                        </svg>
                    </div>
                    <div className=" flex border-black border-r-2 border-t-2 border-b-2 w-3/6 bg-white justify-center items-center text-center">
                        <div className="flex-col flex h-full lg:pr-64 pr-2" >
                            <div className="flex-grow flex items-center">
                                <div className="text-center pr-2">
                                    <div className=" w-2 h-2 lg:w-5 lg:h-5 sm:h-2 sm:w-2 bg-yellow-400 about-icons "></div>
                                </div>
                                Text1
                            </div>
                            <div className="flex-grow flex items-center justify-center">
                                <div className="text-cente pr-2">
                                    <div className="w-2 h-2 lg:w-5 lg:h-5 sm:h-2 sm:w-2 bg-yellow-400 about-icons "></div>
                                </div>
                                Text2
                            </div>
                            <div className="flex-grow flex items-center justify-center">
                                <div className="text-center pr-2">
                                    <div className="w-2 h-2 lg:w-5 lg:h-5 sm:h-2 sm:w-2 bg-yellow-400 about-icons "></div>
                                </div>
                                Text3
                            </div>
                            <div className="flex-grow flex items-center justify-center">
                                <div className="text-center pr-2">
                                    <div className="w-2 h-2 lg:w-5 lg:h-5 sm:h-2 sm:w-2 bg-yellow-400 about-icons "></div>
                                </div>
                                Text4
                            </div>
                        </div>
                        <div className="flex h-full flex-col">
                            <div className="flex-grow flex items-center">
                                <div className="text-center pr-2">
                                    <div
                                        className=" w-2 h-2 lg:w-5 lg:h-5 sm:h-2 sm:w-2 bg-yellow-400 about-icons "></div>
                                </div>
                                Text1
                            </div>
                            <div className="flex-grow flex items-center justify-center">
                                <div className="text-cente pr-2">
                                    <div
                                        className="w-2 h-2 lg:w-5 lg:h-5 sm:h-2 sm:w-2 bg-yellow-400 about-icons "></div>
                                </div>
                                Text2
                            </div>
                            <div className="flex-grow flex items-center justify-center">
                                <div className="text-center pr-2">
                                    <div
                                        className="w-2 h-2 lg:w-5 lg:h-5 sm:h-2 sm:w-2 bg-yellow-400 about-icons "></div>
                                </div>
                                Text3
                            </div>
                            <div className="flex-grow flex items-center justify-center">
                                <div className="text-center pr-2">
                                    <div
                                        className="w-2 h-2 lg:w-5 lg:h-5 sm:h-2 sm:w-2 bg-yellow-400 about-icons "></div>
                                </div>
                                Text4
                            </div>
                        </div>

                    </div>
                </div>

            </div>

            <Footer/>
        </>
    );
}
