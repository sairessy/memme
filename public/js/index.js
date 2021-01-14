const data = getData();

function getData() {
    let d = [];

    $.ajax({
        url: 'js/data.json',
        async: false,
        data: {},
        success: (data)=> {
            d = data;
        }
    });

    return d;
}

let memmes = []; 

data.forEach(d=> {
    memmes.push(new Memme(d));
});

let limInf = 0;
let limSup = 6;
let inc = 6; 

const putMemmes = (lInf, lSup)=> {
    
    for (let i = lInf; i < lSup; i++) {
        // const id = memmes[i].id;
        const memme = memmes[i].memme;
        const categories = memmes[i].categories;

        let tags = '';
        categories.forEach(c=> {
            tags += `<a href="category.html?tag=${c}">${c}</a>`;
        });

        const item = `
            <div class="item" id="">
                <div class="others">${tags}</div>
                
                <div class="cover">
                    <h4>${memme}</h4>
                </div>
                <div class="controllers">
                    <a class="" id=""><i id="" class="fa fa-copy"></i></a> 
                    <a class="" ><i class="fab fa-facebook"></i></a>
                    <a class="" id=""><i id="" class="fab fa-whatsapp" href="#"></i></a>
                </div>
            </div>
        `;

        $('#items').append(item);
    }
}

// Init content
putMemmes(limInf, limSup);

// Pagination
$('button').click(()=> {
    limInf += inc;
    limSup += inc;
    
    if(limSup >= memmes.length) {
        $('button').hide();
        putMemmes(limInf, memmes.length);
    } else {
        putMemmes(limInf, limSup); 
    }

    $('body, html').animate({
        scrollTop: scrollY + 300
    });

});