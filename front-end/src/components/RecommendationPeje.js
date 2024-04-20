import React from "react";
import { Carousel } from "react-bootstrap";
import { MdRestaurantMenu } from "react-icons/md";
import { AiOutlinePicture } from "react-icons/ai";

function RecommendationPeje() {
    return (
        <main className="container mt-5">
            <div className="row mb-5">
                <div className="col-md-8">
                    <div className="card mb-4">
                        <img src="https://i.pinimg.com/originals/ff/98/e5/ff98e53fd571da256af0deedcd501e8a.jpg" className="card-img-top" alt="Peje" />
                        <div className="card-body">
                            <h1 className="card-title">Eksploroni Pejen!</h1>
                            <p className="card-text">
                                Peja është një qytet i bukur me një histori dhe kulturë të pasur. Gjatë vizitës suaj në këtë qytet të veçantë, mos harroni të vizitoni këto vende që na rekomandojnë:
                            </p>
                        </div>
                    </div>
                    <h2 className="mb-4 mt-5">Top Atraksionet</h2>
                    <div className="card mb-4" id="ruger">
                        <div className="row g-0">
                            <div className="col-md-4">
                                <img src="https://upload.wikimedia.org/wikipedia/commons/3/33/Rugova_Canyon.jpg" className="img-fluid rounded-start" alt="Rugova Canyon" />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title">Rugova Canyon</h5>
                                    <p className="card-text">Rugova Canyon ofron një peisazh të mrekullueshëm natyror dhe mundësi për hiking dhe shijim të natyrës.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card mb-4" id="gjeravica">
                        <div className="row g-0">
                            <div className="col-md-4">
                                <img src="https://butterflyoutdoor.com/wp-content/uploads/2020/10/19466552_1953517461341072_3184923698118854872_o.jpg" className="img-fluid rounded-start" alt="Gjeravica" />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title">Gjeravica</h5>
                                    <p className="card-text">Gjeravica është pikë më e lartë në Kosovë dhe ofron pamje të mahnitshme të maleve dhe luginave përreth, duke e bërë atë një destinacion të preferuar për udhëtimet dhe shëtitjet në natyrë.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <h2 className="mb-4 mt-5">Restorantet dhe Kafeteritë</h2>
                    <div className="card mb-4" id="mulliri">
                        <div className="row g-0">
                            <div className="col-md-4">
                                <img src="https://mullirivjeter.al/wp-content/uploads/2022/06/mulliri-prizren-web.jpg" className="img-fluid rounded-start" alt="Mulliri i Vjeter" />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title">Mulliri i Vjeter</h5>
                                    <p className="card-text">Mulliri i Vjeter ofron një përvojë unike gastronomike në një ambient tradicional.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card mb-4" id="shatervani">
                        <div className="row g-0">
                            <div className="col-md-4">
                                <img src="https://i.ytimg.com/vi/OB1Q2bHC6oU/maxresdefault.jpg" className="img-fluid rounded-start" alt="Shatervani i Pejes" />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title">Shatervani i Pejes</h5>
                                    <p className="card-text">Shatervani i Pejes është një lokal i njohur për kafen dhe pamjen e bukur pranë lumit.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-4" style={{ marginTop: '150px' }}>
                    <div className="mb-4 d-flex flex-column align-items-center">
                        <a href="#ruger">
                            <button className="btn btn-secondary btn-lg btn-block mb-3">
                                Shiko Atraksionet <AiOutlinePicture size={20} />
                            </button>
                        </a>
                        <a href="#mulliri">
                            <button className="btn btn-secondary btn-lg btn-block mt-5">
                                Shiko Restorantin <MdRestaurantMenu size={20} />
                            </button>
                        </a>
                    </div>
                    <div className="card" style={{ marginTop: '100px' }}>
                        <div className="card-body">
                            <h5 className="card-title">Atraksionet Tjera</h5>
                            <Carousel>
                                <Carousel.Item>
                                    <img className="d-block w-100" src="https://www.botasot.info/media/botasot.info/images/2023/July/13/357775595_662749505880678_8033559747150737149_n1689229154.jpg" alt="First slide" />
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img className="d-block w-100" src="https://media.tacdn.com/media/attractions-splice-spp-674x446/07/aa/d8/d0.jpg" alt="Second slide" />
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img className="d-block w-100" src="https://www.kosovo-vacations.com/ressourcen/images/peja-activities.jpg" alt="Third slide" />
                                </Carousel.Item>
                            </Carousel>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default <RecommendationPeje />;