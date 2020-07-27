import React from 'react'

const Announcement = (props) => {
  const { winner, draw } = props
  if (winner) {
    return (
      <h4 style={{ fontSize: '2rem', textAlign: 'center' }}>
        Player {winner} Wins!
      </h4>
    )
  } else if (draw) {
    return <h4 style={{ fontSize: '2rem', textAlign: 'center' }}>Match Draw</h4>
  } else {
    return null
  }
}

export default Announcement
