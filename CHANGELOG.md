# Changelog

Todas as mudanças notáveis deste projeto serão documentadas neste arquivo.

O formato segue [Keep a Changelog](https://keepachangelog.com/pt-BR/1.1.0/)
e este projeto adere ao [Semantic Versioning](https://semver.org/lang/pt-BR/).

## [Unreleased]
### Corrigido
- **Eliminação de Duplicação da Flor e Miolo Escuro no Hero (Modo Claro)**:
  - `assets/logomarca-dark-olive.png`: Regeneração da imagem da logomarca adaptada ao modo claro remapeando o miolo central da flor 3D (`#2D2E1B` / `rgb(48, 49, 29)`) além do texto "Flowrish", combinando perfeitamente com a flor do logotipo da navbar superior.
  - `index.html`: Migração para elemento único canônico `<img id="heroLogomarca">` com sincronização inicial imediata e adição de cache-busting (`?v=1.3.3`) aos estilos, erradicando qualquer possibilidade de renderização de flores duplicadas lado a lado.
  - `js/home.js`: Integração com evento `tdl:theme-changed` para alternância suave do `src` em tempo real ao clicar no botão de tema.
  - `css/components.css`: Remoção das regras obsoletas de display de imagens múltiplas no Hero.
- **Alternância Automática da Cor do Texto "Flowrish" no Hero (Modo Claro/Escuro)**:
  - `assets/logomarca-dark-olive.png`: Geração do asset do Hero em alta definição preservando 100% da flor 3D suave original e mapeando o texto "Flowrish" para Verde Oliva escuro (`#2D2E1B` / `#30311D`), idêntico à tipografia do logo da navbar.
  - `index.html` & `css/components.css`: Suporte a alternância automática entre `.hero-logo-dark` (texto claro) no modo escuro e `.hero-logo-light` (texto escuro) no modo claro, resolvendo o texto que ficava em creme desbotado sobre o fundo marfim.
- **Correção Abrangente do Modo Claro (Autenticação, Avaliações, Biblioteca e Detalhes do Livro)**:
  - `css/pages/auth.css`: Redesenho completo do painel esquerdo (`.auth-visual`) no modo claro com fundo marfim acolhedor (`#FAF7EE` a `#EFEBE0`), tipografia nítida em Verde Oliva escuro (`#2D2E1B`), pílulas de benefícios 3D em branco/creme suave e eliminação definitiva do contraste escuro-sobre-escuro na tela de login, cadastro e redefinição de senha. Links e botões de rodapé corrigidos para não desaparecerem em branco no hover.
  - `css/avaliacoes.css`: Substituição de textos beges estáticos legados (`#F6EED9`) por variáveis semânticas `var(--text)` e `var(--text-muted)`, restaurando legibilidade total das avaliações de perfil no modo claro.
  - `css/pages/biblioteca.css`: Correção do campo de busca que escurecia indevidamente para verde oliva escuro (`#3B3C23`) no foco; botões de filtro e chips de gênero vinculados a `var(--pill-btn-bg)` e `var(--lib-chip-bg)` para visual 3D claro consistente.
  - `css/pages/livro.css`: Botão "Avaliar leitor" e controles do dono migrados para `var(--pill-btn-bg)` e `var(--pill-btn-text)`; ícone de favorito e modais de proposta/avaliação adaptados ao fundo claro.
  - `css/components.css`: Tags de conservação e pontos sobre as capas dos livros com cor branca explícita (`#FFFFFF`); chips de gêneros favoritos e modal de login obrigatório (`.login-aviso`) harmonizados.
  - `css/base.css`: Modais suspensos com sombras táteis suaves em marrom-oliva para o tema claro.

## [1.3.0] - 2026-11-13
### Alterado
- **Harmonização Integral de Telas e Subpáginas com Claymorphism Soft 3D**:
  - `perfil.html` / `css/pages/perfil.css`: Eliminação do fundo bege plano residual (`--pf-cream`) e tipografia legada (`Oswald`, `Open Sans`, `DM Sans`); reconstrução com cabeçalho em cartão Claymorphic elevado, badge de localização escavado em relevo interno (`#353620`), abas estilo pill tátil com gradiente rosa ativo (`#EAA6B0` -> `#DF949D`) e formulário de configurações com inputs 3D e botão primário tátil.
  - `cadastrar-livro.html` / `css/pages/cadastrar-livro.css`: Reconstrução completa dos cartões de formulário, upload de capa com drag & drop com relevo suave, inputs escavados com sombras de profundidade e botões de ação Claymorphism.
  - `livro.html` / `css/pages/livro.css`: Correção de contraste de textos e metadados com `var(--creme)` e `var(--text-muted)`, cartão de anunciante elevado em Claymorphic e botão de combinação de troca pelo WhatsApp com relevo tátil.
  - `ajuda.html` / `css/pages/ajuda.css`: Cartão de contato harmonizado em relevo suave, inputs com profundidade tátil e botão primário 3D.
  - `anunciante.html` / `css/pages/anunciante.css`: Padronização de espaçamentos e harmonização de badges e títulos.
  - `css/avaliacoes.css`: Substituição de fontes e cores legadas por tokens do design system (`var(--rose-clay)` e `var(--font-body)`).
### Corrigido
- **Restauração e Harmonização do Claymorphism Soft 3D**:
  - Restauração integral da página inicial autêntica com o Hero 3D, selo tátil em relevo, logomarca tridimensional iluminada (`assets/logomarca.png`), grade de 4 passos, carrossel de livros e banner CTA.
  - Recuperação dos 6 GIFs animados táteis da seção de benefícios (`sustentavel2.gif`, `favorito2.gif`, `aperto-de-mao2.gif`, `caixa-de-entrega2.gif`, `missao2.gif`, `bater2papo.gif`) e do guia formal `DESIGN.md`.
  - Correção do erro fatal de JavaScript (`ReferenceError: initTheme is not defined`) em `js/navbar.js`, importando `initTheme` de `./theme.js`.
  - Padronização de tipografia (`Fredoka` & `Nunito`), prevenção de flash do modo escuro e ícones de aba em todas as 11 páginas da aplicação.
  - Harmonização completa e sem conflitos com as novas funções de troca direta por WhatsApp, gestão do Acervo (`acervo.html`) e perfil do Anunciante (`anunciante.html`).

### Adicionado
- **Adaptação 100% Funcional para Celulares (Mobile First)**:
  - Barra de navegação inferior flutuante (*Bottom Navigation Bar*) Claymorphism para navegação rápida com o polegar (Início, Biblioteca, Anunciar, Acervo, Perfil).
  - Suporte a Progressive Web App (PWA) via `manifest.json` e meta tags para instalação na tela de início de smartphones Android e iOS.
  - Bloqueio inteligente de rolagem do fundo (`body-scroll-lock`) ao abrir a gaveta móvel (*drawer*).
  - Prevenção de auto-zoom indesejado no iOS Safari com padronização de fontes de input para 16px mínimo.
  - Carrossel horizontal deslizável com o dedo para chips de gêneros literários na Biblioteca e no Acervo.
  - Bottom Sheet nativo deslizante de baixo para cima para o modal de propostas de troca pelo WhatsApp em `livro.html`.
  - Grade responsiva otimizada de 2 colunas para exibição fluida de livros em celulares de 360px a 480px.
  - Otimização de botões táteis no Acervo (44x44px), abas em segmented control no Perfil e eliminação de margens excessivas no Anunciante.

## [1.2.0] - 2026-11-03
### Adicionado
- **Rework Visual Claymorphism Soft 3D**: Design system tátil completo (paleta oliva escuro, creme e rosa antigo, sombras 3D em camadas `inset` e `drop-shadow`, cantos arredondados orgânicos e botões com relevo).
- **Alternância de Tema (Dark / Light Mode)**: Suporte completo a modo escuro e modo claro com persistência em `localStorage` e sincronização automática entre abas.
- **Micro-interações e Animações**: Folha de estilo `css/animations.css` com flutuação 3D, hover lift em cartões e transições táteis.
- **Adaptação Multiplataforma (Linux & Windows)**:
  - Scripts de inicialização local: `iniciar-localhost.sh` (bash executável) e `iniciar-localhost.bat`.
  - Normalização de quebras de linha com `.gitattributes` (`* text=auto eol=lf`).
  - Servidor local HTTP nativo em Node.js (`server.js`) sem necessidade de bundlers externos.
- **Suíte de Portabilidade Antigravity**:
  - Scripts `tools/export/export_session.py`, `exportar-sessao.sh` e `exportar-sessao.bat` para exportação integral da conversa, histórico e estado de projeto.
  - Memória de projeto em `.agents/memory/` (`STATE.md`, `HANDOFF.md`, `LESSONS.md`).
- **Resiliência com Dados Reais**:
  - Asset vetorial local `assets/sem-capa.svg` substituindo serviços externos de placeholder (`placehold.co`).
  - Carrossel da página inicial dinâmico com fallback para livros mais recentes do catálogo real quando há poucos livros com curtidas.

### Alterado
- **Arquitetura Oficial de Trocas**: Integração direta com WhatsApp para combinação ágil de trocas livro por livro entre leitores locais, com mensagens de respeito e recomendação dos Correios (Clique e Retire).
- **Páginas e Módulos Refatorados**:
  - `acervo.html` e `js/acervo.js`: Gestão de livros anunciados pelo usuário com botões táteis de edição e exclusão.
  - `anunciante.html` e `js/anunciante.js`: Perfil público do leitor anunciante com acervo e avaliações recebidas.
  - `js/reviews.js` e `css/avaliacoes.css`: Avaliações autênticas de perfil com cálculo de média aritmética real.

### Removido
- Removido qualquer dado mockado ou simulado no código de produção.
- Removidos placeholders externos que causavam dependência de rede em ambiente offline.

## [1.1.0] - 2026-10-29
### Adicionado
- Regras de negócio essenciais e testes automatizados no Vitest.
- Modo claro/escuro inicial e validações de formulário.

## [1.0.0] - 2026-10-16
### Adicionado
- Lançamento inicial da plataforma Flourish para troca de livros entre leitores.
