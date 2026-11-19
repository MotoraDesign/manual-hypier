/* ============================================================
   CONTEÚDO · Posicionamento
   Textos de exemplo marcados com [preencher]. Mantenha a
   estrutura (id, label, group, crumb, title, sub, render).
   ============================================================ */
(function () {
  const T = window.T, B = window.BRAND, P = '[preencher]';

  /* "O que é esse texto?" / "Para que serve?" — exibidos no ícone (i).
     Chave = id da seção (ícone no título) ou nome do bloco (ícone no rótulo). */
  const INFO = {
    'pos-posicionamento': { what: 'Texto curto que sintetiza a mensagem central que deve ser comunicada e qual o principal valor entregue ao cliente.', why: 'Orientar estrategicamente a equipe interna, sem nunca perder de vista os objetivos da marca e do negócio.' },
    'pos-manifesto': { what: 'Inspiracional e motivacional, o manifesto comunica o propósito da organização para além do seu serviço ou produto.', why: 'Gerar conexão emocional com a marca. Pode ser usado no site, em vídeos, treinamentos internos, e trechos podem ser aproveitados em materiais promocionais.' },
    slogan: { what: 'Frase curta e de impacto.', why: 'Destaque no site e em materiais promocionais. Deve ser repetida em diferentes materiais, para se fixar na mente dos clientes.' },
    'pos-quemsomos': { what: 'Quem somos e por que existimos.', why: 'Explicar de forma breve quem é a marca. Deve ser usado como base para apresentar a marca no site, redes sociais e materiais comerciais.' },
    'pos-pilares': { what: 'Uma lista de ideias-chave que sustentam a marca.', why: 'Orientar a comunicação da marca. Tudo o que a marca faz deve ser sustentado por seus pilares.' },
    'pos-cliente': { what: 'Descreve quem é o nosso cliente ideal.', why: 'Texto interno. Reúne informações relevantes sobre o cliente final, ajudando a criar empatia, elaborar o discurso de venda e identificar objeções.' },
    'pos-arquitetura': { what: 'Organiza todas as marcas do portfólio e a relação entre elas.', why: 'Orientar a criação de novos produtos/marcas e definir a hierarquia entre eles.' },
    'pos-arvore': { what: 'Ferramenta de apoio para a criação de novas iniciativas: um roteiro de perguntas que indica se algo novo deve virar uma marca, uma submarca ou apenas um nome dentro de uma marca existente.', why: 'Orientar decisões sobre o portfólio com critérios claros, evitando a criação de marcas desnecessárias e mantendo a arquitetura organizada.' },
    novosNomes: { what: 'Diretrizes para batizar novos produtos, serviços e iniciativas.', why: 'Garantir que os novos nomes sigam o tom e a lógica do portfólio.' },
    novasAssinaturas: { what: 'Diretrizes para criar assinaturas visuais de novas marcas e iniciativas.', why: 'Manter coerência visual entre as novas assinaturas e a marca-mãe.' },
    'pos-portfolio': { what: 'Levantamento dos nossos principais produtos e seus atributos.', why: 'Pode ser usado no site e em materiais e treinamentos do time comercial.' },
    'pos-historia': { what: 'Explica como a empresa surgiu e quais desafios enfrentou.', why: 'Documentação; utilização por assessoria de imprensa; pode ser exibido no site.' },
    'pos-valores': { what: 'Os valores direcionam comportamentos que queremos incentivar.', why: 'Registrar a mentalidade que queremos construir dentro do time. O que a empresa valoriza.' },
    'pos-cultura': { what: 'Características que marcam nossa cultura corporativa.', why: 'Descrever como somos e como nos comportamos no dia a dia e diante de desafios; registrar rotinas e rituais importantes.' },
    missao: { what: 'Missão é o nosso objetivo de longo prazo com a empresa: que impacto queremos gerar?', why: 'Engajar os colaboradores de forma alinhada com as expectativas da alta liderança.' },
    'pos-dresscode': { what: 'Descritivo de como esperamos que nossos colaboradores se vistam quando em contato com clientes.', why: 'A forma como nossos colaboradores se apresentam passa uma mensagem para o público sobre a empresa como um todo. Estabelecer um dress code garante maior controle a esse respeito.' },
    'pos-arquetipos': { what: 'O arquétipo é um conceito da psicologia que pode ser utilizado pela comunicação. Representa um padrão de comportamento associado a um personagem ou papel social.', why: 'Texto interno. Ajuda o time de comunicação a dar personalidade à marca em seus diversos pontos de contato.' },
    'pos-persona': { what: 'Uma história fictícia que descreve quem a marca seria se fosse uma pessoa.', why: 'Texto interno. Ajuda o time de comunicação a entender a personalidade e as motivações da marca, gerando mais empatia e conexão com o consumidor final.' },
    'pos-tomdevoz': { what: 'Direcionamentos verbais da marca, seja para a escrita de textos ou para atendimentos por ligação e presenciais.', why: 'Texto interno. Orienta a equipe de comunicação e o comercial na hora de falar em nome da marca, mantendo a consistência da personalidade.' },
    grafias: { what: 'Termos que, por escolha da marca, têm uma escrita específica: nomes de iniciativas, produtos ou palavras muito presentes no vocabulário da marca.', why: 'Garantir que todos escrevam esses termos sempre da mesma forma, em qualquer canal ou material.' },
    'pos-exemplos': { what: 'Exemplos de como a marca se comunica em situações recorrentes: saudações, problemas, elogios, reclamações, agradecimentos e encerramentos.', why: 'Texto interno. Mostra na prática como aplicar o tom de voz, servindo de referência para atendimento, comercial e redes sociais.' },
    digital: { what: 'Direcionamentos para a comunicação em canais digitais.', why: 'Manter a personalidade da marca consistente nas redes sociais, mensagens e e-mails.' },
    hashtags: { what: 'As hashtags oficiais da marca e de suas iniciativas.', why: 'Organizar e agrupar o conteúdo da marca nas redes sociais, facilitando a busca e o reconhecimento.' },
    emojis: { what: 'Diretrizes sobre o uso (ou não) de emojis.', why: 'Definir se e como os emojis reforçam o tom de voz da marca, evitando usos que soem fora da personalidade.' },
    'pos-produto': { what: 'Descreve o que dá identidade aos nossos produtos (formatos, texturas, tamanhos, acabamentos) e o que queremos que o cliente sinta ao entrar em contato com eles, com a loja ou com qualquer ponto de contato.', why: 'Garantir que diferentes produtos e espaços reforcem a mesma narrativa e gerem a mesma experiência de marca.' },
    'pos-atendimento': { what: 'Registro dos padrões que devem se repetir no nosso atendimento.', why: 'Orientar a equipe de atendimento com relação à forma de receber os clientes.' },
    'pos-arquitetura-espaco': { what: 'Diretrizes para projetos de arquitetura e decoração.', why: 'Texto interno. Direcionar arquitetos com relação a materiais, cores e acabamentos que fazem sentido dentro do universo da marca.' },
    'pos-territorio': { what: 'Sobre o que falamos.', why: 'Texto interno. Deve orientar a criação de conteúdo e linhas editoriais para redes sociais, blogs e outros formatos de conteúdo da marca.' },
    repositorio: { what: 'Banco de links com os conteúdos que mais representam a marca ou que tiveram melhor resultado.', why: 'Criar uma memória de referências para orientar a produção de novos conteúdos no futuro.' },
    'pos-imagens': { what: 'Diretrizes para a seleção e produção de imagens.', why: 'Texto interno. Direcionar a seleção de fotografias pela equipe de comunicação e a criação de novas imagens por fotógrafos contratados.' },
  };

  /* ÁRVORE DE DECISÃO — interativa (uma pergunta por vez).
     Nó: { q: 'pergunta', a: [['resposta', próximo nó OU número do resultado], ...] }
     outcomes: { número: 'o que fazer' } */
  const DTREE = {
    title: 'Criar (ou não) uma nova marca, submarca ou iniciativa',
    start: { q: 'Trata-se de uma newsletter?', a: [
      ['Sim', { q: 'Paga ou gratuita?', a: [['Paga', 1], ['Gratuita', 2]] }],
      ['Não', { q: 'Trata-se de um evento?', a: [
        ['Sim', { q: 'Autoral ou patrocinado?', a: [['Autoral', 5], ['Patrocinado', 6]] }],
        ['Não', { q: 'Está dentro da especialidade da marca?', a: [['Sim', 3], ['Não', 4]] }],
      ] }],
    ] },
    outcomes: {
      1: `${P} O que fazer no caso 1.`, 2: `${P} O que fazer no caso 2.`, 3: `${P} O que fazer no caso 3.`,
      4: `${P} O que fazer no caso 4.`, 5: `${P} O que fazer no caso 5.`, 6: `${P} O que fazer no caso 6.`,
    },
  };

  /* Menu inicial da capa (as "pétalas" do manual). goto = id da primeira página de cada parte.
     Itens cuja página não existe (ex.: marca sem sub-marcas) somem sozinhos. */
  window.HOME_MENU = [
    { label: 'Posicionamento', sub: 'Propósito, proposta de valor e cliente ideal.', goto: 'pos-posicionamento' },
    { label: 'Identidade de marca', sub: 'Quem somos e pilares.', goto: 'pos-quemsomos' },
    { label: 'Estrutura', sub: 'Arquitetura de marca e portfólio.', goto: 'pos-arquitetura' },
    { label: 'Cultura corporativa', sub: 'Cultura, história, valores e dress code.', goto: 'pos-cultura' },
    { label: 'Personalidade', sub: 'Arquétipos, persona e tom de voz.', goto: 'pos-arquetipos' },
    { label: 'Experiência', sub: 'Manifesto, características e atendimento.', goto: 'pos-manifesto' },
    { label: 'Expressão visual', sub: 'Marca, cores, tipografia e elementos.', goto: 'conceito' },
    { label: 'Exemplos de layouts', sub: 'Imagens, grid e peças aplicadas.', goto: 'imagens' },
    { label: 'Sub-marcas', sub: 'Os níveis do portfólio.', goto: 'nivel-1' },
    { label: 'Recursos', sub: 'Downloads de arquivos.', goto: 'downloads' },
    { label: 'Créditos do manual', sub: 'Autoria e contatos.', goto: 'creditos' },
  ];
  window.POS_SECTIONS = [
    {
      id: 'capa', label: 'Início', group: 'Início',
      crumb: 'Manual da marca', title: `${B.manualTitle} ${B.name}`, sub: B.audience,
      render: () => T.hero(),
    },

    /* ---------- 01 · Posicionamento ---------- */
    {
      id: 'pos-posicionamento', label: 'Posicionamento', group: '01 · Estratégia',
      crumb: 'Estratégia', title: 'Posicionamento',
      sub: 'Propósito, proposta de valor e Big Idea.',
      render: () => T.sloganBanner() + T.cards([
        ['Nosso propósito', "Revolucionar a presença digital das marcas, fazendo o seu conteúdo ecoar."],
        ['Nossa proposta de valor', "Conduzir marcas que não dominam a linguagem digital a navegarem esse ambiente como verdadeiras nativas."],
        ['Big Idea', "Dominamos a linguagem digital e isso nos torna capazes de conduzir marcas dos mais variados segmentos a participar de conversas que vão além da superfície das trends."],
      ], 3, true),
    },
    {
      id: 'pos-cliente', label: 'Cliente ideal', group: '01 · Estratégia',
      crumb: 'Estratégia', title: 'Cliente ideal',
      sub: "Quem é o nosso cliente ideal.",
      render: () => `<div class="flow">
        <div class="box flow">
          ${T.tag('CEO ou gerente de marketing · 35 anos')}
          ${["CEO ou gerente de marketing de uma empresa B2B, com 35 anos, onde atua há bastante tempo e iniciou sua trajetória ainda como estagiário, enquanto cursava Marketing Estratégico no Insper. Cresceu junto com o negócio e hoje ocupa uma posição de liderança. É uma pessoa profundamente inserida no universo corporativo e bastante racional, que valoriza decisões estratégicas. Para ele, o trabalho vem sempre em primeiro lugar.","Durante a semana, divide seus dias entre o trabalho na Faria Lima e a vida na Vila Olímpia, onde mora e valoriza a praticidade de ter tudo por perto. Nos fins de semana, corre no Parque Ibirapuera para encontrar equilíbrio, organizar os pensamentos e aliviar a pressão da rotina. Consome conteúdos sobre tecnologia, inovação e negócios. Não é uma pessoa nada criativa e, por isso, sabe o quanto precisa de ajuda para evoluir a presença digital da empresa em que trabalha.","É uma pessoa admirada por colegas, equipe, amigos e família. Reconhecido pela dedicação, disciplina e visão de futuro. Tem seus esforços totalmente direcionados a se tornar uma referência como empresário."].map(T.body).join('')}
        </div>
        <div class="grid cols-2">
          <div class="box flow">${T.lbl('Maior medo')}${T.body("Cometer um erro importante no trabalho e prejudicar a sua reputação ou a reputação da empresa. Não quer que a sua empresa se posicione de forma genérica. Ele gosta de ser o assunto, de chamar atenção e se destacar como um case de sucesso nos eventos que frequenta.")}</div>
          <div class="box flow">${T.lbl('Maior desejo')}${T.body("Ter uma parceria especializada em digital que entenda o mundo corporativo, mas seja extremamente criativa e saiba comunicar qualquer assunto de forma atual e relevante. Alguém em quem ele possa confiar de olhos fechados.")}</div>
        </div>
        <div class="box flow">${T.lbl(`${B.name} é a melhor solução porque`)}${T.lead("Se coloca como uma parceria próxima: escuta, entende e traduz o discurso corporativo para o digital com sensibilidade e estratégia. Acompanha, orienta e provoca na medida certa, oferecendo segurança em cada decisão.")}</div>
      </div>`,
    },

    /* ---------- 02 · Identidade da marca ---------- */
    {
      id: 'pos-quemsomos', label: 'Quem somos', group: '02 · Identidade da marca',
      crumb: 'Identidade da marca', title: 'Quem somos',
      sub: "A marca, o slogan e o texto institucional.",
      render: () => `<div class="flow">
        <div class="grid cols-2">
          <div class="box" style="display:flex; flex-direction:column; justify-content:center">${T.lbl('Slogan', INFO.slogan)}<p class="slogan">${B.slogan.replace(/\*/g, '')}</p>${T.hint('Em inglês: Step past the obvious.')}</div>
          <div class="box flow">${T.lbl('Tagline')}${T.lead('A Connect2B Company')}${T.hint('Em textos: “O braço digital da Connect2B” ou “A digital spin-off from Connect2B”.')}</div>
        </div>
        <div class="box flow">
          ${T.lbl('Quem somos')}
          ${T.lead('Especialistas nada convencionais')}
          ${["Somos a Hypier, o braço digital da Connect2B que vai mudar o ritmo da sua comunicação.","A gente acredita que marca parada não aparece e, por isso, assumimos a missão de te colocar em movimento, marcando sua presença no digital.","Não importa o seu segmento, assunto ou tamanho: nossa vibe é fazer conteúdo virar conversa e marca virar assunto. Se o papo tá enrolado, a gente destrava e faz fluir. Se a ideia não tem forma, a gente repensa e transforma. Atuamos onde tudo verdadeiramente acontece, como parceiros de palco e também de bastidor.","Aqui, criar é movimento. A gente sente o compasso de cada cliente, entende o tempo da comunicação e joga junto.","A gente vive de olho no feed, mas com os pés sempre no mundo real. Afinal, sabemos que toda boa ideia nasce de troca, escuta e de uma leitura afiada de contexto. Pensamos fora da caixa, sim, mas sempre com filtro: se é só barulho, a gente corta. Se é melodia, a gente aposta!","No fim, é simples: a gente não entra pra fazer mais do mesmo. Entra pra atravessar o óbvio."].map(T.body).join('')}
        </div>
      </div>`,
    },
    {
      id: 'pos-pilares', label: 'Pilares', group: '02 · Identidade da marca',
      crumb: 'Identidade da marca', title: 'Pilares',
      sub: 'As ideias-chave que sustentam a marca.',
      render: () => `<div class="grid cols-2">${[["Autêntico é quem enxerga diferente","Nossa autenticidade está na habilidade de interpretar contextos com profundidade e combinar referências inusitadas para criar propostas que fogem do comum. A gente não só acompanha tendências, mas entende o ritmo do mundo e constrói conversas por meio de vídeos e comunicação digital.","Isso significa que criamos ideias próprias, exploramos novos pontos de vista e construímos conteúdos que se destacam pela originalidade e pela conexão real com as pessoas."],["Criar é atravessar o óbvio","Nossa criatividade nasce da curiosidade, da escuta e da ousadia para propor caminhos que vão além do esperado. Acreditamos que criar é atravessar o óbvio com atitude, explorando novas possibilidades sem perder o alinhamento com os objetivos do cliente.","Isso significa que fugimos de fórmulas prontas e formatos genéricos. Ousamos em propor soluções criativas, testar e descobrir o que realmente funciona. Valorizamos ideias que se diferenciam pela coragem de experimentar, mas sempre com critério, estratégia e propósito."],["Cada projeto dança no seu tempo","Acreditamos que cada projeto tem seu próprio ritmo, e nosso papel é escutá-lo. Agilidade, para nós, não é pressa, mas saber o momento certo de acelerar, aprofundar ou ajustar o passo. Trabalhamos de forma dinâmica e sensível, adaptando processos e entregas à realidade de cada cliente e, assim, preparamos suas marcas para acompanhar o pace acelerado das redes sociais sem perder a coerência.","Isso significa que cada solução é oferecida sob medida, ajustando abordagem, processo e entrega para atender de forma precisa às demandas de cada cliente. Atuamos com prontidão para conectar marcas ao timing das conversas digitais, mesmo que o cliente ainda não esteja familiarizado com esse universo."],["Estar junto muda tudo","Estar presente, para nós, é construir relações baseadas em diálogo, escuta e envolvimento real ao longo de todo o processo. Porque só quando todo mundo dança junto é que os melhores resultados acontecem.","Isso significa que atuamos lado a lado com nossos clientes, fortalecendo vínculos de confiança. Mantemos uma comunicação aberta, transparente e frequente para garantir que todos tenham clareza sobre cada etapa do processo e também sobre o objetivo final de cada ação. Criamos um ambiente seguro para troca de ideias, afinal, a presença constante evita surpresas e impulsiona os melhores resultados."],["Onde a ideia toca, ela permanece","Usamos a sensibilidade humana como base do nosso trabalho. Acreditamos que a emoção importa e que perceber sentimentos, contextos e nuances é essencial para criar soluções mais profundas e conectadas às pessoas.","Isso significa que observamos além do briefing: captamos o que é dito, o que é sentido e o que está nas entrelinhas. Nossas criações nascem da empatia e da atenção às pessoas, resultando em propostas que despertam conexão emocional. Tudo que fazemos deve despertar emoção, inspirar e despertar boas conversas."]].map(([t, a, b], i) => `<div class="box flow">
          ${T.lbl(`0${i + 1}. ${t}`)}
          ${T.body(a)}
          ${T.body(b)}
        </div>`).join('')}</div>`,
    },

    /* ---------- 03 · Estrutura ---------- */
    {
      id: 'pos-arquitetura', label: 'Arquitetura de marca', group: '03 · Estrutura',
      crumb: 'Estrutura', title: 'Arquitetura de marca',
      sub: 'As marcas do portfólio, organizadas por nível, e a relação entre elas.',
      render: () => {
        /* Portfólio: um objeto por nível. logo = caminho da imagem (opcional; sem logo, mostra o nome). */
        const PORTFOLIO = [
          { level: 'Nível 1', brands: [
            { name: B.fullName, logo: B.logos.principal, role: 'Marca corporativa', desc: `${P} breve descrição da marca`, audience: `${P} a quem se dirige` },
          ] },
          { level: 'Nível 2', brands: [
            { name: 'marca de negócio', role: 'Marca de negócio', desc: `${P} breve descrição`, audience: `${P} público` },
            { name: 'submarca', role: 'Submarca', desc: `${P} breve descrição`, audience: `${P} público` },
          ] },
          { level: 'Nível 3', brands: [
            { name: 'marca de produto', role: 'Marca de produto', desc: `${P} breve descrição`, audience: `${P} público` },
          ] },
        ];
        const brandCell = (b) => b.logo ? `<img src="${b.logo}" alt="${b.name}" style="height:36px; max-width:100%; object-fit:contain">` : `<span class="nt-name">${b.name}</span>`;
        /* Como cada iniciativa se diferencia no portfólio.
           hasOwn: tem assinatura própria?  by: 'logo' | 'icone' | 'cores' | 'nome'
           logo: caminho (vazio = placeholder) · colors: [hex, hex] (para 'icone' usa colors[0]) */
        const IDENT = [
          { name: 'marca de negócio', hasOwn: true, by: 'logo', logo: 'assets/submarcas/marca-de-negocio-logo.svg', note: `${P} quando e onde a assinatura aparece.` },
          { name: 'submarca', hasOwn: false, by: 'icone', colors: [B.themes[1] ? B.themes[1].color : B.ui.accent], note: `${P} ícone da marca-mãe na cor da iniciativa + nome.` },
          { name: 'linha temática', hasOwn: false, by: 'cores', colors: B.themes[2] ? [B.themes[2].color, B.themes[2].palette[1] && B.themes[2].palette[1].hex] : [B.ui.accent], note: `${P} identificada apenas por um conjunto de cores.` },
          { name: 'marca de produto', hasOwn: false, by: 'nome', note: `${P} só o nome, sempre acompanhado de ${B.name}.` },
        ];
        const BY = { logo: 'Logo próprio', icone: 'Ícone', cores: 'Conjunto de cores', nome: 'Só o nome' };
        const identArt = (it) => {
          if (it.by === 'logo') return it.logo ? `<img src="${it.logo}" alt="${it.name}" style="max-height:56px; max-width:100%; object-fit:contain">` : `<span class="imgph" style="min-height:72px; width:100%"><span class="tag">logo · ${it.name}</span></span>`;
          if (it.by === 'icone') return `<span class="nl-sig" style="padding:0; background:none">${T.symbol(it.colors[0])}<span class="nm" style="font-size:22px">${it.name}</span></span>`;
          if (it.by === 'cores') return `<span style="display:flex; gap:8px">${it.colors.filter(Boolean).map((h) => `<button class="swcopy" type="button" data-copy="${h}" style="flex:none; width:64px; height:64px; border-radius:12px; background:${h}; color:${window.isDark(h) ? '#fff' : '#1a1a1a'}; font-size:10px">${h}</button>`).join('')}</span>`;
          return `<span style="font-family:var(--font-display); font-weight:800; font-size:26px; color:var(--ink)">${it.name}</span>`;
        };
        return `<div class="flow">
        <div class="box flow">
          ${T.lbl('As marcas')}
          ${T.table(['Marca', 'Papel', 'Descritivo', 'Público'],
            PORTFOLIO.flatMap((n) => [{ group: n.level }, ...n.brands.map((b) => [brandCell(b), b.role, b.desc, b.audience])]),
            '1.2fr 1fr 1.6fr 1.2fr')}
        </div>
        <div class="box flow">
          ${T.lbl('Como cada marca se diferencia')}
          ${T.body(`${P} Regra geral: quais iniciativas ganham assinatura própria e quais se apoiam na marca ${B.name}.`)}
          <div class="grid cols-2">${IDENT.map((it) => `
            <div class="box alt flow" style="padding:20px">
              <div style="display:flex; align-items:center; justify-content:space-between; gap:10px; flex-wrap:wrap">
                <div class="lbl" style="margin:0">${it.name}</div>${T.tag(it.hasOwn ? 'assinatura própria' : 'sem assinatura própria', !it.hasOwn)}
              </div>
              <div style="min-height:84px; display:flex; align-items:center; justify-content:center; background:var(--paper); border-radius:12px; padding:14px">${identArt(it)}</div>
              <div class="chips"><span class="chip">Diferencia-se por: ${BY[it.by]}</span></div>
              ${it.note ? T.hint(it.note) : ''}
            </div>`).join('')}
          </div>
        </div>
      </div>`;
      },
    },
    {
      id: 'pos-arvore', label: 'Árvore de decisão', group: '03 · Estrutura',
      crumb: 'Estrutura', title: 'Árvore de decisão',
      sub: 'Ferramenta para avaliar a criação de novas iniciativas.',
      render: () => `<div class="flow">
        ${T.decisionTree(DTREE)}
        <div style="margin-top:12px">${T.lbl('Novos nomes e assinaturas')}${T.hint('Direcionamentos para quando a árvore indicar a criação de algo novo.')}</div>
        <div class="grid cols-2">
          <div class="box flow">
            ${T.lbl('Novos nomes', INFO.novosNomes)}
            ${T.body(`${P} Critérios de naming: tom, extensão, idioma, relação com o nome ${B.name}.`)}
            ${T.lbl('Grafia')}
            ${T.body(`${P} Regras de escrita: maiúsculas/minúsculas, hashtag, como citar em texto corrido.`)}
            ${T.beforeAfter('[preencher] exemplo de nome fora do padrão', '[preencher] exemplo de nome no padrão', 'Evite', 'Prefira')}
          </div>
          <div class="box flow">
            ${T.lbl('Novas assinaturas', INFO.novasAssinaturas)}
            ${T.body(`${P} Quando criar uma assinatura própria e quando usar a assinatura padrão (símbolo + nome).`)}
            ${T.lbl('Construção')}
            ${T.body(`${B.fonts.sub ? `Tipografia de sub-marca: <b>${B.fonts.sub.family}</b>. ` : ''}${P} elementos obrigatórios da marca-mãe, cores permitidas e versões necessárias (com e sem a marca ${B.name}, positiva e negativa).`)}
            ${T.lbl('Quem aprova')}
            ${T.body(`${P} Responsável pela criação e aprovação de novas assinaturas.`)}
          </div>
        </div>
        <div class="box flow">
          ${T.lbl('Checklist antes de lançar')}
          ${T.chips(['Passou pela árvore de decisão', 'Nome validado', 'Grafia definida', 'Versões da assinatura', 'Paleta definida', 'Incluída na arquitetura de marca'])}
        </div>
      </div>`,
    },
    {
      id: 'pos-portfolio', label: 'O que fazemos', group: '03 · Estrutura',
      crumb: 'Estrutura', title: 'O que fazemos',
      sub: 'Portfólio de produtos e serviços.',
      render: () => T.cards([
        ['Produto / serviço 1', `${P} Descrição curta e benefício principal.`],
        ['Produto / serviço 2', `${P} Descrição curta e benefício principal.`],
        ['Produto / serviço 3', `${P} Descrição curta e benefício principal.`],
        ['Produto / serviço 4', `${P} Descrição curta e benefício principal.`],
      ]),
    },

    /* ---------- 04 · Cultura ---------- */
    {
      id: 'pos-cultura', label: 'Nossa cultura', group: '04 · Cultura',
      crumb: 'Cultura', title: 'Nossa cultura',
      sub: 'Como a equipe trabalha no dia a dia.',
      render: () => T.banner('Nossa missão é *[preencher]*', { label: 'Missão', info: INFO.missao }) + T.cards([1, 2, 3, 4].map((i) => [`Traço ${i}`, `${P} Descrição e exemplo concreto.`])),
    },
    {
      id: 'pos-historia', label: 'História', group: '04 · Cultura',
      crumb: 'Cultura', title: `História de ${B.name}`,
      sub: 'Origem e marcos da marca.',
      render: () => `<div class="box flow">
        ${T.body(`${P} Como tudo começou.`)}
        ${T.body(`${P} A virada / os marcos principais.`)}
        ${T.body(`${P} O momento atual.`)}
      </div>`,
    },
    {
      id: 'pos-valores', label: 'Valores', group: '04 · Cultura',
      crumb: 'Cultura', title: 'Valores',
      sub: 'Os compromissos que orientam a marca.',
      render: () => `<div class="grid cols-2">${[1, 2, 3, 4].map((i) => `
        <div class="box flow">
          ${T.lbl(`0${i}. Valor ${i}`)}
          ${T.lead(`${P} Breve descritivo do valor.`)}
          <div>
            <div class="hint" style="margin:0 0 4px; font-weight:700; color:var(--ink-soft)">Dentro da ${B.name}:</div>
            ${T.body(`${P} Ações, práticas, condutas, como o time interage, como lida com situações…`)}
          </div>
        </div>`).join('')}</div>`,
    },
    {
      id: 'pos-dresscode', label: 'Dress code', group: '04 · Cultura',
      crumb: 'Cultura', title: 'Dress code',
      sub: 'Como nos apresentamos no contato com clientes.',
      render: () => `<div class="flow">
        <div class="box flow">${T.body(`${P} Diretriz geral: o que a forma de se vestir deve transmitir sobre ${B.name}.`)}</div>
        <div class="grid cols-2">
          ${T.dd(true, 'Prefira', T.body(`${P} peças, cores e estilos recomendados.`))}
          ${T.dd(false, 'Evite', T.body(`${P} o que não combina com a marca.`))}
        </div>
        ${T.cards([
          ['Atendimento e reuniões', `${P} orientação para o contato com clientes.`],
          ['Eventos e gravações', `${P} orientação para eventos, fotos e vídeos.`],
        ])}
        <div class="grid cols-3">${[1, 2, 3].map((i) => T.photo(`assets/fotos/dress-code/dress-code-0${i}.jpg`, `referência de dress code ${i}`, 220)).join('')}</div>
      </div>`,
    },

    /* ---------- 05 · Personalidade ---------- */
    {
      id: 'pos-arquetipos', label: 'Arquétipos', group: '05 · Personalidade',
      crumb: 'Personalidade', title: 'Arquétipos',
      sub: 'Os arquétipos que definem a personalidade da marca.',
      render: () => {
        const arq = [["Fora da lei",30,26,"São rebeldes, gostam de quebrar regras e de chamar atenção. Não acreditam no certo ou no errado, mas na sua própria autenticidade e que podem mudar o mundo com esse pensamento.","Esse arquétipo traduz nosso jeito de criar: inquieto, fora do padrão e com prazer em desafiar o que virou regra. É com essa energia que criamos conteúdos que geram conversas. Ele guia a forma como criamos e o tom confiante que usamos para apresentar os nossos cases."],["Prestativo",68,70,"Extremamente solícito e empático. Muitas vezes coloca a necessidade do outro acima da sua própria.","Na Hypier, esse arquétipo entra em cena quando a gente pega junto no projeto, inclui o cliente no processo e entende exatamente do que ele precisa antes de entrar em ação. Ele guia a forma como construímos as nossas relações."]];
        return `<div class="flow">
          <div class="box">
            <div class="arqmap">
              <span class="am-axis am-v"></span><span class="am-axis am-h"></span>
              <span class="am-lbl am-top">Independência</span><span class="am-lbl am-bottom">Estabilidade</span>
              <span class="am-lbl am-left">Autoridade</span><span class="am-lbl am-right">Pertencimento</span>
              ${arq.map(([n, x, y]) => `<span class="am-dot" style="left:${x}%; top:${y}%"><i></i>${n}</span>`).join('')}
            </div>
          </div>
          <div class="grid cols-2">${arq.map(([n, , , a, b]) => `<div class="box flow">${T.lbl(n)}${T.lead(a)}${T.body(b)}</div>`).join('')}</div>
        </div>`;
      },
    },
    {
      id: 'pos-persona', label: 'Brand persona', group: '05 · Personalidade',
      crumb: 'Personalidade', title: 'Brand persona',
      sub: 'A marca descrita como uma pessoa.',
      render: () => `<div class="grid cols-2">
        ${T.photo('assets/fotos/persona.jpg', 'retrato da persona', 320)}
        <div class="box flow">
          ${T.lead('E aí, gente! Pode me chamar de Luna.')}
          ${["Tenho 28 anos, trabalho como publicitária e tenho uma relação muito próxima com o universo criativo, urbano e cultural.","Sou de Curitiba, mas me mudei para São Paulo já faz uns anos, e simplesmente amo morar aqui! Minha casa fica em Pinheiros, o que é perfeito pra mim, que estou sempre em busca de novos cafés, lojinhas, restaurantes e lugares legais para me inspirar. Sou uma pessoa muito curiosa e também carinhosa. Mãe de pet, estou sempre acompanhada seja pelo Milo ou pelo Otis, meu gato e meu cachorro, cada um com uma personalidade completamente oposta, mas que são igualmente maravilhosos.","Sou desenrolada, converso com todo mundo, amo trocar ideia, conhecer pessoas novas e criar vínculos. Ao mesmo tempo, dou valor a relações verdadeiras: tenho amizades de longa data e cuido com atenção do meu círculo mais próximo.","Sou agitada, inquieta e difícil de desligar. Estou sempre pesquisando, criando ou descobrindo algo novo. Acompanho tendências e piro pesquisando sobre comportamento, cultura e criatividade. Isso ajuda muito no meu trabalho!","Meu estilo reflete quem eu sou: streetwear casual, com um toque fashion. Curto me vestir bem sem parecer forçado e, para isso, crio moodboards dos meus looks no Pinterest e estou sempre misturando conforto com estilo e elegância.","No dia a dia, consumo o que acompanha meu ritmo: um Super Coffee antes de sair de casa ou entre uma reunião e outra, um café rápido no Starbucks quando preciso virar a chave, um McDonald’s sem culpa depois de um dia corrido…","No tempo livre, tento equilibrar corpo e mente do meu jeito. Faço pilates com a minha mãe, que acaba sendo mais do que exercício: é um momento de troca e presença. Gosto de hot yoga para desacelerar a cabeça e de corrida de rua para sentir a cidade em movimento. Amo colocar o fone de ouvido e deixar as ideias fluírem com uma música animada. Estou sempre com o radar ligado, observando comportamentos, conversas e movimentos culturais, porque é daí que surgem as melhores ideias."].map(T.body).join('')}
        </div>
      </div>`,
    },
    {
      id: 'pos-tomdevoz', label: 'Tom de voz', group: '05 · Personalidade',
      crumb: 'Personalidade', title: 'Tom de voz',
      sub: 'A voz se adapta ao contexto, mas algumas qualidades estão sempre presentes.',
      render: () => `<div class="flow">
        <div class="box flow">
          ${T.body("A voz da nossa marca sempre leva em conta o contexto e o conteúdo da mensagem, podendo se alterar dentro das diferentes situações em que será utilizada. Apesar dessa flexibilidade, algumas qualidades principais de como nos comunicamos devem ser transmitidas em tudo que dizemos. É isso que dá personalidade e exclusividade ao conteúdo da nossa marca.")}
          ${T.body("Somos próximos, solícitos, amigáveis, ambiciosos, ousados e autênticos, e isso é mostrado em nosso tom de voz. Falamos assim entre nós e com nossos clientes. Procuramos ser claros e transparentes e manter uma conexão emocional com cada pessoa.")}
        </div>
        <div class="box flow">
          ${T.lbl('Como nos referimos a nós mesmos')}
          ${T.body(`Escrevemos <b>${B.name}</b> sempre com a grafia oficial: “a Hypier”. Em textos, nos referimos à marca como “O braço digital da Connect2B” ou “A digital spin-off from Connect2B”.`)}
        </div>
        <div class="box flow">
          ${T.tag(`A voz de ${B.name} É`)}
          <div class="grid cols-3">${[["Ousada e provocativa, mas realista","Falamos de forma direta, sem rodeios e sem medo de propor ideias inusitadas. Questionamos o óbvio, puxamos a conversa pra frente e evitamos qualquer linguagem genérica. Nossa ousadia vem da segurança sobre o nosso bom trabalho, não do exagero."],["Segura, mas próxima e presente","Falamos como parceiros, não como consultores distantes. Usamos “a gente”, fazemos perguntas e mostramos que estamos acompanhando de perto. Explicamos ideias ousadas de forma didática, nunca técnicos ou distantes demais. Nos posicionamos como especialistas, não como autoridade. Nossa conversa é horizontal, de igual para igual."],["Viva e em movimento, mas objetiva","Nossa linguagem acompanha o fluxo do digital e se parece com uma conversa casual. Variamos o ritmo do texto, alternamos frases curtas e médias e usamos palavras que sugerem ação, tempo e movimento, como beat, buzz, batida, compasso e bastidor. A gente usa imagens e analogias para dar ritmo à conversa, mas evita excessos ou construções rebuscadas. Podemos viajar na linguagem, mas nunca para soar enigmáticos."]].map(([t, d]) => `<div class="flow">${T.lbl(t)}${T.body(d)}</div>`).join('')}</div>
          ${T.lbl('Exemplos')}
          ${[["Nossa estratégia gera buzz e engajamento de forma inovadora.","Nossa estratégia gera buzz e engajamento com emoção!"],["Nosso diferencial é uma abordagem 360°.","A gente muda o caminho antes de qualquer assunto ficar batido."],["Criamos conteúdo disruptivo para as redes sociais.","Nada de criar no automático! A gente produz os conteúdos que gostaríamos de ver."],["Essa abordagem é mais criativa.","Essa ideia já vem com identidade própria."],["Trabalhamos de forma colaborativa.","Aqui ninguém tá sozinho."],["Oferecemos suporte ao longo do projeto.","Estamos o tempo todo do seu lado."],["Nos adaptamos a diferentes demandas.","A gente sente que cada projeto pede um ritmo."],["Esse conteúdo precisa ser aprimorado.","Esse conteúdo pede mais sincronia."],["Nosso principal canal de atuação são as redes sociais.","Nosso palco vai além do feed."],["Buscamos antecipar tendências antes que elas se consolidem.","A gente sente o hype antes de virar trend."],["Criamos engajamento de forma estratégica.","A gente puxa conversa, não força o buzz."]].map(([n, y]) => T.beforeAfter(n, y)).join('')}
        </div>
        <div class="box flow">
          <span class="part-tag" style="color:var(--no); border-color:var(--no); background:transparent">A voz NÃO é</span>
          ${[["Corporativa","Evitamos o tom corporativo engessado. Não falamos em fonte Arial 12 nem usamos linguagem burocrática nas trocas do dia a dia. Nossa comunicação precisa soar viva, humana e natural, como numa conversa. Mesmo quando tratamos de estratégia e negócio, escolhemos palavras que circulam no digital e criam proximidade. A marca fala com clareza e atitude, não com formalidade ou frieza.",[["Alinhamos internamente e retornamos com os próximos passos.","A gente alinhou por aqui e já temos os próximos passos."],["O objetivo desta entrega é otimizar resultados de comunicação.","Essa entrega é pra gerar hype."]]],["Exagerada","Evitamos o exagero que confunde ou cansa. Nosso impacto não vem de gritar mais alto, mas de uma personalidade autêntica e consistente. Cada provocação, metáfora ou escolha de palavras é feita com intenção e leitura de contexto. A força da Hypier está no recorte inteligente, no timing certo e na clareza da ideia. A marca chama atenção pelo que faz pensar, não pelo excesso de estímulo.",[["Essa campanha vai explodir a internet com uma estratégia extremamente disruptiva e inovadora!!!","A ideia tem ritmo e é pensada pra gerar hype onde importa."],["Essa campanha vai transformar completamente a presença digital da marca!!!","A campanha entra em sintonia com o canal onde a conversa acontece."]]],["Explicativa demais","Evitamos explicações longas e monótonas. Não transformamos nossas mensagens em aulas, nem sobrecarregamos o texto com justificativas. Preferimos clareza, síntese e fluidez. Quando explicamos, é para destravar o entendimento, não para cansar. A marca fala de forma inteligente, direta e fácil de acompanhar.",[["Optamos por essa abordagem estratégica porque ela dialoga com diversos aspectos do comportamento digital contemporâneo…","Essa abordagem funciona porque conversa direto com o agora."],["A escolha do formato se dá a partir da análise de múltiplas variáveis…","O formato entra bem no mood do feed."]]]].map(([t, d, e]) => `<div class="flow">${T.dd(false, t, T.body(d))}${e.map(([n, y]) => T.beforeAfter(n, y)).join('')}</div>`).join('')}
        </div>
        <div class="box flow">
          ${T.lbl('Grafias autorais', INFO.grafias)}
          ${T.body(`${P} Regra geral: a grafia do logo nem sempre se transfere para o texto corrido. Liste aqui os termos com escrita própria.`)}
          ${T.table(['Termo', 'Como escrevemos', 'Tipo', 'Observação'], [
            [`<img src="${B.logos.simplificada}" alt="${B.name}" style="height:32px">`, `<span class="no-bold">${B.name}</span>`, 'marca', 'sempre “a Hypier”'],
            ['<span class="nt-name">Connect2B</span>', 'Connect2B', 'marca-mãe', P],
          ], '1.1fr 1fr .8fr 1.4fr')}
        </div>
        <div class="grid cols-2">
          <div class="box flow">${T.lbl('Palavras que combinam conosco')}${T.hint('Algumas palavras e grafias fazem parte do nosso vocabulário de marca e têm um significado especial para nós.')}${T.chips(["Dança","movimentar","sentir","criar","entrar junto","entrar no ar","inventar","ensaiar","parceria","timing","ideias","hype","ritmo","rolê","bastidor","flow","fluxo","passo","inspirar","emoção","despertar","arrepiar","pincelada","traço","mood","expressão"])}</div>
          <div class="box flow">${T.lbl('Palavras que evitamos')}<div class="chips">${["Explodir","mensurar","otimizar","abordagem 360°","metodologicamente","eventualmente","prezado","inovadora"].map((t) => `<span class="chip" style="color:var(--no); border-color:color-mix(in oklch, var(--no) 35%, var(--line)); background:color-mix(in oklch, var(--no) 5%, transparent); text-decoration:line-through">${t}</span>`).join('')}</div></div>
        </div>
      </div>`,
    },
    {
      id: 'pos-exemplos', label: 'Exemplos e situações', group: '05 · Personalidade',
      crumb: 'Personalidade', title: 'Exemplos e situações',
      sub: 'O tom de voz aplicado a situações do dia a dia e à linguagem digital.',
      render: () => `<div class="flow">
        <div>${T.lbl('Situações')}</div>
        <div class="grid cols-3">${[["Saudação",["E aí, gente! Como estão?","Fala, pessoal, como estão as coisas por aí?","Hello!"]],["Solução de problemas",["Vamos simplificar pra mensagem funcionar melhor.","Quem sabe marcamos um meet pra todo mundo ficar no mesmo ritmo?","A ideia é boa, só precisa entrar na hora certa.","Agora entra no timing certo."]],["Agradecimentos",["Valeu pela confiança no processo.","Valeu demais, seguimos juntos.","Obrigado por topar e seguir junto.","Boa provocação, ajudou a clarear."]]].map(([t, l]) => `<div class="box flow">${T.lbl(t)}${l.map((x) => T.body(`“${x}”`)).join('')}</div>`).join('')}</div>
        <div style="margin-top:12px">${T.lbl('Linguagem digital', INFO.digital)}</div>
        <div class="box flow">
          ${T.lbl('Hashtags', INFO.hashtags)}
          ${T.body(`${P} Regra geral: quantas usar, onde posicionar, maiúsculas/minúsculas.`)}
          ${T.table(['Hashtag', 'Quando usar'], [
            [`<span class="nt-name no-bold">#${B.name}</span>`, `${P} hashtag institucional`],
          ], '1fr 2fr')}
        </div>
        <div class="box flow">
          ${T.lbl('Emojis', INFO.emojis)}
          ${T.table(['Emoji', 'Quando usar'], [["🎬","Ao falar de produção audiovisual"],["🖍️","Ao falar de criação ou criatividade"],["🤯","Ao falar de ideias e inovação"],["🕺","Ao falar usando trocadilho com dança ou movimento"],["💥","Ao falar de lançamento de case"],["🫂","Ao falar sobre parcerias e clientes"],["🇧 🇾  🇭 🇾 🇵 🇮 🇪 🇷","Como assinatura na legenda de cases"]].map(([e, d]) => [`<span style="font-size:22px">${e}</span>`, d]), '1fr 2fr')}
        </div>
      </div>`,
    },
    {
      id: 'pos-imagens', label: 'Direção de imagens', group: '05 · Personalidade',
      crumb: 'Personalidade', title: 'Direção de imagens',
      sub: 'Que fotos escolher. O tratamento gráfico fica em Expressão visual → Layouts.',
      render: () => {
        const li = (a) => `<ul style="margin:0; padding-left:18px; display:flex; flex-direction:column; gap:6px">${a.map((x) => `<li>${x}</li>`).join('')}</ul>`;
        return `<div class="flow">
        <div class="box flow">${["A linguagem fotográfica da Hypier traduz o espírito criativo e ousado da marca por meio de imagens inesperadas, vibrantes e com um toque de estranhamento. As fotografias devem chamar atenção, despertar curiosidade e romper com o padrão visual comum da comunicação corporativa.","Para isso, o sistema fotográfico da marca se organiza em dois tipos principais de imagem: fotografias conceituais, baseadas em composições visuais inusitadas, e fotografias com pessoas em ângulos e enquadramentos pouco convencionais, que revelam o lado humano e próximo da marca."].map(T.body).join('')}</div>
        ${[["1 · Fotos conceituais",["As imagens conceituais exploram composições nonsense, utilizando objetos do cotidiano de maneira inesperada. Elementos comuns podem ganhar novas funções, combinações ou proporções, criando cenas curiosas e visualmente intrigantes.","Sempre que possível, inclua objetos ou superfícies que dialoguem com a paleta cromática da marca, seja em fundos, cenários ou pequenos elementos da composição. Nas fotografias nonsense, evite a presença de pessoas. No máximo, uma mão pode aparecer interagindo com o objeto ou composição.","Evite paisagens ou cenários complexos. A preferência é por fundos sólidos ou superfícies simples, que valorizem o objeto e a ideia central da imagem. Em vez de representar uma ideia de forma literal, busque criar metáforas visuais inesperadas."],["Objetos cotidianos combinados de forma inesperada","Objetos reposicionados ou reinterpretados para criar novas leituras","Composições minimalistas com apenas um ou dois elementos","Elementos com proporções estranhas ou deslocadas","Objetos que dialogam com temas de comunicação, criatividade, internet e cultura digital"],["Fundos sólidos ou superfícies simples","Cores alinhadas à paleta da marca e/ou contrastes vibrantes","Poucos elementos em cena","Composição direta e gráfica","Iluminação limpa, com sombras suaves ou bem definidas"],["Cenários complexos ou paisagens","Muitos elementos competindo na mesma imagem","Fotografias literais ou previsíveis","Composições muito poluídas"]],["2 · Fotos com pessoas",["Quando a fotografia envolver pessoas, como em conteúdos de time, bastidores ou cases, o foco deve ser revelar o lado humano e criativo da marca. Dar preferência a pessoas jovens, com estilo e personalidade marcantes, transmitindo autenticidade, espontaneidade e atitude.","As imagens devem parecer naturais e não encenadas, registrando momentos reais de interação, criação ou troca de ideias."],["Reuniões criativas ou brainstorms","Conversas espontâneas entre integrantes do time","Pessoas discutindo ideias ou referências","Bastidores de criação ou produção de conteúdo","Pessoas explorando materiais, sketches ou telas"],["Lentes mais abertas ou distorções sutis","Ângulos inesperados","Enquadramentos não convencionais","Movimento natural e pouca rigidez na pose","Luz natural ou iluminação leve e direta"],["Fotografias posadas","Ambientes corporativos genéricos","Cenários neutros ou sem personalidade","Expressões artificiais ou rígidas","Imagens muito formais ou institucionais"]]].map(([t, txt, ctx, est, ev]) => `<div class="box flow">
          ${T.lbl(t)}
          ${txt.map(T.body).join('')}
          <div class="grid cols-3">
            <div class="flow">${T.lbl('Nossos contextos preferidos')}<div class="copytext">${li(ctx)}</div></div>
            <div class="flow">${T.lbl('Estilo de composição')}<div class="copytext">${li(est)}</div></div>
            ${T.dd(false, 'Evitar', `<div class="copytext">${li(ev)}</div>`)}
          </div>
        </div>`).join('')}
        <div class="box flow">
          ${T.lbl('Linguagem fotográfica · exemplos')}
          <div class="grid cols-3">${[1, 2, 3, 4, 5, 6].map((i) => T.photo(`assets/fotos/foto-0${i}.jpg`, `exemplo ${i}`, 180)).join('')}</div>
        </div>
      </div>`;
      },
    },
    {
      id: 'pos-manifesto', label: 'Manifesto', group: '06 · Experiência',
      crumb: 'Experiência', title: 'Manifesto de marca',
      sub: 'O que inspira a todos. Colaboradores, parceiros e clientes.',
      render: () => `<div class="box flow manifesto">
        ${T.body(`${P} Parágrafo de abertura: a origem da ideia por trás de ${B.name}.`)}
        ${T.body(`${P} Parágrafo de contexto: o mundo em que a marca atua e o que está em jogo.`)}
        ${T.body(`${P} Parágrafo de compromisso: o que ${B.name} faz a respeito.`)}
        ${T.body(`${P} Parágrafo de fechamento: a missão em tom inspirador.`)}
      </div>`,
    },
    {
      id: 'pos-produto', label: 'Características', group: '06 · Experiência',
      crumb: 'Experiência', title: 'Características',
      sub: 'O que dá identidade aos nossos produtos e o que queremos que o cliente sinta.',
      render: () => `<div class="flow">
        <div class="box flow">
          ${T.lbl('O que queremos que o cliente sinta')}
          <p class="slogan">${P} uma frase que resume a sensação.</p>
          ${T.body(`${P} O que o cliente deve sentir ao entrar em contato com ${B.name}: ao abrir o produto, ao entrar na loja, ao receber uma entrega, ao usar o serviço.`)}
          ${T.chips(['Sensação 1', 'Sensação 2', 'Sensação 3'])}
        </div>
        <div class="box flow">
          ${T.lbl('O que dá identidade aos nossos produtos')}
          ${T.body(`${P} Os elementos físicos e sensoriais que tornam um produto reconhecível como ${B.name}, mesmo sem o logo.`)}
        </div>
        ${T.cards([
          ['Formatos', `${P} formatos específicos de embalagens, peças ou objetos.`],
          ['Texturas', `${P} texturas, materiais e sensação ao toque.`],
          ['Tamanhos', `${P} tamanhos, proporções e padrões de medida.`],
          ['Acabamentos', `${P} acabamentos, impressão, detalhes.`],
        ])}
        <div class="box flow">
          ${T.lbl('Pontos de contato')}
          ${T.table(['Onde', 'Como a identidade aparece', 'O que o cliente sente'], [
            ['<span class="nt-name">Produto / embalagem</span>', P, P],
            ['<span class="nt-name">Loja / espaço</span>', P, P],
            ['<span class="nt-name">Entrega / unboxing</span>', P, P],
            ['<span class="nt-name">Digital</span>', P, P],
          ], '1fr 1.4fr 1.4fr')}
        </div>
        <div class="grid cols-3">${[1, 2, 3].map((n) => T.photo(`assets/fotos/produto/produto-0${n}.jpg`, `referência ${n}`, 220)).join('')}</div>
      </div>`,
    },
    {
      id: 'pos-atendimento', label: 'Padrão de atendimento', group: '06 · Experiência',
      crumb: 'Experiência', title: 'Padrão de atendimento',
      sub: 'Os padrões que se repetem em todo atendimento.',
      render: () => `<div class="flow">
        <div class="box flow">${T.body(`${P} O que o cliente deve sentir em qualquer contato com ${B.name}.`)}</div>
        <div class="grid cols-3">${[
          ['01. Recepção', 'Como recebemos o cliente.'],
          ['02. Durante o atendimento', 'Postura, linguagem e tempo de resposta.'],
          ['03. Pós-atendimento', 'Acompanhamento e despedida.'],
        ].map(([t, d]) => `<div class="box flow">${T.lbl(t)}${T.body(`${P} ${d}`)}</div>`).join('')}</div>
        <div class="grid cols-2">
          ${T.dd(true, 'Sempre', T.body(`${P} atitudes obrigatórias.`))}
          ${T.dd(false, 'Nunca', T.body(`${P} atitudes a evitar.`))}
        </div>
      </div>`,
    },
    {
      id: 'pos-arquitetura-espaco', label: 'Direcionamento arquitetônico', group: '06 · Experiência',
      crumb: 'Experiência', title: 'Direcionamento arquitetônico',
      sub: 'Materiais, cores e acabamentos que fazem sentido no universo da marca.',
      render: () => `<div class="flow">
        <div class="box flow">${T.body(`${P} A sensação que os espaços de ${B.name} devem transmitir.`)}</div>
        ${T.cards([
          ['Materiais', `${P} materiais recomendados.`],
          ['Cores', `${P} como a paleta da marca se traduz no espaço.`],
          ['Acabamentos', `${P} texturas e acabamentos.`],
          ['Iluminação e mobiliário', `${P} orientações gerais.`],
        ])}
        <div class="grid cols-3">${[1, 2, 3].map((n) => T.photo(`assets/fotos/arquitetura/arquitetura-0${n}.jpg`, `referência ${n}`, 220)).join('')}</div>
      </div>`,
    },
    {
      id: 'pos-territorio', label: 'Território de marca', group: '06 · Experiência',
      crumb: 'Experiência', title: 'Território de marca',
      sub: 'Sobre o que falamos.',
      render: () => `<div class="flow">
        <div class="box flow">${T.lbl('Territórios')}${T.chips(['Território 1', 'Território 2', 'Território 3', 'Território 4'])}</div>
        ${T.cards([1, 2, 3, 4].map((n) => [`Território ${n}`, `${P} O que abordamos e exemplos de pautas/formatos.`]))}
        <div class="box flow">${T.lbl('Fora do nosso território')}${T.body(`${P} Temas sobre os quais a marca não fala.`)}</div>
        <div class="flow">
          <div>${T.lbl('Repositório de referências', INFO.repositorio)}${T.hint(B.agency && B.agency.refsEmail ? 'Cada link adicionado é enviado automaticamente para a agência e passa a aparecer para todos depois de aprovado.' : 'Links salvos neste navegador. Use “Exportar” para enviar à agência e tornar a lista permanente no manual.')}</div>
          ${T.linkRepo({
            id: 'territorio',
            categories: ['Território 1', 'Território 2', 'Território 3', 'Território 4'],
            /* referências permanentes (cole aqui o JSON exportado): { title, url, cat, note } */
            seed: [],
          })}
        </div>
      </div>`,
    },
  ];
  window.POS_SECTIONS.forEach((s) => { s.part = 'pos'; if (s.id !== 'capa') s.copyText = true; if (INFO[s.id] && !s.info) s.info = INFO[s.id]; });
})();
