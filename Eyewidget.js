import './cs.css'
import eyeback from './eyeback.png'
export default function Eyewidget(){



document.addEventListener("mousemove",mousepos);

function mousepos(event){
    //alku infon järhjestely
    //
var elem= document.getElementById("eye");
var pup = document.getElementById("pupil");
    const rect=elem.getBoundingClientRect();//silmän cordinaatit
    var xoffset=rect.left;
    var yoffset=rect.top;
    var dist=25//napin etäisyys silmästä

    var x =event.clientX
    var y =event.clientY
    x=x-xoffset-50;
    y=y-yoffset-50;
    //että silmän voi liikuttaa minne haluaa sivulla
    //ja silmän nollakohta olisi jotenkin saatavilla

    var ang=Math.atan((y)/(x))
    //alku infon järjestely


    if(x<0){
    var angdiff=(Math.PI/2)+ang
    ang=angdiff+(Math.PI/2)
    }//hack trig
    //ilman tätä -x arvot tuottavat väärän x arvon


    var mdist= Math.sqrt(Math.pow(x,2)+Math.pow(y,2)) 

    if( mdist<=dist){
    dist=(mdist/dist)*dist
    }// silmän nappulan etäisyyden vaihtaja

    var yn=Math.sin(ang)*dist
    var xn =Math.cos(ang)*dist
    //yn ja xn on silman napin x ja y cordinatit silmän keskikohtaan nähden

    pup.style.top=yn-5+"px";
    pup.style.left=xn-5+"px";
    //päivittää silmän napin sijainnin
};



return(
    <>
<div id="container">


<div id="eye">
    <img src={eyeback} alt="t"/>


<div id="eyecenter">
<div id="pupil">
</div>

</div>

</div>
</div>


    </>
);




}
