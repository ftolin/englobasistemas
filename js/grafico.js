function desenharGraficos(){

	//colunas
	var tabela = google.visualization.arrayToDataTable(
		[
			['dia','Quantidade','Quantidade de Volumes','Quantidade de pedidos recebidos','Quantidade de Volumes Recebidos'],
			['27/04',50,50,50,50],
			['28/04',0,0,0,0],
			['29/04',50,50,50,50],
			['30/04',0,0,0,0],
			['01/05',0,0,0,0],
			['02/05',50,50,50,50],
			['03/05',50,50,50,50],
			['04/05',50,50,50,50]

		]);

	var opcoes = {

        seriesType: 'bars',
        series: {5: {type: 'line'}},
		width: 800,
		height: 400,
        colors: ['#6EA8CF','#EFF5FA','#DE8CEB','#F2E2F0' ],

        bar: {
            groupWidth: 40,
        },
        
        legend: {
            position: 'bottom',
        },

		vAxis: {
			gridlines:{color:'#EEEEEE', multiple: 10},
		}

	}


        var grafico = new google.visualization.ColumnChart(
        document.getElementById('graficoColuna'));

        var grafico2 = new google.visualization.ColumnChart(
        document.getElementById('graficoColuna2'));

        var grafico3 = new google.visualization.ColumnChart(
        document.getElementById('graficoColuna3'));                

                
	grafico.draw(tabela, opcoes);
    grafico2.draw(tabela, opcoes);
    grafico3.draw(tabela, opcoes);

}