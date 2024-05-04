// Write your React code here.
import {Component} from 'react'
import Emojitem from '../EmojItem'
import './index.css'

class Feedback extends Component {
  state = {status: true}

  changeDiv = () => {
    this.setState({status: false})
  }

  render() {
    const {resources} = this.props
    const {status} = this.state
    const {loveEmojiUrl} = resources
    return (
      <div className="main-cont">
        <div className="card-cont">
          {status ? (
            <div>
              <h1 className="main-heading">
                How satisfied are you with our customer support performance?
              </h1>
              <ul className="emoj-cont">
                {resources.emojis.map(eachItem => (
                  <Emojitem
                    emojList={eachItem}
                    key={eachItem.id}
                    clickButton={this.changeDiv}
                  />
                ))}
              </ul>
            </div>
          ) : (
            <div>
              <img src={loveEmojiUrl} className="love-image" alt="love emoji" />
              <h1>Thank You</h1>
              <p>
                We will use your feedback to improve our customer
                supportperformance.
              </p>
            </div>
          )}
        </div>
      </div>
    )
  }
}

export default Feedback
