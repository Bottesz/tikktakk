class Elem{
    #ertek=""
    #szuloELEM;
    #divELEM;
    #index = 0;

    constructor(ertek,szuloELEM){
        /* beállítjuk az adattagokat*/
        this.#index=index;
        this.#ertek = ertek;
        this.#szuloELEM=szuloELEM;
        this.#megjelenit()
        /* eseménykezelő a div elemre*/ 
        //div megfogása
        this.#divELEM=this.#szuloELEM.children("div:last-child")
        console.log(this.#divELEM)
        // névtelen függvként functiont használva a this arra a html elemre mutat amely kiváltotta az eseményt,nyíl függv esetén a this a konkrét példányra mutat
        this.#divELEM.on("click",function(){
            console.log(this.#index)

        })

    }

    #megjelenit(){
        /* elkészítjük  a html kódot */
        let txt = `
            <div class="elem">
                <p>${this.#ertek} </p>
            </div>
        `
    this.#szuloELEM.append(txt);

        /* sajátesemény létrehozása */ 
        #trigger(esemenyNev)
        const e =new CustomEvent(esemenyNev,{detail:this.#index})
        // az esemenyt elerhetove teszem az egesz programban
        window.dispatchEvent(e);
        }
}