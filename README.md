# 🎭 Playwright SauceDemo Automation

![Playwright](https://img.shields.io/badge/Playwright-JavaScript-2E2E2E?logo=playwright)
![Node.js](https://img.shields.io/badge/Node.js-20%2B-339933?logo=node.js)
![CI](https://img.shields.io/badge/CI-GitHub%20Actions-2088FF?logo=githubactions)

End-to-end test automation framework built with **Playwright + JavaScript** for testing the [SauceDemo](https://www.saucedemo.com/) e-commerce application.

The project demonstrates a maintainable and scalable automation architecture following modern QA Engineering practices.

---

## 📌 Overview

**Application Under Test:** SauceDemo
**Test Type:** End-to-End / UI Automation
**Framework:** Playwright Test
**Language:** JavaScript
**CI/CD:** GitHub Actions

### Key Objectives

- Automate critical user journeys
- Build maintainable test architecture
- Apply Page Object Model
- Implement reusable fixtures and test data
- Support cross-browser testing
- Generate test reports
- Integrate automated tests with CI/CD

---

## 🧰 Tech Stack

| Technology     | Purpose              |
| -------------- | -------------------- |
| JavaScript     | Programming Language |
| Node.js        | Runtime              |
| Playwright     | Test Automation      |
| Git            | Version Control      |
| GitHub         | Repository           |
| GitHub Actions | CI/CD                |
| HTML Report    | Test Reporting       |

---

## 🧪 Test Coverage

### Authentication

- Login with valid credentials
- Login with invalid credentials
- Locked-out user
- Logout

### Inventory

- Product listing
- Product details
- Add product to cart
- Remove product from cart

### Cart

- Verify cart items
- Verify product quantity
- Remove product
- Continue shopping

### Checkout

- Checkout validation
- Customer information
- Order overview
- Price calculation
- Complete order

---

## 🏗️ Framework Architecture

```text
tests/
   │
   ├── authentication/
   ├── inventory/
   ├── cart/
   └── checkout/
          │
          ▼
     Page Objects
          │
          ├── Fixtures
          ├── Test Data
          └── Utilities
          │
          ▼
      Playwright
          │
          ▼
      SauceDemo
```

### Design Principles

- Page Object Model
- Test isolation
- Reusable fixtures
- Reliable locators
- Web-first assertions
- Avoid hard waits
- Separation of test logic and UI interaction
- Data-driven testing where appropriate

---

## 📂 Project Structure

```text
playwright-saucedemo/
│
├── .github/
│   └── workflows/
│       └── playwright.yml
│
├── data/
│   └── users.js
│
├── fixtures/
│   └── test-fixtures.js
│
├── pages/
│   ├── LoginPage.js
│   ├── InventoryPage.js
│   ├── CartPage.js
│   └── CheckoutPage.js
│
├── tests/
│   ├── authentication/
│   ├── inventory/
│   ├── cart/
│   └── checkout/
│
├── utils/
│   └── helpers.js
│
├── playwright.config.js
├── package.json
├── package-lock.json
├── .gitignore
└── README.md
```

---

## ⚙️ Prerequisites

- Node.js 20+
- npm
- Git

Verify installation:

```bash
node --version
npm --version
git --version
```

---

## 🚀 Installation

Clone the repository:

```bash
git clone https://github.com/<username>/playwright-saucedemo.git
cd playwright-saucedemo
```

Install dependencies:

```bash
npm ci
```

Install Playwright browsers:

```bash
npx playwright install
```

---

## ▶️ Run Tests

Run all tests:

```bash
npx playwright test
```

Run in headed mode:

```bash
npx playwright test --headed
```

Run specific browser:

```bash
npx playwright test --project=chromium
```

Run specific test:

```bash
npx playwright test tests/authentication/login.spec.js
```

Debug tests:

```bash
npx playwright test --debug
```

---

## 📊 Test Report

Open the HTML report:

```bash
npx playwright show-report
```

The framework provides:

- Test execution results
- Test duration
- Failure details
- Screenshots
- Trace
- Error information

---

## 🌐 Cross-Browser Testing

The framework supports:

- Chromium
- Firefox
- WebKit

Example:

```bash
npx playwright test --project=chromium
npx playwright test --project=firefox
npx playwright test --project=webkit
```

---

## 🔄 CI/CD

Tests are automatically executed through **GitHub Actions**.

```text
Git Push / Pull Request
          ↓
     GitHub Actions
          ↓
   Install Dependencies
          ↓
    Run Playwright Tests
          ↓
     Generate Report
          ↓
      Test Result
```

---

## 🔐 Test Data & Configuration

Environment-specific values should not be hard-coded.

Example:

```env
BASE_URL=https://www.saucedemo.com
```

Sensitive information should be stored using environment variables or GitHub Secrets and must never be committed to the repository.

---

## 📈 Future Improvements

- [ ] API testing
- [ ] Data-driven testing
- [ ] Visual regression testing
- [ ] Accessibility testing
- [ ] Allure reporting
- [ ] Docker support
- [ ] Cloud browser execution
- [ ] Test result notifications

---

## 👨‍💻 Author

**<Your Name>**

Software Quality Assurance | Test Automation

**Focus:** Playwright · JavaScript · API Testing · CI/CD · Quality Engineering

---

## 📚 References

- [Playwright Documentation](https://playwright.dev/docs/intro)
- [SauceDemo](https://www.saucedemo.com/)
