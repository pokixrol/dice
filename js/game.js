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
    for (let i = 0; i < hody.length; i++) {
        sum += hody[i];
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
    let minimum = 6;
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