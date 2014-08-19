<b>word-Cloud</b>
==========

<b>Instructions:</b><br/>
-Pull down the git source files.<br/>
-Load onto a server on a local instance or physical box to allow JSON to load without cross site scripting errors.<br/>
-Navigate a browser to 'index.html' in the root.<br/>
-Call getWordCloudData() with url link to JSON with the following structure<br/>
[{label:label,id:id,sentimentScore:sentimentScore},{label:label,id:id,sentimentScore:sentimentScore}]<br/>

-For tests navigate a browser to '/jasmine/SpecRunner.html'.



<b>Libraries used:</b><br/>
NormalizeCSS - To conform to required browsers quirks<br/>
jQuery - a dependancy for other libs<br/>
underscore - update the dom<br/>
Jamsine - testing environment (first play and trying to figure out the best way of testing private functions)<br/>
d3.layout.cloud - used for generating the cloud layout<br/>
