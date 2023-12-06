import "./ResponsiveWeb.styles.scss";
import Showcase from "./components/Showcase";

const showcaseData = [
  {
    image: "https://via.placeholder.com/400x300",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, magni eligendi nisi laboriosam molestiae ut ratione! Officiis eos magni debitis dolores placeat deserunt aperiam dicta excepturi ad unde facilis esse aliquid voluptatum praesentium numquam, at similique voluptatibus nam voluptas nihil.",
  },
  {
    image: "https://via.placeholder.com/400x300",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus ex praesentium facilis vero earum quidem, sint perferendis iste saepe ratione.",
  },
  {
    image: "https://via.placeholder.com/400x300",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus itaque ex modi tenetur doloremque enim minima voluptatum quis fugit, rem recusandae explicabo laboriosam cupiditate eveniet debitis officiis perferendis!",
  },
];

function ResponsiveWeb() {
  return (
    <main id="responsiveContainer">
      <div className="hero-banner">
        <div className="hero-banner__content">
          <h1 className="hero-banner__title">Hello Developer!</h1>
          <p className="hero-banner__subtitle">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
      </div>
      <div className="showcase">
        <div className="showcase__content">
          {showcaseData.map(({ image, description }, index) => (
            <Showcase key={index} image={image} description={description} />
          ))}
        </div>
      </div>
    </main>
  );
}

export default ResponsiveWeb;
