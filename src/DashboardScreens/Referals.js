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
 
        <div className="ref-link-wrapper">
          <div className="ref-link-image-wrapper">
            <img
              src="https://images.unsplash.com/photo-1461532257246-777de18cd58b?q=80&w=1476&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />

            <div className="ref-link-container">
              <h3>Refer Ecom Freedom make money</h3>
              <p>
                Share your referral link with your friend to <br /> 
                unlock more opportunity
              </p>
              <button>click here to get referral link</button>
            </div>
          </div>
        </div>

        <div className="ref-earning">
          <div className="ref-table">
            <table
              border="1"
              cellPadding="10"
              style={{ width: "100%", borderCollapse: "collapse" }}>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>commission</th>
                  <th>signup-date</th>
                  <th>Earnings</th>
                </tr>
              </thead>
              <tbody>
                {peopleData.map((person, index) => (
                  <tr key={index}>
                    <td>{person.name}</td>
                    <td>{person.favoriteSubject}</td>
                    <td>{person.number}</td>
                    <td>{person.age}</td>
                    <td>{person.occupation}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Referals;
