const sections = [
  {
    key: "projects",
    label: "Projects",
    subtitle: "AI, software, and technical work",
    fields: [
      ["title", "Title", "text"],
      ["type", "Type", "text"],
      ["year", "Year", "text"],
      ["role", "Role", "text"],
      ["image", "Image path", "upload", "assets/images/projects/uploads"],
      ["url", "Project URL", "url"],
      ["summary", "Summary", "textarea"],
      ["problem", "Problem", "textarea"],
      ["approach", "Approach", "textarea"],
      ["result", "Result", "textarea"],
      ["stack", "Stack tags", "tags"]
    ],
    template: {
      title: "New project",
      type: "AI and data",
      year: "2026",
      role: "",
      image: "",
      url: "",
      summary: "",
      problem: "",
      approach: "",
      result: "",
      stack: []
    }
  },
  {
    key: "sites",
    label: "Web Builds",
    subtitle: "Live websites and shipped surfaces",
    fields: [
      ["title", "Title", "text"],
      ["image", "Image path", "upload", "assets/images/sites/uploads"],
      ["url", "URL", "url"],
      ["category", "Category", "text"],
      ["role", "Role", "text"],
      ["summary", "Summary", "textarea"]
    ],
    template: {
      title: "New web build",
      image: "",
      url: "",
      category: "",
      role: "",
      summary: ""
    }
  },
  {
    key: "certificates",
    label: "Certificates",
    subtitle: "Documents and credentials",
    fields: [
      ["title", "Title", "text"],
      ["file", "Certificate file", "upload", "certifs"],
      ["format", "Format", "text"],
      ["note", "Note", "textarea"]
    ],
    template: {
      title: "New certificate",
      file: "",
      format: "PDF certificate",
      note: ""
    }
  },
  {
    key: "stack",
    label: "Skills",
    subtitle: "Tools, languages, libraries, and skills",
    fields: [
      ["name", "Name", "text"],
      ["icon", "Icon path", "upload", "assets/icons/stack"],
      ["group", "Group", "text"],
      ["type", "Type", "select", ["software", "language", "library", "skill"]],
      ["iconClass", "Icon class", "text"]
    ],
    template: {
      name: "New skill",
      icon: "assets/images/ui/placeholder.svg",
      group: "Web and product",
      type: "skill"
    }
  },
  {
    key: "aboutCards",
    label: "About Cards",
    subtitle: "Small supporting profile cards",
    fields: [
      ["title", "Title", "text"],
      ["text", "Text", "textarea"]
    ],
    template: {
      title: "New card",
      text: ""
    }
  },
  {
    key: "proofPoints",
    label: "Proof Points",
    subtitle: "Hero numbers and short labels",
    fields: [
      ["value", "Value", "text"],
      ["label", "Label", "text"]
    ],
    template: {
      value: "1",
      label: "new proof point"
    }
  }
];

const state = {
  content: null,
  activeKey: "projects",
  selectedIndex: 0,
  dirty: false
};

const $ = (selector, scope = document) => scope.querySelector(selector);

function activeSection() {
  return sections.find((section) => section.key === state.activeKey);
}

function activeItems() {
  return state.content?.[state.activeKey] || [];
}

function setStatus(selector, message, kind = "") {
  const element = $(selector);
  if (!element) return;
  element.textContent = message;
  element.className = selector === "#save-status" ? `save-status ${kind}` : `status ${kind}`;
}

async function api(path, options = {}) {
  const response = await fetch(path, {
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
      ...(options.headers || {})
    },
    ...options
  });
  const data = await response.json().catch(() => ({}));

  if (!response.ok) {
    throw new Error(data.error || "Request failed.");
  }

  return data;
}

function showLogin() {
  $("#login-view").hidden = false;
  $("#studio-view").hidden = true;
}

function showStudio() {
  $("#login-view").hidden = true;
  $("#studio-view").hidden = false;
}

async function checkSession() {
  try {
    await api("/api/me");
    await loadContent();
    showStudio();
  } catch {
    showLogin();
  }
}

async function loadContent() {
  state.content = await api("/api/content");
  state.activeKey = state.content[state.activeKey] ? state.activeKey : sections[0].key;
  state.selectedIndex = 0;
  state.dirty = false;
  render();
}

function markDirty() {
  state.dirty = true;
  setStatus("#save-status", "Unsaved changes", "");
}

function render() {
  renderNav();
  renderDashboard();
  renderList();
  renderEditor();
}

function renderNav() {
  const nav = $("#section-nav");
  nav.innerHTML = sections
    .map((section) => {
      const count = state.content?.[section.key]?.length || 0;
      return `
        <button class="nav-button ${section.key === state.activeKey ? "active" : ""}" type="button" data-section="${section.key}">
          <span>${section.label}</span>
          <span>${count}</span>
        </button>
      `;
    })
    .join("");
}

function renderDashboard() {
  $("#dashboard").innerHTML = sections
    .map((section) => {
      const count = state.content?.[section.key]?.length || 0;
      return `
        <article class="stat-card">
          <strong>${count}</strong>
          <span>${section.label}</span>
        </article>
      `;
    })
    .join("");
}

function itemTitle(item, index) {
  return item.title || item.name || item.value || `Item ${index + 1}`;
}

function itemSubtitle(item) {
  return item.type || item.category || item.group || item.format || item.label || "Portfolio item";
}

function renderList() {
  const section = activeSection();
  const items = activeItems();
  $("#section-title").textContent = section.label;
  $("#list-title").textContent = section.label;
  $("#item-count").textContent = `${items.length} item${items.length === 1 ? "" : "s"}`;

  if (!items.length) {
    $("#item-list").innerHTML = `<div class="empty-state">No items yet.</div>`;
    return;
  }

  if (state.selectedIndex >= items.length) {
    state.selectedIndex = Math.max(0, items.length - 1);
  }

  $("#item-list").innerHTML = items
    .map(
      (item, index) => `
        <button class="item-button ${index === state.selectedIndex ? "active" : ""}" type="button" data-index="${index}">
          <strong>${escapeHtml(itemTitle(item, index))}</strong>
          <span>${escapeHtml(itemSubtitle(item))}</span>
        </button>
      `
    )
    .join("");
}

function renderEditor() {
  const section = activeSection();
  const items = activeItems();
  const item = items[state.selectedIndex];
  $("#editor-title").textContent = item ? itemTitle(item, state.selectedIndex) : "Nothing selected";
  $("#editor-subtitle").textContent = section.subtitle;

  $("#move-up-button").disabled = !item || state.selectedIndex === 0;
  $("#move-down-button").disabled = !item || state.selectedIndex === items.length - 1;
  $("#duplicate-button").disabled = !item;
  $("#delete-button").disabled = !item;

  if (!item) {
    $("#editor-form").innerHTML = `<div class="empty-state field-full">Add an item to start editing this section.</div>`;
    return;
  }

  $("#editor-form").innerHTML = section.fields.map((field) => renderField(field, item)).join("");
}

function renderField([key, label, type, meta], item) {
  const value = item[key] ?? "";
  const full = type === "textarea" || type === "tags" || type === "upload" ? " field-full" : "";

  if (type === "textarea") {
    return `
      <label class="${full}">
        <span>${label}</span>
        <textarea data-field="${key}">${escapeHtml(value)}</textarea>
      </label>
    `;
  }

  if (type === "tags") {
    return `
      <label class="${full}">
        <span>${label}</span>
        <input data-field="${key}" value="${escapeHtml(Array.isArray(value) ? value.join(", ") : value)}" />
      </label>
    `;
  }

  if (type === "select") {
    return `
      <label class="${full}">
        <span>${label}</span>
        <select data-field="${key}">
          ${meta
            .map((option) => `<option value="${option}" ${value === option ? "selected" : ""}>${option}</option>`)
            .join("")}
        </select>
      </label>
    `;
  }

  if (type === "upload") {
    return `
      <label class="${full}">
        <span>${label}</span>
        <div class="file-row">
          <input data-field="${key}" value="${escapeHtml(value)}" />
          <input type="file" data-upload-field="${key}" data-upload-folder="${meta}" />
        </div>
      </label>
    `;
  }

  return `
    <label class="${full}">
      <span>${label}</span>
      <input data-field="${key}" type="${type}" value="${escapeHtml(value)}" />
    </label>
  `;
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function updateCurrentItem(field, value) {
  const section = activeSection();
  const item = activeItems()[state.selectedIndex];
  if (!item) return;

  const fieldType = section.fields.find(([key]) => key === field)?.[2];
  item[field] =
    fieldType === "tags"
      ? value
          .split(",")
          .map((tag) => tag.trim())
          .filter(Boolean)
      : value;

  markDirty();
  renderList();
}

function addItem() {
  const section = activeSection();
  const items = activeItems();
  items.push(structuredClone(section.template));
  state.selectedIndex = items.length - 1;
  markDirty();
  render();
}

function deleteItem() {
  const items = activeItems();
  if (!items.length) return;
  const title = itemTitle(items[state.selectedIndex], state.selectedIndex);
  if (!confirm(`Delete "${title}"?`)) return;
  items.splice(state.selectedIndex, 1);
  state.selectedIndex = Math.max(0, state.selectedIndex - 1);
  markDirty();
  render();
}

function duplicateItem() {
  const items = activeItems();
  const item = items[state.selectedIndex];
  if (!item) return;
  items.splice(state.selectedIndex + 1, 0, structuredClone(item));
  state.selectedIndex += 1;
  markDirty();
  render();
}

function moveItem(offset) {
  const items = activeItems();
  const nextIndex = state.selectedIndex + offset;
  if (nextIndex < 0 || nextIndex >= items.length) return;
  const [item] = items.splice(state.selectedIndex, 1);
  items.splice(nextIndex, 0, item);
  state.selectedIndex = nextIndex;
  markDirty();
  render();
}

async function uploadFile(input) {
  const file = input.files?.[0];
  if (!file) return;

  const field = input.dataset.uploadField;
  const folder = input.dataset.uploadFolder;
  setStatus("#save-status", `Uploading ${file.name}...`, "");

  const data = await fileToBase64(file);
  const result = await api("/api/upload", {
    method: "POST",
    body: JSON.stringify({
      fileName: file.name,
      contentType: file.type,
      folder,
      data
    })
  });

  updateCurrentItem(field, result.path);
  setStatus("#save-status", `Uploaded ${file.name}`, "good");
  renderEditor();
}

function fileToBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(String(reader.result).split(",")[1]);
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}

async function saveContent() {
  setStatus("#save-status", "Publishing changes...", "");
  $("#save-button").disabled = true;

  try {
    const result = await api("/api/content", {
      method: "POST",
      body: JSON.stringify({ content: state.content })
    });
    state.dirty = false;
    setStatus(
      "#save-status",
      result.mode === "github"
        ? "Published to GitHub. Your deployment should update after the commit builds."
        : "Saved locally.",
      "good"
    );
  } catch (error) {
    setStatus("#save-status", error.message, "error");
  } finally {
    $("#save-button").disabled = false;
  }
}

async function login(event) {
  event.preventDefault();
  setStatus("#login-status", "Signing in...", "");

  try {
    await api("/api/login", {
      method: "POST",
      body: JSON.stringify({
        username: $("#username").value,
        password: $("#password").value
      })
    });
    await loadContent();
    showStudio();
    setStatus("#login-status", "", "");
  } catch (error) {
    setStatus("#login-status", error.message, "error");
  }
}

async function logout() {
  await api("/api/logout", { method: "POST" }).catch(() => {});
  state.content = null;
  showLogin();
}

function bindEvents() {
  $("#login-form").addEventListener("submit", login);
  $("#logout-button").addEventListener("click", logout);
  $("#save-button").addEventListener("click", saveContent);
  $("#add-button").addEventListener("click", addItem);
  $("#delete-button").addEventListener("click", deleteItem);
  $("#duplicate-button").addEventListener("click", duplicateItem);
  $("#move-up-button").addEventListener("click", () => moveItem(-1));
  $("#move-down-button").addEventListener("click", () => moveItem(1));

  $("#section-nav").addEventListener("click", (event) => {
    const button = event.target.closest("[data-section]");
    if (!button) return;
    state.activeKey = button.dataset.section;
    state.selectedIndex = 0;
    render();
  });

  $("#item-list").addEventListener("click", (event) => {
    const button = event.target.closest("[data-index]");
    if (!button) return;
    state.selectedIndex = Number(button.dataset.index);
    render();
  });

  $("#editor-form").addEventListener("input", (event) => {
    const field = event.target.dataset.field;
    if (!field) return;
    updateCurrentItem(field, event.target.value);
  });

  $("#editor-form").addEventListener("change", (event) => {
    if (!event.target.dataset.uploadField) return;
    uploadFile(event.target).catch((error) => {
      setStatus("#save-status", error.message, "error");
    });
  });

  window.addEventListener("beforeunload", (event) => {
    if (!state.dirty) return;
    event.preventDefault();
    event.returnValue = "";
  });
}

bindEvents();
checkSession();
