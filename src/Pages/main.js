import { Container, Tab, Tabs,Col,Nav} from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination,Autoplay } from "swiper";
import { AiOutlineRight } from "react-icons/ai";
import { Link } from "react-router-dom";
import Marquee from "react-fast-marquee";
import "swiper/css";
import "swiper/css/pagination";
import "./main.css";
import { useTranslation, Trans } from 'react-i18next';
import Game01 from "../Sections/games/template_01";
import Layout01 from "../Sections/layout/layout_01";
import Layout02 from "../Sections/layout/layout_02";
import Layout03 from "../Sections/layout/layout_03";
import Layout04 from "../Sections/layout/layout_04";

const data = {
  "code": "member",
  "plural": "members",
  "name": "Member",
  "attributes": [
      {
          "code": "id",
          "name": "Member Id",
          "type": "STRING",
          "isPrimaryKey": true,
          "isLabel": false,
          "isRequired": true,
          "isReadOnly": true,
          "canDisplay": true,
          "canSort": true
      },
      {
          "code": "name",
          "name": "Member Name",
          "type": "STRING",
          "isPrimaryKey": false,
          "isLabel": true,
          "isRequired": true,
          "isReadOnly": false,
          "canDisplay": true,
          "canSort": true
      },
      {
          "code": "dob",
          "name": "DOB",
          "type": "DATE",
          "isPrimaryKey": false,
          "isLabel": false,
          "isRequired": false,
          "isReadOnly": false,
          "canDisplay": true,
          "canSort": false
      },
      {
          "code": "status",
          "name": "Status",
          "type": "STRING",
          "isPrimaryKey": false,
          "isLabel": false,
          "isRequired": false,
          "isReadOnly": false,
          "canDisplay": true,
          "canSort": true
      }
  ],
 
}

const Banner = () => {
  return (
    <>
        <Swiper
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination]}
        className="bannerswiper section"
        id="mainbanner"
      >
        <SwiperSlide>
          <img src="img/2000x475.jpg" alt="main banner1"/>
        </SwiperSlide>
        <SwiperSlide>
          <img src="img/2000x475.jpg" alt="main banner2"/>
        </SwiperSlide>

      </Swiper>
    </>
  );
};

const SpeakerAnn = () => {
  const { t } = useTranslation();
  return (
    <>
        <div className="color_button section annbar_wrap" id="annbar">
          <Container className="annbar_container">
              <img src="https://macal8.com/assets/img/speaker.svg" alt="speaker"/>
              <Marquee gradientColor={"transparent"} speed={"85"} className="font_h4 annbar_content">
                {t('speaker_ann')}
              </Marquee>
          </Container>
        </div>
      
    </>
  );
};

const HomeGame = () => {
  const { t } = useTranslation();
  return (
    <>
   
    <div className="section" id="homegame">
    <div className="home_header">
    <div className="font_h2 home_title">
    <img src="https://b88club.net/img/homepage/mainpage_title_02.svg" alt=""></img>
    {t('hot_games')}</div>
        <Link to="../promotion" className="home_view">
          {t('view_more')} &nbsp;
          <AiOutlineRight />
        </Link>
      </div>
      {/* <div className="d-none d-lg-block">
        <Link to="../promotion" className="homegame_slot">
          <div className="homegame_view">
            View More &nbsp;
            <AiOutlineRight />
          </div>
          <img src="img/home/Slot2.gif"  alt="home slot"/>
        </Link>
        <Link to="../promotion" className="homegame_casino">
          <div className="homegame_view">
            View More &nbsp;
            <AiOutlineRight />
          </div>
          <img src="img/home/Casino2.gif"  alt="home casino"/>
        </Link>
       
      </div> */}

      {/* <div className="d-lg-none"> */}
    
     
      {/* </div> */}
      <Game01/>
      </div>
    </>
  );
};

const Promo = () => {
  const { t } = useTranslation();
  return (
    <section className="section" id="homepromo">
      <div className="home_header">

        <div className="font_h2 home_title">
          <img src="https://b88club.net/img/homepage/mainpage_title_01.svg"></img>
          {t('promotion')}
          </div>
        <Link to="../promotion" className="home_view">
        {t('view_more')} &nbsp;
          <AiOutlineRight />
        </Link>
      </div>
      <Layout04 desktop={true} mobile={true}/>
    </section>
  );
};

function MobileRankingTable() {
  const { t } = useTranslation();
  return (
    <Tabs
    defaultActiveKey="top_deposit"
    id="rankinglist_table"
    className="color_text rankinglist_table"
    fill
  >
    <Tab eventKey="top_deposit" title={t('top_deposit')} >
    <div className="color_primary ranking_table">
    <div className="ranking_table_body">
    <img src="https://pedas99.com/m/asset/image/banner/DEPOSIT%20ENG.jpg" alt="ranking top deposit banner"/>
            {Array.from({ length: 10 }).map((_, index) => (
              <div className="ranking_table_row" key={index}>
                <div key={index + 1} className="font_h2 ranking_user">
                <img src={"img/home/ranking/ranking_badge_"+(index+1)+".png"} alt="ranking user"/>
                  <img src="https://g66my.com/assets/img/ranking_user.png" alt="ranking user"/>
                </div>
                <div className="font_h4 ranking_username_col">
                 <div className="ranking_username"> User*** {index + 1}</div>
                 <div className="ranking_won">{t('has_deposited')}</div>
                </div>
                <div className="font_h4 ranking_amount">RM 1000</div>
              </div>
            ))}
          </div>
    </div>
    </Tab>
    <Tab eventKey="top_withdrawal" title= {t('top_withdraw')}>  
    <div className="color_primary ranking_table">
    <div className="ranking_table_body">
    <img src="https://pedas99.com/m/asset/image/banner/WITHDRAWL%20ENG.jpg" alt="ranking top withdrawal banner"/>
            {Array.from({ length: 10 }).map((_, index) => (
              <div className="ranking_table_row" key={index}>
                <div key={index + 1} className="font_h2 ranking_user">
  
                <img src={"img/home/ranking/ranking_badge_"+(index+1)+".png"} alt="ranking user"/>
                  <img src="https://g66my.com/assets/img/ranking_user.png" alt="ranking user"/>
                </div>
                <div className="font_h4 ranking_username_col">
                 <div className="ranking_username"> User*** {index + 1}</div>
                 <div className="ranking_won">{t('has_won')}</div>
                </div>
                <div className="font_h4 ranking_amount">RM 1000</div>
              </div>
            ))}
          </div>
    </div>
        </Tab>
    </Tabs>
  );
}


function DesktopRankingTable() {
  const { t } = useTranslation();
  return (
    <>
      <div className="ranking_table_container">
        <div className="color_primary ranking_table">
          <div className="font_h1 ranking_table_header">
          {t('top_deposit')}
          </div>
          <div className="ranking_table_body">
          <img src="https://pedas99.com/m/asset/image/banner/DEPOSIT%20ENG.jpg" alt="ranking top deposit banner"/>
            {Array.from({ length: 10 }).map((_, index) => (
              <div className="ranking_table_row" key={index}>
                <div key={index + 1} className="font_h1 ranking_user">
                <img src={"img/home/ranking/ranking_badge_"+(index+1)+".png"} alt="ranking user"/>
                  <img src="https://g66my.com/assets/img/ranking_user.png" alt="ranking user"/>
                </div>
                <div className="font_h3 ranking_username_col">
                 <div className="ranking_username"> User*** {index + 1}</div>
                 <div className="ranking_won">{t('has_deposited')}</div>
                </div>
                <div className="font_h3 ranking_amount">RM 1000</div>
              </div>
            ))}
          </div>
        </div>
        <div className="color_primary ranking_table">
          <div className="font_h1 ranking_table_header">
          {t('top_withdraw')}
          </div>
          <div className="ranking_table_body">
          <img src="https://pedas99.com/m/asset/image/banner/WITHDRAWL%20ENG.jpg" alt="ranking top withdrawal banner"/>
            {Array.from({ length: 10 }).map((_, index) => (
              <div className="ranking_table_row" key={index}>
                <div key={index + 1} className="font_h1 ranking_user">
                  <img src="https://g66my.com/assets/img/ranking_user.png" alt="ranking user"/>
                </div>
                <div className="font_h3 ranking_username_col">
                 <div className="ranking_username"> User*** {index + 1}</div>
                 <div className="ranking_won">{t('has_won')}</div>
                </div>
                <div className="font_h3 ranking_amount">RM 1000</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

function RankingList() {
  const { t } = useTranslation();
  return (
    <div className="section" id="rankinglist">
      <div>
        <div className="font_h2 home_title">
        <img src="https://b88club.net/img/homepage/mainpage_title_01.svg"></img>
          {t('ranking_list')}</div>
      </div>

      <div className="d-none d-lg-block">
        <DesktopRankingTable />
      </div>
      <div className="d-lg-none">
        <MobileRankingTable />
      </div>
    </div>
  );
}

function HomePage() {
  return (
    <div className="home-bg">
      <Banner />
      <SpeakerAnn />
      {/* <img src="img/400x150.png"className="mobileimg"></img> */}
      <img src="img/1920x300.jpg"></img>
      <Container>
     
        <HomeGame />
        <Promo />
        <RankingList />
      
      </Container>
    </div>
  );
}

export default HomePage;
