import React from 'react';
import './WeddingCalendarComponent.css'; // This assumes you have a CSS file named Calendar.css

const WeddingCalendarComponent = () => {
  return (
    <div className='calendar-container'>
      <header className='calendar-header'>
        <h1>2024.12.14</h1>
        <p>토요일 오후 1시</p>
      </header>
      <table className='calendar-table'>
        <thead>
          <tr>
            <th>일</th>
            <th>월</th>
            <th>화</th>
            <th>수</th>
            <th>목</th>
            <th>금</th>
            <th>토</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>2</td>
            <td>3</td>
            <td>4</td>
            <td>5</td>
            <td>6</td>
            <td>7</td>
          </tr>
          <tr>
            <td>1</td>
            <td>2</td>
            <td>3</td>
            <td className='today'>4</td>
            <td>5</td>
            <td>6</td>
            <td>7</td>
          </tr>
          <tr>
            <td>1</td>
            <td>2</td>
            <td>3</td>
            <td>4</td>
            <td>5</td>
            <td>6</td>
            <td>7</td>
          </tr>
          <tr>
            <td>1</td>
            <td>2</td>
            <td>3</td>
            <td>4</td>
            <td>5</td>
            <td>6</td>
            <td>7</td>
          </tr>
          <tr>
            <td>1</td>
            <td>2</td>
            <td>3</td>
            <td>4</td>
            <td>5</td>
            <td>6</td>
            <td>7</td>
          </tr>
        </tbody>
      </table>
      <footer className='calendar-footer'>
        <p>신랑 · 신부의 결혼식이 오늘입니다.</p>
      </footer>
    </div>
  );
};

export default WeddingCalendarComponent;
