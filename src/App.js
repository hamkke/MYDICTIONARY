import React from 'react';

import CardList from './CardList';
import AddCard from './AddCard';

import styled from "styled-components";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus  } from '@fortawesome/free-solid-svg-icons';

import {Route} from 'react-router-dom';
import { useHistory } from "react-router-dom";

import { useDispatch } from 'react-redux';
import { loadCardFB } from './redux/modules/Card';

// import {db} from './firebase';
// import { collection, getDoc, getDocs, addDoc, updateDoc, doc, deleteDoc } from "firebase/firestore";

function App() {
  const history = useHistory();
  const dispatch = useDispatch();
  // 파이어스토어에서 가져오기
  // React.useEffect(async() => {
  //   console.log(db);
  //   const query = await getDocs(collection(db, 'mydictionary'));
  //   console.log(query);
  //   // promise가 뜸 > async await 설정을 해줘야 함
  //   // 설정하고 나면 잘 나옴
  //   // 보기 좋게 forEach문 돌리기
  //   query.forEach((doc) => {
  //     console.log(doc.id, doc.data());
  //     // 0fyBURAG1CbhvWsepeyB {text: '홍', completed: false}
  //   });
  // });

  React.useEffect(() => {
    //  추가하기
    // addDoc(collection(db, 'mydictionary'), 
    // {
    //   keyword: "잉",
    //   mean: "잉",
    //   exam: "잉",
    // }
    // );

    // 수정하기
    // 수정 할 독 가져오기
    // doc(어디에서, 어느doc, 고유id)
    // const docRef = doc(db, 'mydictionary', 'eIWprZNdYeDpyuQDZzrm');
    // updateDoc(docRef,      {
    //     keyword: "잉",
    //     mean: "잉",
    //     exam: "잉",
    //   });

    // 삭제하기
    // const docRef = doc(db, 'mydictionary', 'qld1jXZmc6s52pCLIBxb');
    // deleteDoc(docRef);

    // 콜렉션 추가하기
    // addDoc(collection(db, 'walwal'), {text:"호호호호호호"});
    dispatch(loadCardFB());
  });

  return (
    <div className="App">
      <Header>(✿◡‿◡)</Header>

      <Container>

        <Route path="/" exact>
          <CardList></CardList>
        </Route>

        <Route path="/addcard" exact>
          <AddCard></AddCard>
        </Route>
      </Container>

      <BtnWrap>
        <button onClick={() => {
          history.push("/addcard");
        }}>
          <FontAwesomeIcon icon={faPlus}></FontAwesomeIcon>
        </button>
      </BtnWrap>
    </div>
  );
}

const Header = styled.div`
  width:100vw;
  background:#2AB57A;
  color:#fff;
  font-size:40px;
  padding:10px;
  text-align:center;
`;
const Container = styled.div`
  margin:60px auto 0;
  padding:20px;
  width:50vw;
  max-width:350px;
  background:#fff;
  border:3px solid #2AB57A;
  border-radius: 5px;
`;
const BtnWrap = styled.div`
  button {
    position:fixed;
    left:1%;
    bottom:0;
    background:transparent;
    border:none;
    font-size:200px;
  }
  button:hover {
    color:#2AB57A;
    transition: .3s color;
  }
`;
export default App;