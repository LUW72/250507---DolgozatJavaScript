import Tesztkerdes from "./TesztKerdes.js";

export default class Tesztkerdesek
{
    #kerdesObj = [];
    #pElem;

    constructor(kerdesObj, pElem)
    {
        this.#pElem = pElem;
        this.#kerdesObj = kerdesObj;
        this.kerdesElem = document.querySelector(".kerdes:last-child");
        this.megjelenit();
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


}