---
name: crm-template-generator
description: generate reusable crm templates for businesses and offers. use when the user wants a crm structure, pipeline, automations, fields, forms, dashboards, sales stages, lead management setup, customer lifecycle design, or crm content tailored to a specific business type, industry, or concept.
---

# CRM Template Generator

When the user asks to create a CRM template for a business, offer, or concept, follow these instructions in order. Do not ask for clarification unless the requested CRM platform is required and truly cannot be inferred. Derive the structure from the concept.

---

## 1. Analyze the business concept

From the business name, type, offer, or market, infer:

- What the business sells
- Who the target customers are
- What the main lead sources likely are
- What the sales cycle probably looks like
- Whether the process is short-cycle, long-cycle, appointment-based, quote-based, subscription-based, or relationship-driven
- What customer data actually matters
- What the CRM should optimize for: speed, visibility, follow-up discipline, trust, qualification, retention, upsell, reactivation, or team handoff

Also infer the CRM tone and structure:
- Luxury and concierge
- Practical and fast-moving
- Consultative and trust-based
- High-volume and transactional
- Relationship-led and retention-focused

---

## 2. Design the CRM structure

Before generating anything, decide what parts the CRM needs and in what order.

Examples:

| Business | CRM Structure |
|----------|---------------|
| Real estate agency | Lead intake → Qualification → Property matching → Visit booked → Offer → Closed |
| Dental clinic | Inquiry → Appointment booked → Visit completed → Treatment plan → Follow-up |
| Marketing agency | Lead captured → Discovery call → Proposal sent → Negotiation → Won/Lost |
| E-commerce brand | Subscriber captured → First purchase → Repeat customer → VIP → Win-back |
| Law firm | Consultation request → Conflict check → Consultation booked → Engagement sent → Active client |

Choose the exact structure this concept needs. Do not force a generic pipeline.

---

## 3. Output the CRM blueprint

Output a complete CRM template with the following sections.

### A. CRM goal
State in 2–4 lines what this CRM is designed to manage and improve.

### B. Core objects
List the main record types needed. Use only the objects relevant to the concept, such as:
- Leads
- Contacts
- Companies
- Deals / Opportunities
- Appointments
- Projects
- Clients
- Properties
- Tickets
- Subscriptions
- Orders

For each object, briefly explain its role.

### C. Pipeline(s)
For each pipeline needed, output:
- Pipeline name
- Stage order
- A short explanation of what qualifies a record for each stage
- Exit conditions where relevant

If the concept needs multiple pipelines, create them. Example:
- New lead pipeline
- Sales pipeline
- Onboarding pipeline
- Retention / renewal pipeline

### D. Required fields
For each important object, list the fields that should exist.

For each field, specify:
- Field name
- Field type
- Why it matters

Use appropriate field types, such as:
- Single-line text
- Dropdown
- Multi-select
- Date
- Number
- Currency
- Checkbox
- Long text
- Phone
- Email
- Owner
- URL

Only include fields that are actually useful for this business model.

### E. Forms
If the business would use lead capture or intake forms, output:
- Form name
- Purpose
- Fields included
- Where it would be used

Examples:
- Contact request form
- Quote request form
- Consultation booking form
- Property inquiry form
- Partnership form
- Customer support intake form

### F. Automations
Output the automations the CRM should include.

For each automation, specify:
- Name
- Trigger
- Conditions
- Actions

Examples:
- New lead assigned to owner
- Reminder after no reply in 2 days
- Move deal to appointment booked after calendar confirmation
- Create follow-up task after proposal sent
- Send win-back email after 60 days inactive
- Notify manager if deal value exceeds threshold

Make the automations specific to the business model.

### G. Tasks and workflows
Describe the recurring operational tasks the team should perform inside the CRM, such as:
- Daily follow-up queue
- Quote chase process
- Missed appointment recovery
- Proposal follow-up
- Handoff from sales to fulfillment
- Renewal review

### H. Dashboard and reporting
Output the key CRM dashboards and KPIs.

Include only metrics that matter for this concept, such as:
- New leads by source
- Contact-to-meeting rate
- Meeting-to-close rate
- Average sales cycle length
- Proposal acceptance rate
- No-show rate
- Repeat purchase rate
- Reactivation rate
- Revenue by owner
- Pipeline value by stage

### I. Message templates
If relevant, output short message templates for:
- First response
- Follow-up
- Appointment confirmation
- Quote reminder
- Re-engagement
- Lost lead revival

Keep them practical and ready to adapt.

---

## 4. Output format

Always structure the final response in this order:

1. CRM strategy summary
2. Core objects
3. Pipeline design
4. Required fields
5. Forms
6. Automations
7. Team workflows
8. Dashboard and KPIs
9. Message templates
10. Optional implementation notes

Use clear headings and concise formatting. Make the result easy to copy into Notion, a CRM setup doc, or an implementation brief.

---

## 5. Platform adaptation

If the user mentions a CRM platform such as HubSpot, Salesforce, Pipedrive, Zoho, Monday CRM, Airtable, or another tool, adapt the template to the platform’s language and constraints.

Examples:
- HubSpot: objects, properties, pipelines, workflows, lists
- Salesforce: objects, fields, record types, stages, flows
- Pipedrive: pipelines, stages, activities, custom fields
- Airtable: bases, tables, views, automations
- Monday CRM: boards, groups, columns, automations

When the platform is specified:
- Use the platform’s naming conventions
- Suggest realistic implementation patterns
- Avoid features the platform does not support cleanly without customization

---

## 6. Quality rules

Every CRM template must be:
- Specific to the business concept
- Operationally realistic
- Free of generic filler
- Structured around how the business actually acquires, qualifies, closes, serves, and retains customers
- Focused on useful fields and automations, not bloated configuration
- Written as a build-ready CRM blueprint

Do not output vague advice like:
- “Track customer information”
- “Create a pipeline”
- “Set up automation”

Instead, define exactly what should exist.

---

## 7. Optional implementation notes

At the end, include a short section called **Implementation Notes** with:
- Suggested first setup priority
- What to launch first if the team is small
- Which parts can wait until phase 2
- Any data hygiene rules worth enforcing

---

## 8. Example adaptation logic

Use these patterns as guidance:

### Appointment-based business
Prioritize:
- Inquiry source
- Booking status
- Reminder automation
- No-show recovery
- Follow-up cadence

### Quote-based business
Prioritize:
- Qualification
- Scope details
- Quote sent date
- Follow-up reminders
- Win/loss tracking

### Subscription business
Prioritize:
- Lead source
- Trial or onboarding milestone
- Activation status
- Renewal tracking
- Churn prevention

### Relationship-led premium service
Prioritize:
- Lead source quality
- Personalization fields
- Consultation notes
- Multi-step follow-up
- Retention and referral tracking

### High-volume transactional business
Prioritize:
- Speed to lead
- Assignment rules
- Minimal required fields
- Conversion reporting
- Reactivation automation

---

## 9. Response behavior

When the user gives only a concept like:
- “Make me a CRM template for a luxury riad”
- “Build a CRM setup for an electrician”
- “I need a CRM workflow for a law firm”
- “Create a HubSpot template for a real estate agency”

You should directly infer the business logic and return the full CRM template.

Do not ask the user to define the stages, fields, or automations unless they explicitly want to customize them manually.