import React, { useEffect, useState } from 'react';
import useCounter from './useCounter';

const MAX_CAPACITY = 10;

const Accommodate = () => {
  const [isFull, setIsFull] = useState(false);
  const [count, increaseCount, decreaseCount] = useCounter(0);

  useEffect (()=>{
  setIsFull(count>=MAX_CAPACITY)
  console.log(`${count}명 수용중`)
  },[count]);

  return (
    <div style={{padding:16}}>

      <p>{`총 ${count}명 수용했습니다`}</p>
      <button onClick={increaseCount} disabled={isFull}>
        입장
      </button>
      <button onClick={decreaseCount}>퇴장</button>

    {isFull && <p style={{color:"red"}}>정원이 찼습니다.</p>}
    </div>
  );
};

export default Accommodate;