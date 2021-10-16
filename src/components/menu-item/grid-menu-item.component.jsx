import React from 'react';
import './grid-menu-item.style.scss'
import { withRouter } from 'react-router-dom';

const GridMenuItemFunc = ({ title, imageUrl, size, history, linkUrl, match }) => {
    return (
        <div style={
            { backgroundImage: `url(${imageUrl})` }
        } className={`${size} grid-menu-item`} onClick = { () => { history.push(`${match.url}${linkUrl}`) } }>
                <div className="grid-menu-item-label">
                    <h1 className="title">{ title }</h1>
                    <span className="sub-title">Shop Now</span>
                </div>
            </div>
    )
}

export const GridMenuItem = withRouter(GridMenuItemFunc);