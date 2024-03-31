import { useEffect, useState } from "react";
import Job from "../Job/Job";

const Featured = () => {
    const [jobs,setJobs] = useState([]);
    const [dtaLength,setDataLength] = useState(4);
    useEffect(()=>{
        fetch('jobs.json')
        .then(res => res.json())
        .then(data => setJobs(data));
    },[])
    return (
        <div>
             <div className="text-center">
                <h2 className="text-5xl">Featured List:{jobs.length}</h2>
                <p>Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
            <div className="grid grid-cols-2">
                {
                    jobs.slice(0,dtaLength).map(job => <Job key={job.id} job={job}></Job>)
                }
            </div>
            <div className={ dtaLength === jobs.length && 'hidden'}>
                <button onClick={()=>setDataLength(jobs.length)}
                 className="  btn btn-primary">Show all data</button>
            </div>
        </div>
    );
};

export default Featured;