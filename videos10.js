function pressed(){
  var text = document.getElementById("inp").value;
  //UpperCase
  output_up.innerHTML = text.toUpperCase()
  //LowerCase
  output_low.innerHTML = text.toLowerCase()
  //StartsWith
  output_startsw.innerHTML = text.startsWith("@")
  //Trim before EndsWith
  output_endsw.innerHTML = text.trim().endsWith("@")
  //Just Trim It
  output_trim.innerHTML = text.trim()
  //Hello    //&nbsp; is html namecode for space
  output_hello.innerHTML = "&nbsp;&nbsp;World&nbsp;&nbsp;"
  //Hello Trim
  output_trimHello.innerHTML = "  General K.  ".trim()
  
  //Text length
  console.log("Text Length"+text.length)

  output_concat.innerHTML = "You Typed: "+ text.trim() + 3


}