import Swal from "sweetalert2";
import PropTypes from 'prop-types';
const MyRecommendation = ({item,idx,onDelete}) => {
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
                fetch(`https://assignment-11-server-pi-six.vercel.app/recommendation/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                     
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your recommendation has been deleted.",
                                icon: "success"
                            });
                            onDelete(id)

                        }
                    })
            }
        });

    }







    return (
        <tr className="hover:bg-blue-500 border-blue-300">
        <th>{idx +1}</th>
        <td>{item.query_product_name}</td>
        <td>{item.recommended_product_name}</td>
        <td>{item.date}</td>
        <td><button className="hover:text-red-700" onClick={()=>handleDelete(item._id)}>Delete</button></td>
      </tr>
    );
};


MyRecommendation.propTypes ={
    item:PropTypes.object,
    idx:PropTypes.number,
    onDelete:PropTypes.func
  }

export default MyRecommendation;