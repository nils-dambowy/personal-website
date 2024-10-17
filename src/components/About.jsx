import Header from "./Header";
import Footer from "./Footer";

export default function About() {
    return (
        <>
            <Header />
            <div className="flex items-center bg-white h-60 mt-1 border-black border-b-2">
                <div className="flex-grow flex items-center justify-center">
                    <div className="text-7xl ml-20 text-left">
                        <p className="bg-blue-700 text-white">nils dambowy</p>
                        <p className="text-5xl">(he/him)</p>
                    </div>
                </div>
                <div className="flex-grow flex items-center justify-center">
                    <div className="text-7xl">
                        <p className="bg-yellow-400 text-white">computer science student</p>
                        <p className="text-5xl">tu darmstadt</p>
                    </div>
                </div>
            </div>
            <div className="personal w-full h-96 flex items-center space-x-4 pl-64 pr-64">
              <div className="flex-grow flex flex-col items-end justify-center bg-white"> 
                  <div className="border-black border-2 w-full font-bold flex items-center pl-4">
                      Professional
                      <div className="w-5 h-5 bg-red-400 about-icons"></div>
                      <div className="w-5 h-5 bg-yellow-400 about-icons"></div>
                      <div className="w-5 h-5 bg-green-400 about-icons"></div>
                  </div>
                  <div className="text-sm text-center border-black border-r-2 border-l-2 border-b-2 pl-4">
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem ipsam nulla fugit facere ut vitae minima maxime ea excepturi, cupiditate obcaecati quod sed magnam amet adipisci rerum, dolorum sint inventore.
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem ipsam nulla fugit facere ut vitae minima maxime ea excepturi, cupiditate obcaecati quod sed magnam amet adipisci rerum, dolorum sint inventore.
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem ipsam nulla fugit facere ut vitae minima maxime ea excepturi, cupiditate obcaecati quod sed magnam amet adipisci rerum, dolorum sint inventore.
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem ipsam nulla fugit facere ut vitae minima maxime ea excepturi, cupiditate obcaecati quod sed magnam amet adipisci rerum, dolorum sint inventore.
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem ipsam nulla fugit facere ut vitae minima maxime ea excepturi, cupiditate obcaecati quod sed magnam amet adipisci rerum, dolorum sint inventore.
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem ipsam nulla fugit facere ut vitae minima maxime ea excepturi, cupiditate obcaecati quod sed magnam amet adipisci rerum, dolorum sint inventore.
                  </div>
              </div>
              <div className="flex-grow flex flex-col items-end justify-center bg-white"> 
                  <div className="border-black border-2 w-full font-bold flex items-center pl-4">
                      Personal
                      <div className="w-5 h-5 bg-red-400 about-icons"></div>
                      <div className="w-5 h-5 bg-yellow-400 about-icons"></div>
                      <div className="w-5 h-5 bg-green-400 about-icons"></div>
                  </div>
                  <div className="text-sm text-center border-black border-r-2 border-l-2 border-b-2 pl-4">
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem ipsam nulla fugit facere ut vitae minima maxime ea excepturi, cupiditate obcaecati quod sed magnam amet adipisci rerum, dolorum sint inventore.
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem ipsam nulla fugit facere ut vitae minima maxime ea excepturi, cupiditate obcaecati quod sed magnam amet adipisci rerum, dolorum sint inventore.
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem ipsam nulla fugit facere ut vitae minima maxime ea excepturi, cupiditate obcaecati quod sed magnam amet adipisci rerum, dolorum sint inventore.
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem ipsam nulla fugit facere ut vitae minima maxime ea excepturi, cupiditate obcaecati quod sed magnam amet adipisci rerum, dolorum sint inventore.
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem ipsam nulla fugit facere ut vitae minima maxime ea excepturi, cupiditate obcaecati quod sed magnam amet adipisci rerum, dolorum sint inventore.
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem ipsam nulla fugit facere ut vitae minima maxime ea excepturi, cupiditate obcaecati quod sed magnam amet adipisci rerum, dolorum sint inventore.
                  </div>
              </div>
          </div>


            <Footer />
        </>
    );
}
