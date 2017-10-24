$(document).ready(function() {

  $("#userInput").submit(function(event) {
    event.preventDefault();

    var input = $("#sentence").val();
    //alert(input);
    var strings = input.split(" ");
    //alert(strings.length);


    var mirrors = [];
    for (var index = 0; index <= strings.length - 1; index +=1) {
      var double = true;
      var total = 0;
      strings.forEach(function(string) {
        if (string === strings[index]) {
          total += 1;
        };
      });
      //alert(total);

      strings.forEach(function(string) {
        if (strings[index] === string && total >= 2) {
          mirrors.push(string);
        }
      });
      //alert(mirrors);

      mirrors.forEach(function(mirror) {
        if (strings[index] === mirror) {
          var double = true;
        } else {
          var double = false;
        }
      })
      //alert(double);
      if (double === false) {
        $(".output").append("<li>" + strings[index] + " " + total + "</li>");
      }
    };
    //alert(mirrors);
  });
});
