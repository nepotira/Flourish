# Changelog

Todas as mudanças notáveis deste projeto serão documentadas neste arquivo.

O formato segue [Keep a Changelog](https://keepachangelog.com/pt-BR/1.1.0/)
e este projeto adere ao [Semantic Versioning](https://semver.org/lang/pt-BR/).

## [Unreleased]
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
