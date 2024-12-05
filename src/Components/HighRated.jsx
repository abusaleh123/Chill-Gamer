import React, { useEffect, useState } from 'react';

const HighRated = () => {
    const [highRate, setHighRate] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/reviews')
        .then(res => res.json())
        .then(data => setHighRate(data))
        .catch(error => {
            console.log(error.message);
        })
    },[])

    return (
        <div>
            Hello
        </div>
    );
};

export default HighRated;