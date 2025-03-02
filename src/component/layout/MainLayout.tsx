import { Layout } from "antd";
import { Outlet } from "react-router-dom";
import SideBar from "./SideBar";
import { Button } from "antd/es/radio";
import { useAppDispatch } from "../../redux/hooks";
import { logOut } from "../../redux/feature/auth/AuthSlice";
import { toast } from "sonner";

const { Header, Content, Footer } = Layout;

const MainLayout = () => {
  const dispatch = useAppDispatch();
  const handleLogout = () => {
    dispatch(logOut());
    toast.success("Logged Out");
  };
  return (
    <div>
      <Layout style={{ height: "100%" }}>
        <SideBar />
        <Layout>
          <Header style={{ padding: 0 }}>
            <Button onClick={handleLogout}> Logout</Button>
          </Header>
          <Content style={{ margin: "24px 16px 0" }}>
            <div
              style={{
                padding: 24,
                minHeight: 360,
              }}
            >
              <Outlet></Outlet>
            </div>
          </Content>
          <Footer style={{ textAlign: "center" }}>
            Ant Design ©{new Date().getFullYear()} Created by Ant UED
          </Footer>
        </Layout>
      </Layout>
    </div>
  );
};

export default MainLayout;
