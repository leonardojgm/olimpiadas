function pesquisar() {
    // Seleciona a seção onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa");
    let campoPesquisa = document.getElementById("campo-pesquisa").value;

    campoPesquisa = campoPesquisa.toLowerCase();

    //Se campoPesquisa for uma string sem nada
    if (campoPesquisa == "") {
        section.innerHTML =`<p>Nada foi encontrado. Você precisa digitar o nome de um atleta ou esporte</p>`
        
        return;
    }

    // Inicializa uma string vazia para armazenar os resultados HTML
    let resultados = "";
    let titulo = "";
    let descricao = "";
    let tags = "";

    // Itera sobre cada dado e constrói o HTML para cada resultado
    for(let dado of dados) {
        titulo = dado.titulo.toLowerCase();
        descricao = dado.descricao.toLowerCase();
        tags = dado.tags.toLowerCase();

        // Se titulo inclui campoPesquisa
        if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
            // Cria um novo elemento HTML para cada resultado
            resultados += `
                <div class="item-resultado">
                    <h2>
                        <a href="#" target="_blank">${dado.titulo}</a>
                    </h2>
                    <p class="descricao-meta">
                        ${dado.descricao}
                    </p>
                    <a href="${dado.link}" target="_blank">Mais informações</a>
                </div>
            `;
        }        
    }

    if (!resultados) {
        resultados =`<p>Nada foi encontrado</p>`
    }

    // Atribui a string com os resultados ao conteúdo da seção
    section.innerHTML = resultados;
}