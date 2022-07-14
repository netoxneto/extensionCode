const dataBaseInep = [
    {id:1,name:"CENTRO DE ENSINO ANA VIANA (CEAV)",code:29406927},
    {id:2,name:"COLÉGIO MUNICIPAL DE CAMACAN",code:29295319},
    {id:3,name:"COLÉGIO ESTADUAL ANISIO LOUREIRO",code:29351502},
    {id:4,name:"COLÉGIO DR.FLAVIANO DE JESUS FILHO",code:29296544},
    {id:5,name:"COLÉGIO ESTADUAL POLIVALENTE DE CAMACAN",code:29295866},
    {id:6,name:"CRECHE ACONCHEGO",code:29438411},
    {id:45,name:"CRECHE DURVALINA SILVA BARROS",code:29295335},
    {id:7,name:"CRECHE EVANGELINA ALMEIDA",code:29377358},
    {id:8,name:"CRECHE GRACINHA LOUREIRO",code:29377331},
    {id:9,name:"CRECHE MARIA ELISA SEARA",code:29400500},
    {id:10,name:"CRECHE ROSALINA MOURA PINTO",code:29377323},
    {id:11,name:"CRECHE SOFIA PELTIER",code:29377340},
    {id:12,name:"CENTRO EDUCACIONAL ITABUNA",code:29304377},
    {id:13,name:"GRUPO ESCOLAR AINDA NO DA SILVA",code:29296498},
    {id:14,name:"GRUPO ESCOLAR ALVARO GUERREIRO",code:29296501},
    {id:15,name:"GRUPO ESCOLAR BOAVENTURA RIBEIRO",code:29296510},
    {id:16,name:"GRUPO ESCOLAR CLERISTON ANDRADE",code:29296536},
    {id:17,name:"GRUPO ESCOLAR JOAO XII",code:29296579},
    {id:18,name:"GRUPO ESCOLAR PRESIDENTE MEDICE",code:29296587},
    {id:19,name:"GRUPO ESCOLAR PROº LUIZA VARGENS",code:29296480},
    {id:20,name:"GRUPO ESCOLAR RUI BARBOSA",code:29296595},
    {id:21,name:"EDUCANDARIO CANTINHO ENCANTADO",code:29406919},
    {id:22,name:"ESCOLINHA SALES",code:29434050},
    {id:23,name:"ESCOLINHA ADELITE ALMEIDA",code:29295394},
    {id:24,name:"ESCOLA ANA RIBEIRO DE MOURA",code:29295467},
    {id:25,name:"ESCOLA COMUNITÁRIA ESTRELA DALVA",code:29400660},
    {id:26,name:"ESCOLA COMUNITÁRIA EVANY GALVÃO",code:29337879},
    {id:27,name:"ESCOLA EDUCAÇÃO INFANTIL CRESCER",code:29474248},
    {id:28,name:"ESCOLA 1º GRAU PAULO SOLTO",code:29295602},
    {id:29,name:"ESCOLA EMIL WILDEBERGER",code:29295661},
    {id:30,name:"ESCOLA ELZA OESSIMONE",code:29438446},
    {id:31,name:"ESCOLA INDIGINA SAMADO SANTOS",code:29529204},
    {id:32,name:"ESCOLA INDIGINA CORREGO DO CENDRO",code:29434114},
    {id:33,name:"ESCOLA MARIA IVACI DE CARVALHO",code:29434092},
    {id:34,name:"ESCOLA MEU CANTINHO ",code:29295726},
    {id:35,name:"ESCOLA NATAL",code:29295769},
    {id:36,name:"ESCOLA NOSSA SENHORA AUXILIADORA",code:29295769},
    {id:37,name:"ESCOLA NOSSA SENHORA DE LOURDES",code:29295815},
    {id:38,name:"ESCOLA PIONEIROS DE CAMACAN",code:29444985},
    {id:39,name:"ESCOLA SALUSTIANO JOSE DOS SANTOS",code:29295947},
    {id:40,name:"ESCOLA SANTO ANTONIO DO VARGITO",code:29296056},
    {id:41,name:"ESCOLA SEMENTE VIVA",code:29296218},
    {id:42,name:"ESCOLA TEREZA LIMA",code:29296382},
    {id:43,name:"CENTRO DE ENSINO MILTON SANTOS (ARATACA)",code:29886723},
    {id:44,name:"FACULDADE IFBA (ILHÉUS)",code:29448751}
    ];

function junt(){
    for(i = 0; i < dataBaseInep.length; i++){
        var element = document.querySelector('.accordion');

        element.innerHTML += `
            <div class="accordion-item positionContent">
                <h2 class="accordion-header" id="headingTwo${i}">

                    <button class="accordion-button collapsed content" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo${i}" aria-expanded="false" aria-controls="collapseTwo${i}">
                        ${dataBaseInep[i].name}
                    </button>
                    
                </h2>
                <div id="collapseTwo${i}" class="accordion-collapse collapse" aria-labelledby="headingTwo${i}" data-bs-parent="#accordionExample">
                    <div class="accordion-body codeBody">

                        <input type="text" value="${dataBaseInep[i].code}" class="code" id="codeId${i}" disabled>

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
