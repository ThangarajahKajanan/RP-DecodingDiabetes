import Link from "next/link";
import Router from "next/router";
import React, { useEffect, useState } from "react";
import Swal from 'sweetalert2';

import Image from "next/image";
import header3 from "../../public/assets/logo.gif";

export default function nav() {
  const [email, setEmail] = useState(null);

  useEffect(() => {
    const email: any = sessionStorage.getItem("user");
    if (email) {
      setEmail(email);
    }
  }, []);

  const handleLogout = async () => {
    if (email) {
      const result = await Swal.fire({
        title: "Are you sure?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, Log out",
      });

      if (result.isConfirmed) {
        try {
          await sessionStorage.removeItem("user");
          Router.push("/login");
        } catch (error) {
          console.error("Error during handleLogout: ", error);
          alert("An error occurred during logout. Please try again later.");
        }
      } else {
        return;
      }
    } else {
      await sessionStorage.removeItem("user");
      Router.push("/login");
    }
  };


  return (

    <div className="navbar fixed top-0 left-0 right-0 bg-opacity-75 bg-base-300 text-neutral z-50">
      <div className="navbar-start">
        <a className="btn btn-ghost text-lg">Decoding Diabetics</a>
        <Image
          src={header3}
          width={70}
          height={70}
          alt="Picture of the author"
          style={{ borderRadius: 70 }}
        />
      </div>
      <div className="navbar-center hidden lg:flex  text-gray-700 ">
        <ul className="menu menu-horizontal  pl-16 ml-6">
          {email ? (
            <>

              <li>
                <Link href={"/"}>
                  <b className=" text-base hover:text-sky-800"> Home</b>
                </Link>
              </li>
              <li>
                <Link href={"/detections/acanthosisNigricans_detection"}>
                  <b className=" text-base hover:text-sky-800"> Acanthosis Nigricans Detection</b>
                </Link>
              </li>
              <li>
                <Link href={"/detections/footUlcer_detection"}>
                  <b className=" text-base hover:text-sky-800"> Foot Ulcer Detection</b>
                </Link>
              </li>
              <li>
                <Link href={"/detections/nailDefects_detection"}>
                  <b className=" text-base hover:text-sky-800"> Nail Infection Detection</b>
                </Link>
              </li>
              <li>
                <Link href="https://diabetic-retinopathy-phi.vercel.app/" target="_blank" rel="noopener noreferrer">
                  <b className=" text-base hover:text-sky-800" >  Retinopathy Detection</b>
                </Link>
              </li>
              
            </>
          ) : (
            <></>
          )}
        </ul>
      </div>

      <div className="navbar-end" onClick={handleLogout}>
        <a className="btn  bg-blue-400">{email ? "Log out" : "Log in"}</a>
      </div>
    </div>
  );
}
