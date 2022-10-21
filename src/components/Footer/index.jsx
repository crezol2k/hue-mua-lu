import React from "react";
import "./style.css";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="container">
          <div className="box logo">
            <img src="../images/tech-logo-footer.png" alt="" />
            <p>
              Busan là một chủ đề Blogger tạp chí tuyệt vời, dễ dàng tùy chỉnh
              theo nhu cầu của bạn
            </p>
            <i className="fa fa-envelope"></i>
            <span> hello@gmail.com </span> <br />
            <i className="fa fa-headphones"></i>
            <span> +84 333 382 867</span>
          </div>
          <div className="box">
            <h3>Tin tức</h3>
            <div className="item">
              <img src="../images/hero/hero1.jpg" alt="" />
              <p>Google sẽ tăng cường bảo mật cho Android trong vài ngày tới</p>
            </div>
            <div className="item">
              <img src="../images/hero/hero2.jpg" alt="" />
              <p>Cespedes chơi trò chơi bóng chày chiến thắng</p>
            </div>
          </div>
          <div className="box">
            <h3>Kinh tế vĩ mô</h3>
            <div className="item">
              <img src="../images/hero/hero3.jpg" alt="" />
              <p>
                Hoa Kỳ hứa cung cấp cho Intel viện trợ để xác định vị trí của
                binh lính
              </p>
            </div>
            <div className="item">
              <img src="../images/hero/hero4.jpg" alt="" />
              <p>
                Năng lượng tái tạo chết khi ngành công nghiệp chờ đợi Chính sách
              </p>
            </div>
          </div>
          <div className="box">
            <h3>Nhãn</h3>
            <ul>
              <li>
                <span>Thời tiết</span> <label>(5)</label>
              </li>
              <li>
                <span>Thời trang</span> <label>(6)</label>
              </li>
              <li>
                <span>Sức khoẻ</span> <label>(7)</label>
              </li>
              <li>
                <span>Thiên nhiên</span> <label>(9)</label>
              </li>
              <li>
                <span>Kinh doanh</span> <label>(10)</label>
              </li>
            </ul>
          </div>
        </div>
      </footer>
      <div className="legal">
        <div className="container flexSB">
          <p>Copyright 2022 - NVD</p>
        </div>
      </div>
    </>
  );
};

export default Footer;
