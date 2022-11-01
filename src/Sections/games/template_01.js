import {Tab,Col,Nav} from "react-bootstrap";
import { Link } from "react-router-dom";
import "./template_01.css";
import { useTranslation, Trans } from 'react-i18next';
const Game01 = () => {
    const { t } = useTranslation();
    return (
        <>
            <Tab.Container id="homegame_tab" defaultActiveKey="slot">
                <div className="home_game_wrap">
                    <Col sm={2}>
                        <Nav variant="pills" className="home_game_selection">
                            <Nav.Item>
                                <Nav.Link eventKey="slot">{t("slot")}</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="casino">{t("live_casino")}</Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Col>
                    <Col sm={10}>
                        <Tab.Content>
                            <Tab.Pane eventKey="slot">
                                <div className="homegame_slot_wrap">
                                    {Array.from({ length: 10 }).map((_, index) => (
                                        <Link to="./slots" key={index}>
                                            <img src="https://storage.googleapis.com/fg_merchant_image/fg902/menu_drop/slots/2.png" alt="918KISS" className="navgameimg" width="" />
                                        </Link>
                                    ))}
                                </div>
                            </Tab.Pane>
                            <Tab.Pane eventKey="casino">
                                <div className="homegame_casino_wrap">
                                    {Array.from({ length: 4 }).map((_, index) => (
                                        <Link to="./slots" key={index}>
                                            <img src="https://storage.googleapis.com/fg_merchant_image/fg902/mobile/gameid/casino/6.png" alt="PLAYTECH" className="navgameimg" width="" />
                                        </Link>
                                    ))}
                                </div>
                            </Tab.Pane>
                        </Tab.Content>
                    </Col>
                </div>
            </Tab.Container>
        </>
    );
};

export default Game01;