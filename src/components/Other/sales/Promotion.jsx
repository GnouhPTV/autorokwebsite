import React from "react";
import "../sales/PromotionC.css";
import img from "../../../assets/banner.jpg"
import OtherComment from "../other-Comment/OtherComment";

const Promotion = () => {
  return (
    <div id="Promotion">
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          color: "#8B008B",
          marginBottom: "10px",
        }}
      >
        <h2>Khuyến mãi!</h2>
      </div>

      {/*  */}

      <div className="promotion-container">
        {/*  */}
        <div className="promotion-content">
          <div className="promotion-content-inner">
            <h2>Khuyến mãi: auto gathering gem</h2>
            <p>
              Khi khách hàng đi theo nhóm 3 người: sẽ được giảm 50k/ 1 người kể
              từ tháng thứ 3 gia hạn.
            </p>
            <p>
              Khi khách hàng đăng ký 1 slot treo tước và 5 slot auto gem trở lên
              sẽ được quyền điều khiển máy chủ và giảm giá 100k/1 người ngay từ
              lần gia hạn đầu tiên
            </p>
          </div>
        </div>
        {/*  */}
        <div id="promotion-img">
          {/* <img src={img} alt="" /> */}

          <div className="centered-text">
            <h3>Hoa hồng giới thiệu:</h3>
            <p>
              Mỗi khi khách hàng giới thiệu thêm một khách hàng mới sẽ nhận được
              hoa hồng từ 30%-80% hoặc thưởng trực tiếp thêm vào gói sản phẩm
              hoặc dịch vụ mà khách hàng đang sử dụng
            </p>
          </div>
        </div>
      </div>

      {/*  */}

      <OtherComment />
    </div>
  );
};

export default Promotion;
