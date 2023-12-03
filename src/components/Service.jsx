/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import { Container } from 'react-bootstrap';
import myImg from '../assets/logo.png';

function Service() {
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
              <span> Auto </span>
              yourself
            </h2>
            <ul>
              <li>
                <span>Normal: 270,000 VND</span>
                <p>- There is a remote control app via phone</p>
              </li>
              <li>
                <span>Vip: 300,000 VND</span>
                <p>
                  - There is a remote control app via the phone and has an
                  additional on/off feature
                </p>
              </li>
              <li>
                <span>Lifetime: 2,000,000 VND</span>
                <p>
                  - There is a remote control app via phone
                  <br />- No automatic on/off, no automatic captcha included
                </p>
              </li>
            </ul>
          </div>
          <div
            className='service-item2'
            style={{ visibility: 'visible', opacity: '1' }}
          >
            <h2>
              <span> Auto </span>
              for you
            </h2>
            <ul>
              <li>
                <span>Normal: From 500,00 VND to 550,000 VND</span>
                <p>- Less jumping between gem mine</p>
              </li>
              <li>
                <span>Vip: From 650,000 VND to 1,000,000 VND</span>
                <p>
                  - Should be used if the business is crowded and has many cars
                  <br />
                  - Farm productivity is 20-50% more than the regular package
                  <br />- Jump into the gem mine to death
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
              <span> Auto </span>
              yourself
            </h2>
            <ul>
              <li>
                <span>300,000 VND / 5 accounts gmail</span>
                <p>
                  - Unlimited characters
                  <br />
                  - Captcha not included
                  <br />- Requires Minamoto no Yoshitsune
                </p>
              </li>
            </ul>
          </div>
          <div
            className='service-item2'
            style={{ visibility: 'visible', opacity: '1' }}
          >
            <h2>
              <span> Auto </span>
              for you
            </h2>
            <ul>
              <li>
                <span>100,000 VND / 1 character</span>
                <p>
                  - The more quantity, the cheaper
                  <br />- Captcha fee included
                  <br />- Requires Minamoto no Yoshitsune
                </p>
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
                  <td>Auto Title for you</td>
                  <td>
                    <ul>
                      <li>1 month</li>
                    </ul>
                  </td>
                  <td>
                    <ul>
                      <li>650k-850k VND</li>
                    </ul>
                  </td>
                </tr>
                <tr>
                  <td>Auto Title yourself</td>
                  <td>
                    <ul>
                      <li>1 month</li>
                    </ul>
                  </td>
                  <td>
                    <ul>
                      <li>300k-500k VND</li>
                    </ul>
                  </td>
                </tr>
                <tr>
                  <td>Scan titles</td>
                  <td>
                    <ul>
                      <li>1 time</li>
                    </ul>
                  </td>
                  <td>
                    <ul>
                      <li>50k-100k VND</li>
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
                      <li>4.500.000 VND</li>
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
            OTHER SERVICES
          </h2>
          <div
            className='service-item3'
            style={{ visibility: 'visible', opacity: '1' }}
          >
            <h2>Account Plowing</h2>
            <table>
              <thead>
                <tr>
                  <th></th>
                  <th>Target</th>
                  <th>Character</th>
                  <th>Price</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Incubation Account</td>
                  <td style={{ opacity: '70%' }}>
                    - All buildings reach level 7<br />
                    - Full village cave
                    <br />- Have more soldiers (if needed)
                  </td>
                  <td>
                    <ul>
                      <li>1 character</li>
                      <li>2 characters 1 gmail</li>
                      <li>4 characters 2 gmail</li>
                    </ul>
                  </td>
                  <td>
                    <ul>
                      <li>200k VND</li>
                      <li>300k VND</li>
                      <li>500k VND</li>
                    </ul>
                  </td>
                </tr>
                <tr>
                  <td>Upgrade hall level 8</td>
                  <td style={{ opacity: '70%' }}>
                    - Provide title
                    <br />
                    - Scan Data
                    <br />- Hack opponent's kingdom information
                  </td>
                  <td>
                    <ul>
                      <li>1 character</li>
                    </ul>
                  </td>
                  <td>
                    <ul>
                      <li>30k-50k VND</li>
                    </ul>
                  </td>
                </tr>
                <tr>
                  <td>Upgrade hall level 11</td>
                  <td style={{ opacity: '70%' }}>- Manual farming</td>
                  <td>
                    <ul>
                      <li>1 character</li>
                    </ul>
                  </td>
                  <td>
                    <ul>
                      <li>50k-70k VND</li>
                    </ul>
                  </td>
                </tr>
                <tr>
                  <td>Upgrade hall level 17</td>
                  <td style={{ opacity: '70%' }}>
                    - Manual farming
                    <br />- Or Auto farming
                  </td>
                  <td>
                    <ul>
                      <li>1 character</li>
                    </ul>
                  </td>
                  <td>
                    <ul>
                      <li>150k-250k VND</li>
                    </ul>
                  </td>
                </tr>
                <tr>
                  <td>Detect the fog in the village and cave</td>
                  <td style={{ opacity: '70%' }}></td>
                  <td>
                    <ul>
                      <li></li>
                    </ul>
                  </td>
                  <td>
                    <ul>
                      <li>50k-200k VND(Depending on request)</li>
                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>
            <h2 style={{ paddingTop: '20px' }}>Play for you</h2>
            <table>
              <thead>
                <tr>
                  <th></th>
                  <th>Target</th>
                  <th>Day</th>
                  <th>Price</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Pillage</td>
                  <td style={{ opacity: '70%' }}>
                    - Release AP to race pre kvk
                    <br />- Earn gems and resources
                  </td>
                  <td>
                    <ul>
                      <li>1 day</li>
                      <li>2 days</li>
                    </ul>
                  </td>
                  <td>
                    <ul>
                      <li>120k VND</li>
                      <li>200k VND</li>
                    </ul>
                  </td>
                </tr>
                <tr>
                  <td>Barbarian</td>
                  <td style={{ opacity: '70%' }}>
                    - Find gift chests
                    <br />
                    - Racing events
                    <br />- Earn honor points
                  </td>
                  <td>
                    <ul>
                      <li>1 day</li>
                      <li>2 days</li>
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
                  <td>Fortress</td>
                  <td style={{ opacity: '70%' }}>
                    - Automatically searches fortresses and opens rallies
                    <br />- Automatically join the rally
                  </td>
                  <td>
                    <ul>
                      <li>1 day</li>
                      <li>2 days</li>
                    </ul>
                  </td>
                  <td>
                    <ul>
                      <li>120k VND</li>
                      <li>200k VND</li>
                    </ul>
                  </td>
                </tr>
                <tr>
                  <td>Event</td>
                  <td style={{ opacity: '70%' }}>
                    Osiris
                    <br />
                    Mysterious merchant
                    <br />
                    Karuak
                    <br />
                    Champions of Olympia
                    <br />
                    Military training
                  </td>
                  <td>
                    <ul></ul>
                  </td>
                  <td>
                    <ul>
                      <li>50k VND</li>
                      <li>100k VND</li>
                      <li>150k VND</li>
                      <li>50k VND</li>
                      <li>100k VND</li>
                    </ul>
                  </td>
                </tr>
                <tr>
                  <td>Transfer resources</td>
                  <td style={{ opacity: '70%' }}>No RECOVERY</td>
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
                  <td>Training soldiers</td>
                  <td style={{ opacity: '70%' }}>Use speed to race events</td>
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
                  <td>Heal soldiers</td>
                  <td style={{ opacity: '70%' }}>No need to use speed</td>
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
                  <td>Write Mail, notifications</td>
                  <td style={{ opacity: '70%' }}>Beautiful style</td>
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
        </Container>
      </div>
    </>
  );
}

export default Service;
