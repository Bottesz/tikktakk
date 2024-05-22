import JatekTer from "./JatekTer";
/* példányosítjuk*/

const jatekLISTA=[" "," "," "," "," "," "," "," "," "]
let lepes= 0; /* ha a lépés számláló piros ,a kkor az x következik, haptlan, akkor 0
A lépésszámlálót mindig növeljük, ha rákattintunk*/ 
new JatekTer(jatekLISTA);
// feliratkozom a sajat kattintasom esemenyemre
$(window).on ("kattintasom", (event) => {
    console.log()event.detail);
    /*  */
    let index = event.detail;
    if (lepes % 2 ===0 ){
        jatekLISTA[index] = "x";

    }else{
        jatekLISTA[index] = "0;";
    }
    lepes++