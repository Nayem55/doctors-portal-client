import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import Service from './service'

const AvailableAppointments = ({selected}) => {
    const [services,setServices]= useState([]);
    useEffect(()=>{
        fetch('services.json')
        .then(res=>res.json())
        .then(data=>setServices(data))
    },[])
    return (
        <div className='mx-8 md:mx-16 lg:mx:16'>
            <p className='text-center text-primary text-xl mx-8 font-bold'>Available Appointments on {format(selected, "PP")}</p>
            <p className='text-center text-secondary opacity-60 mb-8 lg:mb-16'>Please select a service</p>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-32'>
                {
                    services.map(service=><Service key={service._id} service={service}></Service>)
                }
            </div>
        </div>
    );
};

export default AvailableAppointments;