import * as React from "react";
import MenuIcon from '@mui/icons-material/Menu';

const Header = () => (
    <header className="px-5 py-6 w-full bg-[color:var(--color-primary)]">
        <div className="max-w-[1140px] mx-auto flex justify-between items-center">
            {/* First Column */}
            <div className="flex items-center">
            <MenuIcon className="[color:var(--color-neutral-white)] md:mr-10 mr-3 md:scale-150 scale-100" />
                <img src="/RainyDaysLogo.png" alt="Rainy Days Logo" className="md:w-[60px] w-[40px]" />
            </div>

            {/* Second Column */}
            <div className="flex items-center">
                <img src="/notificationIcon.png" className="md:w-[50px] w-[30px] md:mr-10 mr-3" />
                <img src="/profileLink.png" className="md:w-[50px] w-[30px]" />
            </div>
        </div>
    </header>
);

export default Header;
