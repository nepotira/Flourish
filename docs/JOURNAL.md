# Diário de Bordo — Flowrish

## 13 de Novembro de 2026 — Correção da Flor Hero: Miolo Escuro e Eliminação de Duplicação

- **Contexto**: Relato do operador indicando duplicação da flor na tela inicial (duas flores lado a lado no Hero) e ausência de alteração na cor do miolo central da flor no modo claro, em dissonância com o comportamento do logo da navbar onde tanto a tipografia quanto o miolo da flor alternam entre creme e verde oliva escuro (`#2D2E1B`).
- **Ações Realizadas**:
  1. `assets/logomarca-dark-olive.png`: Regeneração de alta fidelidade remapeando com antialiasing suave tanto as letras de "Flowrish" ($Y \ge 265$) quanto o miolo central da flor 3D ($X \in [187, 216], Y \in [122, 150]$) para Verde Oliva escuro (`#2D2E1B` / `rgb(48, 49, 29)`), preservando 100% dos pixels das pétalas 3D Soft Clay e suas sombras originais.
  2. `index.html`: Substituição dos dois elementos `<img>` no Hero por uma única tag canônica `<img id="heroLogomarca">` com script em linha de sincronização inicial imediata, tornando a duplicação fisicamente impossível sob qualquer estado de cache do navegador. Inserção de query string de cache-busting (`?v=1.3.3`) em todos os links CSS.
  3. `js/home.js`: Registro de listener para o evento `tdl:theme-changed` com troca dinâmica do `src` da logomarca entre clara e escura sincronizada em tempo real com o botão da navbar.
  4. `css/components.css`: Limpeza das regras legadas de display de `.hero-logo-*`.
- **Validação**: 11/11 testes unitários aprovados no Vitest (`npm test`). Servidor local mantido ativo na porta 8080 e DOM verificado via curl.

## 13 de Novembro de 2026 — Alternância de Cor do Texto Flowrish no Hero

- **Contexto**: Relato do operador com captura de tela demonstrando que, no modo claro, o texto "Flowrish" sob a grande flor 3D do Hero permanecia em cor creme clara (`#F6EED9`), perdendo o contraste com o fundo marfim, enquanto na navbar o texto já alternava corretamente para verde oliva escuro.
- **Ações Realizadas**:
  1. `assets/logomarca-dark-olive.png`: Geração de asset preservando 100% da flor 3D suave original e remapeando os pixels das letras de "Flowrish" para Verde Oliva escuro (`#2D2E1B` / `rgb(48, 49, 29)`), idêntico ao logotipo escuro da navbar.
  2. `index.html`: Inclusão de `.hero-logo-dark` (`logomarca.png`) e `.hero-logo-light` (`logomarca-dark-olive.png`).
  3. `css/components.css`: Alternância visual entre `.hero-logo-dark` no modo escuro e `.hero-logo-light` no modo claro.
- **Validação**: 11/11 testes unitários aprovados no Vitest (`npm test`). Servidor local mantido ativo na porta 8080.

## 13 de Novembro de 2026 — Correção de Incoerência no Login e Auditoria do Modo Claro

- **Contexto**: Relato do operador com captura de tela da página de login demonstrando painel esquerdo visual com fundo escuro e textos/pílulas escuros sobrepostos (`#2D2E1B` sobre verde oliva escuro), criando uma quebra e incoerência com o lado direito do formulário. Pedido de auditoria em todas as outras telas do projeto para sanar erros visuais similares no modo claro.
- **Ações Realizadas**:
  1. `css/pages/auth.css`: Redesenho do painel visual (`.auth-visual`) no modo claro com fundo marfim suave (`linear-gradient(155deg, #FAF7EE 0%, #EFEBE0 100%)`), pílulas de benefícios 3D em branco e creme suave com texto nítido em Verde Oliva escuro (`#2D2E1B`), e logo floral iluminada. Links e rodapés corrigidos contra texto branco em fundo branco no hover.
  2. `css/avaliacoes.css`: Substituição de textos beges estáticos legados (`#F6EED9`) por variáveis dinâmicas (`var(--text)` e `var(--text-muted)`), restaurando o contraste de avaliações e comentários em fundo claro.
  3. `css/pages/biblioteca.css`: Correção do campo de busca que escurecia para `#3B3C23` no `:focus-within` em tema claro; chips de gênero e botão de filtros integrados a `var(--pill-btn-bg)` e `var(--lib-chip-bg)`.
  4. `css/pages/livro.css`: Botão "Avaliar leitor" e controles do acervo migrados para `var(--pill-btn-bg)` e `var(--pill-btn-text)`; botões de fechar modal ajustados para foco e hover contrastantes.
  5. `css/components.css`: Tags de conservação e pontos sobre as fotos de capa garantidas em branco puro (`#FFFFFF`); chips de gêneros favoritos e modal de login obrigatório (`.login-aviso`) harmonizados.
- **Validação**: 11/11 testes unitários aprovados no Vitest (`npm test`). Servidor local mantido ativo e todas as 11 rotas HTML validadas com status HTTP 200.

## 13 de Novembro de 2026 — Refinamento Conciso do Modo Claro e Restauração da Flor 3D

- **Contexto**: Relato do operador indicando design não conciso no modo claro e imagem da flor distorcida no Hero (`assets/logomarca-marrom.png`).
- **Ações Realizadas**:
  1. `index.html` & `css/pages/home.css`: Restauração da autêntica obra de arte 3D Soft Clay (`assets/logomarca.png`) com sombra suave adaptada e remoção definitiva do rascunho com contorno distorcido.
  2. `assets/logo-horizontal-dark-olive.png`: Criação de asset de alta fidelidade em Verde Oliva escuro (`#2D2E1B`) preservando o antialiasing e a flor original para o modo claro.
  3. `js/navbar.js`: Troca para a nova logo escura no modo claro e adição de classe/estilo 3D primário para o botão "Entrar" (`.btn-primary.nav-login`).
  4. `css/variables.css`: Harmonização concisa da paleta do modo claro (marfim `#F7F5EE`, texto `#2D2E1B`, botões em harmonia tátil e superfícies alinhadas ao DESIGN.md).
  5. `css/base.css`: Redesenho do `.btn-secondary` no modo claro para pílula 3D creme/branco suave com texto escuro, eliminando o bloco verde oliva pesado.
  6. `css/pages/auth.css` & `css/pages/biblioteca.css`: Ajuste de caixas de formulário, inputs brancos e chips de filtro para o tema claro.
- **Validação**: 11/11 testes unitários aprovados no Vitest (`npm test`). Servidor local mantido ativo na porta 8080.

## 13 de Novembro de 2026 — Correção Geral de Contraste e Modo Claro

- **Contexto**: Relato do operador com captura de tela demonstrando que, ao ativar o modo claro, a Navbar permanecia em verde oliva escuro enquanto a página ficava clara, títulos com `color: var(--creme)` ficavam invisíveis (creme sobre bege) e a flor/tipografia do Hero perdiam legibilidade.
- **Ações Realizadas**:
  1. `css/variables.css`: Mapeamento de alto contraste para o tema claro (`[data-theme="light"]`), invertendo `--creme` para `#353620` em textos, criando tokens adaptáveis para Navbar, Hero, Rodapé, Inputs e Chips.
  2. `css/components.css`: Navbar adaptável com suporte a modo claro, troca de logo automática para a versão marrom (`assets/logo-horizontal-marrom.png`), rodapé adaptável sem conflito de cores e chips táteis claros.
  3. `index.html` & `css/pages/home.css`: Hero adaptável com `assets/logomarca-marrom.png` em modo claro e título escuro de alto contraste.
  4. Telas internas (`cadastrar-livro`, `livro`, `perfil`, `anunciante`, `ajuda`, `biblioteca`): Inputs e chips migrados para `var(--surface-input)` e `var(--surface-chip)`.
- **Validação**: 11/11 testes unitários aprovados no Vitest (`npm test`). Servidor local mantido ativo para validação antes de envio.

## 13 de Novembro de 2026 — Harmonização Visual Completa Claymorphism Soft 3D

- **Contexto**: Auditoria exaustiva de todas as 11 páginas HTML e 14 arquivos CSS para localizar e eliminar qualquer inconsistência visual residual (resquícios de protótipos antigos, fontes desalinhadas, cores legadas e ausência de profundidade).
- **Ações Realizadas**:
  1. `css/pages/cadastrar-livro.css`: Modernização completa de cartões de formulário com `var(--surface-card)`, `var(--border)`, `var(--shadow-clay-card)`, upload de fotos com arrastar e soltar suave, inputs escavados em `#353620` e botões táteis.
  2. `css/pages/livro.css`: Correção do contraste de texto para `var(--creme)` e `var(--text-muted)` sobre o fundo oliva, cartão do anunciante elevado e botão de troca por WhatsApp com relevo tátil.
  3. `css/pages/ajuda.css`: Formulário de contato e dúvidas alinhado com o design system tátil e inputs escavados.
  4. `css/pages/anunciante.css`: Ajuste de espaçamento vertical e alinhamento de chips de localização.
  5. `css/pages/perfil.css`: Eliminação do fundo plano bege (`--pf-cream`) e fontes legadas (`Oswald`, `Open Sans`, `DM Sans`). Criação do cabeçalho em cartão elevado com badge de localização em relevo interno, abas com gradiente rosa tátil e formulário de configurações 3D.
  6. `css/avaliacoes.css`: Atualização de fontes e cores legadas para os tokens oficiais.
- **Validação**:
  - 10/10 testes unitários Vitest aprovados (`npm test`).
  - Todas as 11 rotas HTML testadas com status HTTP 200 no servidor local em `http://localhost:8080`.
