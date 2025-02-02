import Image from "next/image";
import React from "react";
import Button from "../ui/button";
import { FcGoogle } from "react-icons/fc";
import { AiFillGithub } from "react-icons/ai";

export default function Auth() {
  return (
    <>
      <div className="grid h-screen grid-cols-1 items-center gap-10 md:grid-cols-2">
        <Image
          src={"/images/x.svg"}
          alt="X"
          width={450}
          height={450}
          className="hidden justify-self-center md:block"
        />

        <div className="flex h-full flex-col justify-center gap-6 md:h-[70vh] md:justify-between">
          <div className="block md:hidden">
            <Image src={"/images/x.svg"} alt="X" width={50} height={50} />
          </div>
          <h1 className="text-6xl font-bold">Happening Now</h1>
          <div className="w-full md:w-[60%]">
            <h2 className="mb-4 text-3xl font-bold">Join today.</h2>
            <div className="flex flex-col space-y-2">
              <Button
                label={
                  <div className="flex items-center justify-center gap-2">
                    <FcGoogle />
                    Sign up with Google
                  </div>
                }
                fullWidth
                secondary
              />
              <Button
                label={
                  <div className="flex items-center justify-center gap-2">
                    <AiFillGithub />
                    Sign up with Github
                  </div>
                }
                fullWidth
                secondary
              />
              <div className="flex items-center justify-center">
                <div className="h-px w-1/2 bg-gray-700" />
                <p className="mx-4">or</p>
                <div className="h-px w-1/2 bg-gray-700" />
              </div>
              <Button label={"Create account"} fullWidth />
              <div className="text-[10px] text-gray-400">
                By signing up, you agree to the {""}
                <span className="text-sky-500">Terms of Service</span> and
                <span className="text-sky-500"> Privacy Policy</span> ,including
                <span className="text-sky-500"> Cookie Use</span>.
              </div>
            </div>
          </div>
          <div className="w-full md:w-[60%]">
            <h3 className="mb-4 text-xl font-medium">
              Already have an account?
            </h3>
            <Button label={"Sign in"} fullWidth outline />
          </div>
        </div>
      </div>
    </>
  );
}
