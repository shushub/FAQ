import React from 'react';

const data = [
    {
        question: "하루에 업로드할 수 있는 영상의 개수 제한이 있나요?",
        view: "Swap" 
    },
    {
        question: "Test 2",
        view: "Swap"
    },
    {
        question: "This is panel header 1",
        view: "Swap"
    },
    {
        question: "This is panel header 1",
        view: "Swap"
    },
    {
        question: "This is panel header 1",
        view: "Swap"
    },
];
const Accordion = () => {
    return (
        <div className='container'>
                {data.map((item, i) => (
                <div className='accorion-box'>
                        <span className='titlequestion'>
                            {item.question}
                        </span>
                    <div className='content'>
                        <span className='contenttext'>{item.view}</span>
                    </div>
                </div>
            ))}
            </div>
    );
};

export default Accordion;
