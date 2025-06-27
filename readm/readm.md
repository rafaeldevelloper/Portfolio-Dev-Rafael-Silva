<!DOCTYPE html>
<html lang="pt-br">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">

  <!-- Google fonts: -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500&display=swap" rel="stylesheet">

  <link rel="shortcut icon" href="./components/imgs/Logo-Rs.png" type="image/x-icon">
  <link rel="stylesheet" href="./components/css/style.css">
  <title>R.S | Dev Web Front-End</title>
</head>
<body id="body">

  <div class="darkMode">
    <button class="btnDarkMode" id="btnDarkMode">
      <img width="25" height="25" src="https://img.icons8.com/ios-filled/50/ffffff/light.png" alt="light"/>
    </button>
  </div>

  <div class="buttonToTop">
    <button class="btnToTop scrollTop" id="btnToTop">
      <img width="24" height="24" src="https://img.icons8.com/material-outlined/24/ffffff/double-up.png" alt="double-up"/>
    </button>
  </div>

  <header id="header">
    <h1>Rafael Silva | <span class="funcao">Developer Web</span></h1>
    <nav id="nav">
      <a class="link" href="#">Home</a>
      <a class="link" href="#homeSobre">Sobre</a>
      <a class="link" href="#projects">Projetos</a>
      <a class="link" href="#skills">Habilidades</a>
      <a class="link" href="#" class="faleComigo">Fale comigo</a>
    </nav>

    <button class="btnOpenMenu" id="btnOpenMenu" onclick="buttonOpenMenu()">
      <img width="35" height="35" src="https://img.icons8.com/ios-glyphs/30/menu--v1.png" alt="menu--v1"/>
    </button>
  </header>

  <!-- Menu responsivo: -->
  <div class="menu-response">
    <div class="content-menu">
      <button class="btnCloseMenu" id="btnCloseMenu">
        <img width="24" height="24" src="https://img.icons8.com/material-outlined/24/delete-sign.png" alt="delete-sign"/>
      </button>

      <nav id="navMenu">
        <a class="linkMenu" href="#">Home</a>
        <a class="linkMenu" href="#homeSobre">Sobre</a>
        <a class="linkMenu" href="#projects">Projetos</a>
        <a class="linkMenu" href="#habilidades">Habilidades</a>
        <a class="linkMenu" href="#" class="faleComigo">Fale comigo</a>
      </nav>
    </div>
  </div>

  <div class="image-ilustrator">
    <div class="infosHome">
      <!-- <h2>Olá, me chamo Rafael Silva</h2> -->
      <h2>Sou <span>Desenvolvedor Web <br/> Front-End</span></h2>
      <p>
        Sou apaixonado por tecnologia! <br/>
        E busco sempre me aprimorar nas <br/> 
        tecnologias que já sei <br/>
        e também procuro aprender mais.
      </p>
      <!-- <div class="redes-sociais">
        <p>Minhas redes sociais:</p>
        <div class="links">
          <a href="#" target="_blank" class="linkedin">GitHub</a>
          <a href="#" target="_blank" class="linkedin">LinkedIn</a>
        </div>
      </div> -->
    </div>
    <img src="./components/imgs/wallpaper-ilustrator.jpeg" alt="Wallpaper">
  </div>

  <main>
    <!-- Sessão home: -->
    <section class="home" id="homeSobre">
      <div class="content-home">
        <div class="infos-home">
          <h1 class="title">Olá, me chamo Rafael Silva</h1>
          <p class="funcao">Sou Front-End Web Developer</p>
          <p class="sobre">Sou apaixonado por tecnologia.
            Sou formado em curso técnico de Análise e Desenvolvimento de Sistemas. Atualmente cursando Análise e Desenvolvimento de Sistemas na UNIP - Ribeirão Preto, SP
          </p>
          <div class="links">
            <a download="Rafael" href="#" class="linkedin">
              <img width="20" height="20" src="https://img.icons8.com/ios/50/ffffff/document--v1.png" alt="document--v1"/>
              Baixar CV
            </a>
            <a href="#" class="linkedin">
              <img width="20" height="20" src="https://img.icons8.com/ios/50/ffffff/document--v1.png" alt="document--v1"/>
              GitHub
            </a>
            <a href="#" class="linkedin">
              <img width="20" height="20" src="https://img.icons8.com/ios/50/ffffff/document--v1.png" alt="document--v1"/>
              LinkedIn
            </a>
          </div>
        </div>
        <img src="./components/imgs/img-home.png" alt="Image home">
      </div>
    </section>

    <!-- Habilidades: -->
    <section class="habilidades" id="habilidades">
      <div class="skills" id="skills">
        <h1 class="title" id="titleHabilidades">Minhas habilidades:</h1>  
        <div class="cards-habilidades">
          <div class="card">
            <img class="img-habilidade" src="./components/imgs/logo-html.png" alt="Logo do HTML">
            <h2 class="title-card">HTML</h2>
          </div>

          <div class="card">
            <img class="img-habilidade" src="./components/imgs/logo-css.png" alt="Logo do CSS">
            <h2 class="title-card">CSS</h2>
          </div>

          <div class="card">
            <img class="img-habilidade" src="./components/imgs/logo-js.png" alt="Logo do JavaScript">
            <h2 class="title-card">JavaScript</h2>
          </div>

          <div class="card">
            <img class="img-habilidade" src="./components/imgs/logo-bootstrap.png" alt="Logo do JavaScript">
            <h2 class="title-card">Bootstrap</h2>
          </div>

          <div class="card">
            <img class="img-habilidade" src="./components/imgs/logo-react.png" alt="Logo do React Js">
            <h2 class="title-card">React Js</h2>
          </div>

          <div class="card">
            <img class="img-habilidade" src="./components/imgs/nodejs.png" alt="Logo do Node Js">
            <h2 class="title-card">Node Js</h2>
          </div>
        </div>
      </div>
    </section>

    <!-- Meus projetos: -->
    <section class="projects" id="projects">
      <h2>Meus projetos:</h2>
      <div class="cards-projects">

        <!-- Projeto 1 -->
        <div class="card-1">
          <img class="img-project" src="./components/imgs/Clone_IPhone_13.png" alt="Projeto 1">
          <div class="infos-project">
            <h3>Site demonstrativo do iPhone 13</h3>
            <p class="description">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex, aut dicta! Laboriosam, labore! Corrupti aliquid quaerat, libero dolor eligendi magni dignissimos reiciendis debitis! Placeat mollitia vitae ipsa aut nemo porro.
            </p>
            <div class="tecnologias-utilizadas">
              <h4>Tecnologias utilizadas:</h4>
              <div class="tecnologias">
                <p>HTML</p>
                <p>CSS</p>
                <p>JavaScript</p>
              </div>
            </div>
            <div class="links-project">
              <a href="#" target="_blank">Ver projeto</a>
              <a href="#" target="_blank">Repositório</a>
            </div>
          </div>
        </div>

        <!-- Projeto 2 -->
        <div class="card-2">
          <img class="img-project" src="./components/imgs/Relogio_Digital.png" alt="Projeto 1">
          <div class="infos-project">
            <h3>Relógio digital</h3>
            <p class="description">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex, aut dicta! Laboriosam, labore! Corrupti aliquid quaerat, libero dolor eligendi magni dignissimos reiciendis debitis! Placeat mollitia vitae ipsa aut nemo porro.
            </p>
            <div class="tecnologias-utilizadas">
              <h4>Tecnologias utilizadas:</h4>
              <div class="tecnologias">
                <p>HTML</p>
                <p>CSS</p>
                <p>JavaScript</p>
              </div>
            </div>
            <div class="links-project">
              <a href="#" target="_blank">Ver projeto</a>
              <a href="#" target="_blank">Repositório</a>
            </div>
          </div>
        </div>

        <!-- Projeto 3 -->
        <div class="card-3">
          <img class="img-project" src="./components/imgs/ToDo_List.png" alt="Projeto 1">
          <div class="infos-project">
            <h3>ToDo-List (Lista de tarefas)</h3>
            <p class="description">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex, aut dicta! Laboriosam, labore! Corrupti aliquid quaerat, libero dolor eligendi magni dignissimos reiciendis debitis! Placeat mollitia vitae ipsa aut nemo porro.
            </p>
            <div class="tecnologias-utilizadas">
              <h4>Tecnologias utilizadas:</h4>
              <div class="tecnologias">
                <p>HTML</p>
                <p>CSS</p>
                <p>JavaScript</p>
              </div>
            </div>
            <div class="links-project">
              <a href="#" target="_blank">Ver projeto</a>
              <a href="#" target="_blank">Repositório</a>
            </div>
          </div>
        </div>

        <!-- Projeto 4 -->
        <div class="card-4">
          <img class="img-project" src="./components/imgs/Foto-Site-Cafeteria.png" alt="Projeto 1">
          <div class="infos-project">
            <h3>Cafeteria para Devs</h3>
            <p class="description">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex, aut dicta! Laboriosam, labore! Corrupti aliquid quaerat, libero dolor eligendi magni dignissimos reiciendis debitis! Placeat mollitia vitae ipsa aut nemo porro.
            </p>
            <div class="tecnologias-utilizadas">
              <h4>Tecnologias utilizadas:</h4>
              <div class="tecnologias">
                <p>HTML</p>
                <p>CSS</p>
                <p>JavaScript</p>
              </div>
            </div>
            <div class="links-project">
              <a href="#" target="_blank">Ver projeto</a>
              <a href="#" target="_blank">Repositório</a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Fale comigo: -->
    <!-- <section class="fale-comigo"></section> -->
  </main>
<script src="./components/js/script.js"></script>
</body>
</html>

<!-- JavaScript: -->
const btnDarkMode = document.querySelector("#btnDarkMode");
const darkModeTheme = document.querySelector("#body");
const headerDarkMode = document.querySelector("#header");
const navDarkMode = document.querySelector("#nav");
const navLinksDarkMode = document.querySelector(".link");
const nameFuncaoHeader = document.querySelector(".funcao");

btnDarkMode.addEventListener("click", (e) =>{
  if(darkModeTheme.classList.contains("dark-mode")){
    darkModeTheme.classList.remove("dark-mode");
    headerDarkMode.classList.remove("dark-mode");
    navDarkMode.classList.remove("dark-mode");
    navLinksDarkMode.classList.remove("dark-mode");
    nameFuncaoHeader.classList.remove("dark-mode");
  }else{
    darkModeTheme.classList.add("dark-mode");
    headerDarkMode.classList.add("dark-mode");
    navDarkMode.classList.add("dark-mode");
    navLinksDarkMode.classList.add("dark-mode");
    nameFuncaoHeader.classList.add("dark-mode");
  }
});

/* Responsividade: */
const buttonOpenMenu = document.querySelector("#btnOpenMenu");
const contentMenu = document.querySelector(".menu-response");

buttonOpenMenu.addEventListener("click", () =>{
  contentMenu.classList.add(".open");
});

/* Animação de Scroll, para o topo da página: */
const buttonToTop = document.querySelector("#btnToTop");

window.onscroll = function(){
  if(document.body.scrollTop > 20 || document.documentElement.scrollTop > 20){
    buttonToTop.style.opacity = "1";   
  }else{
    buttonToTop.style.opacity = "0";   
  }
}

buttonToTop.onclick = () =>{
  document.body.scrollTop = 0;
  window.screenTop({top: 0, behavior: 'smooth'});
}