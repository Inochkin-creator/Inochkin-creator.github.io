$("document").ready(function()
{
  //alert("Привет мир!!! = Hello world!!!");
  
  //var a, b, c;
  
  
  // .................... PLUS ...............................  \\
  
  $(".b1").on("click", function() {

	a = $(".1").val();
    b = $(".2").val();
	
	a = parseFloat(a); a *= 1000000;
	b = parseFloat(b); b *= 1000000;
	
	a += b; a /= 1000000;
	
	alert(a);
  });
  
  
  // .................... MULTIPLY ............................... \\
  
  $(".b2").on("click", function() {
    a = $(".3").val();
    b = $(".4").val();
	
	a = parseFloat(a); a *= 1000000;
	b = parseFloat(b); b *= 1000000;
	
	a *= b; a /= 1000000000000;
	
	alert(a);
  });
  
  
  // .................... Divide ............................... \\
  
  $(".b3").on("click", function() {
    a = $(".5").val();
    b = $(".6").val();
	
	a = parseFloat(a); a *= 1000000;
	b = parseFloat(b); b *= 1000000;
	
	a /= b; 
	
	a = Math.round(a * 1000000000) / 1000000000;
	
	alert(a);
  });
  
  
  // .................... Quadratic Equation ............................... \\
  
  $(".b4").on("click", function() {
    a = $(".7").val();
	b = $(".8").val();
	c = $(".9").val();
	
	a = parseFloat(a);
	b = parseFloat(b);
	c = parseFloat(c);
	
	D = b * b - 4 * a * c;
	x1 = (-b + Math.sqrt(D)) / (2 * a); 
	x1 = Math.round(x1 * 1000000) / 1000000;
	x2 = (-b - Math.sqrt(D)) / (2 * a);
	x2 = Math.round(x2 * 1000000) / 1000000;
	
	if (a == 0)
	{
	  if (b != 0) {x1 = -c / b; alert("x = " + x1);}
	  else { alert("x = Any number"); }
	}
	else if (D < 0)
	{
	  if (b != 0)
	  {
	    x1 = (-b / 2 * a) + " + " + ( (Math.round((Math.sqrt(-D) / (2 * a)) * 1000000) / 1000000) + "i");
	    x2 = (-b / 2 * a) + " - " + ( (Math.round((Math.sqrt(-D) / (2 * a)) * 1000000) / 1000000) + "i");
	  }   
	  else
	  {
		x1 = (Math.round((Math.sqrt(-D) / (2 * a)) * 1000000) / 1000000) + "i";
	    x2 = "-" + ( (Math.round((Math.sqrt(-D) / (2 * a)) * 1000000) / 1000000) + "i");
	  }
	  alert("x1 = " + x1 + "\n" + "x2 = " + x2);
	}
	else if (x1 != x2)
	  {alert("x1 = " + x1 + "\n" + "x2 = " + x2);}
    else
	  {alert("x = " + x1);}
  });
  
  
  // .................... Pythagoras' Theorem ............................... \\
  
  $(".b5").on("click", function() {
    a = $(".10").val();
	b = $(".11").val();
	c = $(".12").val();
	
	if (a == "" && b != "" && c != "")
	{
	  b = parseFloat(b);
	  c = parseFloat(c);
	  
	  a = c * c - b * b;
	  
	  if (a >= 0) {a = Math.sqrt(a);}
	  else {a = Math.sqrt(-a) + "i";}
	  alert(a);
	}
	
	else if (a != "" && b == "" && c != "")
	{
	  a = parseFloat(a);
	  c = parseFloat(c);
	  
	  b = c * c - a * a;
	  
	  if (b >= 0) {b = Math.sqrt(b);}
	  else {b = Math.sqrt(-b) + "i";}
	  alert(b);
	}
	
	else if (a != "" && b != "" && c == "")
	{
	  a = parseFloat(a);
	  b = parseFloat(b);
	  
	  c = a * a + b * b;
	  
	  if (c >= 0) {c = Math.sqrt(c);}
	  else {c = Math.sqrt(-c) + "i";}
	  alert(c);
	}
	
	
	
  });
});