import { describe, it, expect } from 'vitest';
import fs from 'node:fs';
import path from 'node:path';
import { showToast, inferToastType } from '../../js/toast.js';

describe('modern toast notification system (toast.js)', () => {
  it('exporta showToast e inferToastType', () => {
    expect(typeof showToast).toBe('function');
    expect(typeof inferToastType).toBe('function');
  });

  it('infere tipo de erro corretamente a partir do titulo ou mensagem', () => {
    expect(inferToastType('Erro ao entrar', 'E-mail ou senha incorretos.')).toBe('error');
    expect(inferToastType('Senha fraca')).toBe('error');
    expect(inferToastType('WhatsApp inválido')).toBe('error');
    expect(inferToastType('Não foi possível salvar')).toBe('error');
    expect(inferToastType('As senhas não coincidem')).toBe('error');
  });

  it('infere tipo de sucesso corretamente', () => {
    expect(inferToastType('Login realizado!', 'Bem-vindo(a) de volta.')).toBe('success');
    expect(inferToastType('Conta criada!')).toBe('success');
    expect(inferToastType('Perfil atualizado!')).toBe('success');
    expect(inferToastType('Livro publicado!')).toBe('success');
  });

  it('infere tipo de aviso (warning) corretamente', () => {
    expect(inferToastType('Informe seu WhatsApp')).toBe('warning');
    expect(inferToastType('Preencha os campos obrigatórios')).toBe('warning');
    expect(inferToastType('Atenção aos detalhes')).toBe('warning');
  });

  it('retorna info como padrao quando nao ha palavras-chave de erro ou sucesso', () => {
    expect(inferToastType('Ajuda e orientações')).toBe('info');
  });

  it('executa com seguranca em ambiente headless sem document', () => {
    expect(() => showToast('Teste', 'Mensagem')).not.toThrow();
    const result = showToast('Teste', 'Mensagem');
    expect(result).toBeNull();
  });

  it('possui classes e estilizacao de toast no components.css', () => {
    const cssPath = path.resolve(__dirname, '../../css/components.css');
    const css = fs.readFileSync(cssPath, 'utf8');
    expect(css).toContain('.toast-container');
    expect(css).toContain('.toast--error');
    expect(css).toContain('.toast--success');
    expect(css).toContain('.toast-icon-badge');
    expect(css).toContain('[data-theme="light"] .toast');
  });
});
