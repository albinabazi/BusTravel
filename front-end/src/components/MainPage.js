import React from "react";
import { HiOutlineTicket } from "react-icons/hi";
import { FaBus } from "react-icons/fa";
import { TiWeatherPartlySunny } from "react-icons/ti";
import { Link } from "react-router-dom";
import ChatApp from "../ChatApp";

const MainPage = () => {
  
  return (
    <div style={{ fontFamily: 'sans-serif', color: "#222" }}>
      <section
        style={{
          background: "linear-gradient(135deg, #EFEFEF, #D6E4F0)",
          padding: "100px 20px",
          textAlign: "center",
        }}
      >
        <h2 style={{ fontSize: "2.5rem", fontWeight: "bold", color: "#34495E" }}>
          Zbuloni Më të Mirën e Kosovës
        </h2>
        <p
          style={{ fontSize: "1.2rem", margin: "20px auto", maxWidth: "700px" }}
        >
          Eksploroni destinacionet kryesore, linjat e besueshme të autobusëve
          dhe përditësimet e motit në kohë reale për ta bërë udhëtimin tuaj të
          lehtë dhe të paharrueshëm.
        </p>
        <div>
          <Link
            to="/lines"
            className="btn btn-primary"
            style={{
              backgroundColor: "#2C3E50",
              padding: "15px 30px",
              borderRadius: "30px",
              color: "#fff",
              textDecoration: "none",
              fontWeight: "bold",
              marginRight: "10px",
            }}
          >
            Rezervo Biletat
          </Link>
          <Link
            to="/rekomandimet"
            className="btn"
            style={{
              padding: "15px 30px",
              borderRadius: "30px",
              border: "2px solid #2C3E50",
              color: "#2C3E50",
              textDecoration: "none",
              fontWeight: "bold",
              marginRight: "10px",
            }}
          >
            Shiko Rekomandimet
          </Link>
          <Link
            to="/allfeedbacks"
            className="btn btn-primary"
            style={{
              backgroundColor: "#2C3E50",
              padding: "15px 30px",
              borderRadius: "30px",
              color: "#fff",
              textDecoration: "none",
              fontWeight: "bold",
              marginRight: "10px",
            }}
          >
            Jepni Mendimin Tuaj
          </Link>
          <a
            href="#harta"
            className="btn"
            style={{
              padding: "15px 30px",
              borderRadius: "30px",
              border: "2px solid #2C3E50",
              color: "#2C3E50",
              textDecoration: "none",
              fontWeight: "bold",
            }}
          >
            Shiko Hartën
          </a>
        </div>
      </section>

      <section style={{ padding: "80px 20px", backgroundColor: "#F9F9F9" }}>
        <h2
          style={{
            textAlign: "center",
            fontSize: "2.5rem",
            marginBottom: "40px",
          }}
        >
          Pse të Zgjidhni Ne
        </h2>
        <div
          className="row"
          style={{ display: "flex", justifyContent: "center" }}
        >
          <ChatApp />
          <div
            className="col-md-4"
            style={{
              textAlign: "center",
              margin: "10px",
              padding: "20px",
              backgroundColor: "#fff",
              borderRadius: "15px",
              boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
            }}
          >
            <HiOutlineTicket size="50px" style={{ color: "#2C3E50" }} />
            <h4 style={{ marginTop: "15px" }}>Rezervime të Lehta</h4>
            <p>
              Rezervoni biletat tuaja pa mundim për destinacionet kryesore në
              Kosovë.
            </p>
          </div>
          <div
            className="col-md-4"
            style={{
              textAlign: "center",
              margin: "10px",
              padding: "20px",
              backgroundColor: "#fff",
              borderRadius: "15px",
              boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
            }}
          >
            <FaBus size="50px" style={{ color: "#2C3E50" }} />
            <h4 style={{ marginTop: "15px" }}>Linja të Besueshme</h4>
            <p>
              Shikoni linjat e autobusëve, oraret dhe ndalesat për më shumë
              lehtësi.
            </p>
          </div>
          <div
            className="col-md-4"
            style={{
              textAlign: "center",
              margin: "10px",
              padding: "20px",
              backgroundColor: "#fff",
              borderRadius: "15px",
              boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
            }}
          >
            <TiWeatherPartlySunny size="50px" style={{ color: "#2C3E50" }} />
            <h4 style={{ marginTop: "15px" }}>Përditësime Moti</h4>
            <p>
              Qëndroni të informuar me përditësime të motit në kohë reale për të
              gjitha destinacionet.
            </p>
          </div>
        </div>
      </section>

      <section
        style={{
          background: "linear-gradient(135deg, #D6E4F0, #EFEFEF)",
          padding: "100px 20px",
          display: "flex",
          flexDirection: "row-reverse",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div style={{ maxWidth: "50%" }}>
          <h2
            style={{ fontSize: "2rem", fontWeight: "bold", color: "#34495E" }}
          >
            Po Udhtoni së Shpejti?
          </h2>
          <p style={{ fontSize: "1.1rem", margin: "20px 0" }}>
            Kontrolloni përditësimet e motit për qytetet tuaja të preferuara
            para se të niseni.
          </p>
          <Link
            to="/weather"
            className="btn btn-primary"
            style={{
              backgroundColor: "#2C3E50",
              padding: "15px 30px",
              borderRadius: "30px",
              color: "#fff",
              textDecoration: "none",
              fontWeight: "bold",
            }}
          >
            Shiko Motin
          </Link>
        </div>
        <img
          src="./images/moti.jpg"
          alt="Udhetim"
          style={{
            maxHeight: "400px",
            borderRadius: "15px",
            boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
          }}
        />
      </section>

      <section style={{ padding: "80px 20px", backgroundColor: "#F9F9F9" }}>
        <h2
          style={{
            textAlign: "center",
            fontSize: "2.5rem",
            marginBottom: "40px",
          }}
        >
          Partnerët Tanë të Besuar
        </h2>
        <div
          className="row"
          style={{ display: "flex", justifyContent: "center" }}
        >
          <img
            src="./images/c1.jpg"
            alt="Partner 1"
            style={{
              maxWidth: "300px",
              borderRadius: "10px",
              margin: "10px",
              boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
            }}
          />
          <img
            src="./images/c2.jpg"
            alt="Partner 2"
            style={{
              maxWidth: "300px",
              borderRadius: "10px",
              margin: "10px",
              boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
            }}
          />
          <img
            src="./images/c3.jpg"
            alt="Partner 3"
            style={{
              maxWidth: "300px",
              borderRadius: "10px",
              margin: "10px",
              boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
            }}
          />
        </div>
      </section>

      <section
        style={{
          background: "linear-gradient(135deg, #D6E4F0, #EFEFEF)",
          padding: "100px 20px",
          display: "flex",
          flexDirection: "row-reverse",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div className="container">
          <h1 className="text-center mb-5" style={{ fontFamily: "sans-serif" }}>
            Pse duhet ta vizitoni Kosovën?
          </h1>

          <div className="row g-4">
            <div className="col-md-6 col-lg-4">
              <div className="card bg-light text-dark">
                <img
                  src="./images/k1.jpg"
                  className="card-img-top"
                  alt="Visit Kosovo"
                  style={{ height: "250px", objectFit: "cover" }}
                />
                <div className="card-body">
                  <p className="card-text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="card bg-light text-dark">
                <img
                  src="./images/k2.jpg"
                  className="card-img-top"
                  alt="Visit Kosovo"
                  style={{ height: "250px", objectFit: "cover" }}
                />
                <div className="card-body">
                  <p className="card-text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="card bg-light text-dark">
                <img
                  src="./images/k3.jpg"
                  className="card-img-top"
                  alt="Visit Kosovo"
                  style={{ height: "250px", objectFit: "cover" }}
                />
                <div className="card-body">
                  <p className="card-text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="card bg-light text-dark">
                <img
                  src="./images/k4.jpg"
                  className="card-img-top"
                  alt="Visit Kosovo"
                  style={{ height: "250px", objectFit: "cover" }}
                />
                <div className="card-body">
                  <p className="card-text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="card bg-light text-dark">
                <img
                  src="./images/k5.jpg"
                  className="card-img-top"
                  alt="Visit Kosovo"
                  style={{ height: "250px", objectFit: "cover" }}
                />
                <div className="card-body">
                  <p className="card-text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="card bg-light text-dark">
                <img
                  src="./images/k6.jpg"
                  className="card-img-top"
                  alt="Visit Kosovo"
                  style={{ height: "250px", objectFit: "cover" }}
                />
                <div className="card-body">
                  <p className="card-text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        style={{
          padding: "100px 20px",
          backgroundColor: "#F9F9F9",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          gap: "20px",
        }}
      >
        <h4
          style={{
            width: "100%",
            textAlign: "center",
            marginBottom: "40px",
            fontSize: "2.5rem",
            color: "#34495E",
          }}
        >
          Eksploroni Kosovën: Video dhe Hartë Interaktive
        </h4>

        <div
          style={{
            flex: "1 1 45%",
            borderRadius: "15px",
            boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
            overflow: "hidden",
          }}
        >
          <iframe
            width="100%"
            height="315"
            style={{
              border: "none",
              borderRadius: "15px",
            }}
            src="https://www.youtube.com/embed/x2UGhvgG1VA?autoplay=1&loop=1&mute=1"
            title="Kosovo Travel Highlights"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
          <div style={{ padding: "15px", backgroundColor: "#fff" }}>
            <h3 style={{ margin: 0, color: "#34495E" }}>
              Shihni Pamjet e Kosovës
            </h3>
            <p style={{ margin: "10px 0 0", color: "#555" }}>
              Një udhëtim virtual nëpër destinacionet më të bukura të Kosovës.
            </p>
          </div>
        </div>

        <div
          id="harta"
          style={{
            flex: "1 1 45%",
            borderRadius: "15px",
            boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
            overflow: "hidden",
          }}
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d758328.9827069144!2d20.272389273627134!3d42.56279864440907!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13549e738df1bcb7%3A0x364c4c52ac5af476!2sKosovo!5e0!3m2!1sen!2s!4v1693659327762!5m2!1sen!2s"
            width="100%"
            height="315"
            title="Kosovo Map"
            style={{
              border: "none",
              borderRadius: "15px",
            }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
          <div style={{ padding: "15px", backgroundColor: "#fff" }}>
            <h3 style={{ margin: 0, color: "#34495E" }}>Harta Interaktive</h3>
            <p style={{ margin: "10px 0 0", color: "#555" }}>
              Eksploroni qytetet dhe zbuloni destinacionin tuaj të ardhshëm.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MainPage;