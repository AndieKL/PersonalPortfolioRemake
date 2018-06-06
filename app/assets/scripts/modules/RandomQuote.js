import $ from 'jquery';

class RandomQuote {
  constructor(){
    this.newQuoteBtn = $('#quote');
    this.events();
  }

  events() {
    this.newQuoteBtn.click(this.getNewQuote);
    return false;
  }

  getNewQuote() {
    var notWorkAppropriate = false;
    do {
      notWorkAppropriate = false;
      $.ajax( {
        type: "GET",
        url: "http://quotes.stormconsultancy.co.uk/random.json",
        success: function(json) {
          if (json.quote.includes('sex')) {
            console.log('not work appropriate');
            notWorkAppropriate = true;
            console.log(notWorkAppropriate);
          }
          else {
            $('.quote__content__quote').text(json.quote);
            $('.quote__content__author').text(json.author); 
            $('#tweet').attr('href','https://twitter.com/intent/tweet?text=' + json.quote  + " - " + json.author);
          }
        }
      });
    }
    while (notWorkAppropriate);
  }
}

export default RandomQuote;