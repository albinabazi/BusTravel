import { Link } from "react-router-dom";
import SpinTheWheel from "./SpinTheWheel";


function Rekomandimet() {
    return (
        <main>
            <section className="hero-section" style={{ background: '#323A44', minHeight: '250px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', textAlign: 'center' }}>
                <div className="container">
                    <h1 className="mb-4" style={{ fontFamily: 'system-ui', fontSize: '32px' }}>Rekomandimet tona</h1>
                    <p className="mb-4">
                        Provoni Wheel dhe vendosni destinacionin tuaj të rradhës. Eksplorojeni mrekullitë e Kosovës me Rrotën e Destinacioneve tonë! Pavarësisht nëse kërkoni zhytje në kulturë, bukuri peizazhi, apo aventura emocionuese, Kosova ofron një gamë të gjerë të përvojave që i shërbejnë çdo shije udhëtarit.
                    </p>
                    <a href="#rec"><button className="btn btn-secondary" style={{ borderRadius: '30px' }}>Klikoni per rekomandime!</button></a>
                </div>
                <div className="air-container">
                    <div className="air air1"></div>
                    <div className="air air2"></div>
                    <div className="air air3"></div>
                    <div className="air air4"></div>
                </div>
            </section>
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <div className="firstBox">
                            <div className="firstfirstBox" style={{ fontFamily: 'system-ui', color: '#193238', marginTop: '250px' }}>
                                <h2>Eksploro destinacionet e Kosovës</h2>
                                <p style={{ fontFamily: 'system-ui', color: '#193238' }}>
                                    Heshtja e natyrës, brënda vetë qytetit apo në majën e maleve - çdo hap mund të jetë një aventurë e re. Zgjidhni destinacionin tuaj të ardhshëm me anë të Rrotës së Destinacioneve dhe gjeni magjinë e Kosovës.
                                </p>
                            </div>
                            <div className="spinTheWheel" style={{ marginTop: '200px' }}>
                                <SpinTheWheel />
                            </div>
                            <div className="image-container mt-5">
                                <img src="https://pbs.twimg.com/media/FyR3-XkWwAA1hAh?format=jpg&name=large" alt="Placeholder Image" style={{ width: '650px', height: '850px', marginTop:'200px' }} />
                            </div>
                            <div className="image-container mt-5">
                                <img src="https://scontent.fprn9-1.fna.fbcdn.net/v/t31.18172-8/11227055_1184922601536294_1660850800390104150_o.jpg?_nc_cat=107&ccb=1-7&_nc_sid=5f2048&_nc_ohc=VDaatDJ78RkAb5pjs7p&_nc_ht=scontent.fprn9-1.fna&oh=00_AfBYXo0FqRtYinD3EJ6P2GGoGshnHBPSkQQphUeyU52UkA&oe=66490AF7" alt="Placeholder Image" style={{ width: '650px', height: '450px', marginTop:'400px' }} />
                            </div>
                        </div>
                    </div>

                    <div className="col-md-6 mt-4">
                        <div className="recFoto mb-5" style={{ marginLeft: '80px' }}>
                            <h2 style={{ fontFamily: 'system-ui', color: 'black' }}>Rekomandimet per qytetin e zgjedhur!</h2>
                            <div id="rec" className="secondBox mt-4">
                                <div className="row">
                                    <div className="row-md-6">
                                        <div className="card mb-3">
                                            <img src="https://live.staticflickr.com/4289/35269996692_25c4020119_b.jpg" className="card-img-top" alt="Prizren" />
                                            <div className="card-body">
                                                <h5 className="card-title">Prizren</h5>
                                                <Link to="/recommendationPrizren" className="btn btn-secondary">Shiko Rekomandimet</Link>
                                            </div>
                                        </div>
                                        <div className="card mb-3">
                                            <img src="https://kk.rks-gov.net/ferizaj/wp-content/uploads/sites/31/2017/10/1234.gif" className="card-img-top" alt="Ferizaj" />
                                            <div className="card-body">
                                                <h5 className="card-title">Ferizaj</h5>
                                                <Link to="/recommendationFerizaj" className="btn btn-secondary">Shiko Rekomandimet</Link>
                                            </div>
                                        </div>
                                        <div className="card mb-3">
                                            <img src="https://www.rit.edu/academicaffairs/global/sites/rit.edu.academicaffairs.global/files/Pristina%20night.jpg" className="card-img-top" alt="Prishtina" />
                                            <div className="card-body">
                                                <h5 className="card-title">Prishtina</h5>
                                                <Link to="/recommendationPrishtina" className="btn btn-secondary">Shiko Rekomandimet</Link>
                                            </div>
                                        </div>
                                        <div className="card mb-3">
                                            <img src="https://photos.wikimapia.org/p/00/01/10/54/49_big.jpg" className="card-img-top" alt="Gjilan" />
                                            <div className="card-body">
                                                <h5 className="card-title">Gjilan</h5>
                                                <Link to="/recommendationGjilan" className="btn btn-secondary">Shiko Rekomandimet</Link>
                                            </div>
                                        </div>
                                        <div className="card mb-3">
                                            <img src="https://www.shutterstock.com/image-photo/aerial-view-city-mountain-valley-260nw-2405410763.jpg" className="card-img-top" alt="Peje" />
                                            <div className="card-body">
                                                <h5 className="card-title">Peje</h5>
                                                <Link to="/recommendationPeje" className="btn btn-secondary">Shiko Rekomandimet</Link>
                                            </div>
                                        </div>
                                        <div className="card mb-3">
                                            <img src="https://kk.rks-gov.net/gjakove/wp-content/uploads/sites/2/2016/08/Gjakova-5.jpg" className="card-img-top" alt="Gjakove" />
                                            <div className="card-body">
                                                <h5 className="card-title">Gjakove</h5>
                                                <Link to="/recommendationGjakove" className="btn btn-secondary">Shiko Rekomandimet</Link>
                                            </div>
                                        </div>
                                        <div className="card mb-3">
                                            <img src="https://i.pinimg.com/564x/ff/0b/ce/ff0bce808e7a37897275a3cbf3a71321.jpg" className="card-img-top" alt="Mitrovice" />
                                            <div className="card-body">
                                                <h5 className="card-title">Mitrovice</h5>
                                                <Link to="/recommendationMitrovice" className="btn btn-secondary">Shiko Rekomandimet</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default <Rekomandimet />;