---
sidebar_position: 3
---

# Human agency and control

Golem's design system emphasizes maintaining human agency and control in AI-integrated SRE platforms. These guidelines ensure that AI agents enhance human capabilities without undermining user autonomy or decision-making authority.

## Clear Role Delineation

- Clearly define and communicate the roles of AI agents vs. human operators
- Ensure AI suggestions are presented as recommendations, not mandates
- Maintain human oversight for critical system changes and decisions

Example: When a Remediation Agent suggests a fix, it should be clearly labeled as a recommendation, with the final decision left to the human operator.

## Transparent AI Capabilities

- Clearly communicate the capabilities and limitations of AI agents
- Provide easily accessible information about AI confidence levels and potential biases
- Avoid anthropomorphizing AI to prevent unrealistic user expectations

Example: Include an "AI Capabilities" section in each agent's interface, detailing what the agent can and cannot do.

## User Override Mechanisms

- Implement easy-to-use override controls for all AI actions and decisions
- Allow users to adjust or disable AI assistance at any time
- Provide clear feedback when human input overrides AI recommendations

Example: Include a prominent "Override" button next to each AI suggestion, allowing users to quickly take manual control.

## Gradual Automation

- Implement a staged approach to automation, starting with human-in-the-loop processes
- Allow users to gradually increase AI autonomy as they become more comfortable
- Provide options to revert to more manual control if needed

Example: Offer configurable automation levels for the Monitoring Agent, from "Notify Only" to "Auto-remediate Non-Critical Issues."

## Skill Enhancement, Not Replacement

- Design AI to complement and enhance human skills, not replace them
- Provide explanations and learning opportunities alongside AI actions
- Encourage critical thinking by presenting multiple options when appropriate

Example: When a Diagnostic Agent identifies a root cause, it should explain its reasoning, helping users learn and verify the conclusion.

## Customizable AI Interaction

- Allow users to customize the level and style of AI interaction
- Provide options for AI proactivity vs. on-demand assistance
- Respect individual preferences for decision-making autonomy

Example: Let users set preferences for how proactive each AI agent should be, from passive (only responding to queries) to highly proactive (suggesting actions unprompted).

By following these guidelines, Golem ensures that its AI integration empowers SRE teams, enhancing their capabilities while preserving human agency and control over critical systems and decisions.