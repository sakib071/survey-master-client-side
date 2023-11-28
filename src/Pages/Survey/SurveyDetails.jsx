import { useContext, useState } from "react";
import { useParams, useLoaderData } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";


const SurveyDetails = () => {

    const { user } = useContext(AuthContext);
    const { _id } = useParams();
    const data = useLoaderData();
    const [selectedCategory, setSelectedCategory] = useState([]);

    const handleCategoryChange = (event) => {
        setSelectedCategory(event.target.value);
    }
    const { title, description, options, category, timestamp } = data;
    console.log(title);

    const handleBid = () => {

    }

    return (
        <div className="pt-28 mb-20">
            <div className="max-w-xl border-2 rounded-md mx-auto text-center">
                <h3 className="text-3xl font-bold m-5">Survey Details</h3>
                <div className="card-body">
                    <div className="grid grid-cols-2 gap-5 text-left mx-auto justify-center">

                        <div className="">
                            <label className="label label-text p-0" >Survey Title</label>
                            <p className="font-semibold">{title}</p>
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
                                                type="radio"
                                                value={optValue}
                                                name="radio-1"
                                                className="radio radio-sm" >{optValue}</option>
                                        ))
                                    }
                                </select>
                            </div>

                        </div>


                        {/* <div className="flex flex-col gap-2">
                            <input type="radio" defaultValue={option} name="radio-1" className="radio radio-sm" />
                            <input type="radio" name="radio-1" className="radio radio-sm" />
                        </div> */}

                        <div className="">
                            <label className="label label-text p-0" >Email</label>
                            <p className="font-semibold">{user?.displayName}</p>
                        </div>

                    </div>

                    <div className="divider"></div>

                    <div onClick={() => handleBid(_id)} className="form-control">
                        <input type="submit" className="btn btn-sm w-1/2 mx-auto first-letter: bg-yellow-300 text-black uppercase hover:bg-yellow-400 hover-bg-blue-600" value="Vote" />
                    </div>
                </div>
            </div >
        </div>

    );
};

export default SurveyDetails;

// title
// description
// options
// category
// timestamp
// totalVotes
