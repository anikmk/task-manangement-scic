import { useForm } from "react-hook-form";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";


const CreateNewTask = () => {
  const {user} = useAuth();
    const axiosPublic = useAxiosPublic();
    const { register, handleSubmit,reset } = useForm();
    

  const onSubmit = async(data) => {
    const createTaskData = {
         titles: data.titles,
         type: data.type,
         priority: data.priority,
         deadline: data.deadline,
         descriptions: data.descriptions,
         email: user?.email
    }
    const res = await axiosPublic.post('/createTask',createTaskData)
    if(res.data.insertedId){
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Your task has been saved",
        showConfirmButton: false,
        timer: 1500
      });
      reset();
    }
  };
    return (
        <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex gap-6">
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Titles</span>
            </label>
            <input
              type="text"
              {...register("titles")}
              placeholder="Enter Task Title"
              className="input input-bordered w-full"
            />
          </div>
          <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Type</span>
              </label>
              <select
                defaultValue='default'
                {...register("type")}
                className="select select-bordered w-full"
              >
                <option disabled value='default'>
                  select a type
                </option>
                <option value="developer">Developer</option>
                <option value="corporate">Corporate</option>
                <option value="bangker">Banker</option>
              </select>
            </div>
          </div>
          <div className="flex gap-6">
            {/* priority */}
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Priority</span>
              </label>
              <select
                defaultValue='default'
                {...register("priority")}
                className="select select-bordered w-full"
              >
                <option disabled value='default'>
                  select a priority
                </option>
                <option value="low">Low</option>
                <option value="moderate">Moderate</option>
                <option value="high">High</option>
              </select>
            </div>
            {/* deadline */}
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text"> Deadline*</span>
              </label>
              <input
                type="date"
                {...register("deadline")}
                placeholder="Deadline"
                className="input input-bordered w-full"
              />
            </div>
          </div>
           {/* descriptions*/}
           <div className="form-control">
              <label className="label">
                <span className="label-text">Descriptions</span>
              </label>
              <textarea
              {...register("descriptions")}
                className="textarea textarea-bordered h-24"
                placeholder="Enter Task Descriptions...."
              ></textarea>
            </div>
          <button className="btn mt-4">
            Add Task
          </button>
        </form>
      </div>
    );
};

export default CreateNewTask;