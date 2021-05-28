# 0. Introduction

- Using git as a src code management tool is an essential skill to have for all web developers. Git helps us to manage the code in a project as we develop new features, helps to find and fix problems, and simplifies collaboration with other developers.

- We will go over git installation, its fundamental concepts. Then we will go over essential techniques one needs to know to add files to a git repo, to track changes to those files over time, and then view and compare previous versions of the files.

---

# 1. What is Git?

## 01_01 Version Control

- Git is a software that keep tracks of changes we make to files and directories in our project, especially good at keeping track of text changes. It allows us to move back and forth between versions and allows us to compare what changes between given versions. Git is referred to as version control system (VCS) or Source Code Management (SCM) tool. Programmers wanted to be able to track changes that they made to source code over time, as they added features and as they fixed bugs, so version control was created.

- Some of the common instance where we see version control in our daily life are naming files file_v1, file_v2, file_final, file_final_final and so on. MS Word has track changes, Adobe Photoshop has History, Wikis have version control too. And the most common form of version control, Undo using Ctrl/Cmd+Z.

## 01_02 The history behind Git

- There are 5 important Version Control Systems that predate Git. There have been others but these are some of the most popular and influential ones, these can help us to better understand Git.

1. `SCCS`: Source Code Control System, released in 1972 and was developed by `AT&T` and it was bundled free with the unix operating system. Unix was also free and as a result unix spread quickly to universities and SCCS went along with it. Unis taught their students how to do version control using SCCS, so when they left the uni to go work in jobs, the VCS they were familiar with and they took with them was SCCS. So that's why it became really popular.

- When you make v1, v2, v3 as new updated version in doing so we are saving the full document three different times and taking up approximately 3x the size and it is not a very efficient way to do it. What SCCS does is that it keeps the original document, instead of saving the whole document a seconds time, it just saves a snapshot of what the changes were. If you want v5 then you take v1 and apply 4 sets of changes to it to get to v5.

SCCS stayed dominant until the early 80s when RCS Revision Control system came in.

2. `RCS`: Revision control system made lots of improvements over SCCS. RCS was cross-platform whereas SCCS was unix only. With the rise of personal computer it was important to have a VCS that would also work on PCs. RCS was more intuitive, had a cleaner syntax with fewer commands and more features. Most importantly, it was faster and a lot of the speed increase came from the fact that it used a smarter storage strategy than SCCS.

- SCCS stored original file and kept track of all the changes to that file, that went after it. RCS flipped that around, it kept the most recent file in its whole form and if you wanted to go backwards in time, then you were supposed to apply change snapshots to go in reverse to older versions. This is a lot more faster as most of the time we want to work on the current document.

- One of the problems with both SCCS and RCS was that they only allowed you to work with an individual file, one at a time. So you can track changes in single file but not in sets of files or in a whole project for that sake.

3. `CVS`: Came up in 1986-90. Concurrent Version System allowed you to keep track of sets of files. CVS had made a lot of innovative stride forward. It was open source, had tracking support for multiple files, entire project.

- The concurrent part is what's really stood apart in CVS. The fact that there was a place where one can store their code, called the code repository and you can put that on a remote server and more than one user can work on the same file at the same time. They can work concurrently with previous versions.

4. `Apache SVN`: Apache Subversion came out in 2000. It was faster than CVS and allowed saving of non-text files like images which CVS couldn't do. SVN was tracking not just changes to single files or to group of files but actually watching what happened in a directory as a whole and taking snapshot of a directory.

- SVN was able to track the history of directories. If you changed name of a file CVS would have a hard time tracking it, no such issues in SVN. CVS would also update files one at a time as it went to either apply or read back changes. SVN would instead do that transactional commit and apply all the changes that happened to the directory or to none of them at all.

- The snapshot was bigger than just the individual files, it was an entire directory or an entire set of changes that were happening to that directory at one time. It's a subtle but an important difference. Now SVN stayed the most important VCS for a very long time, until git came out.

5. `BitKeeper SCM`: Came out in 2000, closed source, proprietary source code management tool. One of the features that BitKeeper had was distributed version control. Being closed source whereas all the other VCS we saw were open sourced, what does that mean ? BitKeeper had a community version and this was free, had few less features and some usage restrictions. There was a paid version of BitKeeper and free one called community version.

- Community version of BitKeeper was used for source code of the Linux Kernel from 2002 to 2005. It was controversial to use proprietary SCM for an open-source project. Community had concerns what if BitKeeper stopped making community version for free. Guess what, in April 2005 they did so. Community version was not free anymore. So BitKeeper was never as popular as CVS or SVN, but it played a crucial role in giving that push which was required for the creation of Git.

## Git is born

- When BitKeeper community version stopped being free in April 2005, that's when git was born. Git was created by Linux Torvalds. Git is distributed version control like bitkeeper, it is open-source, free, compatible with Linux, macOS, and Windows.

- Faster than other SCMs (100 times in some cases) for some operations.

- Git is a hit, gets an explosion in popularity, GitHub launched in 2008 to host Git repositories. Popularity of git can be correlated with growth of github and its platform users. `2008`: GitHub Launched. `2009`: Over 50k repositories, 100k users. `2011`: 2 Million+ repositories, 1 Million+ users. `2018`: Purchased by microsoft for $ 7.5 B. `2019`: 57M+ repositories, 28M+ users.

## 01_03 About Distributed Version Control

- Master copy of the code is stored at one central location in centralised version control system. When you work on code, you checkout a copy from that master repository, you work on the copy, make changes and submit those changes back to central repository. It's on us to pull and update whatever changes others would have pushed.

- Git doesn't work that way. Git is distributed version control system. Different users each maintain their own repositories, instead of working from a central repository, and the changes are stored as sets or patches and we are focused on tracking changes, not the versions of the documents.

- You might think that CVS and SVN are tracking changes as well. No, they track the changes that it takes to get from one version to another version of each different file, or from one state of directory to another.

- Git focuses on these change sets, and encapsulating a change set as a discrete unit, and then those change sets can be exchanged between repositories. We are not trying to be up to date with latest version of something. Instead we ask do we have a change set applied or not. We might say that you merge in change sets or you apply patches between the different repositories.

- There is no single master repository, there are just many working copies. Each with their own combination of change sets. As it is distributed that means no need to communicate with central server and that makes things faster, and it means that it's not necessary to have network access to submit our changes. There's no single point of failure.

- Increases participation and forking of projects, this is really important for open-source community because developers can work independently, make changes, bug fixes, submit pull requests.

---

# 02. Install Git and Basic Configuration

- Go to [https://git-scm.com](https://www.git-scm.com) and download the installer for your system.

- Do `git --version` after installation and if you get the version number installed then your installation has been completed successfully.

- There are 3 places where git stores configuration information and it depends on how widely we want these configurations to apply. The first and broadest is the system level configurations present in `/etc/gitconfig` or `Program Files\Git\etc\gitconfig`. These are the configurations that will apply to every user by default, one can write their own configurations too. For users you can find at `~/.gitconfig` and for project config file is in `project_name/.git/config`.

- Git provides commands with flags to specify at what level you want to make changes in the repository.

```
System
git config --system

User
git config --global

Project
git config
```

- We will set a few configurations after a new installation and these are as follows

```
git config --global user.name "AnmolTomer"
git config --global user.email "email@domain.com"
git config --global core.editor "C:\\Program Files\\Microsoft VS Code\\Code.exe" --wait
git config --global color.ui true
```

- You can list all of your configurations using `git config --list`.

- Windows has the autocompletion in its installation but for linux and mac you need to go to github.com/git/git/contrib/completion and get the relevant file as per your editor. There's one for bash, zsh, tcsh.

- Once you download the file, you have to add the .git-completion file to your `.bash_profile` or `.bashrc`.

```bash
# Edit ~/.bashrc or ~/.bash_profile
if [-f ~/.git-completion.bash]; then
    source ~/.git-completion.bash
fi

# If the file exists load it into the memory.
```

- `git --help`: Returns helpful information and how to get list of subcommands.

---

# 03. Getting Started

- We use `git init` inside a directory to initialize a project using this command in git.

- Git stores the files that it uses to do its work inside the `.git` directory of a project. .git contains other directories such as branches, hooks, info and other files. These are the files that Git uses to do all of its tracking. We won't be dealing with contents inside .git directory except for maybe the .config file. If you delete .git directory then git would be removed from the project.

- In order to track some changes we have to make some changes in our repository. Once you have added some files that you want to track. We can get git to track a change using `git add .`. This would tell git to add all the changes in the current directory. Git isn't actually tracking the changes yet, in order to make the changes permanent we need to commit those changes which we do by `git commit -m "Your commit message."`

![](https://i.imgur.com/99Lr6TA.png)

- This is the process we will be using when working with git. First make whatever changes you want, then add the changes, then commit the changes to the repository with a message. These 3 steps are going to be repeated over and over again.

- There are some best practices when it comes to writing a good commit message. A short single line summary (less than 50 characters). If you want to add more description have a blank line and a more complete description. Start with a single line summary even if you need to dive into some deeper details. That single one lined summary at the start is important. If you decide to use a longer description, still try to keep each line to less than 72 characters.

- Reasoning behind keeping message length to a minimum is that other users who are coming to this repository maybe using different devices to view it such as email, phone, slack chat room etc.

- Write commit messages in present tense, not past tense. Fix for a bug or Fixes a bug not fixed a bug. Bullet points are usually asterisks or hyphens. Can have tracking numbers from bugs or support requests. Can develop shorthand for your organization. e.g. `[css,js]`, `bugfix:`, `#38405` can be different labels for different cases the commit is for.

- Be clear and descriptive.

- To use the commit log, make sure you are inside git project and then type `git log`. This returns a log of all the commits that have been made to a particular git project, with newest entry at the top. Commit has an unique ID number for every commit used to identify the commit. There's author, time and date of commit. You can type `git help log` to find more on log command.

- If we type `git log -n 5` then it shows us the last n number of commits. `git log --since=2021-05-27` will show commits since 27th May 2021. Similarly we can do `git log --until=2021-05-27` to show all the commits until 27th May 2021. To see the commits by a particular author we can do `git log --author="partOfTheName"`

- One of the most useful one is the ability to search for commit message using grep with git log. Grep is global search for regular expressions. `git log --grep="Bugfix"` or `git log --grep="ghi#14563518"` will search for a certain github issue in log of commits.

- Another good example to pair up multiple flags could be, say you want to output log for the last 2 commits that happened before September 10, 2020 then you could do `git log --until=2020-09-10 -n 2` because the --until option defines the end date for logs to output and -n 2 limits to the two most recent. Or if you want to output the log for all commits by Tony labelled refactor during March 2019 you could do `git log --since=2019-03-01 --until=2019-03-31 --author="Tony" --grep="refactor"`. The --since and --until narrow the date, --author defines the commit's author, and --grep will search for all commits that include "refactor" in the description.

---
