
// Animação Links Header -- Animação Links Header -- Animação Links Header -- Animação Links Header -- //

const linksHeader = document.querySelectorAll('[data-conteudo]')

linksHeader.forEach((link) => {
    link.addEventListener('mouseenter', () => {
        link.style.transition = 'all 0.7s ease'
        link.style.color = 'blue'
        link.style.transform = 'scale(1.1)'
    })

    link.addEventListener('mouseleave', () => {
        link.style.transition = 'all 0.7s ease'
        link.style.color = 'black'
        link.style.transform = 'scale(1)'
    })
})

//------------------------------------------------------------------------------------------------//

// Troca entre "Em Cartaz" e "Em Breve"
const setaEsquerda = document.getElementById('setaEsquerda');
const setaDireita = document.getElementById('setaDireita');
const tituloCartaz = document.getElementById('titulo-cartaz');
const containerCartaz = document.getElementById('container-filmes');
const containerBreve = document.getElementById('container-filmes-breve');

let estado = 'cartaz'; // 'cartaz' ou 'breve'

// função para mostrar Em Breve
function mostrarBreve() {
  
  if (estado === 'breve') {
      return;
  }

  estado = 'breve';

  containerCartaz.classList.add('escondido');
  tituloCartaz.style.opacity = '0';

  setTimeout(() => {
    
    containerCartaz.style.display = 'none';
    
    containerBreve.style.display = 'grid';
    containerBreve.classList.remove('escondido');
    tituloCartaz.textContent = 'Em Breve';

    setTimeout(() => tituloCartaz.style.opacity = '1', 100);
  }, 300); 
}

// função para mostrar Em Cartaz
function mostrarCartaz() {
  if (estado === 'cartaz') {
      return;
  }
  estado = 'cartaz';


  containerBreve.classList.add('escondido');
  tituloCartaz.style.opacity = '0';

  setTimeout(() => {
    containerBreve.style.display = 'none';

    containerCartaz.style.display = 'grid';
    containerCartaz.classList.remove('escondido');
    tituloCartaz.textContent = 'Em Cartaz';

    setTimeout(() => tituloCartaz.style.opacity = '1', 100);
  }, 300);
}

setaDireita.addEventListener('click', mostrarBreve);
setaEsquerda.addEventListener('click', mostrarCartaz);

// Manter o padrão se reiniciar a página / for necessário
containerCartaz.style.display = 'grid';
containerBreve.style.display = 'none';
containerCartaz.classList.remove('escondido');
containerBreve.classList.add('escondido');


// Animação Hover Cards -- Animação Hover Cards -- Animação Hover Cards -- Animação Hover Cards -- //

const filmes = document.querySelectorAll('.cardFilme');

  filmes.forEach(filme => {

    filme.addEventListener('mouseover', () => {
      filme.style.transition = '0.7s ease'
      filme.style.transform = 'translateY(-5px) scale(1.03)'
      filme.style.boxShadow = '0 10px 25px rgba(9, 82, 143, 1)'
    });

    filme.addEventListener('mouseout', () => {
      filme.style.transform = 'translateY(0) scale(1)';
      filme.style.boxShadow = '0px 4px 10px rgba(0, 0, 0, 0.15)';
    });
  });

//------------------------------------------------------------------------------------------------//

/* Cards Cinema -- Cards Cinema -- Cards Cinema -- Cards Cinema -- Cards Cinema -- Cards Cinema -- */

function showMoreInfo(button) {
  const info = button.parentElement.querySelector(".more-info");
  const img = button.querySelector(".img-setaBaixo");

  if (info.style.display === "none" || info.style.display === "") {
    info.style.display = "block";
    img.style.transform = "rotate(180deg)";
  } else {
    info.style.display = "none";
    img.style.transform = "rotate(0deg)";
  }
}


//------------------------------------------------------------------------------------------------//

// Animação dp Botão do Email Inscreva-se -- Animação dp Botão do Email Inscreva-se -- //

const botaoEmail = document.querySelector('[data-botao-email]')

botaoEmail.addEventListener('mouseenter', () => {
  botaoEmail.style.transition = 'all 0.8s ease'
  botaoEmail.style.transform = 'scale(1.05)'
  botaoEmail.style.boxShadow = '4px 4px 10px black'
})

botaoEmail.addEventListener('mouseout', () => {
  botaoEmail.style.transition = 'all 0.8s ease'
  botaoEmail.style.transform = 'scale(1)'
  botaoEmail.style.boxShadow = 'none'
})

//------------------------------------------------------------------------------------------------//

// Animaçõ Hover IMG das Mídias Sociais -- Animaçõ Hover IMG das Mídias Sociais -- //
const imgMidias = document.querySelectorAll('[data-midias]')
imgMidias.forEach((img) => {

  img.addEventListener('mouseenter', () => {
    img.style.transition = 'all 0.8s ease'
    img.style.transform = 'scale(1.3)'
    img.style.transform = 'translateY(-10px)'
    img.style.cursor = 'pointer'
  })

  img.addEventListener('mouseout', () => {
    img.style.transition = 'all 0.8s ease'
    img.style.transform = 'scale(1)'
    img.style.cursor = 'pointer'
  })

})
//------------------------------------------------------------------------------------------------//

// Animação Links Footer -- Animação Links Footer -- Animação Links Footer -- Animação Links Footer -- //

const linksFooter = document.querySelectorAll('[data-footer]')

linksFooter.forEach((link) => {
  link.addEventListener('mouseenter', () => {
        link.style.transition = 'all 0.7s ease'
        link.style.color = '#94b5fc'
        link.style.transform = 'scale(1.1)'
    })

    link.addEventListener('mouseleave', () => {
        link.style.transition = 'all 0.7s ease'
        link.style.color = 'white'
        link.style.transform = 'scale(1)'
    })
})

//------------------------------------------------------------------------------------------------//

// Pesquisa Filmes //

const inputPesquisa = document.getElementById('pesquisaFilmes');
const secoesFilmes = [
  document.getElementById('container-filmes'),
  document.getElementById('container-filmes-breve')
];

inputPesquisa.addEventListener('keyup', function() {
    const filtro = inputPesquisa.value.toLowerCase();

    secoesFilmes.forEach(secao => {
        const cards = secao.getElementsByClassName('cardFilme');
        
        for (let i = 0; i < cards.length; i++) {
            const titulo = cards[i].querySelector('ul li').textContent.toLowerCase();
            if (titulo.includes(filtro)) {
                cards[i].style.display = ''; // mostra
            } else {
                cards[i].style.display = 'none'; // oculta
            }
        }
    });
});