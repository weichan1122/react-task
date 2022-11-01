import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useTranslation, Trans } from 'react-i18next';
import "./template_02.css";








const Footer_01 = () => {
  const [show, toggleShow] = React.useState(false);
  const { t } = useTranslation();
  return (
    <footer className="font_h4 color_footer section" id="footer">
      <div className="container-lg footer_container">
        <div className="row footer_row 2 footer_help_wrap">
          <div className="font_h5 footer_help">
            <Link to="../about-us" >{t('about_us')}</Link>
            <Link to="../term-and-conditions" >{t('tnc')}</Link>
            <Link to="../how-to-deposit" >{t('how_to_deposit')}</Link>
            <Link to="../how-to-transfer" >{t('how_to_transfer')}</Link>
            <Link to="../how-to-withdraw" >{t('how_to_withdrawal')}</Link>
          </div>
        </div>
        <div className="row footer_row footer_licenses_wrap">
          <div className="footer_info">
            <div className="footer_title">{t('gaming_license')}</div>
            <ul className="footer_info_img">
              <li>
                <img src="https://macal8.com/assets/img/footer/1.svg" alt="footer license" />
              </li>
            </ul>
          </div>

          <div className="footer_info">
            <div className="footer_title">{t('certification')}</div>
            <ul className="footer_info_img">
              <li>
                <img src="https://macal8.com/assets/img/footer/2.svg" alt="footer certification" />
              </li>
              <li>
                <img src="https://macal8.com/assets/img/footer/3.svg" alt="footer certification" />
              </li>
              <li>
                <img src="https://macal8.com/assets/img/footer/5.svg" alt="footer certification" />
              </li>
            </ul>
          </div>

          <div className="footer_info">
            <div className="footer_title">{t('payment_methods')}</div>
            <ul className="footer_info_img">
              <li>
                <img src="https://macal8.com/assets/img/footer/10.svg" alt="footer payment method" />
              </li>
              <li>
                <img src="https://macal8.com/assets/img/footer/ipay4u.png" alt="footer payment method" />
              </li>
              <li>
                <img src="https://b88club.net/img/footer/payment_method_duitnow.png" alt="footer payment method" />
              </li>
              <li>
                <img src="https://b88club.net/img/footer/payment_method_tng.png" alt="footer payment method" />
              </li>
              <li>
                <img src="https://b88club.net/img/footer/payment_method_grabpay.png" alt="footer payment method" />
              </li>
              <li>
                <img src="https://b88club.net/img/footer/payment_method_boost.png" alt="footer payment method" />
              </li>
              <li>
                <img src="https://b88club.net/img/footer/payment_method_shopee.png" alt="footer payment method" />
              </li>
            </ul>
          </div>

          <div className="footer_info">
            <div className="footer_title">{t('suggested_browser')}</div>
            <ul className="footer_info_img">
              <li>
                <img src="https://macal8.com/assets/img/footer/6.svg" alt="footer suggested browser" />
              </li>
              <li>
                <img src="https://macal8.com/assets/img/footer/7.svg" alt="footer suggested browser" />
              </li>
            </ul>
          </div>



          <div className="footer_info">
            <div className="footer_title">{t('follow_us')}</div>
            <ul className="footer_info_img">
              <li>
                <img src="https://mcity77.com/home/img/footer/footer_facebook.svg" alt="footer follow us" />
              </li>
              <li>
                <img src="https://mcity77.com/home/img/footer/footer_ins.svg" alt="footer follow us" />
              </li>
              <li>
                <img src="https://www.thenextsteprealty.com/wp-content/uploads/2013/01/twitter-circle-icon-150x150-copy.png" alt="footer follow us" />
              </li>
              <li>
                <img src="https://www.icantcu.com/wp-content/uploads/2019/05/youtube-icon.png" alt="footer follow us" />
              </li>
              <li>
                <img src="https://freesvg.org/storage/img/thumb/1553127906.png" alt="footer follow us" />
              </li>
            </ul>
          </div>

          <div className="footer_info">
            <div className="footer_title">{t('responsible_gaming')}</div>
            <ul className="footer_info_img">
              <li>
                <img src="https://macal8.com/assets/img/footer/12.svg" alt="footer responsible gaming" />
              </li>
              <li>
                <img src="https://macal8.com/assets/img/footer/13.svg" alt="footer responsible gaming" />
              </li>
              <li>
                <img src="https://macal8.com/assets/img/footer/14.svg" alt="footer responsible gaming" />
              </li>
            </ul>
          </div>
        </div>
        <div className="row footer_row">
          <div className="font_h5 footer_copyright_box">
            <div className="text-center footer_copyright">© 2022 Copyright: Footer</div>
          </div>
        </div>
        <div className="row footer_row 3 footer_seo_wrap">


          <div className="seo_footer_container">
            {!show && <div className="text-uppercase m-0 seo_footer_title">{t('footer_title')}</div>}
            <div className="font_h5 seo_footer_content">
              {!show && t('footer_details')}
              <span onClick={() => toggleShow(!show)}>{show ? 'Hide Info' : 'Read More'}</span>
              {show && (<div className="footer_seo_all">
                <div className="footer_seo_all_col">
                  <div className="footer_seo__title">
                    MACAL8 | Trusted Online Casino Malaysia
                  </div>
                  <div className="footer_seo_details">
                    We are a subscription gambling agent available in Malaysia. Our casino gambling platform provides an opportunity for those who want to try their luck fairly and equitably through the various attractive toys that we have provided at our casino.
                    <br/><br/>
                      All of our games betting are reliable without hesitation and have the potential to give you the best gambling experience. Our online casino provides high quality services through a fast and efficient deposit and withdrawal system. Apart from slot games, we also have dice games, fish hunting, baccarat, poker, blackjack and others. We accept deposits as low as MYR 30 as to provide opportunities for our customers who lack capital to increase their chances of winning. Apart from that we give all our members the opportunity to reap more lucrative profits through various exclusive promotions. Please join us and try your luck at www.MACAL8.com online casino today! Think of our platform as a place to invest and make a big return without a loss now!
                    </div>
                      <div className="footer_seo__title">
                        MACAL8 | Steps to Download All Games
                      </div>
                      <div className="footer_seo_details">
                        We provide a system that is easy enough to download our application through our website which is structured using registration, top-up / deposit or withdrawal methods that are not only fast, but also legitimate and secure. You do not have to worry about being scammed and scammed by third party individuals through our website. To download our application, you just need your log in to our site www.MACAL8.com via your desktop or smartphone easily and quickly. To find out more about our games, visit our website at www.MACAL8.com and click APP download to enjoy our games.
                      </div>
                  </div>
                  <div className="footer_seo_all_col">
                    <div className="footer_seo__title">
                      MACAL8 | How to Register
                    </div>
                    <div className="footer_seo_details">
                      Register if you would like to register and become our member to try your luck, you can do so through our website at www.MACAL8.com and follow the steps and procedures we have set. It is very simple and will not take more than 3 minutes to follow the steps set in the application register. It is very likely that today may be a lucky day for you as you have managed to find us among the hundreds of gambling platforms based in Malaysia. We invite you to join us and increase your income through a small investment because we are among the casinos that accept the lowest deposits because we understand how important it is to allow the low-income group to join us. We welcome your presence on our online platform to gamble and have fun while increasing your chances of making big profits with small investments. Do not miss this golden opportunity, let's get rich together today!
                    </div>
                    <div className="footer_seo__title">
                      MACAL8 | Popular Slots Games
                    </div>
                    <div className="footer_seo_details">
                      The difference between MACAL8 and other casinos is that our gambling site offers a variety of exciting and lucrative slot games that are not modified in any way to ensure your winning chances are not compromised. There are various options that allow you to win up to 10,000 times the value of your bet. Slot games like Easter Surprise, Football Carnival, Top Gun and Halloween Fortune are among the most popular MEGA888 Slot games as many of our customers have won thousands of ringgit with only a total capital of less than MYR 50.
                    </div>
                  </div>
                </div>)
              }
              </div>
          </div>
            <div>


            </div>


          </div>

        </div>
    </footer>
  );
};

export default Footer_01;
