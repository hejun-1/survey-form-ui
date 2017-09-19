import React from 'react';
import { Link } from 'react-router';
import './Menu.css';

const Menu = (props) => (
  <div className="app-menu">
    <Link to="/survey"><div className="survey-button"><span className="app-menu-text">调查问卷</span></div></Link>
    <Link to="/report"><div className="report-button"><span className="app-menu-text">报告查询</span></div></Link>
  </div>
)

export default Menu;