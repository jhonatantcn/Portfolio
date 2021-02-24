<center>
<img src="./Assets/Logo.png"/>
</center>

<!-- <p>Portfólio de Jhonatan Néry com os principais trabalhos desenvolvidos, exceto os projetos que envolvem direitos autorais privados.</p> -->

<img src="./Assets/Separador.jpg"/>

<style type="text/css">
<!--
#page-bar {
margin: 0;
}

#page-bar ul {
list-style-position: inside;
list-style-image: none;
list-style-type: none;
}

#page-bar li {
float:left;
display:block;
list-style-position: inside;
list-style-image: none;
list-style-type: none;
margin: 0px;
padding: 0px;
}

#page-bar li a{
margin: 0px;
color:#8b03a3;
font-weight: bold;
display:block;
text-decoration: none;
width:auto;
text-align: center;
font-family: Arial, Helvetica, sans-serif;
font-size: 12pt;
padding-top: 5px;
padding-bottom: 5px;
padding-right: 57px;
}

#page-bar li a:hover {
color: #000000;
font-weight: bold;}

#Social{
  position: absolute;
  left: 50%;
  margin-top: -70px;
  margin-left: 195px; /*Sempre a metade da largura do elemento*/
  width: 300px;
  height: 300px;
}
-->
</style>


<ul id="page-bar">
<li><a href="./iblueit" class="button">
  <small>Projeto</small>
    I Blue It 4.0
</a></li>

<li><a href="./minicurso2D" class="button">
  <small>Projeto</small>
    Minicurso 2D
</a></li>

<li><a href="./minicurso3D" class="button">
  <small>Projeto</small>
    Minicurso 3D
</a></li>

<li><a href="./pongChallengeMirror" class="button">
  <small>Projeto</small>
    Pong Network Challenge
  <small>(Mirror)</small>
</a></li>

<li><a href="./pongChallengePhoton" class="button">
  <small>Projeto</small>
    Pong Network Challenge
  <small>(Photon)</small>
</a></li>
</ul>

<div id="Social">
<a href="https://www.linkedin.com/in/jhonatantcn/" class="button">
<img src="./Assets/Linkedin.png">
</a>

<a href="https://www.facebook.com/jhonatantcn/" class="button">
<img src="./Assets/Facebook.png">
</a>

<a href="mailto:jhonatanthallisson@gmail.com" class="button">
<img src="./Assets/Mail.png">
</a>
</div>

<!-- CONTADOR DE VISITAS -->
<div id="sfcjj1a15uw8b63ksdkylrl2xj2atgftcng"></div>
<script type="text/javascript" src="https://counter8.stat.ovh/private/counter.js?c=jj1a15uw8b63ksdkylrl2xj2atgftcng&down=async" async></script>
<noscript><a href="https://www.webcontadores.com" title="contador de visitas para blog"><img src="https://counter8.stat.ovh/private/webcontadores.php?c=jj1a15uw8b63ksdkylrl2xj2atgftcng" border="0" title="contador de visitas para blog" alt="contador de visitas para blog"></a></noscript>
<!-- CONTADOR DE VISITAS -->


<img src="./Assets/Separador.jpg"/>
<hr />


# Pong Network Challenge - Photon
Jogo Pong Multiplayer online, com simulação e compensação de alta latência, usando para isto previsões da movimentação dos objetos.

<center>
<section id="video" class="video">
  <iframe width="100%" src="https://www.youtube.com/embed/7y4l3M3NjBo?showinfo=0" frameborder="0" allowfullscreen></iframe>
</section>
</center>

<center>
<img src="./Projeto%20Pong%20Photon/Tela1.png"/>
</center>

<center>
<img src="./Projeto%20Pong%20Photon/Tela2.png"/>
</center>

<center>
<img src="./Projeto%20Pong%20Photon/Tela3.png"/>
</center>

<center>
<img src="./Projeto%20Pong%20Photon/TelaSimulationLag.png"/>
</center>

## Game Design Document (GDD)

Game Design Document (GDD) é o documento guia do processo de desenvolvimento de um jogo e é dependente do contexto de cada projeto.

### O Jogo:

Pong é um game de esporte desenvolvido e publicado pela Atari em 1972. O Pong Challenge desenvolvido neste projeto é uma interpretação a partir do original.

### Objetivo: 

Possui uma proposta semelhante a do jogo esportivo chamado tênis de mesa.

### Software e Hardware:

O build enviado por e-mail, gerado na engine Unity é específico para rodar sobre plataformas com sistemas operacionais Microsoft Windows. Porém a engine permite a criação de executáveis para diversos sistemas operacionais (Android, Linux e etc.) e diversas plataformas (Computador, Smartphone e etc.).

### Navegabilidade:

Primeiro é apresentada uma tela de apresentação, onde o primeiro jogador se conecta a uma sala de jogo, sua raquete e a mesa aparecem e o segundo jogador é aguardado. Logo que o segundo jogador entra na sala virtual, sua raquete aparece para o primeiro jogador, a bola é lançada e o jogo começa. É possível finalizar o jogo a partir de qualquer uma das telas.

### Jogabilidade:

-	Os jogadores se movem apenas para cima e para baixo, apenas em seu eixo y. Tem-se como controles as setas direcionais    ou as teclas W e S;
-	Caso a velocidade da bola diminua e se movimente lentamente no centro da mesa, os jogadores tem a opção de apertar a tecla “espaço” e lançar a bola novamente;
-	Caso o jogador cliente (jogador 2) saia da conexão, a bola é fixada no centro da tela.

### Mecânicas:

-	A bola é jogada randomicamente de seu ponto de origem (centro da tela) para a direita(cima ou baixo) ou esquerda(cima ou baixo);
-	Caso a bola colida com a raquete do jogador ou de seu adversário, é verificado o ângulo da colisão, e este ângulo influência na direção de saída da bola:
  - Se a raquete atingir a bola no canto superior, ela deve quicar em direção à borda superior da mesa;
  - Se a raquete atingir a bola no centro, ela deve quicar para o lado oposto, na horizontal (não para cima ou para baixo);
  - Se a raquete atingir a bola no canto inferior, ela deve quicar em direção à borda inferior da mesa.
- Caso colida com as fronteiras horizontais da mesa, a direção vertical da bola é alterada.

### Pontuação:

Caso a bola toque na parede vertical atrás de um dos jogadores, o jogador adversário é pontuado.

### Transição:

Não existem nesta versão: níveis, limites de jogo (tempo, ou pontuação), ficando para os jogadores estipularem a meta de jogo.


## Especificidades técnicas do projeto

- O Pong Network Challenge (Photon) foi desenvolvido através do uso da engine Unity 2020.1.16f1 somada a API PUN2 (Photon Unity Networking 2);
- Se trata de um projeto 3D, porém com shaders do tipo “Sprite” aplicados aos objetos para que lembre o jogo clássico 2D;
- Optou-se por criar uma cena única, mas com duas telas ativadas e desativadas no decorrer da navegação;
- Iluminação do tipo “Point” foi aplicada para criar foco no título do jogo;
- Foi aplicado na bola um material físico que simula a elasticidade de uma bola emborrachada;
- Photon Unity Network 2 Free:
  - Foi criada uma aplicação no Photon Public Cloud relacionada ao Pong Challenge, esta aplicação gerou um ID que foi inserido na API  PUN 2 FREE (Photon Unity Network 2 Free) importada para o projeto Unity. Este ID é utilizado como ponto de referência para as máquinas que desejarem adentrar à rede;
  - O Photon Public Cloud é um servidor de sinalização (Serve apenas para armazenar os IPS e as portas dos jogadores conectados) ele aponta as máquinas executando aplicações PUN com o mesmo ID;
  - PUN é uma base sólida para qualquer tipo de jogo multijogador baseado em salas no Unity; promete facilidade de implementação com desempenho, confiabilidade e escalabilidade;
  - Uma vez conectado, o jogador recebe o IP dos outros jogadores, não importa onde o servidor do Photon esteja sendo executado, pois o servidor de sinalização apenas é utilizado na criação da conexão, após criada os jogadores se conectam diretamente;
  - No Pong Challenge, o servidor do jogo é o primeiro jogador que executá-lo, se tornando um host. O segundo jogador é somente cliente.
  - Para um objeto aparecer para todos os jogadores preciso adicionar o scrip “Photon View” que observa o comportamento do objeto.

<hr />
<img src="./Assets/Separador.jpg"/>
<hr />

<center>Todos os direitos reservados.</center>

<!-- <link rel="stylesheet" id="jhonatan-css" href="adic/css/jhonatan.css" type="text/css" media="all" /> -->