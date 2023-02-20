import React from 'react';
import Button from './Button';

const allButtons=["All","Music", "Gaming", "Thoughts", "Spiritual", "News", "Tourism"];
const ButtonList = () => {
  return (
    <div className='p-2 flex '>
      {allButtons.map(btn => {
        return <Button key={btn} name={btn}/>
      })
      }
    </div>
  )
}

export default ButtonList