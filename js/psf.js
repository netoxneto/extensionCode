const dataBasePSF = [
    {id:1,name:"PSF NARCISO ARAUJO",code:5585724},
    {id:2,name:"PSF RURAL I",code:5492483},
    {id:3,name:"PSF RURAL II",code:7106947},
    {id:4,name:"USF ANIBAL DE HOLANDA CAVALCANTE",code:2771160},
    {id:5,name:"USF ANTONIO MENEZES",code:2771349},
    {id:6,name:"USF DR EUVALDO MAIA",code:2771187},
    {id:7,name:"USF DR MANUEL RODRIGUES",code:2771195},
    {id:8,name:"USF JAQUISSON DE DEUS GUIMARAES",code:2771179},
    {id:9,name:"USF LUIZ PEREIRA DE CASTRO",code:2771217},
    {id:10,name:"USF MAE ANALIA",code:2771225}
];

function junt(){
    for(i = 0; i < dataBasePSF.length; i++){
        var element = document.querySelector('.accordion');

        element.innerHTML += `
            <div class="accordion-item positionContent">
                <h2 class="accordion-header" id="headingTwo${i}">

                    <button class="accordion-button collapsed content" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo${i}" aria-expanded="false" aria-controls="collapseTwo${i}">
                        ${dataBasePSF[i].name}
                    </button>
                    
                </h2>
                <div id="collapseTwo${i}" class="accordion-collapse collapse" aria-labelledby="headingTwo${i}" data-bs-parent="#accordionExample">
                    <div class="accordion-body codeBody">

                        <input type="text" value="${dataBasePSF[i].code}" class="code" id="codeId${i}" disabled>

                        <button id="${i}" class="btn btn-primary btn-sm myBtn"><img class="myIcon" src="copy.svg" alt="Copiar"></button>

                    </div>
                </div>
            </div>
        `;
    }
}

junt();

async function clipboardCopy(position) {
    let text = document.querySelector("#codeId"+position).value;
    await navigator.clipboard.writeText(text);
}

window.onload = ()=>{
    let btnTodos = document.querySelectorAll('.myBtn'); 

    for(i = 0; i < btnTodos.length; i++){
        let btn = btnTodos[i];

        btn.addEventListener('click', ()=>{
            var pos = btn.id;
            clipboardCopy(pos);
        })
    }
}

let search = document.getElementById('searchbar');

search.addEventListener('keyup', ()=>{
    let input = document.getElementById('searchbar').value
    input=input.toLowerCase();
    let x = document.getElementsByClassName('content');
    let divPri = document.getElementsByClassName('positionContent');
      
    for (i = 0; i < x.length; i++) { 
        if (!x[i].innerHTML.toLowerCase().includes(input)) {
            x[i].style.display="none";
            divPri[i].style.display="none";
        }
        else {
            x[i].style.display="list-item";   
            divPri[i].style.display="";              
        }
    }
});