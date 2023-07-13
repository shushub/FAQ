import React from 'react';

const Title = () => {
    return (
        <div className='secondbox'>
            <span className='title'>FAQ</span>
                <form>
                    <div className='search-container'>
                        <div className='search-inner'>
                            <input type='text' placeholder='input search text' />
                        </div>
                    </div>
                </form>
                    <div className='icon-box'>
                        <img src="icon.svg" alt=" " />
                    </div>
        </div>
    );
};

export default Title;
