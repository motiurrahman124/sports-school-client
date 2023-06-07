import { useForm } from "react-hook-form";
import "./Login.css";
import { FcGoogle } from "react-icons/fc";

const Login = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <div className="bg-primary flex border-b">
      <div className="lg:w-1/2  hidden min-h-screen lg:flex items-center justify-center">
        <img
          src="https://i.ibb.co/HnTqKW7/depositphotos-21113977-stock-photo-two-football-players-striking-the.webp"
          className="w-full h-full"
          alt=""
        />
      </div>
      <div className="lg:w-1/2 mx-auto mb-20 mt-20">
        <div className="">
          <div className=" text-center mx-auto">
            <div className="flex justify-center ">
              <img
                src="https://i.ibb.co/r6t5b3R/images-removebg-preview-1.png"
                className="h-[124px] w-[124px]"
                alt="logo"
              />
            </div>
            <h1 className="font-oswald text-2xl md:text-4xl uppercase font-bold text-white">
              <span className="text-secondary">Sports</span> School
            </h1>
            <h3 className="text-xl uppercase text-secondary font-semibold mt-4">
              Login Here
            </h3>
          </div>
          <div className="login py-8 max-w-[400px] min-w-[250px] mx-auto">
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
              <input
                className="py-3 px-3 w-full box-border rounded-lg"
                name="password"
                placeholder="Enter password"
                type="password"
                {...register("password", {
                  required: true,
                })}
              />
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
            <div className="divider text-white mt-10">OR</div>
            <div className="border border-[#D0D0D0] rounded-[8px] h-[90px] w-[90px] flex items-center justify-center transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg cursor-pointer mx-auto mt-10 hover:bg-secondary ">
              <FcGoogle size={30} />
            </div>
          </div>
        </div>

        {/* <SocialLogins /> */}
      </div>
    </div>
  );
};

export default Login;
