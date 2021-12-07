# Desafio de Front-End
Agradecemos muito o seu interesse em fazer parte do nosso time. ❤️

Para prosseguirmos, gostariamos de desafiar você a realizar esse pequeno projeto para que possamos entender melhor como que você estrutura o seu código e quais as habilidades que possui hoje em dia.

## 🕵️ O que iremos avaliar?
Antes de entrarmos para a parte mais técnica, gostariamos de dizer que aqui na Skore valorizamos muita a pró-atividade, aqui temos a liberdade de sugerir mudanças técnicas e de produto nos projetos em que trabalhamos, e para deixar esse desafio o mais parecido com o nosso ambiente de trabalho, gostariamos de ressaltar que você tem toda a liberdade de criação dentro dele.

## 🚀 Nossas tecnologias
Hoje em dia utilizamos em nossos projetos as seguintes tecnologias:
- Nuxt.js;
- Jest e Vue Test Utils;
- SCSS ou SASS;

## 🔥 Bora pro desafio?!
Desafiamos você a desenvolver uma tela de listagem de conteúdos que possibilite irmos para os detalhes de cada conteúdo da lista, este deve possibilitar a visualização, o download ou o consumo em uma nova aba desse conteúdo.

### 💾 Dados que devem ser utilizados
```javascript
[
  {
    id: "5d3bb1f7-0106-4733-aede-6a3c1c7f21c8",
    title: "A LGPD em um giro",
    description: "",
    type: "image",
    url: "https://www.serpro.gov.br/lgpd/menu/arquivos/infografico-lgpd-em-um-giro",
    embeddable: false,
    allow_download: true,
    created_at: 1638901393678,
    updated_at: null,
  },
  {
    id: "627150a0-c0dc-45d5-8d4c-f8a69e38b3cf",
    title: "Promessa de privacidade do Sebrae - LGPD",
    description: "O Sebrae tem responsabilidade de tratar os dados pessoais dos empreendedores conforme preconiza a Lei Geral de Proteção de Dados - LGPD. Apresentamos aqui nossa promessa sobre os cuidados que tomamos e as razões porque coletamos e tratamos os dados.",
    type: "video",
    url: "https://www.youtube.com/watch?v=JMkDepOhm7s",
    embeddable: true,
    allow_download: false,
    created_at: 1638901385668,
    updated_at: 1639247143749,
  },
  {
    id: "dcbe3437-a323-427d-964e-152b80bdd0dd",
    title: "LGPD: o que diz a lei brasileira de proteção de dados e como ela pode impactar a estratégia de marketing de sua empresa",
    description: "Entenda como a Lei Geral de Proteção de Dados Pessoais, afeta a forma com que as empresas e organizações captam, armazenam e utilizam dados de seus clientes, tanto no meio online quanto offline",
    type: "link",
    url: "https://resultadosdigitais.com.br/blog/o-que-e-lgpd",
    embeddable: true,
    allow_download: false,
    created_at: 1638901652386,
    updated_at: null,
  },
  {
    id: "dcbe3437-a323-427d-964e-152b80bdd0dd",
    title: "O que é a LGPD?",
    description: "A Lei Geral de Proteção de Dados (13.709/2018) tem como principal objetivo proteger os direitos fundamentais de liberdade e de privacidade e o livre desenvolvimento da personalidade da pessoa natural.",
    type: "link",
    url: "http://www.mpf.mp.br/servicos/lgpd/o-que-e-a-lgpd",
    embeddable: false,
    allow_download: false,
    created_at: 1638383143749,
    updated_at: null,
  },
  {
    id: "0f7aafc7-215c-44d8-8fa3-2740fc258807",
    title: "Apresentação Google Slides",
    description: "",
    type: "document",
    url: "https://docs.google.com/presentation/d/1mOKKbBB7uq0_OdUtmQFeFBA5TJIvI3QG7tgAkuMJDYs/edit?usp=sharing",
    embeddable: false,
    allow_download: false,
    created_at: 1638902427456,
    updated_at: null,
  },
  {
    id: "0f7aafc7-215c-44d8-8fa3-2740fc258807",
    title: "Lei Geral de Proteção de Dados Pessoais (LGPD)",
    description: "A Lei Geral de Proteção de Dados Pessoais (LGPD), Lei n° 13.709/2018, foi promulgada para proteger os direitos fundamentais de liberdade e de privacidade e a livre formação da personalidade de cada indivíduo. A Lei fala sobre o tratamento de dados pessoais, dispostos em meio físico ou digital, feito por pessoa física ou jurídica de direito público ou privado, englobando um amplo conjunto de operações que podem ocorrer em meios manuais ou digitais. <br> No âmbito da LGPD, o tratamento dos dados pessoais pode ser realizado por dois agentes de tratamento, o Controlador e o Operador. Além deles, há a figura do Encarregado, que é a pessoa indicada pelo Controlador para atuar como canal de comunicação entre o Controlador, o Operador, os(as) titulares dos dados e a Autoridade Nacional de Proteção de Dados (ANPD). <br> Tema fundamental trabalhado pela Lei, o tratamento de dados diz respeito a qualquer atividade que utiliza um dado pessoal na execução da sua operação, como, por exemplo: coleta, produção, recepção, classificação, utilização, acesso, reprodução, transmissão, distribuição, processamento, arquivamento, armazenamento, eliminação, avaliação ou controle da informação, modificação, comunicação, transferência, difusão ou extração. <br> Antes de iniciar qualquer tipo de tratamento de dados pessoais, o agente deve se certificar que a finalidade da operação está registrada de forma clara e explícita e os propósitos especificados e informados ao(à) titular dos dados. No caso do setor público, a principal finalidade do tratamento está relacionada à execução de políticas públicas, devidamente previstas em lei, regulamentos ou respaldadas em contratos, convênios ou instrumentos semelhantes. <br> O compartilhamento dentro da administração pública, no âmbito da execução de políticas públicas, é previsto na Lei e dispensa o consentimento específico. Contudo, o órgão que coleta deve informar com transparência qual dado será compartilhado e com quem. Do outro lado, o órgão que solicita receber o compartilhamento precisa justificar esse acesso com base na execução de uma política pública específica e claramente determinada, descrevendo o motivo da solicitação de acesso e o uso que será feito com os dados. Informações protegidas por sigilo seguem protegidas e sujeitas a normativos e regras específicas. Essas e outras questões fundamentais devem ser observadas pelos órgãos e entidades da administração federal no sentido de assegurar a conformidade do tratamento de dados pessoais de acordo com as hipóteses legais e princípios da LGPD. <br> A Lei estabelece uma estrutura legal de direitos dos(as) titulares de dados pessoais. Esses direitos devem ser garantidos durante toda a existência do tratamento dos dados pessoais realizado pelo órgão ou entidade. Para o exercício dos direitos dos(as) titulares, a LGPD prevê um conjunto de ferramentas que aprofundam obrigações de transparência ativa e passiva, e criam meios processuais para mobilizar a Administração Pública. <br> Documento base:  Guia de Boas Práticas para Implementação na Administração Pública Federal da Lei Geral de Proteção de Dados, documento elaborado pelos diferentes órgãos que compõem o Comitê Central de Governança de Dados e que contém orientações sobre as atribuições e atuação do Controlador, do Operador e do Encarregado, bem como da Autoridade Nacional de Proteção de Dados (ANPD) e versa, ainda, sobre os direitos fundamentais dos(as) cidadãos(ãs) titulares dos dados, aborda hipóteses de tratamento dos dados e sua realização, indica o ciclo de vida do tratamento dos dados pessoais e apresenta boas práticas em segurança da informação.",
    type: "text",
    url: null,
    embeddable: false,
    allow_download: false,
    created_at: 1638902704221,
    updated_at: 1639161924447,
  },
]
```

## 😉 Dicas que podemos lhe dar...
Algumas observações que podem ser importantes para a realização desse desafio.

#### 📚 Um dos principais diferenciais da Skore é suportar diversos tipos de conteúdos.
Pedimos que você utilize sua criatividade para exibir os tipos de conteúdo da maneira que achar melhor, desde o HTML nativo até o uso de bibliotecas.

#### 💅🏿 Gostariamos muito de ver como você estiliza aplicações.
Nesse desafio desencorajamos o uso de frameworks de layout como Vuetify, Tailwind etc. Pedimos também que você faça o melhor layout que puder deixando-o responsivo e interativo.

#### 🤷‍♀️ Sabemos que dúvidas sempre aparecem...
Lidar com as incertezas é um valor muito importante dentro da Skore. Caso isso ocorra, pedimos que você tome as decisões necessárias e explique-as ao enviar o desafio.


#### 🧪 Encorajamos você a testar sua aplicação escrevendo testes unitários!
Testar aplicações fazem parte do dia a dia de qualquer pessoa desenvolvedora que trabalha aqui.


## 🎉 Tudo pronto... E agora?!
Após terminar o seu teste, pedimos que caso você ainda não tenha feito, crie um repositório no Github e nos envie o link dele.

Feito isso, a responsa agora é nossa! Iremos analisar o seu código e entraremos em contato assim que possível. 😊