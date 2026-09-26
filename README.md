# Skylos Documentation

Documentation for Skylos - a static analysis tool for Python, TypeScript, JavaScript, Java, Go, Kotlin, PHP, Rust, Dart, C#, Shell, and deployment config that finds dead code, security vulnerabilities, code quality issues, and evidence-backed AI-code defects.

## Quick Links

| Doc | Description |
|-----|-------------|
| [Introduction](docs/introduction.mdx) | What is Skylos, core capabilities, supported languages |
| [Language Support](docs/language-support.mdx) | Scanner scope across supported languages |
| [中文文档](docs/zh-cn/index.mdx) | Chinese docs entry point |
| [Installation](docs/installation.mdx) | Setup and configuration |
| [CLI Reference](docs/cli-reference.mdx) | Command chooser, commands, flags, and exit codes |
| [Release Reliability](docs/release-reliability.mdx) | Source GPU contracts and exact built-artifact preflight |
| [AI Features](docs/ai-features.mdx) | In-loop verification, AI remediation, local LLM setup |
| [Why Skylos](docs/why-skylos.mdx) | Comparison with other tools |

## Command Chooser

| Question | Command | Input checked |
|---|---|---|
| What problems are in this source tree? | `skylos PATH` | Source and project configuration; dead code by default, every main source analyzer with `-a` |
| What AI-code defects are in this source? | `skylos verify [PATH]` | Source; Python working changes also get a behavior comparison with Git HEAD |
| Will this exact local GPU build fit the declared fleet? | `skylos preflight [ARTIFACT]` | Local built artifact and `.skylos/gpu-targets.yml` or `.yaml` |
| What vulnerabilities are in this container? | `skylos image scan IMAGE@sha256:<digest> --platform os/arch` | Remote registry image scanned by separately installed Trivy; `--fail-on` enables gating |
| What does the combined repo report find? | `skylos suite [DIRECTORY]` | Static, debt, defense, and provenance; findings are report-only by default |
| Does an agent implementation have deployment guardrails? | `skylos defend [DIRECTORY]` | Python and TypeScript/JavaScript LLM integrations; threshold flags or policy enable gating |
| Which Python dead code can Skylos remove? | `skylos clean [PATH] --dry-run` | Python import/function cleanup; no mode is interactive and can write after confirmation |

`verify` scans source for AI-code defects; its separate Python behavior model
compares working files with Git HEAD. `preflight` inspects a local built GPU
artifact. A digest-pinned OCI reference provides identity only and returns
`UNKNOWN` in the CLI. `image scan` finds container CVEs. Run `skylos --help`
for this chooser or `skylos commands` for the installed command-family map.

## Product Docs

### Scan
| Doc | Description |
|-----|-------------|
| [Dead Code Detection](docs/dead-code-detection.mdx) | Find unused functions, imports, classes, variables |
| [Smart Tracing](docs/smart-tracing.mdx) | Runtime call tracing with `--trace` to catch dynamic dispatch |
| [Security Analysis](docs/security-analysis.mdx) | Taint analysis, CI/CD and edge config checks, webhook signature checks, secrets detection |
| [Vibe Coding & AI Debt](docs/concepts/vibe-coding.mdx) | AI-generated code defects, including hallucinated helpers, disabled controls, and package/API hallucinations |
| [AI Defect Verification](docs/ai-defects.mdx) | Method, rule grouping, output contract, and blocking posture for `--ai-defects` |
| [AI Hallucination Contracts](docs/ai-contracts.mdx) | Repo-specific generated-code contracts for `skylos verify . --contract PATH` |
| [Agent Verification](docs/agent-verification.mdx) | Static pre-deployment verification of AI-agent guardrails and evidence |
| [Agent Behavior Testing](docs/agent-behavior-testing.mdx) | Deterministic runtime scenarios for responses, tool calls, refusals, and source evidence |
| [AI Features](docs/ai-features.mdx) | `skylos verify`, AI-code defect benchmarks, remediation proof tests, and LLM-assisted review |
| [Code Quality](docs/code-quality.mdx) | Complexity, nesting, structure checks |
| [Technical Debt](docs/technical-debt.mdx) | Structural debt hotspots, changed-view reviews, and debt baselines |
| [Framework Awareness](docs/framework-awareness.mdx) | Django, Flask, FastAPI, Pytest support |

### Gate
| Doc | Description |
|-----|-------------|
| [Quality Gate](docs/quality-gate.mdx) | Block bad code with ratchet workflow |
| [CI/CD Integration](docs/ci-cd.mdx) | GitHub Actions, GitLab, Jenkins, Azure DevOps |
| [Release Reliability](docs/release-reliability.mdx) | Kubernetes exposure, GPU source intent, and built-artifact preflight |

### Fix
| Doc | Description |
|-----|-------------|
| [AI Features](docs/ai-features.mdx) | `skylos agent scan`, `skylos verify`, and verification-backed remediation |
| [MCP Server](docs/mcp-server.mdx) | Agent-callable tools including `verify_change` for AI-code trust checks |

---

## Free vs Pro/Enterprise

Skylos' core source analysis and local artifact preflight are free and can run
offline. Package-registry verification, SCA/OSV, direct container image scans,
Cloud features, and hosted LLM providers require network access. Pro/Enterprise
adds team governance and CI/CD workflow features.

| Capability | Free (Local) | Pro / Enterprise |
|------------|--------------|------------------|
| Dead code detection | ✅ | ✅ |
| Security scanning (`--danger`) | ✅ | ✅ |
| Quality checks (`--quality`) | ✅ | ✅ |
| AI-defect checks (`--ai-defects`, `ai_defects`) | ✅ | ✅ |
| Exact GPU artifact preflight (`skylos preflight`) | ✅ | ✅ |
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
