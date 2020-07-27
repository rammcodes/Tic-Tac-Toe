import React from 'react'

const Main = (props) => {
  const { p1Timer, p2Timer, blocks, onBlockPress } = props
  return (
    <div className="main">
      <div className="timer">
        <span className="sec actv">{p1Timer}</span>
        <span>Timer</span>
      </div>
      <div className="board">
        {blocks.map((item, idx) => (
          <div onClick={() => onBlockPress(idx)} key={idx} className="ele">
            <span className="val">{item.val}</span>
          </div>
        ))}
      </div>
      <div className="timer">
        <span className="sec">{p2Timer}</span>
        <span>Timer</span>
      </div>
    </div>
  )
}

export default Main
