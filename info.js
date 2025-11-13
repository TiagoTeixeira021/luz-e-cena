        const cardFilme = document.querySelectorAll('.cardFilme')

        cardFilme.forEach(card => {
            card.addEventListener('mouseover', () => {
                card.style.transform = 'scale(1.05) translateY(-10px)';
                card.style.boxShadow = '0 10px 25px rgba(9, 82, 143, 1)';
                card.style.transition = 'all 0.3s ease';
            });

            card.addEventListener('mouseout', () => {
                card.style.transform = 'scale(1) translateY(0)';
                card.style.boxShadow = '0 8px 20px rgba(0, 0, 0, 0.15), 0 3px 6px rgba(0, 0, 0, 0.10)';
            });
        });

        const filmes = document.querySelectorAll('.filme');
        const btnEsquerda = document.querySelector('.btn-seta.esquerda');
        const btnDireita = document.querySelector('.btn-seta.direita');

        let indexAtual = 0;

        function trocarFilme(novoIndex) {
            if (novoIndex < 0) {
                novoIndex = filmes.length - 1;
            }
            if (novoIndex >= filmes.length) {
                novoIndex = 0;
            }

            const filmeAtual = filmes[indexAtual];
            const filmeNovo = filmes[novoIndex];

            // animação de saída
            filmeAtual.classList.add('fade-out');

            setTimeout(() => {
                filmeAtual.classList.remove('ativo', 'fade-out');
                filmeNovo.classList.add('ativo', 'fade-in');
                setTimeout(() => filmeNovo.classList.remove('fade-in'), 600);
                indexAtual = novoIndex;
            }, 600); // tempo da transição

        };

        btnEsquerda.addEventListener('click', () => trocarFilme(indexAtual - 1));
        btnDireita.addEventListener('click', () => trocarFilme(indexAtual + 1));
        
        const setas = document.querySelectorAll('.btn-seta')
        setas.forEach(setas => {
            setas.addEventListener('mouseover', () => {
                setas.style.transition = 'all 0.5s ease'
                setas.style.backgroundColor = '#fff'
                setas.style.transform = 'translateY(-50%) scale(1.1)'
                setas.style.boxShadow = '0 0 10px rgba(255, 255, 255, 0.6)';
            })

            setas.addEventListener('mouseout', () => {
                setas.style.backgroundColor = 'rgba(255, 255, 255, 0.8)'
                setas.style.transform = 'translateY(-50%) scale(1)'
                setas.style.boxShadow = 'none';
            })
        })

        const botoesSessao = document.querySelectorAll('.sessao-btn');
        botoesSessao.forEach(btn => {
            btn.addEventListener('click', () => {
            botoesSessao.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            });
        });


        
        const precos = 20; // preço do ingresso
        document.querySelectorAll('.container-carrinho').forEach(container => {
            const btns = container.querySelectorAll('.btn-quantidade');
            const quantidadeSpan = container.querySelector('.quantidade');
            const subtotalSpan = container.querySelector('.subtotal');

            let quantidade = 0;

            btns.forEach(btn => {
                btn.addEventListener('click', () => {
                    if(btn.dataset.acao === 'aumentar') {
                        quantidade++;
                    } else if(btn.dataset.acao === 'diminuir' && quantidade > 0) {
                        quantidade--;
                    }

                    quantidadeSpan.textContent = quantidade;
                    subtotalSpan.textContent = `Subtotal: R$ ${quantidade * precos}`;
                });
            });
        });

        const botoesCarrinho = document.querySelectorAll('.btn-carrinho');
        botoesCarrinho.forEach(botao => {
            botao.addEventListener('click', () => {
                window.location.href = "carrinho.html";
            });
        });

        // Links para os filmes do cartaz do INDEX
        window.addEventListener('DOMContentLoaded', function () {
            const hash = window.location.hash; 
            if (hash) {
                filmes.forEach(f => f.classList.remove('ativo'));
                const filmeAtivo = document.querySelector(hash);
                if (filmeAtivo) {
                    filmeAtivo.classList.add('ativo');
                    indexAtual = Array.from(filmes).indexOf(filmeAtivo);
                }
            }
        });