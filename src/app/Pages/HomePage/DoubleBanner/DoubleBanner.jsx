import subbanner1 from "../../../../assets/HomeBanner/1_1.webp";
import subbanner2 from "../../../../assets/HomeBanner/2_1.webp";

const DoubleBanner = () => {
  return (
    <div>
      <div className="flex w-full mt-10">
        <div className="grid h-40 flex-grow card  rounded-box place-items-center">
          <img
            className="h-36 hover:h-40 duration-500"
            src={subbanner1}
            alt=""
          />
        </div>
        <div className="divider divider-horizontal">OR</div>
        <div className="grid h-40   flex-grow card  rounded-box place-items-center">
          <img
            className="h-36 w-50 hover:h-40 duration-500"
            src={subbanner2}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default DoubleBanner;
