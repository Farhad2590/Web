import { useLoaderData, useParams } from "react-router-dom";

const JobDetails = () => {
    const jobs = useLoaderData();
    const {id} = useParams()
    const idInt = parseInt(id)
    const job = jobs.find(job => job.id === idInt)
    console.log(job.job_description);
    const {job_description ,job_responsibility} = job
    // console.log(id,jobs);
    return (
        <div>
            <h1>Job Details Of</h1>
            <div className="grid grid-cols-4 gap-6">
                <div className="border col-span-3">
                    <h4 className="text-xl"><span className="font-bold">Job Description:</span> {job_description}</h4>
                    <h4 className="text-xl"><span className="font-bold">Job Responsibility:</span> {job_responsibility}</h4>
                </div>
                <div className="border">  </div>

            </div>
        </div>
    );
};

export default JobDetails;