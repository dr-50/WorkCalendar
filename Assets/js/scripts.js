
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