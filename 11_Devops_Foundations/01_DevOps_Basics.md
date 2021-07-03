# 1. DevOps Basics

---

## 01_01 What is DevOps?

- DevOps, to those from technology background, most of us have heard about it, its a buzz word, a hot new trend, companies from IBM to Microsoft everyone talks about it but what exactly is it? Well there isn't a single agreed upon definition, so yeah that would explain the confusion around the definition. DevOps broadly speaking can be defined by two ideas. Firstly, DevOps is the practice of operations and development engineers participating together in the entire service lifecycle, from design through the development process to production support. DevOps replaces the model where you had a team that only writes the code, another team to test it, another team to take care of deployment and other team that looks over operations.

![](https://i.imgur.com/3bgT8Ra.png)

- Secondly, DevOps is also characterized by operations staff, making use of many of the same techniques as developers for their systems work. DevOps systems engineering works just like a development workflow. All the assets are checked in the source control and have tests associated with them. But DevOps like Agile, or Lean is broad enough concept that just a high level definition doesn't really tell you much about specifics. For this reason, DevOps could be broken into 5 levels viz:

- 1. Values, 2. Principles, 3. Methods, 4. Practices and 5. Tools. We will go over each of these levels later on, for now let's address some big questions related to DevOps.

- Why do you care? What does DevOps do for you, and why you would want to practice it? Well first reason is that it's been seen to be effective in improving both it and business outcomes. More on State of DevOps 2020 Report [Here](https://media.webteam.puppet.com/uploads/2020/11/Puppet-State-of-DevOps-Report-2020.pdf)

- Some of the highlights from 2019 state of DevOps report were, teams using DevOps practices deployed changes 30 times more frequently, had 200 times shorter lead times, and instead of that resulting in quality issues, they had 60 times fewer failures and recovered from issues 168 times faster than other organizations.

- Survey also showed that these results were seen across different sizes and types of business. Second reason is that, it makes your day to day operations and life in general easier. High Tech is a very interrupt driven, high pressure exercise and it can very often lead to personal and professional burnout. It was seen that DevOps approach reduces unplanned work, increased friendly relationship between coworkers, and reduces stress on the job, while being productive.

- While DevOps is a combination of Development and Operations, it doesn't mean to leave out other teams out of the loop. Dev is traditionally understood to mean everyone usually on the code side, from backend, frontend devs to QA and Ops is generally understood to include everyone traditionally on the system side, be it Linux Admins or DB Admins or Network Administrators. Collaboration among everyone participating and delievering software is a key DevOps feature.

- What DevOps is not? A new name for operations team, A job title or a new tool category.

---

## 01_02 DevOps core values: CAMS

- The CAMS model, created by DevOps pioneers John Willis and Damon Edwards. It stands for Culture, Automation, Measurement, Sharing. CAMS has become the model set of values of many DevOps practitioner. `Patrick Debois`, who is also often referred to as the godfather since he coined the term, likes to say that DevOps is often thought of as human problem. Well, DevOps is often thought of as a technology problem, in reality it's a cultural and business problem.

- `C - Culture:` Well, what is culture then ? Culture is more than ping pong tables or free food in company cafeteria! Yeah ik, that's a shock, but hear me out! Culture is driven by behavior. Culture exists among people with a mutual understanding of each other and where they are coming from. Early on in IT organizations, teams were split into two major groups, Developers and Operations. Developers were charged with creating features, and operations were responsible for maintaining stability.

- With time, walls formed around these two teams due to their different goals, now today, after this pattern was left unchecked for a long time, these groups do not speak the same language and they don't have mutual understanding. Changing these underlying behaviors and assumptions is how an organization can drive the change in their company's culture.

![](https://i.imgur.com/LA43aNI.png)

- `A - Automation:` The first thing that people usually think about when they think of DevOps, it's automation. In early days of DevOps, some people equated the term just to anybody using Chef or Puppet or CFEngine. But, part of the point of `CAMS` is to bring back balance into how we think about it. DevOps isn't just about automated tools, People and Process comes before followed by Tools in DevOps. As Damon Edwards put it as People, over Process, over Tools (PPT) has a new meaning, atleast for me lol.

- Automation is a critial part of DevOps strategy. Once you begin to understand your culture, how often your teams like to ship etc. you can create a fabric of automation that allows you to control your systems and your applications. Automation is the accelerator that's going to get you all the other benefits of DevOps. So, you'd really want to make sure you prioritize automation as your primary approach to the problem.

- `M - Measurement:` One of the keys to rational approach to our systems is the ability to measure them. There are 2 major pitfalls in metrics, first we sometimes choose the wrong metrics to watch. Second, sometimes we fail to incentivize them properly. Due to this DevOps strongly advises you to measure key metrics across the organization. Look for things such as Mean Time to Recovery (MTTR), Cycle Time, Costs, Revenue, Employee Satisfaction. All of these are a part of generating a holistic insight across your system of building features, shipping them and your ability to offer them uninterrupted.

- These metrics help the team understand and engage the overall goal. It's common to see these metrics shared internally or even exposed externally to customers.

- `S - Sharing:` Sharing ideas and problems is the heart of collaboration. And it's also really the heart of DevOps. And DevOps expect to see a high premium placed on openness and transparency. This drives Kaizen, which means discreet continuous improvement. Sharing is the feedback loop that helps continuous improvement across teams. CAMS, are the four fundamental and mutually reinforcing values that you should keep in mind when thinking of DevOps implementation. These 4 things are the why behind a lot of techniques that we will cover later on.

![](https://i.imgur.com/dtuNUc7.png)

---

## 01_03 DevOps Principles: The Three Ways

- Principles that one can use to guide them in taking the core DevOps values and implementing them. The most respected set of principles is known by the name of `The Three Ways`. This model was developed by Gene Kim and Mike Orzen. Three ways are: `1. Systems Thinking`, `2. Amplifying Feedback Loops` and `3. A Culture of Continuous Experimentation and Learning`.

![](https://i.imgur.com/A2NBEVn.png)

- The first way, `Systems Thinking`, tells us that we should make sure to focus on the overall outcome of the entire pipeline or value chain. It is easy to make the mistake, of optimizing one part of the chain at the expense of the overall results. E.g. When you are trying to optimize performance in an application increasing performance or system resources in one area causes the bottleneck to move, sometimes to an unexpected place where it's hard to trace to. Adding more application servers for instance, can overwhelm a database server with connections and bring it down. One should understand the whole system to optimize it well.

![](https://i.imgur.com/rFlWvG0.png)

- Same would apply to IT organizations. A deployment team might establish processes to make their own work go smoothly, and their productivity numbers might look good, but those same changes could compromise the development process and reduce the organization's overall ability to deliver software. This overall flow is often called `From Concept to Cash`. It basically means, if you write all the software in the world, but you can't deliver it to a customer in a way that they can use it, you lose. The split between development and operations has often been the place where the flow from concept to cash goes wrong.

- Use systems thinking as guidance when defining success metrics and evaluating the outcome of changes.

- Second way, `Amplifying Feedback Loops` is all about creating, shortening and amplification of feedback loops between the teams/parts of the oragnization that are part of the value chain. A feedback loops is simply a process, that takes its own output into considerations, when deciding what to do next. If output isn't as desired then input is modified till we are satisfied, and the constant feedback helps in achieving the output as accurate to the requirements as possible.

![](https://i.imgur.com/SCuNVFZ.png)

- Short effective feedback loops are the key to productive product development, software development and operations. E.g. Say you are a developer, and you find a bug by you before you check it out into source control, since tests on your desktop caught it, you have eliminated a problem with very little time wasted.

![](https://i.imgur.com/AShqxKB.png)

- Now, imagine another scenario, if that bug gets past you, and is found by QA team, documented in a ticketing system, and then pushed back to a developer to fix, it is still resolved, but with more time wasted. And now the worst case scenario, if it gets past the QA and to the customer released, and is encountered by the end users, logged with a support organization, churned over in support, escalated back to the development, re-prioritized by a product manager and then fixed, it wastes even more time and money for a same or worse outcome.

![](https://i.imgur.com/CZzD7V7.png)

- Effective feedback is what drives any control loop, designed to improve a system. Use amplifying feedback loops when creating multi-team proecsses, visualizing metrics, and designing delivery flows.

- The Third Way, Continuous Experimentation reminds us to create work culture that allows for both continuous experimentation and learning. You and your team should be open to learning new things, and the best route to that is actively trying them out, to get an idea of what works and what doesn't. Instead of falling into analysis paralysis.

- It's just not about learning new things, it also means engaging in continuous practice required to master skills that are part of your portfolio. Master skills by practice, find new skills by trying them. Remember these 3 things when you think about learning in tech, Working code wins, If it hurts, do it more, fail fast.

- Encourage sharing and trying new ideas, engineers are problem finders and solvers by nature, and that could lead to avoiding attempts to try new things or deliberate attempts at niche protection. No technology even Docker, Terraform or Kubernetes (at the time of writing this) is a silver bullet that solves all your problems. It's how you use these technologies that's what matters.

![](https://i.imgur.com/vfzcprQ.png)

---

## 01_04 Your DevOps Playbook

- Here we cover the 5 most popular DevOps methodologies.

1. `People Over Process Over Tools:` It's about identifying the person responsible for a job function first, then defining the process that needs to happen around them, followed by selecting and implementing the tool to perform that process.

![](https://i.imgur.com/IkOnlIn.png)

2. `Continuous Delivery`: It's the practice of coding, testing and releasing software frequently in really small batches, so that you can improve the overall quality and velocity. It's been shown in studies that in CD environments the team spends 22% less time on unplanned work and rework. Changes have a three times lower failure rate, and the team recovers 24 times faster from failures. It works for all kind of workloads.

3. `Lean Management:` It consists of using small batches of work, work in progress limits, feedback loops and visualization. The same studies showed that lean management practices led to both better organizational outputs, including system throughput and stability along with less burnout and greater employee satisfaction at the personal level.

4. `Changed Control:` In the book Visible Ops, it was revealed that there is a direct correlation between operational success and control over changes in your environment.

![](https://i.imgur.com/DJ8vFQy.png)

5. `Infrastructure as Code:` Systems should be treated like code, system specifications should be checked into source control, it should go through code review, whether a build, an automated test and then we can automatically create real systems from the spec and manage them programatically. With think kind of programatic system we can compile, run, kill and run systems again instead of manually creating handcrafted permanent fixtures that we maintain manually over time. You could say, we used to treat servers like pets, now we treat them as cattle. Visual representation of: Code To Cattle, oops! I mean Code to Servers 😅

![](https://i.imgur.com/ENPsckx.png)

- These 5 key methodologies can help you start in your tangible implementation of DevOps.

![](https://i.imgur.com/CzFHm9y.png)

---

## 01_05 Ten Practices for DevOps Success: 1 to 5

1. `Chaos Monkey`: Old school systems development theory advocated for making each component of a system as highly available as possible. This is done in order to achieve the highest possible uptime. A transaction that relies on five 99% available components will only be 95% available because duhh, math! Instead, focus should be on making the overall system highly reliable, even in the face of unreliable components. Netflix invented Chaos Monkey, to ensure they were doing reliability correctly. Chaos Monkey watches the Netflix system that runs in the Amazon Cloud and occasionally reaches out and trashes a server just kills it. This forces the developers and operators creating the systems to engineer resiliency into their services instead of being lulled into thinking that their infrastructure is always on.

2. `Blue Green Development`: Traditionally in software development, you take down the software on a server, upgrade it, bring it back up and then you might even do this in a rolling manner, so you can maintain the system uptime. An alternate deployment pattern is blue/green deployment. Instead of testing a release in a staging environment and then deploying it to a production environment and hoping it works, instead you have two identical systems, blue and green. One is live, and the other isn't. To perform an upgrade, you upgrade the offline system, test it, and then shift production traffic over to it. If there's a problem, we shift back to the Blue.

![](https://i.imgur.com/jxU7Jsv.png)

![](https://i.imgur.com/ZhPnz8B.png)

1. `Dependency Injection`: In a modern application connection to external services, 3rd party apis and rest services etc. is the reason for most of the runtime issues. There is a software design pattern called dependency injection or inversion of control. This focuses on loosely coupled dependencies. In this pattern, the application shouldn't know anything about its external dependencies. Instead they are passed into the application at the runtime.

2. `Andon Cords`: This is an innovation originally used by Toyota on its production line. A physical cord, like the stop request cord on a bus that empowers anyone on the line to pull to stop ship on the production line because they saw some problem. We can do the same thing for software delivery pipeline. This would allow you to halt an upgrade or a deployment to stop the bug from propagating downstream.

![](https://i.imgur.com/bsYbag8.png)

5. `The Cloud`: The DevOps love of automation and desire for infrastructure's code has met a really powerful ally in the cloud. Most compelling reason other than cost optimization to use cloud services is that the cloud solutions give you an entirely API-driven way to create and control infrastructure. This allows you to treat your systems infrastructure exactly as if it were any other program component. You can try new development and disaster recovery strategy, you can try it out on test deployment, without waiting for others. Cloud approach to infrastructure allows your other DevOps changes move along at a high velocity.

## 01_06 Ten Practices for DevOps Success: 6 to 10:

6. `Embedded Teams`: Classic DevOps problem, dev team wants to ship new code, and Ops team wants to keep the service up, if you look closely, you will see there lies an inherent conflict of interest. One way is to be skeptical and guess your way through it. A much better way is what some teams started to embed an operations engineer on each development team and this makes the team responsible for all of its own work, instead of passing on the requests to another team into some queue for operations team and telling them what to do. This allow both teams to closely coordinate with their goals aligned, the success of the service.

7. `Blameless Postmortems`: Decades of research on indsutry safety disproves the idea that there is a single root cause for an incident. So, you cannot use human error as an acceptable reason of failure. While examining failures goal should be to learn from them as much as you can, avoiding logical fallacies or relying on scapegoating to make ourselves feel better, while making real situation worse. [Blameless Postmortems and Just Culture Blog](https://codeascraft.com/2012/05/22/blameless-postmortems/)

8. `Public Status Pages:` Services go down, they have problems, it's understandable and a fact of tech life. I mean YT and Instagram can be down, a little down time is not the end of the world right! Only thing that has shown to increase customer satisfaction and retain trust during these outages is communication. A good read on this is Lenny Rachitsky's Blog [Transparent Uptime](http://www.transparentuptime.com/) was a tireless advocate for creating public status pages and communicating promptly and clearly with service users. Tell the users what the problem is, what is being done and after the issue is resolved tell what you have learned to prevent such incidents in future.

9. `Developers On Call`: Approaching products as an IT organization with a philosophy of let's make and ship the features and someone else will be responsible for making sure it works, say outsourcing the support etc. Needless to say, this hasn't worked out great and usually leads to poor customer satisfaction. Teams now put developers on call for the service they created. This leads to very fast feedback loop. Logging and deployment are rapidly improved and core application problems get resolved quickly, instead of lingering for years while making some network operations center person restart the servers as a workaround.

10. `Incident Command System`: Old school incident response techniques only apply to really large scale incidents. Real life incident response experience suggest, mostly it is a mix of small incidents with only an occasional large one. A great read on this is `Brent Chapman's Incident Command for IT` which you can see [here](https://www.usenix.org/legacy/events/lisa05/tech/chapman.pdf). It goes over comparing incident response in real world and explains how the same process can work for IT.

![](https://i.imgur.com/zJGP5KJ.png)

---

## 01_07 DevOps Tools

- There's been a great explosion in tools, both free, open source and commercial along with the rise of the DevOps. Innovation in tools had stagnated for many years in operations. While choosing tools make sure they compliment your strategy and be thoughtful about them. There's definitely a thing as too many tools, but it is also naive to think that tooling is now only an outgrowth of higher level DevOps strategy and not a driver of it.

- These tools can lead to amazing new capabilities but also could be a threat to those who don't change their approach to take new tools into account. Automating your systems can just give you a way that crash them all at once, instead of one at a time. Keep changing your tools as per the market, to avoid crash and burn.

- `Tools Criteria`:

1. Tool should be programmable, be able to play nice with other systems, while performing its work in an automated manner. You should be able to call it and invoke it from an API or the command line. Tools that are only UI driven, they are going to prove to be poor choices of your tool chain.

2. You want the tool to be verifiable. Trust, but verify. Best kind of DevOps tools exposes clearly what it is doing and provide some manner of validating that it did infact what it sets out to do. Events and metrics from your tools are an important source of feedback.

3. It has to be well behaved both from a developer point of view, and an operations point of view. You should be able to check the tools configuration in the source control, it should come with tests that can be used to verify its behavior and you should be able to deploy it in an automated manner.

Also, follow the above tools criteria when developing your own tools in DevOps to fit your custom requirements.

## 01_08 FAQs

- What is a common misconception about employing DevOps in the cloud? It is used primarily for cost optimization. The main reason to deploy DevOps in the cloud is to allow infrastructures to be controlled by APIs.

- What is a characteristic of blue green development ? Having two identical production environments with only one online. Blue green development requires two identical production environments, where one is online and the other is offline.

- What are the five levels of DevOps practice? values, principles, methods, practices, and tools

- How are DevOps and development alike? Systems can be treated like code. Systems can go through the software development life cycle just like a coding project does.

- Let’s say your company’s server went down for a few days due to a hurricane. How would having a status page affect your company’s reputation throughout the outage? Communicating on the status page throughout the outage will notify the users of the issues and deadline for resolution. It can improve the trust and satisfaction of the customers.

- Which process can be improved by having a developer on call? discovering core application problems. Discovering core application problems is a long-term benefit of having a developer on call.

- Suppose you want to test the resilience of your company’s e-commerce website in preparation for the holiday shopping season. How would having a Chaos Monkey test the abilities of your servers? The Chaos Monkey will interrupt normal operations for your server, forcing your engineers to find methods to make the server robust and tolerant to instance failures.

- Tools are launched daily for diverse purposes. Which qualities should you look for in a tool before combining it into a toolchain? Programmable, Verifiable, Well Behaved.

- Which attribute is most detrimental in a DevOps tool? only having a UI-driven interface. UI-driven interfaces are not as well suited as console interfaces, in terms of using automation tools.

- How would you summarize the key DevOps tenet? DevOps is a partnership of all the team members involved in software development and operations. DevOps is a collaboration between the development and operations team members.

- DevOps unites team members from both the **\_** and **\_** to participate in the IT service lifecycle from design to ongoing support. “code side”; “system side” Developers and operational engineers collaborate on the entire service lifecycle in DevOps.

- Why is DevOps important to a company? It helps a company improve both IT and business outcomes. DevOps helps organizations meet deadlines faster by having fewer failures, which also helps their bottom line.

- What are the four values in the CAMS model? CAMS: Culture, Automation, Measurement, and Sharing

- Which problem type does DevOps address? business and cultural. DevOps promotes understanding among employees, which can lead to better business outcomes.

- "People over process over tools" is an expression that describes which core value? culture. Culture is the "C" in CAMS. True change requires changes in approach at the people or cultural level, which then drives how you construct processes and what tools you choose.

- How can you implement experimentation and learning in your work environment? Rotate your employees to attend conferences and share vital information with their colleagues.

- A plan to improve the overall throughput of a service would be best served by which DevOps principle? systems thinking . Systems thinking requires an engineer to think about the entire system holistically.

- When considering the People over Process over Tools methodology, why is it important to focus on People first? You need a responsible individual with the appropriate skill set who knows the planning and implementation of the project and tools otherwise there will be wastage and inferior product and solution delivery.

- Continuous delivery has all of these benefits except **\_**. increasing fragile artifacts. By having a light and practical approach to change control, you can decrease fragile artifacts.
