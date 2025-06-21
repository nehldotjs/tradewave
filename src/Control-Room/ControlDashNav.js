import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FIREBASE_AUTH } from '../Firebase';  // Adjust path as per your project
import "./styles/controldashnavigation.css"
function ControlDashNav() {
    const [isBtnActive, setIsBtnActive] = useState(false);
    const navigate = useNavigate();

    const handleSignOut = async () => {
        try {
            await FIREBASE_AUTH.signOut();
            navigate("/login");
        } catch (error) {
            console.error("Error signing out:", error);
        }
    };

    return (
        <div className={isBtnActive ? "controlNav" : "controlNav isActive"}>
            <div className="control-navBtn">
                <button onClick={() => setIsBtnActive(!isBtnActive)}>
                    <div
                        className={
                            isBtnActive ? "lines-wrapper" : "lines-wrapper isLinesHeight"
                        }
                    >
                        <div className={!isBtnActive ? "line1" : "line1 isline1"}></div>
                        <div className={!isBtnActive ? "line2" : "line2 isline2"}></div>
                        <div className={!isBtnActive ? "line3" : "line3 isline3"}></div>
                    </div>
                </button>
            </div>

            <div className={isBtnActive ? "control-links" : "control-links isActive"}>
                <div className="control-links-button">
                    <Link className="control-link chat-control-wrapper" to={"/"}>Transactions</Link>
                    <Link className="control-link transaction-control-wrapper" to={"/controlchats"}>Chats</Link>
                    {/* <Link className="control-link users-control-wrapper">Users</Link> */}
                </div>
                <div className="control-auth-btn-wrapper">
                    <button onClick={handleSignOut}>Log Out</button>
                </div>
            </div>
        </div>
    );
}

export default ControlDashNav;
