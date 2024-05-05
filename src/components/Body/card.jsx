import stlye from "./css_body.module.css"

function Card({quote ,authore}){  //
    // console.log(props);
    return(
        <div>
            <section className={stlye.cards}>
            <p>{quote}</p>
            <span>{authore}</span>
            </section>
           
        </div>
    )
}
export default Card;