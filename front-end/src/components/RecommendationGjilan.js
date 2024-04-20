import React from "react";
import { Carousel } from "react-bootstrap";
import { MdRestaurantMenu } from "react-icons/md";
import { AiOutlinePicture } from "react-icons/ai";

function RecommendationGjilan() {
    return (
        <main className="container mt-5">
            <div className="row mb-5">
                <div className="col-md-8">
                    <div className="card mb-4">
                        <img src="https://b3015210.smushcdn.com/3015210/wp-content/uploads/2021/04/top-5-things-you-must-see-and-do-in-gjilan-kosovo-davidsbeenhere-1-980x551.jpeg?lossy=1&strip=1&webp=1" className="card-img-top" alt="Gjilan" />
                        <div className="card-body">
                            <h1 className="card-title">Eksploroni Gjilanin!</h1>
                            <p className="card-text">
                                Gjilani është një qytet i bukur me një histori dhe kulturë të pasur. Gjatë vizitës suaj në këtë qytet të veçantë, mos harroni të vizitoni këto vende që na rekomandojnë:
                            </p>
                        </div>
                    </div>
                    <h2 className="mb-4 mt-5">Top Atraksionet</h2>
                    <div className="card mb-4" id="museum">
                        <div className="row g-0">
                            <div className="col-md-4">
                                <img src="https://kallxo.com/wp-content/uploads/2021/05/4-1-1.jpg" className="img-fluid rounded-start" alt="Museum of Gjilan" />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title">Muzeu i Gjilanit</h5>
                                    <p className="card-text">Muzeu i Gjilanit shfaq historinë dhe kulturën e rajonit nëpërmjet ekspozitave të arkeologjisë, etnografisë dhe traditave lokale.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card mb-4" id="castle">
                        <div className="row g-0">
                            <div className="col-md-4">
                                <img src="https://b3015210.smushcdn.com/3015210/wp-content/uploads/2021/04/top-5-things-you-must-see-and-do-in-gjilan-kosovo-davidsbeenhere-25-980x552.jpeg?lossy=1&strip=1&webp=1" className="img-fluid rounded-start" alt="Gjilan Castle" />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title">Kalaja e Gjilanit</h5>
                                    <p className="card-text">Kalaja e Gjilanit është një kështjellë e lashtë që ofron një pamje të mrekullueshme të qytetit dhe rrethinës.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <h2 className="mb-4 mt-5">Restorantet dhe Kafeteritë</h2>
                    <div className="card mb-4" id="dd1">
                        <div className="row g-0">
                            <div className="col-md-4">
                                <img src="https://images.otstatic.com/prod1/31140087/3/large.jpg" className="img-fluid rounded-start" alt="Restaurant Gjelina" />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title">Restaurant Gjelina</h5>
                                    <p className="card-text">Restaurant Gjelina është një zgjedhje e shkëlqyer për të shijuar ushqimin tradicional dhe modern.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card mb-4">
                        <div className="row g-0">
                            <div className="col-md-4">
                                <img src="https://media-cdn.tripadvisor.com/media/photo-s/2b/af/ae/5d/caption.jpg" className="img-fluid rounded-start" alt="Cafe Tring" />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title">Cafe Tring</h5>
                                    <p className="card-text">Cafe Tring është një kafene e njohur për kafen dhe ambientin e tij të këndshëm.</p>
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
                                    <img className="d-block w-100" src="https://b3015210.smushcdn.com/3015210/wp-content/uploads/2021/04/top-5-things-you-must-see-and-do-in-gjilan-kosovo-davidsbeenhere-34-980x552.jpeg?lossy=1&strip=1&webp=1" alt="First slide" />
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img className="d-block w-100" src="https://tripalb.com/wp-content/uploads/2022/07/Vali-Ranch.webp" alt="Second slide" />
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img className="d-block w-100" src="https://img3.oastatic.com/img2/16751079/max/variant.jpg" alt="Third slide" />
                                </Carousel.Item>
                            </Carousel>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default <RecommendationGjilan />;