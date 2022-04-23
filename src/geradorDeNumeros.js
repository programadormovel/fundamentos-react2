function gerarNumeros(qtde) {
    var cont = 0;
    var numero = 0;
    var listaGeral = [];
    var lista = [];
    var x = 0;
    for(x = 0; x < qtde; x++){
        cont = 0;
        lista = [];
        while(cont < 6){
            numero = Math.ceil(Math.random() * 60);
            if(!lista.includes(numero, 0)){
                lista[cont] = numero;
                cont++;
            }
        }
        listaGeral[x] = lista;
    }     
    return listaGeral
}

console.log(gerarNumeros(7))

function gerarNumeroNaoContido(min, max,
    array) {
        const aleatorio = parseInt(
            Math.random() * (max + 1 - min))
            + min
        
        return array.includes(aleatorio) ?
            gerarNumeroNaoContido(min,
                max, array) : aleatorio
    }

    console.log(gerarNumeroNaoContido(
        1, 5, [1, 2, 3, 4]    
    ))

    function gerarNumeros2(qtde) {
        const numeros = 
        Array(qtde).fill(0)
        .reduce((nums) => {
            const novoNumero =
            gerarNumeroNaoContido(1, 60, 
                nums)
            console.log([...nums, novoNumero])
            return [ ...nums, novoNumero]
        }, []).sort((n1, n2) => n1 - n2)
        return numeros
    }

    console.log(gerarNumeros2(6))