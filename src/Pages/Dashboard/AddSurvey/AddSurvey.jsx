import { useForm } from "react-hook-form";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";

const AddSurvey = () => {
    const { register, handleSubmit, reset } = useForm();
    const axiosSecure = useAxiosSecure();
    const onSubmit = async (data) => {
        try {
            const newSurvey = {
                title: data.title,
                description: data.description,
                category: data.category,
                surveyDeadline: data.surveyDeadline,
                totalVotes: 0
            };
            const surveyRes = await axiosSecure.post("/surveys", newSurvey);

            if (surveyRes.data.insertedId) {
                reset();
                Swal.fire({
                    icon: "success",
                    title: `${data.title} is added to the survey.`,
                    showConfirmButton: false,
                    timer: 1500,
                });
            }
        } catch (error) {
            console.error("Error adding survey:", error);
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)} className="w-1/2 mx-auto mt-10">
                <h3 className=" text-2xl font-semibold">Add New Survey</h3>
                <div className="form-control w-full my-6">
                    <label className="label">
                        <span className="label-text">Survey Title</span>
                    </label>
                    <input
                        type="text"
                        placeholder="Survey Title"
                        {...register('title', { required: true })}
                        required
                        className="input input-sm input-bordered w-full" />
                </div>
                <div className="form-control w-full my-6">
                    <label className="label">
                        <span className="label-text">Description</span>
                    </label>
                    <input
                        type="text"
                        placeholder="Description"
                        {...register('description', { required: true })}
                        required
                        className="input input-sm input-bordered w-full" />
                </div>
                <div className="form-control w-full my-6">
                    <label className="label">
                        <span className="label-text">Deadline</span>
                    </label>
                    <input
                        type="text"
                        placeholder="Deadline"
                        {...register('surveyDeadline', { required: true })}
                        required
                        className="input input-sm input-bordered w-full" />
                </div>
                <div className="flex gap-6">
                    {/* category */}
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Category*</span>
                        </label>
                        <select defaultValue="default" {...register('category', { required: true })}
                            className="select select-sm select-bordered w-full">
                            <option disabled value="default">Select a category</option>
                            <option value="Technology">Technology</option>
                            <option value="Food">Food</option>
                            <option value="Health">Health</option>
                            <option value="Work">Work</option>
                        </select>
                    </div>
                </div>
                <button className="btn btn-sm bg-yellow-400 hover:bg-slate-900 hover:text-white mt-5">
                    Add Survey
                </button>
            </form>
        </div>
    );
};

export default AddSurvey;