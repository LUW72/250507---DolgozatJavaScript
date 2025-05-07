import { szenvedoMondatok } from "./angol.js";
import Tesztkerdesek from "./Tesztkerdesek.js";


let kerdesElem = document.querySelector(".kerdesek");

new Tesztkerdesek(szenvedoMondatok, kerdesElem);
