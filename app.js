<meta charset="UTF-8">
<script>

    function pulaLinha() {

        document.write("<br>");
    }

    function mostra(frase) {

        document.write(frase);
        pulaLinha();
    }

function pulaLinha() {
    document.write("<br>");
    document.write("<br>");
}

function mostra(frase) {
    document.write(frase);
    pulaLinha();
}

var totalFamiliares = parseInt(prompt("Quantidade de familiares?"));

var numero = 1;
while(numero <= totalFamiliares) {
var totalIdades = 0;
    var idade = parseInt(prompt("Informe idade do familiar"));
    totalIdades = totalIdades + idade;
    numero++;
}

var mediaDasIdades = totalIdades/totalFamiliares
mostra("A média das idades dos familiares é " + mediaDasIdades);
mostra("FIM");
	
</script>
