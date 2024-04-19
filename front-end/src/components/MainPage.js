import background from './front_page.jpeg';
import React, { useState } from 'react';

const cities = ["Prishtina", "Peja", "Klina", "Ferizaj"]; //example

const MainPage = () => {

    const [departureCity, setDepartureCity] = useState('');
    const [destinationCity, setDestinationCity] = useState('');
    const [departureOptions, setDepartureOptions] = useState([]);
    const [destinationOptions, setDestinationOptions] = useState([]);
    

    const handleDepartureChange = (event) => {
        const value = event.target.value;
        setDepartureCity(value);
        filterDepartureOptions(value);
      };
    
      const handleDestinationChange = (event) => {
        const value = event.target.value;
        setDestinationCity(value);
        filterDestinationOptions(value);
      };
    
      const filterDepartureOptions = (searchTerm) => {
        const filteredCities = cities.filter(city =>
          city.toLowerCase().startsWith(searchTerm.toLowerCase())
        );
        setDepartureOptions(filteredCities);
      };

      const filterDestinationOptions = (searchTerm) => {
        const filteredCities = cities.filter(city =>
          city.toLowerCase().startsWith(searchTerm.toLowerCase())
        );
        setDestinationOptions(filteredCities);
      };

      const handleDepartureSelect = (city) => {
        setDepartureCity(city);
        setDepartureOptions([]);
      };

      const handleDestinationSelect = (city) => {
        setDestinationCity(city);
        setDestinationOptions([]);
      };

      const handleSearch = () => {
       // console.log("Searching for bus from", departureCity, "to", destinationCity);
      };

    return (
           <>
             <div>
                <div>
                    <img src={background} style={{
                                                top: "auto",
                                                right:0,
                                                position: "absolute",
                                                objectFit:"cover",
                                                width: "100%", 
                                                height: "350px"}} />
                </div>
                <div >
                    <h1 style={{
                                position: "relative",
                                paddingTop: "100px",
                                paddingRight: "500px",
                                color: "white",
                                fontSize: "25px"
                                }}>Rezervoni, kërkoni dhe krahasoni autobusë në Kosovë.</h1>
                </div>
            </div>
            <div style={{height: "300px"}}>

            </div>
           

            <form style={{backgroundColor: "white",
                                                position: "relative",
                                                display: "flex",
                                                flexDirection: "row",
                                                justifyContent: "center",
                                                margin: "auto",
                                                width: "70%",
                                                height: "100px",
                                                borderRadius: "5px",
                                                marginTop: "-120px",
                                                boxShadow: "5px 10px 5px #e1e3eb",
                                                marginBottom: "100px"}}>
            <div style={{display: "flex"}}>
                        <div className="dropdown">
                            <input
                            type="text"
                            id="departure"
                            value={departureCity}
                            onChange={handleDepartureChange}
                            placeholder='From: City'
                            required
                            style={{
                                width: "250px",
                                height: "40px",
                                backgroundColor: "#f1f2f6",
                                borderRadius: "5px",
                                marginTop: "25px",
                                marginRight: "3px",
                                border: 0
                            }}
                            />
                            {departureOptions.length > 0 && (
                            <ul className="dropdown-list" style={{
                                                                listStyleType: "none",
                                                                width: "150px",
                                                                padding: 0,
                                                                margin: 0,
                                                                border: "1px solid #ccc",
                                                                borderTop: "none",
                                                                borderRadius: "0 0 5px 5px",
                                                                position: "absolute",
                                                                backgroundColor: "#fff",
                                                                zIndex: "1",
                                                                cursor: "pointer"
                                                                    }}>
                                {departureOptions.map((city, index) => (
                                <li key={index} onClick={() => handleDepartureSelect(city)}>
                                    {city}
                                </li>
                                ))}
                            </ul>
                            )}
                        </div>


                        <div className="dropdown">
                            <input
                            type="text"
                            id="destination"
                            value={destinationCity}
                            onChange={handleDestinationChange}
                            placeholder='To: City'
                            required
                            style={{ width: "250px",
                            height: "40px",
                            backgroundColor: "#f1f2f6",
                            borderRadius: "5px",
                            marginTop: "25px",
                            marginRight: "3px",
                            border: 0}}
                            />
                            {destinationOptions.length > 0 && (
                            <ul className="dropdown-list" style={{
                                                                listStyleType: "none",
                                                                width: "150px",
                                                                padding: 0,
                                                                margin: 0,
                                                                border: "1px solid #ccc",
                                                                borderTop: "none",
                                                                borderRadius: "0 0 5px 5px",
                                                                position: "absolute",
                                                                backgroundColor: "#fff",
                                                                zIndex: "1",
                                                                cursor: "pointer"
                                                                    }}>
                                {destinationOptions.map((city, index) => (
                                <li key={index} onClick={() => handleDestinationSelect(city)}>
                                    {city}
                                </li>
                                ))}
                            </ul>
                            )}
                        </div>
                     

                    <input type='date' id="date" style={{width: "250px",
                                                        height: "40px",
                                                        backgroundColor: "#f1f2f6",
                                                        borderRadius: "5px",
                                                        marginTop: "25px",
                                                        marginRight: "3px",
                                                        border: 0,
                                                        }}></input>
            </div>
              
                <div>
                    <button type='submit'  style={{ width: "150px",
                                    height: "40px",
                                    border: "none",
                                    color: "white",
                                    backgroundColor: "#fa6b6b",
                                    borderRadius: "5px",
                                    marginTop: "25px",
                                    fontSize: "13px",
                                    letterSpacing: ".5px",
                                    }} >Search</button>
                </div>
            </form>
           </>
    );
}



export default MainPage;