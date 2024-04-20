/* 
1: {
            id: 1,
            from: "Prishtina",
            to: "Peja",
            duration: "2 hours 30 minutes",
            price: "5 EUR",
        },
        2: {
            id: 2,
            from: "Peja",
            to: "Prizren",
            duration: "1 hour 45 minutes",
            price: "3 EUR",
        },
        3: {
            id: 3,
            from: "Prizren",
            to: "Gjilan",
            duration: "3 hours",
            price: "7 EUR",
        },
        4: {
            id: 4,
            from: "Gjakova",
            to: "Mitrovica",
            duration: "2 hours 15 minutes",
            price: "4 EUR",
        },
        5: {
            id: 5,
            from: "Prishtina",
            to: "Gjilan",
            duration: "2 hours",
            price: "6 EUR",
        },
        6: {
            id: 6,
            from: "Peja",
            to: "Gjakova",
            duration: "1 hour 30 minutes",
            price: "2.5 EUR",
        },
        7: {
            id: 7,
            from: "Gjilan",
            to: "Prishtina",
            duration: "2 hours 15 minutes",
            price: "6 EUR",
        },
        8: {
            id: 8,
            from: "Prizren",
            to: "Peja",
            duration: "2 hours",
            price: "4 EUR",
        },
        9: {
            id: 9,
            from: "Ferizaj",
            to: "Prishtina",
            duration: "1 hour",
            price: "3 EUR",
        },
        10: {
            id: 10,
            from: "Ferizaj",
            to: "Peja",
            duration: "3 hours 30 minutes",
            price: "6.5 EUR",
*/

import React from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

function RouteDetailsPage() {
    const { id } = useParams();
    console.log("Route ID:", id); // Debug statement to check the value of id

    const routeDetails = {
        1: {
            id: 1,
            from: "Prishtina",
            to: "Peja",
            duration: "2 hours 30 minutes",
            price: "5 EUR",
        },
        2: {
            id: 2,
            from: "Peja",
            to: "Prizren",
            duration: "1 hour 45 minutes",
            price: "3 EUR",
        },
        3: {
            id: 3,
            from: "Prizren",
            to: "Gjilan",
            duration: "3 hours",
            price: "7 EUR",
        },
        4: {
            id: 4,
            from: "Gjakova",
            to: "Mitrovica",
            duration: "2 hours 15 minutes",
            price: "4 EUR",
        },
        5: {
            id: 5,
            from: "Prishtina",
            to: "Gjilan",
            duration: "2 hours",
            price: "6 EUR",
        },
        6: {
            id: 6,
            from: "Peja",
            to: "Gjakova",
            duration: "1 hour 30 minutes",
            price: "2.5 EUR",
        },
        7: {
            id: 7,
            from: "Gjilan",
            to: "Prishtina",
            duration: "2 hours 15 minutes",
            price: "6 EUR",
        },
        8: {
            id: 8,
            from: "Prizren",
            to: "Peja",
            duration: "2 hours",
            price: "4 EUR",
        },
        9: {
            id: 9,
            from: "Ferizaj",
            to: "Prishtina",
            duration: "1 hour",
            price: "3 EUR",
        },
        10: {
            id: 10,
            from: "Ferizaj",
            to: "Peja",
            duration: "3 hours 30 minutes",
            price: "6.5 EUR",
        }
    };
    console.log("Route Details:", routeDetails); // Debug statement to check the value of routeDetails

    const selectedRoute = routeDetails[id];

    if (!selectedRoute) {
        return <div>Route not found!</div>;
    }

    return (
        <div className="container">
            <h2 className="mt-3 mb-4">Route Details</h2>
            <h4 style={{marginTop:'5%'}}>{`${selectedRoute.from} - ${selectedRoute.to}`}</h4>
            <p>Duration: {selectedRoute.duration}</p>
            <p>Price: {selectedRoute.price}</p>
            <p className="mb-2">Enjoy breathtaking views of the countryside and mountains along this scenic route!</p>
            <Link to='/lines' className="btn btn-secondary" style={{marginBottom:'8%'}}>Shko mbrapa</Link>
        </div>
    );
}

export default RouteDetailsPage;