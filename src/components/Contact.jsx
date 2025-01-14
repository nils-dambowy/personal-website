import Header from "./Header";
import Footer from "./Footer";

export default function Contact() {
  return (
    <>
      <Header />
      <div className="flex flex-col items-center justify-center h-screen w-screen px-10">
        <p className="lg:text-9xl text-5xl italic">Contact me!</p>
        <div className="lg:w-3/6 bg-white w-full justify-center flex flex-col items-center pb-5 border-black border-4 work-grid-bg mt-12">
          <a
            id="contact-card"
            href="https://github.com/nils-dambowy"
            target="_blank"
            rel="noopener noreferrer"
            className="w-5/6 h-20 flex items-center justify-center mt-4 text-3xl bg-gray-200"
          >
            Github
          </a>
          <a
            id="contact-card"
            href="https://www.linkedin.com/in/nils-dambowy-6a2584249/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-5/6 h-20 flex items-center justify-center mt-8 text-3xl bg-gray-200"
          >
            LinkedIn
          </a>
          <a
            id="contact-card"
            href="mailto:nils.dambowy@googlemail.com"
            className="w-5/6 h-20 flex items-center justify-center mt-8 text-3xl bg-gray-200"
          >
            E-Mail
          </a>
          <a
            id="contact-card"
            href="/CV.pdf"
            targer="_blank"
            className="w-5/6 h-20 flex items-center justify-center mt-8 text-3xl bg-gray-200"
          >
            CV
          </a>
        </div>
      </div>
      <Footer />
    </>
  );
}
