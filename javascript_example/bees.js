//In whatever state it's in it should feel finished, should appear to be finished

console.log("hello, world");

beeword = bee[0]
//caseyword = casey[0]
//select a random word

var joined_word_array = bee.concat(casey);
var current_source_array = joined_word_array;
//isolate a tag in the document
var content = document.getElementById("content");
var source = document.getElementById("source");
var output = document.getElementById("output");

//set the height of source to height of window
//windowHeight = window.innerHeight * .92;
//source.style.height = windowHeight + "px";
//hide content that overflows the source div
//source.style.overflow = "scroll";


//generate tags and put content in them
//function to make a div or span
function make_random_words(srcArray) {
	
	//casey_random_number = Math.floor(Math.random() * casey.length)
	//casey_r_word = casey[casey_random_number];
	

	joined_random_number = Math.floor(Math.random() * srcArray.length)
	joined_r_word = srcArray[joined_random_number];

	word = document.createElement("div");
	//give a class
	word.setAttribute("class", "words");
	//make words lowercase
	word.style.textTransform = "lowercase";
	//add content to the html page
	word.innerHTML = joined_r_word;

	//attach it to the document/page
	source.appendChild(word);

	sourceHeight = source.offsetHeight;
	windowHeight = window.innerHeight;

	console.log(sourceHeight)
	if(sourceHeight  > window.innerHeight * .96) {
	
		document.getElementById("buttons").style.top = word.offsetTop - word.offsetHeight + "px";
		source.removeChild(word);
	}

	//uncomment to create line breaks
	//content.innerHTML += "<br/>"

	//add click action for divs
	word.onclick = function() {
		//alert(this.innerHTML)
		console.log(this.innerHTML);

		//add words to output div
		output.innerHTML += this.innerHTML + " ";

		//repopulate or remove(?) source word
		joined_random_number = Math.floor(Math.random() * srcArray.length);
		joined_r_word = srcArray[joined_random_number];

		this.innerHTML = srcArray[joined_random_number];

	}

}



for(i=0; i<400; i++) {
	make_random_words(current_source_array);
}


window.onresize = function() {

		sourceHeight = source.offsetHeight;
		windowHeight = window.innerHeight;

		if(sourceHeight > windowHeight - 50) {
			sourceHeight = windowHeight - 20 + "px"
		}

		document.getElementById("buttons").style.top = source.offsetHeight - 20 +"px"
		
}

document.getElementById("shuffle").onclick = function() {
	//empty the source div
	source.innerHTML = " ";
	//repopulate the source div
	for(i=0; i<400; i++) {
	make_random_words(current_source_array);
	}
}

document.getElementById("clear").onclick = function() {
		output.innerHTML = " ";
}

document.getElementById("return").onclick = function() {
		output.innerHTML += "<br/>";
}

document.getElementById("export").onclick = function saveTextAsFile() {

    var textToSave = document.getElementById("output").innerHTML;

    var textToSaveAsBlob = new Blob([textToSave], {type:"text/plain"});
    var textToSaveAsURL = window.URL.createObjectURL(textToSaveAsBlob);
    var fileNameToSaveAs = "output.txt";
    var downloadLink = document.createElement("a");

    downloadLink.download = fileNameToSaveAs;
    downloadLink.href = textToSaveAsURL;
    document.body.appendChild(downloadLink);
    downloadLink.click();

    //downloadLink.innerHTML = "Download File";
    //downloadLink.onclick = destroyClickedElement;
    //downloadLink.style.display = "none";
    //document.body.removeChild(event.target) = function destroyClickedElement(event) {
//}

}

document.getElementById("import").onclick = function() {

    //var source.innerHTML;
    var newText = prompt("input new text");
    //if (newText == null || person == "") {
    //    source.innerHTML = "";
   // } else {
  // source.innerHTML = newText;
  newText = strip_string(newText);


  input_word_array = newText.split(" ");
  current_source_array = input_word_array;
  //empty the source div
	source.innerHTML = " ";

  for(i=0; i<400; i++) {
	make_random_words(current_source_array);
	}


   

}