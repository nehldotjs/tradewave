import React, { useState } from 'react'
import "./style/agent.css"
import { IoIosChatbubbles } from "react-icons/io";
import chatBot from "../../assets/chatBot.png"

function CareAgent() {

  const [isPopUp, setIsPopUp] = useState(true)
  return (
    <div className="agent-wrapper">


      {/* chat for users */}

      <div className={isPopUp ? "chatWrapper" : "chatWrapper isPopupOpen"} >
        <div className="chat-header">
          <div className="botWrapper">
            <div className="botImageWrapper">
              <img src={chatBot} alt="" />
              <h4>Benny</h4></div>
          </div>

          <button>colse</button>
        </div>
        <div className="chatMessageSection">messages</div>
        <div className="chatInputs-wrapper">

          <input type="text" className='chat-input' />
          <button className="chatSendButton">Send</button>


        </div>
      </div>

      <button onClick={() => setIsPopUp(!isPopUp)} className="agentIconWrapper">
        <IoIosChatbubbles />
      </button>
    </div>
  )
}

export default CareAgent
