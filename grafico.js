function desenharGraficos(){

	//colunas
	var tabela = google.visualization.arrayToDataTable(
		[
			['dia','Quantidade','Quantidade de Volumes','Quantidade de pedidos recebidos','Quantidade de Volumes Recebidos', { role: 'style' }],
			['27/04',50,50,50,50,],   
			['28/04',0,0,0,0,'#b87333'],   
			['29/04',50,50,50,50,'#b87333'],   
			['30/04',0,0,0,0,'#b87333'],   
			['01/05',0,0,0,0,'#b87333'],   
			['02/05',50,50,50,50,'#b87333'],   
			['03/05',50,50,50,50,'#b87333'],   
			['04/05',50,50,50,50,'#b87333']

		]);

	var opcoes = {

		width: 800,
		height: 400,
		vAxis: {
					gridlines:{color:'#EEEEEE'},
				}
	}


	var grafico = new google.visualization.ColumnChart(
				document.getElementById('graficoColuna'));
	grafico.draw(tabela, opcoes);

}