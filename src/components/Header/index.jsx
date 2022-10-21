import React from "react";

const Header = () => {
  return (
    <div className="header">
      <div className="container d-flex flex-row  align-items-center">
        <div className="c-logo">
          <img
            src="https://asset.1cdn.vn/vnpl/images/global/logo.png"
            alt="logo"
            className=""
          />
        </div>
        <div className="category">
          <ul className="d-flex">
            <li>
              <a href="#">Tin tức</a>
            </li>
            <li>
              <a href="#">Sức khoẻ</a>
            </li>
            <li>
              <a href="#">Kinh doanh</a>
            </li>
            <li>
              <a href="#">Thể thao</a>
            </li>
            <li>
              <a href="#">Thời tiết</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
