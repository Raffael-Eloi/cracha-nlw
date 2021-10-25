const linksSocialMedia = {
  github: 'Raffael-Eloi',
  youtube: 'channel/UCaOZ-rm-mij-tFFHqC0AOwQ',
  facebook: '',
  instagram: 'raffa_eloi',
  twitter: ''
}

//camelCase -> umExemplo (Primeira minúscula seguindo de começo maiúscula)
//PascalCase -> OutroExemplo2 (Inicio sempre maiúsculo)
//snake_case -> outro_exemplo3 (Tudo minúsculo separado por underline )

function changeSocialMediaLinks () {
  // userName.textContent = "Raffael Eloi da Silva";
  // quando é usado o ponto o próprio js procura um elemento com esse id

  // for (let i=0; i<=10; i++) {} 
  for( let li of socialLinks.children) {
      const social = li.getAttribute('class'); // Essa função está pegando o nome da classe dos li

      li.children[0].href = `https://${social}.com/${linksSocialMedia[social]}`;
      // Essa `` é chamada template-string
      // template-string deixa meio que concatenar um texto com variáveis
      
      // alert(li.children[0].href);
  } 
}

// changeSocialMediaLinks();

function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${linksSocialMedia.github}`;

  fetch(url)
  .then(response => response.json())
  .then(data => {
    userPhoto.src = data.avatar_url;
    userName.textContent = data.name;
    userBio.textContent = data.bio;
    // userLink[1].textContent = data.login;
    userLogin.TextContent = data.login;
    userLink.href = data.html_url;
  })
  // fetch (buscar) vai na API e pega a resposta
  // .then é uma promisse(promessa) de pegar alguma coisa
  // O retorno do fetch vai para dentro do then
  // then pega o retorno da função fetch e trasnforma em json

  // normal function -> function nameFunction(args) { //code here }

  // Arrow function =>
  // Forma contraída da normal function
  // É criado uma função anônima = função que não tem nome
  // () => { //code here } --- Não recebe argumentos --- Se só tiver uma linha não precisa estar entre chaves {}
  // args => { //code here }  --- Recebe 1 argumento 
  // (args1, args2) => { //code here } --- Recebe 2 ou mais argumentos
}

// getGitHubProfileInfos();

function showModalWindow() {
  let modal = document.getElementById("modalWindowGetInfo");
  modal.style.display= "block";
  var form = document.querySelector("form");
  form.addEventListener('submit', event => {
    event.preventDefault();
    let main = document.getElementById("mainContent");
    main.style.display = "block";
    modal.style.display= "none";

    let githubUserCustom = document.getElementById("githubUserName").value;
    let youtubeUserCustom = document.getElementById("youtubeUserName").value;
    let facebookUserCustom = document.getElementById("facebookUserName").value;
    let instagramUserCustom = document.getElementById("instagramUserName").value;

    const bagdeCustom = {
      github: githubUserCustom,
      youtube: youtubeUserCustom,
      facebook: facebookUserCustom,
      instagram: instagramUserCustom
    }
    console.log(bagdeCustom.github);

    const url = `https://api.github.com/users/${bagdeCustom.github}`;
    console.log(url);
    fetch(url)
    .then(response => response.json())
    .then(data => {
    userPhoto.src = data.avatar_url;
    userName.textContent = data.name;
    userBio.textContent = data.bio;
    userLogin.textContent = data.login;
    userLink.href = data.html_url;

    for( let li of socialLinks.children) {
      const social = li.getAttribute('class'); // Essa função está pegando o nome da classe dos li

      li.children[0].href = `https://${social}.com/${bagdeCustom[social]}`;
      // Essa `` é chamada template-string
      // template-string deixa meio que concatenar um texto com variáveis
      
      // alert(li.children[0].href);
  }

  });
  })}

document.addEventListener("DOMContentLoaded", showModalWindow());