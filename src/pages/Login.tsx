import { Button } from "antd";
import { FieldValues, useForm } from "react-hook-form";
import { useLoginMutation } from "../redux/feature/auth/AuthApi";
import { useAppDispatch } from "../redux/hooks";
import { setUser, TUser } from "../redux/feature/auth/AuthSlice";
import { verifyToken } from "../utils/verifyToken";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

const Login = () => {
  const dispatch = useAppDispatch();
  const { register, handleSubmit } = useForm({
    defaultValues: {
      id: "A-0001",
      password: "admin123",
    },
  });
  const navigate = useNavigate();
  const [login] = useLoginMutation();

  const onSubmit = async (data: FieldValues) => {
    const toastID = toast.loading("Loading");
    try {
      const userInfo = {
        id: data.id,
        password: data.password,
      };
      const res = await login(userInfo).unwrap();
      const user = verifyToken(res.data.accessToken) as TUser;
      dispatch(setUser({ user: user, token: res.data.accessToken }));
      navigate(`/${user?.role}/dashboard`);
      toast.success("Successfully logged in", { id: toastID });
    } catch (err) {
      toast.error("Something Went Wrong", { id: toastID });
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className=" relative ">
        <input
          type="text"
          id="id"
          className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
          placeholder="Your Id"
          {...register("id")}
        />
      </div>
      <div className=" relative ">
        <input
          type="text"
          id="password"
          className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
          placeholder="Password"
          {...register("password")}
        />
      </div>
      <Button htmlType="submit">Log In</Button>
    </form>
  );
};

export default Login;
