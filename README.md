[English](README.md) | [Português do Brasil](README.pt-BR.md)

---

# 🌸 Flowrish

> **Community and collaborative platform for physical book swapping among readers, featuring direct WhatsApp coordination and a Claymorphism Soft 3D interface.**

[![Release SemVer](https://img.shields.io/badge/release-v1.2.0-DF949D.svg?style=flat-square)](CHANGELOG.md)
[![License: MIT](https://img.shields.io/badge/License-MIT-43442A.svg?style=flat-square)](LICENSE)
[![Tests: Vitest](https://img.shields.io/badge/tests-9%20passed-6FA779.svg?style=flat-square)](tests/unit/)
[![Platform](https://img.shields.io/badge/platform-Linux%20%7C%20Windows-F7EFDA.svg?style=flat-square&logoColor=353620)](#-installation-and-execution)
[![Design: Claymorphism](https://img.shields.io/badge/design-Claymorphism%20Soft%203D-DF949D.svg?style=flat-square)](#-design-system-claymorphism-soft-3d)

---

## 📖 About the Project

**Flowrish** was created to bring idle bookshelf volumes back to life. Through an interactive catalog, readers can list their books, discover new titles, and propose one-for-one exchanges directly via WhatsApp, fostering sustainability, circular economy, and democratic access to reading.

The project is built without heavy frontend frameworks (pure Vanilla ES Modules), delivering fast performance, instant loading, and seamless cross-platform portability.

---

## ✨ Key Features

- **Interactive Library**: Full catalog with real-time title/author search and combined filtering by genre, condition, and origin.
- **Seamless Swapping via WhatsApp**:
  - Contextual modal on the book details page allowing readers to choose which book from their own collection they wish to offer in exchange.
  - Automatic generation of formatted WhatsApp links with respectful opening messages and secure postal pickup recommendations (Correios Clique e Retire).
- **My Collection**: Exclusive reader dashboard to manage listed titles, edit book details, or mark items as swapped.
- **Advertiser Profile & Genuine Reviews**:
  - Public reader profile showcasing bio, location, and listed collection.
  - Authentic reputation system (no simulated ratings): 1-to-5 star reviews between verified users with response capabilities.
- **Claymorphism Soft 3D Design System**:
  - Organic aesthetic featuring layered inset highlights and soft drop shadows, rounded pill shapes, and tactile button feedback.
  - Instant theme toggle between **Dark Mode** and **Light Mode** with `localStorage` persistence and cross-tab synchronization.
- **Zero Mocks**:
  - 100% powered by authentic Firebase Firestore data (`biblioteca-76f0c`) and official metadata via Google Books API.
  - Native local vector cover fallback ([`assets/sem-capa.svg`](assets/sem-capa.svg)), eliminating brittle external image placeholders.

---

## 🎨 Design System: Claymorphism Soft 3D

Flowrish embraces an original visual design language grounded in **Soft 3D / Claymorphism**:

| Element | Token / Specification | Visual Impression |
|---|---|---|
| **Olive Dark** | `#43442A` / `#353620` | Grounded, cozy, and natural reading base |
| **Antique Rose** | `#DF949D` / `#C97E87` | Tactile raised buttons and micro-interactions |
| **Soft Cream** | `#F7EFDA` / `#FBF6EB` | Warm typography and comfortable card surfaces |
| **Clay Shadows** | Dual-layer inset highlights + drop shadows | Physical feeling of depth, squish, and tactile feedback |

---

## 🚀 Installation and Execution

### Prerequisites
- **Node.js** 20+ (LTS) and **npm**
- **Git**

### Step-by-Step

1. **Clone the repository**:
   ```bash
   git clone https://github.com/nepotira/Flowrish.git
   cd Flowrish
   ```

2. **Install development dependencies**:
   ```bash
   npm install
   ```

3. **Start the local server**:
   - **Linux / macOS**:
     ```bash
     ./iniciar-localhost.sh
     ```
   - **Windows**:
     Double-click `iniciar-localhost.bat` or run in terminal:
     ```cmd
     iniciar-localhost.bat
     ```

4. **Open the application**:
   Navigate to [http://localhost:8080](http://localhost:8080) in your browser.

---

## 🧪 Automated Testing

Flowrish uses **Vitest** for unit validation and business logic correctness:

```bash
# Run all unit tests
npm test
```

Current test suite status:
```text
✓ tests/unit/validators.test.js (5 tests)
✓ tests/unit/theme-and-data.test.js (4 tests)
Test Files: 2 passed (2) | Tests: 9 passed (9)
```

---

## 📁 Directory Structure

```text
Flowrish/
├── .agents/memory/         # Project persistent memory (STATE, HANDOFF, LESSONS)
├── .github/                # GitHub configurations (Dependabot, templates, CODEOWNERS)
├── assets/                 # Vector SVGs, high-resolution logos, and terms PDF
├── css/                    # Modular stylesheets
│   ├── animations.css      # Floating 3D and transition keyframes
│   ├── base.css            # Typography reset and base tags
│   ├── components.css      # Tactile buttons, cards, form inputs, and modals
│   ├── variables.css       # Claymorphism design tokens and palette
│   └── pages/              # Page-specific styling rules
├── docs/                   # Technical documentation and environment logs
│   ├── ENVIRONMENT.md      # Operating environment log
│   └── PROJECT_STATE.md    # Architecture and route inventory
├── js/                     # Native JavaScript modules (ES Modules)
│   ├── acervo.js           # User personal collection management
│   ├── anunciante.js       # Public advertiser profile
│   ├── book-actions.js     # Swap offer, edit, and deletion routines
│   ├── book-card.js        # Reusable book card component
│   ├── reviews.js          # Reader profile reviews and ratings
│   ├── storage.js          # Firestore database and Firebase Auth integration
│   ├── theme.js            # Light/dark mode toggle and storage
│   └── validators.js       # Phone number and WhatsApp link validation
├── tests/unit/             # Vitest unit test suite
├── CHANGELOG.md            # Release history (Keep a Changelog + SemVer)
├── CONTRIBUTING.md         # Community contribution guidelines
├── LICENSE                 # Official MIT License
├── NOTICE                  # Formal copyright and third-party notices
├── SECURITY.md             # Security policy and disclosure process
├── server.js               # Native Node.js local server (no bundlers required)
└── index.html              # Main platform landing page
```

---

## 📜 Governance and License

Distributed under the **MIT License**. See [`LICENSE`](LICENSE) for complete details.

- **Changelog**: refer to [`CHANGELOG.md`](CHANGELOG.md).
- **Contributing**: read [`CONTRIBUTING.md`](CONTRIBUTING.md).
- **Security**: review [`SECURITY.md`](SECURITY.md).
- **Third-Party Attribution**: review [`THIRD_PARTY_LICENSES.md`](THIRD_PARTY_LICENSES.md).

---

Crafted with care by **Lorrany Torres** and **Nepotira** 🌸
