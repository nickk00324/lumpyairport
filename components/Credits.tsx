import "./Credits.scss";

const Credits = () => {
  return (
    <div className='Credits'>
      <div className='Credits__content'>
        <p>
          Through costume-based performance, Beck+Col’s work explores alternate
          universes populated with monsters. The Lumpen Monsters are colorful,
          playful and operatic.{" "}
        </p>
        <p>
          Beck+Col began their residency at the San Diego International Airport
          in January 2020. Due to the COVID-19 Pandemic, the onsite performances
          were moved online starting in April 2020. Please enjoy the music and
          videos on this website.{" "}
        </p>
        <p>
          Special thanks to Chloe Levaillant, Micaela Tobin, Minsu Kang, Shelley
          Bloom, Adrienne Lauren, Nigel Groom, Joey Herring, Tony Almanza, Chris
          Chalupsky, and Nick Kochornswasdi.
        </p>
      </div>
      <div className='foot'>
        website by{" "}
        <a href='mailto:nickkochornswasdi@gmail.com'>nick kochornswasdi</a>
      </div>
    </div>
  );
};

export default Credits;
