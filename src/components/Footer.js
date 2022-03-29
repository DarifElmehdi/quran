import React from "react";

function Footer(props) {
    return (
        <footer className="bg-gray-200 text-center w-full">
            <div className="text-gray-700 text-center p-4">
                © 2022 Copyright :{" "}
                <a
                    className="text-slate-900"
                    href="https://github.com/DarifElmehdi"
                >
                    Darif Elmehdi
                </a>
            </div>
        </footer>
    );
}

export default Footer;
