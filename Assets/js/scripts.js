var time = dayjs().format('H');
console.log(time);
var time=8;


//9 am pull value from localStorage
var storage9AM = localStorage.getItem("nineAM");
var p9AM = $('.nineAM').find('p')[0];
$(p9AM).text(storage9AM);
if(time<9){
    $(".nineAM").addClass('future');
}
if(time===9){
    $(".nineAM").addClass('present');
}
if(time>9){
    $(".nineAM").addClass('past');
}

//10 am pull from localStorage
var storage10AM = localStorage.getItem("tenAM");
var p10AM = $('.tenAM').find('p')[0];
$(p10AM).text(storage10AM);
//10am change class for formatting
if(time<10){
    $(".tenAM").addClass('future');
}
if(time===10){
    $(".tenAM").addClass('present');
}
if(time>10){
    $(".tenAM").addClass('past');
}

//11 am pull from localStorage
var storage11AM = localStorage.getItem("elevenAM");
var p11AM = $('.elevenAM').find('p')[0];
$(p11AM).text(storage11AM);
//11am change class for formatting
if(time<11){
    $(".elevenAM").addClass('future');
}
if(time===11){
    $(".elevenAM").addClass('present');
}
if(time>11){
    $(".elevenAM").addClass('past');
}

//12pm pull from localStorage
var storage12PM = localStorage.getItem("twelvePM");
var p12PM = $('.twelvePM').find('p')[0];
$(p12PM).text(storage12PM);
if(time<12){
    $(".twelvePM").addClass('future');
}
if(time===12){
    $(".twelvePM").addClass('present');
}
if(time>12){
    $(".twelvePM").addClass('past');
}

//1PM pull from localStorage
var storage1PM = localStorage.getItem("onePM");
var p1PM = $(".onePM").find("p")[0];
$(p1PM).text(storage1PM);
if(time<13){
    $(".onePM").addClass('future');
}
if(time===13){
    $(".onePM").addClass('present');
}
if(time>13){
    $(".onePM").addClass('past');
}

//2PM pull from localStorage
var storage2PM = localStorage.getItem("twoPM");
var p2PM = $(".twoPM").find("p")[0];
$(p2PM).text(storage2PM);
if(time<14){
    $(".twoPM").addClass('future');
}
if(time===14){
    $(".twoPM").addClass('present');
}
if(time>14){
    $(".twoPM").addClass('past');
}

//3PM pull from localStorage
var storage3PM = localStorage.getItem("threePM");
var p3PM = $(".threePM").find("p")[0];
$(p3PM).text(storage3PM);
if(time<15){
    $(".threePM").addClass('future');
}
if(time===15){
    $(".threePM").addClass('present');
}
if(time>15){
    $(".threePM").addClass('past');
}

//4PM pull from localStorage
var storage4PM = localStorage.getItem("fourPM");
var p4PM = $(".fourPM").find("p")[0];
$(p4PM).text(storage4PM);
if(time<16){
    $(".fourPM").addClass('future');
}
if(time===16){
    $(".fourPM").addClass('present');
}
if(time>16){
    $(".fourPM").addClass('past');
}

//5PM pull from localStorage
var storage5PM = localStorage.getItem("fivePM");
var p5PM = $(".fivePM").find("p")[0];
$(p5PM).text(storage5PM);
if(time<17){
    $(".fivePM").addClass('future');
}
if(time===17){
    $(".fivePM").addClass('present');
}
if(time>17){
    $(".fivePM").addClass('past');
}

//9AM functions
$(".nineAM").on("click", function(){
    var textP = $(this).find("p")
    var text = $(textP).text().trim();
    console.log(text)

    var textInput = $("<textarea>")
    .addClass("form-control")
    .val(text);

    $(textP).replaceWith(textInput);
    textInput.trigger("focus");

    console.log('after text area creation:', text);
    var textArea = $(':input');
        console.log("this is textarea:",textArea);
})


$(".nineAMBtn").on("click", function(){
        var textArea = $(".form-control");
        console.log("this is textarea2:",textArea);
        var text = textArea.val();
        console.log("this is text:", text);
        localStorage.setItem("nineAM", text);

        var taskP=$("<p>").text(text);
        $(textArea).replaceWith(taskP)
    })

//10AM functions
$(".tenAM").on("click", function(){
    var textP = $(this).find("p")
    var text = $(textP).text().trim();
    console.log(text)

    var textInput = $("<textarea>")
    .addClass("form-control")
    .val(text);

    $(textP).replaceWith(textInput);
    textInput.trigger("focus");

    console.log('after text area creation:', text);
    var textArea = $(':input');
        console.log("this is textarea:",textArea);
})


$(".tenAMBtn").on("click", function(){
        var textArea = $(".form-control");
        console.log("this is textarea2:",textArea);
        var text = textArea.val();
        console.log("this is text:", text);
        localStorage.setItem("tenAM", text);

        var taskP=$("<p>").text(text);
        $(textArea).replaceWith(taskP)
    })

//11AM functions
$(".elevenAM").on("click", function(){
    var textP = $(this).find("p")
    var text = $(textP).text().trim();
    console.log(text)

    var textInput = $("<textarea>")
    .addClass("form-control")
    .val(text);

    $(textP).replaceWith(textInput);
    textInput.trigger("focus");

    console.log('after text area creation:', text);
    var textArea = $(':input');
        console.log("this is textarea:",textArea);
})


$(".elevenAMBtn").on("click", function(){
        var textArea = $(".form-control");
        console.log("this is textarea2:",textArea);
        var text = textArea.val();
        console.log("this is text:", text);
        localStorage.setItem("elevenAM", text);

        var taskP=$("<p>").text(text);
        $(textArea).replaceWith(taskP)
    })

//twelvePM functions
$(".twelvePM").on("click", function(){
    var textP = $(this).find("p")
    var text = $(textP).text().trim();
    console.log(text)

    var textInput = $("<textarea>")
    .addClass("form-control")
    .val(text);

    $(textP).replaceWith(textInput);
    textInput.trigger("focus");

    console.log('after text area creation:', text);
    var textArea = $(':input');
        console.log("this is textarea:",textArea);
})


$(".twelvePMBtn").on("click", function(){
        var textArea = $(".form-control");
        console.log("this is textarea2:",textArea);
        var text = textArea.val();
        console.log("this is text:", text);
        localStorage.setItem("twelvePM", text);

        var taskP=$("<p>").text(text);
        $(textArea).replaceWith(taskP)
    })

//onePM function
$(".onePM").on("click", function(){
    var textP = $(this).find("p")
    var text = $(textP).text().trim();
    console.log(text)

    var textInput = $("<textarea>")
    .addClass("form-control")
    .val(text);

    $(textP).replaceWith(textInput);
    textInput.trigger("focus");

    console.log('after text area creation:', text);
    var textArea = $(':input');
        console.log("this is textarea:",textArea);
})


$(".onePMBtn").on("click", function(){
        var textArea = $(".form-control");
        console.log("this is textarea2:",textArea);
        var text = textArea.val();
        console.log("this is text:", text);
        localStorage.setItem("onePM", text);

        var taskP=$("<p>").text(text);
        $(textArea).replaceWith(taskP)
    })

// twoPM function
$(".twoPM").on("click", function(){
    var textP = $(this).find("p")
    var text = $(textP).text().trim();
    console.log(text)

    var textInput = $("<textarea>")
    .addClass("form-control")
    .val(text);

    $(textP).replaceWith(textInput);
    textInput.trigger("focus");

    console.log('after text area creation:', text);
    var textArea = $(':input');
        console.log("this is textarea:",textArea);
})


$(".twoPMBtn").on("click", function(){
        var textArea = $(".form-control");
        console.log("this is textarea2:",textArea);
        var text = textArea.val();
        console.log("this is text:", text);
        localStorage.setItem("twoPM", text);

        var taskP=$("<p>").text(text);
        $(textArea).replaceWith(taskP)
    })

// threePM functions
$(".threePM").on("click", function(){
    var textP = $(this).find("p")
    var text = $(textP).text().trim();
    console.log(text)

    var textInput = $("<textarea>")
    .addClass("form-control")
    .val(text);

    $(textP).replaceWith(textInput);
    textInput.trigger("focus");

    console.log('after text area creation:', text);
    var textArea = $(':input');
        console.log("this is textarea:",textArea);
})


$(".threePMBtn").on("click", function(){
        var textArea = $(".form-control");
        console.log("this is textarea2:",textArea);
        var text = textArea.val();
        console.log("this is text:", text);
        localStorage.setItem("threePM", text);

        var taskP=$("<p>").text(text);
        $(textArea).replaceWith(taskP)
    })

//fourPM
$(".fourPM").on("click", function(){
    var textP = $(this).find("p")
    var text = $(textP).text().trim();
    console.log(text)

    var textInput = $("<textarea>")
    .addClass("form-control")
    .val(text);

    $(textP).replaceWith(textInput);
    textInput.trigger("focus");

    console.log('after text area creation:', text);
    var textArea = $(':input');
        console.log("this is textarea:",textArea);
})


$(".fourPMBtn").on("click", function(){
        var textArea = $(".form-control");
        console.log("this is textarea2:",textArea);
        var text = textArea.val();
        console.log("this is text:", text);
        localStorage.setItem("fourPM", text);

        var taskP=$("<p>").text(text);
        $(textArea).replaceWith(taskP)
    })


//fivePM function
$(".fivePM").on("click", function(){
    var textP = $(this).find("p")
    var text = $(textP).text().trim();
    console.log(text)

    var textInput = $("<textarea>")
    .addClass("form-control")
    .val(text);

    $(textP).replaceWith(textInput);
    textInput.trigger("focus");

    console.log('after text area creation:', text);
    var textArea = $(':input');
        console.log("this is textarea:",textArea);
})


$(".fivePMBtn").on("click", function(){
        var textArea = $(".form-control");
        console.log("this is textarea2:",textArea);
        var text = textArea.val();
        console.log("this is text:", text);
        localStorage.setItem("fivePM", text);

        var taskP=$("<p>").text(text);
        $(textArea).replaceWith(taskP)
    })