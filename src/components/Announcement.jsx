import React from 'react'

const Announcement = (props) => {
  const { p1Name, p2Name, winner, draw } = props
  if (winner) {
    return <h4 className="announce">{winner === 1 ? p1Name : p2Name} Wins!</h4>
  } else if (draw) {
    return <h4 className="announce">Match Draw</h4>
  } else {
    return null
  }
}

export default Announcement
