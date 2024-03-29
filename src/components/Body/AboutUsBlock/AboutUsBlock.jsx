import style from "./AboutUsBlock.module.css";
import about_block from "../../../assets/about_block.svg";
import { useInView } from 'react-intersection-observer';
import { useSpring, animated } from "react-spring";


function Number ({n}) {
  const { number } = useSpring({
    from:{number:0},
    number:n,
    delay:100,
    config:{mass:1, tension:25,friction:10},
  });
  return <animated.div>{number.to((n) => n.toFixed(0))}</animated.div>
}

const AboutUsBlock = (props) => {

  const{ ref,inView } = useInView({
    threshold:0.5,
  })

  const content = [
    {
      title: "lat doświadczenia",
      count: 5,
    },
    {
      title: "klientów",
      count: 130,
    },
    {
      title: "dokumentów miesięcznie",
      count: 2300,
    },
  ];
  return (
    <div className={style["block"]} id="about-block">
      <div className={style["content-block"]}>
        <div className={style["content"]}>
          <img src={about_block} alt="" />
          <div ref={ref}  className={style["content__content"]}>
            <h3 className={style["title"]}>
              {props.t("about_block_title")} <span>Expert</span>
            </h3>
            <span  className={`${style["description"]} ${inView ? style["show-element"]: style[""]} `}>
              {props.t("about_block_description")}
            </span>
            <div className={style["statistics-block"]}>
              {content.map((el, index) => (
                <div className={style["statistics__item"]} key={el["title"]}>
                  <span className={style["statistics__title"]}>
                    {index === 0
                      ? props.t("about_block_experience")
                      : index === 1
                      ? props.t("about_block_customers")
                      : props.t("about_block_documents")}
                  </span>
                  <div className={style["separator"]} />
                  <span className={style["count"]}>{inView && (<Number n = {el.count}/> )} <div className={style["plus"]}>+</div></span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsBlock;
