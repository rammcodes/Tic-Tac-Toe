import React from 'react'

const Start = (props) => {
  const {
    p1Name,
    p2Name,
    winner,
    draw,
    actvPlr,
    isStarted,
    onReset,
    onEnd,
    onStart,
    onNameChange,
  } = props
  return (
    <div className="start">
      <div className="player-cont">
        <input
          maxlength="10"
          minLength="3"
          type="text"
          name="p1Name"
          value={p1Name}
          onChange={(e) => {
            onNameChange(e)
          }}
          className={`${actvPlr === 1 ? 'actv-plr' : ''}`}
        />
      </div>
      {winner || draw ? (
        <button className="switch blue" onClick={onReset}>
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
        <input
          maxlength="10"
          minLength="3"
          onChange={(e) => {
            onNameChange(e)
          }}
          name="p2Name"
          type="text"
          value={p2Name}
          className={`${actvPlr === 2 ? 'actv-plr' : ''}`}
        />
      </div>
    </div>
  )
}

export default Start
