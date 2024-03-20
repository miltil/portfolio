import * as React from "react";
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';

const Footer = ({ }) => (
    <footer className="flex justify-center items-center px-16 py-6 mt-24 w-full bg-[color:var(--color-neutral-dark)]">
    <div className="flex gap-2.5">
    <FacebookIcon fontSize="large" className="[color:var(--color-neutral-white)]"/>
    <TwitterIcon fontSize="large" className="[color:var(--color-neutral-white)]"/>
    </div>
    </footer>
);

export default Footer;
