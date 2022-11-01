
import { Link } from "react-router-dom";
import { useTranslation, Trans } from 'react-i18next';
import "./template_01.css";

const Footer_01 = () => {
  const { t } = useTranslation();
  return (
    <footer className="font_h4 color_footer section" id="footer">
      <div className="container-lg footer_container">
        <div className="row footer_row footer_licenses_wrap">
          <div className="footer_info">
            <div className="footer_title">{t('gaming_license')}</div>
            <ul className="footer_info_img">
              <li>
               <img src="https://macal8.com/assets/img/footer/1.svg" alt="footer license"/>
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
              <img src="https://macal8.com/assets/img/footer/3.svg" alt="footer certification"/>
              </li>
              <li>
              <img src="https://macal8.com/assets/img/footer/5.svg" alt="footer certification"/>
              </li>
            </ul>
          </div>

          <div className="footer_info">
            <div className="footer_title">{t('payment_methods')}</div>
            <ul className="footer_info_img">
              <li>
              <img src="https://macal8.com/assets/img/footer/10.svg" alt="footer payment method"/>
              </li>
              <li>
              <img src="https://macal8.com/assets/img/footer/ipay4u.png" alt="footer payment method"/>
              </li>
              <li>
              <img src="https://b88club.net/img/footer/payment_method_duitnow.png" alt="footer payment method"/>
              </li>
              <li>
              <img src="https://b88club.net/img/footer/payment_method_tng.png" alt="footer payment method"/>
              </li>
              <li>
              <img src="https://b88club.net/img/footer/payment_method_grabpay.png" alt="footer payment method"/>
              </li>
              <li>
              <img src="https://b88club.net/img/footer/payment_method_boost.png" alt="footer payment method"/>
              </li>
              <li>
              <img src="https://b88club.net/img/footer/payment_method_shopee.png" alt="footer payment method"/>
              </li>
            </ul>
          </div>

          <div className="footer_info">
            <div className="footer_title">{t('suggested_browser')}</div>
            <ul className="footer_info_img">
              <li>
              <img src="https://macal8.com/assets/img/footer/6.svg" alt="footer suggested browser"/>
              </li>
              <li>
              <img src="https://macal8.com/assets/img/footer/7.svg" alt="footer suggested browser"/>
              </li>
            </ul>
          </div>



          <div className="footer_info">
            <div className="footer_title">{t('follow_us')}</div>
            <ul className="footer_info_img">
              <li>
              <img src="https://mcity77.com/home/img/footer/footer_facebook.svg" alt="footer follow us"/>
              </li>
              <li>
              <img src="https://mcity77.com/home/img/footer/footer_ins.svg"  alt="footer follow us"/>
              </li>
              <li>
              <img src="https://www.thenextsteprealty.com/wp-content/uploads/2013/01/twitter-circle-icon-150x150-copy.png"  alt="footer follow us"/>
              </li>
              <li>
              <img src="https://www.icantcu.com/wp-content/uploads/2019/05/youtube-icon.png"  alt="footer follow us"/>
              </li>
              <li>
              <img src="https://freesvg.org/storage/img/thumb/1553127906.png"  alt="footer follow us"/>
              </li>
            </ul>
          </div>

          <div className="footer_info">
            <div className="footer_title">{t('responsible_gaming')}</div>
            <ul className="footer_info_img">
              <li>
              <img src="https://macal8.com/assets/img/footer/12.svg"  alt="footer responsible gaming"/>
              </li>
              <li>
              <img src="https://macal8.com/assets/img/footer/13.svg" alt="footer responsible gaming"/>
              </li>
              <li>
              <img src="https://macal8.com/assets/img/footer/14.svg" alt="footer responsible gaming"/>
              </li>
            </ul>
          </div>
        </div>

        <div className="row footer_row 2 footer_help_wrap">
            <div className="font_h5 footer_copyright_box">
              <div className="footer_help">
              <Link to="../about-us" >{t('about_us')}</Link>
              <Link to="../term-and-conditions" >{t('tnc')}</Link>
              <Link to="../how-to-deposit" >{t('how_to_deposit')}</Link>
              <Link to="../how-to-transfer" >{t('how_to_transfer')}</Link>
              <Link to="../how-to-withdraw" >{t('how_to_withdrawal')}</Link>
              </div>
              <div className="text-end footer_copyright">© 2022 Copyright: Footer</div>
            </div>
        </div>
        <div className="row footer_row 3 footer_seo_wrap">
          <div className="seo_footer_container">
            <div className="text-uppercase m-0 seo_footer_title">{t('footer_title')}</div>
            <div className="font_h5 seo_footer_content">
            {t('footer_details')}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer_01;
