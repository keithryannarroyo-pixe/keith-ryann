import { bikes, spec } from "./bikes.js";
import { $, esc } from "./util.js";
import { currentUser, login, logout } from "./auth.js";
import { addOrder } from "./orders.js";
import { initDashboard, renderDashboard } from "./dashboard.js";

const bySlug = new Map(bikes.map(b => [b.name, b]));

/* =============== FRONT PAGE =============== */
const ccs = bikes.map(b => b.cc);
$("fact-count").textContent = bikes.length;
$("fact-range").textContent = `${Math.min(...ccs)}–${Math.max(...ccs)}cc`;
$("fact-groups").textContent = new Set(bikes.map(b => b.group)).size;

const a = bySlug.get("Click 125");
const b = bySlug.get("Click 160");
const spotlightRows = [
  ["Displacement", "Engine", "Displacement"], ["Cooling", null, "cooling"], ["Max power", "Engine", "Max power"], ["Max torque", "Engine", "Max torque"],
  ["Transmission", null, "transmission"], ["Fuel tank", "Engine", "Fuel tank"], ["Seat height", "Dimensions", "Seat height"], ["Curb weight", "Dimensions", "Curb weight"]
];
const val = (m, section, key) => (section ? spec(m, section, key) : m[key]) ?? "—";
$("spotlight-body").innerHTML = spotlightRows.map(([label, section, key]) =>
  `<tr><th scope="row">${esc(label)}</th><td>${esc(val(a, section, key))}</td><td>${esc(val(b, section, key))}</td></tr>`).join("");

const tableCols = [
  ["Type", m => m.type],
  ["Engine", m => `${m.cc}cc`],
  ["Cooling", m => m.cooling],
  ["Transmission", m => m.transmission],
  ["Max power", m => val(m, "Engine", "Max power")],
  ["Max torque", m => val(m, "Engine", "Max torque")],
  ["Fuel tank", m => val(m, "Engine", "Fuel tank")],
  ["Seat height", m => val(m, "Dimensions", "Seat height")],
  ["Curb weight", m => val(m, "Dimensions", "Curb weight")]
];
$("spec-head").innerHTML = `<tr><th scope="col">Model</th>${tableCols.map(([h]) => `<th scope="col">${esc(h)}</th>`).join("")}</tr>`;
$("spec-body").innerHTML = bikes.map(m => `
  <tr>
    <th scope="row"><button type="button" class="link-btn" data-name="${esc(m.name)}">${esc(m.name)}</button></th>
    ${tableCols.map(([, get]) => `<td>${esc(get(m))}</td>`).join("")}
  </tr>`).join("");

/* =============== MODEL CARDS + FILTERS =============== */
const grid = $("product-grid");
const filtersBox = $("filters");
const groups = ["All", ...new Set(bikes.map(m => m.group))];
let activeGroup = "All";

const photoHTML = m => `<img src="${esc(m.image)}" alt="Honda ${esc(m.name)} motorcycle" loading="lazy"><span class="fallback" aria-hidden="true">🏍️</span>`;

function watchPhotos(scope) {
  scope.querySelectorAll("img").forEach(img => {
    const fail = () => img.parentElement.classList.add("no-photo");
    img.addEventListener("error", fail);
    if (img.complete && img.naturalWidth === 0) fail();
  });
}

function renderCards() {
  const list = activeGroup === "All" ? bikes : bikes.filter(m => m.group === activeGroup);
  grid.innerHTML = list.map(m => `
    <button type="button" class="card" data-name="${esc(m.name)}" aria-label="${esc(m.name)}, view specifications">
      <span class="card-photo">${photoHTML(m)}</span>
      <span class="card-body">
        <h3>${esc(m.name)}</h3>
        <span class="type">${esc(m.type)}</span>
        <span class="meta">${m.cc}cc · ${esc(m.transmission)}</span>
      </span>
    </button>`).join("");
  watchPhotos(grid);
}

function renderFilters() {
  filtersBox.innerHTML = groups.map(g =>
    `<button type="button" class="filter" data-group="${esc(g)}" aria-pressed="${g === activeGroup}">${esc(g)}</button>`).join("");
}

filtersBox.addEventListener("click", e => {
  const btn = e.target.closest(".filter");
  if (!btn) return;
  activeGroup = btn.dataset.group;
  renderFilters();
  renderCards();
});

/* =============== DETAILS DIALOG =============== */
const details = $("details");
let openedBike = null;

function openDetails(name) {
  const m = bySlug.get(name);
  if (!m) return;
  openedBike = m;
  $("details-title").textContent = `Honda ${m.name}`;
  $("details-photo").className = "dialog-photo";
  $("details-photo").innerHTML = photoHTML(m);
  watchPhotos($("details-photo"));

  const sections = Object.entries(m.specs).map(([title, rows]) => `
    <section class="spec-group">
      <h3>${esc(title)}</h3>
      <dl class="spec-list">
        ${Object.entries(rows).map(([k, v]) => `<div><dt>${esc(k)}</dt><dd>${esc(v)}</dd></div>`).join("")}
      </dl>
    </section>`).join("");
  const feats = m.highlights?.length
    ? `<section class="spec-group"><h3>Features</h3><ul class="feature-list">${m.highlights.map(h => `<li>${esc(h)}</li>`).join("")}</ul></section>`
    : "";
  $("details-list").innerHTML = `<p class="dialog-sub">${esc(m.type)} · ${esc(m.group)}</p>` + sections + feats;
  $("details-note").textContent = `Specs shown: ${m.variant} Figures may vary by variant and model year; confirm with an authorized Honda dealer or hondaphil.com.`;
  details.showModal();
}

document.addEventListener("click", e => {
  const trigger = e.target.closest("#view-store [data-name]");
  if (trigger) openDetails(trigger.dataset.name);
});
$("details-close").addEventListener("click", () => details.close());
details.addEventListener("click", e => { if (e.target === details) details.close(); });

/* =============== ORDER + DELIVERY LOCATION =============== */
const orderDialog = $("order-dialog");
const orderForm = $("order-form");

function localToday() {
  const d = new Date();
  d.setMinutes(d.getMinutes() - d.getTimezoneOffset());
  return d.toISOString().slice(0, 10);
}

function setLocationStatus(text, isError = false) {
  const el = $("loc-status");
  el.textContent = text;
  el.classList.toggle("error", isError);
}

function openOrder(bikeName) {
  orderForm.reset();
  $("o-lat").value = "";
  $("o-lng").value = "";
  setLocationStatus("");
  $("o-bike").value = bikeName;
  $("o-date").min = localToday();
  details.close();
  orderDialog.showModal();
}

$("order-btn").addEventListener("click", () => openedBike && openOrder(openedBike.name));
$("order-close").addEventListener("click", () => orderDialog.close());
orderDialog.addEventListener("click", e => { if (e.target === orderDialog) orderDialog.close(); });

// "Use my current location": saves GPS coordinates so the rider can navigate straight to the spot
$("locate-btn").addEventListener("click", () => {
  if (!navigator.geolocation) return setLocationStatus("Your browser can't share its location. Type the address instead.", true);
  setLocationStatus("Finding your location…");
  navigator.geolocation.getCurrentPosition(
    pos => {
      $("o-lat").value = pos.coords.latitude.toFixed(6);
      $("o-lng").value = pos.coords.longitude.toFixed(6);
      setLocationStatus(`Location saved (accurate to about ${Math.round(pos.coords.accuracy)} m). Still fill in the address below.`);
    },
    err => setLocationStatus(
      err.code === err.PERMISSION_DENIED
        ? "Location permission was blocked. Type the address instead."
        : "Couldn't get your location. Type the address instead.", true),
    { enableHighAccuracy: true, timeout: 10000 }
  );
});

orderForm.addEventListener("submit", e => {
  e.preventDefault();
  const f = new FormData(orderForm);
  const text = k => String(f.get(k) || "").trim();
  const lat = text("lat"), lng = text("lng");

  const order = addOrder({
    bike: text("bike"),
    fullName: text("fullName"),
    phone: text("phone"),
    address: text("address"),
    barangay: text("barangay"),
    city: text("city"),
    province: text("province"),
    landmark: text("landmark"),
    date: text("date"),
    lat: lat ? Number(lat) : null,
    lng: lng ? Number(lng) : null
  });

  orderDialog.close();
  showToast(order
    ? `Order ${order.id} placed. We will contact you at ${order.phone} to confirm delivery.`
    : "Couldn't save the order. Check that your browser allows site storage.");
});

let toastTimer;
function showToast(msg) {
  const t = $("toast");
  t.textContent = msg;
  t.hidden = false;
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => { t.hidden = true; }, 7000);
}

/* =============== LOGIN / LOGOUT =============== */
const loginForm = $("login-form");

loginForm.addEventListener("submit", async e => {
  e.preventDefault();
  const err = $("login-error");
  err.hidden = true;
  const btn = loginForm.querySelector("button[type=submit]");
  btn.disabled = true;

  const result = await login($("l-user").value, $("l-pass").value);
  btn.disabled = false;

  if (result.ok) {
    loginForm.reset();
    location.hash = "#/dashboard";
  } else {
    err.textContent = result.error;
    err.hidden = false;
    $("l-pass").value = "";
    $("l-pass").focus();
  }
});

function doLogout() {
  logout();
  location.hash = "#/";
  route();
  showToast("You have been logged out.");
}

function renderAuthNav() {
  const user = currentUser();
  $("auth-nav").innerHTML = user
    ? `<a href="#/dashboard">Dashboard</a><button type="button" class="nav-btn" id="nav-logout">Log out</button>`
    : `<a href="#/login">Admin login</a>`;
  const out = $("nav-logout");
  if (out) out.addEventListener("click", doLogout);
}
$("logout-btn").addEventListener("click", doLogout);

/* =============== ROUTER =============== */
const views = { store: $("view-store"), login: $("view-login"), dashboard: $("view-dashboard") };
const titles = { store: "Honda Motorcycles", login: "Admin login · Honda Motorcycles", dashboard: "Delivery dashboard · Honda Motorcycles" };

function route() {
  const h = location.hash;
  let view = h === "#/login" ? "login" : h === "#/dashboard" ? "dashboard" : "store";

  // Guards: the dashboard needs a login; logged-in admins skip the login page
  if (view === "dashboard" && !currentUser()) { location.hash = "#/login"; return; }
  if (view === "login" && currentUser()) { location.hash = "#/dashboard"; return; }

  Object.entries(views).forEach(([name, el]) => { el.hidden = name !== view; });
  document.title = titles[view];
  renderAuthNav();

  if (view === "dashboard") {
    $("dash-user").textContent = currentUser();
    renderDashboard();
  }
  if (view === "login") $("l-user").focus();

  if (view === "store" && h.length > 1 && !h.startsWith("#/")) {
    document.querySelector(h)?.scrollIntoView();
  } else {
    window.scrollTo(0, 0);
  }
}
window.addEventListener("hashchange", route);

/* =============== DARK / LIGHT MODE =============== */
const root = document.documentElement;
const toggle = $("theme-toggle");

function setTheme(theme) {
  root.setAttribute("data-theme", theme);
  try { localStorage.setItem("theme", theme); } catch (e) {}
  toggle.textContent = theme === "dark" ? "🌙" : "☀️";
}

let saved = null;
try { saved = localStorage.getItem("theme"); } catch (e) {}
setTheme(saved || (window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark"));
toggle.addEventListener("click", () => setTheme(root.getAttribute("data-theme") === "dark" ? "light" : "dark"));

/* =============== START =============== */
renderFilters();
renderCards();
initDashboard();
route();