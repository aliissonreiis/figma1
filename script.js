const repositories = document.querySelector('.repositorios');
const user_perfil = document.querySelector('.grupo-infos')


function s(){
    
   var user = document.getElementById('input-search').value;
   console.log(user);
   limpRepos();
   getReposGitHub(user);
    
  

}

function getReposGitHub(user){
    
    fetch('https://api.github.com/users/'+user+'/repos')
    .then(async res => {
        if(!res.ok){
           // throw new Error(res.status);
            alert("Usuário não encontrado");
            location.reload();
        }
        let data = await res.json();
        data.map( item =>{
        let project = document.createElement('div');
        project.innerHTML = `
        <div class = "project">
             <div>
                <h4 class ="title"><a href="${item.html_url}">${item.name}</a></h4>
    
            </div>
        
        </div>
        `
    
        
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

function limpRepos(){
    
    var lista = document.getElementsByClassName("project");
    console.log(lista)
    if(lista != null){
    for(var i = lista.length - 1; i >= 0; i--)
    {
        lista[i].remove()
    }

}}
