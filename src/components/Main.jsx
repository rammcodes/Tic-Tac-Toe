import React from 'react'

const Main = (props) => {
  const { p1Timer, p2Timer, blocks, actvPlr, onBlockPress } = props
  return (
    <div className="main">
      <div className="timer">
        <span className={`sec ${actvPlr === 1 ? 'actv' : ''}`}>{p1Timer}</span>
        <h6>Timer</h6>
      </div>
      <div className="board">
        {blocks.map((item, idx) => (
          <div onClick={() => onBlockPress(idx)} key={idx} className="ele">
            <span className="val">{item.val}</span>
          </div>
        ))}
      </div>
      <div className="timer">
        <span className={`sec ${actvPlr === 2 ? 'actv' : ''}`}>{p2Timer}</span>
        <h6>Timer</h6>
      </div>
    </div>
  )
}

export default Main
