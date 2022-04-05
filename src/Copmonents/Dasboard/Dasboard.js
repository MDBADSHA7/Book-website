import React from 'react';
import { Area, Bar, BarChart, CartesianGrid, ComposedChart, Legend, Line, LineChart, Pie, PieChart, Tooltip, XAxis, YAxis } from 'recharts';
import './Dasboard.css'

const Dasboard = () => {
    const data = [
        {
            "month": "Mar",
            "investment": 100000,
            "sell": 10141,
            "revenue": 104201
        },
        {
            "month": "Apr",
            "investment": 200000,
            "sell": 227343,
            "revenue": 245010
        },
        {
            "month": "May",
            "investment": 500000,
            "sell": 523216,
            "revenue": 667010
        },
        {
            "month": "Jun",
            "investment": 500000,
            "sell": 528729,
            "revenue": 704805
        },
        {
            "month": "Jul",
            "investment": 600000,
            "sell": 409061,
            "revenue": 504900
        },
        {
            "month": "Aug",
            "investment": 700000,
            "sell": 614270,
            "revenue": 219000
        }
    ]
    return (
        <div className='dasboard'>
            <div>
                <h2 className='barchart'>Sell Vs Revenue Barchart</h2>
                <BarChart width={500} height={400} data={data}
                    margin={{ top: 30, right: 30, left: 100, bottom: 5 }} >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month"></XAxis>
                    <YAxis dataKey="investment"></YAxis>
                    <Tooltip></Tooltip>
                    <Legend></Legend>
                    <Bar dataKey="sell" fill="red" />
                    <Bar dataKey="revenue" fill="blue" />
                </BarChart></div>
            <div>
                <h2 className='linechart'>Sell Vs Revenue Linechart</h2>
                <LineChart width={500} height={400} data={data}
                    margin={{ top: 30, right: 30, left: 20, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis dataKey="investment" />
                    <Tooltip></Tooltip>
                    <Legend></Legend>
                    <Line type="monotone" dataKey="sell" stroke="brown" />
                    <Line type="monotone" dataKey="revenue" stroke="red" />
                </LineChart>
            </div>
            <div>
                <h2 className='piechart'>Investnent Vs Sell Piechart</h2>
                <PieChart width={500} height={400}
                    margin={{ top: 30, right: 30, left: 100, bottom: 5 }}>
                    <Pie data={data} dataKey="investment" cx="50%" cy="50%" outerRadius={50} fill="#8884d8" />
                    <Pie data={data} dataKey="sell" cx="50%" cy="50%" outerRadius={50} fill="orange" />
                    <Tooltip></Tooltip>
                    <Pie data={data} dataKey="revenue" cx="50%" cy="50%" innerRadius={60} outerRadius={80} fill="green" label />
                </PieChart>
            </div>
            <div>
                <h2 className='composedchart'>Revenue Vs Sell Composedchart</h2>
                <ComposedChart width={500} height={400} data={data}
                    margin={{ top: 30, right: 30, left: 50, bottom: 5 }}>
                    <XAxis dataKey="month" />
                    <YAxis dataKey="investment" />
                    <Tooltip></Tooltip>
                    <Legend></Legend>
                    <CartesianGrid stroke="blue" />
                    <Area type="monotone" dataKey="sell" fill="brown" stroke="#8884d8" />
                    <Bar dataKey="revenue" barSize={20} fill="indigo" />
                    <Line type="monotone" dataKey="sell" stroke="#ff7300" />
                </ComposedChart>
            </div>

        </div >

    );
};

export default Dasboard;