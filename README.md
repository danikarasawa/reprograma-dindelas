<h2>Projeto Final | Back-end | {reprograma} + Mercado Livre | Dezembro de 2019</h2>

<h3>Objetivo</h3>

<b>Ambiente de gerenciamento de dados</b> de mulheres empreendedoras brasileiras pré-cadastradas via formulário aplicado em grupos de WhatsApp de mulheres desenvolvedoras (formulário exclusivo para este projeto). Neste ambiente, será possível analisar as respostas enviadas, traçar o perfil das mulheres, determinando se elas estão prontas ou não para receber uma primeira rodada de créditos. 

O que apresento neste projeto é uma página de acompanhamento da mulher empreendedora e de seu negócio como: estágio de aprovação de crédito, utilização de crédito e resultados do crédito no negócio, além de outras funcionalidades listadas na documentação via Postman. O CRUD vai funcionar para a equipe de gestão realizar observações, criar relatórios semanais e inserir <i>emoji</i> comportamentais. Há também uma integração básica com o Front-end. 

<h3>Próximos Passos</h3>

Esse <b>projeto</b> é <b>uma simulação</b> do <i><b>teste de mercado</i></b> e <i><b>regras de negócio</i></b> da <b>Dindelas®</b>. O teste consistirá em uma equipe de campo fazendo o atendimento e acompanhamento das mulheres empreendedoras desde a apresentação da <b>Dindelas®</b> até a cessão do crédito, aplicação deste nos objetivos traçados e resultados alcançados por cada negócio atendido. 

<h3>Introdução</h3>

A <b>Dindelas®</b> é uma startup de impacto social com o objetivo de fomentar o microcrédito entre mulheres empreendedoras periféricas. Eu e mais duas amigas participamos, ao longo de 2019, da nossa primeira aceleração junto com a ADE SAMPA / Prefeitura de São Paulo - oportunidade conquistada com a vitória na 1ª Hackatona {reprograma}, realizada em março, no Nubank, com apoio de parceiros como AWS, IFC e FIAP. 

O teste de mercado será realizado em 2020 nas Zonas Sul e Leste. Serão 6 meses de duração onde validaremos nossa ideia de negócio, a dinâmica da plataforma online e a nossa forma de comunicação com as pessoas dos bairros atendidos. 

<h3>Rotas/EndPoints</h3>

GET /all
Rota para uma lista com itens sobre as mulheres empreendedoras
HTTP 200 OK

GET /:id
Rota para alguns detalhes de uma mulher empreendedora, baseada no id.
HTTP 200 OK

POST /all
Rota que recebe uma atualização sobre o status geral no Banco de Dados.
HTTP 201 CREATED

PUT /:id
Rota que atualiza algum item dentro do status da mulher empreendedora e retorna esse processo pronto, baseada no id.
HTTP 200 OK

DELETE /:id
Rota que deleta um item, baseada no id.
HTTP 204 NO CONTENT

E mais... Surpresa... :D [Sem spoilers, ne? Após a apresentação, atualizo aqui]

<h3>Suporte e Linguagens</h3>

* HTML + CSS
* NodeJS
* API REST
* MongoDB
* Postman
* Heroku

<h3>Sprints</h3>

| <center>Semana 1 (17~23/11)</center>             | <center>Semana 2 (24~30/11)</center> | <center>Semana 3 (01~07/12)</center>                | <center>Semana 4 (08~16/12)</center>     |
|---------------------------------|---------------------|------------------------------------|-------------------------|
| <center>Questionários via redes sociais</center> | <center>Pesquisa e código</center>   | <center>Fim da aplicação dos questionários</center> | <center>Refinamento do código</center>   |
| <center>Aprovação do projeto</center>            | <center>Arquitetura</center>         | <center>Criação de BD</center>                      | <center>Definir</center>                        |
| <center>Definir</center>                                | <center>Escolha do design</center>   | <center>Definir</center>                                    | <center>Apresentação do projeto (16)</center> |

<h3>Sobre mim</h3>

Daniela Karasawa, formada em Letras com o coração na Matemática e nos motores. Fui aluna da T1 de Front-end Online da {reprograma} no 1º semestre. Metas 2020: ser Desenvolvedora Fullstack e colocar a <b>Dindelas®</b> pra funcionar no mundo real ♥

Vamos conversar mais? > <b>danikarasawa@gmail.com</b>

<p align="center">Dindelas® + .daniKarasawa{} + {reprograma}</p>

<p align="center"><img src="https://media1.giphy.com/media/31ltvCocTCYyk/giphy.gif" width="200" title="Vanellope" alt="Main Character of the @Disney Wreck-it Ralph Animation Film"></p>
