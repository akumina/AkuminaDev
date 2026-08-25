---
title: FAQ
id: AI-FAQ
---

# AI & Knowledge Bucket FAQ

This FAQ provides guidance on how AI search, Knowledge Buckets, Auto Resolution, semantic ranking, and AI response configuration work together.

---

## Question 1: How does AI rank content when a term appears in the title, body, and tags?

Akumina uses **semantic/vector search**, not traditional keyword-based ranking. There is not a fixed order such as:

**Title → Tags → Body**

The title, body, tags, and other indexed information contribute to the content that is vectorized. Search then determines relevance based on the semantic similarity between the employee's question and that content.

For example, if **"Brooklyn"** appears in the title, body, and tags, those values contribute to the overall meaning of the indexed content. AI does not simply check the title first and then move to the tags or body.

### Where do Knowledge Buckets fit?

Rather than trying to make results deterministic by heavily weighting individual fields or repeating keywords, use **Knowledge Buckets to control relevance at the use-case level**.

The Knowledge Bucket first narrows the search to the appropriate curated set of content. Semantic search then ranks the most relevant content within that smaller, more intentional set.

**Knowledge Bucket → Curated Content → Semantic Ranking → AI Response**

This establishes the business context before semantic ranking occurs and helps produce more predictable results.

---

## Question 2: What are the best practices for Knowledge Bucket descriptions?

The **Knowledge Bucket description is used only for Auto Resolution**.

Its purpose is to help determine whether an employee's question should be routed to that Knowledge Bucket.

**Once the Knowledge Bucket has been selected, the description has completed its job.**

The description is **not**:

- An AI instruction
- Used to tell AI how to answer
- Used to influence document ranking
- Added as knowledge or response context
- Used after the Knowledge Bucket has been selected

A good description should explain:

- The business purpose and scope of the Knowledge Bucket
- The types of employee questions that belong to it
- Common topics and terminology associated with the use case
- Important boundaries that distinguish it from other Knowledge Buckets

### Knowledge Bucket Description Examples

| Knowledge Bucket | ❌ Avoid | ✅ Recommended |
| --- | --- | --- |
| **Paid Time Off** | Information about PTO. | Questions about paid time off, vacation days, sick time, personal days, requesting time off, PTO balances, carryover, and time-off approval policies. |
| **Benefits** | Employee benefits information. | Questions about employee health insurance, dental, vision, life insurance, benefit enrollment, qualifying life events, dependents, and changing benefit elections. |
| **IT Support** | IT help and support. | Help with passwords, account access, laptops, software, VPN, Wi-Fi, email, Microsoft Teams, device problems, and other employee technology issues. |
| **Brooklyn Office** | Information about Brooklyn. | Questions about the Brooklyn office including location, parking, building access, office hours, conference rooms, amenities, local contacts, and working from the Brooklyn location. |
| **Parental Leave** | Parental leave policy. | Questions about maternity leave, paternity leave, parental leave, adoption leave, bonding time, eligibility, leave duration, pay during leave, and returning to work after having or adopting a child. |
| **Campuses and Facilities** | Information from our facilities content. | Questions about facilities, work locations, physical workspaces, lunch menus, location events, amenities, and other workplace facility topics. |
| **Company and Culture** | Company information. | Questions about company culture, mission, organizational values, employee resource and affinity groups, company history, company evolution, and other company-wide topics. |
| **Employee Support and Resource Groups** | Employee resources. | Questions about employee support programs, employee resources, affinity groups, and employee resource groups available to employees. |

### Describe the use case, not the source

Do not describe where the information comes from.

**❌ Avoid:**

> Content from this Knowledge Bucket comes from ServiceNow.

**✅ Recommended:**

> Questions about technical support, passwords, account access, laptops, software, VPN, Wi-Fi, devices, and other employee technology issues.

Employees generally do not know or care which system owns the information. A Knowledge Bucket can also use **multiple sources**, so it should represent the employee use case rather than the source system.

---

## Question 3: What are Knowledge Bucket keywords used for?

Keywords capture terminology employees may use when expressing a particular topic or use case.

Use terms that help identify the intended business scenario and avoid overly broad or ambiguous terms.

For example, a **Paid Time Off** Knowledge Bucket might include:

`PTO, vacation, sick time, personal days, time off, carryover`

Descriptions and keywords serve different purposes:

| Field | Purpose |
| --- | --- |
| **Description** | Describes the business use case and types of questions that should resolve to the Knowledge Bucket during Auto Resolution. |
| **Keywords** | Captures common terminology employees may use when expressing that intent. |

Both should focus on **what the employee is asking about**, not the system where the information is stored.

---

## Question 4: What is the default ranking formula for search results?

There is not a traditional field-weighting formula such as:

> Title = 3x, Tags = 2x, Body = 1x

Once a Knowledge Bucket is selected, content within the bucket is ranked primarily based on **semantic relevance** to the employee's question.

Vector search compares the meaning of the employee's query against the vectorized content and returns the closest matches with the highest relevance scores.

This is different from traditional keyword-search thinking where individual fields may receive explicit weights.

---

## Question 5: Do AI instructions change search ranking?

No. **Instructions and search ranking are separate layers.**

Global instructions and Knowledge Bucket instructions can control how AI uses, interprets, and presents retrieved information.

They do not inherently change the mathematical vector ranking of the content.

Think of the process as:

**Auto Resolution → Knowledge Bucket → Semantic Search → Retrieved Content → AI Instructions → Response**

Each layer has a different responsibility.

In particular, the **Knowledge Bucket description should not be used to try to change search ranking**. The description is used only during Auto Resolution to help select the appropriate Knowledge Bucket.

---

## Question 6: Would retrieving more results improve AI responses?

Potentially.

Increasing the number of results retrieved does **not change how those results are ranked**. It gives the AI more relevant content to reason over when generating its response.

For example, retrieving more than three results may help when an answer requires information spread across several documents.

However, more results are not automatically better. The goal is to provide the AI with enough **relevant information** to answer the question without introducing unnecessary or unrelated content.

This should be tested and tuned based on the use case.

---

## Question 7: Is there a character limit for AI responses?

There is not a simple character limit.

AI responses are controlled primarily through a configurable **MaxToken** limit. The default is **1,000 tokens** to help manage response size and cost.

Knowledge Bucket response instructions can also be used to control the desired response style and length.

For example:

> Keep the response concise and do not exceed 1,000 characters.

This allows different Knowledge Buckets to have different response expectations depending on the use case.