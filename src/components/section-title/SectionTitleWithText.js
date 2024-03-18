import PropTypes from "prop-types";
import clsx from "clsx";

const SectionTitleWithText = ({ spaceTopClass, spaceBottomClass }) => {
  return (
    <div className={clsx("welcome-area", spaceTopClass, spaceBottomClass)}>
      <div className="container">
        <div className="welcome-content text-center">
          <h5>Who Are We</h5>
          <h1>Welcome To Alweena</h1>
          <p>
          Hello, I am Raji Thomas founder & CEO of Alweena Perfumes. I’m having an experience over 35 years in the perfume industry 
          and helped to promote and establish various fragrances at Duty-Free Shows Worldwide. I’m very passionate about perfumes and
           know all aspects of the perfume industry including developing fragrances from scratch, selling them in both wholesale & retail 
           marketplaces and importing and exporting them. I am also served as the Executive Sales Leader representing Clarins in the Middle
            East for over 35 years. He has also represented Thierry Mugler, Carolina Herrera, Ted Lapidus, Balenciaga, Orlane Paris, Darphin 
            Paris, and many other leading lifestyle Fragrances. I started Alweena Perfumes back in 1995 and it has been doing well ever since.
             People from all around the world visit my store in search of high-quality, premium brands.{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

SectionTitleWithText.propTypes = {
  spaceBottomClass: PropTypes.string,
  spaceTopClass: PropTypes.string
};

export default SectionTitleWithText;
