import React from "react";
import { BsBusFrontFill } from "react-icons/bs";
import { HiLocationMarker } from "react-icons/hi";
import { MdOutlineWork } from "react-icons/md";
import { AiOutlineDashboard, AiOutlineFieldTime, AiOutlineUser } from "react-icons/ai";
import { PieChart, Pie, Tooltip, ResponsiveContainer, AreaChart, Area, XAxis, YAxis, CartesianGrid } from 'recharts';

const AdminDashboard = () => {
  const data = [
    { name: 'Prishtine', value: 54 },
    { name: 'Prizren', value: 43 },
    { name: 'Peje', value: 41 },
    { name: 'Gjakove', value: 34 },
    { name: 'Ferizaj', value: 19 },
    { name: 'Mitrovice', value: 26 },
    { name: 'Gjilan', value: 36 },
  ];

  const data2 = [
    { name: '2019', Number: 728 },
    { name: '2020', Number: 1267 },
    { name: '2021', Number: 1965 },
    { name: '2022', Number: 1869 },
    { name: '2023', Number: 2340 },
    { name: '2024', Number: 2920 },
  ];

  return (
    <div className="admin-dashboard">
      <nav className="sidebar">
        <div className="sidebar-header ">
          <h3 className="mt-4">Paneli i Adminit</h3>
        </div>
        <ul className="list-group list-group-horizontal d-flex justify-content-center mt-3 mb-5">
          <li className="list-group-item">
            <a href="/dashboard" className="d-flex align-items-center text-decoration-none text-black">
              <AiOutlineDashboard />
              <span className="ms-2">Dashboard</span>
            </a>
          </li>
          <li className="list-group-item">
            <a href="/location" className="d-flex align-items-center text-decoration-none text-black">
              <HiLocationMarker />
              <span className="ms-2">Lokacionet</span>
            </a>
          </li>
          <li className="list-group-item">
            <a href="/company" className="d-flex align-items-center text-decoration-none text-black">
              <MdOutlineWork />
              <span className="ms-2">Kompanite</span>
            </a>
          </li>
          <li className="list-group-item">
            <a href="/busItinerary" className="d-flex align-items-center text-decoration-none text-black">
              <AiOutlineFieldTime />
              <span className="ms-2">Itineraret</span>
            </a>
          </li>
          <li className="list-group-item">
            <a href="/busLines" className="d-flex align-items-center text-decoration-none text-black">
              <BsBusFrontFill />
              <span className="ms-2">Linjat</span>
            </a>
          </li>
          <li className="list-group-item">
            <a href="/Feedback" className="d-flex align-items-center text-decoration-none text-black">
              <AiOutlineUser />
              <span className="ms-2">Feedbacks</span>
            </a>
          </li>
        </ul>
      </nav>

      <main className="main-content">
        <header className="header">
          <h2>Miresevini ne Panelin e Adminit!</h2>
        </header>
        <section className="statistics d-flex justify-content-between" style={{maxWidth:'40%', marginLeft:'30%'}}>
          <div className="stat-box">
            <div className="stat-icon mt-3"><AiOutlineDashboard size={24} /></div>
            <div className="stat-description">1360</div>
            <div className="stat-text">Perdorues</div>
          </div>
          <div className="stat-box">
            <div className="stat-icon mt-3"><BsBusFrontFill size={24} /></div>
            <div className="stat-description">78</div>
            <div className="stat-text">Linja</div>
          </div>
          <div className="stat-box">
            <div className="stat-icon mt-3"><AiOutlineFieldTime size={24} /></div>
            <div className="stat-description">140</div>
            <div className="stat-text">Rezervime ne dite (avg)</div>
          </div>
          <div className="stat-box">
            <div className="stat-icon mt-3" style={{ color: 'red' }}><AiOutlineUser size={24} /></div>
            <div className="stat-description">12</div>
            <div className="stat-text">Perdorues te humbur</div>
          </div>
        </section>
        <section className="charts">
          <div className="chart mt-5">
            <h2>Linjat sipas qytetit</h2>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie data={data} dataKey="value" label />
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="chart mt-5 mb-5">
            <h2>Rritja e perdoruesve nder vite</h2>
            <ResponsiveContainer width="100%" height={300}>
              <AreaChart data={data2}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Area type="monotone" dataKey="Number" stroke="#8884d8" fill="#8884d8" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </section>
      </main>
    </div>
  );
}

export default <AdminDashboard />;