import * as React from "react";
import MenuIcon from '@mui/icons-material/Menu';
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const goToHomepage = () => {
    navigate("/");
  }

  return (
    <header className="px-5 py-6 w-full bg-[color:var(--color-primary)]">
      <div className="max-w-[1140px] mx-auto flex justify-between items-center">
        <div className="flex items-center">
        <MenuIcon className="[color:var(--color-neutral-white)] md:mr-5 mr-3 scale-100" />
          <img onClick={goToHomepage} src="/RainyDaysLogo.png" alt="Rainy Days Logo" className="w-[40px] cursor-pointer" />
        </div>
        <div className="flex items-center">
          <img src="/notificationIcon.png" className="w-[30px] md:mr-5 mr-3" />
          <img src="/profileLink.png" className="w-[30px]" />
        </div>
      </div>
    </header>
  );
};

export default Header;
