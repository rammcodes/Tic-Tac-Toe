import React, { Component } from 'react'
import Start from './components/Start'
import Main from './components/Main'
import Announcement from './components/Announcement'
import { initialState } from './Data'
import './App.scss'

class App extends Component {
  state = JSON.parse(JSON.stringify(initialState))

  onBlockPress = (idx) => {
    const { blocks, isStarted, actvPlr, winner } = this.state

    if (!isStarted) return

    if (winner) return null

    if (blocks[idx].val) return

    let newBlocks = [...blocks]
    newBlocks = newBlocks.map((item, i) => {
      if (idx === i) {
        if (actvPlr === 1) {
          item.val = 'X'
        } else {
          item.val = 'O'
        }
        return item
      } else {
        return item
      }
    })
    this.setState({
      blocks: newBlocks,
    })
  }

  onNameChange = (e) => {
    const { name, value } = e.target

    if (!this.state.isStarted) {
      this.setState({
        [name]: value,
      })
    }
  }

  onStart = () => {
    this.setState({
      isStarted: true,
      actvPlr: 1,
    })
    this.p1TimerInst = setInterval(() => {
      this.setState({
        p1Timer: this.state.p1Timer + 1,
      })
    }, 1000)
  }

  onEnd = () => {
    clearInterval(this.p1TimerInst)
    clearInterval(this.p2TimerInst)
    this.setState(JSON.parse(JSON.stringify(initialState)))
  }

  onReset = () => {
    this.setState(JSON.parse(JSON.stringify(initialState)))
  }

  checkDraw = () => {
    const { blocks } = this.state
    let hasEmpty = false
    for (let i = 0; i < blocks.length; i++) {
      if (!blocks[i].val) {
        hasEmpty = true
      }
    }

    return hasEmpty
  }

  clear = () => {
    if (this.state.actvPlr === 1) {
      clearInterval(this.p1TimerInst)
    } else {
      clearInterval(this.p2TimerInst)
    }
    this.setState({
      p1Timer: 0,
      p2Timer: 0,
      actvPlr: null,
    })
  }

  checkBlocks = () => {
    const { blocks, actvPlr } = this.state

    let winner = false

    if (blocks[0].val && blocks[1].val && blocks[2].val) {
      if (blocks[0].val === blocks[1].val && blocks[0].val === blocks[2].val) {
        this.setState({ winner: actvPlr })
        winner = true
      }
    }

    if (blocks[3].val && blocks[4].val && blocks[5].val) {
      if (blocks[3].val === blocks[4].val && blocks[3].val === blocks[5].val) {
        this.setState({ winner: actvPlr })
        winner = true
      }
    }

    if (blocks[6].val && blocks[7].val && blocks[8].val) {
      if (blocks[6].val === blocks[7].val && blocks[6].val === blocks[8].val) {
        this.setState({ winner: actvPlr })
        winner = true
      }
    }

    if (blocks[0].val && blocks[3].val && blocks[6].val) {
      if (blocks[0].val === blocks[3].val && blocks[0].val === blocks[6].val) {
        this.setState({ winner: actvPlr })
        winner = true
      }
    }

    if (blocks[1].val && blocks[4].val && blocks[7].val) {
      if (blocks[1].val === blocks[4].val && blocks[1].val === blocks[7].val) {
        this.setState({ winner: actvPlr })
        winner = true
      }
    }

    if (blocks[2].val && blocks[5].val && blocks[8].val) {
      if (blocks[2].val === blocks[5].val && blocks[2].val === blocks[8].val) {
        this.setState({ winner: actvPlr })
        winner = true
      }
    }

    if (blocks[0].val && blocks[4].val && blocks[8].val) {
      if (blocks[0].val === blocks[4].val && blocks[0].val === blocks[8].val) {
        this.setState({ winner: actvPlr })
        winner = true
      }
    }
    if (blocks[2].val && blocks[4].val && blocks[6].val) {
      if (blocks[2].val === blocks[4].val && blocks[2].val === blocks[6].val) {
        this.setState({ winner: actvPlr })
        winner = true
      }
    }

    if (winner) {
      this.clear()
    } else {
      if (!this.checkDraw()) {
        this.clear()
        this.setState({
          draw: true,
        })
      } else {
        if (this.state.actvPlr === 1) {
          clearInterval(this.p1TimerInst)
          this.setState({ actvPlr: 2, p1Timer: 0 })
          this.p2TimerInst = setInterval(() => {
            this.setState({
              p2Timer: this.state.p2Timer + 1,
            })
          }, 1000)
        } else {
          clearInterval(this.p2TimerInst)
          this.setState({ actvPlr: 1, p2Timer: 0 })
          this.p1TimerInst = setInterval(() => {
            this.setState({
              p1Timer: this.state.p1Timer + 1,
            })
          }, 1000)
        }
      }
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.blocks !== this.state.blocks && this.state.isStarted) {
      this.checkBlocks()
    }

    if (prevState.p1Timer !== this.state.p1Timer) {
      if (this.state.p1Timer > 5) {
        this.setState({
          winner: 2,
          p1Timer: 0,
        })
        clearInterval(this.p1TimerInst)
      }
    }

    if (prevState.p2Timer !== this.state.p2Timer) {
      if (this.state.p2Timer > 5) {
        this.setState({
          winner: 1,
          p1Timer: 0,
        })
        clearInterval(this.p2TimerInst)
      }
    }
  }

  render() {
    return (
      <div className="app">
        <div className="container">
          <Start
            p1Name={this.state.p1Name}
            p2Name={this.state.p2Name}
            isStarted={this.state.isStarted}
            winner={this.state.winner}
            draw={this.state.draw}
            actvPlr={this.state.actvPlr}
            onReset={this.onReset}
            onEnd={this.onEnd}
            onStart={this.onStart}
            onNameChange={this.onNameChange}
          />

          <Main
            p1Name={this.state.p1Name}
            p2Name={this.state.p2Name}
            p1Timer={this.state.p1Timer}
            p2Timer={this.state.p2Timer}
            blocks={this.state.blocks}
            onBlockPress={this.onBlockPress}
            actvPlr={this.state.actvPlr}
          />
          <Announcement
            p1Name={this.state.p1Name}
            p2Name={this.state.p2Name}
            winner={this.state.winner}
            draw={this.state.draw}
          />
        </div>
      </div>
    )
  }
}

export default App
