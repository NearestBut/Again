import React, { Component } from 'react';
import 'resources/css/home.css'

const Home = () => {
    
    return (
        <div className="pages">

            <section className="mainVisual">
                <div className="bg1"></div>
                <div className="bg2"></div>
                <div className="bg3"></div>
            </section>
            {/* mainVisual end */}

            <section className="hotIssue up-on-scroll">
                <p className="secTit1">Hot Issue</p>
                <p className="secTit2">
                    트렌드부터 다양한 이슈및 SNS,<br/>
                    삼화페인트의 모든 소식들을 만나보세요.
                </p>
                <div className="inner">                    
                    <ul className="right right1">
                        <li className="up-on-scroll">
                            <div className="imgWrap">
                                <img src="images/h1.png" />
                                <a href="#"><p className="tag">BrandNews</p></a>
                            </div>
                            <p className="tit">2월의 색 #노란달꽃색 #귀한자수정색</p>
                            <p className="txt">다가오는 봄을 시샘하며, 추위가 심술을 부리는 2월의 대표 색은 환한 보름달의 달무리를 닮은 #노란달꽃색과 볼수록 품위가 느껴지는 #귀한자수정색입니다.</p>                            
                        </li>
                        <li className="up-on-scroll">
                            <div className="imgWrap">
                                <img src="images/h2.jpg" />
                                <a href="#"><p className="tag">BrandNews</p></a>
                            </div>
                            <p className="tit">안심닥터 안심생활 EVENT</p>
                            <p className="txt">
                                실내 바이러스를 99.9% 제거하는 안심닥터로 안심생활 만드세요.<br/>
                                아이패드, 공기청정기 증정 이벤트 진행 중!
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
                            <p className="tit">반려동물인증 받은 펫 러브 컬러와 펫테리어 추천</p>
                            <p className="txt">
                                모든 집사들의 가장 큰 고민. 반려견과 반려묘가 머물기 좋은<br/>
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
                            <p className="tit">투톤라이브 ep2. 스텔라장-빌런😈</p>
                            <p className="txt">2월의 주인공 스텔라 장, 유쾌하고도 발랄한 노란 달꽃 뒤에, 고혹적인 빌런이 숨어있는 삼화페인트 2월 컬러🎨</p>
                        </li>
                        <li className="up-on-scroll">
                            <div className="imgWrap">
                                <img src="images/h6.png" />
                                <a href="#"><p className="tag">Painting Guide</p></a>
                            </div>
                            <p className="tit">EP.01 페인트 오픈하기</p>
                            <p className="txt">페인트 오픈방법부터 V컷 페인팅이라는 꿀팁까지!
                            셀프페인팅의 첫 발걸음 시작해볼까요?</p>
                        </li>
                        <li className="up-on-scroll">
                            <div className="imgWrap">
                                <img src="images/h7.png" />
                                <a href="#"><p className="tag">Samwha Story</p></a>
                            </div>
                            <p className="tit">1월의 색 #긴밤하늘색 #설백색</p>
                            <p className="txt">75주년 기념, 순우리말 색이름 프로젝트</p>
                        </li>
                        <li className="up-on-scroll">
                            <div className="imgWrap">
                                <img src="images/h8.jpg" />
                                <a href="#"><p className="tag">BrandNews</p></a>
                            </div>
                            <p className="tit">생활방수, 이지클리닝 기능을 더한 올 뉴 아이럭스</p>
                            <p className="txt">실내 벽면/벽지용, 방문/가구용, 실내외 겸영 고채도 하이크로마 3종</p>
                        </li>
                    </ul>
                </div>
            </section>
            {/* hotIssue end */}
            
            <section className="concept">
                <p className="secTit1">Color Inspiration</p>
                <p className="secTit2">
                    첫눈 오는 날과 어울리는 컬러들의 집합<br/>
                    집콕 라이프를 유익하게 만들어 줄<br/>
                    블루톤 윈터 컬러로 인테리어에 변화를 주세요
                </p>
                <ul className="cont">
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </section>
            {/* concept end */}

        </div>
    );
}

export default Home;