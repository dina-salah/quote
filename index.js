

var qute = [
    { quote: '"Do not take life too seriously. You will not get out alive."', name: ' --Elbert Hubbard' },
    { quote: '"You miss 100% of the shots you dont take."', name: ' --Elbert Hubbard' },
    { quote: '"The best revenge is massive success."', name: '--Frank Sinatra' },
    { quote: '"Resentment is like drinking poison and waiting for your enemies to die."', name: '--Nelson Mandela' },
    { quote: '"Its not what happens to you, but how you react to it that matters."', name: '--Epictetus' },
    { quote: '"The best revenge is massive success."', name: '--Frank Sinatra' }]

var lastnum;
function getQout() {
    do {
        var randqout = Math.floor(Math.random() * qute.length);
    } while (randqout == lastnum)
    lastnum = randqout;
    var qutecont = `
    <div> 
    <p class="fs-1 fw-light" >${qute[randqout].quote} </p>
    <p class="fs-2  my-2" > ${qute[randqout].name} </p>
     </div>
    `
    var d = document.getElementById('q').innerHTML = qutecont;
    return d;

}

