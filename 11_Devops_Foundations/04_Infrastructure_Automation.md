# 4. Infrastructure Automation

## 04_01 Infrastructure as Code

- In System Administration, automation isn't new but DevOps talks about IaC, Infrastructure as Code. It's a completely programmatic approach to infrastructure, that allows us to leverage development practices for our systems.

- Infrastructure as Code is all about treating our systems like code. We would develop our systems and their specs in an IDE, run their unit and integration tests as part of a continuous integration pipeline and deploy them. Even have them make decisions at runtime based on their state.

![](https://i.imgur.com/D8Qmj1u.png)

- With virtual servers, cloud and containers, everything can be created, changed, and destroyed programmatically. AWS allows completely describing your system using a JSON format called CloudFormation.

- We then have an asset in source control that everyone can look at, that's a gauranteed accurate reflection of your systems. It allows you to verify that your dev, staging and production environments are identical because they were created from the same specification.

![](https://i.imgur.com/okhcEV5.png)

## 04_02 Configuration Management

- Provisioning is the process of making a server ready for operation including hardware, OS, system services and network connectivity.

- Deployment is the process of automatically deploying and upgrading applications on a server.

- Orchestration is the act of performing coordinated operations across multiple systems

- Configuration management itself is an overarching term, dealing with change control for system configuration after initial provision, maintaining and upgrading the application and its dependencies.

- Imperative or procedural is an approach where commands desire to produce a state are defined and then executed.

- There is declarative or functional approach where a desired state is defined, relying on the tool to configure a system to match that state.

- Idempotent: Ability to execute the same procedure repeatedly and end up with same state each time.

- Self-Service: It is the ability for end user to initiate a process without having to go through other people.
