import Header from "./components/Header";
import Profile from "./components/Profile";
import Footer from "./components/Footer";
import './index.css';

function App() {
    return (
        <div className="h-screen flex flex-col">
            <Header />
            <Profile className="flex-grow" />
            <Footer />
        </div>
    );
}

export default App;
