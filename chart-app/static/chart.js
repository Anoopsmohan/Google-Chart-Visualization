
        google.load("jquery", "1");
	google.load('visualization', '1.0', {'packages':['corechart']});

        function drawPieChart(list) {
		graph_data = init(list);  
	        data = graph_data[0];
		options = graph_data[1];
		  // Instantiate and draw our chart, passing in some options.
		var chart = new google.visualization.PieChart(document.getElementById('chart_div'));
		      chart.draw(data, options);
	}

	function drawBarChart(list) {
	 	graph_data = init(list);  
	        data = graph_data[0];
		options = graph_data[1];
		 // Instantiate and draw our chart, passing in some options.
		var chart = new google.visualization.BarChart(document.getElementById('chart_div'));
		      chart.draw(data, options);
	}


	function init(list){
              	var data = new google.visualization.DataTable();
		data.addColumn('string', 'Topping');
		data.addColumn('number', 'Slices');
		var array = $.map(list, function(el){
			return [[el[0],parseInt(el[1])]];
		});
		data.addRows(array);
		var options = {'title':'How Much Pizza I Ate Last Night',
				     'width':400,
				     'height':300};
		graph_data = [data, options];
		return graph_data;
	}

        function mycallbackPie(list){
		google.setOnLoadCallback(drawPieChart(list));
 
    	}

        function mycallbackBar(list){
		google.setOnLoadCallback(drawBarChart(list));
 
    	}
	
	$(document).ready(function(){
	
        $("#btn1").click(function(){
	var t1 = $("#val1").val();
	var t2 = $("#val2").val();
	var t3 = $("#val3").val();
	var t4 = $("#val4").val();
	var t5 = $("#val5").val();
	var t6 = $("#val6").val();
	var param = {"t1":t1, "t2":t2, "t3":t3, "t4":t4, "t5":t5, "t6":t6};
		$.post( "graph/", param, function(data){	
			var data1 = eval(data);
			alert(typeof data1);
			mycallbackPie(data1);
			    
		});
           });

	$("#btn2").click(function(){
	var t1 = $("#val1").val();
	var t2 = $("#val2").val();
	var t3 = $("#val3").val();
	var t4 = $("#val4").val();
	var t5 = $("#val5").val();
	var t6 = $("#val6").val();
	var param = {"t1":t1, "t2":t2, "t3":t3, "t4":t4, "t5":t5, "t6":t6};
        $.post( "graph/", param, function(data){	
			var data1 = eval(data);
			mycallbackBar(data1);
			    
		});
           });

        });

