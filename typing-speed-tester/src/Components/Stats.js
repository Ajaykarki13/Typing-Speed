
import React from 'react'

//stats after test gets over

const Stats = (
    {wpm,accuracy,correctChars,incorrectChars,missedChars,extraChars}
) => {


  return (
    <div className='stats-box'>
<div className='stats'>
    <div className='title'>WPM</div>
    <div className='subtitle'>{wpm}</div>
    <div className='title'>Accuracy</div>
    <div className='subtitle'>{accuracy}</div>
    <div className='title'>Characters</div>
    <div className='subtitle'>
        {`Correct: ${correctChars} `} 
        {`Incorrect: ${incorrectChars} `} 
        {`Missed: ${missedChars} `} 
        {`Extra: ${extraChars} `}
        </div>
</div>



    </div>
  )
}

export default Stats