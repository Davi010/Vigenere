function cifrar(texto, chave){
  let resultado = '';
  let chaveRepetida = chave.repeat(Math.ceil(texto.length / chave.length)).slice(0,texto.length);

  for(let i = 0; i < texto.length; i++){
    let textochar = texto[i].toUpperCase();
    let chavechar = chaveRepetida[i].toUpperCase();

    if (textochar >= 'A' && textochar <= 'Z' && chavechar >= 'A' && chavechar <= 'Z'){
      let posicao = textochar.charCodeAt(0) - 'A'.charCodeAt(0) + 1;
      let novoChar = String.fromCharCode(((textochar.charCodeAt(0) + chavechar.charCodeAt(0) - 2 * 'A'.charCodeAt(0)) % 26) + 'A'.charCodeAt(0));
      resultado += novoChar;
    }
    else{
      console.log("Erro");
    }
  }

  return resultado;
}

function decifrar(textoC, chave){
  let resultado = '';
  let chaveRepetida = chave.repeat(Math.ceil(textoC.length / chave.length)).slice(0, textoC.length);

  for(let i = 0; i < textoC.length; i++){
    let textochar = textoC[i].toUpperCase();
    let chavechar = chaveRepetida[i].toUpperCase();

    if (textochar >= 'A' && textochar <= 'Z' && chavechar >= 'A' && chavechar <= 'Z'){
      let posicao = textochar.charCodeAt(0) - 'A'.charCodeAt(0) + 1;
      let novoChar = String.fromCharCode(((textochar.charCodeAt(0) - chavechar.charCodeAt(0) + 26) % 26) + 'A'.charCodeAt(0));
      resultado += novoChar;
    }
    else{
      console.log("Erro");
    }
  }

  return resultado;
}

let texto = "Hello World!";
let chave = "KEY";

let textoCifrado = cifrar(texto, chave);
console.log("Texto cifrado:", textoCifrado);

let textoDecifrado = decifrar(textoCifrado, chave);
console.log("Texto decifrado:", textoDecifrado);
