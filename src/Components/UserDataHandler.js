import { useState, useEffect } from "react";
import { FIREBASE_AUTH, db } from "../Firebase";
import { collection, query, where, getDocs } from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";

function UserDataHandler() {
  const [userDocuments, setUserDocuments] = useState([]);
  const [isUserDetail, setIsUserDetail] = useState({
    firstName: "",
    lastName: "",
    country: "",
    state: "",
    email: "",
    userMainUid: ""
  });

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(FIREBASE_AUTH, async (user) => {
      if (user) {
        try {
          const q = query(
            collection(db, "users"),
            where("userUid", "==", user.uid)
          );

          const querySnapshot = await getDocs(q);
          const documents = querySnapshot.docs.map((doc) => doc.data());
          setUserDocuments(documents);

          if (documents.length > 0) {
            const userData = documents[0];
            setIsUserDetail({
              firstName: userData.firstName,
              lastName: userData.firstName,
              country: userData.country,
              state: userData.state,
              email: userData.email,
              userMainUid: userData.userUid
            });
          }
        } catch (error) {
          console.error("Error fetching user documents:", error);
        }
      }
    });

    // Cleanup on unmount
    return () => unsubscribe();
  }, []);

  return { userDocuments, isUserDetail };
}

export default UserDataHandler;
