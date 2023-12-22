
import { useState } from "react";
import useAuth from "../../hooks/useAuth";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import TaskManageRow from "./TaskManageRow";

const TaskManage = () => {
    const {user,loading} = useAuth()
    const axiosPublic = useAxiosPublic();
    const [tasks,setTasks] = useState([])
    
    axiosPublic.get(`/createTask/${user?.email}`)
    .then(res=>{
        setTasks(res.data)
    })
    if(loading){
        return <div className="progress">loading....</div>
    }
    return (
        <div>
            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>Titles</th>
        <th>Prioritys</th>
        <th>Deadline</th>
        <th>Descriptions</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>

        {
            tasks?.map(task=><TaskManageRow task={task} key={task._id}></TaskManageRow>)
        }

    </tbody>
  </table>
</div>
        </div>
    );
};

export default TaskManage;