# 9. NoSQL Essential Training

# 00. Introduction

- NoSQL was made for the web, and to handle insane amounts of concurrent users and massive volumes of data. Allows programmers to stay inside the coding environment and away from designing SQL databases.

- We will go over NoSQL strengths, how it is different from traditional databases, and go over little bit of theory behind it as well.

- NoSQL isn't just a single technology, we will go over types of NoSQL databases that differ from each other on a high level. We will go over trying MongoDB before we discuss pros and cons of NoSQL as well as how to pick the right solution for your use case based on schemas, data integrity, scalability and availability.

- `Pre-requisites:` This is a overview, mile-high view of NoSQL, we don't dive deep into details, if you are a developer and want to gain a general understanding of NoSQL then this course is for you. A conventional understanding of data is the only thing that's required and curiousity to learn and explore.

---

# 1. What is NoSQL ?

## 01_01 Why the hype over NoSQL?

- `NoSQL`: Stands for Not Only SQL. It's a way to store data that compliments aspects of speed, flexibility, and scalability needed in modern web apps. There's a lot of hype and folks have said things like it will make relational databases obsolete. Well, like everything in world, it has its own pros and cons and most probably is going to live side by side with relational.

- Overall, NoSQL does a phenomenal job at flexibility, scalability, and speed. For most developers it is really easy to work with. It is often associated with agile development or big data, and it certainly suits agile development. Although NoSQL is not synonymous with Big Data it is often used with it.

- Let's take a look at the big superstar on database campus, SQL and relational databases! Relational databases are strong in integrity and consistency. They are structured and organized, are much more reliable but they are not necessarily fast and nimble. So RDBMS are great for certain jobs, and not great for others.

- So now it would make sense when we tell you that relational databases are reliable, consistent, offer more strong integrity. Whereas, NoSQL databases are flexible, scalable and fast. So both of them have different purposes, and at times two can even team up. NoSQL's strengths makes it a great option for a variety of modern applications, including things like big data analysis, social networking, website personalization, user profiles and more.

- NoSQL databases are great at scalability, and can operate as applications and websites grow to accomodate millions of users. It's flexible nature allows programmers to use agile methodology easily without needing to go through the hardships of modeling relational databases.

## 01_02 NoSQL Compared to traditional relational databases

- `Relational databases:` Great record in enterprise organizations historically, Are very Structured that leads to high reliability and consistency making them well-suited for transactions. They have strict schema, with unique primary and foreign keys designed for purposes of data integrity. Each column is defined and filled out, even if it's a NULL value at that position.

- `NoSQL:` NoSQL doesn't have any strong pre-defined schemas. Instead these are more fluid. The columns aren't defined here, columns do not need to be same across rows. NoSQL and relational databases store data differently. By understanding their strengths and weaknesses we will gain a better grip on which one is more suitable for a given application and why.

## 01_03 CAP Theorem

- CAP stands for consistency, availability and partition tolerance. It states that we can only have two out of those three items. Consistency here means that data throughout the database system is the same. It is when accuracy is having uttermost importance. Say banking, high-stakes transactios, money transfer, nuclear reactor sensor values etc.

![](https://i.imgur.com/ipnQUJ8.png)

- Availability relates to users being able to read and write / perform operations on database, regardless of failures in the network. Finally, partition tolerance means that the system is up and running. Working as expected, even if some of the network is down. Because we can only choose two out of these 3, CAP theorem helps us to form intelligent decisions, when choosing the right database for our needs.

![](https://i.imgur.com/7y0zgj4.png)

- Relational databases, overall do not offer partition tolerance, nor do they offer high availability, but they do offer reliable consistent data though. NoSQL databases offer partition tolerance along with subspecialities related to availability or consistency in general, depending on the specific NoSQL database that you chose.

- Relational databases offer tremendous consistency, but since data is found only on one machine generally, the partition tolerance suffers again. Since, such systems lack records during updates, the availability isn't very high.

![](https://i.imgur.com/VUDPDws.png)

- NoSQL systems focus on partition tolerance and availability. All users can write to machine one in this case, but they read from machine two, three, four etc. The consistent most accurate data here is on machine one. Imperfect, but eventual consistency is offered by NoSQL databases. Examples are CouchDB, Cassandra and DynamoDB.

![](https://i.imgur.com/3idDMF2.png)

- NoSQL systems that focus on Partition Tolerance and Consistency are called `NoSQL CP` Systems. In this case, users read and write to machine one, and then replication occurs. The consistent most accurate data here is on machine one. This is the data that goes to other machines in the system after replication. Examples are MongoDB, HBase and Redis along with relational databases with fail over.

![](https://i.imgur.com/kdMZDRt.png)

## 01_04 Explore a NoSQL Database & 01_05 How to query in MongoDB

- Query for documents with year as 2000.

![](https://i.imgur.com/sz7IRaM.png)

- Query for more than one field, here we query for year 2000 and rating PG-13:

![](https://i.imgur.com/STfo2dX.png)

---

# 2. Different Types of NoSQL Databases

## 02_01 Overview of NoSQL Database Types

- NoSQL is an umbrella term that describes a variety of non-relational databases. These are alternatives to traditional databases. There are 4 main types of NoSQL databases that differ from each other primarily.

- Before going to differences let's go over commonalities of NoSQL. NoSQL was developed to address the scalability issue of web applications, to handle the LinkedIns, Facebooks, Twitters and Amazons of the world. These modern applications need something that is always on, ability to handle a ton of data, especially data that isn't in a particular organized format always, i.e. unstructured data.

- There are 4 main kinds of NoSQL Storage Types viz: Key-value, document, wide-column and graph.

- We will look over these 4 types from a high-level perspective. Depending on specific needs, one might be better than another in a given scenario and we will try to investigate these specialities.

## 02_02 NoSQL Key-Value Databases

- Key-value stores are simple ways to store large amount of unstructured data for fast retrieval.

- It is a simple data storage, key and value can be anything.

- Useful for storing basic information like user profiles, cachine, user preference storage (dark theme or light theme). Think of these as hash maps, dictionaries, basically O(1) read time, cachine, session management, leaderboards.

- Highly scalable.

- Redis is a popular key-value NoSQL database. Others are DynamoDB and Oracle NoSQL.

![](https://i.imgur.com/7ecCwjj.png)

![](https://i.imgur.com/D5vXHnM.png)

## 02_03 NoSQL Document Databases

- Document databases are similar to key value databases, but the value in this case is stored as a document. E.g. MongoDB stores the document in a form called BSON, stands for Binary JSON. It is very similar to JSON, as a developer you can think of it as JSON. The values within a document can be all sorts of types from strings to objects, arrays etc, similar to how developers type variables in their code. This makes it very suitable and flexible for agile development.

- Document databases should be chosen when we need a ton of flexibility, but not a lot of complex queries. Document stores are considered general purpose in a way, Swiss Army Knife kind of NoSQL databases.

- Applications include, but not limited to following:

![](https://i.imgur.com/6KM8gwy.png)

![](https://i.imgur.com/KGbUfbu.png)

- Popular document storage systems are Apache CouchDB, MongoDB and Azure Cosmos DB.

## 02_04 NoSQL Wide Column Store Databases

- Also known as Column Family Databases, these are a subse of key-value NoSQL databases. They are like relational databases in some ways, because they use tables, rows and columns, but unlike relational, these dynamic columns can vary from row to row.

- Unlike relational databases, tables can be created, altered and even dropped while the database is running. It is best to use these when you know the queries and model your tables around queries, instead of how we do it in relational database modeling, where you model your tables around the data.

- Wide column stores can be used for very fast querying of specific parts of data, but not whole rows. Typically it uses primary keys and indexes. Wide column databases are great for extremely large amounts of data and some of the well known applications are:

![](https://i.imgur.com/ui6DQWA.png)

- Popular wide column databases are Cassandra, HBase.

## 02_05 NoSQL Graph Data Store Type

- Different than the other types of NoSQL data stores. Everything is stored in the form of an node or an edge that shows relationships. Best used for relationship-type analysis. Not so great when we want something general purpose though.

- Since they are relational in nature, graph databases are really well suited for social networks entity representation and some of the popular applications are as follows:

![](https://i.imgur.com/bDx512v.png)

- Some popular graph databases are Neo4j, JanusGraph.

---

# 3. Pros and Cons of NoSQL

## 03_01 Where NoSQL Thrives! 🚀🚀

- Even though NoSQL is an umbrella term for non relational databases, and the different NoSQL databases are specialized to a certain extent there are general areas where NoSQL thrives in comparison to relational database systems!

- These areas mainly are scalability, flexibility, speed. But, there are always trade-offs, we must remember.

- CAP Theorem tells us what choice is going to be a trade-off for what feature out of Consistency, Availability and Partition Tolerance. We can only have 2 out of the 3. Traditional RDBMS do not offer partition tolerance only NoSQL and subspecialities generally offer partition tolerance.

- NoSQL's great for caching information. So users experience websites as running faster. Storing user session information is a place where NoSQL thrives. This is kind of information that is needeed for a particular time period, but doesn't need to be stored perfectly everywhere at the same time.

- Real time inventory systems and fraud mitigation systems are areas where NoSQL works well. It's important that system is up and running at scale and less preference is given to data being perfect in these systems. Moreover, we can tradeoff our consistency for partition tolerance, so that even if some nodes have imperfect data from time to time, it's important that it is up and running.

## 03_02 Where NoSQL Fails ❌❌

- NoSQL isn't right for every scenario. NoSQL in general fails where you need consistency of data. We do not mean eventual consistency, we mean most accurate consistency in this scenario. Banking systems need to be highly consistent or AADHAR identification system and other critical systems. If you want your data to be really consistent and cannot tolerate any trade-offs in this area then a relational database is most likely the right solution for you.

- If you have a need for complex SQL queries, or if you have developers with strong SQL backgrounds then NoSQL might not be the right fit. Say you have side projects which only a few users might use at one given point of time, in this case we can argue partition tolerance isn't needed and it would be better to go for SQL databases.

![](https://i.imgur.com/V151zu0.png)

---

# 4. Is NoSQL Right for your use case ?

## 04_01 Is NoSQL Right for you?

- Recall CAP Theorem, you can have only 2 out of 3 in a given DBMS. Relational DBs focus heavily on consistency and excel at it. NoSQL DBs focus more on A and P of CAP Theorem. ACID databases are relational databases and NoSQL databases are BASE, which are 2 kinds of data consistency models.

![](https://i.imgur.com/a1i2sa4.png)

![](https://i.imgur.com/GDJY38b.png)

- Relational databases are preferred when there has to be defined schemas, data integrity is important such as in banking, finance, healthcare. Scalability and availability are of less concern than consistency of data and when you have a team of SQL expertise. Generally target audience is enterprise organizations.

- Start-ups and consumer facing projects, where you have evolving data and eventually consistent is acceptable. Availability, scalability and speed is more important than consistency. Definitely no ATM transactions on NoSQL databases!

## 04_02 NoSQL vs Relational DB Considerations: Time, Money and Technical

![](https://i.imgur.com/HjoE8uy.png)

![](https://i.imgur.com/Ko4tj5P.png)

- We have covered tech aspects for the most part in this document. Basically if you need transactional level integrity then relational is way to go for you. Otherwise for partition tolerance and availability it's better to go for NoSQL.

![](https://i.imgur.com/KsYFz8E.png)

- You have to take into consideration all of the factors, time, money, technical and misc. factors as well.

## 04_03 Choosing Between NoSQL Databases

![](https://i.imgur.com/Xa9Sfeu.png)

![](https://i.imgur.com/8K6YW3v.png)

![](https://i.imgur.com/T979nFb.png)
