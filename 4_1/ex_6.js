const exp = "cAvdlo";

switch (
    exp.toLowerCase()
) {
    case "cavalo":
        console.log(
            "move em L, andando obrigatoriamente 3 casas, sendo 2 em uma direção e 1 em outra"
        );
        break;
    case "peão":
        console.log(
            "move 1 direção a frente. Come só nas diagonais a sua frente. Primeiro movimento de cada peão pode ser 2 casas."
        );
        break;
    case "torre":
        console.log(
            "Move em linha, sendo horizontal ou vertical quantas casas quiser."
        );
        break;
    case "bispo":
        console.log("Move em todas as Diagonais quantas casas quiser");
        break;
    case "rainha":
        console.log("Move em todas as direções e quantas casas quiser.");
        break;
    case "rei":
        console.log(
            "move 1 casa em todas as direções. O jogador que matar o rei adversário vence o jogo"
        );
        break;
    default:
        console.log("Não existe essa peça no xadrez");
}