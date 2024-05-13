import { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import { AuthContext } from "../Components/AuthProvider";
import {  FaGoogle } from "react-icons/fa";
import axios from "axios";



const Login = () => {
  const { signIn, googleLogin } = useContext(AuthContext)

  const location = useLocation()
  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = data => {
    const { email, password } = data

    signIn(email, password)
      .then(() => {
        const user = {email}
        axios.post('http://localhost:5000/jwt',user,{withCredentials:true})
        .then(data =>{
          if(data.data.success){
             navigate(location?.state ? location.state : '/')
        toast.success('Login Success')
          }
        })
       
      })
      .catch(() => {
        toast.error('something went wrong')
      })

  }


  const handleGoogleLogin = () => {
    googleLogin()
    .then((result) => {
      
      axios.post('http://localhost:5000/jwt',{email:result?.user?.email},{withCredentials:true})
      .then(data =>{
        if(data.data.success){
           navigate(location?.state ? location.state : '/')
      toast.success('Login Success')
        }
      })
     
    })
      .catch(err => console.log(err))
  }




  return (
 <div className="flex flex-col lg:flex-row">

<div className=" flex justify-center  w-full lg:ml-20">
  <img className="w-4/6" src="https://i.ibb.co/jHJhw5D/file-4.png" alt="" />
</div>




<div className="hero mt-14 mb-14">

<div className="hero-content flex-col w-full">
  <div className="text-center lg:text-left">


  </div>
  <div className="card shrink-0 w-full max-w-sm  bg-base-100 border-2">

    <form onSubmit={handleSubmit(onSubmit)} className="card-body">
    <h1 className="text-4xl md:text-5xl text-blue-900 text-center mb-6 font-bold">Login</h1>
      <div className="form-control">
        <label className="label">
          <span className="label-text">Email</span>
        </label>
        <input name="email" type="email" placeholder="email" className="input input-bordered"
          {...register("email", { required: true })}
        />
        {errors.email && (
          <span className="text-red-500">This field is required</span>
        )}
      </div>

      <div className="form-control">
        <label className="label">
          <span className="label-text">Password</span>
        </label>
        <input name="password" type="password" placeholder="password" className="input input-bordered"
          {...register("password", { required: true })}
        />
        {errors.password && (
          <span className="text-red-500">This field is required</span>
        )}


      </div>
      <div className="form-control mt-6">
        <button className="btn border-0 bg-blue-600 hover:bg-blue-800 btn-primary">Login</button>
      </div>
    </form>
<div className="divider mx-5">or login with</div>
    <div className="">

      <button onClick={handleGoogleLogin} className="border-2 flex items-center justify-center rounded-xl hover:bg-blue-50 border-blue-900 py-1 text-blue-900 font-bold text-xl gap-2  w-72 mx-auto p-"><FaGoogle className="text-blue-700"></FaGoogle> Google</button><br />
      

    

    </div>
    <div>
      <p className="text-center mt-5 mb-2">Do Not Have Account? <Link className="text-blue-800 font-bold" to={'/register'}>Register now</Link></p>
    </div>
  </div>
</div>
</div>
 </div>
  );
};


export default Login;