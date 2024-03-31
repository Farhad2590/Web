import { CiLocationOn } from "react-icons/ci";
import { RiMoneyDollarCircleFill } from "react-icons/ri";
import { Link } from "react-router-dom";
const Job = ({ job }) => {
    const {id, logo, job_title, company_name, remote_or_onsite, job_type, location, salary } = job;
    return (
        <div className=" bg-slate-100 m-5 p-5 space-y-5 rounded-2xl">
            <img src={logo} alt="" />
            <h4 className="text-xl">{job_title}</h4>
            <p>{company_name}</p>
            <div className="flex gap-5">
                <button className="btn btn-outline btn-primary">{remote_or_onsite}</button>
                <button className="btn btn-outline btn-primary">{job_type}</button>
            </div>
            <div className="flex gap-10 items-center">
                <div className="flex gap-2 items-center">
                    <CiLocationOn />
                    {location}
                </div>
                <div className="flex gap-2 items-center">
                    <RiMoneyDollarCircleFill />
                    {salary}
                </div>
            </div>
            <Link to={`/job/${id}`}>
                <button className="btn btn-active btn-primary">View Details</button>
            </Link>
        </div>
    );
};

export default Job;