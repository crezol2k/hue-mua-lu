import React from "react";
import "./style.css";
import ScrollAnimation from "react-animate-on-scroll";

const Section2 = () => {
  return (
    <div className="section-2">
      <p className="text-description">
        An Vân Dương là khu đô thị mới được quy hoạch vào năm 2005, nằm ở phía
        Đông TP. Huế. Đây được xem là đô thị mới hiện đại bậc nhất xứ Huế hiện
        nay. Sau 16 năm xây dựng, hiện khu đô thị này bộc lộ một số hạn chế,
        trong đó nan giải nhất là vấn đề chống ngập lụt.
      </p>
      <img src="./images/des/major.jpg" alt="images" className="img-fluid" />

      <p
        className="text-description mt-2 text-center"
        style={{ fontSize: "14px" }}
      >
        “Đất vàng” cũng lo…ngập
      </p>
      <img src="./images/des/major3.jpg" alt="images" className="img-fluid" />

      <p
        className="text-description mt-2 text-center"
        style={{ fontSize: "14px" }}
      >
        Di chuyển ở đô thị mới An Vân Dương giữa lúc nước lũ dâng cao
      </p>

      <div className="d-flex py-3 my-2">
        <div className="text-left d-flex justify-content-center align-items-center" style={{ flex: "1" }}>
          <h2 className="text-description" style={{ fontSize: "32px", fontStyle: "italic"}}>
            "Chỗ ni mà xây xong thì mùa mưa lụt, nước ứ trong xóm, chẳng biết
            thoát ra cửa nào"
          </h2>
        </div>
        <div className="text-left" style={{ flex: "1" }}>
          <p className="text-description">
            Ông Nguyễn Hiền - dân cư thuộc khu ĐTM An Vân Dương, phường Xuân
            Phú, TP. Huế - nói: “Sang năm, chú trả lại đất cho Nhà nước rồi.
            Nghe đâu có dự án xây chung cư cao cấp. Chỗ ni mà xây xong thì mùa
            mưa lụt, nước ứ trong xóm, chẳng biết thoát ra cửa nào”.
          </p>
        </div>
      </div>

      <p className="text-description mt-3">
        Sau những đợt lũ lịch sử năm 2020, hầu như cư dân ở các chung cư như
        Vicoland Huế, Xuân Phú, Aranya hay chung cư hạng sang The Manor Huế
        trong Khu đô thị mới An Vân Dương… cũng đều toan tính cho mình chỗ gửi
        xe khi có cảnh báo lũ, bởi “chậm chân” một chút có thể khiến khối tài
        sản lớn của gia đình “trôi” theo mưa lũ hoặc trở thành gánh nợ.
      </p>
      <img src="./images/des/major2.jpg" alt="images" className="img-fluid" />

      <p
        className="text-description mt-2 text-center"
        style={{ fontSize: "14px" }}
      >
        Khu đô thị The Manor Crown được ví như một "Paris thu nhỏ" giữa lòng Cố
        Đô, tuy nhiên hiện xung quanh khu đô thị này nước lũ vẫn còn ngập úng
        với độ sâu khoảng 25cm.
      </p>

      <div className="">
        <p className="box-text">
          <ScrollAnimation animateIn="animate__fadeInTopLeft">
            Những ngày tới, tỉnh Thừa Thiên Huế tiếp tục có mưa to và rất to.
            Công điện của Ban Chỉ huy PCTT&TKCN tỉnh đề nghị các sở, ban, ngành,
            địa phương tiếp tục triển khai công tác ứng phó với mưa lũ; tăng
            cường tuyên truyền thông tin trên các phương tiện truyền thông đại
            chúng; tuyên truyền cho học sinh, phụ huynh phòng tránh tai nạn
            thương tích đuối nước có thể xảy ra trong và sau lũ.
          </ScrollAnimation>
        </p>
        <img src="./images/des/poster.jpg" alt="images" className="img-fluid" />

        <p
          className="text-description mt-2 text-center"
          style={{ fontSize: "14px" }}
        >
          Poster cảnh báo lũ lụt
        </p>
      </div>
    </div>
  );
};

export default Section2;
