import AboutUsBlock from "./AboutUsBlock/AboutUsBlock";
import BenefitBlock from "./BenefitBlock/BenefitBlock";
import style from "./Body.module.css";
import ContactBlock from "./ContactBlock/ContactBlock";
import HeadBlock from "./HeadBlock/HeadBlock";
import OfferBlock from "./OfferBlock/OfferBlock";
import PriceBlock from "./PriceBlock/PriceBlock";

const Body = (props) => {
  return (
    <div className={style["body"]}>
      <HeadBlock setContactFormState={props.setContactFormState} />
      <AboutUsBlock />
      <OfferBlock />
      <BenefitBlock />
      <PriceBlock setContactFormState={props.setContactFormState}/>
      <ContactBlock />
    </div>
  );
};

export default Body;
