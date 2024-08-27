import pawn from  "./coins/white_pawn-removebg-preview.png";
import king from "./coins/whiteking-removebg-preview.png";
import queen from "./coins/white_queen.png";
import bishop from "./coins/itebishop-removebg-preview.png";
import knight from "./coins/white_knight.png";
import rook from "./coins/white_rook.png"

function WhiteC(){
    return(
        <main>
        <div className="part">
            <div className="white pawn"><img src={pawn}></img></div>
            <div className="black pawn"><img src={pawn}></img></div>
            <div className="white pawn"><img src={pawn}></img></div>
            <div className="black pawn"><img src={pawn}></img></div>
            <div className="white pawn"><img src={pawn}></img></div>
            <div className="black pawn"><img src={pawn}></img></div>
            <div className="white pawn"><img src={pawn}></img></div>
            <div className="black pawn"><img src={pawn}></img></div>
        </div>
        <div className="part">
            <div className="black rook"><img src={rook}></img></div>
            <div className="white knight"><img src={knight}></img></div>
            <div className="black bishop"><img src={bishop}></img></div>
            <div className="white queen"><img src={queen}></img></div>
            <div className="black king"><img src={king}></img></div>
            <div className="white bishop"><img src={bishop}></img></div>
            <div className="black knight"><img src={knight}></img></div>
            <div className="white rook"><img src={rook}></img></div>
        </div>
        </main>
    )
}

export default WhiteC;