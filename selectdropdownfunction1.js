function handleCalcSelection()
{
  var val = document.getElementById("Areacalcselector").value;
  switch( parseInt(val) ) {
    case 1:
      // code block
      document.getElementById("CalcTitle").innerText = "Square";
      document.getElementById("square").style.display = "block";
      document.getElementById("circle").style.display = "none";
      document.getElementById("rectangle").style.display = "none";
      break;
    case 2:
      // code block
      document.getElementById("CalcTitle").innerText = "Rectangle";
      document.getElementById("square").style.display = "none";
      document.getElementById("circle").style.display = "none";
      document.getElementById("rectangle").style.display = "block";
      
      break;

      case 3:
        // code block
        document.getElementById("CalcTitle").innerText = "Circle";
        document.getElementById("square").style.display = "none";
        document.getElementById("circle").style.display = "block";
        document.getElementById("rectangle").style.display = "none";
        break;
    default:
      // code block
      document.getElementById("CalcTitle").innerText = "Select the calculator";
      
  }
}

// function rectangleareacalculatorFunction() {
//     location.replace("rectangle.html")
// }

//     function squareareacalculatorFunction() {
//         location.replace("squarearea.html")
//       }

//       function circleareacalculatorFunction() {
//         location.replace("circle.html")
//       }