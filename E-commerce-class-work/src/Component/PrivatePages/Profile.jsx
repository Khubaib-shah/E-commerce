import React, { useEffect, useState } from "react";
import { auth, db } from "../Auth/firebase";
import { doc, getDoc } from "firebase/firestore";
import Loader from "./Loader";
import { useNavigate } from "react-router-dom";

export default function Profile() {
  const [userDetails, setUserDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserData = async () => {
      auth.onAuthStateChanged(async (user) => {
        if (user) {
          const docRef = doc(db, "users", user.uid);
          const docSnap = await getDoc(docRef);
          if (docSnap.exists()) {
            const data = docSnap.data();
            // Handle Firestore Timestamp fields
            const formattedData = {
              ...data,
              Date: data.Date ? new Date(data.Date.seconds * 1000).toLocaleDateString() : 'N/A',
              // Add other fields here if you have Firestore Timestamps
            };
            setUserDetails(formattedData);
          }
          setLoading(false);
        } else {
          navigate("/login"); // Redirect if no user
        }
      });
    };

    fetchUserData();
  }, [navigate]);

  const handleLogOut = async () => {
    try {
      await auth.signOut();
      navigate("/login");
      console.log("User logged out successfully");
    } catch (error) {
      console.error("Error logging out:", error.message);
    }
  };

  if (loading) return <Loader />;

  return (
    <div className="p-4 max-w-96">
      {userDetails ? (
        <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
          <img
            className="lg:h-48 md:h-36 w-full object-cover object-center"
            src={userDetails.pictureURL || "default-image-url"} // Provide a default image URL if needed
            alt="profile"
          />
          <div className="p-6">
            <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1"></h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
              Welcome: {"bhag bsdk"}
            </h1>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
              Email: {userDetails.Email}
            </h1>
            <p className="leading-relaxed mb-3">
              First Name: {userDetails.firstName}
            </p>
            <p className="leading-relaxed mb-3">
              Last Name: {userDetails.lastName}
            </p>
            <p className="leading-relaxed mb-3">
              Created at : {userDetails.Date}
            </p>
            <button
              className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
              onClick={handleLogOut}
            >
              Logout
            </button>
          </div>
        </div>
      ) : (
        navigate("/login")
      )}
    </div>
  );
}
