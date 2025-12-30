# Skylos Documentation

Documentation for Skylos - a static analysis tool for Python that finds dead code, security vulnerabilities, and code quality issues.

## Quick Links

| Doc | Description |
|-----|-------------|
| [Introduction](introduction.mdx) | What is Skylos, core capabilities, supported languages |
| [Installation](installation.mdx) | Setup and configuration |
| [CLI Reference](cli-reference.mdx) | All command-line options |
| [Why Skylos](why-skylos.mdx) | Comparison with other tools |

## Product Docs

### Scan
| Doc | Description |
|-----|-------------|
| [Dead Code Detection](dead-code-detection.mdx) | Find unused functions, imports, classes, variables |
| [Smart Tracing](smart-tracing.mdx) | Runtime call tracing with `--trace` to catch dynamic dispatch |
| [Security Analysis](security-analysis.mdx) | Taint analysis, SQL injection, secrets detection |
| [Code Quality](code-quality.mdx) | Complexity, nesting, structure checks |
| [Framework Awareness](framework-awareness.mdx) | Django, Flask, FastAPI, Pytest support |

### Gate
| Doc | Description |
|-----|-------------|
| [Quality Gate](quality-gate.mdx) | Block bad code with ratchet workflow |
| [CI/CD Integration](ci-cd.mdx) | GitHub Actions, GitLab, Jenkins, Azure DevOps |

### Fix
| Doc | Description |
|-----|-------------|
| [AI Features](ai-features.mdx) | `--fix` and `--audit` with OpenAI/Anthropic |

---

## Free vs Pro/Enterprise

Skylos is **fully functional offline and free**. Pro/Enterprise adds team governance and CI/CD workflow features.

| Capability | Free (Local) | Pro / Enterprise |
|------------|--------------|------------------|
| Dead code detection | ✅ | ✅ |
| Security scanning (`--danger`) | ✅ | ✅ |
| Quality checks (`--quality`) | ✅ | ✅ |
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
