import { Link } from "react-router-dom";
import residence from "../assets/images/images002/holiday-residence-on-mars.jpeg";
import Article1 from "../components/Article1";
import "./NosPrestations.css";

function NosPrestations() {
  const articleList = [
    {
      id: 1,
      title: "Résidence 1",
      text: "Cupcake ipsum dolor sit amet halvah dessert. Icing gingerbread jelly candy canes bear claw cake donut gummi bears.",
      imgSrc: "/residence1.jpeg",
    },
    {
      id: 2,
      title: "Résidence 2",
      text: "Cupcake ipsum dolor sit amet halvah dessert. Icing gingerbread jelly candy canes bear claw cake donut gummi bears.",
      imgSrc: "/residence2.png",
    },
  ];
  return (
    <>
      <main>
        <h1 className="mainTitlePresta">| NOS PRESTATIONS |</h1>
        <div className="breakLineContainerPresta">
          <hr className="breakLinePresta" />
        </div>
        <article className="articlePrestaContainer1">
          <Article1 article={articleList[1]} />
        </article>
        <div className="link-container">
          <Link to="/labels">
            <button className="links" type="button">
              NOS LABELS CERTIFIES/link router
            </button>
          </Link>
        </div>
        <article className="articlePrestaContainer2">
          <div className="articlePrestaContent">
            <h2>| Article</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore
              et suscipit modi labore officiis optio similique quidem illo,
              tempore eveniet praesentium quod, quia in eligendi fugiat est
              repudiandae natus tempora?
            </p>
          </div>
          <div className="articlePrestaImage">
            <img src={residence} alt="" />
          </div>
        </article>
      </main>

      <footer>
        <div>{/* <img src={flecheBas} alt="" /> */}</div>
      </footer>
    </>
  );
}

export default NosPrestations;
