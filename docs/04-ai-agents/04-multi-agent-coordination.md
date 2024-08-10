---
sidebar_position: 4
---

# Multi-agent coordination

In complex SRE environments, multiple AI agents often need to work together seamlessly. Golem's design system provides guidelines for managing these multi-agent interactions effectively and safely.

## Agent Coordination

Define clear protocols for how agents collaborate on complex tasks. This ensures efficient teamwork and prevents redundancy or conflicting actions.

Example: When investigating a system outage, the Monitoring Agent detects the issue, the Diagnostic Agent analyzes root causes, and the Remediation Agent proposes solutions.

## Conflict Resolution

Establish procedures for handling conflicting information or recommendations from different agents. This maintains system integrity and user trust.

Example: If the Predictive Agent and Diagnostic Agent disagree on the cause of a performance issue, escalate to a human operator or defer to the agent with higher confidence in its analysis.

## Escalation Pathways

Create well-defined processes for elevating issues to human operators when agents cannot resolve them independently or when human judgment is required.

Example: Implement a tiered escalation system where issues are first handled by junior agents, then senior agents, and finally human SREs if unresolved.

## Agent Hierarchy

Define clear relationships and authority levels between different agent types to ensure orderly decision-making and action-taking.

Example: The Remediation Agent may need approval from the Diagnostic Agent before implementing fixes, while the Assistant Agent defers to all specialist agents in their respective domains.

## Cross-Agent Communication

Standardize the methods and formats agents use to share information with each other, ensuring clear and efficient inter-agent interactions.

Example: Use a common data structure for sharing system metrics, allowing the Monitoring Agent to efficiently pass relevant data to the Diagnostic Agent when an anomaly is detected.

By implementing these multi-agent controls, Golem ensures that AI agents in SRE platforms work together harmoniously, enhancing overall system reliability and maintainability.