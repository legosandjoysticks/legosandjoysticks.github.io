// portfolio-mocks.jsx
// Realistic placeholder UI for Deal Meal Planner — three product screens.
// Pure CSS/HTML mocks so we can ship without exposing real source.

// ─── Deal Browser ─────────────────────────────────────────────────────────
function DealBrowserMock() {
  const deals = [
    { store: 'Heinen\u2019s',  name: 'Boneless Chicken Thighs',  unit: '$4.99 / lb', was: '$8.99', score: 94, tag: 'BOGO' },
    { store: 'Meijer',         name: 'Strawberries 1lb',          unit: '$2.99',      was: '$5.49', score: 91, tag: 'WEEKLY' },
    { store: 'Aldi',           name: 'Barilla Pasta 16oz',        unit: '$0.99',      was: '$2.79', score: 89, tag: 'PICK' },
    { store: 'Giant Eagle',    name: 'Cremini Mushrooms 8oz',     unit: '$1.49',      was: '$3.49', score: 86, tag: '' },
    { store: 'Acme',           name: 'Greek Yogurt 32oz',         unit: '$3.99',      was: '$6.49', score: 82, tag: 'BOGO' },
    { store: 'Marc\u2019s',    name: 'Roma Tomatoes / lb',        unit: '$0.79',      was: '$1.99', score: 81, tag: '' },
    { store: 'Meijer',         name: 'Sharp Cheddar 8oz',         unit: '$2.49',      was: '$4.99', score: 78, tag: '' },
    { store: 'Heinen\u2019s',  name: 'Wild Sockeye Salmon 6oz',   unit: '$3.49',      was: '$5.99', score: 76, tag: 'PICK' },
  ];
  return (
    <div className="mock mock-browser">
      <div className="mock-toolbar">
        <div className="mock-search">
          <span className="mock-search-icon">⌕</span>
          <span className="mock-search-text">chicken</span>
          <span className="mock-cursor" />
        </div>
        <div className="mock-chips">
          <span className="mock-chip mock-chip-on">All stores</span>
          <span className="mock-chip">Produce</span>
          <span className="mock-chip">Meat</span>
          <span className="mock-chip">Dairy</span>
          <span className="mock-chip">Pantry</span>
        </div>
      </div>
      <div className="mock-table">
        <div className="mock-th">
          <span>Store</span><span>Item</span><span>Price</span><span>Was</span><span>Score</span>
        </div>
        {deals.map((d, i) => (
          <div className="mock-tr" key={i}>
            <span className="mock-store">{d.store}</span>
            <span className="mock-item">
              {d.name}
              {d.tag && <em className={`mock-tag mock-tag-${d.tag.toLowerCase()}`}>{d.tag}</em>}
            </span>
            <span className="mock-price">{d.unit}</span>
            <span className="mock-was">{d.was}</span>
            <span className="mock-score">
              <i className="mock-bar" style={{ width: d.score + '%' }} />
              <em>{d.score}</em>
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── Meal Plan ────────────────────────────────────────────────────────────
function MealPlanMock() {
  const days = [
    { d: 'Mon', meal: 'Sheet-pan chicken thighs',     uses: ['Heinen\u2019s', 'Aldi'],          pct: 88 },
    { d: 'Tue', meal: 'Pasta puttanesca',             uses: ['Aldi', 'Marc\u2019s'],            pct: 92 },
    { d: 'Wed', meal: 'Strawberry yogurt bowls',      uses: ['Meijer', 'Acme'],                 pct: 81 },
    { d: 'Thu', meal: 'Salmon rice bowls',            uses: ['Heinen\u2019s'],                   pct: 76 },
    { d: 'Fri', meal: 'Cheddar mushroom melts',       uses: ['Giant Eagle', 'Meijer'],          pct: 79 },
    { d: 'Sat', meal: 'Roma tomato + basil flatbread',uses: ['Marc\u2019s'],                     pct: 83 },
    { d: 'Sun', meal: 'Leftovers + soup',             uses: [],                                  pct: 0  },
  ];
  return (
    <div className="mock mock-plan">
      <div className="mock-plan-hd">
        <div>
          <span className="mock-eyebrow">Week of</span>
          <strong>Apr 27 – May 3</strong>
        </div>
        <div className="mock-plan-stats">
          <span><b>$74.20</b><i>est. total</i></span>
          <span><b>62%</b><i>on deal</i></span>
        </div>
      </div>
      <div className="mock-plan-grid">
        {days.map((d, i) => (
          <div className={`mock-day${d.pct === 0 ? ' mock-day-rest' : ''}`} key={i}>
            <span className="mock-dow">{d.d}</span>
            <span className="mock-meal">{d.meal}</span>
            {d.uses.length > 0 && (
              <span className="mock-uses">
                {d.uses.map((u) => <em key={u}>{u}</em>)}
              </span>
            )}
            {d.pct > 0 && (
              <span className="mock-pct"><i style={{ width: d.pct + '%' }} />{d.pct}%</span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── Shopping List ────────────────────────────────────────────────────────
function ShoppingListMock() {
  const stores = [
    { name: 'Heinen\u2019s', total: '$22.40', items: ['Chicken thighs (2 lb)', 'Sockeye salmon', 'Lemons \u00d73'] },
    { name: 'Meijer',        total: '$8.95',  items: ['Strawberries 1lb', 'Spinach 10oz', 'Sharp cheddar'] },
    { name: 'Aldi',          total: '$11.80', items: ['Barilla pasta \u00d73', 'Capers', 'Anchovy paste'] },
    { name: 'Marc\u2019s',   total: '$9.20',  items: ['Roma tomatoes (2 lb)', 'Yellow onions', 'Basil'] },
    { name: 'Giant Eagle',   total: '$6.45',  items: ['Cremini mushrooms 8oz', 'Sourdough loaf'] },
  ];
  return (
    <div className="mock mock-list">
      <div className="mock-list-hd">
        <strong>Shopping list</strong>
        <span className="mock-list-meta">5 stops · 14 items · $58.80</span>
      </div>
      {stores.map((s, i) => (
        <div className="mock-store-block" key={i}>
          <div className="mock-store-row">
            <span className="mock-store-name">{s.name}</span>
            <span className="mock-store-total">{s.total}</span>
          </div>
          <ul>
            {s.items.map((it, j) => (
              <li key={j}><span className="mock-check" />{it}</li>
            ))}
          </ul>
        </div>
      ))}
      <div className="mock-list-foot">
        <span>Export</span>
        <em>Email</em>
        <em>Print</em>
        <em>.csv</em>
      </div>
    </div>
  );
}

// ─── Hero composite (the big one) ─────────────────────────────────────────
function HeroComposite() {
  return (
    <div className="hero-composite">
      <div className="hero-stack">
        <div className="hero-card hero-card-back">
          <ShoppingListMock />
        </div>
        <div className="hero-card hero-card-mid">
          <MealPlanMock />
        </div>
        <div className="hero-card hero-card-front">
          <DealBrowserMock />
        </div>
      </div>
      <ol className="hero-legend">
        <li><span className="hero-legend-num">01</span>Ingest weekly flyers</li>
        <li><span className="hero-legend-num">02</span>Normalize + rank deals</li>
        <li><span className="hero-legend-num">03</span>Plan meals + export lists</li>
      </ol>
    </div>
  );
}

Object.assign(window, {
  DealBrowserMock, MealPlanMock, ShoppingListMock, HeroComposite,
});
