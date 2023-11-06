$(document).ready(function() {
    $("#submitBtn").click(function() {
        var name = $("#name").val();
        var email = $("#email").val();
        var suggestion = $("#suggestion").val();

        alert("Name: " + name + "\nEmail: " + email + "\nSuggestion: " + suggestion);
    });
});

$(document).ready(function() {
    var targetDate = new Date("2024-01-01T00:00:00Z").getTime();
  
    var countdown = setInterval(function() {
      var now = new Date().getTime();
  
      var timeRemaining = targetDate - now;
  
      var days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
      var hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      var minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);
  
      $("#timer").text(days + " days " + hours + " hours " + minutes + " minutes " + seconds + " seconds");
  
      if (timeRemaining < 0) {
        clearInterval(countdown);
        $("#timer").text("Offer Expired");
      }
    }, 1000);
  });
