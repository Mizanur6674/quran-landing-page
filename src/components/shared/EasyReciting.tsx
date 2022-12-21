import React from "react";

function EasyReciting() {
  return (
    <div className=" bg-primary">
      <div className=" container">
        <div className="bg-[url('/images/bg.svg')] bg-no-repeat">
          <div className="text-center space-y-5 py-24">
            <h1 className=" md:w-[41.875rem] mx-auto H2 text-white">
              Recitering Listening quran is more
              <span className="w-max shape py-3 px-1 bg-tertiary">
                <span className="bg-primary p-2 shape text-center">easy</span>
              </span>
              now
            </h1>

            <p className=" md:w-[35.625rem] mx-auto p2 text-light_gray">
              The Quran, also romanized Qur'an or Koran, is the central religious text of Islam, believed by Muslims to be a
              revelation from Allah.
            </p>

            <div className=" flex items-center justify-center gap-4">
              <div>
                <img src="/images/Google Play badge.svg" alt="" />
              </div>
              <div>
                <img src="/images/App Store badge.svg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EasyReciting;
