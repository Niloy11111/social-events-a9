

const Banner = () => {
    return (
        <div  className="flex justify-center items-center h-[84vh] rounded-lg" style={
            {
                backgroundImage : `URL("https://assets.website-files.com/60ba297cb821af9468768d5f/629fa0199d65ebc91502c156_kenmore-ballroom-wedding--0061.jpg")` ,
                backgroundRepeat : 'no-repeat',
                backgroundColor : `rgba(5, 5, 5, 0.70)`,
                backgroundBlendMode : 'color'
            }
        }>

           <div>
           <h2 className="text-center text-[#FFF] text-5xl font-Inter font-semibold">We'll Make Your Next Celebration <br /> Very Special !  </h2>
            <p className="text-center mt-6 text-[#FFF]">Ready to make your event vision a reality</p>
            <div className="flex justify-center">
            <button className="px-9 text-[#FFF] py-4 text-base font-Inter mt-6 rounded bg-[#21AA81]">LET'S TALK</button> 
            </div>
            
           </div>
        </div>
    );
};

export default Banner;