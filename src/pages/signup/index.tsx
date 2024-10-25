import React, { useState } from "react";
import image3 from "../../../public/assets/logo.gif";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { app, storage, auth, firestore } from "../../../firebaseconfig";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { collection, doc, setDoc } from "firebase/firestore";
import Swal from "sweetalert2";

function signup() {
  const router = useRouter();
  const [type, setType] = useState(true);
  const [email, setEmail] = useState<any>();
  const [password, setPassword] = useState<any>();
  const [cpassword, setCpassword] = useState<string>();
  const [name, setName] = useState<string>();

  //check password and conferm password
  const chechpassword = (value: any) => {
    setCpassword(value);
    if (password != value) {
      setType(false);
    } else {
      setType(true);
    }
  };

  //handle sing up
  const handlesingup = async () => {
    console.log("hi");
    if (type) {
      try {
        const userCredential = await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );
        const user = userCredential.user;
        console.log("User signed up:", user);
        const values: any = {
          email: email,
          name: name,
          type: "user",
        };
        const Collection = collection(firestore, "user");
        await setDoc(doc(Collection), values);
        Swal.fire("Success", "user add successfully", "success");
        await sessionStorage.setItem("user", values.email);
        router.push("/");
      } catch (error) {
        Swal.fire("Error", "email is already used", "error");
        console.error("Error signing up:", error);
      }
    }
  };
  return (
    <>
      <div
        className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8"

      >
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <Image
            className="mx-auto h-40 w-auto  rounded-[70px]"
            src={image3}
            alt="Your Company"
          />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Sign up to your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Name
            </label>
            <div className="mt-2">
              <input
                id="name"
                name="name"
                type="name"
                autoComplete="name"
                required
                onChange={(e) => setName(e.target.value)}
                className="block w-full ps-3 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                style={{ backgroundColor: "white" }}
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
                autoComplete="email"
                required
                onChange={(e) => setEmail(e.target.value)}
                className="block w-full ps-3  rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                style={{ backgroundColor: "white" }}
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
            </div>
            <div className="mt-2">
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                onChange={(e) => setPassword(e.target.value)}
                // pattern="(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{5,10}"
                className="block w-full ps-3  rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                style={{ backgroundColor: "white" }}
              />
            </div>
          </div>
          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="password"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Confirm Password
              </label>
            </div>
            <div className="mt-2">
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                onChange={(e) => chechpassword(e.target.value)}
                className="block w-full ps-3  rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                style={{ backgroundColor: "white" }}
              />
            </div>
            <div id="form-text" hidden={type} className="text-red-500">
              password is not match.
            </div>
          </div>
          <div className="pt-5">
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-warning px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-primary-content focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              onClick={handlesingup}
            >
              Sign in
            </button>
          </div>

          <p className="mt-10 text-center text-sm text-gray-500">
            Have an account
            <a
              href="/login"
              className="font-semibold leading-6 text-warning hover:text-primary-content"
            >
              Sign in
            </a>
          </p>
        </div>
      </div>

    </>
  );
}

export default signup;
