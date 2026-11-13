import { describe, it, expect } from 'vitest';
import { bookGeneros, GENEROS, ESTADOS_CONSERVACAO } from '../../js/data.js';
import * as theme from '../../js/theme.js';

describe('theme system contracts', () => {
  it('exporta as funcoes essenciais de tema para prevencao de ReferenceError', () => {
    expect(typeof theme.initTheme).toBe('function');
    expect(typeof theme.getTheme).toBe('function');
    expect(typeof theme.toggleTheme).toBe('function');
    expect(typeof theme.setTheme).toBe('function');
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
