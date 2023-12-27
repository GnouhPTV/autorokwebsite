/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import { Container } from 'react-bootstrap';
import myImg from '../assets/logo.png';
import { MDBIcon } from 'mdb-react-ui-kit';
import IMG from '../assets/GIÁ ALL.png'


function Service() {
  const handleDownload = () => {
    const imageUrl = require('../assets/GIÁ ALL.png').default; // Adjust the path accordingly
    const link = document.createElement('a');
    link.href = IMG;
    link.download = 'GIÁ ALL.png'; // Adjust the file name accordingly
    link.click();
  };
  const styles = {
    container: {
      display: 'flex',
      alignItems: 'center',
      gap: '8px', // Adjust the gap between icon and text
    },
    icon: {
      fontSize: '30px', // Adjust the icon size
      color: 'White', // Adjust the icon color
    },
    text: {
      color: 'white', // Adjust the text color
      fontSize: '30px', // Adjust the text size
    },
  };

  return (
    <>
      <img
        className='service-img'
        src={myImg}
        style={{ visibility: 'visible', opacity: '1', paddingTop: '30px' }}
      />

      <div className='service' id='service'>
        <Container
          className='wrap'
          style={{
            position: 'relative',
            padding: '0',
            margin: 'auto',
            height: '100%',
            zIndex: '0',
          }}
        >
          <h2
            className='main-title-inner'
            style={{ position: 'relative', paddingBottom: '20px' }}
          >
            AUTO GEM
          </h2>
          <div
            className='service-item'
            style={{ visibility: 'visible', opacity: '1' }}
          >
            <h2>
              <span>Treo hộ</span>
            </h2>
            <ul>
              <li>
                <span>Thường: 500,00 VND / 1 tháng</span>
                <p>- Tốc độ mạng lên đến 1 gbs (5G).<br/>
                - Có thêm nhà mạng dự phòng</p>
              </li>
              <li>
                <span>Vip: 650,000 VND / 1 tháng</span>
                <p>
                  - Tốc độ mạng lên đến 1 gbs (5G).<br/>
                  - Có thêm nhà mạng dự phòng.<br/>
                  - Nên sử dụng ở KD đông, nhiều auto.<br/>
                  - Nhảy mò liên tục, năng suất cao hơn.<br/>
                  - 20% đến 30% so với gói thường.
                </p>
              </li>
              <li>
                <span>Vip Pro(Số lượng có hạn): 750,000 VND / 1 tháng</span>
                <p>
                  - Có thêm các tính năng sau:<br/>
                  + Hẹn giờ tự động tắt/bật<br/>
                  + Cảnh báo quét bạn<br/>
                  - Và có thêm ưu đãi:<br/>
                  + Hàng tháng được tham gia sự kiện bốc thăm với quà tặng có trị giá lên đến 5,000,000 VND 
                </p>
              </li><li>
                <span>Đổi acc: 30,000 VND / 1 lần</span>
                <p>
                  - Đổi sang acc khác để chạy auto
                </p>
              </li>
            </ul>
          </div>
          <div
            className='service-item2'
            style={{ visibility: 'visible', opacity: '1' }}
          >
            <h2>
              <span>Tự treo</span>
            </h2>
            <ul>
              <li>
                <span>Thường: 250,000 VND / 1 tháng</span>
                <p>- Auto farm bình thường theo hướng dẫn</p>
              </li>
              <li>
                <span>Vip: 550,000 VND / 2 tháng</span>
                <p>Loại vip có thêm các tính năng sau: <br/>
                - Có web điều khiển bật tắt<br/>
                - Hẹn giờ tự động tắt bật<br/>
                - Cảnh báo quét ban<br/>
                (Mua SLL giá thương lượng)</p>
              </li>
              <li>
                <span>Vĩnh viễn: 1,500,000 VND</span><br/>
                <span>Vĩnh viễn VIP: 2,000,000 VND</span>
              </li>
              <li>
                <span>Đổi máy: 50,000 / 1 lần</span>
                <p>- Cài auto sang máy khác</p>
              </li>
            </ul>
          </div>
          <div
            className='service-item4'
            style={{ visibility: 'visible', opacity: '1' }}
          >
            <h2>
              <span>Đặc quyền treo hộ</span>
            </h2>
            <ul>
              <li>
                <span>Có mẹo tránh ban, tránh cấm quân</span>
                <p>- ĐỘC QUYỀN hiệu quả!!<br/>
                - Sử dụng 2 nhà mạng đồng thời, cải thiện được sự ổn định.</p>
              </li>
              <li>
                <span>Ưu đãi khi tham gia DISCORD</span>
                <p>
                  - Auto gem tự treo và treo hộ được giảm giá thêm 50k(mỗi tháng) khi gia hạn sớm hoặc đúng hẹn (căn cứ vào nhắc hẹn trên Zalo).
                </p>
              </li>
            </ul>
          </div>
          
          
          <div className='clear'></div>
          <h2
            className='main-title-inner'
            style={{ position: 'relative', paddingBottom: '20px' }}
          >
            AUTO RSS
          </h2>
          <div
            className='service-item'
            style={{ visibility: 'visible', opacity: '1' }}
          >
            <h2>
              <span>Tự treo</span>
            </h2>
            <ul>
              <li>
                <span>(min) 5 gmail: 300,000 VND (1 tháng)</span>
              </li>
              <li>
                <span>Trên 10 gmail: 60,000 VND / 1 gmail (1 tháng)</span>
              </li>
              <li>
                <span>Trên 20 gmail: 50,000 VND / 1 gmail (1 tháng)</span>
              </li>
              <li>
                <span>Trên 30 gmail: 40,000 VND / 1 gmail (1 tháng)</span>
              </li>
              <li>
                <span>Trên 50 gmail: 30,000 VND / 1 gmail (1 tháng)</span>
              </li>
              <li>
                <span>Lưu ý:</span>
                <p>- Trên 10 gmail, có web điều khiển từ xa.<br/>
                - Không bao chi phí Captcha<br/>
                - Hỗ trợ đăng ký giải captcha tự động.</p>
              </li>
            </ul>
          </div>
          <div
            className='service-item2'
            style={{ visibility: 'visible', opacity: '1' }}
          >
            <h2>
              <span> Treo hộ </span>
              
            </h2>
            <ul>
              <li>
                <span>1 nhân vật lẻ: 100,000 VND (1 tháng)</span>
              </li>
              <li>
                <span>Trên 5 nhân vật: 80,000 VND (1 tháng)</span>
              </li>
              <li>
                <span>Trên 10 nhân vật: 75,000 VND / 1 nhân vật (1 tháng)</span>
              </li>
              <li>
                <span>Trên 30 nhân vật: 70,000 VND / 1 nhân vật (1 tháng)</span>
              </li>
              <li>
                <span>Trên 50 nhân vật: 60,000 VND / 1 nhân vật (1 tháng)</span>
              </li>
              <li>
                <span>Lưu ý:</span>
                <p>-  Trên 10 nhân vật, có web điều khiển từ xa và được tuỳ chỉnh loại rss cần thu thập.<br/>
                - Bao trọn chi phí Captcha<br/>
                - Được cung cấp mẹo chuyển rss độc quyền</p>
              </li>
            </ul>
          </div>

          <div className='clear'></div>

          <h2
            className='main-title-inner'
            style={{ position: 'relative', paddingBottom: '20px' }}
          >
            AUTO TITLE
          </h2>
          <div
            className='service-item3'
            style={{ visibility: 'visible', opacity: '1' }}
          >
            <table>
              <thead>
                <tr>
                  <th></th>
                  <th>Time</th>
                  <th>Price</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Tự động Cấp Tước</td>
                  <td>
                    <ul>
                      <li>1 tháng</li>
                    </ul>
                  </td>
                  <td>
                    <ul>
                      <li>600k-800k VND</li>
                    </ul>
                  </td>
                </tr>
                <tr>
                  <td>Quét Dữ liệu</td>
                  <td>
                    <ul>
                      <li>1 lần</li>
                    </ul>
                  </td>
                  <td>
                    <ul>
                      <li>100k VND</li>
                    </ul>
                  </td>
                </tr>
                <tr>
                  <td></td>
                  <td>
                    <ul>
                      <li>5 lần</li>
                    </ul>
                  </td>
                  <td>
                    <ul>
                      <li>200k VND</li>
                    </ul>
                  </td>
                </tr>
                <tr>
                  <td></td>
                  <td>
                    <ul>
                      <li>Lifetime</li>
                    </ul>
                  </td>
                  <td>
                    <ul>
                      <li>500k VND</li>
                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className='clear'></div>
          <h2
            className='main-title-inner'
            style={{ position: 'relative', paddingBottom: '20px' }}
          >
            CÁC DỊCH VỤ KHÁC
          </h2>
          <div
            className='service-item3'
            style={{ visibility: 'visible', opacity: '1' }}
          >
            <h2>Cày Acc</h2>
            <table>
              <thead>
                <tr>
                  <th></th>
                  
                  <th>Nhân vật</th>
                  <th>Giá</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Ủ Acc</td>
                  <td>
                    <ul>
                      <li>1 nhân vật</li>
                    </ul>
                  </td>
                  <td>
                    <ul>
                      <li>100k-200k VND</li>
                    </ul>
                  </td>
                </tr>
                <tr>
                  <td>Cày hall level 8</td>
                  <td>
                    <ul>
                      <li>1 nhân vật</li>
                    </ul>
                  </td>
                  <td>
                    <ul>
                      <li>70k-150k VND</li>
                    </ul>
                  </td>
                </tr>
                <tr>
                  <td>Cày hall level 11</td>
                  <td>
                    <ul>
                      <li>1 nhân vật</li>
                    </ul>
                  </td>
                  <td>
                    <ul>
                      <li>150k-200k VND</li>
                    </ul>
                  </td>
                </tr>
                <tr>
                  <td>Cày hall level 17</td>
                  <td>
                    <ul>
                      <li>1 nhân vật</li>
                    </ul>
                  </td>
                  <td>
                    <ul>
                      <li>150k-200k VND</li>
                    </ul>
                  </td>
                </tr>
                <tr>
                  <td>Cày hall level 22</td>
                  <td>
                    <ul>
                      <li>1 nhân vật</li>
                    </ul>
                  </td>
                  <td>
                    <ul>
                      <li>200k-500k VND</li>
                    </ul>
                  </td>
                </tr>
                <tr>
                  <td>Phát hiện sương mù trong làng và hang động</td>
                  <td></td>
                  <td>
                    <ul>
                      <li>50k-200k VND (Tùy theo yêu cầu)</li>
                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>
            <h2 style={{ paddingTop: '20px' }}>Chơi hộ</h2>
            <table>
              <thead>
                <tr>
                  <th></th>
                  <th>Mục tiêu</th>
                  <th>Ngày</th>
                  <th>Price</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Cướp bóc</td>
                  <td style={{ opacity: '70%' }}>
                  - Xả AP để đua trước kvk
                     <br />- Và không dùng speed
                  </td>
                  <td>
                    <ul>
                      <li>1 ngày</li>
                      <li>2 ngày</li>
                    </ul>
                  </td>
                  <td>
                    <ul>
                      <li>100k VND</li>
                      <li>150k VND</li>
                    </ul>
                  </td>
                </tr>
                <tr>
                  <td>Man rợ</td>
                  <td style={{ opacity: '70%' }}>
                  - Tìm rương quà
                     <br />
                     - Sự kiện đua với thời gian
                     <br />- Kiếm điểm danh dự
                  </td>
                  <td>
                    <ul>
                      <li>1 ngày</li>
                      <li>2 ngày</li>
                    </ul>
                  </td>
                  <td>
                    <ul>
                      <li>100k VND</li>
                      <li>150k VND</li>
                    </ul>
                  </td>
                </tr>
                <tr>
                  <td>Pháo đài</td>
                  <td style={{ opacity: '70%' }}>
                  - Tự động tìm kiếm pháo đài và mở các cuộc biểu tình
                     <br />- Tự động tham gia cuộc biểu tình
                  </td>
                  <td>
                    <ul>
                      <li>1 ngày</li>
                      <li>2 ngày</li>
                    </ul>
                  </td>
                  <td>
                    <ul>
                      <li>100k VND</li>
                      <li>150k VND</li>
                    </ul>
                  </td>
                </tr>
                <tr>
                  <td>Sự kiện</td>
                  <td style={{ opacity: '70%' }}>
                    Osiris
                    <br />
                    Đẩy xe bò cá nhân
                    <br />
                    Karuak
                    <br />
                    Nhà vô địch Olympia
                    <br />
                    Huấn luyện đội quân Lohar
                  </td>
                  <td>
                    <ul></ul>
                  </td>
                  <td>
                    <ul>
                      <li>50k VND</li>
                      <li>50k-100k VND</li>
                      <li>50k-100k VND</li>
                      <li>50k VND</li>
                      <li>50k-100k VND</li>
                    </ul>
                  </td>
                </tr>
                <tr>
                  <td>Chuyển tài nguyên</td>
                  <td style={{ opacity: '70%' }}>Không bị THU HỒI</td>
                  <td>
                    <ul>
                      <li></li>
                    </ul>
                  </td>
                  <td>
                    <ul>
                      <li>CAFE</li>
                    </ul>
                  </td>
                </tr>
                <tr>
                  <td>Đánh Kvk</td>
                  <td style={{ opacity: '70%' }}>Đánh theo yêu cầu KPI</td>
                  <td>
                    <ul>
                      <li></li>
                    </ul>
                  </td>
                  <td>
                    <ul>
                      <li>CAFE</li>
                    </ul>
                  </td>
                </tr>
                
              </tbody>
            </table>
          </div>
          <div style={styles.container}>
          <span style={styles.text}>Full Information</span>
      <MDBIcon
        icon="file-arrow-down"
        style={{ ...styles.icon, cursor: 'pointer' }}
        onClick={handleDownload}
      />  
    </div>
        </Container>
      </div>
      
    </>
  );
}

export default Service;
