import "./App.css";
import Card from "./components/card";
import YoutubeEmbed from "./embed";
import image1 from "./images/image1.jpg";
import image2 from "./images/image2.jpg";
import image3 from "./images/image3.jpg";

const cardsData = [
  {
    img: image1,
    title: "Web Design",
    desc: "We build a stylish website for you",
  },
  {
    img: image2,
    title: "Maintenance",
    desc: "We keep your website up to date",
  },
  {
    img: image3,
    title: "SEO optimization",
    desc: "We get your website to the top of Google search results.",
  },
];

function App() {
  return (
    <div className="App">
      <h2 className="text-center font-bold ml-4 lg:text-4xl text-2xl">TC</h2>
      <div className="bg-gray-700 h-screen px-5 flex lg:items-center justify-between mb-10 sm:flex-col">
        <div className="flex flex-col text-center items-center h-5/6 justify-between ">
          <h1 className="text-2xl lg:mt-20 lg:text-4xl mt-10 ">
            We design e-commerce websites for fashion businesses.
          </h1>
          <p className="lg:text-lg lg:mt-4">
            Grow your online business and increase your sales
          </p>
          <YoutubeEmbed embedId="rzlSsng7ZdE" />
          <button className="text-base mt-8">Learn more</button>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row items-center justify-center">
        <span>Sleek design. </span>
        <span className="bold">Easier usability.</span>
        <span className="italics">Better performance.</span>
        <span className="bold">More sells.</span>
        <button className="second lg:hidden text-base">Learn more</button>
      </div>
      <div className="hidden lg:flex justify-center">
        <button className="second  text-base">Learn more</button>
      </div>

      <div className="section-2">
        <h3 className="text-2xl lg:text-4xl ">Here's what you'll get...</h3>
        <p className="text-lg lg:text-xl">from our best-in-class web service</p>
      </div>
      <div className="flex lg:mx-20 items-center lg:flex-row flex-col justify-between">
        {cardsData.map((cardData) => (
          <Card
            img={cardData.img}
            desc={cardData.desc}
            title={cardData.title}
          />
        ))}
      </div>
      <div className="bg-gray-700 h-auto py-10 my-10 text-white flex justify-between items-center text-sm flex-col">
        <div className="flex flex-col items-center">
          <span className="text-2xl font-bold lg:text-4xl lg:mb-4 ">
            Working with us
          </span>
          <span className=" text-base font-bold  mt-8 lg:mt-4 lg:text-xl ">
            ONBOARDING
          </span>
          <span className="lg:text-base">
            Initial call to get assets, access and establish goals.
          </span>
        </div>
        <div className="flex flex-col text-center my-10 lg:my-4 items-center">
          <span className="text-base font-bold mt-4 lg:text-xl">FLOW</span>
          <span className="lg:text-base">
            A fool-proof system for seamless workflow and consistent
            communication, so that we all stay on the same page.
          </span>
        </div>
        <div className="flex flex-col text-center lg:my-4 items-center">
          <span className="text-base font-bold mt-4 lg:text-xl">REPORTING</span>
          <span className="lg:text-base">
            You get a detailed report every week so you can see the results.
          </span>
        </div>
      </div>

      <div className="flex flex-col  text-center mt-20">
        <span className="bold lg:text-4xl text-2xl">Guaranteed Results</span>
        <span className="lg:text-base">If you don't get amazing results we give your money back.</span>
      </div>
      <div className="flex flex-col h-96 lg:h-screen items-center mt-20">
        <span className="text-2xl lg:text-4xl bold">Let's get started today!</span>
        <span>Choose a suitable time and let's talk!</span>

        <div
          className="calendly-inline-widget w-64 h-64 mb-4 lg:w-3/6 lg:h-5/6 mt-4  rounded"
          data-url="https://calendly.com/antoni-casasayas"
        ></div>
      </div>
    </div>
  );
}

export default App;
