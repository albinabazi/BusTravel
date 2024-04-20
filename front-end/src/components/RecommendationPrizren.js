import React from "react";
import { Carousel } from "react-bootstrap";
import { MdRestaurantMenu } from "react-icons/md";
import { AiOutlinePicture } from "react-icons/ai";

function RecommendationPrizren() {
    return (
        <main className="container mt-5">
            <div className="row mb-5">
                <div className="col-md-8">
                    <div className="card mb-4">
                        <img src="https://scratchyourmapa.com/wp-content/uploads/2023/01/Prizren-Kosovo-Danni-and-Fede.jpg" className="card-img-top" alt="Prizren" />
                        <div className="card-body">
                            <h1 className="card-title">Eksploroni Prizrenin!</h1>
                            <p className="card-text">
                                Prizren është një nga qytetet më të bukura në Kosovë me një histori dhe kulturë të pasur. Gjatë vizitës tuaj në këtë qytet të veçantë, mos harroni të vizitoni këto vende që na rekomandojnë:
                            </p>
                        </div>
                    </div>
                    <h2 className="mb-4 mt-5">Top Atraksionet</h2>
                    <div className="card mb-4" id="dd">
                        <div className="row g-0">
                            <div className="col-md-4">
                                <img src="https://c8.alamy.com/comp/R9HFAB/19th-century-shadervan-fountain-17th-century-siana-pasha-mosque-prizren-kosova-R9HFAB.jpg" className="img-fluid rounded-start" alt="Sheshi Shadërvan" />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title">Sheshi Shadërvan</h5>
                                    <p className="card-text">Sheshi Shadërvan është qendra historike e Prizrenit ku mund të shijoni arkitekturën tradicionale dhe kulturën e qytetit.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card mb-4">
                        <div className="row g-0">
                            <div className="col-md-4">
                                <img src="https://www.kosovo-vacations.com/ressourcen/images/prizren-fortress.jpg" className="img-fluid rounded-start" alt="Kalaja e Prizrenit" />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title">Kalaja e Prizrenit</h5>
                                    <p className="card-text">Kalaja e Prizrenit është një kështjellë e lashtë që ofron një pamje panoramike të qytetit dhe rrethinës.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <h2 className="mb-4 mt-5">Restorantet dhe Kafeteritë</h2>
                    <div className="card mb-4" id="dd1">
                        <div className="row g-0">
                            <div className="col-md-4">
                                <img src="https://media-cdn.tripadvisor.com/media/photo-s/16/a6/10/df/interior.jpg" className="img-fluid rounded-start" alt="Restorant Sarajevo" />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title">Restorant Sarajeva</h5>
                                    <p className="card-text">Restorant Sarajeva ofron një përvojë gastronomike të shkëlqyer me shije të mrekullueshme të ushqimit boshnjak.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card mb-4">
                        <div className="row g-0">
                            <div className="col-md-4">
                                <img src="https://b3015210.smushcdn.com/3015210/wp-content/uploads/2020/12/video-traditional-kosovo-tavas-at-liburnia-marinated-lamb-veal-pristina-kosovo-davidsbeenhere-6-980x552.jpg?lossy=1&strip=1&webp=1" className="img-fluid rounded-start" alt="Liburnia" />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title">Liburnia</h5>
                                    <p className="card-text">Liburnia është një kafene e njohur në Prizren për ambientin e saj të bukur dhe kafejen e shijshme.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-4" style={{ marginTop: '150px' }}>
                    <div className="mb-4">
                        <a href="#dd">
                            <button className="btn btn-secondary btn-lg btn-block mb-3">
                                Shiko Atraksionet <AiOutlinePicture size={20} />
                            </button>
                        </a>
                        <a href="#dd1">
                            <button className="btn btn-secondary btn-lg btn-block mt-5">
                                Shiko Restorantet <MdRestaurantMenu size={20} />
                            </button>
                        </a>
                    </div>
                    <div className="card" style={{ marginTop: '100px' }}>
                        <div className="card-body">
                            <h5 className="card-title">Atraksionet Tjera</h5>
                            <Carousel>
                                <Carousel.Item>
                                    <img className="d-block w-100" src="https://funkytours.com/wp-content/uploads/2022/01/Prizren-old-town-at-night.jpg" alt="First slide" />
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img className="d-block w-100" src="https://vizitoshqip.com/fileadmin/user_upload/Tourisms/KS/Prizren/lidhja-e-prizrenit.jpg" alt="Second slide" />
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img className="d-block w-100" src="https://funkytours.com/wp-content/uploads/2022/02/Prizren-view.jpg" alt="Third slide" />
                                </Carousel.Item>
                            </Carousel>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default <RecommendationPrizren />;