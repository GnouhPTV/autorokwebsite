import React from "react";
import "../intro-about/IntroAboutC.css";
import { Container } from "react-bootstrap";

const IntroAbout = () => {
  return (
    <>
      <div className="about">
        <h1>VỀ CHÚNG TÔI</h1>
      </div>

      <div id="about-item1">
        <div id="about-content1">
          <h2>Nhiệm vụ</h2>
          <p>
            Chúng tôi muốn phát triển và đưa sản phẩm ra thế giới để mọi người
            có thể tiếp cận những lợi ích từ công cụ của chúng tôi. Qua đó khiến
            mọi người bớt nhàm chán khi chơi game vì giờ đây khoảng cách giữa
            sếp và chúng ta ngày càng gần hơn. Tóm lại, sự ra đời của tự động
            hóa là một điều tích cực đối với tất cả mọi người (bao gồm cả nhà
            phát hành trò chơi và người chơi trò chơi).
          </p>
        </div>
      </div>
      {/*  */}
      <div id="about-item-right1">
        <div id="about-content-right1">
          <h2>Sự đa dạng và chuyên nghiệp</h2>
          <p>
            Chúng tôi có đội ngũ cộng tác viên cực kỳ năng động và am hiểu về
            game nên hầu hết chúng tôi đều có thể đáp ứng được mọi yêu cầu mà
            khách hàng đặt ra.
          </p>
        </div>
      </div>
      {/*  */}
      <div id="about-item2">
        <div id="about-content2">
          <h2>Cam kết an toàn</h2>
          <p>
            Đội ngũ của chúng tôi luôn hoạt động 24/24, luôn cập nhật công cụ
            thường xuyên và máy chủ được quản lý bởi các cộng tác viên trung
            thành và uy tín, đảm bảo an toàn tối đa cho tài khoản của bạn. Khách
            hàng tin tưởng chúng tôi.
          </p>
        </div>
      </div>
      {/*  */}
      <div id="about-item-right2">
        <div id="about-content-right2">
          <h2>Đội ngũ làm việc</h2>
          <p>
            Chúng tôi tin vào tinh thần đồng đội và hỗ trợ lẫn nhau để đạt được
            mục tiêu chung. Ở đây mọi ý kiến đều được tôn trọng và mọi thành
            viên đều có quyền cơ hội phát triển bản thân.
          </p>
        </div>
      </div>
      {/*  */}
      <div id="about-item3">
        <div id="about-content3">
          <h2>Sáng tạo và linh hoạt</h2>
          <p>
            Chúng tôi khuyến khích sự sáng tạo và linh hoạt trong mọi khía cạnh.
            Điều này có ích chúng tôi nhanh chóng thích ứng với những thách thức
            và đưa ra những giải pháp độc đáo.
          </p>
        </div>
      </div>
      {/*  */}
    </>
  );
};

export default IntroAbout;
