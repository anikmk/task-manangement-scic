import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import Swal from "sweetalert2";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { NavLink } from "react-router-dom";
const TaskManageRow = ({task}) => {
    const axiosPublic = useAxiosPublic();

    const handleDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
              axiosPublic.delete(`/deleteTask/${id}`)
              .then(res=>{
                console.log(res.data)
                Swal.fire({
                    title: "Deleted!",
                    text: "Your task has been deleted.",
                    icon: "success"
                  });
              })
            }
          });
    }

    return (
      <tr>
        <td> {task.titles} </td>
        <td> {task.priority} </td>
        <td> {task.deadline} </td>
        <td> {task.descriptions} </td>
        <td> <button onClick={()=>handleDelete(task._id)} className="text-xl text-red-700"><MdDelete /></button> </td>

        <td> <NavLink to='/dashboard/updateTask'><button className="text-xl text-green-900"><FaEdit /></button></NavLink> </td>
      </tr>
        
    );
};

export default TaskManageRow;