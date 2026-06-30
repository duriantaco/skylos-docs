# Skylos Documentation

Documentation for Skylos - a static analysis tool for Python, TypeScript, JavaScript, Java, Go, Kotlin, PHP, Rust, Dart, C#, Shell, and deployment config that finds dead code, security vulnerabilities, code quality issues, and evidence-backed AI-code defects.

## Quick Links

| Doc | Description |
|-----|-------------|
| [Introduction](introduction.mdx) | What is Skylos, core capabilities, supported languages |
| [Language Support](docs/language-support.mdx) | Scanner scope across supported languages |
| [中文文档](docs/zh-cn/index.mdx) | Chinese docs entry point |
| [Installation](installation.mdx) | Setup and configuration |
| [CLI Reference](cli-reference.mdx) | All command-line options |
| [AI Features](docs/ai-features.mdx) | In-loop verification, AI remediation, local LLM setup |
| [Why Skylos](why-skylos.mdx) | Comparison with other tools |

## Product Docs

### Scan
| Doc | Description |
|-----|-------------|
| [Dead Code Detection](dead-code-detection.mdx) | Find unused functions, imports, classes, variables |
| [Smart Tracing](smart-tracing.mdx) | Runtime call tracing with `--trace` to catch dynamic dispatch |
| [Security Analysis](security-analysis.mdx) | Taint analysis, CI/CD and edge config checks, webhook signature checks, secrets detection |
| [Vibe Coding & AI Debt](docs/concepts/vibe-coding.mdx) | AI-generated code defects, including hallucinated helpers, disabled controls, and package/API hallucinations |
| [AI Defect Verification](docs/ai-defects.mdx) | Method, rule grouping, output contract, and blocking posture for `--ai-defects` |
| [AI Hallucination Contracts](docs/ai-contracts.mdx) | Repo-specific generated-code contracts for `skylos verify --contract` |
| [AI Features](docs/ai-features.mdx) | `skylos verify`, AI-code defect benchmarks, remediation proof tests, and LLM-assisted review |
| [Code Quality](code-quality.mdx) | Complexity, nesting, structure checks |
| [Technical Debt](docs/technical-debt.mdx) | Structural debt hotspots, changed-view reviews, and debt baselines |
| [Framework Awareness](framework-awareness.mdx) | Django, Flask, FastAPI, Pytest support |

### Gate
| Doc | Description |
|-----|-------------|
| [Quality Gate](quality-gate.mdx) | Block bad code with ratchet workflow |
| [CI/CD Integration](ci-cd.mdx) | GitHub Actions, GitLab, Jenkins, Azure DevOps |

### Fix
| Doc | Description |
|-----|-------------|
| [AI Features](docs/ai-features.mdx) | `skylos agent scan`, `skylos verify`, and verification-backed remediation |
| [MCP Server](docs/mcp-server.mdx) | Agent-callable tools including `verify_change` for AI-code trust checks |

---

## Free vs Pro/Enterprise

Skylos is **fully functional offline and free**. Pro/Enterprise adds team governance and CI/CD workflow features.

| Capability | Free (Local) | Pro / Enterprise |
|------------|--------------|------------------|
| Dead code detection | ✅ | ✅ |
| Security scanning (`--danger`) | ✅ | ✅ |
| Quality checks (`--quality`) | ✅ | ✅ |
| AI-defect checks (`--ai-defects`, `ai_defects`) | ✅ | ✅ |
| Smart tracing (`--trace`) | ✅ | ✅ |
| AI fix/audit (BYOK) | ✅ | ✅ |
| **Quality Gate** | CLI exit codes | + Wait/poll for dashboard approval |
| **Override method** | `--force` (local bypass) | Dashboard button (audit logged) |
| **Finding suppression** | Local only | Team-governed + persistent |
| **Strict mode** | ❌ Anyone can bypass | ✅ Admin-controlled |
| **Baseline** | Local history | Cloud baseline on `main` (team-wide) |
| **GitHub check status** | Basic pass/fail | Updates on approval |

### When to use Pro/Enterprise

- **Teams** needing shared baselines across developers
- **Compliance** requiring audit logs for overrides and suppressions  
- **CI/CD** workflows that should wait for approval instead of failing
- **Governance** where admins control who can bypass gates

### Free is enough if

- You're a solo developer or small team
- Local `--force` bypass is acceptable
- You don't need audit trails for overrides
- CLI exit codes work for your CI pipeline


---

## Development

These docs are built with [Docusaurus](https://docusaurus.io/).

### Prerequisites

- Node.js 18+
- npm or yarn

### Local Development
```bash
# Install dependencies
npm install

# Start dev server
npm start
```

Docs will be available at `http://localhost:3000`.

### Build
```bash
# Build static files
npm run build

# Serve build locally
npm run serve
```

### Deployment

Push to `main` branch to trigger automatic deployment via Vercel/Netlify/GitHub Pages.
