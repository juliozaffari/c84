var nomes = [];
            function criarlista(){
               for (let j = 1; j<= 4; j++) {
               var nome = document.getElementById("nome"+j).value;
               nomes.push(nome);
            }
            console.log(nomes)
            var listaNomes = []
            for (let j = 0; j < nomes.length; j++) {
                listaNomes.push("<h4>Nome - " +  nomes[j] + "</h4>");
            }
            console.log(listaNomes)
            document.getElementById("comVirgula").innerHTML = listaNomes;
            
        }