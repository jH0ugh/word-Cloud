function WordCloud(){

	var topics = [];
	var layoutTopics = [];
	var sentimentBoundaries = [];

	function load(Topics){
		topics = Topics;
		var sentimentPostions = sortTopics();
		createSentimentBoundaries(sentimentPostions);
		createLayoutTopics();
		populateWordContainer();
		removeLoaderMessage();	
	};

	function sortTopics(){
		var count = 0;
		var tempTopics = {};
		var sentimentPositions = [];
		
		while(count < topics.length){
			//Clean up topic ids for data usage
			topics[count].id = topics[count].id.replace("'","");
			tempTopics[topics[count].id] = topics[count];
			sentimentPositions[count] = topics[count].sentimentScore;
			count++;
		}
		topics = tempTopics;
		
		return sentimentPositions;		
	};

	function createSentimentBoundaries(sentimentPositions){
		sentimentPositions = _.sortBy(sentimentPositions);

		//Add six boundary positions for font size usage
		count = 0;
		while(count < sentimentPositions.length){
			sentimentBoundaries.push(sentimentPositions[count]);
			count = (sentimentPositions.length / 6) + count;
		}
	};

	function createLayoutTopics(){
		count = 0;
		for(topic in topics){
			layoutTopics[count] = {};
			layoutTopics[count].text = topics[topic].label;
			layoutTopics[count].id = topics[topic].id;
			layoutTopics[count].size = topics[topic].sentimentScore;
			layoutTopics[count].topic = "0";
			count++;
		}	
	};

	function removeLoaderMessage(){
		$('#topicsContainer').removeClass('loading');
	};

	function populateWordContainer(){
		d3LayoutCloudHelper(layoutTopics, getWordColour, getWordFontSize, showMetaData);
	};

	function showMetaData(topicId){
		topic = topics[topicId];
		var template = _.template($('#metaItem').html(), {topicId:topicId});
		$('#topicMetaData').html(template);
	};

	function getWordColour(sentimentScore){
		var fontColour = "";

		if(sentimentScore > 60){
			fontColour = '#00CC00';
		}
		else if(sentimentScore < 40){
			fontColour = '#FF0000';
		}
		else{
			fontColour = '#bbb';
		}

		return fontColour;
	}

	function getWordFontSize(sentimentScore){
		var fontSize = 40;
		
		if(sentimentScore < sentimentBoundaries[1]){
			fontSize = 10;
		}
		else if(sentimentScore < sentimentBoundaries[2]){
			fontSize = 14;
		}
		else if(sentimentScore < sentimentBoundaries[3]){
			fontSize = 18;
		}
		else if(sentimentScore < sentimentBoundaries[4]){
			fontSize = 22;
		}
		else if(sentimentScore < sentimentBoundaries[5]){
			fontSize = 30;
		}

		return fontSize;
	}

	return {
		load : load,
		showMetaData : showMetaData,
		getWordColour : getWordColour,
		getWordFontSize : getWordFontSize,
	};
};

function getWordCloudData(url){
	if(!url){
		var url = './data/topics.json';
	}
	wordCloudData = new WordCloudGetData();
	wordCloudData.loadData(url);
}

function loadWordCloud(topics){
	wordCloud = new WordCloud();
	wordCloud.load(topics);
}