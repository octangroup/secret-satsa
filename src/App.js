import About from "./components/About";
import Header from "./components/Header";
import Tweets from "./components/Tweets";
import How from "./components/HowSection";
import StepsSection from "./components/StepsSection";
import Footer from "./components/Footer";

function App() {
  return (
    <main>
      <Header />
      <Tweets />
      <About />
      <StepsSection />
      <How />
      <Footer />
    </main>
  );
}

export default App;
