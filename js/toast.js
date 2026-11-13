// Flowrish — Sistema Moderno de Notificações / Toasts (Claymorphism Soft 3D)

const ICONS = {
  error: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/></svg>`,
  success: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"/><path d="M8 12.5l2.5 2.5 5.5-5.5"/></svg>`,
  warning: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>`,
  info: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>`,
};

export function inferToastType(titulo = '', texto = '') {
  const full = `${titulo} ${texto}`.toLowerCase();
  if (/erro|inválid|falha|fraca|não coincidem|indisponível|não foi possível|não encontrado|mínima|aceite/.test(full)) {
    return 'error';
  }
  if (/sucesso|realizado|criada|enviad[ao]|redefinida|publicad[ao]|atualizado|adicionado|conectad[ao]|removid[ao]/.test(full)) {
    return 'success';
  }
  if (/atenção|aviso|preencha|obrigatóri|descreva|informe/.test(full)) {
    return 'warning';
  }
  return 'info';
}

function escapeHTML(str) {
  if (typeof str !== 'string') return '';
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function getOrCreateContainer() {
  if (typeof document === 'undefined') return null;
  let container = document.getElementById('toastContainer');
  if (!container) {
    container = document.createElement('div');
    container.id = 'toastContainer';
    container.className = 'toast-container';
    container.setAttribute('aria-live', 'polite');
    container.setAttribute('aria-atomic', 'true');
    document.body.appendChild(container);
  }
  return container;
}

export function showToast(titulo, texto = '', tipo = '', duracao = 4500) {
  if (!titulo && !texto) return null;
  if (typeof document === 'undefined') return null;

  const resolvedType = tipo && ICONS[tipo] ? tipo : inferToastType(titulo, texto);
  const container = getOrCreateContainer();
  if (!container) return null;

  const toast = document.createElement('div');
  toast.className = `toast toast--${resolvedType}`;
  toast.setAttribute('role', resolvedType === 'error' ? 'alert' : 'status');

  const iconSvg = ICONS[resolvedType] || ICONS.info;
  const bodyText = texto ? `<p class="toast-desc">${escapeHTML(texto)}</p>` : '';

  toast.innerHTML = `
    <div class="toast-icon-badge" aria-hidden="true">
      ${iconSvg}
    </div>
    <div class="toast-content">
      <h4 class="toast-title">${escapeHTML(titulo)}</h4>
      ${bodyText}
    </div>
    <button class="toast-close" type="button" aria-label="Fechar notificação">
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
        <line x1="18" y1="6" x2="6" y2="18"/>
        <line x1="6" y1="6" x2="18" y2="18"/>
      </svg>
    </button>
  `;

  let timeoutId = null;
  let remainingTime = duracao;
  let startTime = Date.now();

  const dismiss = () => {
    if (toast.classList.contains('toast--dismissing')) return;
    toast.classList.add('toast--dismissing');
    clearTimeout(timeoutId);
    toast.addEventListener('animationend', () => {
      toast.remove();
      if (container && container.children.length === 0) {
        container.remove();
      }
    }, { once: true });
  };

  const startTimer = () => {
    startTime = Date.now();
    timeoutId = setTimeout(dismiss, remainingTime);
  };

  const pauseTimer = () => {
    clearTimeout(timeoutId);
    remainingTime -= (Date.now() - startTime);
  };

  toast.querySelector('.toast-close')?.addEventListener('click', (e) => {
    e.stopPropagation();
    dismiss();
  });

  toast.addEventListener('mouseenter', pauseTimer);
  toast.addEventListener('mouseleave', () => {
    if (remainingTime > 0) startTimer();
    else dismiss();
  });

  // Limite de até 3 toasts simultâneos
  while (container.children.length >= 3) {
    const oldest = container.firstElementChild;
    oldest.remove();
  }

  container.appendChild(toast);
  startTimer();

  return { dismiss };
}
