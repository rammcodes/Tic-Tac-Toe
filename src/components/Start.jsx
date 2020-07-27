import React from 'react'

const Start = (props) => {
  const { p1Name, p2Name, winner, draw, isStarted, onReset, onEnd, onStart } = props
  return (
    <div className="start">
      <div className="player-cont">
        <input
          type="text"
          value={p1Name}
          onChange={() => console.log('no')}
          className=" actv-plr"
        />
      </div>
      {winner || draw ? (
        <button className="switch pink" onClick={onReset}>
          RESET
        </button>
      ) : isStarted ? (
        <button className="switch off" onClick={onEnd}>
          END
        </button>
      ) : (
        <button className="switch" onClick={onStart}>
          START
        </button>
      )}
      <div className="player-cont">
        <input onChange={() => console.log('no')} type="text" value={p2Name} />
      </div>
    </div>
  )
}

export default Start
