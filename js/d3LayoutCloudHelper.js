function d3LayoutCloudHelper(topic, getWordColour, getWordFontSize, showMetaData){
	d3LayoutCloudHelperArray[topic[0].topic] = {showMetaData:showMetaData};
	
	var element = d3.select("#topicsContainer").append("svg")
    .attr("width", 500)
    .attr("height", 400)
    .attr("id", "svg");	
	
	
	d3.layout.cloud().size([490, 500])     
	.words(topic)
	.rotate(function() { return ~~(Math.random() * 2) * 5; })
	.fontSize(function(d) { 
		return getWordFontSize(d.size);
	})
	.on("end", draw)
	.start();

	function draw(words) {
		  
		element = d3.select("#svg");
	        
		element.append("g")
		.attr("transform", "translate(230,220)")
		.selectAll("text")
		.data(words)
		.enter().append("text")
		.style("font-size", function(d) { 
			return d.size + "px"; 
		})
		.style("fill", function(d) { return getWordColour(d.rawData.size); })
		.attr("onclick", function(d) { return "d3LayoutCloudHelperArray["+topic[0].topic+"].showMetaData('"+d.rawData.id+"')"; })
		.attr("class","wordItem")
		.attr("text-anchor", "middle")
		.attr("transform", function(d) {
			return "translate(" + [d.x, d.y] + ")rotate(" + d.rotate + ")";
		})
		.text(function(d) { return d.text; });

	  }
	
};

var d3LayoutCloudHelperArray = [];