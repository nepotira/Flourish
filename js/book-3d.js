/**
 * Flowrish — 3D Scrollytelling Book Controller
 * Otimizado para alta performance (60fps) com GPU transforms e Lerp.
 */

export function init3DBook() {
  const bookEl = document.getElementById('book3D');
  const bookArea = document.getElementById('bookArea');
  const stageEl = document.getElementById('bookStage');
  if (!bookEl || !bookArea || !stageEl) return;

  // Elementos internos do livro para atualização dinâmica de conteúdo
  const pageStepBadge = document.getElementById('pageStepBadge');
  const pageStepTitle = document.getElementById('pageStepTitle');
  const pageStepDesc = document.getElementById('pageStepDesc');
  const pageChapter = document.getElementById('pageChapter');
  const bookHintText = document.getElementById('bookHintText');

  // Estado interno interpolado (Lerp para transições suaves)
  let currentRotY = -22;
  let targetRotY = -22;
  let currentRotX = 10;
  let targetRotX = 10;
  let currentTranslateY = 0;
  let targetTranslateY = 0;
  let isOpen = false;
  let manualOverride = false;
  let isTicking = false;

  // Dados dos passos para sincronizar com a seção "Como funciona"
  const STEPS_DATA = [
    {
      chapter: 'Capítulo 1 • O Anúncio',
      badge: 'Passo 1 de 4',
      title: 'Anuncie seus livros',
      desc: 'Dê uma nova história ao livro que já leu. Preencha pelo ISBN ou manual com capa e fotos reais.'
    },
    {
      chapter: 'Capítulo 2 • A Busca',
      badge: 'Passo 2 de 4',
      title: 'Encontre o que deseja',
      desc: 'Explore centenas de títulos no catálogo com busca em tempo real e filtros por gênero literário.'
    },
    {
      chapter: 'Capítulo 3 • A Conexão',
      badge: 'Passo 3 de 4',
      title: 'Combine pelo WhatsApp',
      desc: 'Converse direto com o leitor sem intermediários ou burocracia. Combine o envio ou encontro presencial.'
    },
    {
      chapter: 'Capítulo 4 • A Comunidade',
      badge: 'Passo 4 de 4',
      title: 'Receba e avalie',
      desc: 'Receba sua nova história e deixe sua avaliação no perfil do leitor para fortalecer a confiança.'
    }
  ];

  // Seções para rastreamento de scroll
  const heroSection = document.querySelector('.hero');
  const stepsSection = document.getElementById('como-funciona');
  const booksSection = document.getElementById('destaques');
  const benefitsSection = document.getElementById('beneficios');
  const ctaSection = document.getElementById('depoimentos');

  // Atualiza os textos da página direita do livro
  function updatePageContent(data) {
    if (!data) return;
    if (pageChapter && pageChapter.textContent !== data.chapter) {
      pageChapter.textContent = data.chapter;
    }
    if (pageStepBadge && pageStepBadge.textContent !== data.badge) {
      pageStepBadge.textContent = data.badge;
    }
    if (pageStepTitle && pageStepTitle.textContent !== data.title) {
      pageStepTitle.textContent = data.title;
    }
    if (pageStepDesc && pageStepDesc.textContent !== data.desc) {
      pageStepDesc.textContent = data.desc;
    }
  }

  // Define se o livro está aberto ou fechado
  function setBookOpen(open) {
    if (isOpen === open) return;
    isOpen = open;
    if (isOpen) {
      bookArea.classList.add('is-open');
      if (bookHintText) bookHintText.textContent = 'Clique para fechar o livro';
    } else {
      bookArea.classList.remove('is-open');
      if (bookHintText) bookHintText.textContent = 'Role para abrir ou clique';
    }
  }

  // Cálculo de Scroll e Parallax com baixa carga de CPU
  function updateScrollState() {
    if (manualOverride) return;

    const scrollY = window.scrollY || window.pageYOffset;
    const windowH = window.innerHeight;

    // Posições relativas das seções
    const stepsRect = stepsSection?.getBoundingClientRect();
    const booksRect = booksSection?.getBoundingClientRect();
    const benefitsRect = benefitsSection?.getBoundingClientRect();
    const ctaRect = ctaSection?.getBoundingClientRect();

    // 1. Hero (Primeira Seção): Livro Fechado
    if (scrollY < (heroSection?.offsetHeight || 600) * 0.45) {
      setBookOpen(false);
      targetRotY = -22;
      targetRotX = 10;
      targetTranslateY = Math.min(scrollY * 0.08, 40); // Efeito suave de flutuação parallax
      return;
    }

    // 2. Como Funciona (Segunda Seção): Livro Aberto com Passos
    if (stepsRect && stepsRect.top < windowH * 0.75 && stepsRect.bottom > windowH * 0.25) {
      setBookOpen(true);
      targetRotY = -6; // Mais frontal para leitura confortável
      targetRotX = 4;
      targetTranslateY = Math.sin(scrollY * 0.003) * 8; // Leve balanço natural

      // Identifica qual dos 4 passos está em foco
      const stepCards = stepsSection.querySelectorAll('.step-card');
      let activeIndex = 0;
      stepCards.forEach((card, idx) => {
        const rect = card.getBoundingClientRect();
        if (rect.top < windowH * 0.6) {
          activeIndex = idx;
        }
      });
      updatePageContent(STEPS_DATA[activeIndex] || STEPS_DATA[0]);
      return;
    }

    // 3. Livros Mais Amados (Terceira Seção): Virada de página / Destaques
    if (booksRect && booksRect.top < windowH * 0.75 && booksRect.bottom > windowH * 0.25) {
      setBookOpen(true);
      targetRotY = -12;
      targetRotX = 6;
      targetTranslateY = -10;
      updatePageContent({
        chapter: 'Capítulo Especial • Acervo',
        badge: 'Em Alta',
        title: 'Livros Mais Amados',
        desc: 'Histórias que estão circulando entre leitores de todo o país. Encontre seu próximo favorito!'
      });
      return;
    }

    // 4. Benefícios e CTA (Seções Finais): Selo da comunidade
    if ((benefitsRect && benefitsRect.top < windowH * 0.75) || (ctaRect && ctaRect.top < windowH * 0.8)) {
      setBookOpen(true);
      targetRotY = -4;
      targetRotX = 3;
      targetTranslateY = 0;
      updatePageContent({
        chapter: 'Epílogo • Junte-se a Nós',
        badge: 'Comunidade Flowrish',
        title: 'Comece a sua jornada',
        desc: 'Cadastre seus livros gratuitamente e combine sua primeira troca pelo WhatsApp hoje mesmo!'
      });
      return;
    }

    // Se estiver entre transições
    targetTranslateY = (scrollY * 0.04) % 30;
  }

  // Loop de Animação com requestAnimationFrame (GPU-Friendly)
  function renderLoop() {
    // Interpolação Linear (Lerp) para fluidez absoluta em qualquer taxa de Hz
    const lerpFactor = 0.085;
    currentRotY += (targetRotY - currentRotY) * lerpFactor;
    currentRotX += (targetRotX - currentRotX) * lerpFactor;
    currentTranslateY += (targetTranslateY - currentTranslateY) * lerpFactor;

    // Aplica a transformação 3D no elemento
    bookEl.style.transform = `translate3d(0, ${currentTranslateY.toFixed(2)}px, 0) rotateX(${currentRotX.toFixed(2)}deg) rotateY(${currentRotY.toFixed(2)}deg)`;

    // Continua rodando suavemente
    requestAnimationFrame(renderLoop);
  }
  requestAnimationFrame(renderLoop);

  // Listener de Scroll passivo (não bloqueia a thread principal)
  window.addEventListener('scroll', () => {
    if (!isTicking) {
      window.requestAnimationFrame(() => {
        updateScrollState();
        isTicking = false;
      });
      isTicking = true;
    }
  }, { passive: true });

  // Parallax interativo com o mouse no Desktop
  if (window.matchMedia('(min-width: 992px)').matches) {
    window.addEventListener('mousemove', (e) => {
      const centerX = window.innerWidth * 0.75;
      const centerY = window.innerHeight * 0.5;
      const mouseDeltaX = (e.clientX - centerX) / (window.innerWidth * 0.5);
      const mouseDeltaY = (e.clientY - centerY) / (window.innerHeight * 0.5);

      // Leve oscilação de ±5 graus conforme a posição do ponteiro
      if (!manualOverride) {
        targetRotY += mouseDeltaX * 0.35;
        targetRotX -= mouseDeltaY * 0.35;
      }
    }, { passive: true });
  }

  // Clique interativo: permite ao usuário abrir e fechar manualmente quando quiser
  bookArea.addEventListener('click', () => {
    manualOverride = true;
    setBookOpen(!isOpen);

    // Retoma o comportamento de scroll após 3.5 segundos sem interação
    clearTimeout(bookArea._overrideTimer);
    bookArea._overrideTimer = setTimeout(() => {
      manualOverride = false;
      updateScrollState();
    }, 3500);
  });

  // Inicializa o estado com a posição atual
  updatePageContent(STEPS_DATA[0]);
  updateScrollState();
}
