# Ask More, Build Better, Burn Out Less

A practical guide to working with GitHub Copilot — without losing yourself in the process.

## About

This repository contains the source for the *Ask More, Build Better, Burn Out Less* website — an MkDocs-powered guide for developers working with GitHub Copilot. The site covers prompting as a skill, ownership, security, architecture, and sustainable practice.

**Live site:** [https://codess-aus.github.io/AskBuildBurn/](https://codess-aus.github.io/AskBuildBurn/)

## Local Development

```bash
# Install dependencies
pip install -r requirements.txt

# Serve locally with live reload
mkdocs serve

# Build the static site
mkdocs build
```

## Chapters

1. Reality Check
2. The Paradox
3. Rule Zero: You Own the Code
4. Ask Mode
5. Turn a Failing Test Into a Learning Plan
6. The Million Questions Workflow
7. A Mentor Loop
8. Agent Mode
9. Refactor Without Losing Architecture
10. Review the Diff
11. Guardrails That Prevent AI-Shaped Chaos
12. Security: The Bug You Ship When You're Exhausted
13. The Playbook
14. Burn Out Less: Make Asking a First-Class Practice
15. The Call to Action

Plus: Resources and About pages.

## Hero Images

Each chapter has a hero image at the top. The repository includes SVG placeholder images that can be replaced with photographs. To add your own hero images:

1. Add images to `docs/images/` with the naming convention `hero-NN.jpg` (e.g., `hero-01.jpg`)
2. Update the `<img src="...">` references in each chapter's markdown file

## Deployment

- **GitHub Pages**: Automatically deployed via GitHub Actions on push to `main`
- **Azure Static Web Apps**: Configuration included in `staticwebapp.config.json`

## License

See [LICENSE](LICENSE) for details.