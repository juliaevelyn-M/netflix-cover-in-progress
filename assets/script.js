 const body = document.querySelector('body');

const avancarScroll= (elemento,direcao) => {
const carrocelContent = document.querySelector(elemento);


    if(direcao == 'left'){
      carrocelContent.scrollLeft -= 100;
      // carrocelContent.scrollLeft = carrocelContent.scrollLeft - 100; //
    }else if (direcao == 'right'){
      carrocelContent.scrollLeft += 100;
       // carrocelContent.scrollLeft = carrocelContent.scrollLeft - 100; //
    }
}

const pageFilm = (titulo, codeVideo) => {
 body.innerHTML = `
 <header>
  <img class="logo" src="assets/images/netflix-logo.png">
 </header>

 <main>
  <div id="container-voltar" onclick="backHome()">
  <span> < Voltar </span>
 </div>
 
  <div class="container">
  <span id="title">${titulo}</span>

  <iframe width="900" height="400" src="https://www.youtube.com/embed/${codeVideo}"   title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

 </div>
 </main>
  `;
}

const createCarrocel = () => {
 const listSuspense = [
        {
           title: "Tempo", 
           capa: "assets/images/capas/capa-filme-tempo.jpg",
           code: "zxnVGnQKM4E"  
        },
         {
           title: "O Assassino de Clovehitch", 
           capa: "assets/images/capas/capa-filme-clovehitch.jpg",
           code: "6OtbIfuUTBU"
        },
         {
           title: "Fuja", 
           capa: "assets/images/capas/capa-filme-fuja.jpg",
           code: "_sETSm-fnFc"
        },
         {
           title: "Risco Duplo", 
           capa: "assets/images/capas/capa-filme-risco-duplo.jpg",
           code: "vxKmaLEW7eg"
        },
         {
           title: "O Enfermeiro da Noite", 
           capa: "assets/images/capas/capa-filme-enfermeiro.jpg",
           code: "LvGSlwdulwE"
        },
         {
           title: "Corra!", 
           capa: "assets/images/capas/capa-filme-corra.jpg",
           code: "mDGV5UucTu8"
        },
         {
           title: "O Limite da Traição", 
           capa: "assets/images/capas/capa-filme-o-limite.jpg",
           code: "Rhv2kFF6yTA"
        },
         {
           title: "Truque de Mestre", 
           capa: "assets/images/capas/capa-filme-truque.jpg",
           code: "BqXnvWADHdo"
        },
       ]
    listSuspense.forEach((e) =>createCarrocelItem(".suspense", e.capa, e.title, e.code));

 const listTerror = [
        {
           title: "O Grito", 
           capa: "assets/images/capas2/capa-filme-grito.jpg",
           code: "Kp_-KZH_vlQ"  
        },
         {
           title: "Irmã Morte", 
           capa: "assets/images/capas2/capa-filme-irma.jpg",
           code: "dNOTu0BC3Bw"
        },
         {
           title: "Sobrenatural: A Última Chave", 
           capa: "assets/images/capas2/capa-filme-sobrenatural.jpg",
           code: "WLl3RrjCkrQ"
        },
         {
           title: "Massacre no Texas", 
           capa: "assets/images/capas2/capa-filme-texas.jpg",
           code: "53Q4s1bxGUw"
        },
         {
           title: "Pânico", 
           capa: "assets/images/capas2/capa-filme-panico.jpg",
           code: "swzTZ2mQypM"
        },
         {
           title: "A Epidemia", 
           capa: "assets/images/capas2/capa-filme-epidemia.jpg",
           code: "nN5eh9K-Alc"
        },
         {
           title: "Caso 39", 
           capa: "assets/images/capas2/capa-filme-caso.jpg",
           code: "RG4MPjhDLF8"
        },
         {
           title: "Conferência Mortal", 
           capa: "assets/images/capas2/capa-filme-conferencia.jpg",
           code: "5mkHGz-baf0"
        },
       ]
    listTerror.forEach((e) =>createCarrocelItem(".terror", e.capa, e.title, e.code));

  const listAcao = [
        {
           title: "Resgate", 
           capa: "assets/images/capas3/capa-filme-resgate.jpg",
           code: "GMKKq_bYd0E"  
        },
         {
           title: "Lágrimas do Sol", 
           capa: "assets/images/capas3/capa-filme-lagrima.jpg",
           code: "INW4f3yyeZg"
        },
         {
           title: "Rota de Fuga", 
           capa: "assets/images/capas3/capa-filme-rota.jpg",
           code: "jgrFJkHGwDA"
        },
         {
           title: "Noé", 
           capa: "assets/images/capas3/capa-filme-noe.jpg",
           code: "VG34gXdqR-4"
        },
         {
           title: "Tropa de Elite", 
           capa: "assets/images/capas3/capa-filme-tropa.jpg",
           code: "uZBiNJQxtGw"
        },
         {
           title: "Motoqueiro Fantasma", 
           capa: "assets/images/capas3/capa-filme-fantasma.jpg",
           code: "nu6R7ypaz5g"
        },
         {
           title: "2012", 
           capa: "assets/images/capas3/capa-filme-2012.jpg",
           code: "coS7hHB30Yk"
        },
         {
           title: "Sr. e Sra. Smith", 
           capa: "assets/images/capas3/capa-filme-sr.jpg",
           code: "MXVNW-No6xw"
        },
       ]
    listAcao.forEach((e) =>createCarrocelItem(".acao", e.capa, e.title, e.code));
  };


const createCarrocelItem = (generoClass, capa,titulo, codeVideo) =>{
  const carrocel = document.querySelector(" .carrocel-content" + generoClass);
  const newDiv = document.createElement('div');
  newDiv.classList.add("carrocel-item");
  newDiv.onclick  = () => pageFilm(titulo, codeVideo);

  //adiciona o conteudo ao elemento div//
  newDiv.innerHTML = `
     <img class="carrocel-capa" src="${capa}" alt="capa filme ${titulo}">
     <span class="carrocel-title">${titulo}</span>
  `
  carrocel.appendChild(newDiv);
}

const backHome = () => {
  body.innerHTML = `
  <header>
    <img class="logo" src="assets/images/netflix-logo.png">
  </header>

    <main id="main-home">
    <div class="carrocel suspense">

    <img onclick="avancarScroll('.carrocel-content.suspense', 'left')" class="carrocel-seta" src="assets/images/seta-esquerda.webp">
    <div class="carrocel-content suspense"></div>

    <img onclick="avancarScroll('.carrocel-content.suspense', 'right')" class="carrocel-seta" src="assets/images/seta-direita.webp">

  </div>

       
    <div class="carrocel terror">

    <img onclick="avancarScroll('.carrocel-content.terror', 'left')" class="carrocel-seta" src="assets/images/seta-esquerda.webp">
    <div class="carrocel-content terror"></div>

    <img onclick="avancarScroll('.carrocel-content.terror', 'right')" class="carrocel-seta" src="assets/images/seta-direita.webp">

  </div>

       
    <div class="carrocel acao">

    <img onclick="avancarScroll('.carrocel-content.acao', 'left')" class="carrocel-seta" src="assets/images/seta-esquerda.webp">
    <div class="carrocel-content acao"></div>

    <img onclick="avancarScroll('.carrocel-content.acao', 'right')" class="carrocel-seta" src="assets/images/seta-direita.webp">

  </div>
  `;
 createCarrocel()
}

 createCarrocel()