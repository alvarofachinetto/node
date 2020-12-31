class Cassino{

    constructor(numeroFaces){
        this.numeroFaces = numeroFaces;
    }

    rodar(){
        return Math.floor(Math.random() * (this.numeroFaces - 1)) + 1;
    }

}

var cassino = new Cassino(20);

var numeroGerado = cassino.rodar();

console.log(numeroGerado);