import React from 'react';

import './WeddingMainPage.css';
import WeddingImgComponent from '../../components/WeddingImgComponent';
import headerImg from '../../assets/images/header_img.jpg';
import { brideName, groomName } from '../../constants/weddingInfo';
import WeddingCalendarComponent from '../../components/WeddingCalendarComponent';

function WeddingMainPage(): React.JSX.Element {
  return (
    <div className={'wedding-card'}>
      <header className={'wedding-card__header'}>
        <h1 className={'wedding-card__header-h1'}>2024.12.14</h1>
        <h2 className={'wedding-card__header-h2'}>Saturday</h2>
        <WeddingImgComponent style={{ width: '100%' }} src={headerImg} />
        <p>
          {groomName}&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;{brideName}
        </p>
        <p>2024년 12월 14일 토요일 오후 1시</p>
        <p>천안 비렌티 루체오홀</p>
      </header>
      <main>
        {/*글*/}
        <section className={'wedding-card__section'}>
          <p>초대합니다</p>
          <p>초대초대초대초대</p>
          <p>초대초대초대초대</p>
          <p>초대초대초대초대</p>
        </section>
        {/*연락처*/}
        <section className={'wedding-card__section'}>
          <p>연락처</p>
          <p>연락처연락처연락처연락처</p>
          <p>연락처연락처연락처연락처</p>
          <p>연락처연락처연락처연락처</p>
        </section>
        {/*일자 및 타이머*/}
        <section className={'wedding-card__section'}>
          <WeddingCalendarComponent />
        </section>
        {/*사진*/}
        <section className={'wedding-card__section'}>
          <p>사진</p>
          <p>사진사진사진사진</p>
          <p>사진사진사진사진</p>
          <p>사진사진사진사진</p>
        </section>
        {/*위치, 지도 및 네비게이션 공유*/}
        <section className={'wedding-card__section'}>
          <p>지도</p>
          <p>지도지도지도지도</p>
          <p>지도지도지도지도</p>
          <p>지도지도지도지도</p>
        </section>
        {/*식사 및 주차 등 안내사항*/}
        <section className={'wedding-card__section'}>
          <p>안내사항</p>
          <p>안내사항안내사항안내사항안내사항</p>
          <p>안내사항안내사항안내사항안내사항</p>
          <p>안내사항안내사항안내사항안내사항</p>
        </section>
        {/*계좌*/}
        <section className={'wedding-card__section'}>
          <p>계좌</p>
          <p>계좌계좌계좌계좌</p>
          <p>계좌계좌계좌계좌</p>
          <p>계좌계좌계좌계좌</p>
        </section>
        {/*방명록*/}
        <section className={'wedding-card__section'}>
          <p>방명록</p>
          <p>방명록방명록방명록방명록</p>
          <p>방명록방명록방명록방명록</p>
          <p>방명록방명록방명록방명록</p>
        </section>
      </main>
      {/*링크주소 복사, 공유 등*/}
      <footer className={'wedding-card__footer'}>
        <p>링크</p>
        <p>링크링크링크링크</p>
        <p>링크링크링크링크</p>
        <p>링크링크링크링크</p>
      </footer>
      {/*참석여부*/}
    </div>
  );
}

export default WeddingMainPage;
