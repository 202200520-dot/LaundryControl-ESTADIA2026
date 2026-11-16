import { FormEvent, ReactNode, useMemo, useState } from "react";

type IconName =
  | "activity" | "alert" | "archive" | "bell" | "box" | "calendar" | "chart"
  | "check" | "chevron" | "clock" | "close" | "download" | "droplet" | "error"
  | "file" | "filter" | "gear" | "help" | "home" | "logout" | "machine"
  | "maintenance" | "menu" | "moon" | "package" | "plus" | "report" | "search"
  | "settings" | "shield" | "spark" | "truck" | "user" | "users" | "warning";

const paths: Record<IconName, ReactNode> = {
  activity: <><path d="M3 12h4l2-6 4 12 2-6h6" /></>,
  alert: <><path d="M10.3 3.8 2.6 17a2 2 0 0 0 1.7 3h15.4a2 2 0 0 0 1.7-3L13.7 3.8a2 2 0 0 0-3.4 0Z" /><path d="M12 9v4M12 17h.01" /></>,
  archive: <><path d="M4 7h16v13H4zM3 3h18v4H3zM9 11h6" /></>,
  bell: <><path d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9M10 21h4" /></>,
  box: <><path d="m21 8-9 5-9-5M3 8l9-5 9 5v8l-9 5-9-5Z" /><path d="M12 13v8" /></>,
  calendar: <><rect x="3" y="5" width="18" height="16" rx="2" /><path d="M16 3v4M8 3v4M3 10h18" /></>,
  chart: <><path d="M4 20V10M10 20V4M16 20v-7M22 20H2" /></>,
  check: <><path d="m5 12 4 4L19 6" /></>,
  chevron: <><path d="m9 18 6-6-6-6" /></>,
  clock: <><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></>,
  close: <><path d="m6 6 12 12M18 6 6 18" /></>,
  download: <><path d="M12 3v12m0 0 4-4m-4 4-4-4M4 21h16" /></>,
  droplet: <><path d="M12 2S5 10 5 15a7 7 0 0 0 14 0c0-5-7-13-7-13Z" /></>,
  error: <><circle cx="12" cy="12" r="9" /><path d="M12 7v6M12 17h.01" /></>,
  file: <><path d="M6 2h8l4 4v16H6zM14 2v5h5M9 13h6M9 17h6" /></>,
  filter: <><path d="M3 5h18M6 12h12M10 19h4" /></>,
  gear: <><circle cx="12" cy="12" r="3" /><path d="M19.4 15a1.7 1.7 0 0 0 .3 1.9l.1.1-2.8 2.8-.1-.1a1.7 1.7 0 0 0-1.9-.3 1.7 1.7 0 0 0-1 1.6v.2h-4V21a1.7 1.7 0 0 0-1-1.6 1.7 1.7 0 0 0-1.9.3l-.1.1L4.2 17l.1-.1a1.7 1.7 0 0 0 .3-1.9A1.7 1.7 0 0 0 3 14H3v-4h.1a1.7 1.7 0 0 0 1.5-1 1.7 1.7 0 0 0-.3-1.9L4.2 7 7 4.2l.1.1a1.7 1.7 0 0 0 1.9.3 1.7 1.7 0 0 0 1-1.6V3h4v.1a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.9-.3l.1-.1L19.8 7l-.1.1a1.7 1.7 0 0 0-.3 1.9 1.7 1.7 0 0 0 1.6 1h.2v4H21a1.7 1.7 0 0 0-1.6 1Z" /></>,
  help: <><circle cx="12" cy="12" r="9" /><path d="M9.8 9a2.3 2.3 0 1 1 3.2 2.1c-.8.4-1 1-1 1.9M12 17h.01" /></>,
  home: <><path d="m3 11 9-8 9 8M5 10v11h14V10M9 21v-7h6v7" /></>,
  logout: <><path d="M10 17l5-5-5-5M15 12H3M14 3h7v18h-7" /></>,
  machine: <><rect x="3" y="3" width="18" height="18" rx="3" /><circle cx="12" cy="13" r="5" /><path d="M7 7h.01M11 7h6" /></>,
  maintenance: <><path d="m14.7 6.3 3-3a4 4 0 0 1-5 5l-7.8 7.8a2 2 0 1 0 2.8 2.8l7.8-7.8a4 4 0 0 1 5-5l-3 3" /></>,
  menu: <><path d="M4 7h16M4 12h16M4 17h16" /></>,
  moon: <><path d="M20 15a8 8 0 0 1-11-11 9 9 0 1 0 11 11Z" /></>,
  package: <><path d="M3 7h18v14H3zM7 7V3h10v4M8 12h8" /></>,
  plus: <><path d="M12 5v14M5 12h14" /></>,
  report: <><path d="M4 19V9M10 19V5M16 19v-8M22 19H2" /></>,
  search: <><circle cx="11" cy="11" r="7" /><path d="m20 20-4-4" /></>,
  settings: <><circle cx="12" cy="12" r="3" /><path d="M12 2v3M12 19v3M2 12h3M19 12h3M5 5l2 2M17 17l2 2M19 5l-2 2M7 17l-2 2" /></>,
  shield: <><path d="M12 3 4 6v6c0 5 3.5 8 8 9 4.5-1 8-4 8-9V6l-8-3Z" /><path d="m9 12 2 2 4-4" /></>,
  spark: <><path d="m12 3 1.5 5.5L19 10l-5.5 1.5L12 17l-1.5-5.5L5 10l5.5-1.5L12 3Z" /></>,
  truck: <><path d="M3 5h11v12H3zM14 9h4l3 4v4h-7z" /><circle cx="7" cy="18" r="2" /><circle cx="18" cy="18" r="2" /></>,
  user: <><circle cx="12" cy="8" r="4" /><path d="M4 21a8 8 0 0 1 16 0" /></>,
  users: <><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2M9 11a4 4 0 1 0 0-8M22 21v-2a4 4 0 0 0-3-3.9M16 3.1a4 4 0 0 1 0 7.8" /></>,
  warning: <><path d="M10.3 3.8 2.6 17a2 2 0 0 0 1.7 3h15.4a2 2 0 0 0 1.7-3L13.7 3.8a2 2 0 0 0-3.4 0Z" /><path d="M12 9v4M12 17h.01" /></>,
};

function Icon({ name, size = 18 }: { name: IconName; size?: number }) {
  return <svg className="icon" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{paths[name]}</svg>;
}

const navGroups = [
  { label: "OPERACIÓN", items: [["Dashboard", "home"], ["Producción", "chart"], ["Máquinas y equipos", "machine"], ["Mantenimiento", "maintenance"]] },
  { label: "ABASTECIMIENTO", items: [["Inventario", "box"], ["Consumo de productos", "droplet"], ["Proveedores", "truck"], ["Compras", "package"]] },
  { label: "GESTIÓN", items: [["Empleados y turnos", "users"], ["Fallas e incidencias", "alert"], ["Usuarios y roles", "shield"], ["Reportes", "file"]] },
] as const;

const metrics = [
  { icon: "chart", tone: "blue", label: "Producción de hoy", value: "4,850 kg", note: "12 % más que ayer", badge: "↗ 12 %", link: false },
  { icon: "machine", tone: "green", label: "Máquinas trabajando", value: "12 de 18", note: "3 disponibles · 2 en mantenimiento · 1 fuera de servicio", link: false },
  { icon: "activity", tone: "violet", label: "Lotes en proceso", value: "8", note: "Entre lavado, secado y planchado", link: false },
  { icon: "box", tone: "orange", label: "Productos con stock bajo", value: "4", note: "Requieren reposición", link: true },
  { icon: "maintenance", tone: "orange", label: "Mantenimientos por atender", value: "3", note: "2 próximos · 1 vencido", link: true },
  { icon: "alert", tone: "red", label: "Incidencias abiertas", value: "5", note: "2 de prioridad alta", link: true },
] as const;

const machines = [
  { name: "Lavadora 01", code: "LAV-001", type: "Lavadora industrial", status: "Trabajando", tone: "green", detail: "Carga actual: 80 kg", person: "Carlos López", hours: "485 h / 500 h", progress: 97 },
  { name: "Secadora 03", code: "SEC-003", type: "Secadora industrial", status: "En mantenimiento", tone: "orange", detail: "Revisión del sistema de calentamiento", person: "Mantenimiento", hours: "124 h / 500 h", progress: 25 },
  { name: "Planchadora 02", code: "PLA-002", type: "Planchadora", status: "Disponible", tone: "blue", detail: "Lista para asignar", person: "Sin asignar", hours: "328 h / 500 h", progress: 66 },
  { name: "Lavadora 04", code: "LAV-004", type: "Lavadora industrial", status: "Fuera de servicio", tone: "red", detail: "Falla de motor reportada", person: "Sin operador", hours: "512 h / 500 h", progress: 100 },
] as const;

const inventory = [
  ["Detergente industrial", "Químicos", "25 L", "50 L"],
  ["Suavizante concentrado", "Químicos", "18 L", "30 L"],
  ["Desinfectante textil", "Químicos", "12 L", "20 L"],
  ["Bolsas de empaque", "Materiales", "80 piezas", "100 piezas"],
];

const productionRows = [
  ["LOT-2025-0847", "10:42", "Lavadora 01", "Carlos López", "Matutino", "Lavado", "80 kg", "En proceso"],
  ["LOT-2025-0846", "10:18", "Secadora 01", "María Torres", "Matutino", "Secado", "65 kg", "Finalizado"],
  ["LOT-2025-0845", "09:55", "Planchadora 03", "Ana Méndez", "Matutino", "Planchado", "52 kg", "En proceso"],
  ["LOT-2025-0844", "09:21", "Lavadora 03", "Jorge Pech", "Matutino", "Lavado", "75 kg", "Finalizado"],
  ["LOT-2025-0843", "08:47", "Secadora 03", "Luis Canché", "Matutino", "Secado", "48 kg", "Detenido"],
];

function Button({ children, variant = "primary", icon, onClick, type = "button", className = "" }: { children: ReactNode; variant?: "primary" | "secondary" | "ghost" | "danger"; icon?: IconName; onClick?: () => void; type?: "button" | "submit"; className?: string }) {
  return <button type={type} className={`btn btn-${variant} ${className}`} onClick={onClick}>{icon && <Icon name={icon} size={17} />}<span>{children}</span></button>;
}

function Status({ children, tone }: { children: ReactNode; tone: string }) {
  return <span className={`status status-${tone}`}><span className="status-dot" />{children}</span>;
}

function SectionTitle({ title, subtitle, action }: { title: string; subtitle?: string; action?: ReactNode }) {
  return <div className="section-heading"><div><h2>{title}</h2>{subtitle && <p>{subtitle}</p>}</div>{action}</div>;
}

function Modal({ title, onClose, children }: { title: string; onClose: () => void; children: ReactNode }) {
  return <div className="modal-backdrop" onMouseDown={onClose}><div className="modal" onMouseDown={(e) => e.stopPropagation()} role="dialog" aria-modal="true"><div className="modal-head"><div><span className="eyebrow">NUEVO REGISTRO</span><h2>{title}</h2></div><button className="icon-btn" onClick={onClose} aria-label="Cerrar"><Icon name="close" /></button></div>{children}</div></div>;
}

function FormField({ label, required, children }: { label: string; required?: boolean; children: ReactNode }) {
  return <label className="field"><span>{label}{required && <b> *</b>}</span>{children}</label>;
}

export default function App() {
  const [collapsed, setCollapsed] = useState(false);
  const [mobileNav, setMobileNav] = useState(false);
  const [dateFilter, setDateFilter] = useState("Hoy");
  const [shift, setShift] = useState("Todos los turnos");
  const [notifications, setNotifications] = useState(false);
  const [drawerMachine, setDrawerMachine] = useState<(typeof machines)[number] | null>(null);
  const [modal, setModal] = useState<"production" | "fault" | null>(null);
  const [toast, setToast] = useState("");
  const [search, setSearch] = useState("");
  const [formError, setFormError] = useState("");

  const rows = useMemo(() => productionRows.filter((row) => row.join(" ").toLowerCase().includes(search.toLowerCase())), [search]);

  const submitForm = (e: FormEvent<HTMLFormElement>, message: string) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    if ([...data.values()].some((value) => !String(value).trim())) {
      setFormError("Completa todos los campos obligatorios antes de guardar.");
      return;
    }
    setFormError("");
    setModal(null);
    setToast(message);
    window.setTimeout(() => setToast(""), 3500);
  };

  return (
    <div className="app-shell">
      {mobileNav && <div className="mobile-overlay" onClick={() => setMobileNav(false)} />}
      <aside className={`sidebar ${collapsed ? "collapsed" : ""} ${mobileNav ? "mobile-open" : ""}`}>
        <div className="brand">
          <div className="brand-mark"><Icon name="droplet" size={22} /></div>
          <div className="brand-copy"><strong>LaundryControl</strong><span>Control de operaciones</span></div>
          <button className="collapse-btn" onClick={() => setCollapsed(!collapsed)} aria-label="Colapsar menú"><Icon name="chevron" size={16} /></button>
        </div>
        <nav className="nav">
          {navGroups.map((group) => <div className="nav-group" key={group.label}><span className="nav-label">{group.label}</span>{group.items.map(([label, icon]) => <button key={label} className={`nav-item ${label === "Dashboard" ? "active" : ""}`} title={label}><Icon name={icon} /><span>{label}</span>{label === "Fallas e incidencias" && <b className="nav-count">5</b>}</button>)}</div>)}
        </nav>
        <div className="sidebar-bottom">
          <button className="nav-item"><Icon name="settings" /><span>Configuración</span></button>
          <button className="nav-item"><Icon name="logout" /><span>Cerrar sesión</span></button>
          <div className="support"><Icon name="help" /><div><b>¿Necesitas ayuda?</b><span>Centro de soporte</span></div></div>
        </div>
      </aside>

      <div className="main-column">
        <header className="topbar">
          <button className="mobile-menu" onClick={() => setMobileNav(true)}><Icon name="menu" /></button>
          <div className="global-search"><Icon name="search" /><input placeholder="Buscar máquina, producto o registro…" /></div>
          <div className="company"><span>EMPRESA</span><b>Laundry by Profesional Cancún</b></div>
          <div className="topbar-actions">
            <div className="notification-wrap">
              <button className="icon-btn notification-btn" onClick={() => setNotifications(!notifications)} aria-label="Notificaciones"><Icon name="bell" /><span>4</span></button>
              {notifications && <div className="notification-panel"><div className="popover-head"><b>Notificaciones</b><button>Marcar leídas</button></div><div className="notice critical"><Icon name="alert" /><div><b>Lavadora 04 fuera de servicio</b><span>Hace 12 minutos</span></div></div><div className="notice"><Icon name="maintenance" /><div><b>Mantenimiento vencido</b><span>Secadora 02 · Hace 1 hora</span></div></div><div className="notice"><Icon name="box" /><div><b>Stock mínimo alcanzado</b><span>Detergente industrial · Hace 2 horas</span></div></div><button className="popover-footer">Ver todas las notificaciones</button></div>}
            </div>
            <div className="profile"><div className="avatar">JS</div><div><b>José San Pedro</b><span>Administrador</span></div><Icon name="chevron" size={14} /></div>
          </div>
        </header>

        <main>
          <section className="dashboard-header">
            <div><span className="eyebrow">PANEL DE CONTROL</span><h1>Resumen de operación</h1><p>Consulta la producción, el inventario y el estado de tu planta.</p></div>
            <div className="header-actions"><Button variant="secondary" icon="download">Exportar reporte</Button><Button icon="plus" onClick={() => setModal("production")}>Registrar producción</Button></div>
          </section>

          <div className="control-bar">
            <div className="segmented">{["Hoy", "Últimos 7 días", "Este mes", "Rango personalizado"].map((item) => <button key={item} className={dateFilter === item ? "selected" : ""} onClick={() => setDateFilter(item)}>{item === "Rango personalizado" && <Icon name="calendar" size={15} />}{item}</button>)}</div>
            <label className="select-control"><Icon name="clock" size={16} /><select value={shift} onChange={(e) => setShift(e.target.value)}>{["Todos los turnos", "Matutino", "Vespertino", "Nocturno"].map((item) => <option key={item}>{item}</option>)}</select></label>
            <span className="updated"><span />Actualizado hace 3 min</span>
          </div>

          <section className="metric-grid">
            {metrics.map((metric) => <article key={metric.label} className={`metric-card ${metric.link ? "clickable" : ""}`}>
              <div className="metric-top"><span className={`metric-icon ${metric.tone}`}><Icon name={metric.icon} /></span>{"badge" in metric && metric.badge ? <span className="trend">{metric.badge}</span> : metric.link ? <Icon name="chevron" size={16} /> : null}</div>
              <span className="metric-label">{metric.label}</span><strong>{metric.value}</strong><p>{metric.note}</p>
            </article>)}
          </section>

          <section className="charts-grid">
            <article className="panel chart-panel">
              <SectionTitle title="Producción de los últimos 7 días" subtitle="Kilogramos de lotes finalizados" action={<div className="legend"><span><i className="legend-blue" />Producción diaria</span><b>32,460 kg total</b></div>} />
              <div className="line-chart">
                <div className="y-labels"><span>6,000</span><span>4,500</span><span>3,000</span><span>1,500</span><span>0</span></div>
                <div className="chart-area">
                  <div className="grid-lines"><i /><i /><i /><i /><i /></div>
                  <svg viewBox="0 0 700 220" preserveAspectRatio="none" aria-label="Gráfica de producción">
                    <defs><linearGradient id="area" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#2777dd" stopOpacity=".28" /><stop offset="100%" stopColor="#2777dd" stopOpacity=".02" /></linearGradient></defs>
                    <path d="M0 153 C55 140 65 126 116 132 S180 104 232 111 S300 75 348 84 S410 62 465 69 S530 52 581 58 S650 30 700 38 L700 220 L0 220Z" fill="url(#area)" />
                    <path d="M0 153 C55 140 65 126 116 132 S180 104 232 111 S300 75 348 84 S410 62 465 69 S530 52 581 58 S650 30 700 38" fill="none" stroke="#2777dd" strokeWidth="3" vectorEffect="non-scaling-stroke" />
                    {[["0","153"],["116","132"],["232","111"],["348","84"],["465","69"],["581","58"],["700","38"]].map(([x,y], i) => <g key={x}><circle cx={x} cy={y} r="8" fill="#fff" stroke="#2777dd" strokeWidth="3" vectorEffect="non-scaling-stroke" /><title>{["3,920", "4,180", "4,360", "4,720", "5,020", "5,410", "4,850"][i]} kg</title></g>)}
                  </svg>
                  <div className="x-labels">{["20 May", "21 May", "22 May", "23 May", "24 May", "25 May", "Hoy, 26 May"].map((d) => <span key={d}>{d}</span>)}</div>
                </div>
              </div>
            </article>
            <article className="panel shift-chart">
              <SectionTitle title="Producción por turno" subtitle="Distribución de hoy" action={<button className="more-btn">•••</button>} />
              <div className="donut-wrap">
                <div className="donut"><div><strong>4,850</strong><span>kg totales</span></div></div>
                <div className="shift-legend">
                  <div><span><i className="dot morning" />Matutino</span><b>2,100 kg</b><small>43.3 %</small></div>
                  <div><span><i className="dot evening" />Vespertino</span><b>1,750 kg</b><small>36.1 %</small></div>
                  <div><span><i className="dot night" />Nocturno</span><b>1,000 kg</b><small>20.6 %</small></div>
                </div>
              </div>
              <div className="shift-bars">{[["Matutino", 100, "2,100"], ["Vespertino", 83, "1,750"], ["Nocturno", 48, "1,000"]].map(([name, width, value], i) => <div key={name}><span>{name}</span><div><i className={`bar-${i}`} style={{ width: `${width}%` }}><title>{value} kg</title></i></div></div>)}</div>
            </article>
          </section>

          <section className="panel machinery-section">
            <SectionTitle title="Estado de maquinaria" subtitle="Monitoreo en tiempo real de los equipos" action={<div className="inline-filters"><label><Icon name="filter" size={15} /><select><option>Todos los equipos</option><option>Lavadoras</option><option>Secadoras</option></select></label><label><select><option>Todos los estados</option><option>Trabajando</option><option>Disponible</option></select></label><Button variant="ghost">Ver todas</Button></div>} />
            <div className="machine-grid">{machines.map((machine) => <article className="machine-card" key={machine.code}>
              <div className="machine-head"><span className={`machine-icon ${machine.tone}`}><Icon name="machine" /></span><div><b>{machine.name}</b><span>{machine.code} · {machine.type}</span></div><Status tone={machine.tone}>{machine.status}</Status></div>
              <div className="machine-detail"><span>{machine.status === "Trabajando" ? "CARGA Y OPERADOR" : "INFORMACIÓN ACTUAL"}</span><b>{machine.detail}</b><p><Icon name="user" size={14} />{machine.person}</p></div>
              <div className="hours"><div><span>Horas desde mantenimiento</span><b>{machine.hours}</b></div><div className={`progress ${machine.progress >= 95 ? "critical" : ""}`}><i style={{ width: `${machine.progress}%` }} /></div></div>
              <button className="detail-link" onClick={() => setDrawerMachine(machine)}>Ver detalle <Icon name="chevron" size={14} /></button>
            </article>)}</div>
          </section>

          <section className="attention-layout">
            <article className="panel attention-panel">
              <SectionTitle title="Atención requerida" subtitle="Alertas ordenadas por prioridad" action={<span className="counter-pill">4 pendientes</span>} />
              <div className="alerts-list">
                <div className="alert-row critical"><span className="alert-icon"><Icon name="alert" /></span><div className="alert-main"><div><Status tone="red">Crítica</Status><small>Hace 12 min</small></div><b>Lavadora 04 fuera de servicio por falla de motor</b><p>La producción del lote LOT-2025-0841 se encuentra detenida.</p></div><Button variant="secondary">Ver incidencia</Button></div>
                <div className="alert-row high"><span className="alert-icon"><Icon name="maintenance" /></span><div className="alert-main"><div><Status tone="red">Alta</Status><small>Vencido hace 2 días</small></div><b>Mantenimiento preventivo vencido de Secadora 02</b><p>El equipo acumula 518 horas de operación.</p></div><Button variant="secondary">Programar</Button></div>
                <div className="alert-row warning"><span className="alert-icon"><Icon name="clock" /></span><div className="alert-main"><div><Status tone="orange">Advertencia</Status><small>Próximo</small></div><b>Lavadora 01 próxima a mantenimiento</b><p>485 de 500 horas · Faltan 15 horas de operación.</p><div className="alert-progress"><i /></div></div><Button variant="secondary">Programar</Button></div>
                <div className="alert-row warning"><span className="alert-icon"><Icon name="box" /></span><div className="alert-main"><div><Status tone="orange">Advertencia</Status><small>Inventario</small></div><b>Detergente industrial por debajo del mínimo</b><p>Existencia: 25 L · Mínimo configurado: 50 L.</p></div><Button variant="secondary">Solicitar compra</Button></div>
              </div>
            </article>
            <aside className="quick-panel">
              <SectionTitle title="Accesos rápidos" subtitle="Registra una actividad" />
              <button onClick={() => setModal("fault")}><span className="quick-icon red"><Icon name="alert" /></span><div><b>Reportar falla</b><small>Crear una incidencia</small></div><Icon name="chevron" size={15} /></button>
              <button><span className="quick-icon orange"><Icon name="maintenance" /></span><div><b>Programar mantenimiento</b><small>Preventivo o correctivo</small></div><Icon name="chevron" size={15} /></button>
              <button><span className="quick-icon blue"><Icon name="archive" /></span><div><b>Entrada de inventario</b><small>Registrar existencias</small></div><Icon name="chevron" size={15} /></button>
              <button><span className="quick-icon violet"><Icon name="package" /></span><div><b>Solicitud de compra</b><small>Iniciar una requisición</small></div><Icon name="chevron" size={15} /></button>
            </aside>
          </section>

          <section className="panel table-panel">
            <SectionTitle title="Productos que requieren reposición" subtitle="Existencias por debajo del stock mínimo" action={<Button variant="ghost">Ver inventario completo <Icon name="chevron" size={14} /></Button>} />
            <div className="table-scroll"><table><thead><tr><th>Producto</th><th>Categoría</th><th>Existencia actual</th><th>Stock mínimo</th><th>Estado</th><th>Acción</th></tr></thead><tbody>{inventory.map((row) => <tr key={row[0]}><td><div className="product-cell"><span><Icon name={row[1] === "Químicos" ? "droplet" : "box"} /></span><b>{row[0]}</b></div></td><td>{row[1]}</td><td><strong className="low-stock">{row[2]}</strong></td><td>Mínimo {row[3]}</td><td><Status tone="orange">Stock bajo</Status></td><td><Button variant="secondary">Solicitar compra</Button></td></tr>)}</tbody></table></div>
          </section>

          <section className="panel table-panel recent">
            <SectionTitle title="Producción reciente" subtitle="Últimos movimientos registrados en planta" action={<Button variant="ghost">Ver toda la producción <Icon name="chevron" size={14} /></Button>} />
            <div className="table-toolbar"><div className="table-search"><Icon name="search" size={16} /><input value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Buscar folio, máquina o empleado…" /></div><label><Icon name="filter" size={15} /><select><option>Todos los procesos</option><option>Lavado</option><option>Secado</option><option>Planchado</option></select></label><label><select><option>Todos los estados</option><option>En proceso</option><option>Finalizado</option><option>Detenido</option></select></label></div>
            <div className="table-scroll"><table><thead><tr>{["Folio del lote", "Hora", "Máquina", "Empleado", "Turno", "Proceso", "Kilogramos", "Estado", ""].map((h) => <th key={h}>{h}</th>)}</tr></thead><tbody>{rows.map((row) => <tr key={row[0]}>{row.map((cell, index) => <td key={index}>{index === 0 ? <b className="folio">{cell}</b> : index === 7 ? <Status tone={cell === "Finalizado" ? "green" : cell === "Detenido" ? "red" : "blue"}>{cell}</Status> : index === 6 ? <b>{cell}</b> : cell}</td>)}<td><button className="row-action" aria-label="Ver detalle"><Icon name="chevron" size={16} /></button></td></tr>)}{rows.length === 0 && <tr><td colSpan={9}><div className="empty-state"><Icon name="search" size={28} /><b>Sin resultados</b><span>Prueba con otro folio, máquina o empleado.</span></div></td></tr>}</tbody></table></div>
          </section>
          <footer><span>LaundryControl · Operación Cancún</span><span><i /> Todos los sistemas operando</span><span>Última sincronización: 26 may 2025, 10:45</span></footer>
        </main>
      </div>

      {drawerMachine && <><div className="drawer-overlay" onClick={() => setDrawerMachine(null)} /><aside className="detail-drawer"><div className="drawer-head"><div><span className="eyebrow">DETALLE DE EQUIPO</span><h2>{drawerMachine.name}</h2><p>{drawerMachine.code} · {drawerMachine.type}</p></div><button className="icon-btn" onClick={() => setDrawerMachine(null)}><Icon name="close" /></button></div><div className="drawer-hero"><span className={`machine-icon ${drawerMachine.tone}`}><Icon name="machine" size={25} /></span><Status tone={drawerMachine.tone}>{drawerMachine.status}</Status><b>{drawerMachine.detail}</b></div><div className="drawer-section"><h3>Información operativa</h3><dl><div><dt>Operador responsable</dt><dd>{drawerMachine.person}</dd></div><div><dt>Horas acumuladas</dt><dd>{drawerMachine.hours}</dd></div><div><dt>Último mantenimiento</dt><dd>08 de abril de 2025</dd></div><div><dt>Ubicación</dt><dd>Nave principal · Zona A</dd></div></dl></div><div className="drawer-section"><h3>Uso desde mantenimiento</h3><div className="drawer-progress-label"><span>Horas acumuladas</span><b>{drawerMachine.progress}%</b></div><div className={`progress ${drawerMachine.progress >= 95 ? "critical" : ""}`}><i style={{ width: `${drawerMachine.progress}%` }} /></div><p>El mantenimiento está configurado cada 500 horas de operación.</p></div><div className="drawer-actions"><Button variant="secondary" icon="maintenance">Programar mantenimiento</Button><Button>Ver historial completo</Button></div></aside></>}

      {modal === "production" && <Modal title="Registrar producción" onClose={() => { setModal(null); setFormError(""); }}><form onSubmit={(e) => submitForm(e, "Producción registrada correctamente.")}><div className="form-grid"><FormField label="Folio del lote" required><input name="lote" defaultValue="LOT-2025-0848" /></FormField><FormField label="Máquina" required><select name="maquina" defaultValue=""><option value="" disabled>Selecciona una máquina</option><option>Lavadora 01 · LAV-001</option><option>Secadora 01 · SEC-001</option><option>Planchadora 02 · PLA-002</option></select></FormField><FormField label="Empleado" required><select name="empleado" defaultValue=""><option value="" disabled>Selecciona un empleado</option><option>Carlos López</option><option>María Torres</option><option>Ana Méndez</option></select></FormField><FormField label="Turno" required><select name="turno" defaultValue="Matutino"><option>Matutino</option><option>Vespertino</option><option>Nocturno</option></select></FormField><FormField label="Proceso" required><select name="proceso" defaultValue=""><option value="" disabled>Selecciona un proceso</option><option>Lavado</option><option>Secado</option><option>Planchado</option></select></FormField><FormField label="Kilogramos" required><div className="input-unit"><input name="kilogramos" type="number" placeholder="0" /><span>kg</span></div></FormField></div>{formError && <div className="form-error"><Icon name="error" size={16} />{formError}</div>}<div className="modal-actions"><Button variant="secondary" onClick={() => setModal(null)}>Cancelar</Button><Button type="submit" icon="check">Guardar producción</Button></div></form></Modal>}
      {modal === "fault" && <Modal title="Reportar falla" onClose={() => { setModal(null); setFormError(""); }}><form onSubmit={(e) => submitForm(e, "Falla reportada. Se notificó al equipo de mantenimiento.")}><div className="form-grid one"><FormField label="Máquina o equipo" required><select name="maquina" defaultValue=""><option value="" disabled>Selecciona un equipo</option>{machines.map((m) => <option key={m.code}>{m.name} · {m.code}</option>)}</select></FormField><FormField label="Descripción de la falla" required><textarea name="descripcion" rows={4} placeholder="Describe qué ocurrió y cómo afecta la operación…" /></FormField><FormField label="Prioridad" required><select name="prioridad" defaultValue=""><option value="" disabled>Selecciona una prioridad</option><option>Crítica · Operación detenida</option><option>Alta · Requiere atención inmediata</option><option>Media · Puede seguir operando</option></select></FormField><FormField label="Evidencia" required><label className="upload"><Icon name="file" /><span><b>Adjuntar fotografía o documento</b><small>PNG, JPG o PDF · Máximo 10 MB</small></span><input name="evidencia" type="file" /></label></FormField></div>{formError && <div className="form-error"><Icon name="error" size={16} />{formError}</div>}<div className="modal-actions"><Button variant="secondary" onClick={() => setModal(null)}>Cancelar</Button><Button type="submit" variant="danger" icon="alert">Reportar falla</Button></div></form></Modal>}
      {toast && <div className="toast"><span><Icon name="check" /></span><div><b>Registro guardado</b><p>{toast}</p></div><button onClick={() => setToast("")}><Icon name="close" size={16} /></button></div>}
    </div>
  );
}
