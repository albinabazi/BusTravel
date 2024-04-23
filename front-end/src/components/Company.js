import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Company = () => {
    const [dbCompany, setdbCompany] = useState([]);
    const [sorted, setSorted] = useState({ sorted: 'id', reversed: false });

    function getCompanies() {
        const url = 'https://localhost:3000/api/company/companies';
        fetch(url)
            .then(response => response.json())
            .then(companiesFromServer => {
                console.log(companiesFromServer);
                setdbCompany(companiesFromServer);
            })
            .catch(error => {
                console.log(error);
            });
    }

    function deleteCompanies(companyId) {
        const url = `https://localhost:3000/api/company/company/${companyId}`;
        fetch(url, {
            method: 'DELETE',
        })
            .then(response => {
                if (response.ok) {
                    console.log(response);
                    alert('Kompania u fshi me sukses!');
                    getCompanies();
                } else {
                    throw new Error('Failed to delete company.');
                }
            })
            .catch(error => {
                console.log(error);
                alert('Kjo kompani nuk mund te fshihet!');
            });
    }

    const sortByName = () => {
        setSorted({ sorted: "", reversed: !sorted.reversed });
        const companyCopy = [...dbCompany];
        companyCopy.sort((companyA, companyB) => {
            const fullnameA = companyA.name;
            const fullnameB = companyB.name;

            if (sorted.reversed) {
                return fullnameB.localeCompare(fullnameA);
            }

            return fullnameA.localeCompare(fullnameB);
        });

        setdbCompany(companyCopy);
    };

    useEffect(getCompanies, []);

    return (
        <div className="container mb-5">
            <h3 className="text-center my-4" style={{ fontFamily: 'Inter', color: '#0a4668' }}>Kompanite</h3>
            <div className="table-responsive">
                <table className="table table-striped">
                    <thead className="thead-dark">
                        <tr>
                            <th scope="col">Kompania ID</th>
                            <th scope="col">Emri</th>
                            <th scope="col">Numri i autobusave</th>
                            <th scope="col">Numri i telefonit</th>
                            <th scope="col">Email</th>
                            <th scope="col" colSpan="2" className="text-center">
                                <Link to="/addCompany" className="btn btn-secondary">Shto Kompani</Link>
                            </th>
                            <th scope="col">
                                <button className="btn btn-outline-secondary btn-sm" onClick={sortByName}>Sort</button>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {dbCompany.map(dbCompany => (
                            <tr key={dbCompany.companyId}>
                                <td>{dbCompany.companyId}</td>
                                <td>{dbCompany.name}</td>
                                <td>{dbCompany.numberOfBuses}</td>
                                <td>{dbCompany.phoneNumber}</td>
                                <td>{dbCompany.email}</td>
                                <td>
                                    <Link to={`/editCompany/${dbCompany.companyId}`} className="btn btn-outline-secondary btn-sm">Edito</Link>
                                </td>
                                <td>
                                    <button type="button" className="btn btn-secondary btn-sm" onClick={() => { if (window.confirm(`A jeni i sigurt qe doni te fshini Kompanine? "${dbCompany.companyId}"? `)) deleteCompanies(dbCompany.companyId) }}>Fshi</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default <Company/>;