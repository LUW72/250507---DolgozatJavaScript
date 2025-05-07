export default class Tesztkerdes
{
    #pElem;
    #index;
    #kerdes;
    #valaszok = [];

    constructor(index, pElem, kerdes)
    {
        this.#index = index;
        this.#pElem = pElem;
        this.#kerdes = kerdes;
        this.#valaszok = this.#kerdes.valasztas;
        this.megjelenit();
        this.valaszMegjelenit();
    }

    megjelenit()
    {
        let html = `<div class="kerdes">
                        <h3>${this.#kerdes.mondat}</h3>
                        <h4>${this.#kerdes.alap}</h4>
                    </div>`;

        this.#pElem.insertAdjacentHTML("beforeend", html);
    }

    valaszMegjelenit()
    {
        let html = `<div class="valaszok">`;
        for (let index = 0; index < this.#valaszok.length; index++) 
        {
            html += `<div class="valasz${index}">${this.#valaszok[index]}</div>`;
        }
        html += `</div>`;
        this.#pElem.insertAdjacentHTML("beforeend", html);

        this.valaszKijelol();
    }

    valaszKijelol()
    {
        let valaszMegadott0 = document.querySelector(".valaszok:last-child .valasz0");
        let valaszMegadott1 = document.querySelector(".valaszok:last-child .valasz1");
        let valaszMegadott2 = document.querySelector(".valaszok:last-child .valasz2");
        let valaszMegadott3 = document.querySelector(".valaszok:last-child .valasz3");

        valaszMegadott0.addEventListener("click",(event)=>{
            console.log("Válasz kattintva: ", event.target)
            valaszMegadott0.classList.add("highlight");
            window.dispatchEvent(new CustomEvent("highlight", {detail: this.#index}));
        });

        valaszMegadott1.addEventListener("click",(event)=>{
            console.log("Válasz kattintva: ", event.target)
            valaszMegadott1.classList.add("highlight");            
            window.dispatchEvent(new CustomEvent("highlight", {detail: this.#index}));
        });

        valaszMegadott2.addEventListener("click",(event)=>{
            console.log("Válasz kattintva: ", event.target)
            valaszMegadott2.classList.add("highlight");            
            window.dispatchEvent(new CustomEvent("highlight", {detail: this.#index}));
        });

        valaszMegadott3.addEventListener("click",(event)=>{
            console.log("Válasz kattintva: ", event.target)
            valaszMegadott3.classList.add("highlight");            
            window.dispatchEvent(new CustomEvent("highlight", {detail: this.#index}));
        });


    };


    
}