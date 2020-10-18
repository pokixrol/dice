const ctyrykostka = document.getElementById('ctyrykostka');
const ctyrystatistika = document.getElementById('ctyrystatistika');
const ctyrytlacitko = document.getElementById('ctyrytlacitko');
let hod4 = 1;
let hody4 = [];
let timer4 = false;

function animace4 () {
    hod4 = Math.ceil (Math.random() * 4);
    ctyrykostka.src = '4kostka/4kostka' + hod4 + '.png';
}
ctyrytlacitko.addEventListener('click', function(){
    if(!timer4){
        timer4 = setInterval(animace4, 50);
        ctyrytlacitko.innerText = 'Stop';
    }else{
        clearInterval(timer4);
        timer4 = false;
        ctyrytlacitko.innerText = 'Play';
        hody4.push(hod4);
        vypisStatistiky4();
    }
    
})

function suma4(){
    let sum = 0;
    for (let i = 0; i < hody4.length; i++) {
        sum += hody4[i];
    }
    return sum;
}

function max4(){
    let maximum = 1;
    hody4.forEach(function(value, index){
        if (value > maximum) maximum = value;
    })
    return maximum;
}

function min4(){
    let minimum = 4;
    hody4.forEach(function(value, index){
        if (value < minimum) minimum = value;
    })
    return minimum;
}
function vypisStatistiky4 (){
    ctyrystatistika.innerHTML = `<p>Poslední hod: ${hod4}</p>`;
    ctyrystatistika.innerHTML += `<p>Počet hodů: ${hody4.length}</p>`;
    ctyrystatistika.innerHTML += `<p>Součet: ${suma4()}</p>`;
    ctyrystatistika.innerHTML += `<p>Průměr: ${(suma4() / hody4.length).toFixed(2)}</p>`;
    ctyrystatistika.innerHTML += `<p>Maximum: ${max4()}</p>`;
    ctyrystatistika.innerHTML += `<p>Minimum: ${min4()}</p>`;
}


const kostka = document.getElementById('kostka');
const statistika = document.getElementById('statistika');
const tlacitko = document.getElementById('tlacitko');
let hod = 1;
let hody = [];
let timer = false;

function animace () {
    hod = Math.ceil (Math.random() * 6);
    kostka.src = 'img/kostka' + hod + '.png';
}
tlacitko.addEventListener('click', function(){
    if(!timer){
        timer = setInterval(animace, 50);
        tlacitko.innerText = 'Stop';
    }else{
        clearInterval(timer);
        timer = false;
        tlacitko.innerText = 'Play';
        hody.push(hod);
        vypisStatistiky();
    }
    
})

function suma(){
    let sum = 0;
    for (let i = 0; i < hody.length; i++) {
        sum += hody[i];
    }
    return sum;
}

function max(){
    let maximum = 1;
    hody.forEach(function(value, index){
        if (value > maximum) maximum = value;
    })
    return maximum;
}

function min(){
    let minimum = 6;
    hody.forEach(function(value, index){
        if (value < minimum) minimum = value;
    })
    return minimum;
}
function vypisStatistiky (){
    statistika.innerHTML = `<p>Poslední hod: ${hod}</p>`;
    statistika.innerHTML += `<p>Počet hodů: ${hody.length}</p>`;
    statistika.innerHTML += `<p>Součet: ${suma()}</p>`;
    statistika.innerHTML += `<p>Průměr: ${(suma() / hody.length).toFixed(2)}</p>`;
    statistika.innerHTML += `<p>Maximum: ${max()}</p>`;
    statistika.innerHTML += `<p>Minimum: ${min()}</p>`;
}

const dvanactkostka = document.getElementById('dvanactkostka');
const dvanactstatistika = document.getElementById('dvanactstatistika');
const dvanacttlacitko = document.getElementById('dvanacttlacitko');
let hod12 = 1;
let hody12 = [];
let timer12 = false;

function animace12 () {
    hod12 = Math.ceil (Math.random() * 12);
dvanactkostka.src = '12kostka/12kostka' + hod12 + '.png';
}
dvanacttlacitko.addEventListener('click', function(){
    if(!timer12){
        timer12 = setInterval(animace12, 50);
        dvanacttlacitko.innerText = 'Stop';
    }else{
        clearInterval(timer12);
        timer12 = false;
        dvanacttlacitko.innerText = 'Play';
        hody12.push(hod12);
        vypisStatistiky12();
    }
    
})

function suma12(){
    let sum = 0;
    for (let i = 0; i < hody12.length; i++) {
        sum += hody12[i];
    }
    return sum;
}

function max12(){
    let maximum = 1;
    hody12.forEach(function(value, index){
        if (value > maximum) maximum = value;
    })
    return maximum;
}

function min12(){
    let minimum = 12;
    hody12.forEach(function(value, index){
        if (value < minimum) minimum = value;
    })
    return minimum;
}
function vypisStatistiky12 (){
    dvanactstatistika.innerHTML = `<p>Poslední hod: ${hod12}</p>`;
    dvanactstatistika.innerHTML += `<p>Počet hodů: ${hody12.length}</p>`;
    dvanactstatistika.innerHTML += `<p>Součet: ${suma12()}</p>`;
    dvanactstatistika.innerHTML += `<p>Průměr: ${(suma12() / hody12.length).toFixed(2)}</p>`;
    dvanactstatistika.innerHTML += `<p>Maximum: ${max12()}</p>`;
    dvanactstatistika.innerHTML += `<p>Minimum: ${min12()}</p>`;
}
const dvacetkostka = document.getElementById('dvacetkostka');
const dvacetstatistika = document.getElementById('dvacetstatistika');
const dvacettlacitko = document.getElementById('dvacettlacitko');
let hod20 = 1;
let hody20 = [];
let timer20 = false;

function animace20 () {
    hod20 = Math.ceil (Math.random() * 20);
    dvacetkostka.src = '20kostka/20kostka' + hod20 + '.png';
}
dvacettlacitko.addEventListener('click', function(){
    if(!timer20){
        timer20 = setInterval(animace20, 50);
        dvacettlacitko.innerText = 'Stop';
    }else{
        clearInterval(timer20);
        timer20 = false;
        dvacettlacitko.innerText = 'Play';
        hody20.push(hod20);
        vypisStatistiky20();
    }
    
})

function suma20(){
    let sum = 0;
    for (let i = 0; i < hody20.length; i++) {
        sum += hody20[i];
    }
    return sum;
}

function max20(){
    let maximum = 1;
    hody20.forEach(function(value, index){
        if (value > maximum) maximum = value;
    })
    return maximum;
}

function min20(){
    let minimum = 20;
    hody20.forEach(function(value, index){
        if (value < minimum) minimum = value;
    })
    return minimum;
}
function vypisStatistiky20 (){
    dvacetstatistika.innerHTML = `<p>Poslední hod: ${hod20}</p>`;
    dvacetstatistika.innerHTML += `<p>Počet hodů: ${hody20.length}</p>`;
    dvacetstatistika.innerHTML += `<p>Součet: ${suma20()}</p>`;
    dvacetstatistika.innerHTML += `<p>Průměr: ${(suma20() / hody20.length).toFixed(2)}</p>`;
    dvacetstatistika.innerHTML += `<p>Maximum: ${max20()}</p>`;
    dvacetstatistika.innerHTML += `<p>Minimum: ${min20()}</p>`;
}
//
//
//
//
//
//

