import React from "react";
import "./styles/referrals.css";
function Referals() {
  const peopleData = [
    {
      name: "Alice",
      favoriteSubject: "Math",
      number: "123-456-7890",
      age: 25,
      occupation: "Engineer"
    },
    {
      name: "Bob",
      favoriteSubject: "History",
      number: "234-567-8901",
      age: 30,
      occupation: "Teacher"
    },
    {
      name: "Charlie",
      favoriteSubject: "Science",
      number: "345-678-9012",
      age: 22,
      occupation: "Student"
    },
    {
      name: "Diana",
      favoriteSubject: "English",
      number: "456-789-0123",
      age: 28,
      occupation: "Writer"
    },
    {
      name: "Edward",
      favoriteSubject: "Physics",
      number: "567-890-1234",
      age: 35,
      occupation: "Researcher"
    }
  ];

  return (
    <div className="ref-wrapper">
      <div className="ref-container">


        <div className="ref-wrapper">
          <div className="ref-container">

            {/* Referral Link Section */}
            <div className="ref-link-wrapper">
              <div className="ref-link-image-wrapper">
                <img
                  src="https://images.unsplash.com/photo-1461532257246-777de18cd58b?q=80&w=1476&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Referral Banner"
                />
                <div className="ref-link-container">
                  <h3>Refer Ecom Freedom & Make Money</h3>
                  <p>
                    Share your referral link with your friend to <br />
                    unlock more opportunities!
                  </p>
                  <button>Click here to get your referral link</button>
                </div>
              </div>
            </div>

            {/* Referral Promo Section */}
            <div className="ref-earning" style={{
              background: "linear-gradient(90deg, #ff7e5f, #feb47b)",
              padding: "20px",
              borderRadius: "10px",
              color: "white",
              textAlign: "center",
              fontFamily: "Arial, sans-serif",
              maxWidth: "500px",
              margin: "0 auto"
            }}>
              <div
                style={{
                  background: "linear-gradient(90deg, #ff7e5f, #feb47b)",
                  padding: "20px",
                  borderRadius: "10px",
                  color: "white",
                  textAlign: "center",
                  fontFamily: "Arial, sans-serif",
                  maxWidth: "500px",
                  margin: "0 auto"
                }}
              >
                <h2>🎉 Invite & Earn Big! 🎉</h2>
                <p style={{ fontSize: "18px", margin: "10px 0" }}>
                  Share the excitement – refer your friends and unlock{" "}
                  <strong>exclusive rewards!</strong> 💰
                </p>
                <p style={{ fontSize: "16px" }}>
                  The more you refer, the more you earn. 🚀 Start building your
                  referral empire today! 🔗✨
                </p>
                <a
                  href="#referral-link"
                  style={{
                    backgroundColor: "#fff",
                    color: "#ff7e5f",
                    padding: "10px 20px",
                    borderRadius: "5px",
                    textDecoration: "none",
                    fontWeight: "bold",
                    display: "inline-block",
                    marginTop: "10px"
                  }}
                >
                  Your Referral Link is On Its Way...
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Referals;
