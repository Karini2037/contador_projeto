function verificar() {
   let data = new Date() // data atual
   let ano = data.getFullYear()  //ano atual
   let forano = document.getElementById('txtano'); // estou criando uma variavel chamada de forano e chamando o elemento txtano do id do input ano nascimento.
   let res = document.getElementById('res'); //estou criando uma variavel res e chamando o elemento da div com id chamado res.

   if (forano.value.length == 0 || parseInt(forano.value) > ano) {
        alert('Verifique os dados e tente novamente!');
   }else {
        let forsex =  document.getElementsByName('radsex');
        let idade = ano - parseInt(forano.value);
        let genero = '';
        let img = document.createElement('img');
        img.setAttribute('id', 'foto')
        if (forsex[0].checked) {
            genero = "Homem";
            if (idade >=0 && idade <= 10) {
                //criança
                img.setAttribute('src', 'crianca-masculina.png');
            }else if (idade < 21)  {
                //joven
                img.setAttribute('src', 'adolecente-masculino.png');
            }else if (idade < 50 ) {
               // adulto
               img.setAttribute('src', 'adulto-masculino.png');
            }else {
                //idoso
                img.setAttribute('src', 'idoso-masculino.png');
            }
        } else if(forsex[1].checked) {
            genero = "Mulher";
            if (idade >=0 && idade <= 10) {
                //criança
                img.setAttribute('src', 'crianca-feminina.png');
            } else if (idade < 21) {
                //joven
                img.setAttribute('src', 'adolecente-feminina.png');
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'adulto-feminino.png');
            }else {
                //idoso
                img.setAttribute('src', 'idoso-feminino.png');
            }
        }
        res.innerHTML = `Detectamos ${genero} com ${idade} ano.`
        res.appendChild(img) //estou fazendo aparecer a imagem, appendChild(img) estou adicionando um elemento que é o img

   }
   // NO if eu estou ferificando se forano que é variavel . value que é o  valor do input .length que  retorna o número de caracteres no valor do campo de entrada, ele esta contando quantos caracteres tem no campo de entrada,  que é o input ano de nascimento.
   // == 0 Ele verifica se o número de caracteres é igual a 0, ou seja se o campo de entrada está vazio.Então, essa parte do código verifica se o campo de entra(que é o input) está vazio.
   //O || é ou então.Agora  o forano > que ano verifica se o valor digitado no campo de entrada (que é o input) é maior que o valor da variavel ano.
   //Já o parseInt ele esta convertendo para número inteiro pq no formulario toda a informação é uma string(texto).

   //Agora dentro do else eu criei uma variavel chamada forsex e estou chamando ela pelo pelo document.getElementsByName('radsex'), que significa que eu estou chamando pelo o name do input.Agora eu criei uma variavel chamada de idade querecebe o ano(ano que é a variavel do ano atual) - parseInt(forano.value)(ParseInt que é convertido para número inteiro) e o forano é a variavel que foi criada para pegar o id do input do formulario digite o ano do nascimento e o .value é para pegar o valor do input.

   //Agora criei uma variavel chamada genero que recebe string vazia.(que ´pe as '' vazia) .

   //Agora vou verificar o sexo da pessoa se ela foi selecionada masculino ou feminino.Se o forsex[0] significa que  é o masculino . checked (significa que o que tiver marcado for o forsex[0] é sinal de que é masculino), agora se o forsex[1].checked significa que é feminino



   //para exibir na tela eu uso a variavel res.innerHTML = `idade calcular: ${idade}` e ele aparece na tela

   //Para colocar uma imagem dinamicamente com javascript, você vai criar ima variavel chamada img chamei ele pelo document.createElement('img') que significa que estou criando um elemento img, também pode criar um id no javascript exempolo, img.setAttribute('id', 'foto'), então você está criando um atributo cchamado foto.

}