import { describe, it, expect } from 'vitest';
import fs from 'node:fs';
import path from 'node:path';
import { bookGeneros, GENEROS, ESTADOS_CONSERVACAO } from '../../js/data.js';
import * as theme from '../../js/theme.js';

describe('theme system contracts', () => {
  it('exporta as funcoes essenciais de tema para prevencao de ReferenceError', () => {
    expect(typeof theme.initTheme).toBe('function');
    expect(typeof theme.getTheme).toBe('function');
    expect(typeof theme.toggleTheme).toBe('function');
    expect(typeof theme.setTheme).toBe('function');
  });

  it('garante tokens de alto contraste para o modo claro e escuro em variables.css', () => {
    const cssPath = path.resolve(__dirname, '../../css/variables.css');
    const cssContent = fs.readFileSync(cssPath, 'utf8');
    expect(cssContent).toContain('[data-theme="light"]');
    expect(cssContent).toContain('--navbar-bg');
    expect(cssContent).toContain('--footer-bg');
    expect(cssContent).toContain('--surface-input');
  });
});

describe('business domain (data.js)', () => {
  it('extrai generos de livro com array generos', () => {
    expect(bookGeneros({ generos: ['Romance', 'Fantasia'] })).toEqual(['Romance', 'Fantasia']);
  });

  it('normaliza campo genero unico em array para retrocompatibilidade', () => {
    expect(bookGeneros({ genero: 'Terror' })).toEqual(['Terror']);
  });

  it('retorna array vazio quando livro nao possui genero', () => {
    expect(bookGeneros({})).toEqual([]);
    expect(bookGeneros({ generos: null })).toEqual([]);
  });

  it('possui lista de generos e estados de conservacao validos', () => {
    expect(GENEROS).toContain('Romance');
    expect(GENEROS.length).toBeGreaterThan(5);
    expect(ESTADOS_CONSERVACAO).toEqual(['Novo', 'Seminovo', 'Usado']);
  });
});
