export default class Tesztkerdes
{
    #pElem;
    #index;
    #kerdes;
    #valaszok = [];
    #helyesValasz;

    constructor(index, pElem, kerdes)
    {
        this.#index = index;
        this.#pElem = pElem;
        this.#kerdes = kerdes;
        this.#helyesValasz = this.#kerdes.valasztas[0];
        this.#valaszok = this.#kerdes.valasztas.sort(() => Math.random() - 0.5);        
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

    valaszKijelol() {
        for (let i = 0; i < this.#valaszok.length; i++) 
        {
            const valaszElem = document.querySelector(`.valaszok:last-child .valasz${i}`);

            if (valaszElem) 
            {
                valaszElem.addEventListener("click", (event) => {
                    console.log("Válasz kattintva: ", event.target);
    
                    if (valaszElem.innerText === this.#helyesValasz) 
                    {
                        valaszElem.classList.add("correct");
                        window.dispatchEvent(new CustomEvent("helyes", { detail: this.#index }));
                        valaszElem.style.pointerEvents = "none";
                    } 
                    else 
                    {
                        valaszElem.classList.add("incorrect");
                        window.dispatchEvent(new CustomEvent("helytelen", { detail: this.#index }));
                        valaszElem.style.pointerEvents = "none";
                    }
                });
            }
        }
    }
    


    
}