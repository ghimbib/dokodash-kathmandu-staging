const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/runtime-D4WYLpEU.js","assets/runtime-C4W5ypOp.css"])))=>i.map(i=>d[i]);
import{_ as a}from"./index-xOAy8n2I.js";const e=`
  <div class="app">
    <section class="game-column" aria-label="PULSEHOLD proof game">
      <header class="brand">
        <h1>PULSEHOLD</h1>
        <span class="proof-badge">proof build</span>
      </header>
      <div class="canvas-shell">
        <canvas id="game" aria-label="Tap anywhere in this playfield to emit a pulse" tabindex="0"></canvas>
      </div>
      <div class="hud" aria-live="polite">
        <div class="metric"><span>State</span><strong id="status">PLAYING</strong></div>
        <div class="metric"><span>Score</span><strong id="score">0</strong></div>
        <div class="metric"><span>Tick</span><strong id="tick">0</strong></div>
      </div>
    </section>

    <aside class="lab">
      <div class="tabs">
        <button id="play-tab" class="active" type="button">Four tapes</button>
        <button id="probe-tab" type="button">Prediction boards</button>
      </div>

      <div class="controls">
        <label class="field"><span>Rule mode</span><select id="mode"></select></label>
        <section id="play-controls" class="controls">
          <label class="field"><span>Visible situation</span><select id="tape"></select></label>
          <label class="check"><input id="rotation" type="checkbox" /> Rotate every entity +73°</label>
        </section>
        <section id="probe-controls" class="controls" hidden>
          <label class="field"><span>Paused board</span><select id="probe"></select></label>
          <label class="check"><input id="alternate" type="checkbox" /> Use three-dot version on Board 5</label>
        </section>
      </div>

      <div id="tap-demo" class="tap-demo" aria-hidden="true"><span></span></div>
      <div class="button-row">
        <button id="pause" class="button" type="button">Pause</button>
        <button id="reset" class="button" type="button">Reset tape</button>
        <button id="export" class="button primary" type="button">Export JSON</button>
      </div>
      <p id="answer" class="answer" aria-live="polite"></p>
      <details class="logs"><summary>Current local run log</summary><pre id="log-output"></pre></details>
      <p class="stop">Private mechanic proof. No accounts, mechanic telemetry, progression, monetization, sharing, or store packaging.</p>
      <a class="back-link" href="/">Back to DokoDash</a>
    </aside>
  </div>
`;async function o(){const t=document.querySelector("#game-shell")??document.body;t.className="pulsehold-root",t.setAttribute("aria-label","PULSEHOLD mechanic proof"),t.innerHTML=e,document.title="PULSEHOLD · DokoDash prototype",await a(()=>import("./runtime-D4WYLpEU.js"),__vite__mapDeps([0,1]))}export{o as startPulseholdPrototype};
