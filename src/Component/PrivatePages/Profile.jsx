import React, { useState, useEffect } from "react";
import { auth, db, storage } from "../../firebase"; // Make sure storage is properly initialized in firebase.js
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import Loader from "./Loader";
import { useNavigate } from "react-router-dom";
import { Timestamp } from "firebase/firestore";

export default function Profile() {
  const [userDetails, setUserDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [image, setImage] = useState(null); // To store selected image
  const [uploading, setUploading] = useState(false); // To show loading state during upload
  const navigate = useNavigate();

  useEffect(() => {
    let isMounted = true;
    const fetchUserData = async () => {
      auth.onAuthStateChanged(async (user) => {
        if (user) {
          const docRef = doc(db, "users", user.uid);
          const docSnap = await getDoc(docRef);
          if (docSnap.exists() && isMounted) {
            const data = docSnap.data();
            const formattedData = {
              ...data,
              Date: data.Date || "N/A", // If Date is missing, fallback to "N/A"
            };
            setUserDetails(formattedData);
          } else {
            if (isMounted) navigate("/login");
          }
          setLoading(false);
        } else {
          if (isMounted) navigate("/login");
        }
      });
    };
    fetchUserData();
    return () => {
      isMounted = false;
    };
  }, [navigate]);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file); // Store selected file
    }
  };

  const handleUpload = async () => {
    if (!image) return;
    setUploading(true);

    const storageRef = ref(
      storage,
      `profile_pictures/${auth.currentUser.uid}/${image.name}`
    );
    const uploadTask = uploadBytesResumable(storageRef, image);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        // Optionally, you can track upload progress
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log(`Upload is ${progress}% done`);
      },
      (error) => {
        console.error("Error uploading image:", error);
        setUploading(false);
      },
      async () => {
        // Get the image URL after upload is complete
        const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
        console.log("Image uploaded successfully:", downloadURL);

        // Update the user's profile with the new image URL
        const userRef = doc(db, "users", auth.currentUser.uid);
        await updateDoc(userRef, {
          pictureURL: downloadURL,
        });

        // Update userDetails state with the new image URL
        setUserDetails((prevState) => ({
          ...prevState,
          pictureURL: downloadURL,
        }));
        setImage(null);

        setUploading(false);
      }
    );
  };

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
    <div className="container mx-auto p-6">
      {userDetails ? (
        <div className="bg-white shadow-lg rounded-lg max-w-full sm:max-w-4xl mx-auto overflow-hidden">
          <div className="flex flex-col sm:flex-row items-center sm:justify-between p-6 bg-gray-100">
            <div className="flex items-center justify-center sm:justify-start w-full sm:w-auto">
              <img
                src={userDetails.pictureURL || "default-image-url"}
                alt="profile"
                className="w-24 h-24 rounded-full object-cover mb-4 sm:mb-0 sm:mr-4"
              />
              <div>
                <h1 className="text-2xl font-semibold text-gray-900">
                  {userDetails.firstName} {userDetails.lastName}
                </h1>
                <p className="text-sm text-gray-600">{userDetails.Email}</p>
              </div>
            </div>
            <button
              className="mt-4 sm:mt-0 px-4 py-2 bg-red-500 text-white rounded-lg shadow-md hover:bg-red-600 focus:outline-none"
              onClick={handleLogOut}
            >
              Logout
            </button>
          </div>

          <div className="p-6 space-y-6">
            <div className="text-lg font-medium text-gray-700">
              <h2 className="text-xl font-semibold text-gray-900">
                Profile Information
              </h2>
              <div className="space-y-2 mt-4">
                <p>
                  <strong>First Name:</strong> {userDetails.firstName}
                </p>
                <p>
                  <strong>Last Name:</strong> {userDetails.lastName}
                </p>
                <p>
                  <strong>Created At:</strong> {userDetails.Date}
                </p>
              </div>
            </div>

            {/* Update Profile Picture Section */}
            <div className="mt-6">
              <h3 className="text-lg font-semibold text-gray-900">
                Update Profile Picture 👇
              </h3>
              <div className="mt-4 flex flex-col sm:flex-row items-center sm:space-x-4">
                <input
                  type="file"
                  onChange={handleFileChange}
                  className="hidden" // Hide the default file input
                  id="file-upload" // Give it an ID for styling and accessibility
                />
                <label
                  htmlFor="file-upload"
                  className="flex items-center space-x-2 px-6 py-3 bg-blue-500 text-white rounded-lg shadow-md cursor-pointer hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 4v16m8-8H4"
                    />
                  </svg>
                  <span className="text-sm">
                    {image
                      ? uploading
                        ? "Uploading..."
                        : "Selected"
                      : "Choose a Profile Picture"}
                  </span>
                </label>

                <button
                  className="mt-4 sm:mt-0 px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 focus:outline-none"
                  onClick={handleUpload}
                  disabled={uploading}
                >
                  {uploading ? "Uploading..." : "Upload Picture"}
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="text-center p-6">
          <h1 className="text-xl text-gray-800">User Profile Not Found</h1>
        </div>
      )}
    </div>
  );
}
