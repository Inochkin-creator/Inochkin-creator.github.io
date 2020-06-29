$("document").ready(function()
{
  //alert("Привет мир!!! = Hello world!!!");
  
  var a, b, c, d;
  
  // .................... PLUS ...............................  \\
  
  $(".b1").on("click", function() {

	a = $(".1").val();
    b = $(".2").val();
	
	a = parseFloat(a);
	b = parseFloat(b);
	
	c = parseInt(a);
	d = parseInt(b);
	
    if ((a <= 10 || b <= 10) && a >= 0 && b >= 0 && a == c && b == d){
	alert("Are you dumb and can't solve this?     " + (a + b));}
	else {alert(a + b);}
  });
  
  // .................... MULTIPLY ............................... \\
  
  $(".b2").on("click", function() {
    a = $(".3").val();
    b = $(".4").val();
	
	a = parseFloat(a); a = a.toFixed(5);
	b = parseFloat(b); b = b.toFixed(5);
	
	c = parseInt(a);
	d = parseInt(b);
	
    if (a >= 0 && b >= 0 && a == c && b == d){
	alert("Are you dumb and can't solve this?     " + (a * b));}
	else {alert(a * b);}
  });
  
});