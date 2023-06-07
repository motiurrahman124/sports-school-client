import { Carousel } from "antd";
const contentStyle = {
  height: "160px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
};

const Hero = () => {
  return (
    <div className="w-full">
      <Carousel autoplay>
        <div className="lg:h-[800px] md:h-[500px] h-[300px] relative ">
          <img
            className="h-full w-full !relative"
            src="https://i.ibb.co/3CRTR4M/Sports-Banner.jpg"
            alt=""
          />
          <div className="uppercase absolute top-1/2 right-1/2 text-red-500 text-2xl">
            <h1>Sports School</h1>
          </div>
        </div>
        <div className="lg:h-[800px] md:h-[500px] h-[300px]">
          <img
            className="h-full w-full"
            src="https://i.ibb.co/TYjLmrX/crop.jpg"
            alt=""
          />
          <h3 style={contentStyle}>2</h3>
        </div>
        <div className="lg:h-[800px] md:h-[500px] h-[300px]">
          <img
            className="h-full w-full"
            src="https://i.ibb.co/kDdS7VH/sports-associations.jpg"
            alt=""
          />
          <h3 style={contentStyle}>3</h3>
        </div>
        <div className="lg:h-[800px] md:h-[500px] h-[300px]">
          <img
            className="h-full w-full "
            src="https://i.ibb.co/F4RGpdD/JHPBackgrounds-Core-Horizontal-Rebooku.jpg"
            alt=""
          />
          <h3 style={contentStyle}>4</h3>
        </div>
      </Carousel>
    </div>
  );
};

export default Hero;
