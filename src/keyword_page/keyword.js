import React, { Component } from 'react';
import './keywordstyle.css';



const keywordCategory = [
    '성격', '취향', 
];

function TargetInfo(props) {
    return (
        <h1>사람 정보 입력 부분</h1>
    );
}

function Category(props) {

}

class KeywordMain extends Component {
    render() {
        return (
            <div className='tagmain'>
                <h1> Test page </h1>
                <TargetInfo></TargetInfo>
            </div>
        );
    }
}

export default KeywordMain;