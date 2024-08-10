---
sidebar_position: 1
---

# Agent types and roles
Golem's design system for SRE platforms incorporates various specialized AI agents, each with distinct roles and responsibilities. Understanding these agent types is crucial for effective implementation and utilization of the system.

- Monitoring Agent: Continuously observes system metrics and alerts on anomalies
- Diagnostic Agent: Analyzes issues and provides root cause analysis
- Predictive Agent: Forecasts potential issues based on historical data and trends
- Remediation Agent: Suggests or implements fixes for identified problems
- Assistant Agent: Provides general support and answers queries for SRE teams

## Monitoring Agent

The Monitoring Agent acts as the vigilant observer of the system.

- Continuously tracks key system metrics and performance indicators
- Detects anomalies and deviations from normal patterns
- Triggers alerts when predefined thresholds are exceeded
- Provides real-time status updates on system health

Example: A Monitoring Agent might alert the team when CPU usage suddenly spikes above 90% on critical servers.

## Diagnostic Agent

The Diagnostic Agent serves as the system's troubleshooter.

- Analyzes issues flagged by the Monitoring Agent or user reports
- Performs root cause analysis to identify the source of problems
- Correlates data from multiple sources to form a comprehensive diagnosis
- Presents findings in a clear, actionable format

Example: When investigating slow response times, a Diagnostic Agent might trace the issue to an inefficient database query.

## Predictive Agent

The Predictive Agent acts as the system's forecaster.

- Utilizes historical data and machine learning models to predict future issues
- Identifies potential bottlenecks or failure points before they occur
- Provides trend analysis and capacity planning insights
- Assists in proactive system optimization

Example: A Predictive Agent might forecast increased load during an upcoming holiday season and recommend resource scaling.

## Remediation Agent

The Remediation Agent functions as the system's problem solver.

- Suggests fixes for issues identified by Diagnostic and Predictive Agents
- Implements approved solutions automatically when possible
- Provides step-by-step guidance for manual interventions
- Tracks the effectiveness of applied remedies

Example: For a memory leak issue, a Remediation Agent might suggest and apply a configuration change to increase garbage collection frequency.

## Assistant Agent

The Assistant Agent serves as a general support interface for SRE teams.

- Answers queries about system status, configurations, and best practices
- Provides guidance on using other specialized agents effectively
- Offers contextual help and documentation
- Facilitates communication between human operators and other AI agents

Example: An SRE might ask the Assistant Agent, "What's our current database replication lag?" and receive a quick, accurate response.

By leveraging these specialized agent types, Golem enables a comprehensive, AI-driven approach to site reliability engineering, enhancing system stability and team efficiency.