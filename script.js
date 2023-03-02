

// variaveis para escrever os dados da API

const repositories = document.querySelector('.repositorios');
const user_perfil = document.querySelector('.grupo-infos')


// função para o botão search
function s(){
    //cria variavel 'user' que recebe o valor do 'input-search'
   var user = document.getElementById('input-search').value;
   // chama a função criada para limpar os repositorios.
   limpRepos();
   //chama a função que acessa a API.
   getReposGitHub(user);
    
  

}


//função criada para acessar a API
function getReposGitHub(user){
    //acessando API e passando user para receber repositorios do usuario.
    fetch('https://api.github.com/users/'+user+'/repos')


    .then(async res => {
        if(!res.ok){
           // throw new Error(res.status);
            alert("Usuário não encontrado");
            location.reload();
        }
        //cria a variavel de dados, guarda valor do res e converte para json.
        let data = await res.json();
        //fucao que percorre todo o array json.
        data.map( item =>{
        //cria variavel para escrever uma div no meu html
        let project = document.createElement('div');
        //usa o comando innerHTML que recebe o codigo
        project.innerHTML = `
        <div class = "project">
             <div>
                <h4 class ="title"><a href="${item.html_url}">${item.name}</a></h4>
    
            </div>
        
        </div>
        `
    
        //acrescenta uma tag filha dentro da tag de repositorios
        repositories.appendChild(project);
        
        })
    fetch('https://api.github.com/users/'+user)
        .then(async resx =>{
            if(!resx.ok){
                throw new Error(resx.status);
            }
            let data = await resx.json();
                [data].map(itens => {
                let arr = [data];
                let a = console.log(arr.length);
                    if (arr === 0){
                        console.log("Usuario não encontrado");
                    }
                let _name = document.querySelector('.textfullname');
                let user_name = document.querySelector('.username-rep');
                let location = document.querySelector('.text_localization');
                let bio = document.querySelector('.text_bio');
                let num_folllowers = document.querySelector('.num-followers');
                let num_following = document.querySelector('.num-following');
                let _user_name = document.querySelector('.user-name');
                document.getElementById('img-perfil').src = itens.avatar_url;
                _name.textContent = itens.name;
                user_name.textContent = itens.login
                location.textContent = itens.location;
                bio.textContent = itens.bio;
                _user_name.textContent = itens.login;
                num_folllowers.textContent = itens.followers
                num_following.textContent = itens.following
                
                
                
            })
            
        })
        
    })
   
}

//função para atualizar a pagina.
function limpRepos(){
    // cria variavel lista e seleciona a class project criada para os repositorios.
    var lista = document.getElementsByClassName("project");
    //se a variavel lista for diferente de nula executa o laço for.
    if(lista != null){
    // laço for percorre a lista e remove todos os aquivos criados pelo project.
    for(var i = lista.length - 1; i >= 0; i--)
    {
        lista[i].remove()
    }

}}
