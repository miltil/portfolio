import * as React from "react";

const Header = () => (
    <header className="flex justify-between px-5 py-6 w-full bg-[color:var(--color-primary)]">
        <div className="flex flex-1 gap-3">
            <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/143d32b04086a23672ad5ad586e703f16d99d0474ce35294e9205f2e744cbf5d?apiKey=72ddffbbca3c46ef89dd86c4ca9b4252&" alt="Logo 1" className="shrink-0 my-auto aspect-[1.03] w-[31px]" />
            <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/d0e7abc52d06db81b02c7cbc461542f9e533752e4bfba4a5dd323ad5fb23ee2f?apiKey=72ddffbbca3c46ef89dd86c4ca9b4252&" alt="Logo 2" className="shrink-0 aspect-[1.05] w-[42px]" />
        </div>
        <div className="flex gap-5 my-auto">
            <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/06fad8648f9cb112ff246d6ae0a67b97ecabf577b353c55d1f1086dd3036e3de?apiKey=72ddffbbca3c46ef89dd86c4ca9b4252&" alt="Icon 1" className="shrink-0 aspect-[1.11] w-[29px]" />
            <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/b0a56cde1d2d9af54a4b874cd72a5c35a4b0bc013db628ac9be4993fe839f45d?apiKey=72ddffbbca3c46ef89dd86c4ca9b4252&" alt="Icon 2" className="shrink-0 self-start aspect-square w-[25px]" />
        </div>
    </header>
);

export default Header;