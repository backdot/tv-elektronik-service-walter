import React from "react";
import { Link } from "gatsby";
import cx from "classnames";

const Footer = ({ className, ...props }) => {
  className = cx(
    "w-full px-8 py-4 text-white bg-gray-800 flex flex-col md:flex-row justify-between items-start md:items-center",
    className
  );
  return (
    <>
      <div className={className} {...props}>
        <div className="flex-initial text-xl font-semibold">TV Service Walter</div>
        <div>
          <ul className="flex flex-col md:flex-row text-sm -mx-3 font-medium">
            <li className="mx-3"><Link to="/kontakt">Kontakt</Link></li>
            <li className="mx-3"><Link to="/impressum">Impressum</Link></li>
            <li className="mx-3"><Link to="/agb">AGB</Link></li>
            <li className="mx-3">© 2019 TV Service Walter</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Footer;

