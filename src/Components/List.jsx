import React from 'react';

const option = [
    {
        question: "자주 묻는 질문 TOP 10",
    },
    {
        question: "스튜디오 / 영상",
    },
    {
        question: "수익 정산",
    },
    {
        question: "개인 정보",
    },
    {
        question: "자격",
    },
    {
        question: "계정",
    },
];
const List = () => {
    return (
        <div className='boxframe'>
                {option.map((item, i) => (
                    <span className='listtitle'>
                        {item.question}
                    </span>
            ))}
            </div>
    );
};

export default List;
