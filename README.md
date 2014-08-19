word-Cloud
==========

Instructions:
-Pull down the git source files.
-Load onto a server on a local instance or physical box to allow JSON to load without cross site scripting errors.
-Navigate a browser to 'index.html' in the root.
-Call getWordCloudData() with url link to JSON with the following structure
[{label:label,id:id,sentimentScore:sentimentScore},{label:label,id:id,sentimentScore:sentimentScore}]

-For tests navigate a browser to '/jasmine/SpecRunner.html'.



Libraries used:
NormalizeCSS - To conform to required browsers quirks
jQuery - a dependancy for other libs
underscore - update the dom
Jamsine - testing environment (first play and trying to figure out the best way of testing private functions)
d3.layout.cloud - used for generating the cloud layout
