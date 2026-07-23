import Header from "./components/Header";
import Profile from "./components/Profile";
import Footer from "./components/Footer";
import ParticleBackground from "./components/ParticleBackground";
import './index.css';

function App() {
  return (
    <div className="min-h-screen flex flex-col relative bg-[#ffc229] selection:bg-black selection:text-[#ffc229] overflow-x-hidden">
      <ParticleBackground />
      <Header />
      <Profile />
      <Footer />
    </div>
  );
}

export default App;
