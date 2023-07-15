import { useState } from 'react';
import List from './List';
import Message from './Message';

function Accordion(){
    const[selected, setSelected] = useState(null);

    const toggle = (i) => {
        if(selected === i) {
            return setSelected(null)
        }
        setSelected(i)
    }
    return (
        <div className='thirdbox'>
            <div>
                {data.map((item, i) => (
                    <div className='container'>
                        <div className='accordion-box'>
                            <div className='titlebox' onClick={() => toggle(i)}>
                                <span>{selected === i ? '∨' : '＞'}</span>
                                <span className='titlequestion'>{item.question}</span>    
                            </div>
                        </div>
                        <div className={selected === i ? 'content show' : 'content'}>
                            <span className='contenttext'>{item.view}</span>
                        </div>
                    </div> 
                        ))}
            </div>
            <List />
            <Message />
        </div>
    );
};

const data = [
    {
        id: 1,
        question: "하루에 업로드할 수 있는 영상의 개수 제한이 있나요?",
        view: "Swap" 
    },
    {
        id:2,
        question: "Test 2",
        view: "Swap"
    },
    {   id:3,
        question: "This is panel header 1",
        view: "Swap"
    },
    {   id:4,
        question: "This is panel header 1",
        view: "Swap"
    },
    {   id:5,
        question: "This is panel header 1",
        view: "Swap"
    },
    {   id:6,
        question: "This is panel header 1",
        view: "Swap"
    },
    {   id:7,
        question: "This is panel header 1",
        view: "Swap"
    },
];

    

export default Accordion;

