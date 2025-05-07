import Tesztkerdes from "./TesztKerdes.js";

export default class Tesztkerdesek
{
    #kerdesObj = [];
    #pElem;

    constructor(kerdesObj, pElem)
    {
        this.#pElem = pElem;
        this.#kerdesObj = kerdesObj;
        this.helyes = 0;
        this.helytelen = 0;        
        this.kerdesElem = document.querySelector(".kerdes:last-child");
        this.pontokElem = document.querySelector(".pontok");
        this.pontokMegjelenit();
        this.megjelenit();
        this.helyesListener();
    }

    pontokMegjelenit()
    {
        this.pontokElem.innerHTML = "";
        let html = `<h1>Helyes: ${this.helyes}, Helytelen: ${this.helytelen}</h1>`;

        this.pontokElem.insertAdjacentHTML("beforeend", html);        
    }

    megjelenit()
    {
        console.log(this.#kerdesObj);
        let html = `<div class="feladat">
                        <h2>${this.#kerdesObj[0]}</h2>
                        <h2>${this.#kerdesObj[1]}</h2>
                    </div>`;

        this.#pElem.insertAdjacentHTML("beforeend", html);

        for (let index = 2; index < this.#kerdesObj.length; index++) 
        {
            new Tesztkerdes(index, this.#pElem, this.#kerdesObj[index]);
        }
    }

    helyesListener() 
    {
        window.addEventListener("helyes", () => {
            this.helyes++;
            console.log(this.helyes)
            this.pontokMegjelenit();
        });
    
        window.addEventListener("helytelen", () => {
            this.helytelen++;
            this.pontokMegjelenit();
        });
    }

    


}