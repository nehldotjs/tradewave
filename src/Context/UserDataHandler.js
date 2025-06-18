import { useState, useEffect } from "react";
import { FIREBASE_AUTH, db } from "../Firebase";
import { collection, query, where, getDocs } from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";

function useUserData() {
  const [userDocument, setUserDocument] = useState(null); // Single user doc
  const [isUserDetail, setIsUserDetail] = useState(null); // for easy access
   useEffect(() => {
    const unsubscribe = onAuthStateChanged(FIREBASE_AUTH, async (user) => {
      if (user) {
        try {
          const q = query(
            collection(db, "users"),
            where("userUid", "==", user.uid)
          );

          const querySnapshot = await getDocs(q);
          const doc = querySnapshot.docs[0]?.data(); // Get first doc only

          if (doc) {
            setUserDocument(doc); // Store the full document

            // Store simplified user details if needed elsewhere
            setIsUserDetail({
              firstName: doc.firstName,
              lastName: doc.lastName,
              country: doc.country,
              state: doc.state,
              email: doc.email,
              userMainUid: doc.userUid
            });
          }
        } catch (error) {
          console.error("Error fetching user document:", error);
        }
      }
    });

    return () => unsubscribe();
  }, []);

  return { userDocument, isUserDetail };
}

export default useUserData;
