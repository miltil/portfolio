import * as React from "react";
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';

const Footer = () => (
    <footer className="flex justify-center items-center px-16 py-6 w-full bg-[color:var(--color-neutral-dark)]">
        <div className="flex gap-2.5">
            <FacebookIcon className="[color:var(--color-neutral-white)] scale-100" />
            <TwitterIcon className="[color:var(--color-neutral-white)] scale-100" />
        </div>
    </footer>
);

export default Footer;

