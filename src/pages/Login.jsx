import { useForm } from "react-hook-form";
import LoginRegistration from "../components/LoginRegistration/LoginRegistration";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { AuthContext } from "../providers/AuthProvider";

const Login = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const [show, setShow] = useState(false);
  const { signIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  

  const onSubmit = (data) => {
    signIn(data.email, data.password).then((result) => {
      const user = result.user;
      console.log(user);
      // Swal.fire({
      //     title: 'User Login Successful.',
      //     showClass: {
      //         popup: 'animate__animated animate__fadeInDown'
      //     },
      //     hideClass: {
      //         popup: 'animate__animated animate__fadeOutUp'
      //     }
      // });
      navigate(from, { replace: true });
    });
    };


  return (
    <LoginRegistration title={"Login Here"}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label className="block mb-2 text-white text-base font-medium">
          Email <span className="text-red-600">*</span>
        </label>
        <input
          className="py-3 px-3 w-full box-border rounded-lg"
          name="email"
          placeholder="Enter email"
          {...register("email", {
            required: true,
          })}
        />
        {errors?.email?.type === "required" && (
          <p className="text-red-500 mt-2 text-base font-medium">
            Please input your email
          </p>
        )}
        <label className="block mb-2 text-white text-base font-medium mt-5">
          Password <span className="text-red-600">*</span>
        </label>
        <div className="relative">
          <input
            className="py-3 px-3 w-full box-border rounded-lg"
            name="password"
            placeholder="Enter password"
            type={show ? "text" : "password"}
            {...register("password", {
              required: true,
            })}
          />
          <span
            className="absolute right-4 top-4 text-lg"
            role="button"
            onClick={() => setShow(!show)}
          >
            {show ? <FaEye /> : <FaEyeSlash />}
          </span>
        </div>

        {errors?.password?.type === "required" && (
          <p className="text-red-500 mt-2 text-base font-medium">
            Please input your password
          </p>
        )}
        <div className="mt-10 flex justify-center">
          <input
            className="btn bg-secondary border-secondary hover:bg-white hover:text-primary text-white font-medium text-lg capitalize transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg"
            type="submit"
            value="Login"
          />
        </div>
      </form>
      <div className="mt-5">
        <p className="text-center text-base text-white">
          Don&apos;t have an account ?{" "}
          <Link to="/register" className="text-secondary hover:underline">
            Sign Up
          </Link>
        </p>
      </div>
    </LoginRegistration>
  );
};

export default Login;
