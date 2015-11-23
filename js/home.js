$(document).ready(function() {
    // Activate Carousel
    $("#myCarousel").carousel();

    // Enable Carousel Indicators
    $(".item1").click(function() {
        $("#myCarousel").carousel(0);
    });
    $(".item2").click(function() {
        $("#myCarousel").carousel(1);
    });
    $(".item3").click(function() {
        $("#myCarousel").carousel(2);
    });
    $(".item4").click(function() {
        $("#myCarousel").carousel(3);
    });

    // Enable Carousel Controls
    $(".left").click(function() {
        $("#myCarousel").carousel("prev");
    });
    $(".right").click(function() {
        $("#myCarousel").carousel("next");
    });


    $('#opener').on('click', function() {
        var panel = $('#slide-panel');
        if (panel.hasClass("visible")) {
            panel.removeClass('visible').animate({
                'margin-left': '-300px'
            });
        } else {
            panel.addClass('visible').animate({
                'margin-left': '0px'
            });
        }
        return false;
    });

});

$(function() { 
    $('.click-to-jiggle').hover(function() {  
        $(this).toggleClass('jiggle');  
        return false; 
    });
});


$(document).ready(function() {
    $('[data-toggle="tooltip"]').tooltip();
});

$(document).ready(function() {
    $(".dropdown").on("show.bs.dropdown", function(event) {
        var x = $(event.relatedTarget).text(); // Get the button text
        alert("You clicked on: " + x);

    });
});

//functions to smooth scroll to certain areas on click on navbar
function scroll_to_my_skills() {

    $('html, body').animate({
        scrollTop: $("#skills_scroll_helper").offset().top
    }, 1000);

}

function scroll_to_contact()
{
      $('html, body').animate({
        scrollTop: $("#contact_scroll_helper").offset().top
    }, 1000);
}

function scroll_to_results_table() {

    $('html, body').animate({
        scrollTop: $("#results_scroll_helper").offset().top
    }, 1000);

}

function scroll_to_about_me() {

    $('html, body').animate({
        scrollTop: $("#profile_left").offset().top
    }, 1000);

}

function scroll_to_projects() {

    $('html, body').animate({
        scrollTop: $("#project_scroll_helper").offset().top
    }, 1000);

}

function scroll_to_git() {

    $('html, body').animate({
        scrollTop: $("#github_container").offset().top
    }, 1000);

}

function scroll_to_results() {

    $('html, body').animate({
        scrollTop: $("#results_table_container").offset().top
    }, 1000);

}

function scroll_to_resume() {

    $('html, body').animate({
        scrollTop: $("#scroll_helper").offset().top
    }, 1000);

}
function scroll_to_blog() {
   window.location.href = "http://blog.aishee.net";
}


//changes text on buttons in the form of "show" and "hide"
function changeValue(id) {


    var el = document.getElementById(id);



    if (el.value == "Show Back End") {
        el.innerHTML = el.value = "Hide Back End";
    } else if (el.value == "Hide Back End") {
        el.innerHTML = el.value = "Show Back End";
    }
    else if (el.value == "Show Front End") {
        el.innerHTML = el.value = "Hide Front End";
    }
  else if (el.value == "Hide Front End") {
        el.innerHTML = el.value = "Show Front End";
    }


     else if (el.value == "Hide") {
        el.innerHTML = el.value = "Read Me!";
    } else {
        el.innerHTML = el.value = "Hide";
    }



    return false;
}

//on click if button runs a seperate function passing in a string of the
//first part of a json files name
//runs that method plus the second generic part to retrieve correct file
$(document).ready(function() {
    $("#back_end_button").click(function() {

        $("#results_table").find("tr:gt(0)").remove();
        getCollegeResults('json/back');
    });

    $("#front_end_button").click(function() {

        $("#results_table").find("tr:gt(0)").remove();
        getCollegeResults('json/front');
    });

    $("#misc_end_button").click(function() {

        $("#results_table").find("tr:gt(0)").remove();
        getCollegeResults('json/misc');

    });

    $("#killester_button").click(function() {

        $("#results_table").find("tr:gt(0)").remove();
        getCollegeResults('json/killester');

    });

    $("#1").click(function() {
        getProjectInfo('json/bet');
    });

    $("#2").click(function() {
        getProjectInfo('json/udp');
    })
    $("#3").click(function() {
        getProjectInfo('json/language');
    });

    $("#4").click(function() {
        getProjectInfo('json/rmi');
    });

     $("#5").click(function() {
        getProjectInfo('json/game');
    });

    $("#6").click(function() {
        getProjectInfo('json/charity');
    });
      $("#7").click(function() {
        getProjectInfo('json/cv');
    });
});

//the method to retreive the results
function getCollegeResults(item) {


    $.getJSON(item + '_end.json',
        function(json) {
            var tr;
            for (var i = 0; i < json.length; i++) {
                tr = $('<tr/>');
                tr.append("<td>" + json[i].module + "</td>");
                tr.append("<td>" + json[i].info + "</td>");
                tr.append("<td>" + json[i].grade + "</td>");

                $('#results_table').append(tr);

            }
        });


};

//gets info on certain projects stored in a json file
//item param is the first half of the name of the json file
function getProjectInfo(item) {

    $("#project_text_body").html("");
    $("#project_info_body").html("");

    $.getJSON(item + '_info.json',
        function(json) {
            var tr;
            for (var i = 0; i < json.length; i++) {


                $('#project_info_body').append(json[i].type);
                $('#project_text_body').append(json[i].info);
                $('#project_text_body').append(json[i].skills);


            }
        });
};

function goHome()
{

window.location.href = "index.html";
}

