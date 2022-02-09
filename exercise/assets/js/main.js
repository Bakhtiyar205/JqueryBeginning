$(document).ready(function(){
    // $("p").hide()
    // $("button").blur(function(){
    //     // $("p").hide();
    //     // $(".p").hide();
    //     // $("#p").hide();
    //     $(this).css("background-color","#333");
    // })

    // $("button").on({
    //     click: function(){
    //         $(this).css("background-color","teal");
    //     },
    //     mouseenter: function(){ 
    //         $(this).css("background-color", "gray")
    //     },
    //     mouseleave: function(){ 
    //         $(this).css("background-color", "yellow")
    //     }
    // })

    // $("#show").click(function(){
    //     $("p").show("fast");
    // })
    // $("#hide").click(function(){
    //     $("p").hide("slow");
    // })

    // $("#show").click(function(){
    //     $("p").show(500);
    // })
    // $("#hide").click(function(){
    //     $("p").hide(2000);
    // })

    ////Fade in out toggle to
    // $("button").click(function(){
    //     $(".box1").fadeIn()
    //     $(".box2").fadeIn(1000)
    //     $(".box3").fadeIn("slow")
    // })

    // $("button").click(function(){
    //     $(".box1").fadeOut()
    //     $(".box2").fadeOut(1000)
    //     $(".box3").fadeOut("slow")
    // })

    // $("button").click(function(){
    //     $(".box1").fadeToggle()
    //     $(".box2").fadeToggle(1000)
    //     $(".box3").fadeToggle("slow")
    // })

    // $("button").click(function(){
    //     $(".box1").fadeTo(0,0.15)
    //     $(".box2").fadeTo(1000, 0.3)
    //     $(".box3").fadeTo("slow", 0.3)
    // })


    // //Slide up, down, toggle
    // $("#show").click(function(){
    //     $("#hide").slideToggle()
    // })
    // $("#show").click(function(){
    //     $("#hide").slideUp()
    // })
    // $("#show").click(function(){
    //     $("#hide").slideDown()
    // })

    // Animate
    // $("#show").click(function(){
    //     $(".box1").animate({
    //         left:"1000px",
    //         opacity:"0.4",
    //         height:"+=150px",
    //         width:"+=150px"
    //     })
    // })

    // Animating show hide toggle
    // $("#show").click(function(){
    //     $(".box2").animate({
    //         height:"show"
    //     })
    // })
    // $("#show").click(function(){
    //     $(".box2").animate({
    //         height:"hide"
    //     })
    // })
    // $("#show").click(function(){
    //     $(".box2").animate({
    //         height:"toggle"
    //     })
    // })

    // Animating queue function
    // $("#show").click(function(){
    //     let box = $(".box2");
    //     box.animate({height:"300px", opacity:"0.4"}, "slow")
    //     box.animate({width:"300px", opacity:"0.3"}, "slow")
    //     box.animate({height:"100px", opacity:"0.8"}, "slow")
    //     box.animate({width:"100px", opacity:"0.6"}, "slow")
    // })
    // $("#show").click(function(){
    //     let box = $(".box2");
    //     box.animate({right:"100px"}, "slow")
    //     box.animate({width:"200px"}, "slow")
    //     box.animate({fontSize:"3rem"}, "slow")
    // })

    // Stop Method 
    // $("#show").click(function(){
    //     $(".box1").animate({width: "1500px"}, "slow")
    // })
    // $("#hide").click(function(){
    //     $(".box1").stop()
    // })


    // Callback
    // $("#show").click(function(){
    //     $(".box1").toggle("slow", function(){
    //         alert("the box will be disappear")
    //     })
    // })

    // Chain
    // $("#show").click(function(){
    //     $(".box1").css("background-color", "blue").slideUp(2000).slideDown(1000)
    // })
    // $("#show").click(function(){
    //     $(".box1").css("background-color", "blue")
    //     .slideUp(2000)
    //     .slideDown(1000)
    // })

    // Jquery HTML
    // $("#show").click(function(){
    //     alert($("p").text())
    // })
    // $("#show").click(function(){
    //     alert($("p").html())
    // })
    // $("#show").click(function(){
    //     alert($("input").val())
    // })
    // $("#show").click(function(){
    //     alert($("#show").attr("class"))
    // })
    //HTML SET
    // $("#show").click(function(){
    //     $(".box1").text("hello World")
    // })
    // $("#show").click(function(){
    //     $(".box1").html("hello World")
    // })
    // $("#show").click(function(){
    //     $("input").val("hello World")
    // })
    // Adding text
    // $("#show").click(function(){
    //     $("p").text(function(i, origText){
    //         origText + "hello" +i
    //     })
    // })???????????????????????????????????????????????????????????

    // $("#show").click(function(){
    //     $(".box1").attr("class","d-none")
    // })

    // $("#show").click(function(){
    //     $(".box1").attr({
    //         "class": "w-100 mt-2",
    //         "id": "private1"
    //     })
    // })

    // $("#show").click(function(){
    //     $(".box1").attr("class", function(i,o){
    //         o+"private"
    //     })
    // })?????????????????????????????????????????????????????????

    // $("#show").click(function(){
    //     $("p").append(" p126")
    // })
    // $("#show").click(function(){
    //     $("p").prepend(" p126")
    // })

    // $("#show").click(function(){ 
    //     // let text="<p>Salam</p>";
    //     let text2="<p></p>".text("Salam");
    //     // let text3=document.createElement("p");
    //     // text3.innerHTML = "tetx";
    
    //     $(".box2").append(text2)
    // })


    // $(".box1").after("salam")
    // $(".box1").before("p126");

    // $("#show").click(function(){
    //     $(".box1").remove()
    // })

    // $("#show").click(function(){
    //     $(".box1").empty()
    // })

    // $("#show").click(function(){
    //     $("p").remove(".p")
    // })

    // $("#show").click(function(){
    //     $(".box1").addClass("w-100")
    // })
    // $("#show").click(function(){
    //     $(".box1").removeClass("mt-1")
    // })
    // $("#show").click(function(){
    //     $(".box1").toggleClass("mt-1")
    // })

    // $("#show").click(function(){
    //     $(".box1").css("background-color","red")
    // })
    // $("#show").click(function(){
    //     $(".box1").css({"background-color":"red",
    // "font-size":"2rem"})
    // })

    // Width and Height

    // $("#show").click(function(){
    //     let text="";

    //     text+=$(".box2").width();
    //     text+=$(".box2").height();

    //     $("box2").html(text)
    // })
    // $("#show").click(function(){
    //     let text="";

    //     text+="hello"+$(".box2").innerWidth();
    //     text+=$(".box2").innerHeight();

    //     $("box2").html(text)
    // })????????????????????????????????????????????

    // $("#show").click(function(){
    //     let text="";

    //     text+="hello"+$(".box2").outterWidth();
    //     text+=$(".box2").outterHeight();

    //     $("box2").html(text)})
    // $("#show").click(function(){
    //     let text="";

    //     text+="hello"+$("document").width();
    //     text+=$("window").height();

    //     $("box2").html(text)})

        // $("#show").click(function(){
        //     $(".box1").width(500).height(500)
        // })

    // Traversing

    // $("#show").click(function(){
    //     alert($(this).parent())
    // })

    // $("div").filter(".box1").css("background-color","red")
    // $("div").not(".box1").css("background-color","blue")

    
})