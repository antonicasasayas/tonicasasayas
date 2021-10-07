import "./App.css";
import YoutubeEmbed from "./embed";

function App() {
  return (
    <div className="App">
      <h2 className="logo">Toni Casasayas</h2>
      <div className="container">
        <div className="header">
          <h1 className="title">We help fashion businesses get more clients</h1>
          <p>Grow your online business and increase your sales</p>
          <button>Learn more</button>
        </div>

        <YoutubeEmbed embedId="rzlSsng7ZdE" />
      </div>
      <div className="slogan">
        <h2>
          Sleek design. <span className="italics">Better performance.</span>
          Easier usability.
          <span className="bold">More sells.</span>
        </h2>
        <button className="second">Learn more</button>
      </div>
      <div className="section-2">
        <h3>Here's what you'll get...</h3>
      </div>
    </div>
  );
}

export default App;
