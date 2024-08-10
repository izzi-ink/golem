---
sidebar_position: 2
---

# Agent creation guidelines

When developing a new AI agent for your SRE platform using the Golem design system, follow these key guidelines to ensure effectiveness, ethical behavior, and user trust.

## Define Clear Scope and Boundaries

Clearly outline the agent's specific responsibilities and limitations. For example, a Monitoring Agent should focus on observing system metrics and alerting on anomalies, but not attempt to diagnose or fix issues.

## Adhere to Ethical AI Principles

Align the agent's behavior with Golem's core ethical principles:
- Prioritize user well-being and privacy
- Respect human agency and control
- Ensure transparency in decision-making processes

## Complement Human Expertise

Design the agent to augment human capabilities, not replace them. Provide insights and suggestions that support SRE decision-making, while allowing humans to make final judgments on critical actions.

## Implement Safeguards

Build in checks and balances to prevent the agent from taking potentially harmful actions:
- Require human approval for high-impact changes
- Set strict limits on the agent's authority
- Implement automatic rollback mechanisms for agent-initiated actions

## Establish Feedback Mechanisms

Create clear channels for users to provide feedback on the agent's performance:
- Include rating systems for agent suggestions
- Allow users to flag incorrect or unhelpful responses
- Use this feedback to continuously improve the agent's capabilities

By following these guidelines, you'll create AI agents that are reliable, trustworthy, and truly beneficial to your SRE team.