describe("wordCloud Object", function() {
  wordCloud = new WordCloud();
  wordCloud.load(testData);
  
  it("getWordFontSize() should return numbers greater than or equal to the last on incrementing request values, if boundaries are correctly set", function() {
   
    var count = 0;
    var lastVal = 0;
    while(count <= 100){      
      var currentVal = wordCloud.getWordFontSize(count);
      
      expect(lastVal).not.toBeGreaterThan(currentVal);

      var lastVal = currentVal;
      console.log('lastVal = '+ lastVal)
      count++;
    }
    
  });

  it("getWordColour() should return the correct colour values", function() {
   
    var count = 0;
    var lastVal = 0;
    while(count <= 100){      
      var currentColour = wordCloud.getWordColour(count);
      
      if(count>60){
        expect(currentColour).toBe('#00CC00');
      }

      else if(count<40){
        expect(currentColour).toBe('#FF0000');
      }

      else{
        expect(currentColour).toBe('#bbb');
      }
      console.log('currentColour = '+ currentColour)
      count++;
    }
    
  });
});