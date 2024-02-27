import { useState, useEffect } from "react";
import { FIREBASE_AUTH, db } from "../Firebase";
import { collection, query, where, getDocs } from "firebase/firestore";

function UserDataHandler() {
  const [userDocuments, setUserDocuments] = useState([]);
  const [isUserDetail, setIsUserDetail] = useState({
    firstname: "",
    lastname: "",
    country: "",
    state: "",
    email: "",
    userMainUid: ""
  });

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

        // Extracting user details
        if (documents.length > 0) {
          const userData = documents[0];
          setIsUserDetail({
            firstname: userData.firstname,
            lastname: userData.lastname,
            country: userData.country,
            state: userData.state,
            email: userData.email,
            userMainUid: userData.userUid
          });
        }
      } catch (error) {
        console.error("Error fetching user documents:", error);
      }
    };

    if (FIREBASE_AUTH.currentUser) {
      fetchUserDocuments();
    }
  }, []);

  return { userDocuments, isUserDetail };
}

export default UserDataHandler;
