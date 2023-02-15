import { useContext } from "react";
import UserContext from "../utils/userContext";

const Footer = () => {
  const { user } = useContext(UserContext);
  return (
    <div className="h-20 text-center bg-pink-50 shadow-md text-lg font-bold">
      <h2 className="p-5 text-middle">
        Footer {user.name} - {user.email}
      </h2>
    </div>
  );
};

export default Footer;
