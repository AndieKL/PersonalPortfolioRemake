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
    $.ajax( {
      type: "GET",
      url: "http://quotes.stormconsultancy.co.uk/random.json",
      success: function(json) {
        $('.quote__content__quote').text(json.quote);
        $('.quote__content__author').text(json.author); 
        $('#tweet').attr('href','https://twitter.com/intent/tweet?text=' + json.quote  + " - " + json.author);
      }
    });
  }
}

export default RandomQuote;