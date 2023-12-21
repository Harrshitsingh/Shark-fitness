import Background from "./Components/Background";
import Card2 from "./Components/Card2";
import Navbar from "./Components/Navbar";
import Signup from "./Components/Signup";
import Carousel from "./Components/Carousel.js";

function App() {
  const slides = [
    "images/man.jpg",
    "images/lady.jpg",
    "images/runner.jpg",
    "images/yoga.jpg",
    "images/benchpress.webp",
  ];
  return (
    <div>
      <Navbar />
      <Background />

      <h1 className="text-center text-5xl font-semibold italic pb-10 mb-10">
        Our Branches accross India
      </h1>

      <section className="bg-[url(images/map.jpg)] bg-local bg-cover mb-10 pb-10">
        <div className="flex flex-col md:flex-row flex-wrap gap-10 justify-center items-center">
          <div className="flex gap-10">
            <Card2 img="images/Delhi.jpg" city="Delhi" />
            <Card2 img="images/mumbai.jpg" city="Mumbai" />
          </div>

          <div className="flex gap-10">
            <Card2 img="images/Amritsar.jpg" city="Amritsar" />
            <Card2 img="images/bangalore2.jpg" city="Bangalore" />
          </div>

          <div className="flex gap-10">
            <Card2 img="images/kolkata.jpg" city="Kolkata" />
            <Card2 img="images/Tajmahal.jpg" city="Agra" />
          </div>
        </div>
      </section>

      <h1 className="text-center italic text-4xl pb-10 font-semibold">
        Our Gallery
      </h1>

      <main className="App mb-20 flex justify-center  mb-32 ">
        <div className="w-[700px] h-[400px]">
          <Carousel autoSlide={true}>
            {slides.map((s) => (
              <img
                src={s}
                className="w-[800px] md:w-[1000px] md:h-[500px] h-[400px]"
                alt=""
              />
            ))}
          </Carousel>
        </div>
      </main>

      <Signup />
    </div>
  );
}

export default App;
