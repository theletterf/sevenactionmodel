---
title: "Rationale"
description: "The source essay behind the Seven-Action Documentation Model."
scope: "rationale"
---

I think all technical writers, at some point or another, feel the urge to base their work on something more systematic than "it's just the way folks documented stuff since forever". Toolkits and frameworks provide content types, which is immensely valuable when you *know* what you want to write, but *starting* from there is like buying a hammer without knowing that half of the work you'll do is turning screws. As I find the lack of deeper conversation around this topic rather unsettling, I decided to contribute some verses.

## Docs frameworks, tools, and formats aren't enough

Most of the existing documentation frameworks focus on the actions of tech writers instead of focusing on the action of users, that is, the *consumers* of docs. The prescriptive emphasis on what docs must be produced instead of describing what user needs should be addressed echoes an architectural mindset where one builds walls because *of course a house must have rooms, what are we, barbarians*? This apparent lack of flexibility disincentivizes writing the content that's needed.

Some of those who designed docs frameworks are aware of this issue and have suggested that their rules are not to be followed verbatim and that there's room for flexibility in their application to the real world. Writers who use those frameworks also faced this dilemma and, in most cases, ended up tweaking the models to suit their use cases. Frameworks thus become toolkits from which to cherry-pick templates and ideas. This pattern, though, evades the question of what's needed.

Faced with the complexity of documenting fast moving products with little resources and support, writers will take everything they can and build a functional process out of it. Engineers dabbling in documentation and feeling lost as they approach the field, on the other hand, are drawn to docs frameworks because frameworks are all they're used to working with when it comes to programming. The docs they end up developing are a cargo cult version of effective docs.

## Shifting the focus from content types to user needs

A solution to this situation is shifting the focus from what should be written to what user needs should be addressed. This requires taking ownership of the strategic side of documentation (as in content strategy) instead of producing content following predefined structural patterns. Such an approach is fully compatible with documentation frameworks like Diataxis, DITA, and others, as it provides direction and purpose to the builders of docs, who'll then use content types, elements, and tools at their disposal.

You can better understand how I think frameworks, tools, and models of user needs go together through a sandwich metaphor, especially if you haven't had lunch yet: docs frameworks and tools are essential ingredients to holding a sandwich together and handle it, but what gives a sandwich all the taste and meaning is the filling, that is, the mental model of user needs that you're following. This is *not* the same as external requests from stakeholders, though they might overlap. If anything, OKRs are the sauce.

In other words, to build effective docs you not only need tools and content types, but also a model of needs that documentation must satisfy as a product, or of actions users need to accomplish through docs. This model should be fairly independent from the type of software product you're documenting, in the same way conceptual models of product design and satisfaction abstract away the specifics. Aiming for a general model is necessary because it helps professionals learn and communicate together.

What follows is my own *descriptive* model of user needs for documentation, one I'm following to build and arrange documentation today.

## The Seven-action Documentation Model

The approach I'm proposing here is a model of *what user actions the docs are meant to satisfy*. The model aims at connecting both UX research and documentation frameworks with a conceptual and functional layer that focuses on two aspects: docs as a product and what users are meant to accomplish through them. It's an attempt at describing what technical documentation *should* *do.* It's treating docs as a product that someone is going to use to achieve actual goals.

As I said, the core of the model is *actions*. I've identified seven that I think cover a decent amount of goals that a consumer of docs may want to accomplish when using documentation. They represent common patterns in how users interact with documentation across different products and domains. They're the following, each bearing an alternative term in parentheses: Appraise (Discern), Understand (Learn), Explore (Discover), Practice (Train), Remember (Recall), Develop (Integrate), and Troubleshoot (Solve).

Notice that the order of the actions is intentional but not strict: I've arranged the actions in a sequence that more or less resembles what I think the approach of consumers to software technical documentation is. I see these actions happening at different stages or levels. When arranged on a regular heptagon, the top actions tend to happen at the initial stages of product interaction, whereas the ones at the bottom happen when product knowledge and usage has consolidated.

Now let's have each action speak for itself.

### Appraise (Discern)

Users of documentation are also potential customers or adopters. A software product or project thrives if its active users increase. A reader of documentation must be able to discern what are the main qualities of the product and, if applicable, compare it to others. This is a discovery process.

Two examples of docs that address appraisal somehow explicitly are [What is Databricks?](https://docs.databricks.com/en/introduction/index.html) and the [Splunk Observability Cloud Service Description](https://docs.splunk.com/observability/en/get-started/service-description.html) (which I created). They present the main strengths and positioning of the product, alongside bits that help prospects decide whether to go forward.

This dimension of understated selling is frequently neglected in documentation frameworks, letting SEO and marketing steer docs into something that isn't documentation. If docs are produced with appraisal in mind, then keeping marketing at bay is simpler, and also unlocks conversion metrics.

### Understand (Learn)

Software products are usually built around abstractions that are difficult to grasp yet fundamental to the proper usage of an application or service. While conceptual documentation is not always consumed in the first place, it's often used alongside exploration/practice docs to anchor learnings.

Examples of docs that address understanding are [Kubernetes' Concepts](https://kubernetes.io/docs/concepts/overview/components/), [Thinking in React](https://react.dev/learn/thinking-in-react), and [What is OLAP?](https://www.linode.com/docs/guides/what-is-olap/) They all provide conceptual explanations around concepts that they either implement or introduce. In doing so, they transcend the barriers of their own product and become universal learning materials.

While hard to produce and easy to underestimate, docs that support understanding also serve educational initiatives, like product academies or classrooms. They're valuable because they sit at the very center of the [Circles of Product Truth](https://passo.uno/circles-product-truth/). All documentation sets should address this need.

### Explore (Discover)

Products are well designed when the barrier to usage is low. Great products invite the users to interact and try new things. Documentation should provide hints, instructions, and affordances that facilitate product exploration as one of the first activities.

Examples of docs that address exploration are [React's Quick start](https://react.dev/learn), [Yoksel's Flex cheat sheet](https://yoksel.github.io/flex-cheatsheet/), and the [Tour of Go](https://go.dev/tour/welcome/1). This kind of documentation has a playful, inviting quality. They are the perfect ground for innovative formats blending user interaction and documentation.

Docs that promote exploration are engaging and fun, the perfect entrance for someone interested in getting the feel of a product before deepening their knowledge. Together with the Appraise and Understand actions, Explore sits at the beginning of the documentation's path.

### Practice (Train)

Users need to learn how to operate most parts of a product they're concerned with. For example, admins must learn to create and remove users. The Practice action describes the need for learning procedural knowledge, that is, how to use the product in daily, standard operation.

Examples of docs that address practice are [Generating a new SSH key (GitHub)](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent), [Import contacts to MailChimp](https://mailchimp.com/help/import-contacts-mailchimp/), and [User management (Dynatrace)](https://docs.dynatrace.com/docs/manage/identity-access-management/user-and-group-management/access-user-management). They offer various how-to or tutorial patterns, with or without audiovisual materials, sharing the same goal of helping users master a procedure.

When users can confidently perform tasks, they're more likely to explore advanced features and become product advocates. This type of docs often serves as the backbone of user enablement programs and certification paths, turning theoretical knowledge into practical competence.

### Remember (Recall)

One of the things that keeps documentation alive after years and years of use is its value as reference. We browse the pages of manuals to remember (recall, retrieve, lookup) bits of information that we couldn't memorize, from parameters to error codes to acceptable values.

Examples of docs that address remembering are [Docker's Dockerfile reference](https://docs.docker.com/reference/dockerfile/) and [GitLab's CI/CD YAML syntax reference](https://docs.gitlab.com/ee/ci/yaml/). They present easily searchable, highly structured information on the bits of pieces that the user needs to recall to perform various incantations.

Reference documentation is the bedrock of long-term product usability. While docs created to fulfill other actions may be read once and internalized, reference material remains perpetually valuable as users deepen their expertise and tackle increasingly sophisticated implementations.

### Develop (Integrate)

Users often need to build upon, extend, or integrate with existing products. This isn't just about coding - it's about creating additional value on top of the core product, whether through integrations, extensions, plugins, or entirely new applications.

Examples of docs that address developing products further are [Vercel's Approval Checklist](https://vercel.com/docs/integrations/create-integration/approval-checklist) and [Chrome's Debug extensions](https://developer.chrome.com/docs/extensions/get-started/tutorial/debug). Notice that the focus is almost always pragmatic, the content type largely irrelevant. Many integration or extension docs take the form of guides or even articles.

Documentation that focuses on development or integration needs acts as a bridge between the product's current capabilities and its potential. It transforms users into co-creators, fostering an ecosystem. This documentation type often becomes the foundation for communities of practice.

### Troubleshoot (Solve)

Stumbling on problems, whether due to misconfigurations, edge cases, or actual bugs, is a common user trope. The troubleshooting action represents the users' need to diagnose and resolve issues efficiently, often under pressure when systems are failing or deadlines are looming.

Examples of docs that address troubleshooting include [Kubernetes' Debug Pods](https://kubernetes.io/docs/tasks/debug/debug-application/debug-pods/) and [Elasticsearch's Troubleshooting](https://www.elastic.co/guide/en/elasticsearch/reference/current/fix-common-cluster-issues.html). The most effective troubleshooting docs go beyond listing common problems and solutions; they teach users how to think about the system when it's not working as expected.

While you may be tempted to consider these docs a reactive resource, they can be transformative in building user confidence. When users understand how to recover from failures, they become more willing to explore and push boundaries, knowing they have a safety net to fall back on.

## Mapping to content types is possible (and optional)

The Seven-action model doesn't prescribe a doctype-to-action relation – in fact, it doesn't prescribe anything except that it's nice to cover all seven actions at all. In that sense, individual docs can cover one or more user actions, if not all of them. This aligns with [Every Page is Page One](https://idratherbewriting.com/trends/trends-to-follow-or-forget-every-page-is-page-one.html#what-is-every-page-is-page-one)'s principles (EPPO). As its author says, "[topics are everywhere](https://everypageispageone.com/2011/08/09/every-page-is-page-one-topics-are-everywhere/)":

> All too often, the attempt to move to topics does not produce a collection of Every Page is Page One topics, but either the same book you had before, only with shorter chapters, or the same book you had before, only stitched together out of fragments culled from a database.

The flexibility in mapping actions to content types reflects how users actually interact with documentation. A troubleshooting guide might help users understand core concepts while solving their immediate problem. A quickstart tutorial could simultaneously serve exploration and practice needs. Even API reference documentation, typically associated with the Remember action, often includes examples that support the Practice and Develop actions.

The mapping table that follows should therefore be seen as illustrative rather than prescriptive. It shows common associations between actions and content types:

| Action | Topic types | DITA elements |
|--------|-------------|---------------|
| Appraise | Overview, Product description, Service description | `<topic>`, `<concept>` |
| Understand | Conceptual guide, Explanation, Glossary | `<concept>`, `<glossentry>`, `<section>` |
| Explore | Quick start, Tutorial, Sandbox, Lab | `<task>`, `<step>`, `<substep>` |
| Practice | How-to guide, User guide, Tutorial | `<task>`, `<step>`, `<choicetable>` |
| Remember | API reference, Command reference, Glossary | `<reference>`, `<refsyn>`, `<properties>` |
| Develop | Integration guide, Development guidelines, Style guide | `<task>`, `<codeblock>`, `<coderef>` |
| Troubleshoot | Troubleshooting, Error reference, Optimization guide | `<troubleshooting>`, `<trouble>`, `<cause>`, `<remedy>` |

The possibility of covering multiple actions per document might seem to conflict with structured documentation approaches like DITA, where topics should serve a single purpose. However, these perspectives operate at different levels. A DITA task topic, for instance, maintains its structural integrity as a procedure while potentially helping users practice a workflow, remember key parameters, and anticipate common issues. The actions describe what users accomplish through documentation, while topic types define how that documentation is structured.

## Sample structure or table of contents

What would a table of contents or general navigation look like in a docs set following the Seven-action model? Best answer is: it depends! The model is not prescriptive and adapts to whatever product structure and maturity level. As long as you can cover all product needs, you're good.

For example, if your product is built around features, you could have a structure like the following. Notice that user needs or actions can be satisfied at multiple levels of the docs hierarchy and with different scopes: a feature can have its own Remember and Explore resource, for example.

* Feature one
  * Overview (Appraise)
  * Quick start (Explore)
  * Concepts of `<feature>`
  * Tutorials (Practice)
    * Tutorial one
    * Tutorial two
  * Settings (Remember)
  * Troubleshooting
* Feature two...
* API reference (Remember)
* Build your add-on (Develop)

## Conclusion

The model I've presented provides a way for thinking about documentation through the lens of user needs rather than content types. This model isn't meant to replace existing frameworks but rather to complement them. When used together, they enable technical writers to create docs that are both structurally sound and serve real purposes rather than merely filling templates.

The model can also serve as a foundation for [documentation metrics and goal-setting](https://passo.uno/docs-observability-do11y/) (do11y). Rather than focusing solely on page views or satisfaction scores, teams can track how well their documentation serves each action. For example, conversion rates from docs to product adoption could measure appraisal effectiveness, while time-to-resolution metrics could indicate troubleshooting success.

As it happens with theoretical models, this one isn't backed by extensive research or factorial analysis. The model is distributed AS IS, and under no circumstances can you hold me accountable for having ruined your lunch. However, I hope it provides a useful perspective for technical writers seeking to create more purposeful documentation.
