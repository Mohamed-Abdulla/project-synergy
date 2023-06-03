import { Footer, GetInTouch, Navbar, Sec1, Sec2, Sec3, Sec4 } from "./components";
import { useState } from "react";
import Loader from "./components/Loader";
function App() {
  const [isLoading, setIsLoading] = useState(true);

  const handleImageLoad = () => {
    setIsLoading(false);
  };

  return (
    <>
      {isLoading && <Loader />}

      <Navbar />
      <main onLoad={handleImageLoad}>
        <Sec1 />
        <Sec2 />
        <Sec3 />
        <Sec4 />
        <GetInTouch />
      </main>
      <Footer />
    </>
  );
}

export default App;
