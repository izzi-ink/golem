---
sidebar_position: 3
---

# Agent-user Interaction Patterns

Effective interaction between AI agents and SRE team members is crucial for a smooth, efficient workflow. Golem's design system incorporates the following key interaction patterns to enhance user experience and system reliability.

## Natural Language Queries

Enable users to interact with agents using conversational language. This allows for more intuitive and efficient communication.

Example: Users can type or speak queries like "Show me the CPU usage for the last hour" or "What's causing the high latency in the payment service?"

## Proactive Notifications

Agents should initiate contact when they detect important issues, ensuring timely attention to potential problems.

Example: An agent might send an alert: "Unusual spike in error rates detected in the authentication service. Would you like to investigate?"

## Guided Troubleshooting

Provide step-by-step assistance for complex problems, helping users navigate intricate issues systematically.

Example: When diagnosing a network issue, the agent might guide the user through checks of different network layers, suggesting specific commands or tests at each step.

## Visual Representations

Utilize charts, diagrams, and other visual aids to explain agent insights, making complex data more digestible.

Example: When reporting on system performance, use line graphs to show trends over time or heat maps to highlight problem areas in a microservices architecture.

## Confirmation Dialogues

Require explicit user approval for significant actions to maintain human oversight and prevent unintended consequences.

Example: Before applying a suggested fix, the agent might prompt: "I recommend restarting the database service. Do you want to proceed with this action?"

By implementing these interaction patterns, Golem ensures that AI agents in SRE platforms are not only powerful but also user-friendly and aligned with human workflows.