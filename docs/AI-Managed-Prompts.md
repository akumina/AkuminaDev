---
title: Managed Prompts
id: AI-Managed-Prompts
---
# Managed Prompts

Managed Prompts allow organizations to create and manage predefined prompts that help employees get more consistent and useful responses from AI.

They can be presented to employees as suggested questions, or used behind the scenes to automatically translate common employee terminology into a more complete prompt.

## Why Managed Prompts Matter

Employees do not always interact with AI using complete, descriptive questions. Many employees are accustomed to traditional search and may enter short phrases such as:

- `PTO`
- `leave`
- `VPN`
- `expense report`

While AI experiences work best when users provide more context, organizations should not have to rely entirely on changing employee behavior.

Managed Prompts provide a bridge between **what the employee enters** and **what you want AI to understand**.

---

## Creating Managed Prompts

Managed Prompts should represent common questions or tasks that employees are likely to have.

For example:

| Managed Prompt | Example Use Case |
|---|---|
| What is our PTO policy? | Employee benefits |
| How do I submit an expense report? | Travel and expenses |
| How do I connect to the VPN? | IT support |
| Tell me about our parental leave policy. | HR policies |
| Summarize the latest company news. | Internal communications |

Focus on **employee intent**, rather than simply creating prompts around system or content names.

For example, instead of:

**IT Documentation**

Consider prompts such as:

**How do I reset my password?**  
**How do I connect to the VPN?**  
**How do I request a new laptop?**

These better represent the questions employees are actually trying to answer.

---

## Suggested Prompts

Managed Prompts can be exposed directly to employees as suggested questions.

This helps employees understand what they can ask while eliminating the need to construct the prompt themselves.

For example:

> **How can I help?**
>
> What is our PTO policy?  
> How do I submit an expense report?  
> How do I reset my password?  
> What company holidays are coming up?

Suggested prompts are particularly useful for introducing employees to an AI experience and encouraging adoption.

---

## Auto-Resolving Managed Prompts

Managed Prompts can also be configured to automatically resolve based on keywords.

This is especially useful when employees continue to interact with AI as though they are using traditional search.

For example:

**Employee enters:**

`leave`

**Managed Prompt:**

`Tell me about the company's leave policies.`

The employee does not need to rewrite their question. The platform recognizes the configured keyword and executes the Managed Prompt instead.

### Another Example

| Employee Input | Auto-Resolved Managed Prompt |
|---|---|
| `PTO` | What is our PTO policy? |
| `carryover` | Can unused PTO be carried over to next year? |
| `VPN` | How do I connect to the corporate VPN? |
| `expenses` | How do I submit an expense report? |

This allows organizations to support existing employee search behavior while gradually moving employees toward more conversational AI interactions.

---

# Managed Prompts + Knowledge Buckets

Managed Prompts and Knowledge Buckets solve different parts of the AI experience and can be particularly powerful when used together.

**Managed Prompts help determine what should be asked.**

**Knowledge Buckets help determine how and from where the question should be answered.**

For example:

**Employee enters:**  
`carryover`

↓

**Managed Prompt resolves:**  
`Can unused PTO be carried over to the next calendar year?`

↓

**Knowledge Bucket resolves:**  
`Time Off & Leave`

↓

**AI responds using the appropriate curated documents, instructions, tools, and configuration.**

This creates additional control without requiring the employee to understand how the AI experience is configured.

---

## Keywords

Keywords can be associated with Managed Prompts to help recognize common employee terminology.

Good keywords represent terms employees are likely to actually enter.

For a Managed Prompt such as:

**How do I connect to the corporate VPN?**

Useful keywords might include:

- `VPN`
- `remote access`
- `connect from home`

Avoid adding large numbers of unrelated or overly broad keywords. A keyword should provide a strong indication that the Managed Prompt represents the employee's intended question.

---

# Best Practices

### Start With Real Employee Questions

Create Managed Prompts around questions employees actually ask rather than around the structure of your intranet.

**Avoid:**  
`Human Resources`

**Better:**  
`How do I update my benefits?`

### Keep Prompts Specific

A prompt should communicate enough context for AI to understand the intended task.

**Avoid:**  
`Time off`

**Better:**  
`How much PTO can I carry over to next year?`

### Use Keywords Strategically

Keywords are most valuable for common shorthand, terminology, acronyms, and search behavior where the employee's intent is reasonably predictable.

### Don't Try to Create a Prompt for Everything

Managed Prompts are most valuable for **common, important, or predictable employee needs**.

AI should still be able to handle open-ended questions that do not match a Managed Prompt.

### Test the Employee Experience

Test both the full Managed Prompt and the short employee inputs that are expected to resolve to it.

The goal is not simply to verify that the Managed Prompt works—it is to verify that employees are being routed to it when expected.

---

# Measuring Managed Prompt Adoption

Managed Prompts can also help organizations understand how employees are using AI.

The AI Adoption experience includes visibility into the **most-used Managed Prompts**, allowing administrators to see which curated experiences employees are selecting and using.

This information can help identify:

- Which Managed Prompts provide the most value.
- Which employee topics are generating the most interest.
- Opportunities to create additional Managed Prompts.
- Prompts or keywords that may need to be refined.

Managed Prompts should therefore be treated as something that can evolve with employee behavior rather than as a one-time configuration.

---

## The Goal

Managed Prompts are not intended to replace natural conversations with AI.

They provide organizations with a way to **guide the experience where guidance is valuable**.

Employees can continue asking AI anything, while Managed Prompts provide a more controlled path for common and important use cases:

**Employee language → Better prompt → Right AI experience → Better answer.**