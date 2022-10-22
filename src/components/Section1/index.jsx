import React from "react";
import "./style.css";
import ScrollAnimation from "react-animate-on-scroll";

const Section1 = () => {
  return (
    <div className="section-1">
      <div className="heading-main-2 py-5">
        <h3 className="">Đường phố dành cho…ghe</h3>
      </div>
      <div>
        <p className="box-text">
          <ScrollAnimation animateIn="animate__lightSpeedInLeft">
            Theo dự báo của đài Khí tượng thủy văn tỉnh Thừa Thiên Huế, do ảnh
            hưởng của áp thấp nhiệt đới suy yếu từ bão số 5, tại tỉnh Thừa Thiên
            Huế tiếp tục có mưa to, với tổng lượng mưa tích lũy trong ngày và
            đêm 15/10 phổ biến 120-250mm, có nơi trên 300mm, ngập lụt diện rộng.
          </ScrollAnimation>
        </p>
      </div>
      <div className="">
        <img
          src="./images/des/des1.jpg"
          alt=""
          className="img-fluid images-1"
        />

        <figcaption
          className="text-center mt-2 images-text"
          style={{ fontSize: "13px" }}
        >
          Trưa ngày 15/10, nhiều tuyến đường ở TP. Huế vẫn tiếp tục bị nước lũ
          bủa vây, người dân phải sử dụng ghe, thuyền để lưu thông đi lại.
        </figcaption>
      </div>
      <div className="mt-3 images-2">
        <p className="text-description images-text">
          Ông Lại Đăng Quốc (67 tuổi, trú đường Nguyễn Huệ, TP. Huế) cho biết,
          trong đêm 14/10 nước lũ lên rất nhanh. Nhưng vì có chuẩn bị trước nên
          đồ đạc không bị ảnh hưởng.
        </p>
        <div className="d-flex justify-content-center mt-1">
          <div className="position-relative overlay-picture text-center">
            <img
              src="./images/des/person1.jpg"
              alt=""
              className="img-fluid images-1"
            />

            <div className="text-in-picture images-text">
              Trận lũ năm nay lớn lắm, nước thì lên nhanh, có lẽ đây là trận lũ
              lớn thứ 2 trong hàng chục năm qua sau trận lũ năm 1999", ông Quốc
              chia sẻ.
            </div>
          </div>
        </div>
      </div>
      <div className="mt-4">
        <p className="text-description">
          Thống kê của Văn phòng Ban Chỉ huy PCTT-TKCN tỉnh Thừa Thiên Huế đến
          9h sáng nay, do nước sông lên cao và ngập úng bởi cường suất mưa lớn,
          gây ngập cho nhà cửa ước tính có khoảng 19.918 nhà ngập, với độ sâu từ
          0,3-0,8m tùy từng vùng và khu vực. Đồ họa biểu đồ mực nước trên sống
          hương ngày 15/10.
        </p>
      </div>
    </div>
  );
};

export default Section1;
