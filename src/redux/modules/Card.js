import {db} from '../../firebase'
import { collection, getDoc, getDocs, addDoc, updateDoc, doc, deleteDoc } from "firebase/firestore";
// Actions
const LOAD = 'Card/LOAD';
const CREATE = 'Card/CREATE';

const initialState = {
    list: [
        {
            keyword: "잉",
            mean: "잉",
            exam: "잉",
        }
    ]
}

// Action Creators
export function loadCard(card_list){
    return{ type:LOAD, card_list:card_list }
}
export function createCard(Card) {
    return { type: CREATE, Card };
}

// Middleware
export const loadCardFB = () => {
    return async function(dispatch) {
        const card_data = await getDocs(collection(db, 'mydictionary'));
        // console.log(card_data);
        let card_list = [];
        card_data.forEach((doc) => {
            // console.log(doc)
            // console.log(doc.data())
            // card_list = [...card_list, {...doc.data()}];
            // 위 방법대로 해도 되지만 push도 사용 가능
            card_list.push({id:doc.id, ...doc.data()});
            
        })
        // console.log(card_list);
        // 오! 파이어베이스에서 잘 불러왔다 이제는 우리 뷰에서 볼 수 있게 리덕스 loadCard함수를 dispatch 해주자
        dispatch(loadCard(card_list));
        // 아직까지는 안 바뀜 리듀서에서 바꿔주는 거임
    }
}

export const addCardFB = (card) => {
    return async function(dispatch) {
        const docRef = await addDoc(collection(db, 'mydictionary'), card);
        // 얘는 데이터값이 아닌 참조값임
        // console.log(docRef);
        // 이렇게 getDoc으로 불러와야 함
        // console.log((await getDoc(docRef)).data());
        
        // 이제 리덕스에 넣기
        const _card = await getDoc(docRef);
        const card_data = {id:_card.id, ..._card.data()};

        console.log(card_data);
        // 잘 나온다, 액션 일으키기
        dispatch(createCard(card_data));
    }
}

// Reducer
export default function reducer(state = initialState, action = {}) {
    switch (action.type) {
        case "Card/LOAD" : {
            return {list: action.card_list};
        }
        case "Card/CREATE": {
            console.log('값 체인지')
            const new_card_list = [...state.list, action.Card];
            return {list: new_card_list};
        }
        default: return state;
    }
}