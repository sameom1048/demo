import React, {useEffect, useState} from "react";
import axios from "axios";
import {Link} from "react-router-dom";
import styles from "./detail.module.css";
import { Tab, Tabs } from "react-bootstrap";


function GameDetail() {
    const [gameOriginInfo, setGameOriginInfo] = useState([]);
    const [compareList,  setCompareList] = useState([]);
    const [flag, setFlag] = useState(0);
    const path = window.location.href;
    const parts = path.split('/');
    const lastPart = parts[parts.length - 1];


    useEffect(() => {
        axios.post("/category/game1/detail", lastPart)
            .then(response => {
                setGameOriginInfo(response.data);

            })
            .catch(error => {
                console.log(error);
            });
    }, []);

    // useEffect(() => {
    //     axios.post("/category/game1/detail2", lastPart)
    //         .then(response => {
    //             setGameInfo(response.data);
    //         })
    //         .catch(error => {
    //             console.log(error);
    //         });
    // }, []);

    useEffect(() => {
        axios.post('/compare', { lastPart })
            .then(response => {
                setCompareList(response.data);
            })
            .catch(error => {
                console.log(error);
            });
    }, []);
    
    useEffect(() => {
        document.body.style.backgroundColor = '#F0F6F8';
        document.body.style.color = "black";
        return () => {
            document.body.style.backgroundColor = '#151515';
            document.body.style.color = "white";
        };
    }, []);
    return (
        <>
            <div className={styles.pageTitle}>
                <div className={styles.Title}><span>{gameOriginInfo.gameName}</span></div>
            </div>
            <div className={styles.gameInfo}>
                <span>{gameOriginInfo.gameName}</span>
                <hr style={{ color: 'black' }} />
                <div className={styles.gameImgInfo}>
                    <img src={gameOriginInfo.img} alt="game_image" className={styles.gameImg}/>
                    {compareList.recState}
                    {compareList.minState}
                    <img
                        className={styles.checkImg}
                        src="images/check.png"
                        alt="check"
                    />
                    <img
                        className={styles.checkImg}
                        src="images/check.png"
                        alt="check"
                    />
                </div>
                <span>기본 정보</span>
                {/*<table>*/}
                {/*    <tr>*/}
                {/*        <td>제작</td>*/}
                {/*        <td>{gameOriginInfo.developer}</td>*/}
                {/*    </tr>*/}
                {/*    <tr>*/}
                {/*        <td>배급</td>*/}
                {/*        <td>{gameOriginInfo.publisher}</td>*/}
                {/*    </tr>*/}
                {/*    <tr>*/}
                {/*        <td>출시</td>*/}
                {/*        <td>{gameOriginInfo.releaseDate}</td>*/}
                {/*    </tr>*/}
                {/*    <tr>*/}
                {/*        <td>시스템</td>*/}
                {/*        <td><span onClick={() => minimum(flag)}>최소사양</span></td>*/}
                {/*        <td><span onClick={() => recommend(flag)}>권장사양</span></td>*/}
                {/*    </tr>*/}
                {/*</table>*/}
                {/*{flag===1 && (<div>*/}
                {/*        <table>*/}
                {/*            <tr>*/}
                {/*                <td>CPU</td>*/}
                {/*                <td style={{ textAlign: 'left' }}>{gameOriginInfo.minimumGameCpu}</td>*/}
                {/*            </tr>*/}
                {/*            <tr>*/}
                {/*                <td>그래픽</td>*/}
                {/*                <td style={{ textAlign: 'left' }}>{gameOriginInfo.minimumGameGpu}</td>*/}
                {/*            </tr>*/}
                {/*            <tr>*/}
                {/*                <td>램</td>*/}
                {/*                <td style={{ textAlign: 'left' }}>{gameOriginInfo.minimumGameRam}</td>*/}
                {/*            </tr>*/}
                {/*        </table>*/}
                {/*    </div>*/}
                {/*    )}*/}
                {/*{flag===2 && (<div>*/}
                {/*        <table className={styles.leftAlign}>*/}
                {/*            <tr>*/}
                {/*                <td>CPU</td>*/}
                {/*                <td style={{ textAlign: 'left' }}>{gameOriginInfo.recommendedGameCpu}</td>*/}
                {/*            </tr>*/}
                {/*            <tr>*/}
                {/*                <td>그래픽</td>*/}
                {/*                <td style={{ textAlign: 'left' }}>{gameOriginInfo.recommendedGameGpu}</td>*/}
                {/*            </tr>*/}
                {/*            <tr>*/}
                {/*                <td>램</td>*/}
                {/*                <td style={{ textAlign: 'left' }}>{gameOriginInfo.recommendedGameRam}</td>*/}
                {/*            </tr>*/}
                {/*        </table>*/}
                {/*    </div>*/}
                {/*)}*/}
                <ul className={styles.ul}>
                    <li>제작    {gameOriginInfo.developer}</li>
                    <li>배급    {gameOriginInfo.publisher}</li>
                    <li>출시    {gameOriginInfo.releaseDate}</li>
                    <li>
                        <Tabs activeKey={flag} onSelect={(key) => setFlag(key)}>
                            <Tab eventKey={1} title="최소사양">
                                <div>
                                    <table>
                                        <tbody>
                                        <tr>
                                            <td>CPU</td>
                                            <td style={{ textAlign: 'left' }}>{gameOriginInfo.minimumGameCpu}</td>
                                        </tr>
                                        <tr>
                                            <td>그래픽</td>
                                            <td style={{ textAlign: 'left' }}>{gameOriginInfo.minimumGameGpu}</td>
                                        </tr>
                                        <tr>
                                            <td>램</td>
                                            <td style={{ textAlign: 'left' }}>{gameOriginInfo.minimumGameRam}</td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </Tab>
                            <Tab eventKey={2} title="권장사양">
                                <div>
                                    <table>
                                        <tbody>
                                        <tr>
                                            <td>CPU</td>
                                            <td style={{ textAlign: 'left' }}>{gameOriginInfo.recommendedGameCpu}</td>
                                        </tr>
                                        <tr>
                                            <td>그래픽</td>
                                            <td style={{ textAlign: 'left' }}>{gameOriginInfo.recommendedGameGpu}</td>
                                        </tr>
                                        <tr>
                                            <td>램</td>
                                            <td style={{ textAlign: 'left' }}>{gameOriginInfo.recommendedGameRam}</td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </Tab>
                        </Tabs>
                    </li>
                </ul>
            </div>
            <div className={styles.topGame}>
                <span>Top Games</span>
                <hr style={{ color: 'black' }} />
                <p>Battle Ground</p>
                <p>Football_Manager_2023</p>
                <p>ELDEN_RING</p>
                <p>GrandChase</p>
                <p>EA_SPORTS_FIFA_23</p>
                <p>Eternal_Return</p>
                <p>NBA_2K23</p>
                <p>Monster_Hunter_World</p>
                <p>MONSTER_HUNTER_RISE</p>
                <p>Left_4_Dead_2</p>
            </div>
            <div className={styles.testGame}>
                <span>Most Tested Games</span>
                <hr style={{ color: 'black' }} />
                <p>Battle Ground</p>
                <p>Football_Manager_2023</p>
                <p>ELDEN_RING</p>
                <p>GrandChase</p>
                <p>EA_SPORTS_FIFA_23</p>
                <p>Eternal_Return</p>
                <p>NBA_2K23</p>
                <p>Monster_Hunter_World</p>
                <p>MONSTER_HUNTER_RISE</p>
                <p>Left_4_Dead_2</p>
            </div>
        </>
    );
}


export default GameDetail;