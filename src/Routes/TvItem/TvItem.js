import React from 'react';
import "./TvItem.css"
import {TvPage} from '../../static/static'

function TvItem({match}) {
    let TvData = TvPage.filter(item => item.id === Number(match.params.itemId))[0]
    console.log(TvData);
    return (
        <div>
            <img src={TvData.img} alt="" />
            <p>{TvData.title}</p>
        </div>
    );
}

export default TvItem;