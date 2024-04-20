import React from "react";
import { Carousel } from "react-bootstrap";
import { MdRestaurantMenu } from "react-icons/md";
import { AiOutlinePicture } from "react-icons/ai";

function RecommendationGjakova() {
    return (
        <main className="container mt-5">
            <div className="row mb-5">
                <div className="col-md-8">
                    <div className="card mb-4">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/07_Gjakova_Naten_Gjakova_at_Night.jpg/1200px-07_Gjakova_Naten_Gjakova_at_Night.jpg" className="card-img-top" alt="Gjakova" />
                        <div className="card-body">
                            <h1 className="card-title">Eksploroni Gjakovën!</h1>
                            <p className="card-text">
                                Gjakova është një qytet me një histori të pasur dhe shumë atraksione interesante për të vizituar. Këtu janë disa nga vendet më të bukura dhe të rëndësishme për të shkuar:
                            </p>
                        </div>
                    </div>
                    <h2 className="mb-4 mt-5">Top Atraksionet</h2>
                    <div className="card mb-4" id="dd">
                        <div className="row g-0">
                            <div className="col-md-4">
                                <img src="https://wander-lush.org/wp-content/uploads/2021/09/Emily-Lush-Gjakova-Kosovo-quiet-streets.jpg" className="img-fluid rounded-start" alt="Old Bazaar" />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title">Old Bazaar</h5>
                                    <p className="card-text">Old Bazaar është një treg tradicional me arkitekturë të bukur dhe dyqane të ndryshme me produkte vendase.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card mb-4">
                        <div className="row g-0">
                            <div className="col-md-4">
                                <img src="https://scontent.fprn9-1.fna.fbcdn.net/v/t1.6435-9/67750304_2991371540905426_390407137022443520_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=5f2048&_nc_ohc=Sik_2oJzlKMAb7Ej3pP&_nc_ht=scontent.fprn9-1.fna&oh=00_AfAJEBTT1vcW8vFIp8G89A1BiFvF2sxCv7M7nNJJ6RRDKQ&oe=664A271C" className="img-fluid rounded-start" alt="Hadum Mosque" />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title">Hadum Mosque</h5>
                                    <p className="card-text">Hadum Mosque është një ndër ndërtesat më të njohura historike në Gjakovë, me arkitekturë të bukur islame.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <h2 className="mb-4 mt-5">Restorantet dhe Kafeteritë</h2>
                    <div className="card mb-4" id="dd1">
                        <div className="row g-0">
                            <div className="col-md-4">
                                <img src="https://lh3.googleusercontent.com/p/AF1QipMGnePVnFx_uob8NWeWzznFgI2BcypS8_pBktQI=s1360-w1360-h1020" className="img-fluid rounded-start" alt="Restaurant Hamdi" />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title">Restaurant Hamdi</h5>
                                    <p className="card-text">Restaurant Hamdi ofron një përvojë unike kulinare me kuzhinë tradicionale dhe moderne.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card mb-4">
                        <div className="row g-0">
                            <div className="col-md-4">
                                <img src="https://i.pinimg.com/originals/0e/66/3d/0e663db7fbf2a9f7a94baedd8f042add.jpg" className="img-fluid rounded-start" alt="Café Beart" />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title">Café Beart</h5>
                                    <p className="card-text">Café Beart është një kafene e njohur për kafen e shijshme dhe ambientin e tij të këndshëm.</p>
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
                                    <img className="d-block w-100" src="https://chasingthedonkey.b-cdn.net/wp-content/uploads/2020/04/Holy-Bridge-Gjakova-Kosovo_Depositphotos_609386072_S.jpeg" alt="First slide" />
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img className="d-block w-100" src="https://i0.wp.com/kosovatravel.org/wp-content/uploads/2023/02/6-shpella-e-kusareve.jpg?fit=1440%2C810&ssl=1" alt="Second slide" />
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img className="d-block w-100" src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Koshare_Peak_-_Mal%C3%ABsia_e_Gjakov%C3%ABs.JPG/1200px-Koshare_Peak_-_Mal%C3%ABsia_e_Gjakov%C3%ABs.JPG" alt="Third slide" />
                                </Carousel.Item>
                            </Carousel>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default <RecommendationGjakova />;