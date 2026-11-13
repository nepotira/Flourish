# Lições Aprendidas e Regras de Projeto — Flowrish

1. **Zero Mocks (Regra Estrita)**:
   - Proibido qualquer tipo de dado simulado, mock ou array fixo de teste no código de produção.
   - Todo dado exibido (livros, usuários, avaliações, estatísticas, mensagens) deve vir diretamente do banco de dados (Firebase Firestore) ou de APIs públicas integradas (Google Books).
   - Usuários novos sem avaliação devem exibir explicitamente "Novo leitor" / "Sem avaliações", nunca notas ou estrelas fictícias.

2. **Multiplataforma (Linux / Windows)**:
   - Manter sempre pares de scripts de execução: `.sh` para Linux/macOS e `.bat` para Windows.
   - O repositório utiliza `.gitattributes` com `* text=auto eol=lf` para prevenir que ferramentas de Git no Linux marquem arquivos inteiros como modificados por causa de `\r\n`.

3. **Arquitetura sem Build Pesado**:
   - O projeto utiliza ES Modules nativos no navegador (`<script type="module">`). Dependências de teste (Vitest) rodam via Node.js local, mas o runtime web não depende de bundler (Webpack/Vite) para servir páginas, garantindo leveza e carregamento direto no localhost.

4. **Padrão Completo para Repositório Público (Regra de Excelência)**:
   - Nenhum repositório público pode ficar sem os artefatos fundamentais de governança: `README.md` visual e detalhado, `LICENSE` oficial com copyright, `NOTICE`, `CONTRIBUTING.md`, `SECURITY.md`, `THIRD_PARTY_LICENSES.md`, `AGENTS.md` e templates de Issue/PR em `.github/`.
   - Entregas de versão SemVer exigem tag anotada e publicação formal de Release no GitHub via `gh release create` contendo notas de release derivadas do `CHANGELOG.md`.

5. **Repositório Primário Independente (`nepotira/Flowrish`)**:
   - Toda alteração, desenvolvimento, ramo e entrega do projeto deve obrigatoriamente ser originada e sincronizada no repositório `nepotira/Flowrish` (`origin`). O antigo fork no GitHub permanece intacto exclusivamente como ponto de restauração/backup.

6. **Ciclo de Servidor Local vs. GitHub Pages**:
   - Durante desenvolvimento ativo e testes iterativos locais, manter o servidor `localhost:8080` rodando para permitir a pré-visualização imediata.
   - Assim que o usuário aprovar e solicitar a aplicação das mudanças no repositório (com commit, merge na `main` e disparo do CI/CD), o processo do `localhost` pode ser encerrado, pois a visualização passa a ser feita diretamente na URL de produção do GitHub Pages: `https://nepotira.github.io/Flowrish/`.
