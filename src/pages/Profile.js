import React, { Component } from 'react';

const Profile = () => {
    return (
        <div>
            <h1>Profile Page</h1>
            <article>
                <div>
                    <h2>Introduction</h2>
                    <img src="" width="150" height="150" />
                    <h3>Name :   </h3>
                    <h3>Birth : </h3> {/* MM DD YYYY  */}
                </div>
                <div class="right-box">
                    <h5>여태까지 이런 코드는 없었다.<br />
                        이것은 코드 인가 바코드 인가
                    </h5>
                </div>
                <div class="left-box">
                    <h5>여기에 자기소개를 하면 좋지 않을까요? 안녕하세요?</h5>
                </div>
            </article>
            <div>
                <h2> Career / Education / License </h2>
                <div>
                    <h3>Career</h3>
                    <h5>2013 ~ 2015  </h5>
                    <h5>2015 ~ 2020  </h5>
                </div>
                <div>
                    <h3>Education</h3>
                    <h5></h5>
                    <h5>2020.10 ~ 2021.4 Global IT Java 기반 융합형 SW 개발 양성 과정 수료</h5>
                </div>
                <div>
                    <h3>License</h3>
                    <h5> 취득 시 추가 예정 </h5>
                </div>
            </div>
            <div>
                <h2> Vision </h2>
                <h5>
                    내 안에 소중한 혼자만의 장소가 있어 아직은 별거 아닌 풍경이지만
                    조금만 기다리면 곧 만나게 될 걸 <br />
                    이 안에 멋지고 놀라운 걸 심어뒀는데 아직은 아무것도 안 보이지만
                    조금만 기다리면 알게 될 거야
               </h5>
            </div>
        </div>

    );
}

export default Profile;