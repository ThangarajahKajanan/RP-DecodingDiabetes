import React, { useState } from "react";
import image3 from "../../../public/assets/logo.gif";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { auth, firestore } from "../../../firebaseconfig";
import { signInWithEmailAndPassword } from "firebase/auth";
import { collection, getDocs, query, where } from "firebase/firestore";
import Swal from "sweetalert2";

interface User {
  name: string;
  email: string;
  type: string;
}

function login() {
  const router = useRouter();
  const [email, setEmail] = useState<any>();
  const [password, setPassword] = useState<any>();

  const handlelogin = async () => {
    try {
      console.log(email, password)
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user: any = userCredential.user;
      await console.log(user.email);

      if (user) {
        await sessionStorage.setItem("user", user.email);
        router.push("/");
      }
    } catch (error) {
      console.error("Error signing in:", error);
      Swal.fire("Error", "login error", "error");
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
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight ">
            Sign in to your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium leading-6 "
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
                onChange={(e) => (setEmail(e.target.value))}
                className="block w-full ps-3 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                style={{ backgroundColor: "white" }}
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="password"
                className="block text-sm font-medium leading-6 "
              >
                Password
              </label>
              <div className="text-sm">
                <a
                  href="#"
                  className="font-semibold text-warning hover:text-indigo-500"
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
                autoComplete="current-password"
                required
                onChange={(e) => (setPassword(e.target.value))}
                className="block w-full ps-3 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                style={{ backgroundColor: "white" }}
              />
            </div>
          </div>

          <div className="pt-5">
            <button
              type="submit"
              className="flex w-full  justify-center rounded-md bg-warning px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-primary-content focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              onClick={handlelogin}
            >
              Sign in
            </button>
          </div>


          <p className="mt-10 text-center text-sm text-gray-500">
            Not a member?
            <a
              href="/signup/"
              className="font-semibold leading-6 text-warning hover:text-primary-content"
            >
              Sign up
            </a>
          </p>
        </div>
      </div>
    </>
  );
}

export default login;
