import React, { useState, useEffect, Component } from 'react';
import 'resources/css/home.css';
import Left from 'pages/components/home/left';
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { 
    Navigation, 
    Pagination, 
    Scrollbar, 
    A11y,
    Autoplay
} from "swiper";

//style
import "swiper/swiper.scss";
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
import "swiper/components/scrollbar/scrollbar.scss";
import 'resources/css/portfolio.css';
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Autoplay]);

const Home2 = () => {    
    return (
        <div className="pages">
                        
            <Swiper
            className="mainVisual"
            Navigation={{ clickable: true }}
            spaceBetween={0}
            slidesPerView={1}
            autoplay={{ delay: "2000", disableOnInteraction: false }}
            // direction= {'vertical'}
            speed={600}
            loop={true}
            mousewheel={true}
            pagination={{ clickable: true }}
            // scrollbar={{ draggable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log("slide change")}            
            >
            <SwiperSlide className="bg bg1"> slide1 </SwiperSlide>
            <SwiperSlide className="bg bg2"> slide2 </SwiperSlide>
            <SwiperSlide className="bg bg3"> slide3 </SwiperSlide>
            </Swiper>
            {/* mainVisual end */}            

            <section className="hotIssue">
                <p className="secTit1 up-on-scroll">About Me</p>
                <p className="secTit2 up-on-scroll">
                    프로그래밍이 바꿔 놓은,<br/>
                    저의 다양한 면모를 소개합니다. 
                </p>
                <Left/>
                <div className="inner">                    
                    <ul className="right right1">
                        <li className="up-on-scroll">
                            <div className="imgWrap">
                                <img src="images/h1.png" />
                                <a href="#"><p className="tag">BrandNews</p></a>
                            </div>
                            <p className="tit">Google Knows Everything</p>
                            <p className="txt">프로그래밍을 하며 향상한 면모 중 단연 구글링이 돋보입니다. "검색해서 내 것으로 만들자!" #구글링마스터</p>                            
                        </li>
                        <li className="up-on-scroll">
                            <div className="imgWrap">
                                <img src="images/h2.jpg" />
                                <a href="#"><p className="tag">BrandNews</p></a>
                            </div>
                            <p className="tit">Type Speedy, Also Accurately</p>
                            <p className="txt">
                                한컴타자나 영작 과제보다도 영타 속도 향상에 효과적인 것은
                                바로 코딩이었습니다... #빠르고 #정확하게 #빨간 줄은 NO
                            </p>
                        </li>
                        <li className="up-on-scroll">
                            <div className="imgWrap">
                                <img src="images/h3.jpg" />
                                <a href="#"><p className="tag">BrandNews</p></a>
                            </div>
                            <p className="tit">항바이러스 페인트 ‘안심닥터’ 출시</p>
                            <p className="txt">항바이러스 원료 함유, 바이러스 99.9% 사멸…1월5일 대리점 출시 CGV 강남, 인천시청, 해썹인증 공장, 어린이 이용시설 등 적용 완료</p>
                        </li>
                        <li className="up-on-scroll">
                            <div className="imgWrap">
                                <img src="images/h4.jpg" />
                                <a href="#"><p className="tag">Pet & Life</p></a>
                            </div>
                            <p className="tit">반려동물인증 받은 펫 러브 컬러와<br/> 펫테리어 추천</p>
                            <p className="txt">
                                모든 집사들의 가장 큰 고민. 반려견과 반려묘가 머물기 좋은 
                                최상의 공간 만드는 방법
                            </p>
                        </li>
                    </ul>
                    <ul className="right right2">
                        <li className="up-on-scroll">
                            <div className="imgWrap">
                                <img src="images/h5.png" />
                                <a href="#"><p className="tag">BrandNews</p></a>
                            </div>
                            <p className="tit">You Never Walk Alone</p>
                            <p className="txt">팀 프로젝트를 진행하면서 놀랍게도 타인의 마음을 이해하는 것은 물론 타인의 코드까지 이해하게 되었습니다. #의사소통 #협업</p>
                        </li>
                        <li className="up-on-scroll">
                            <div className="imgWrap">
                                <img src="images/h6.png" />
                                <a href="#"><p className="tag">Painting Guide</p></a>
                            </div>
                            <p className="tit">Drink, Anything It Is</p>
                            <p className="txt">낮에는 커피, 밤에는 맥주가 작업의 집중력을 높여줍니다. #얼죽아 #작업 후 맥주 한 캔</p>
                        </li>
                        <li className="up-on-scroll">
                            <div className="imgWrap">
                                <img src="images/h7.png" />
                                <a href="#"><p className="tag">Samwha Story</p></a>
                            </div>
                            <p className="tit">Just Do It!</p>
                            <p className="txt">
                                작업을 할 때 도전정신이 중요하다는 것을 깨달았습니다. 그리고 관점을 달리 했죠. 
                                에러를 두려워하고 생각만 할 시간에 코드를 치고 실행해보기로요! #도전정신 #일단 해봐!
                            </p>
                        </li>
                        <li className="up-on-scroll">
                            <div className="imgWrap">
                                <img src="images/h8.jpg" />
                                <a href="#"><p className="tag">BrandNews</p></a>
                            </div>
                            <p className="tit">생활방수, 이지클리닝 기능을 더한<br/>올 뉴 아이럭스</p>
                            <p className="txt">실내 벽면/벽지용, 방문/가구용, 실내외 겸영 고채도 하이크로마 3종</p>
                        </li>
                    </ul>
                </div>
            </section>
            {/* hotIssue end */}
            
            <section className="concept up-on-scroll">
                <p className="secTit1">Color Inspiration</p>
                <p className="secTit2">
                    첫눈 오는 날과 어울리는 컬러들의 집합<br/>
                    집콕 라이프를 유익하게 만들어 줄<br/>
                    블루톤 윈터 컬러로 인테리어에 변화를 주세요
                </p>
                <ul className="cont">
                    <li className="left-on-scroll"><img src="images/concept.jpg" /></li>
                    <li>
                        <div className="card up-on-scroll">
                            <div className="color" style={{'background':'#005171'}}></div>
                            <p className="tit">Teal Blue</p>
                            <p className="txt">SH S 5040-B (0153D)</p>
                        </div>                        
                        <div className="card up-on-scroll">
                            <div className="color" style={{'background':'#98B2C6'}}></div>
                            <p className="tit">Gray Blue</p>
                            <p className="txt">SH S 2020-R90B (0087C)</p>
                        </div>                        
                    </li>
                    <li>
                        <div className="card up-on-scroll">
                            <div className="color" style={{'background':'#7E9AAA'}}></div>
                            <p className="tit">Provence Blue</p>
                            <p className="txt">SH S 3020-B (0088D)</p>
                        </div>                        
                        <div className="card up-on-scroll">
                            <div className="color" style={{'background':'#BDC8D2'}}></div>
                            <p className="tit">Winter Sky</p>
                            <p className="txt">SH S 1510-R90B (0087B)</p>
                        </div>                        
                    </li>
                </ul>
            </section>
            {/* concept end */}

            <section className="business up-on-scroll"></section>
            {/* business end */}

            <section className="news up-on-scroll">
                <ul className="ir">
                   <li className="tit">IR</li>
                   <li>
                      <p className="irTxt1">삼화페인트 000390</p> 
                      <p className="irTxt2">11,200</p> 
                      <p className="irTxt3"><span className="mark_up"></span>100 (+0.90%)</p> 
                   </li>
                </ul>
                <ul className="list">
                   <li className="tit">News</li>
                   <li>
                       <p className="sub">'안심닥터’ 출시 기념 안심생활 이벤트</p>
                       <p className="txt">2월14일까지 ‘안심생활’ 이벤트 진행. 에어팟, 아이패드, 공기청정기 등 증정 안심닥터, 살균제 내성 강한 비피막바이러스 사멸, 종합 항바이러스도료</p>
                   </li>
                   <li>
                       <p className="sub">장애인종합복지시설 위한 컬러유니버설디자인 개발추진</p>
                       <p className="txt">발달장애인시설 컬러유니버설디자인 확장. 컬러유니버설디자인협회와 연구개발 진행</p>
                   </li>
                   <li>
                       <p className="sub">항바이러스 페인트 ‘안심닥터’ 출시</p>
                       <p className="txt">항바이러스 원료 함유, 바이러스 99.9% 사멸…1월5일 대리점 출시 CGV 강남, 인천시청, 해썹인증 공장, 어린이 이용시설 등 적용 완료</p>
                   </li>
                </ul>
            </section>
            {/* news end */}
            
            <section className="comment">
                <div className="inputWrap">
                    <input type="text" placeholder="제품, 컬러, 대리점 검색" />
                </div>
                <p className="sub">추천 검색어</p>
                <p className="txt">#안심닥터 #그린방수마스터 #아이럭스 #아이생각</p>
            </section>
            {/* comment end */}

        </div>
    );
}

export default Home2;