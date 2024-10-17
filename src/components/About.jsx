import Header from "./Header";
import Footer from "./Footer";

export default function About() {
    return (
        <>
            <Header />
            {/* header section */}
            <div className="about-header-section flex flex-col md:flex-row items-center bg-white h-auto md:h-60 mt-1 border-black border-b-2">
                <div className="flex-grow flex items-center justify-center md:justify-start md:pl-20">
                    <div className="text-center md:text-left">
                        <p className="bg-blue-700 text-white">nils dambowy</p>
                        <p className="">(he/him)</p>
                    </div>
                </div>
                <div className="flex-grow flex items-center justify-center md:justify-start md:pl-20">
                    <div className="text-center md:text-left">
                        <p className="bg-yellow-400 text-white">computer science student</p>
                        <p className="">tu darmstadt</p>
                    </div>
                </div>
            </div>
            {/* personal section */}
            <div className="personal w-full md:h-96 flex flex-col md:flex-row items-start md:items-center md:space-x-4 pl-8 pr-8">
                <div className="flex-wrap flex flex-col items-end justify-center bg-white md:w-1/2"> 
                    <div className="border-black border-2 w-full font-bold flex items-center pl-4">
                        Professional
                        <div className="w-5 h-5 bg-red-400 about-icons ml-2"></div>
                        <div className="w-5 h-5 bg-yellow-400 about-icons ml-2"></div>
                        <div className="w-5 h-5 bg-green-400 about-icons ml-2"></div>
                    </div>
                    <div className="block text-sm text-center border-black border-r-2 border-l-2 border-b-2 pl-4 leading-relaxed">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit...
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit...
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit...
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit...
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit...
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit...
                    </div>
                </div>
                <div className="flex-wrap flex flex-col items-end justify-center bg-white md:w-1/2"> 
                    <div className="border-black border-2 w-full font-bold flex items-center pl-4">
                        Personal
                        <div className="w-5 h-5 bg-red-400 about-icons ml-2"></div>
                        <div className="w-5 h-5 bg-yellow-400 about-icons ml-2"></div>
                        <div className="w-5 h-5 bg-green-400 about-icons ml-2"></div>
                    </div>
                    <div className="text-sm text-center border-black border-r-2 border-l-2 border-b-2 pl-4 leading-relaxed">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit...
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit...
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit...
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit...
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit...
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit...
                    </div>
                </div>
            </div>

            <div className="flex flex-col tech bg-white h-auto border-black border-t-2 items-center justify-center pt-9 pb-9">
                <div className="flex flex-row w-auto">
                    <div className="text-white flex bg-green-400 flex-col text-center border-black border-2">
                        <svg className="svg-icon" viewBox="0 0 350 175" fill="none" xmlns="http://www.w3.org/2000/svg"> <g clipPath="url(#clip0_72_7086)"> <g clipPath="url(#clip1_72_7086)"><path d="M350 23.4242H231.552L315.306 107.179L282.179 140.306L198.424 56.5516V175H151.576V56.5516L67.821 140.306L34.6936 107.179L118.446 23.4242H0V-23.427H118.446L34.6936 -107.179L67.821 -140.309L151.576 -56.5543V-175H198.424V-56.5543L282.179 -140.309L315.306 -107.179L231.552 -23.427H350V23.4242Z" fill="currentColor"></path></g></g><defs><clipPath id="clip0_72_7086"><rect width="350" height="175" fill="white" transform="matrix(1 0 0 -1 0 175)"></rect></clipPath><clipPath id="clip1_72_7086"><rect width="350" height="350" fill="white" transform="matrix(1 0 0 -1 0 175)"></rect></clipPath></defs></svg>
                        <p>Technical</p>
                        <svg className="svg-icon" viewBox="0 0 350 175" fill="none" xmlns="http://www.w3.org/2000/svg"><g clipPath="url(#clip0_72_7084)"><g clipPath="url(#clip1_72_7084)"><path d="M350 151.576H231.552L315.306 67.821L282.179 34.6936L198.424 118.448V0H151.576V118.448L67.821 34.6936L34.6936 67.821L118.446 151.576H0V198.427H118.446L34.6936 282.179L67.821 315.309L151.576 231.554V350H198.424V231.554L282.179 315.309L315.306 282.179L231.552 198.427H350V151.576Z" fill="currentColor"></path></g></g><defs><clipPath id="clip0_72_7084"><rect width="350" height="175" fill="white"></rect></clipPath><clipPath id="clip1_72_7084"><rect width="350" height="350" fill="white"></rect></clipPath></defs> </svg>
                    </div>
                    <div className="border-black border-r-2 border-t-2 border-b-2 w-96 bg-white text-center">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam molestias repellat dolorum voluptate. Nisi, iure. A perferendis deserunt aperiam, eos illo quisquam tempora iure id, architecto, eius placeat temporibus mollitia.
                    </div>
                </div>


                <div className="flex flex-row w-auto">
                    <div className="flex bg-blue-400 flex-col text-center border-black border-2 ">
                        <svg className="svg-icon" viewBox="0 0 350 175" fill="none" xmlns="http://www.w3.org/2000/svg"> <g clipPath="url(#clip0_72_7086)"> <g clipPath="url(#clip1_72_7086)"><path d="M350 23.4242H231.552L315.306 107.179L282.179 140.306L198.424 56.5516V175H151.576V56.5516L67.821 140.306L34.6936 107.179L118.446 23.4242H0V-23.427H118.446L34.6936 -107.179L67.821 -140.309L151.576 -56.5543V-175H198.424V-56.5543L282.179 -140.309L315.306 -107.179L231.552 -23.427H350V23.4242Z" fill="currentColor"></path></g></g><defs><clipPath id="clip0_72_7086"><rect width="350" height="175" fill="white" transform="matrix(1 0 0 -1 0 175)"></rect></clipPath><clipPath id="clip1_72_7086"><rect width="350" height="350" fill="white" transform="matrix(1 0 0 -1 0 175)"></rect></clipPath></defs></svg>
                        <p>Technical</p>
                        <svg className="svg-icon" viewBox="0 0 350 175" fill="none" xmlns="http://www.w3.org/2000/svg"><g clipPath="url(#clip0_72_7084)"><g clipPath="url(#clip1_72_7084)"><path d="M350 151.576H231.552L315.306 67.821L282.179 34.6936L198.424 118.448V0H151.576V118.448L67.821 34.6936L34.6936 67.821L118.446 151.576H0V198.427H118.446L34.6936 282.179L67.821 315.309L151.576 231.554V350H198.424V231.554L282.179 315.309L315.306 282.179L231.552 198.427H350V151.576Z" fill="currentColor"></path></g></g><defs><clipPath id="clip0_72_7084"><rect width="350" height="175" fill="white"></rect></clipPath><clipPath id="clip1_72_7084"><rect width="350" height="350" fill="white"></rect></clipPath></defs> </svg>
                    </div>
                    <div className="border-black border-r-2 border-t-2 border-b-2 w-96 bg-white text-center">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam molestias repellat dolorum voluptate. Nisi, iure. A perferendis deserunt aperiam, eos illo quisquam tempora iure id, architecto, eius placeat temporibus mollitia.
                    </div>
                </div>

                <div className="flex flex-row w-auto">
                    <div className="text-white flex bg-green-400 flex-col text-center border-black border-2">
                        <svg className="svg-icon" viewBox="0 0 350 175" fill="none" xmlns="http://www.w3.org/2000/svg"> <g clipPath="url(#clip0_72_7086)"> <g clipPath="url(#clip1_72_7086)"><path d="M350 23.4242H231.552L315.306 107.179L282.179 140.306L198.424 56.5516V175H151.576V56.5516L67.821 140.306L34.6936 107.179L118.446 23.4242H0V-23.427H118.446L34.6936 -107.179L67.821 -140.309L151.576 -56.5543V-175H198.424V-56.5543L282.179 -140.309L315.306 -107.179L231.552 -23.427H350V23.4242Z" fill="currentColor"></path></g></g><defs><clipPath id="clip0_72_7086"><rect width="350" height="175" fill="white" transform="matrix(1 0 0 -1 0 175)"></rect></clipPath><clipPath id="clip1_72_7086"><rect width="350" height="350" fill="white" transform="matrix(1 0 0 -1 0 175)"></rect></clipPath></defs></svg>
                        <p>Soft</p>
                        <svg className="svg-icon" viewBox="0 0 350 175" fill="none" xmlns="http://www.w3.org/2000/svg"><g clipPath="url(#clip0_72_7084)"><g clipPath="url(#clip1_72_7084)"><path d="M350 151.576H231.552L315.306 67.821L282.179 34.6936L198.424 118.448V0H151.576V118.448L67.821 34.6936L34.6936 67.821L118.446 151.576H0V198.427H118.446L34.6936 282.179L67.821 315.309L151.576 231.554V350H198.424V231.554L282.179 315.309L315.306 282.179L231.552 198.427H350V151.576Z" fill="currentColor"></path></g></g><defs><clipPath id="clip0_72_7084"><rect width="350" height="175" fill="white"></rect></clipPath><clipPath id="clip1_72_7084"><rect width="350" height="350" fill="white"></rect></clipPath></defs> </svg>
                    </div>
                    <div className="border-black border-r-2 border-t-2 border-b-2 w-96 bg-white text-center">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam molestias repellat dolorum voluptate. Nisi, iure. A perferendis deserunt aperiam, eos illo quisquam tempora iure id, architecto, eius placeat temporibus mollitia.
                    </div>
                </div>

            </div>

            <Footer />
        </>
    );
}
