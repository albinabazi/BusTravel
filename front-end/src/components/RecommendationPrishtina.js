import React from "react";
import { Carousel } from "react-bootstrap";
import { MdRestaurantMenu } from "react-icons/md";
import { AiOutlinePicture } from "react-icons/ai";

function RecommendationPrishtina() {
    return (
        <main className="container mt-5">
            <div className="row mb-5">
                <div className="col-md-8">
                    <div className="card mb-4">
                        <img src="https://www.artforum.com/wp-content/uploads/2022/04/featured00_large-17.jpg" className="card-img-top" alt="Prishtina" />
                        <div className="card-body">
                            <h1 className="card-title">Eksploroni Prishtinën!</h1>
                            <p className="card-text">
                                Prishtina, kryeqyteti i Kosovës, ofron një përzierje të mrekullueshme të kulturës, historisë dhe gastronomisë. Gjatë vizitës tuaj në këtë qytet të animuar, mos harroni të vizitoni këto vende që na rekomandojnë:
                            </p>
                        </div>
                    </div>
                    <h2 className="mb-4 mt-5">Top Atraksionet</h2>
                    <div className="card mb-4" id="dd">
                        <div className="row g-0">
                            <div className="col-md-4">
                                <img src="https://scontent.fprn9-1.fna.fbcdn.net/v/t1.18169-9/20374426_1508230625886375_680642374557731389_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=5f2048&_nc_ohc=iiJLHIZSQ-oAb4D3ql_&_nc_ht=scontent.fprn9-1.fna&oh=00_AfAkbxCBHyEhWmWYIkXxay1u04QJLw5MUpadJxy9VxUvew&oe=6649FDB4" className="img-fluid rounded-start" alt="Libri Universitar" />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title">Libri Universitar</h5>
                                    <p className="card-text">Libri Universitar është një vend i rëndësishëm për studentët dhe miqtë për të blerë dhe shfletuar libra në Prishtinë.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card mb-4">
                        <div className="row g-0">
                            <div className="col-md-4">
                                <img src="https://kosovalive.net/wp-content/uploads/2019/10/bibloteka-kombetare.jpg" className="img-fluid rounded-start" alt="Biblioteka Kombëtare" />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title">Biblioteka Kombëtare</h5>
                                    <p className="card-text">Biblioteka Kombëtare e Kosovës ofron një koleksion të pasur të librave dhe një ambient të qetë për leximin dhe studimin.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <h2 className="mb-4 mt-5">Restorantet dhe Kafeteritë</h2>
                    <div className="card mb-4" id="dd1">
                        <div className="row g-0">
                            <div className="col-md-4">
                                <img src="https://scontent.fprn9-1.fna.fbcdn.net/v/t39.30808-6/220189939_4556510954372685_7777110248162025237_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=5f2048&_nc_ohc=RaDbLYuCk5cAb7Qlu2I&_nc_ht=scontent.fprn9-1.fna&oh=00_AfC1syeY0MKird_V05d2ET68B9XX3JurariJH8qiv7HFUw&oe=66287C1C" className="img-fluid rounded-start" alt="Tiffany Lounge & Club" />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title">Tiffany Lounge & Club</h5>
                                    <p className="card-text">Tiffany Lounge & Club është një nga klubet më të njohura në Prishtinë, ku mund të shijoni muzikë të mirë dhe një atmosferë të këndshme.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card mb-4">
                        <div className="row g-0">
                            <div className="col-md-4">
                                <img src="https://scontent.fprn9-1.fna.fbcdn.net/v/t1.6435-9/194070635_117549307185875_265388942415960524_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=5f2048&_nc_ohc=ZLqP44kF9vYAb7IRi4t&_nc_ht=scontent.fprn9-1.fna&oh=00_AfAE3McpT5uU8hpGIymQM7e18d_OkbFTVy53Gy3SqaYn8Q&oe=664A015A" className="img-fluid rounded-start" alt="Vera Restaurant & Lounge" />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title">Vera Restaurant & Lounge</h5>
                                    <p className="card-text">Vera Restaurant & Lounge ofron një përvojë unike gastronomike me një zgjedhje të gjerë të pjatave tradicionale dhe moderne.</p>
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
                                    <img className="d-block w-100" src="https://emerging-europe.com/wp-content/uploads/2020/01/newborn_monument_prishtina-990x556.png" alt="First slide" />
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img className="d-block w-100" src="https://m8f6g7m6.rocketcdn.me/wp-content/uploads/2020/10/Pristina-Mall-Exterior-e1603373664634.jpg" alt="Second slide" />
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img className="d-block w-100" src="https://indeksonline.net/wp-content/uploads/2018/07/13313g13g1g.jpg" alt="Third slide" />
                                </Carousel.Item>
                            </Carousel>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default <RecommendationPrishtina />;