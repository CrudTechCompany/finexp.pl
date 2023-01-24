import FirstBlock from "./FirstBlock/FirstBlock";
import FourthBlock from "./FourthBlock/FourthBlock";
import style from "./PriceBlock.module.css";
import SecondBlock from "./SecondBlock/SecondBlock";
import ThirdBlock from "./ThirdBlock/ThirdBlock";

const PriceBlock = (props) => {
  return (
    <div className={style["block"]} id="price-block">
      <div className={style["content-block"]}>
        <div className={style["content"]}>
          <div className={style["title-block"]}>
            <h3 className={style["title"]}>Cennik</h3>
            <span>Wszystkie kwoty są cenami netto</span>
          </div>
          <FirstBlock setContactFormState={props.setContactFormState}/>
          <SecondBlock setContactFormState={props.setContactFormState}/>
          <ThirdBlock setContactFormState={props.setContactFormState}/>
          <FourthBlock setContactFormState={props.setContactFormState}/>
        </div>
      </div>
    </div>
  );
};

export default PriceBlock;
