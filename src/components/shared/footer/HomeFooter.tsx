import { homeFooterData } from "../../../Data/HomeFooter";

function HomeFooter() {
  return (
    <div className="  md:px-[8.4375rem] py-[3.6875rem] bg-primary flex-1 lg:flex items-center justify-around">
      {homeFooterData.map((item) => {
        return (
          <div className=" mb-6 lg:px-[68px] lg:border-r-2 border-r-b_color">
            <h2 className=" H2 text-tertiary text-center">{item.digit}</h2>
            <p className=" p1 text-light_gray text-center space-y-4 lg:space-y-0">{item.title} </p>
          </div>
        );
      })}
    </div>
  );
}

export default HomeFooter;
