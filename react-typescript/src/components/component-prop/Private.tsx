import Login from "./Login";
import { ProfileProps } from "./Profile";

type PrivatePropType = {
  isLogin: boolean;
  component: React.ComponentType<ProfileProps>;
};

const Private = ({ isLogin, component: Component }: PrivatePropType) => {
  return isLogin ? <Component name="Hardik" /> : <Login />;
};

export default Private;
