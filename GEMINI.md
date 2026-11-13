# Instruções Locais de Projeto — Flowrish

> **Precedência:** Este arquivo local na raiz tem precedência absoluta sobre fluxos genéricos para este workspace.

## 1. Repositório Primário e Fluxo de Trabalho (REGRA OBRIGATÓRIA)
- **Repositório Oficial Independente:** Toda e qualquer alteração, criação de branch, commit, pull request e publicação de release DEVE ser feita exclusivamente a partir do repositório próprio independente:
  - **URL:** `https://github.com/nepotira/Flowrish.git` (`origin`)
  - **Proprietário:** `@nepotira`
  - **Tipo:** Repositório primário autônomo (não-fork).
- **Remotos Secundários (Apenas Leitura / Backup):**
  - `fork-flourish` (`https://github.com/nepotira/Flourish.git`): backup estático do fork legado. Não commitar diretamente.
  - `upstream-lorrany` (`https://github.com/lorranytorres44-jpg/Flourish.git`): repositório original para auditoria comparativa.

## 2. Padrões Inegociáveis
- **Zero Mocks:** Absolutamente proibido qualquer mock, array simulado ou dado fictício em código de produção. Fallbacks devem ser estáticos e locais (`assets/sem-capa.svg`).
- **Idiomas:** Conversa em português do Brasil; código, commits, nomes de branches, PRs e documentação pública no GitHub em inglês (com espelho `README.pt-BR.md`).
- **Git & SemVer:** Conventional Commits, um branch por tarefa, PR para cada merge na `main`, SemVer 2.0.0 (`vMAJOR.MINOR.PATCH`).
- **Segurança:** Nunca comitar senhas, tokens ou segredos. Ações destrutivas exigem confirmação explícita prévia.
