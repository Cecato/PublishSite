// Esconder/mostrar menu

const menuMb = document.getElementById('menu-btn');
const menuDkp= document.getElementById('menu-links');

if (screen.width > 600  ) {
   
    menuMb.classList.add("hide");
    menuDkp.classList.add("show");
    
} else {
    menuMb.classList.add("show");
    menuDkp.classList.add("hide");
}

const abrirMenu = function() {
    const top = document.getElementById('top');
    const menu = document.createElement('div');
    
    menu.classList.add('menu-mobile');
    menu.innerHTML = `
    <div id="first" > <div><img src="./image/Logo.svg" alt=""></div>
    <a href="#" id="delete"><i class="fas fa-times-circle fa-2x"></i></a></div>
    <div class="menu-mobile-links"> 
    <a href="index.html" class="nav-link">Home</a>
    <a href="servicos.html" class="nav-link" id="servicosLink">Serviços</a>
    <a href="contatos.html" class="nav-link">Contato</a>
    </div>
    
    `;
    
    
    top.appendChild(menu);

    const deletar = document.getElementById('delete');
   deletar.addEventListener('click', function() {
       menu.remove();
   })

 
}

menuMb.addEventListener('click', abrirMenu);

let engrenagem1 = document.getElementById('engrenagem-1');
let engrenagem2 = document.getElementById('engrenagem-2');
let  engrenagem3 = document.getElementById('engrenagem-3');

const onMouseMove = (e) =>{
   
    engrenagem1.style.transform = 'translate(' + (-(e.pageX  * 0.005) + 160 ) + '%,'+  (-(e.pageY * 0.005 ) + 100)+ '%)';
    engrenagem2.style.transform = 'translate(' + (-(e.pageX  * 0.005) -300 ) + '%,'+  (-(e.pageY * 0.005 ) - 150)+ '%)';
    engrenagem3.style.transform = 'translate(' + (-(e.pageX  * 0.005) + 300) + '%,'+  (-(e.pageY * 0.005 ) - 100 )+ '%)';
}


document.addEventListener('mousemove', onMouseMove);