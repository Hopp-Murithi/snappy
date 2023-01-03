import { React } from "react";
import { GoogleLogin } from "@react-oauth/google";
import jwt_decode from "jwt-decode";
import snappyVid from "../assets/medium.mp4";
import logo from "../assets/logo-white.png";
import { client } from "../client";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  return (
    <div className="flex justify-start items-center flex-col h-screen ">
      <div className="relative w-full h-full">
        <video
          src={snappyVid}
          type="video/mp4"
          loop
          controls={false}
          muted
          autoPlay
          className="w-full h-full object-cover"
        />
        <div className="absolute flex flex-col justify-center items-center top-0 right-0 left-0 bottom-0 bg-blackOverlay ">
          <div className="p-5">
            <img src={logo} width="130px" alt="logo" />
          </div>
          <div className="shadow-2x1">
            <GoogleLogin
              shape="pill"
              onSuccess={(credentialResponse) => {
                localStorage.setItem(
                  "user",
                  JSON.stringify(credentialResponse.credential)
                );
                const { name, sub, picture } = jwt_decode(
                  credentialResponse.credential
                );
                const doc = {
                  _id: sub,
                  _type: "user",
                  userName: name,
                  image: picture,
                };
                console.log(name, sub, picture);

                client.createIfNotExists(doc).then(() => {
                  navigate("/", { replace: true });
                });
              }}
              onError={() => {
                console.log("Login Failed");
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
