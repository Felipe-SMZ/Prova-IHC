// ============================================
// HEURÍSTICA A: Visibilidade do Status
// ============================================

function mostrarFeedback(mensagem) {
    const feedback = document.getElementById('feedback');
    feedback.textContent = mensagem;
    feedback.classList.add('show');

    setTimeout(() => {
        feedback.classList.remove('show');
    }, 3000);
}

// ============================================
// AFFORDANCE: Feedback Visual ao Adicionar
// ============================================

function adicionarCarrinho(produto) {
    mostrarFeedback('✓ ' + produto + ' adicionado ao carrinho!');
}

// ============================================
// HEURÍSTICA C: Prevenção de Erros
// Validação do Formulário
// ============================================

function enviarEncomenda() {
    const nome = document.getElementById('nome');
    const telefone = document.getElementById('telefone');
    const produto = document.getElementById('produto');
    const quantidade = document.getElementById('quantidade');

    let valido = true;

    // Validar nome
    if (!nome.value.trim()) {
        nome.classList.add('error');
        document.getElementById('erro-nome').classList.add('show');
        valido = false;
    } else {
        nome.classList.remove('error');
        document.getElementById('erro-nome').classList.remove('show');
    }

    // Validar telefone (10 ou 11 dígitos)
    if (!telefone.value.match(/^\d{10,11}$/)) {
        telefone.classList.add('error');
        document.getElementById('erro-telefone').classList.add('show');
        valido = false;
    } else {
        telefone.classList.remove('error');
        document.getElementById('erro-telefone').classList.remove('show');
    }

    // Validar produto
    if (!produto.value) {
        produto.classList.add('error');
        document.getElementById('erro-produto').classList.add('show');
        valido = false;
    } else {
        produto.classList.remove('error');
        document.getElementById('erro-produto').classList.remove('show');
    }

    // Validar quantidade
    if (quantidade.value < 1 || !quantidade.value) {
        quantidade.classList.add('error');
        document.getElementById('erro-quantidade').classList.add('show');
        valido = false;
    } else {
        quantidade.classList.remove('error');
        document.getElementById('erro-quantidade').classList.remove('show');
    }

    // Se tudo estiver válido, enviar
    if (valido) {
        mostrarFeedback('✓ Encomenda enviada com sucesso! Entraremos em contato.');

        // Limpar formulário
        nome.value = '';
        telefone.value = '';
        produto.value = '';
        quantidade.value = '';
    }
}