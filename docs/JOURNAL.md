# Diário de Bordo — Flowrish

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
