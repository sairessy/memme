$('#form-search').submit((e)=> {
    e.preventDefault();
    const txt = $('#search').val();
    window.location.href = 'search.html?tag='+txt;
});

$('header input').focus(()=> {
   $('header input').attr({"placeholder": 'Ex.: amizade, casa, amante'}) 
});

$('header input').blur(()=> {
    $('header input').attr({"placeholder": ''}) ;
});


$("#other-categories").change((e)=> {
    const txt = $("#other-categories :selected").text();
    window.location.href = 'other-categories.html?tag='+txt;
});

$('#btn-comment').click(()=> {
    $("body, html").animate({scrollTop: 0});
});

$(window).scroll(()=> {
    if(scrollY > 20) {
        $('#btn-comment').css({"transform": "scale(1)"});
    } else {
        $('#btn-comment').css({"transform": "scale(0)"});
    }
});