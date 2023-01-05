import React from 'react';
import './Statics.css'
import { useLoaderData } from 'react-router-dom';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, } from 'recharts';


const Statistics = () => {
    const course = useLoaderData();
    const courses = course.data;
    console.log(courses)

    return (
        <div className='container m-auto chart my-5'>
            <ResponsiveContainer minWidth={260} minHeight={250}>
            <LineChart
                data={courses}
                margin={{
                    top: 5,
                    right: 10,
                    left: 10,
                    bottom: 5
                }}
            >
                <CartesianGrid strokeDasharray="2 2" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line
                    type="monotone"
                    dataKey="total"
                    activeDot={{ r: 8 }}
                />
            </LineChart>
        </ResponsiveContainer>
        </div>
    );
};

export default Statistics;