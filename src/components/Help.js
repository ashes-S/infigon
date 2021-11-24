import "./Help.css"
import stepsImg from "./images/stepsImg.png"

function Help(){

    return(
        <>
            <section className="sec-help">
                <article className="main-cont">

{/* use component/props for these */}

                    <figure className="written-content">
                        <h1>How we can Help</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur 
                            adipiscing elit. Aenean sed tortor massa. 
                            Morbi non ultrices felis. Nunc elementum, 
                            augue euismod consectetur auctor, lacus metus 
                            sollicitudin est, sit amet ultrices massa dolor
                        </p>
                        <div className="steps">
                            <h3><small>STEP 1 - </small>Orbi non ultrices</h3>
                            <h3><small>STEP 2 - </small>Orbi non ultrices</h3>
                            <h3><small>STEP 3 - </small>Orbi non ultrices</h3>
                            <h3><small>STEP 4 - </small>Orbi non ultrices</h3>
                        </div>
                    </figure>

                    <figure className="art-img">
                        <img src={stepsImg}/>
                    </figure>
                    
                </article>
            </section>
        </>
    )
}

export default Help