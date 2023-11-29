import { useContext, useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from 'sweetalert2';


const SurveyDetails = () => {

    const { user } = useContext(AuthContext);
    // const { _id } = useParams();
    const navigate = useNavigate();
    const data = useLoaderData();
    const [selectedCategory, setSelectedCategory] = useState('Appropriate');
    const [report, setReport] = useState(false);
    const [reportStatus, setReportStatus] = useState('Appropriate');



    const { title, description, options, category, timestamp } = data;
    // console.log(title);

    const handleCategoryChange = (event) => {
        setSelectedCategory(event.target.value);
    }
    const handleReportChange = () => {
        setReport((prevReport) => !prevReport);

        if (report === true) {
            setReportStatus('Appropriate');
        }
        else {
            setReportStatus('Inappropriate');
        }
    };

    console.log(report, reportStatus);

    const handleVote = (event) => {
        event.preventDefault();

        const form = event.target;
        const email = user?.email;
        const title = data.title;
        const description = data.description;
        const deadline = data.timestamp;
        const category = data.category;
        const comment = form.comment.value;
        const option = selectedCategory;
        const likeStatus = form.querySelector('input[name="radio-1"]:checked')?.value;
        const report = reportStatus;

        const addVote = {
            email,
            title,
            deadline,
            description,
            category,
            option,
            comment,
            likeStatus,
            report
        };
        console.log(addVote);

        fetch('http://localhost:5000/votes', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(addVote)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    Swal.fire({
                        icon: "success",
                        title: "Vote added successfully",
                        showConfirmButton: false,
                        timer: 1500
                    });
                    navigate(location?.state ? location?.state : '/dashboard/surveyList');
                }
            })
            .catch(err => {
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "Something went wrong!"
                });
                console.log(err)
            })
    }

    return (
        <div className="pt-28 mb-20">
            <div className="max-w-xl border-2 rounded-md mx-auto text-center">
                <h3 className="text-3xl font-bold m-5">Survey Details</h3>
                <form onSubmit={handleVote} className="card-body">
                    <div className="grid grid-cols-2 gap-5 text-left mx-auto justify-center">
                        <div className="">
                            <label className="label label-text p-0" >Survey Title</label>
                            <p name='title' value={title} className="font-semibold">{title}</p>
                        </div>

                        <div>
                            <label className="label label-text p-0" >Description</label>
                            <p className="font-semibold">{description}</p>
                        </div>

                        <div className="">
                            <label className="label label-text p-0" >Deadline</label>
                            <p className="font-semibold">{timestamp}</p>
                        </div>

                        <div className="">
                            <label className="label label-text p-0" >Survey Category</label>
                            <p className="font-bold text-yellow-400">{category}</p>
                        </div>
                        <div>
                            <label className="label label-text p-0 mb-1" >Select an option</label>
                            <div className="form-control">
                                <select
                                    name="category"
                                    value={selectedCategory}
                                    onChange={handleCategoryChange}
                                    className="select select-bordered w-56 select-xs"
                                    required
                                >
                                    {
                                        options.map((optValue, index) => (
                                            <option key={index}
                                                value={optValue}
                                                className="" >{optValue}</option>
                                        ))
                                    }
                                </select>
                            </div>
                        </div>

                        <div className="">
                            <label className="label label-text p-0" >Voter</label>
                            <p className="font-semibold">{user?.email}</p>
                        </div>

                    </div>
                    <div className="mt-4">
                        <input type="text" placeholder="Comment" name="comment" className="input input-sm input-bordered w-full max-w-full" />
                    </div>

                    <div className="mt-4 flex justify-between items-center">
                        <div className="flex gap-5 items-center">
                            <div className="flex gap-1 items-center">
                                <input type="radio" name="radio-1" className="radio radio-sm" value='like' />
                                <label >Like</label>
                            </div>
                            <div className="flex gap-1 items-center">
                                <input type="radio" name="radio-1" className="radio radio-sm" value='dislike' />
                                <label >Dislike</label>
                            </div>
                        </div>
                        <div className="form-control">
                            <label className="label cursor-pointer gap-3">
                                <span className="label-text">Report</span>
                                <input
                                    type="checkbox"
                                    name="report" // Add name attribute
                                    checked={report}
                                    onChange={handleReportChange}
                                    className="checkbox checkbox-xs rounded-sm"
                                />
                            </label>
                        </div>

                    </div>

                    {
                        user ?
                            <div className="form-control">
                                <button type="submit" className="btn btn-sm w-1/2 mx-auto mt-10 first-letter: bg-yellow-300 text-black uppercase hover:bg-yellow-400 hover-bg-blue-600">Vote</button>
                                <input />
                            </div>
                            : <div className="form-control">
                                <button type="submit" className="btn btn-sm w-1/2 mx-auto mt-10 first-letter: bg-yellow-300 text-black uppercase hover:bg-yellow-400 hover-bg-blue-600" disabled>Vote</button>
                            </div>
                    }

                </form>
            </div >
        </div>

    );
};

export default SurveyDetails;