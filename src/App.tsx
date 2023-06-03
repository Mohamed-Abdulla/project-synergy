import { Footer, GetInTouch, Navbar, Sec1, Sec2, Sec3, Sec4 } from "./components";
function App() {
  return (
    <>
      <Navbar />
      <main>
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
