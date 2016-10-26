var allQuestions = JSON.parse(jsonstr);

$(document).ready(function() {
    retrieveNewQuote();
});

var quoteBtn = document.getElementById("quoteBtn");
quoteBtn.addEventListener("click", displayQuote);

function displayQuote() {
    var author = $(".author");
    var quote = $(".fa-quote-left");

    quote.add(author).fadeOut("slow", function() {
        retrieveNewQuote();
    });

    quote.add(author).fadeIn("slow");

    var tweetBtn = document.querySelector("a.btn-twitter");
    var hrefLink = "https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=%22" + $(".fa-quote-left").text() + "%22 " + $(".author");

    tweetBtn.setAttribute('href', hrefLink);
}

function retrieveNewQuote() {
    var index = allQuestions[Math.floor(Math.random()*allQuestions.length)];
    $(".author").text('- ' + index.author);
    $(".fa-quote-left").text(index.quote);
}