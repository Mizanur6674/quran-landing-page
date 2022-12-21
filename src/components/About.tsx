import React from "react";

function About() {
  return (
    <div className=" container mt-28 md:mt-44">
      <div className=" flex-1 md:grid grid-cols-2 gap-32">
        <div className=" mb-10 md:mb-0 flex gap-8 ">
          <div>
            <img src="/images/Rectangle 1088.svg" alt="" />
          </div>
          <div>
            <img className=" mt-8" src="/images/Rectangle 1096.svg" alt="" />
          </div>
        </div>
        <div>
          <h2 className=" H2 pb-5">
            <span className="w-max shape py-3 px-1 bg-tertiary">
              <span className="bg-secondery p-2 shape">About</span>
            </span>
            holy quran
          </h2>
          <p className=" p2 pb-4">
            The Quran, also romanized Qur&apos;an or Koran, is the central religious text of Islam, believed by Muslims to be a
            revelation from Allah. It is organized in 30 chapters, 114 surahs which consist of 6666 verses.
          </p>
          <p className=" p2 pb-12">
            In addition to its religious significance, it is widely regarded as the finest work in Arabic literature.
          </p>
          <button className=" button1 text-primary px-8 py-3 bg-tertiary">Learn More</button>
        </div>
      </div>
    </div>
  );
}

export default About;
