import { Link } from "react-router-dom";
import SpinTheWheel from "./SpinTheWheel";

function Rekomandimet() {
  return (
    <main>
      <section
        className="hero-section"
        style={{
          background: "#323A44",
          minHeight: "250px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
          textAlign: "center",
        }}
      >
        <div className="container">
          <h1
            className="mb-4"
            style={{ fontFamily: "system-ui", fontSize: "32px" }}
          >
            Rekomandimet tona
          </h1>
          <p className="mb-4">
            Provoni Wheel dhe vendosni destinacionin tuaj të rradhës.
            Eksplorojeni mrekullitë e Kosovës me Rrotën e Destinacioneve tonë!
            Pavarësisht nëse kërkoni zhytje në kulturë, bukuri peizazhi, apo
            aventura emocionuese, Kosova ofron një gamë të gjerë të përvojave që
            i shërbejnë çdo shije udhëtarit.
          </p>
          <a href="#rec">
            <button
              className="btn btn-secondary"
              style={{ borderRadius: "30px" }}
            >
              Klikoni për rekomandime!
            </button>
          </a>
        </div>
      </section>

      <div className="container">
        <section
          className="row"
          style={{
            background: '#323A44',
            padding: "40px", // Add some padding for spacing
            color: "white", 
          }}
        >
          <div
            className="col-md-6 d-flex flex-column align-items-start p-4"
            style={{
              backgroundImage:
                "url('https://www.wiredforadventure.com/wp-content/uploads/2018/03/the-accursed-mountains.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              borderRadius: "10px",
              color: "white",
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
              height: "300px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <div className="text-start">
              <h2 style={{ fontFamily: "system-ui" }}>
                Eksploro destinacionet e Kosovës
              </h2>
              <p style={{ fontFamily: "system-ui" }}>
                Heshtja e natyrës, brënda vetë qytetit apo në majën e maleve -
                çdo hap mund të jetë një aventurë e re. Zgjidhni destinacionin
                tuaj të ardhshëm me anë të Rrotës së Destinacioneve dhe gjeni
                magjinë e Kosovës.
              </p>
            </div>
          </div>

          <div
            className="col-md-6 d-flex justify-content-center p-4"
            style={{
              background: "linear-gradient(135deg,rgba(160, 145, 150, 0.4),rgba(193, 187, 193, 0))",
              borderRadius: "10px",
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
              height: "300px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <SpinTheWheel />
          </div>
        </section>

        <div id="rec" className="row mt-5 bg-light">
          <h2
            className="text-center mb-4"
            style={{ fontFamily: "system-ui", color: "#333" }}
          >
            Rekomandimet për qytetin e zgjedhur
          </h2>
          {cityCards.map((city, index) => (
            <div key={index} className="col-md-4 mb-4">
              <div className="card h-100">
                <img
                  src={city.image}
                  className="card-img-top"
                  alt={city.name}
                />
                <div className="card-body mb-5">
                  <h5 className="card-title">{city.name}</h5>
                  <Link to={city.link} className="btn btn-secondary">
                    Shiko Rekomandimet
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}

const cityCards = [
  {
    name: "Prizren",
    image: "https://live.staticflickr.com/4289/35269996692_25c4020119_b.jpg",
    link: "/recommendationPrizren",
  },
  {
    name: "Ferizaj",
    image:
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/23/71/b4/66/the-village-shopping.jpg?w=1200&h=1200&s=1",
    link: "/recommendationFerizaj",
  },
  {
    name: "Prishtina",
    image:
      "https://www.rit.edu/academicaffairs/global/sites/rit.edu.academicaffairs.global/files/Pristina%20night.jpg",
    link: "/recommendationPrishtina",
  },
  {
    name: "Gjilan",
    image: "https://photos.wikimapia.org/p/00/01/10/54/49_big.jpg",
    link: "/recommendationGjilan",
  },
  {
    name: "Peje",
    image:
      "https://www.shutterstock.com/image-photo/aerial-view-city-mountain-valley-260nw-2405410763.jpg",
    link: "/recommendationPeje",
  },
  {
    name: "Gjakove",
    image:
      "https://kk.rks-gov.net/gjakove/wp-content/uploads/sites/2/2016/08/Gjakova-5.jpg",
    link: "/recommendationGjakove",
  },
  {
    name: "Mitrovice",
    image:
      "https://i.pinimg.com/564x/ff/0b/ce/ff0bce808e7a37897275a3cbf3a71321.jpg",
    link: "/recommendationMitrovice",
  },
];

export default <Rekomandimet />;
