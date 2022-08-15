function generated() {
    let alertMessage = document.getElementById("alertGenerated");
    let result = document.getElementById("result");
    alertMessage.style.display = "block";
    result.style.display = "block";
    copyTxt();
}

function generate(){
    let ytSearch = "https://www.youtube.com/results?search_query=";
    let searchKeyword = document.getElementById("searchKeyword").value;
    let refinedKeyword = searchKeyword.replace(" ", "+");
    let searchURL = ytSearch + refinedKeyword;
    document.getElementById("generatedURL").innerHTML = searchURL;
    generated();
}

// Code from - https://www.w3schools.com/howto/howto_js_copy_clipboard.asp
function copyTxt() {
    /* Get the text field */
    var copyText = document.getElementById("generatedURL");
  
    /* Select the text field */
    copyText.select();
    copyText.setSelectionRange(0, 99999); /* For mobile devices */
  
     /* Copy the text inside the text field */
    navigator.clipboard.writeText(copyText.value);
  
    /* Alert the copied text */
    //alert("Copied the text: " + copyText.value);
  }