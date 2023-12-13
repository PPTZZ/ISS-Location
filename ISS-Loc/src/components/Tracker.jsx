import { useState, useEffect } from 'react'
import '../assets/tracker.css'

const Tracker = ()=> {

    const [data, setData] = useState([])

    const url ='https://api.wheretheiss.at/v1/satellites/25544'

    const fetchInfo = () => { 
        return fetch(url) 
                .then((res) => res.json()) 
                .then((d) => setData(d))
                .catch(err => console.log(err))
        }

        // The commented part is  used to auto update the location but due to beeing 
        // a free APi it soon reaches the max calls allowed.
        useEffect(() => {
            // let timer = setInterval(()=>{
                fetchInfo();
            // }, 2000);

            // return ()=> {
            //     clearInterval(timer);
            // }
        }, []);
        


    return(
        <>
            <div className="coordonartes">
                <div className="lat container">
                    <h2>LATITUDE:</h2>
                    <h1 className="latitude">{String(data.latitude).slice(0, 7)}</h1>
                </div>
                <div className="long container">
                    <h2>LONGITUDE:</h2>
                    <h1 className="longitude">{String(data.longitude).slice(0, 7)}</h1>
                </div>
            </div>
        </>
    )


}



export default Tracker;