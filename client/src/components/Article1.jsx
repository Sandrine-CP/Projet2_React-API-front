import PropTypes from "prop-types";

function Article1({ article }) {
  const { title, text, imgSrc } = article;

  return (
    <>
      <div className="articleImage">
        <img src={imgSrc} alt={title} />
      </div>
      <div className="articleContent">
        <h2>|{title}</h2>
        <p>{text}</p>
      </div>
    </>
  );
}

Article1.propTypes = {
  article: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    imgSrc: PropTypes.string.isRequired,
  }).isRequired,
};

export default Article1;
