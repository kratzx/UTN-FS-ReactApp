import React from 'react';

const Purchase = ( {index, clickPurchaseHandler} ) => {
    return (
        <div key={'purchase' + index}>
            <button onClick={clickPurchaseHandler}> Buy </button>
        </div>
    );
}
export default Purchase;