import { useContext, useState } from "react";
import { LogOut } from "lucide-react";
import { UserContext } from "../Context/userContext";

const LogoutButton = () => {
  const [hovered, setHovered] = useState(false);
  const {logout}=useContext(UserContext)

  return (
    <button
      onClick={logout}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative flex items-center justify-center bg-red-600 text-white p-3 rounded-full hover:bg-red-700 transition-all duration-300"
    >
      <LogOut size={22} />

    
      {hovered && (
        <span className="absolute left-full ml-3 bg-gray-900 text-white text-sm px-3 py-1 rounded-md whitespace-nowrap shadow-lg transition-all duration-300">
          Logout
        </span>
      )}
    </button>
  );
};

export default LogoutButton;
