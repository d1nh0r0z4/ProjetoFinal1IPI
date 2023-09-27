var lista_de_produtos = [];

while (true) {
    var opcao = prompt(`
    Bem Vindo ao Cadastro de Produtos :D

    1. Cadastrar novo produto
    2. Editar produto
    3. Remover produto
    4. Visualizar todos os produtos
    `);

    if (opcao == 1) {
        adicionar();
    } else if (opcao == 2) {
        editar();
    } else if (opcao == 3) {
        remover();
    } else if (opcao == 4) {
        ver();
    } else {
        alert("Nenhuma das opções foi selecionada!");
    }
}

function adicionar() {
    var objeto = {
        produto: '',
        marca: '',
        preco: '',
        quantidade_em_estoque: '',
    };

    objeto.produto = prompt("Digite o nome do produto:");
    objeto.marca = prompt("Digite a marca do produto:");
    objeto.preco = prompt("Digite o preço do produto:");
    objeto.quantidade_em_estoque = prompt("Digite a quantidade em estoque:");

    lista_de_produtos.push(objeto);
    alert("Produto registrado!");
}

function ver() {
    var texto = "";

    for (let i = 0; i < lista_de_produtos.length; i++) {
        texto += `Produto: ${lista_de_produtos[i].produto}
Marca: ${lista_de_produtos[i].marca} 
Preço: R$ ${lista_de_produtos[i].preco}
Quantidade em estoque: ${lista_de_produtos[i].quantidade_em_estoque} \n`;
    }

    alert(texto);
}

function editar() {
    var edit = prompt("Selecione o produto a ser editado:\n\n" + listarProdutosParaEdicao());

    for (let i = 0; i < lista_de_produtos.length; i++) {
        if (lista_de_produtos[i].produto === edit) {
            lista_de_produtos[i].produto = prompt("Digite o novo nome do produto:");
            lista_de_produtos[i].marca = prompt("Digite a nova marca do produto:");
            lista_de_produtos[i].preco = prompt("Digite o novo preço do produto:");
            lista_de_produtos[i].quantidade_em_estoque = prompt("Digite a nova quantia em estoque:");
            alert("Produto editado com sucesso!");
            return;
        }
    }

    alert("Produto não encontrado.");
}

function listarProdutosParaEdicao() {
    var lista = "Produtos disponíveis para edição:\n\n";
    for (let i = 0; i < lista_de_produtos.length; i++) {
        lista += lista_de_produtos[i].produto + "\n";
    }
    return lista;
}

function remover() {
    var produto_a_remover = prompt("Selecione o produto a ser removido:\n\n" + listarProdutosParaRemocao());

    for (let i = 0; i < lista_de_produtos.length; i++) {
        if (lista_de_produtos[i].produto === produto_a_remover) {
            lista_de_produtos.splice(i, 1);
            alert("Produto removido com sucesso!");
            return;
        }
    }

    alert("Produto não encontrado.");
}

function listarProdutosParaRemocao() {
    var lista = "Produtos disponíveis para remoção:\n\n";
    for (let i = 0; i < lista_de_produtos.length; i++) {
        lista += lista_de_produtos[i].produto + "\n";
    }
    return lista;
}
