---
title: Response Cards
id: AI-Response-Cards
---

# AI Response Cards

AI Response Cards allow AI-generated answers to be embedded directly into Akumina experiences.

A Response Card is represented by **HTML markup**, which means it can be added anywhere the markup can be rendered — including custom views, page content, news views, or other experiences.

This makes Response Cards useful beyond the standard AI experiences. Developers can use the same framework to introduce contextual AI responses into other parts of the intranet.

## How Response Cards Work

A Response Card is created using an HTML `<img>` placeholder with `data-ak-*` attributes that define the AI behavior.

The placeholder itself is not intended to display an image. Akumina recognizes:

```html
data-ak-element="ak-response-card"
```

and replaces the placeholder with the configured AI Response Card experience.

## Basic Example

```html
<img
    class="akv-ai-placeholder"
    style="height:1px;"
    src="https://akuminafiles.azureedge.net/products/common/single-pixel.png"
    data-ak-element="ak-response-card"
    data-ak-component-id="my-response-card"
    data-ak-selected-knowledge-bucket-ids=""
    data-ak-initial-prompt="pto policy"
    data-ak-initial-prompt-source="author"
    data-ak-response-format="keep this short and sweet"
    data-ak-hide-citations="false"
    data-ak-user-context-disabled="false"
    data-ak-open-maximized="true"
    data-ak-dynamic-suggestions-count="0"
    data-ak-allow-reactions="true"
    data-ak-response-view="chat"
    data-ak-prompt-suggestions="prompt1;prompt2"
    data-ak-agents-tools="documentsearch"
/>
```

## Configuration Options

The behavior of the Response Card is controlled through the `data-ak-*` attributes.

| Attribute | Purpose | Example |
| --- | --- | --- |
| `data-ak-element` | Identifies the markup as an AI Response Card. | `ak-response-card` |
| `data-ak-component-id` | Identifies the Response Card instance. | `my-response-card` |
| `data-ak-selected-knowledge-bucket-ids` | Specifies the Knowledge Bucket to use. Leave empty when not using a Knowledge Bucket. | `fd7c972b-...` |
| `data-ak-initial-prompt` | Defines the initial question or instruction sent to AI. | `pto policy` |
| `data-ak-initial-prompt-source` | Identifies the source of the initial prompt. | `author` |
| `data-ak-response-format` | Provides instructions for how the response should be formatted. | `keep this short and sweet` |
| `data-ak-hide-citations` | Controls whether citations are hidden. | `true` / `false` |
| `data-ak-user-context-disabled` | Controls whether user context is disabled. | `true` / `false` |
| `data-ak-open-maximized` | Controls whether the Response Card opens maximized. | `true` / `false` |
| `data-ak-dynamic-suggestions-count` | Number of dynamic prompt suggestions to generate. | `5` |
| `data-ak-allow-reactions` | Controls whether users can react to the response. | `true` / `false` |
| `data-ak-response-view` | Defines the response experience. | `chat` |
| `data-ak-prompt-suggestions` | Defines author-provided prompt suggestions separated by semicolons. | `prompt1;prompt2` |
| `data-ak-agents-tools` | Specifies the agents or tools available to the Response Card when not using a Knowledge Bucket. | `documentsearch` |

## Response Card Without a Knowledge Bucket

A Response Card does not require a Knowledge Bucket.

When no Knowledge Bucket is selected, leave:

```html
data-ak-selected-knowledge-bucket-ids=""
```

and configure the appropriate agents or tools:

```html
data-ak-agents-tools="documentsearch"
```

### Example

```html
<img
    class="akv-ai-placeholder"
    style="height:1px;"
    src="https://akuminafiles.azureedge.net/products/common/single-pixel.png"
    data-ak-element="ak-response-card"
    data-ak-component-id="pto-response-card"
    data-ak-selected-knowledge-bucket-ids=""
    data-ak-initial-prompt="pto policy"
    data-ak-initial-prompt-source="author"
    data-ak-response-format="keep this short and sweet"
    data-ak-hide-citations="false"
    data-ak-user-context-disabled="false"
    data-ak-open-maximized="true"
    data-ak-dynamic-suggestions-count="0"
    data-ak-allow-reactions="true"
    data-ak-response-view="chat"
    data-ak-prompt-suggestions="prompt1;prompt2"
    data-ak-agents-tools="documentsearch"
/>
```

## Response Card With a Knowledge Bucket

When using a Knowledge Bucket, provide its ID using:

```html
data-ak-selected-knowledge-bucket-ids="KNOWLEDGE-BUCKET-ID"
```

The Knowledge Bucket determines the configured knowledge, instructions, agents, and tools available to the AI experience.

### Example

```html
<img
    class="akv-ai-placeholder"
    style="height:1px;"
    src="https://akuminafiles.azureedge.net/products/common/single-pixel.png"
    data-ak-element="ak-response-card"
    data-ak-component-id="pto-response-card"
    data-ak-selected-knowledge-bucket-ids="fd7c972b-565a-4ed5-ad59-537a5a221508"
    data-ak-initial-prompt="pto policy"
    data-ak-initial-prompt-source="author"
    data-ak-response-format="keep this short and sweet"
    data-ak-hide-citations="false"
    data-ak-user-context-disabled="false"
    data-ak-open-maximized="true"
    data-ak-dynamic-suggestions-count="0"
    data-ak-allow-reactions="true"
    data-ak-response-view="chat"
    data-ak-prompt-suggestions="prompt1;prompt2"
    data-ak-agents-tools=""
/>
```

## Using Response Cards in Other Experiences

Response Cards are **not limited to a dedicated AI or chat view**.

Because the framework is based on HTML markup, Response Cards can be incorporated into other Akumina experiences where the markup can be rendered.

For example, a developer could add a Response Card to:

- A news view
- An HR or benefits page
- An onboarding experience
- A policy page
- A location or office page
- A custom Akumina view
- Other content where contextual AI would improve the employee experience

For example, a news article could include a Response Card that asks AI to:

> Summarize the key points of this announcement for an employee.

This allows AI to become part of the content experience rather than requiring employees to always navigate to a separate AI interface.

## Best Practices

Keep the initial prompt focused on the purpose of the Response Card. Use `data-ak-response-format` for instructions about how the answer should be presented rather than putting all response instructions into the question itself.

When the Response Card represents a known business use case, consider using a **Knowledge Bucket** so that the card uses the curated knowledge, instructions, agents, and tools defined for that scenario.

Use a unique `data-ak-component-id` for each Response Card implementation.

Most importantly, remember that the Response Card framework is **reusable HTML**. When identifying new AI use cases, consider whether an AI response could be embedded directly into the existing employee experience rather than requiring the employee to start a separate chat.