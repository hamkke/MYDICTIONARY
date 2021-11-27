import React from "react";
// import styled from "styled-components";

import { useHistory } from "react-router-dom";

import { useDispatch } from 'react-redux';
import { addCardFB } from './redux/modules/Card'

const AddCard = (props) => {
    const history = useHistory();
    const input1 = React.useRef(null);
    const input2 = React.useRef(null);
    const input3 = React.useRef(null);

    const dispatch = useDispatch();

    return (
        <div>
            <div>
                <div className="Wrap">
                    <div className="nomargin">
                        <p>단어</p>
                        <input type="text" ref={input1}/>
                    </div>
                    <div>
                        <p>뜻</p>
                        <input type="text" ref={input2}/>
                    </div>
                    <div>
                        <p>예시</p>
                        <input type="text" ref={input3}/>
                    </div>
                </div>
            </div>
            <button onClick={() => {
                history.goBack();
                // 리덕스에 추가하기
                // dispatch(createCard(
                //     {
                //         keyword: input1.current.value,
                //         mean: input2.current.value,
                //         exam: input3.current.value,
                //     }
                
                // ));
                // 파이어베이스에 추가하기
                dispatch(addCardFB(
                    {
                    keyword: input1.current.value,
                    mean: input2.current.value,
                    exam: input3.current.value,
                }
                ));
            }}>추가</button>
        </div>
    );
}

export default AddCard;