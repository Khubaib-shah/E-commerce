import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { setDoc, doc } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { auth, db, storage } from "../firebase";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../Styles/Signup.css";

export default function Signup() {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [picture, setPicture] = useState(null);
  const navigate = useNavigate();

  const HandleRegister = async (e) => {
    const currentDate = new Date();
    let date = `${currentDate.getFullYear()}-${(currentDate.getMonth() + 1)
      .toString()
      .padStart(2, "0")}-${currentDate.getDate().toString().padStart(2, "0")}`;
    e.preventDefault();
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;

      let pictureURL = "";

      if (picture) {
        const pictureRef = ref(storage, `profilePictures/${user.uid}`);

        await uploadBytes(pictureRef, picture);

        pictureURL = await getDownloadURL(pictureRef);
      }

      await setDoc(doc(db, "users", user.uid), {
        firstName: fname,
        lastName: lname,
        Email: user.email,
        Date: date,
        pictureURL,
      });

      toast.success("User registered successfully!", {
        position: "top-center",
      });
      navigate("/login");
      console.log("User created");
    } catch (error) {
      console.log("Error caught:", error.message);
      toast.error(error.message, {
        position: "bottom-center",
      });
    }
  };

  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Sign up for an account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form onSubmit={HandleRegister} method="POST" className="space-y-6">
            <div>
              <label
                htmlFor="firstName"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                First name
              </label>
              <div className="mt-2">
                <input
                  id="firstName"
                  name="firstName"
                  type="text"
                  onChange={(e) => setFname(e.target.value)}
                  required
                  autoComplete="firstName"
                  className="inputCSS"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="lastName"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Last name
              </label>
              <div className="mt-2">
                <input
                  id="lastName"
                  name="lastName"
                  type="text"
                  onChange={(e) => setLname(e.target.value)}
                  required
                  autoComplete="lastName"
                  className="inputCSS"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  autoComplete="email"
                  className="inputCSS"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Password
                </label>
                <div className="text-sm">
                  <a
                    href="#"
                    className="font-semibold text-indigo-600 hover:text-indigo-500"
                  >
                    Forgot password?
                  </a>
                </div>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  autoComplete="current-password"
                  className="inputCSS"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="picture"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Profile Picture
              </label>
              <div className="file-input-container mt-2">
                <input
                  id="picture"
                  name="picture"
                  type="file"
                  accept="image/*"
                  onChange={(e) => setPicture(e.target.files[0])}
                  className="file-input"
                />
                <label htmlFor="picture" className="file-input-label">
                  Choose a file{" "}
                </label>
              </div>
            </div>

            <div>
              <button type="submit" className="inputCssSTyle">
                Sign up
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
            Already have an account m ?{" "}
            <Link
              to={"/login"}
              className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
            >
              Login
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}
