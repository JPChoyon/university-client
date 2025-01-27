
import { Button, Row } from "antd";
import { FieldValues } from "react-hook-form";
import { useLoginMutation } from "../redux/feature/auth/AuthApi";
import { useAppDispatch } from "../redux/hooks";
import { setUser, TUser } from "../redux/feature/auth/AuthSlice";
import { verifyToken } from "../utils/verifyToken";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import JpUniForm from "../component/form/JpUniForm";
import JpUniInput from "../component/form/JpUniInput";

const Login = () => {
  const dispatch = useAppDispatch();
  const defaultValues = {
    id: "A-0001",
    password: "admin123",
  };
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
    <Row justify="center" align="middle" style={{ height: "100vh" }}>
      <JpUniForm onSubmit={onSubmit} defaultValues={defaultValues}>
        <JpUniInput type="text" name="id" label="ID:" />
        <JpUniInput type="text" name="password" label="Password:" />
        <Button htmlType="submit">Log In</Button>
      </JpUniForm>
    </Row>
  );
};

export default Login;
