$(function(){
  console.log("JS works.");

//button to build a box.
  $('#buildBox').on('click', function(){
    console.log("Build box.")
    $('#boxes').append('<div class="box"><button class="removeBox">x</button></div>');
    console.log(this);
    randomColor();
  });

//make box black on click
  $('#boxes').on('click', '.box', function(){
    console.log("Make box black.")
    console.log(this);
    $(this).css('background-color', 'black');
  });

//x to remove box on click
  $('#boxes').on('click', '.removeBox', function(){
    console.log("Remove box.");
    console.log(this);
    $(this).parent().remove();
  });

//function to assign random color to box
  function randomColor (){
    console.log("Running function for random color.")
    var x = Math.floor((Math.random() * 7) + 1);
    console.log('Random number is ', x);
    switch(x) {
      case 1:
        $('.box').last().css('background-color', 'red');
        break;
      case 2:
        $('.box').last().css('background-color', 'orange');
        break;
      case 3:
        $('.box').last().css('background-color', 'yellow');
        break;
      case 4:
        $('.box').last().css('background-color', 'green');
        break;
      case 5:
        $('.box').last().css('background-color', 'blue');
        break;
      case 6:
        $('.box').last().css('background-color', 'indigo');
        break;
      case 7:
        $('.box').last().css('background-color', 'violet');
        break;
    }
  }
});
