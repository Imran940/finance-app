import NavigationWrapper from "./styles";
import { MdAssignmentAdd } from "react-icons/md";
import { FaListAlt, FaUserCircle } from "react-icons/fa";
function Navigation() {
  return (
    <NavigationWrapper className="topbar-container">
      <img
        src="/images/finance-logo.jpg"
        alt="finance-logo"
        className="finance-logo"
      />

      <div className="topbar-menu-container">
        <div className="topbar-menu">
          <MdAssignmentAdd className="topbar-menu-icon" /> <span>Add</span>
        </div>
        <div className="topbar-menu">
          <FaListAlt className="topbar-menu-icon" /> <span>List</span>
        </div>
        <div className="topbar-menu">
          <FaUserCircle className="topbar-menu-icon" /> <span>Imran</span>
        </div>
      </div>
    </NavigationWrapper>
  );
}

export default Navigation;
