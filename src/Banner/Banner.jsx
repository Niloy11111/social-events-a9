import { NavLink } from "react-router-dom";

const Banner = () => {
  return (
    <div
      className="lg:-mx-36 flex justify-center items-center h-[350px] lg:h-[84vh] rounded lg:rounded-none"
      style={{
        backgroundImage: `URL("https://cleancomedians.com/wp-content/uploads/2023/02/major-cities-work-social-event-ideas-local-bar-cooking-class-local-park-board-game-tournament-dance-floor-corporate-team-building.jpg")`,
        backgroundRepeat: "no-repeat",
        backgroundColor: `rgba(8, 8, 8, 0.70)`,
        backgroundBlendMode: "color",
        backgroundSize: "cover",
      }}
    >
      <div>
        <h2 className="text-center text-[#FFF] text-3xl lg:text-5xl font-Inter font-semibold">
          We'll Make Your Next Celebration <br /> Very Special !{" "}
        </h2>
        <p className="text-center mt-4 lg:mt-6 font-inter text-[#FFF]">
          Ready to make your event vision a reality
        </p>
        <p className="text-center mt-4 lg:mt-6 font-inter text-[#FFF]">
          Ready to make your event vision a reality
        </p>
        <div className="flex justify-center">
          <NavLink to="/login">
            <button className="px-6 lg:px-9 text-[#FFF] py-3 lg:py-4 text-base font-Inter mt-6 rounded bg-[#21AA81]">
              LET'S TALK
            </button>{" "}
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Banner;
