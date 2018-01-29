//gallery picures names
let picturesNames = ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg', '7.jpg'];



//let begginingPic = `<img src="pictures/` +picturesNames[beginPic]+ `" alt="first pic" height="400" width="400" />`;
//button to change next picture in gallery
let buttonNext = '<button class="btn btn-primary" id="nextButton">Next</button>';
//button to generate random picture in canvas
let buttonRandom = '<button class="btn btn-warning" id="randomPicture">Random</button>';
//button to back previous picture
let buttonPrev = '<button class="btn btn-primary" id="prevButton">Prev</button>';


//button to put text on top
let buttonTextOnTop = '<button class="btn btn-danger" id="drawOnTop">Text on Top</button>';
//button to put text on middle
let buttonTextOnMiddle = '<button class="btn btn-primary" id="drawOnMiddle">Text on Middle</button>';
//button to write text on bottom
let buttonTextOnBottom = '<button class="btn btn-success" id="drawOnBottom">Text on Bottom</button>';


//button to change love quote
let buttonChangeQuote = '<button class="btn btn-primary" id="changeQuote">Change Quote</button>';
//button to draw choosen quote on a canvas
let buttonPutQuotetOnPicture = '<button class="btn btn-danger" id="putQuoteOnPicture">Put on Picture</button>';
//button to download drawed picture
let buttonDownloadDraw = '<button class="btn btn-success" id="downloadDraw">Download</button>';
//place where user write own  love message
let userQuoteText = '<textarea class="userQuote form-control" name="userQuote" rows = "5" cols="54">Your Valentine Text Here</textarea>';
//button to draw user love message to picture in canvas
let drawButton = '<button class="btn btn-primary drawYourTextOnImage">Write On Picture</button>';
//button to turn on new style textarea
let buttonNewStyleTextarea = '<button class="btn btn-success" id="newTextareaStyle">Text Editor</button>';

//button to clear textarea where user write message
let clearTextareaButton = '<button class="btn btn-warning" id="clearTextArea">Old-Style Text Field</button>';
//button for browsing and finding image on user hard disk
let browseInputButton = '<input id="fileToUpload" type="file" />';

// function nextPict(){
// 	let picturesNames = ['1.jpg','2.jpg','3.jpg','4.jpg', '5.jpg', '6.jpg', '7.jpg'];
// 	let pic = '<img src="pictures/' + picturesNames[1] + '" height="400" width="400" />';
//
//
// 	$('.container img').replaceWith(pic);
//
// }



//Generating random love messages
function randLoveQuotes() {
  let quotes = [
    "Очите ти са нежен свят, устните ти - топъл шоколад, просто казано накратко, ти си нещо много сладко!",
    "Слънчице прекрасно, искам те ужасно. Как до тебе да се гушна, нежни думи да ти шушна? Аз за тебе си мечтая, с устни да те подлудя желая!",
    "Обичам те! През мъка и сълзи! Обичам те дори да ме боли! Да, грях е, трябва да призная, но твоята любов ме праща в рая.Честити Свети Валентин!",
    "Пиша ти защото те обичам! Виж само колко хубаво звучи! Но истинската хубост е, когато със същото отговаряш ти!"
  ];

  let random = Math.floor((Math.random() * quotes.length - 1) + 1);

  return quotes[random];



}




let love = randLoveQuotes();

var CanvasText = new CanvasText;

$(document).ready(function() {

  //picture in beggining


  Canvas = document.getElementById("editPic");
  Context = Canvas.getContext('2d');

  CanvasText.config({
      canvas: Canvas,
      context: Context,
      fontFamily: "Verdana",
      fontSize: "60px",
      fontWeight: "normal",
      fontColor: "#fff",
      lineHeight: "22"
  });



  //document.getElementsByClassName('container')[0].innerHTML = begginingPic;
  // $('.container').prepend(begginingPic);

  //On class button add element from variable buttonNext, buttonRandom, buttonPrev
  $('.buttons').prepend(buttonNext);
  $('.buttons').prepend(buttonRandom);
  $('.buttons').prepend(buttonPrev);

  //On element with class loveQuote add variable love(which contain random love message generated with randLoveQuotes() method)
  $('.loveQuote').prepend(love);


  $('.whereToDrawText').prepend(buttonTextOnBottom);
  $('.whereToDrawText').prepend(buttonTextOnMiddle);
  $('.whereToDrawText').prepend(buttonTextOnTop);


  //On element with class loveQuoteButtons added buttons download, changeQuote, put quote on picture
  $('.loveQuoteButtons').prepend(buttonDownloadDraw);
  $('.loveQuoteButtons').prepend(buttonChangeQuote);
  $('.loveQuoteButtons').prepend(buttonPutQuotetOnPicture);

  //On element with class userTextForm add textarea for user message, draw button for drawing text on picture
  //$('.userTextForm').prepend(buttonNewStyleTextarea);
  //$('.userTextForm').prepend(clearTextareaButton);
  $('.userTextForm').prepend(drawButton);
  $('.userTextForm').prepend(userQuoteText);

  //On element with class browseImg added variable browseInputButton, which contain input for searching file on user comp hard
  $('.browseImg').prepend(browseInputButton);

  //tinymce.init({ selector:'textarea' });


//Make textarea with user message more beautiful
 /*
  $('.userQuote').summernote({
    toolbar: [
      // [groupName, [list of button]]
      ['style', ['bold', 'italic', 'clear']],
      ['font', ['superscript', 'subscript']],
      ['color', ['color']],
      ['para', ['paragraph']],
      ['height', ['height']]
    ]
  });
*/





  //if user have clicked on nextButton, prevButton or random button user text on canvas - gone.
  // document.getElementById('nextButton').addEventListener('click', function() {
  //    context.clearRect(0, 0, canvas.width, canvas.height);
  //  }, false);
  //
  //  document.getElementById('prevButton').addEventListener('click', function() {
  //     context.clearRect(0, 0, canvas.width, canvas.height);
  //   }, false);
  //
  //
  //   document.getElementById('randomPicture').addEventListener('click', function() {
  //      context.clearRect(0, 0, canvas.width, canvas.height);
  //    }, false);






  //counter for pictures names array
  let count = 0;

  $('#nextButton').click(function() {

    document.getElementById('editPic').addEventListener('click', function() {
       context.clearRect(0, 0, canvas.width, canvas.height);
     }, false);


    //let picturesNames = ['1.jpg','2.jpg','3.jpg','4.jpg', '5.jpg', '6.jpg', '7.jpg'];
    pic = '<img src="pictures/' + picturesNames[count] + '" height="400" width="400" />';
    $('.container img').replaceWith(pic);
    imageObj.src = 'pictures/' + picturesNames[count];
    // love = '<div class="loveQuote">' + randLoveQuotes(); + '</div>';
    // $('.loveQuote').replaceWith(love);



    count++;
    if (count == picturesNames.length) {
      count = 0;
    }

  });




  $('#prevButton').click(function() {

    //let picturesNames = ['1.jpg','2.jpg','3.jpg','4.jpg', '5.jpg', '6.jpg', '7.jpg'];
    pic = '<img src="pictures/' + picturesNames[count] + '" height="400" width="400" />';
    $('.container img').replaceWith(pic);
    imageObj.src = 'pictures/' + picturesNames[count];
    // love = '<div class="loveQuote">' + randLoveQuotes(); + '</div>';
    // $('.loveQuote').replaceWith(love);

    count--;
    if (count < 0) {
      count = picturesNames.length - 1;
    }

  });



  $('#randomPicture').click(function() {
    //let picturesNames = ['1.jpg','2.jpg','3.jpg','4.jpg', '5.jpg', '6.jpg', '7.jpg'];
    let random = Math.floor((Math.random() * picturesNames.length - 1) + 1);
    pic = '<img src="pictures/' + picturesNames[random] + '" height="400" width="400" />';
    $('.container img').replaceWith(pic);

    imageObj.src = 'pictures/' + picturesNames[random];
    // love = '<div class="loveQuote">' + randLoveQuotes(); + '</div>';
    // $('.loveQuote').replaceWith(love);
  });




  $('#changeQuote').click(function() {
    love = '<div class="loveQuote">' + randLoveQuotes(); + '</div>';
    $('.loveQuote').replaceWith(love);
  });










  $('#putQuoteOnPicture').click(function() {

    let text = $('.loveQuote').text();
    y = 120;
    //  context.font = "12pt Cursive";
    //  context.fillText(text, 30, 20);
    wrapText(context, text, x, y, maxWidth, lineHeight);






  });


  $('#drawOnBottom').click(function(){
     y = 900;
     x = 20;
     let loveQuote = $('.loveQuote').text();
     wrapText(context, loveQuote, x, y, maxWidth, lineHeight);
  });


  $('#drawOnMiddle').click(function(){
    y = 500;
    let loveQuote = $('.loveQuote').text();
    wrapText(context, loveQuote, x, y, maxWidth, lineHeight);
  });


  $('#drawOnTop').click(function(){

    clearDrawing();

  //  canvas = document.getElementById('editPic');
  //  context = canvas.getContext("2d");
   //
  //  // clear canvas
  //  context.clearRect(0, 0, canvas.width, canvas.height);
   //
  //  // clear path
  //  context.beginPath();
   //
  //  // use default comp. mode
  //  context.globalCompositeOperation = "source-over";
   //
  //  // reset alpha
  //  context.globalAlpha = 1;
   //
  //  context.drawImage(imageObj, 0, 0, 900, 1200);
  //  context.globalCompositeOperation = "source-atop";
    // context.clearRect(0,0,context.canvas.width,context.canvas.height);
    // context.restore();
    //  imageObj.src = currentPicture;
    y = 100;
    x = 20;

    //context.clearRect(0, 0, canvas.width, canvas.height);
    let loveQuote = $('.loveQuote').text();

    wrapText(context, loveQuote, x, y, maxWidth, lineHeight);



  });



///////////////////////////////////////////////////////////////////

  var canvas = document.getElementById('editPic');
  var context = canvas.getContext('2d');
  var imageObj = new Image();

  imageObj.onload = function() {
    // context.save();
    // context.globalAlpha = 0.5;
    context.drawImage(imageObj, 0, 0, 900, 1200);

    //context.globalAlpha = 1.0;

    //context.fillText("Just example", 100, 20);
  };

  let beginPic = Math.floor((Math.random() * picturesNames.length) +1);
  let currentPicture = 'pictures/' + beginPic + '.jpg';
  // imageObj.src = 'pictures/1.jpg';
  imageObj.src = currentPicture;



///////////////////////////////////////////////////////////////////////





  //  function dataURItoBlob(dataURI) {
  // 	 var byteString;
  // 	 if (dataURI.split(',')[0].indexOf('base64') >= 0)
  // 	 		byteString = atob(dataURI.split(',')[1]);
  // 	 else
  // 	 byteString = unescape(dataURI.split(',')[1]);
  //
  // 	 // separate out the mime component
  // 	 var mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];
  //
  // 	 // write the bytes of the string to a typed array
  // 	 var ia = new Uint8Array(byteString.length);
  // 	 for (var i = 0; i < byteString.length; i++) {
  // 		 ia[i] = byteString.charCodeAt(i);
  // 	 		}
  //
  // 			return new Blob([ia], {type:mimeString});
  //  }






  var button = document.getElementById('downloadDraw');

  button.addEventListener('click', function(e) {
    // 			var dataURL = canvas.toDataURL('image/png');
    // button.href = dataURL;
    canvas.toBlob(function(blob) {
      saveAs(blob, "YourValentine.png");
    });


    // var dataURL = canvas.toDataURL('image/png').replace(/^data:image\/(png|jpg);base64,/, '');
    //  document.getElementById('downloadDraw').src = dataURL;

    // var dataURL = canvas.toDataURL('image/jpeg', 0.5);
    // var blob = dataURItoBlob(dataURL);
    // var fd = new FormData(document.forms[0]);
    // var file = new image( [blob], 'canvasImage.jpg', { type: 'image/jpeg' } );
    // fd.append("myFile", file);


    // var dataURL = canvas.toDataURL('image/jpeg', 0.5);
    // var blob = dataURItoBlob(dataURL);
    // var fd = new FormData(document.forms[0]);
    // fd.append("canvasImage", blob);

    // 	var canvas = document.getElementById("editPic");
    //
    // 	canvas.toBlob(function(blob) {
    // 	var newImg = document.createElement("img"),
    //   url = URL.createObjectURL(blob);
    //
    // 	newImg.onload = function() {
    // 	// no longer need to read the blob so it's revoked
    // 	URL.revokeObjectURL(url);
    // 	};
    //
    // newImg.src = url;
    //
    // });





  });


  //  $('#downloadDraw').click(function(){
  // 	 //var dataURL = canvas.toDataURL();
  //
  // 		//document.write("<a href='" + imageObj.src + "' />Download</a>");
  // 	//  var canvas = document.getElementById("editPic");
  // 	//  var image = canvas.toDataURL();
  // 	 //
  // 	//  var aLink = document.createElement('a');
  // 	//  var evt = document.createEvent("HTMLEvents");
  // 	//  evt.initEvent("click");
  // 	//  aLink.download = 'image.png';
  // 	//  aLink.href = image;
  // 	//  aLink.dispatchEvent(evt);
  // 	});


  var canvas = document.getElementById('editPic');
  var context = canvas.getContext('2d');
  var maxWidth = 900;
  var lineHeight = 50;
  var x = (canvas.width - maxWidth) / 2;
  var y = 100;


  //var text = 'All the world \'s a stage, and all the men and women merely players. They have their exits and their entrances; And one man in his time plays many parts.';

  context.font = '40pt Cursive';
  context.globalAlpha = 1.0;
  context.fillStyle = '#000';








  $('#clearTextArea').click(function(){

       $('.userQuote').summernote('destroy');
       $('.userQuote').val("Your Valentine Text Here");

  });


  $('#newTextareaStyle').click(function(){
      $('.userQuote').summernote({
        toolbar: [
          // [groupName, [list of button]]
          ['style', ['bold', 'italic', 'clear']],
          ['font', ['superscript', 'subscript']],
          ['color', ['color']],
          ['para', ['paragraph']],
          ['height', ['height']]
        ]
      });
  });





  var drawYourTextOnImage = function(){
    //let userLoveQuote = $('.userQuote').val();
    clearDrawing();

    var markupStr = $('.userQuote').summernote('code');
    y = 120;

    wrapText(context, markupStr, x, y, maxWidth, lineHeight);
  }


     $(".drawYourTextOnImage").on("click", function(){
          drawYourTextOnImage();
       });



       $('#fileToUpload').on('change', function(ev) {
       var f = ev.target.files[0];
       var fr = new FileReader();

       fr.onload = function(ev2) {
           console.dir(ev2);
           //$('.editPic').attr('src', ev2.target.result);
           imageObj.src= ev2.target.result;
       };

       fr.readAsDataURL(f);
   });


   function clearDrawing(){
     canvas = document.getElementById('editPic');
     context = canvas.getContext("2d");

     // clear canvas
     context.clearRect(0, 0, canvas.width, canvas.height);

     // clear path
     context.beginPath();

     // use default comp. mode
     context.globalCompositeOperation = "source-over";

     // reset alpha
     context.globalAlpha = 1;

     context.drawImage(imageObj, 0, 0, 900, 1200);
     context.globalCompositeOperation = "source-atop";
   }





});








function wrapText(context, text, x, y, maxWidth, lineHeight) {


  let canvas = document.getElementById('editPic');
  //serch in receiv string from editor for html tags
  var italic = text.indexOf('<i>');
  var bold = text.indexOf('<b>');
  var superscript = text.indexOf('<sup>');
  var subscript = text.indexOf('<sub>');

  //this is varible control defauil context.filltext If variable remain true then default writter write on canvas image
  var doYouWrite = true;

  text = text.replace('&nbsp', '');

  //check if user is clicked on a button italic in editor and then ,make font itallic
  if(italic != -1){

    text = text.replace('<i>', ' ');
    text = text.replace('</i>', ' ');
    context.font = "italic 50pt Courier";
  }

  //check if user is clicked on a button bold and make font bold
  if(bold != -1){
    text = text.replace('<b>', ' ');
    text = text.replace('</b>', ' ');
    context.font = "bold 50pt Courier";
  }

  //check if user is clicked on buttons bold and italic on one moment and make font bold and italic
  if (bold != -1 && italic != -1) {
    text = text.replace('<b>', ' ');
    text = text.replace('</b>', ' ');
    context.font = "bold italic 50pt Courier";
  }

  //check if user is clicked on button superscript and makte text small
  if(superscript != -1){
    //now we use in case writter to write  on canvas picture and this is reaseon doYouWrite to be turn off
    doYouWrite = false;
    text = text.replace('<sup>', '');
    text = text.replace('</sup>', '');
    context.textBaseline = "top";
    context.font = "25pt Cursive";
    //here we check if user even superscript button is he clicked itallic, bold or both ot them
    if(italic != -1){
      text = text.replace('<i>', ' ');
      text = text.replace('</i>', ' ');
      context.font = "italic 25pt Cursive";
    }

    if(bold != -1){
      text = text.replace('<b>', ' ');
      text = text.replace('</b>', ' ');
      context.font = "bold 25pt Courier";
    }

    if (bold != -1 && italic != -1) {
      text = text.replace('<b>', ' ');
      text = text.replace('</b>', ' ');
      context.font = "bold italic 25pt Courier";
    }

    context.fillText(text, 13, 50);
  }


  if(subscript!= -1){
    doYouWrite = true;
    //now we use in case writter to write  on canvas picture and this is reaseon doYouWrite to be turn off
    //doYouWrite = false;

    text = text.replace('<sub>', '');
    text = text.replace('</sub>', '');
    context.textBaseline = "bottom";
    context.font = "25pt Cursive";
    x = 20;
    y = 1100;
    //here we check if user even superscript button is he clicked itallic, bold or both ot them
    if(italic != -1){
      text = text.replace('<i>', ' ');
      text = text.replace('</i>', ' ');
      context.font = "italic 25pt Cursive";
    }

    if(bold != -1){
      text = text.replace('<b>', ' ');
      text = text.replace('</b>', ' ');
      context.font = "bold 25pt Courier";
    }

    if (bold != -1 && italic != -1) {
      text = text.replace('<b>', ' ');
      text = text.replace('</b>', ' ');
      context.font = "bold italic 25pt Courier";
    }

    //context.fillText(text, 350, 1100);
  }
  //document.write(bold);
  var words = text.split(' ');
  var line = '';



  for (var n = 0; n < words.length; n++) {
    var testLine = ' ' + line + words[n] + ' ';
    var metrics = context.measureText(testLine);
    var testWidth = metrics.width;
    if (testWidth > maxWidth && n > 0) {


        context.fillText(line, x, y);

      line = words[n] + ' ';
      y += lineHeight;
    } else {
      line = testLine;
    }
  }



      //context.strokeText(line, x, y);
    //context.font = "50pt Cursive";
    if(doYouWrite){
      context.fillText(line, x, y);
    }

  // CanvasText.drawText({
  // text:text,
  // x: x,
  // y: y,
  // });

}



//$(".container").prepend(begginingPic);
//document.write(begginingPic);
