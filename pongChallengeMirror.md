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


# Pong Network Challenge - Mirror
Jogo Pong Multiplayer em rede local.

<center>
<img src="./Projeto%20Pong%20Mirror/Tela1.png"/>
</center>

<center>
<img src="./Projeto%20Pong%20Mirror/Tela2.png"/>
</center>

<center>
<img src="./Projeto%20Pong%20Mirror/ConnectMenu.png"/>
</center>

<center>
<img src="./Projeto%20Pong%20Mirror/Tela3.png"/>
</center>

<center>
<img src="./Projeto%20Pong%20Mirror/Tela4.png"/>
</center>


## Especificidades técnicas do projeto

- O Pong Network Challenge (Mirror) foi desenvolvido através do uso da engine Unity 2020.1.16f1 somada a API Mirror (Asset Store) para gerenciar a rede local;
- Este é um projeto 2D;
- Foi utilizado como base o projeto de Pong contido na API Mirror;
- Foi criada uma scene “Main” (título inicial) e uma scene “Pong” (jogo);
- Foi adicionada na scene “Main” uma iluminação do tipo “Point”, para criar foco no título do jogo;
- O tamanho (atributo Size) da câmera com projeção ortográfica da scene “Pong” foi calculada de acordo com o recomendado em https://producaodejogos.com/camera-ortografica-no-unity/, no entanto o resultado recomendado de Size (para mostrar somente a mesa de jogo) foi multiplicado por 2 propositalmente para enquadrar o dobro do tamanho da mesa;
- Foi utilizado TextMesh Pro em vez de Text nos textos, pois seu uso é melhor recomendado em https://blogs.unity3d.com/2018/10/16/making-the-most-of-textmesh-pro-in-unity-2018/;
- A bola é jogada randomicamente  de seu ponto de origem (centro da tela) para a direita(cima ou baixo) ou esquerda(cima ou baixo);

No jogo os botões de conexão significam:
- **I’m: Server Only**: Sou somente o servidor;
- **I’m: Host (Server + Client)**: Sou servidor, mas também sou um cliente;
- **I’m: Client (Server IP)**: Sou um cliente, então preciso inserir no campo a frente o IP de rede do servidor.

<hr />
<img src="./Assets/Separador.jpg"/>
<hr />

<center>Todos os direitos reservados.</center>

<!-- <link rel="stylesheet" id="jhonatan-css" href="adic/css/jhonatan.css" type="text/css" media="all" /> -->