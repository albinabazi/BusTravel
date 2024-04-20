import React from "react";
import { Carousel } from "react-bootstrap";
import { MdRestaurantMenu } from "react-icons/md";
import { AiOutlinePicture } from "react-icons/ai";

function RecommendationFerizaj() {
    return (
        <main className="container mt-5">
            <div className="row mb-5">
                <div className="col-md-8">
                    <div className="card mb-4">
                        <img src="https://scontent.fprn9-1.fna.fbcdn.net/v/t1.6435-9/124633085_157010926097402_8202308799556565661_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=5f2048&_nc_ohc=bZkLJAYUIgUAb7rmvHM&_nc_ht=scontent.fprn9-1.fna&oh=00_AfDJFfUzfxo51DJP-hNL8oq1Pb5kDGSzkqBkPwrE3h1CAQ&oe=6649FD1D" className="card-img-top" alt="Ferizaj" />
                        <div className="card-body">
                            <h1 className="card-title">Eksploroni Ferizajin!</h1>
                            <p className="card-text">
                                Ferizaj është një qytet i bukur me shumë atraksione dhe restaurante të shkëlqyeshme. Gjatë udhëtimit tuaj në këtë qytet të veçantë, mos harroni të vizitoni këto vendnd që na rekomandojnë:
                            </p>
                        </div>
                    </div>
                    <h2 className="mb-4 mt-5">Top Atraksionet</h2>
                    <div className="card mb-4" id="dd">
                        <div className="row g-0">
                            <div className="col-md-4">
                                <img src="https://scontent.fprn9-1.fna.fbcdn.net/v/t39.30808-6/326332627_719945666245929_3744990097155155563_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=5f2048&_nc_ohc=vVmTCiwYNiQAb7fI5Rw&_nc_ht=scontent.fprn9-1.fna&oh=00_AfC-511JkhnFH1kBCElrvqeBAQPa4toSYhPHZE56TB5tmQ&oe=66285DD7" className="img-fluid rounded-start" alt="Ujëvara Resort" />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title">Ujëvara Resort</h5>
                                    <p className="card-text">Ujëvara Resort është një destinacion i mrekullueshëm për të shijuar natyrën dhe për të pushuar larg zhurmës së qytetit.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card mb-4">
                        <div className="row g-0">
                            <div className="col-md-4">
                                <img src="https://scontent.fprn9-1.fna.fbcdn.net/v/t1.6435-9/119658806_1201314420239960_7348666853375645905_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=5f2048&_nc_ohc=nkxYTnwId3sAb626-u1&_nc_ht=scontent.fprn9-1.fna&oh=00_AfBrHWKfvpppEzgddkZIDBZhm1iB11Oa9hRLlXFGSbz-nw&oe=6649F567" className="img-fluid rounded-start" alt="Ferizaj City of murals" />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title">Ferizaj "City of murals"</h5>
                                    <p className="card-text">Ferizaj është një qytet me muralje të mrekullueshme që e bëjnë atë një destinacion tërheqës për artin.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <h2 className="mb-4">Hotelet dhe Restaurantet</h2>
                    <div className="card mb-4" id="dd1">
                        <div className="row g-0">
                            <div className="col-md-4">
                                <img src="https://scontent.fprn9-1.fna.fbcdn.net/v/t39.30808-6/305662449_523651956352784_3300669346514252189_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=5f2048&_nc_ohc=T3Z-89UA0UoAb6_eP31&_nc_ht=scontent.fprn9-1.fna&oh=00_AfC91s983gvJRTdlZ2vMrY0YC1K_3LV-UUmyqVHfGoyjjQ&oe=66287494" className="img-fluid rounded-start" alt="Restaurant Saffran" />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title">Restaurant Saffran</h5>
                                    <p className="card-text">Restaurant Saffran ofron një përvojë unike kulinare me shije të mrekullueshme.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card mb-4">
                        <div className="row g-0">
                            <div className="col-md-4">
                                <img src="https://i.ytimg.com/vi/Nqk__lRCp4o/maxresdefault.jpg" className="img-fluid rounded-start" alt="Cotto Brasserie & Restaurant" />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title">Cotto Brasserie & Restaurant</h5>
                                    <p className="card-text">Cotto Brasserie & Restaurant ofron një ambient të bukur dhe një menyu të zgjeruar me specialitete të shijshme.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="mb-4">
                        <a href="#dd">
                            <button className="btn btn-secondary btn-lg btn-block mb-3 mt-5">
                                Shiko Atraksionet <AiOutlinePicture size="20px" className="ml-1" />
                            </button>
                        </a>
                        <a href="#dd1">
                            <button className="btn btn-secondary btn-lg btn-block mt-5">
                                Shiko Restaurantet <MdRestaurantMenu size="20px" className="ml-1" />
                            </button>
                        </a>
                    </div>
                    <h2 className="mb-4" style={{marginTop:'150px'}}>Shijoni atraksionet tjera!</h2>
                    <Carousel>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="https://media-cdn.tripadvisor.com/media/photo-s/23/71/b4/81/the-village-shopping.jpg"
                                alt="First slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="https://static.wixstatic.com/media/06637a_813b3dddab1c44dda4b9ecd67c806a80~mv2.jpg/v1/fill/w_586,h_388,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/19d4e4182faf41abbfc111d4a0c2c80c.jpg"
                                alt="Second slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="https://pbs.twimg.com/media/Eo1WSZHXEAgqjPK.jpg"
                                alt="Third slide"
                            />
                        </Carousel.Item>
                    </Carousel>
                </div>
            </div>
        </main>
    );
}

export default <RecommendationFerizaj />;