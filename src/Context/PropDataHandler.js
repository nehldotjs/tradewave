import React, { createContext, useContext, useState, useEffect } from "react";
import { FIREBASE_AUTH, db } from "../Firebase";
import { collection, query, where, getDocs } from "firebase/firestore";

const PropContext = createContext();
function PropDataHandler({ children }) {
  return (
    <PropContext.Provider value={PropValues()}>{children}</PropContext.Provider>
  );
}

const PropValues = () => {
  const [isNavActive, setIsNavActive] = useState(false);
  const [userDocuments, setUserDocuments] = useState([]);
  const name = "Prop Data";

  useEffect(() => {
    const fetchUserDocuments = async () => {
      try {
        const q = query(
          collection(db, "users"),
          where("userUid", "==", FIREBASE_AUTH.currentUser.uid)
        );
        const querySnapshot = await getDocs(q);
        const documents = querySnapshot.docs.map((doc) => doc.data());
        setUserDocuments(documents);
      } catch (error) {
        console.error("Error fetching user documents:", error);
      }
    };

    fetchUserDocuments();
  }, []);
  const result = { name, isNavActive, setIsNavActive, userDocuments };
  return result;
};

function PropData() {
  try {
    const x = useContext(PropContext);
    return x;
  } catch (err) {
    console.error(err);
  }
}

export { PropDataHandler, PropData };
