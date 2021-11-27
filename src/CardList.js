import React from "react";
import styled from "styled-components";

// useDispatch는 데이터를 업데이트할 때,
// useSelector는 데이터를 가져올 때 씁니다.
import {useDispatch, useSelector} from "react-redux";

const CardList = (props) => {
    // const card = props.data;
    const card = useSelector((state) => state.Card.list);
    return(
        <div>
            {card.map((a, b) => {
                return(
                    <ListStyle className="Wrap" key={b}>
                        <WordBx className="nomargin">
                            <ElemP>단어</ElemP>
                            <h2>{card[b].keyword}</h2>
                        </WordBx>
                        <WordBx>
                            <ElemP>뜻</ElemP>
                            <h3>{card[b].mean}</h3>
                        </WordBx>
                        <WordBx>
                            <ElemP>예시</ElemP>
                            <p className="ColorBlue">{card[b].exam}</p>
                        </WordBx>
                    </ListStyle> 
                );
            })}
        </div>
    );

}
const ListStyle = styled.div`
    margin-bottom:20px;
    padding:20px;
    border:1px solid #000;
    .nomargin {margin-top:0;}
`;
const WordBx = styled.div`
    margin-top: 10px;
    .ColorBlue{color:#2AB57A;}
`;
// 
const ElemP = styled.p`
    margin-bottom:5px;
`;
export default CardList;