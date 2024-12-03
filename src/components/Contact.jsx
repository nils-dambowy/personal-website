import Header from "./Header";
import Footer from "./Footer";
import Arrow from "../assets/arrow.png";

export default function Contact() {
    return (
        <>
            <Header />
            <div className="flex flex-col items-center justify-center h-screen w-screen px-10">
                <div id="contact-card" className="w-44 h-20 flex items-center justify-center mt-12 bg-gray-200 text-3xl">
                    Contact
                </div>
                <div className="flex flex-row items-center mt-8">
                    <img src={Arrow} className="w-48 h-48 rotated" />
                    <div id="contact-card" className="w-44 h-20 flex items-center justify-center bg-gray-200 text-3xl">
                        me!
                    </div>
                </div>

                <div className="lg:w-3/6 bg-white w-full justify-center flex flex-col items-center pb-5 border-black border-4 work-grid-bg mt-12">
                    <div id="contact-card" className="w-5/6 h-20 flex items-center justify-center mt-4 text-3xl bg-gray-200">
                        Github
                    </div>
                    <div id="contact-card" className="w-5/6 h-20 flex items-center justify-center mt-8 text-3xl bg-gray-200">
                        LinkedIn
                    </div>
                    <div id="contact-card" className="w-5/6 h-20 flex items-center justify-center mt-8 text-3xl bg-gray-200">
                        E-Mail
                    </div>
                    <div id="contact-card" className="w-5/6 h-20 flex items-center justify-center mt-8 text-3xl bg-gray-200">
                        CV
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}
