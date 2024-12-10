/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import { useContext } from "react";
import "./Body.css";
import { useRouter } from "next/navigation";
import { NearContext } from "@/wallet/WallletSelector";
import { useSinBalance } from "@/hooks/fetchSinBalance";
const Body = () => {
  const { wallet, signedAccountId } = useContext(NearContext);
  const { balance, error } = useSinBalance({ wallet, signedAccountId });
  const handleSignIn = async () => {
    return wallet?.signIn();
  };
  const handleSignout = async () => {
    return wallet?.signOut();
  };
  const router = useRouter();
  const handleNavigation = () => {
    router.push("/stake");
  };
  const handleNavigationToNFTStaking = () => {
    router.push("/stake?tab=STAKE_NFT");
  };
  
  return (
    <div
      className="flex flex-col items-center min-h-screen text-white mt-[100px]"
      id="home"
    >
      {signedAccountId ? (
        <div className="w-[90%] md:w-[500px]">
          {" "}
          <div className="flex flex-row items-center justify-between mt-10 px-6 py-3 bg-[#f8b12c] rounded-full md:w-[500px]">
            <span
              className="md:text-lg text-sm font-bold text-[#353333] uppercase cursor-pointer"
              style={{ fontFamily: "montserrat-variablefont" }}
              onClick={handleSignout}
            >
              DISCONNECT
            </span>
            <span
              className="flex flex-row items-center justify-center gap-1 font-medium md:text-lg text-sm text-black"
              style={{ fontFamily: "montserrat-variablefont" }}
            >
              <img src="/images/green-btn.png" className="w-4 h-4" />{" "}
              {signedAccountId}
            </span>
          </div>
          <div className="flex flex-row items-center justify-between mt-5 px-6 py-3 bg-[#f8b12c] rounded-full md:w-[500px]">
            <span
              className="md:text-lg text-sm font-bold text-[#353333] uppercase"
              style={{ fontFamily: "montserrat-variablefont" }}
            >
              SIN BALANCE
            </span>
           
              <span
                className="font-medium md:text-lg text-sm text-black"
                style={{ fontFamily: "montserrat-variablefont" }}
              >
                {balance}
              </span>
            
          </div>
        </div>
      ) : (
        <div className="w-[90%] md:w-[500px]" onClick={handleSignIn}>
          <button className="flex flex-row items-center justify-center mt-10 px-6 py-3 bg-[#f8b12c] rounded-full md:w-[500px]">
            <span
              className="md:text-lg text-sm font-bold text-[#353333] uppercase"
              style={{ fontFamily: "montserrat-variablefont" }}
            >
              CONNECT
            </span>
          </button>
        </div>
      )}

      {/* <div className="flex flex-row items-center justify-center mt-5 px-6 py-3 bg-[#f8b12c] rounded-full md:w-[500px]">
        <span className="text-lg font-bold text-[#353333] uppercase">
          CONNECT
        </span>
      </div> */}
      <div
        className="mt-8 p-6 bg-black bg-opacity-80 rounded-xl w-[90%] md:w-[500px] mb-6"
        style={{ border: "1px solid #f8b12c" }}
      >
        <div className="space-y-4">
          <button
            className="w-full px-6 py-3 font-semibold bg-[#9d6c31] rounded-full text-black hover:bg-[#c88d4f] uppercase"
            onClick={handleNavigation}
            style={{ fontFamily: "montserrat-variablefont" }}
          >
            Token Staking
          </button>
          <button
            className="w-full px-6 py-3 font-semibold bg-[#9d6c31] rounded-full text-black hover:bg-[#c88d4f] uppercase"
            onClick={handleNavigationToNFTStaking}
            style={{ fontFamily: "montserrat-variablefont" }}
          >
            NFT Staking
          </button>
          <button
            className="w-full px-6 py-3 font-semibold bg-[#f8b12c] text-black rounded-full hover:bg-[#ffd65a] uppercase"
            style={{ fontFamily: "montserrat-variablefont" }}
          >
            Buy $SIN
          </button>
        </div>

        <hr className="my-6 border-t border-[#f8b12c]" />

        <div
          className="grid md:grid-cols-4 grid-cols-3 gap-4 text-center"
          style={{ fontFamily: "Garet-book" }}
        >
          <div className="flex flex-col items-center">
            <a href="#" className="flex justify-center items-center">
              <img src="/images/mitte.png" alt="Mitte" className="h-10 w-10" />
            </a>
            <span className="mt-2 text-[10px] text-[#f8b12c] uppercase">
              Mitte
            </span>
          </div>
          <div className="flex flex-col items-center">
            <a href="#" className="flex justify-center items-center">
              <img
                src="/images/mintbase.png"
                alt="Mintbase"
                className="h-10 w-10"
              />
            </a>
            <span className="mt-2 text-[10px] text-[#f8b12c] uppercase">
              Mintbase
            </span>
          </div>
          <div className="flex flex-col items-center">
            <a href="#" className="flex justify-center items-center">
              <img
                src="/icons/telegram.svg"
                alt="Telegram"
                className="h-10 w-10"
              />
            </a>
            <span className="mt-2 text-[10px] text-[#eeb636] uppercase">
              Telegram
            </span>
          </div>
          <div className="flex flex-col items-center">
            <a href="#" className="flex justify-center items-center">
              <img
                src="/images/twitter.png"
                alt="Twitter"
                className="h-10 w-10"
              />
            </a>
            <span className="mt-2 text-[10px] text-[#eeb636] uppercase">
              Twitter
            </span>
          </div>
          <div className="flex flex-col items-center">
            <a href="#" className="flex justify-center items-center">
              <img
                src="/images/dexs.png"
                alt="Dexscreener"
                className="h-10 w-10"
              />
            </a>
            <span className="mt-2 text-[10px] text-[#eeb636] uppercase">
              Dexscreener
            </span>
          </div>
          <div className="flex flex-col items-center">
            <a href="#" className="flex justify-center items-center">
              <img
                src="/images/litepaper.png"
                alt="Litepaper"
                className="h-10 w-10"
              />
            </a>
            <span className="mt-2 text-[10px] text-[#eeb636] uppercase">
              Litepaper
            </span>
          </div>
          <div className="flex flex-col items-center">
            <a href="#" className="flex justify-center items-center">
              <img
                src="/images/ref-finace.png"
                alt="Litepaper"
                className="h-10 w-10"
              />
            </a>
            <span className="mt-2 text-[10px] text-[#eeb636] uppercase">
              Ref finace
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Body;