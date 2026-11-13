# Changelog

Todas as mudanças notáveis deste projeto serão documentadas neste arquivo.

O formato segue [Keep a Changelog](https://keepachangelog.com/pt-BR/1.1.0/)
e este projeto adere ao [Semantic Versioning](https://semver.org/lang/pt-BR/).

## [Unreleased]
### Corrigido
- **Correção Geral e Harmonização do Modo Claro em Todo o Projeto**:
  - `css/variables.css`: Inversão correta de contraste para tokens globais em `[data-theme="light"]` (`--creme` remapeado para `#353620` em contextos de texto), eliminando texto branco/creme sobre fundo bege.
  - `css/components.css`: Navbar adaptável com fundo claro suave (`--navbar-bg`), cápsula de links com contraste (`--navbar-capsule-bg`), busca tátil com fundo branco e alternância automática da logo para `logo-horizontal-marrom.png` no tema claro.
  - `css/components.css`: Rodapé adaptativo com `--footer-bg` e `--footer-text`, prevenindo texto escuro sobre fundo escuro.
  - `index.html` & `css/pages/home.css`: Seção Hero reestruturada com `logomarca-marrom.png` no modo claro, título `h1` em verde oliva escuro legível (`--hero-h1-color`) e badge com contraste rose.
  - `css/base.css`: Botão secundário (`.btn-secondary`) otimizado no modo claro com gradiente verde oliva e texto branco tátil.
  - Telas internas (`cadastrar-livro.css`, `livro.css`, `perfil.css`, `anunciante.css`, `ajuda.css`, `biblioteca.css`): Substituição de `#353620` estático por `var(--surface-input)` e `var(--surface-chip)` para inputs e badges com visual limpo e legível em ambos os temas.

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
