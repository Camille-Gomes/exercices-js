/* 

Pour chaque nombre n de la liste, on veut effectuer les opérations suivantes :

si le nombre est divisible par 3 : on affiche Garçon
si le nombre est divisible par 5 : on affiche Fille
si le nombre est divisible par 3 et par 5 : on affiche GarçonFille
sinon : on affiche le nombre n
*/

function getMsg(i) {
    if (i % 3 === 0 && i % 5 === 0) {
        return "GarçonFille";
    }
    if (i % 3 === 0) {
        return "Garçon";
    }
    if (i % 5 === 0) {
        return "Fille";
    }
    return i;
}

console.log(getMsg(15) === "GarçonFille");
console.log(getMsg(3) === "Garçon");
console.log(getMsg(5) === "Fille");
console.log(getMsg(2) === 2);
