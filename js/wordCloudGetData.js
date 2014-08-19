function WordCloudGetData(){

	function loadData(url){
		var jsonData = $.getJSON(url,function(){
			loadWordCloud(jsonData.responseJSON.topics);
		});
	};

	return {
		loadData : loadData
	};
}