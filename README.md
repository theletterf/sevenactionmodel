# Seven-Action Documentation Model

This repository powers [7act.org](https://7act.org/), a multilingual guide to the Seven-Action Documentation Model.

The model starts with a simple question: **what is the reader trying to do?** Instead of beginning with document types, it identifies seven recurring actions that bring people to documentation:

- **Appraise** — decide whether a product or approach is a good fit.
- **Understand** — grasp its concepts, abstractions, and mental models.
- **Explore** — try it out and discover what it can do.
- **Practice** — learn how to use it in everyday situations.
- **Remember** — quickly look up details that are difficult or unnecessary to memorize.
- **Develop** — integrate, extend, or build upon it.
- **Troubleshoot** — diagnose a problem and find a way forward.

These actions are not a checklist, and the model does not prescribe one content type for each action. A tutorial, reference page, explanation, example, or troubleshooting guide can serve different purposes depending on the reader's situation. The model is a way to clarify that situation before deciding what to write.

## From the original essay to 7act.org

The model was introduced in the January 2025 essay [“The Seven-Action Documentation model” on passo.uno](https://passo.uno/seven-action-model/). The essay explains why documentation planning benefits from looking beyond the writer's task and focusing on the reader's intended action.

[7act.org](https://7act.org/) turns that idea into a practical, browsable resource. Each action has its own page, with its rationale, common reader signals, suitable content types, useful measures, examples, and relationships to the other actions.

The site is available in English, Spanish, French, German, Japanese, Simplified Chinese, Arabic, and Persian. Arabic and Persian use right-to-left layouts. The translations aim to preserve the meaning and detail of the English model rather than merely summarizing it.

## For people and agents

The website is designed to be useful both while planning documentation and while creating it. You can browse it as a reference, share a specific action with a team, or use its machine-readable versions in other tools.

Every page is available as both HTML and Markdown. The site also publishes:

- [`llms.txt`](https://7act.org/llms.txt), an index for language models and agents.
- [`model.json`](https://7act.org/model.json), a structured representation of the complete model.

## Download the agent skill

The repository includes an agent skill that helps Claude recognize when the Seven-Action model is useful and apply it while planning, writing, auditing, or restructuring documentation.

Install it with the [Vercel Skills CLI](https://skills.sh/):

```bash
npx skills add theletterf/sevenactionmodel \
  --skill seven-action-documentation \
  --agent claude-code
```

Claude can then activate the skill when a documentation request matches the model. You can also invoke it explicitly by asking Claude to use the Seven-Action Documentation Model.

## Contributing

Corrections, translation improvements, examples, and thoughtful refinements to the model are welcome. The model's meaning should remain consistent across languages, so changes to translated material should be checked against the English source.

To preview the site locally, install Hugo Extended and run:

```bash
hugo server
```

The site's content lives in `data/<language>/model.yaml`; Hugo turns it into the different pages and formats. A push to `main` publishes the site to Cloudflare Workers through GitHub Actions.

## License

The model and site content are licensed under [Creative Commons Attribution 4.0 International](https://creativecommons.org/licenses/by/4.0/). The code used to build the site is licensed under the [MIT License](LICENSE).
