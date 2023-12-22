import { useForm } from "react-hook-form";
import useAuth from "../../hooks/useAuth";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";


const UpdatedTask = () => {
    const {user,loading} = useAuth();
    const axiosPublic = useAxiosPublic();
    const [tasks,setTasks] = useState([])
    console.log(tasks.titles)
   useEffect(()=>{
    axiosPublic.get(`/update/${user?.email}`)
    .then(res=>{
        setTasks(res.data)
    })
   },[axiosPublic,user?.email])
    const { register, handleSubmit } = useForm();
    const onSubmit = async(data) => {
        const updateTask = {
             titles: data.titles,
             type: data.type,
             priority: data.priority,
             deadline: data.deadline,
             descriptions: data.descriptions,
             email: user?.email
        }
        console.log(updateTask)
        
         await axiosPublic.patch(`/updateTask/${tasks._id}`,updateTask)
        .then(res=>{
          console.log(res.data)
          if(res.data.modifiedCount > 0){
            Swal.fire({
              title: "Good job!",
              text: "Your Task Updated",
              icon: "success"
            });
          }

        })
        
    };

    if(loading){
        return <div className="progress">loading....</div>
    }
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
              defaultValue={tasks.titles}
              className="input input-bordered w-full"
            />
          </div>
          <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Type</span>
              </label>
              <select
                defaultValue={tasks.type}
                {...register("type")}
                className="select select-bordered w-full"
              >
                <option disabled value={tasks.type}>
                  {tasks.type}
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
                defaultValue={tasks.priority}
                {...register("priority")}
                className="select select-bordered w-full"
              >
                <option disabled value={tasks.priority}>
                  {tasks.priority}
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
                defaultValue={tasks.deadline}
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
                defaultValue={tasks.descriptions}
                placeholder="Enter Task Descriptions...."
              ></textarea>
            </div>
          <button className="bg-[#3b2b79ec] py-3 px-5 text-white font-semibold rounded-lg hover:bg-transparent hover:border hover:text-black hover:border-[#3b2b79ec] mt-4 transition-all">
            Save Task
          </button>
        </form>
      </div>
    );
};

export default UpdatedTask;