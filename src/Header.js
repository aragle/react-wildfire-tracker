import { Icon } from "@iconify/react";
import locationIcon from "@iconify/icons-mdi/fire-alert";

const Header = () => {
  return (
    <div className="header">
      <h1>
        <Icon icon={locationIcon} className="header-icon" />
        WildFire Tracker
        <Icon icon={locationIcon} className="header-icon" />
      </h1>
      <p>Data Provided by NASA</p>
    </div>
  );
};

export default Header;
