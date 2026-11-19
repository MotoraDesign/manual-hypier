/* ============================================================
   MOTOR · Importar textos do doc (modo edição)
   Cola o texto de um Google Doc (Posicionamento ou Expressão visual)
   e distribui cada trecho no lugar certo do manual, como RASCUNHO.
   Regras do doc: ver modelos/doc-posicionamento.txt e modelos/doc-expressao-visual.txt.
   - Títulos numerados ("05. Pilares") = uma seção do manual.
   - Linha curta seguida de parágrafo, ou terminada em ":" = subtítulo (vira o bloco com esse rótulo).
   - "O que é esse texto?" / "Para que serve?", marcas como "Finalizado (rodada 2)" e comentários [a] são ignorados.
   Carregado sob demanda pelo admin.js. Sem nenhuma referência a marca.
   ============================================================ */
(function () {
  const A = window.ADM; if (!A) return;
  const norm = (s) => String(s || '').normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().replace(/[^a-z0-9 ]+/g, ' ').replace(/\s+/g, ' ').trim();
  const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));

  /* título do doc → id da seção (por tipo de doc). Primeiro alias que aparecer no título vence. */
  const MAP = {
    pos: [
      ['pos-posicionamento', ['proposito', 'big idea', 'proposta de valor', 'posicionamento']],
      ['pos-quemsomos', ['quem somos', 'slogan', 'tagline']],
      ['pos-pilares', ['pilares', 'pilar']],
      ['pos-cliente', ['cliente ideal', 'cliente']],
      ['pos-arquitetura', ['arquitetura de marca', 'portfolio de marcas']],
      ['pos-arvore', ['arvore de decisao', 'novos nomes']],
      ['pos-portfolio', ['o que fazemos', 'portfolio', 'produtos e servicos']],
      ['pos-cultura', ['nossa cultura', 'cultura', 'missao']],
      ['pos-historia', ['historia']],
      ['pos-valores', ['valores']],
      ['pos-dresscode', ['dress code']],
      ['pos-arquetipos', ['arquetipo']],
      ['pos-persona', ['persona']],
      ['pos-tomdevoz', ['tom de voz', 'glossario']],
      ['pos-exemplos', ['exemplos e situacoes', 'situacoes', 'linguagem digital']],
      ['pos-imagens', ['uso de imagens', 'direcao de imagens', 'imagens']],
      ['pos-manifesto', ['manifesto']],
      ['pos-produto', ['caracteristicas', 'produto']],
      ['pos-atendimento', ['atendimento']],
      ['pos-arquitetura-espaco', ['arquitetonico', 'arquitetura e ambientes', 'espacos']],
      ['pos-territorio', ['territorio']],
    ],
    vis: [
      ['conceito', ['conceito']],
      ['assinaturas', ['assinaturas', 'assinatura']],
      ['grid-marca', ['grid e arejamento', 'arejamento', 'grid de construcao']],
      ['usos-indevidos', ['usos indevidos', 'uso indevido']],
      ['alinhamento', ['alinhamento']],
      ['reducao', ['reducao', 'tamanho minimo']],
      ['paleta', ['paleta', 'cores']],
      ['figura-fundo', ['figura e fundo']],
      ['aplicacao-cor', ['aplicacao da marca', 'aplicacao de cor']],
      ['tipografia', ['tipografia']],
      ['elementos-editoriais', ['elementos graficos', 'grafismos']],
      ['imagens', ['uso de imagens', 'imagens', 'tratamento']],
      ['aplicacao-layout', ['aplicacao em layouts', 'composicao']],
      ['grid-layout', ['grid modular', 'grid de layout', 'grid']],
      ['exemplos', ['exemplos']],
    ],
  };
  const PARTS = ['sumario', 'posicionamento', 'identidade de marca', 'identidade', 'estrutura', 'cultura', 'cultura corporativa', 'personalidade', 'experiencia', 'expressao visual', 'construcao', 'cores', 'elementos', 'layouts', 'textos brandbook posicionamento'];
  /* rótulos do doc que equivalem a rótulos do manual */
  const LABEL_ALIAS = { 'palavras a evitar': 'palavras que evitamos', 'solucao de problemas': 'problemas', 'nosso proposito': 'nosso proposito', 'a voz da marca e': '', 'a voz da marca nao e': '', 'exemplos': '' };
  const GENERIC = /^(\d+\s*[.·]\s*)?(pilar|valor|traco evitado|traco|territorio|arquetipo|qualidade|produto servico|composicao)\s*\d+$/;

  function parse(text, kind) {
    let t = String(text).replace(/\r/g, '');
    const cm = t.search(/^\s*\[[a-z]\]\S/m); if (cm > 0) t = t.slice(0, cm);
    const lines = t.split('\n').map((l) => l.replace(/\[[a-z]\]/g, '').replace(/[\u200b\t]+/g, ' ').trim());
    const secs = []; let sec = null, skip = false;
    const isHead = (l) => /^\d{1,2}\s*[.)]\s+\S/.test(l);
    for (let i = 0; i < lines.length; i++) {
      let l = lines[i];
      if (!l) { skip = false; continue; }
      if (/^(_{3,}|[—–-]{3,}.*)$/.test(l)) continue;
      if (/^(o que e esse texto|para que serve)/.test(norm(l))) { skip = true; continue; }
      if (skip) continue;
      if (isHead(l)) {
        const title = l.replace(/^\d{1,2}\s*[.)]\s+/, '').replace(/\s+(finalizado|aprovado|em revisao|em revisão|revisado|rodada).*$/i, '').trim();
        sec = { title, blocks: [{ title: null, paras: [] }] }; secs.push(sec); continue;
      }
      if (PARTS.includes(norm(l)) && l === l.toUpperCase()) continue;
      if (!sec) continue;
      const next = lines.slice(i + 1).find((x) => x) || '';
      const isList = /^[—–\-•·]\s*/.test(l);
      const isPair = /^[❌✅✔✖]/.test(l);
      const caps = l.length < 60 && l === l.toUpperCase() && /[A-ZÀ-Ý]/.test(l);
      const colon = /:$/.test(l) && l.length < 70;
      const nextList = /^[—–\-•·]/.test(next);
      const short = !isList && !isPair && l.length <= 70 && (next.length > 70 || (nextList && !/[.!?…]$/.test(l))) && !/[!?…"”]$/.test(l);
      if (caps || colon || (short && !/^["“]/.test(l))) { sec.blocks.push({ title: l.replace(/:$/, '').trim(), paras: [] }); continue; }
      const p = l.replace(/^[—–\-•·]\s*/, '').replace(/^[❌✅✔✖]\s*/, '').replace(/^["“]\s*|\s*["”]$/g, '').trim();
      if (p) sec.blocks[sec.blocks.length - 1].paras.push(p);
    }
    secs.forEach((s) => { s.blocks = s.blocks.filter((b) => b.paras.length || b.title); s.id = mapId(s.title, kind); });
    /* o sumário repete os títulos sem conteúdo: fica a última ocorrência com conteúdo */
    const byId = {};
    secs.forEach((s) => { const n = s.blocks.reduce((a, b) => a + b.paras.length, 0); if (!n) return; const k = s.id || 'x:' + s.title; (byId[k] = byId[k] || []).push(s); });
    return Object.values(byId).map((list) => list.length === 1 ? list[0] : { id: list[0].id, title: list.map((x) => x.title).join(' + '), blocks: list.flatMap((x) => x.blocks) });
  }
  function mapId(title, kind) {
    const n = norm(title), avail = new Set((window.MODULES ? window.MODULES.sections() : []).map((s) => s.id));
    for (const [id, al] of MAP[kind]) if (avail.has(id) && al.some((a) => n.includes(a))) return id;
    const s = (window.MODULES ? window.MODULES.sections() : []).find((x) => x.part === kind && (norm(x.label) === n || n.includes(norm(x.label))));
    return s ? s.id : null;
  }

  /* ---------- distribui no DOM da página (gera chaves do rascunho) ---------- */
  const hasTodo = (el) => /\[preencher/i.test(el.textContent);
  function plan(sec, kind, used) {
    const panel = document.querySelector(`#panels > .panel[data-id="${sec.id}"]`);
    const out = { texts: {}, added: [], sub: null, filled: 0, extra: 0, notes: [] };
    if (!panel) return out;
    const all = [...panel.querySelectorAll('[data-kt]')].filter((el) => !el.closest('.adm-added'));
    const labels = all.filter((el) => el.classList.contains('lbl'));
    const free = (el) => !used.has(el.dataset.kt);
    const put = (el, html) => { out.texts[el.dataset.kt] = html; used.add(el.dataset.kt); out.filled++; };
    const fillBox = (box, paras, labelEl) => {
      let slots = [...box.querySelectorAll('[data-kt]')].filter((el) => el !== labelEl && !el.classList.contains('lbl') && free(el) && !el.closest('.adm-added'));
      const todo = slots.filter(hasTodo); if (todo.length) slots = todo;
      if (!slots.length) return paras;
      paras.forEach((p, i) => { if (i < slots.length - 1 || i === paras.length - 1 || slots.length === 1) {} });
      const n = Math.min(slots.length, paras.length);
      for (let i = 0; i < n; i++) put(slots[i], i === n - 1 ? paras.slice(i).map(esc).join('<br><br>') : esc(paras[i]));
      return [];
    };
    const boxOf = (lb) => lb.closest('.box, .dd, .card, figure') || lb.parentElement;
    sec.blocks.forEach((b, bi) => {
      if (!b.paras.length) return;
      if (!b.title && /slogan|tagline/.test(norm(sec.title)) && bi === 0) { out.notes.push('Slogan e tagline: atualize em Dados da marca (painel).'); return; }
      if (b.title && b.paras.length <= 1 && /slogan|tagline|company|companhia/.test(norm(b.title + ' ' + b.paras.join(' '))) && !/quem somos/.test(norm(b.title))) { out.notes.push('Slogan e tagline: atualize em Dados da marca (painel).'); return; }
      if (!b.title) {
        if (kind === 'vis' && bi === 0 && out.sub == null) { out.sub = esc(b.paras[0]); b = { title: null, paras: b.paras.slice(1) }; if (!b.paras.length) return; }
        const slots = all.filter((el) => free(el) && hasTodo(el) && !el.classList.contains('lbl'));
        const n = Math.min(slots.length, b.paras.length);
        for (let i = 0; i < n; i++) put(slots[i], i === n - 1 ? b.paras.slice(i).map(esc).join('<br><br>') : esc(b.paras[i]));
        if (b.paras.length > n && !n) { out.added.push(`<p>${b.paras.map(esc).join('<br><br>')}</p>`); out.extra++; }
        return;
      }
      let key = norm(b.title); if (LABEL_ALIAS[key] === '') key = null; else if (LABEL_ALIAS[key]) key = LABEL_ALIAS[key];
      let lb = key && labels.find((el) => free(el) && norm(el.textContent) === key)
        || key && labels.find((el) => free(el) && key.length > 3 && (norm(el.textContent).includes(key) || key.includes(norm(el.textContent))) && norm(el.textContent).length > 3);
      if (!lb) { lb = labels.find((el) => free(el) && GENERIC.test(norm(el.textContent))); if (lb) { const pre = (lb.textContent.match(/^\s*\d+\s*[.·]\s*/) || [''])[0]; put(lb, esc(pre + b.title)); out.filled--; } }
      if (lb) { used.add(lb.dataset.kt); const rest = fillBox(boxOf(lb), b.paras.slice(), lb); if (rest.length) { out.added.push(`<p><b>${esc(b.title)}</b><br>${rest.map(esc).join('<br><br>')}</p>`); out.extra++; } return; }
      const slots = all.filter((el) => free(el) && hasTodo(el) && !el.classList.contains('lbl'));
      if (slots.length) {
        const ps = b.paras.map(esc); if (key) ps[0] = `<b>${esc(b.title)}</b><br>${ps[0]}`;
        const n = Math.min(slots.length, ps.length);
        for (let i = 0; i < n; i++) put(slots[i], i === n - 1 ? ps.slice(i).join('<br><br>') : ps[i]);
        return;
      }
      out.added.push(`<p><b>${esc(b.title)}</b><br>${b.paras.map(esc).join('<br><br>')}</p>`); out.extra++;
    });
    return out;
  }

  function open() {
    const m = A.modal(`<h3>Importar textos do doc</h3>
      <p class="hint">Cole o texto inteiro do Google Doc (Arquivo → Baixar → Texto simples, ou selecione tudo e copie). Os textos entram como rascunho: confira em cada página e publique.</p>
      <div class="adm-row" style="justify-content:flex-start; gap:16px">
        <label class="chk"><input type="radio" name="dk" value="pos" checked> Doc de Posicionamento</label>
        <label class="chk"><input type="radio" name="dk" value="vis"> Doc de Expressão visual</label>
      </div>
      <textarea class="adm-imp" placeholder="Cole aqui o conteúdo do doc…"></textarea>
      <div class="adm-imp-out"></div>
      <div class="adm-row"><button type="button" data-close>Cancelar</button><button type="button" data-an>Analisar</button><button type="button" class="pri" data-ap disabled>Aplicar ao rascunho</button></div>`);
    let result = null;
    /* bloco cujo rótulo só existe em outra página do mesmo doc (ex.: "Emojis" dentro de Tom de voz) muda de página */
    const route = (secs, kind) => {
      const lab = {};
      document.querySelectorAll('#panels > .panel').forEach((p) => p.querySelectorAll('.lbl').forEach((el) => { (lab[norm(el.textContent)] = lab[norm(el.textContent)] || []).push(p.dataset.id); }));
      const ids = new Set(secs.map((x) => x.id).filter(Boolean)), extra = {};
      secs.forEach((sec) => {
        if (!sec.id) return;
        sec.blocks = sec.blocks.filter((b) => {
          if (!b.title) return true;
          let k = norm(b.title); if (LABEL_ALIAS[k]) k = LABEL_ALIAS[k];
          const where = lab[k] || [];
          if (!where.length || where.includes(sec.id)) return true;
          const to = where.find((id) => (window.MODULES.sections().find((x) => x.id === id) || {}).part === kind);
          if (!to) return true;
          (extra[to] = extra[to] || []).push(b); return false;
        });
      });
      Object.entries(extra).forEach(([id, bl]) => { const t = secs.find((x) => x.id === id); if (t) t.blocks.push(...bl); else secs.push({ id, title: '(blocos de outra seção do doc)', blocks: bl }); });
      return secs;
    };
    const kind = () => m.querySelector('[name=dk]:checked').value;
    m.querySelector('[data-an]').addEventListener('click', () => {
      const secs = route(parse(m.querySelector('.adm-imp').value, kind()), kind());
      const used = new Set(), names = Object.fromEntries((window.MODULES ? window.MODULES.sections() : []).map((s) => [s.id, s.label]));
      result = secs.map((s) => ({ s, p: s.id ? plan(s, kind(), used) : null }));
      const ok = result.filter((r) => r.p), miss = result.filter((r) => !r.p);
      m.querySelector('.adm-imp-out').innerHTML = !result.length ? '<p class="hint">Não encontrei títulos numerados (ex.: “05. Pilares”). Confira o modelo do doc.</p>' : `
        <ul class="adm-imp-list">${ok.map((r, i) => `<li><label class="chk"><input type="checkbox" data-i="${result.indexOf(r)}" checked> <b>${esc(names[r.s.id] || r.s.id)}</b> ← “${esc(r.s.title)}”</label>
          <span class="hint" style="margin:0">${r.p.filled} campo(s) preenchido(s)${r.p.sub ? ' · descrição da página' : ''}${r.p.extra ? ` · ${r.p.extra} bloco(s) novo(s) no fim da página` : ''}${r.p.notes.length ? ` · ${esc([...new Set(r.p.notes)].join(' '))}` : ''}</span></li>`).join('')}</ul>
        ${miss.length ? `<p class="hint" style="color:var(--no)">Sem página correspondente (não serão importados): ${miss.map((r) => `“${esc(r.s.title)}”`).join(', ')}</p>` : ''}`;
      m.querySelector('[data-ap]').disabled = !ok.length;
    });
    m.querySelector('[data-ap]').addEventListener('click', () => {
      const pick = [...m.querySelectorAll('.adm-imp-list input:checked')].map((x) => result[+x.dataset.i]);
      A.commit((d) => {
        pick.forEach(({ s, p }) => {
          Object.assign(d.texts, p.texts);
          if (p.sub != null) d.subs[s.id] = p.sub;
          if (p.added.length) { d.added[s.id] = d.added[s.id] || []; p.added.forEach((html, i) => d.added[s.id].push({ id: 'imp' + Date.now().toString(36) + i, type: 'text', html })); }
        });
      });
      A.apply(); m.remove();
      A.uiAlert(`Textos importados em ${pick.length} página(s). Confira cada página (os campos sem correspondência continuam com [preencher]) e clique em “Revisar e publicar”.`);
    });
  }
  window.DOCIMPORT = { open, parse };
})();
