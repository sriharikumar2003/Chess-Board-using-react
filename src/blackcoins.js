import pawn from "./coins/blackpawn-removebg-preview.png";
import king from "./coins/black_king-removebg-preview.png";
import queen from "./coins/blackwueen-removebg-preview (1).png";
import bishop from "./coins/black_bishop-removebg-preview.png";
import knight from "./coins/blacknight-removebg-preview.png";
import rook from "./coins/blackrook.png";
function BlackC(){
    return(
        <main>
        <div className="part">
        <div className="white pawn"><img src= {rook}></img></div>
        <div className="black pawn"><img src= {knight}></img></div>
        <div className="white pawn"><img src= {bishop}></img></div>
        <div className="black pawn"><img src= {queen}></img></div>
        <div className="white pawn"><img src= {king}></img></div>
        <div className="black pawn"><img src= {bishop}></img></div>
        <div className="white pawn"><img src= {knight}></img></div>
        <div className="black pawn"><img src= {rook}></img></div>
        </div>
        <div className="part">
        <div className="black rook"><img src= {pawn}></img></div>
        <div className="white knight"><img src= {pawn}></img></div>
        <div className="black bishop"><img src= {pawn}></img></div>
        <div className="white queen"><img src= {pawn}></img></div>
        <div className="black king"><img src= {pawn}></img></div>
        <div className="white bishop"><img src= {pawn}></img></div>
        <div className="black knight"><img src= {pawn}></img></div>
        <div className="white rook"><img src= {pawn}></img></div>
        </div>
        </main>
    )
}
export default BlackC;