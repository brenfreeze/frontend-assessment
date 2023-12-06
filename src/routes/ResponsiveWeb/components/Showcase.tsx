interface ShowcaseProps {
  description: string;
  image: string;
}

function Showcase({ description, image }: ShowcaseProps) {
  return (
    <div className="showcase__content--item">
      <img
        className="showcase__content--item__image"
        src={image}
        alt="showcase"
      />
      <p className="showcase__content--item__description">
        {description}
      </p>
      <button className="showcase__content--item__button">Read More</button>
    </div>
  );
}

export default Showcase;
