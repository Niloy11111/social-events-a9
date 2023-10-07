

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

            <h2 className="text-center text-[#FFF] text-5xl font-Inter font-bold">Unleash Your Imagination <br /> Let Us Create the Magic</h2>
          
        </div>
    );
};

export default Banner;