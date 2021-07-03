# 2. DevOps: A Culture Problem

## 02_01 The IT Crowd and the coming storm

- Businesses have been using technology to deliver their services for decades but satisfaction and success rates with IT continue to be low. There are many warring groups inside technology organizations viz: Developers, Sysadmins, InfoSec Professionals, Network Admins, Database Admins. These groups are in conflict with each other, more often than not.

![](https://i.imgur.com/HPGo7uY.png)

- In DevOps this is referred to as the wall of confusion. Example is a developer writing code and throwing it over the wall to the operations engineer, who is supposed to deploy it and then support it. This creates a division between groups that share a common goal.

![](https://i.imgur.com/LUMYTHo.png)

- There are institutional reasons behind this walll of confusion. The real cause is that institutions are incentivizing the opposing behavior. At organizational level developers are charged with developing new functionality, making changes and shipping fast, but the operations teams are told to maintain stability, and controlling change, this leads to conflict of interest for both the teams. This separation of responsibilities diminishes feedback loops. Incentivizing groups to only optimize their own area of concern creates a less optimal outcome for the entire organization.

- While the developers teams are organized by business products the operations teams are organized by technology stack. This also creates walls within operations teams. To make a change in this kind of scenario you might need folks from Unix Team, DBA Team, Web Team, Data Center team.

![](https://i.imgur.com/jwghLuJ.png)

## 02_02 Use your words

- We go over `Blameless Postmortems` and `Transparent Uptime`. These 2 activities need better communication skills than normal as they are often occuring whenever the stakes are really high.

- When doing Blameless Postmortems let the team know we are not here to assign blame to one person or team, instead we are trying to prevent the incident or a similar outage like this from happening in future.

![](https://i.imgur.com/B62Mn9O.png)

![](https://i.imgur.com/3oc8bij.png)

- Transparent Uptime

![](https://i.imgur.com/Sh9xImC.png)

## 02_03 Do unto other

- Collaboration is the grease that makes the DevOps gears turn. How to build trust and respect, while eliminating blame and hostility so that people feel safe to work together and to take chances to innovate? Communication is crucial, and here are some books that one might benefit from:

![](https://i.imgur.com/tHob4OR.png)

- Lack of Context, and Conflict of Goals leads to frustration among teams. One of the most effective DevOps techniques is to break down team barriers and getting people from different specialities to work alongside each other.

- ChatOps: A term coined by GitHub. A shift to using chat client be it Slack, IRC etc. not only as a gathering place for the team to discuss but as a part of your operations system. One can push notifications into chat from commits, builds, deployments, along with your alerting system. Built-in transparency of doing everything in chat rooms and the universal accessibility of chat clients, promotes sharing. For more info check out Web Operations, By John Allspaw and Jesse Robbins. Also, Effective DevOps By Jennifer Davis and Ryn Daniels which focuses on the collaboration and culture aspects of DevOps.

- Remember Culture if the very first principle of DevOps from CAMS. Without building a culture of trust, it will be hard to implement specific technical practices and you will often see them going wrong.

## 02_04 Throwing Things Over The Walls

- What to consider as a leader during the move to the DevOps? Just renaming an existing team DevOps, or making a new team called DevOps does nothing to achieve these goals. You need real change. Change is always hard! Changing roles can be threatening. Organization issues that DevOps talks about eliminating are silos, as DevOps thrives in an environment of autonomous teams. Make independent, cross functional teams as this allows them to develop, build, test, deploy their own service and a high pace is maintained as the team isn't blocked by any other teams.

- You don't have to reorganize your teams to implement DevOps, but you will probably end up doing it at some point. Unless you are attached to doing manual work as your job, DevOps isn't a threat to your job. There's a lot of need for good Ops and QA engineers but there is a lot less need for people who spend their days manually configuring servers.

- Time for that to be a paying job has come and gone. Devs have to take responsibility for failing build or deployment after they have checked in their code these days. They have to be willing to go on call, to support their applications in the production. Operations and QA Engineers have to change their approach to provide self service platforms and guidance instead of doing work for other people.

- Education, Understanding and Encouragement is needed to make the change in culture and technology when moving to DevOps. There's a well understood concept called Conway's Law that states that your systems will basically align themselves to your communication boundaries. Organizational boundaries are one type of communication boundaries.

![](https://i.imgur.com/qs0sSOX.png)

## 02_05 Kaizen: Continuous Improvement

![](https://i.imgur.com/S4RLoiA.png)

- Kaizen emphasises on Gemba, the locus or the real place where value is created or where the problem is. Not reports or metrics or processes discussing it, not documentation about it, actually looking at the problem. Management by walking around, is kind of an interpretation of Gemba. Kaizen cycle of continuous improvement is simple, Plan, Do, Check, Act.

![](https://i.imgur.com/C4zyQun.png)

- Ask 5 why's to boil down to the root cause of the process. People don't fail, processes do.

![](https://i.imgur.com/WUykcOz.png)

## 02_06 FAQs

- What is a good reason for a shadow IT team to arise within an organization? An org has unfulfilled needs that hamper work progress. Shadow IT teams usually form when the established IT team is too slow to address problems or it solutions need customizing to a business reality within that org.

- How could you contribute to the wall of confusion? releasing code that can only be maintained by one person. Making small and frequent code changes is a benefit of a DevOps strategy.

- Let’s say you want to employ the Kaizen cultural practice in your company. What are the four main factors in the Kaizen cycle? Plan, Do, Check and Act.

- Let’s say you need to tackle an important issue about a system failure. What important point should be discussed in the post mortem meeting? Explain that no one is to be assigned blame for the system failure in the meeting. It is important that your team members should not be assigned blame since the objective is to find a solution to the underlying cause.

- What does Kaizen emphasize? examining where value is created. Kaizen emphasizes going right to the source where value is being created.

- Which detail is important when running a blameless postmortem? Conducting the postmortem meeting quickly after outage, understanding the context of decisions made by operators during the incident, creating a timestamp for each event in UTC time. A blameless post mortem requires an objective analysis of the facts as soon as possible after the outage.

- What is the single biggest impediment to having trust inside a DevOps organization? Conflicting goals. Having conflicting goals means there are misunderstandings within the organization, so sharing information is discouraged.

- What is considered a roadblock to assembling a new DevOps organization? having different terminology for each team. It is important that all teams use the same terminology to prevent confusion and waste.

- In ChatOps, which task are you allowed to perform with your chat client? Committing source code, compiling builds, sending push notifications. Some ChatOps tools have advanced functions, such as push notifications, change controls, and deployment capabilities.

- DevOps supports the elimination of **\_\_\_\_\_** because it can hamper collaboration, operations and morale within the company. **silos**

- Companies need to tear down the **\_\_\_\_\_** since it causes disunity and disharmony between the development and operations departments, instead of allowing them to collaborate collectively and align goals or objectives. Wall of Confusion. Wall of confusion is a wall that blocks cooperation and a open line of communication between the operations and development teams.

- Suppose your Dev team has frequent issues with an Ops Teams in your company. Blame is often tossed around between both groups. How would you solve this issue? Embed Ops engineers in your development teams, assign both teams to be in one chat room, and allow them to read each other's source code.
