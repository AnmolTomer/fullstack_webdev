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

# 04. Git Concepts and Architecture

- Two tree architecture is used by other VCS. You have a repository and a working copy. There are the two trees and we call them such because they represent a file structure. At the top is the main project directory and more directories below that. The repository also has files in it, also arranged as tree.

- **Git's three tree architecture**: In this architecture there is a repository and a working copy but in between is another tree called staging index. We use add command to move files to staging area and then we performed the commit. It is a 2 step process involving three trees. However, it is possible to directly commit to the repository and skip adding the files to staging index. This is part of architecture of Git.

- It is a nice feature because we can make changes to ten different files in our working copy and then selectively commit five of the changes as one set. That's why it is call stagins, we have the chance to add the changes that we want to the staging area and get them ready for commit. We can checkout from the repository in the same way. It is possible to pull them from the repository into the staging index and then from the staging index to the working directory, but usually that's not how we do.

- Git labels and refers to its commits using hash values. We have seen git workflow of working repo to staging area and then to commit. Git generates a checksum for each change set, that's the hash value. A checksum is a number that is generated by taking data and feeding it into an algorithm. Checksum converts data into a number. Same data, put into same mathematical algorithm, always returns the same result or the same checksum. It's used to guarantee data integrity. Data integrity is fundamentally built into git because of checksum, and isn't there for all VCS.

- Each hash value is not tied to the contents that are inside. Algorithm the Git uses is the SHA-1 hash algorithm. When someone says SHA value of commit, they mean the hash value that's used. Hash is a 40 character hexadecimal string. Git takes the entire change set, and it runs them through this SHA-1 algorithm and comes up with this 40-char long string, and that's what it uses to label the commit.

- Git maintains a reference variable called HEAD. We call this variable a pointer because its purpose is to reference, or point to, a specific commit in the repository. Pointer to tip of current branch in repository. Last state of repository, what was last checked out. Points to parent of next commit where writing commit takes place.

<!-- TODO: Section 4 properly -->

# 05. Make Changes to files

- Untracked files means, the files that have not been added to git repository before and are new files. Git doesn't know anything about these files, if we were to make any changes to these files now, those changes would not be tracked.

- When you edit an file and after that if you check using git status, then on a file that was previously committed git notices the changes made and displays the message that changes not staged for commit. This means git recognizes that file as a tracked file, and after modification git recognizes that the version of the file that's in our working tree is not the same as what's there in staging or in the repository. Process to add a file that's been edited is same as a new file, you do git add, followed by git commit and you're done adding an edited file to the repository.

- Before we make a decision whether we want to commit the changes to the repository or not we can comapre the changes using diff. If you do `git status` it tells you there is a change to which of your files. To see what exactly the change was, we can do `git diff` and this is especially helpful when you are working on a big project and you want to keep track of your changes, this is what the changes looks like:

![](https://i.imgur.com/pd8d8LJ.png)

- `git diff` by default compares the working directory against the staging tree. To view only changes that are in staging area, which there are we will do `git diff --staged` and this will show us only the changes that are there in the staging area. Stage is an alias for cached. `git diff --cached` will show the same results as would --staged flag when passed to git diff. For more info check [this](https://stackoverflow.com/a/47684920/9719106) answer.

- `git diff` compares the changes to working directory files to the staging index, while `git diff --staged` compares staged files to the repository versions.

![](https://i.imgur.com/6paRDqV.png)

- We have seen how to add and edit files, now to use git to track files when they are deleted. There are 2 techniques when it comes to delete files. First, is deleting the file on your own. You can then commit the change to the repository by telling git to add this change. If you deleted a file and you want to tell git to stage this change then you would do `git rm name_of_file_deleted.txt`. This will place the file we deleted change to staging area. Then we can just commit that change, and working tree is clean.

- Another method is to tell git to remove a file using `git rm file_to_delete.txt`, this removal is done using unix remove command, so it has been permanently removed. It still exists in the repository, so if we needed a copy of it, we could get a copy from there, but the remove that it performed is a little different than sending file to recycle bin. Deleting like this will add the file to the staging area automatically, making this a little bit more convenient. Telling git to remove the file means git will trash the file using unix rm command and then add it to staging area as well. All we have to do is git commit with message on deleted file.

- There are 2 techniques for moving and renaming files in git. First is making changes directly using file explorer of your OS, and then doing git add, git commit. Here the git status says that `file_old_name.ext` has been deleted and `file_new_name.ext` is untracked, essentially taking it as a new file that was created while old file was deleted. If between two files there is a 50% or more similarity then when we move the deleted and newly added file to staging area, git recognizes it and labels it as `renamed` file. Second method is done using CLI, it just relies on the fact that moving a file and renaming a file are essentially the same thing. `git mv existing_name_of_file.ext new_file_name.ext` this will rename the file using move command. Now if you check git status, it will directly add the file to staging directory without the need to use add command and adds `renamed` label to it.

> Which of these methods is best to deal with a file called this_file.txt that should not be deleted but should no longer be referenced when git status is used?

- Move this_file.txt from the project directory and use git rm this_file.txt to remove the file. Though it's possible to instruct Git to ignore a file in the project directory, moving a file from the directory will result in a prompt from git status to remove the file with git rm, and executing this instruction means the file will no longer be tracked or noticed by Git.

> How is staging an edited file different from staging a new file?

- Both require `git add` to stage them. git add will stage any file, regardless of the kind of change it has created in the repository.

> If the output of `git status` reveals that file file1.php is untracked, what is true about the file?

- There will be no record of further changes made on file1.php. Until the file has been staged with git add, changes will not be recorded by Git.

> If a user must use `git reset HEAD tabs.js` to unstage tabs.js, which command likely created the need to reset the HEAD?

- `git add .` If the file tabs.js must be unstaged, it was staged with either git add tabs.js or git add .. This might become necessary in situations where the user does not wish to add a file to the repository or even does not want the current changes in that file to be part of the next commit.

> The output of git status is the following text, the last line in green: Changes to be committed: Which action did not create this result?

```
(use "git reset HEAD <file>..." to unstage)

deleted: file1.php
```

- file1.php was deleted with an operating system tool rather than git rm file1.php Green text denoting a file deletion means this deletion has already been staged for the next commit. If a file is deleted without using git rm, the deletion notice from git status will be red.

> How does committing an edited file affect the Git architecture's trees?

- The commit moves the file from the staging index to the repository. Just like adding a new file to the repository, committing the file moves it from the staging index to the repository.

> What is the most efficient way to rename a file in a repository?

- Use `git mv` with the file name. git mv is the most efficient way to both move a file to a new location and rename the file.

> In which situation should you use `git diff`?

- to observe specific changes from the original version of a file. git diff displays only the lines that have changed between two versions of a file.

---

# 06. Working on a real project

- `git diff --color-words`: This will show only the words that are different instead of showing + and - for entire lines.

- There's a shortcut that allows us to stage and commit those changes. Normally, we add to staging area and once we are happy with staged changes we commit them to the repository. If we are already sure that we want to commit all the changes then we can skip adding to staging area step. This is what this shortcut does, and we can use this by doing `git commit -a file.txt` -a is same as `git commit --all file.txt`. This tells git to commit all the files. It stages and commits all changes to tracked files. `git commit --all` might include extra changes that you have forgotten that you have made, and this doesn't includes untracked files. If there is a new file you have added, you'd have to add and commit it separately.

- After you do `git commit -am "Your commit message"` this will add files directly to the repository. On doing git status, now we would see `nothing to commit, working tree clean`.

- We have made some changes in git by now, git is able to track our changes. When we want to go back and review our changes at a later date, that's when we would want to view a previous commit. To do so we will use `git show <commit_ID>`. you can get commit id from `git log`. This will give a diff of all the changes that we made. In paginator press f to go forward, b to go backward and q to quit. `git show <commit_ID> --color-words` to show us the changes on the words that were changed.

- `Compare Commits`: `git diff <old_commit_id>..<new_commit_id>`. This will create a diff file comparing two different versions and show what changed between those. We can also use --color-words to see the changes specifically. This allows us to compare 2 commits.

- Multiline commit message: This can be done by typing `git commit -a` this will open your text editor and open up `COMMIT_EDITMSG`, and we can add multiple lines of message. If we do `git log --oneline` this gives first line of commit message. If you do commit without -m then git will open your default text editor for multiline commit message.

- An atomic commit is a small commit, which affects only a single aspect. To have commits grouped together by topic. As small as possible and related to one particular bug, upgrade, or fix. This makes our commits easier to understand, to work with and to find bugs. This prevents a commit from becoming a huge mishmash of 80 new files added to fix 30 issues in one go which is hard to test and rectify. It improves collaboration and easier to track changes.

- You can do atomic commits by adding files that fix one specific issue at one time and then moving them to staging area and finishing the commit. Once you have added the changes of issue a to the repo then you can move the other files that fix the issue b specifically to staging area and commit them. This is a good practice.

---

# 07. Undo Changes

- There are different techniques to undo changes in git. These can be changes to working directory, staging area, or even changes committed to the repository. To undo changes in the working directory. Say you have made changes, saved the file and exited your text editor. But changes weren't sent to staging area and git was tracking the file so it knows what the file looked like. So when we do git status we can see what all files were changed and we can check what was changed using `git diff`.

- Once you check what was changed using `git diff`. After that we can do `git checkout -- <file_name>` will discard changes to a file or `git checkout -- .` to discard changes to all files.. `git checkout` is a flexible command and we can use it for a lot of different things, especially when working with branches. `--` double dash in checkout is used to tell git that we don't want want to checkout a different branch, we want to checkout a file on the current branch. This will discard whatever changes we hade in file_name and places what is in repo that we committed. It restores back the version of a file that repository has.

- **Unstage files**: We can undo changes that we have made to our staging area. It means that things we have staged, we would like to unstage them. To unstage a file we go `git reset HEAD <filename.ext>`

- **Amend Commits**: Say you edited `fileA.ext` on line 26 and 38, you finished the commit and changes are in repository. Then you realize that you had to add more changes on line 22 and 44 of `fileA.txt` instead of making a new commit, you can do your changes and amend (add) to the previous commit by doing `git commit --amend -m "Commit that amends."` and this will amend new changes of line 22 and 44 to previous commit though hash of commit will change due to addition of new data. You can verify this using `git status` and `git show SHA`. You can use `git amend` to just do commit message change. Basically, amend says take whatever was in the old commit, bring it back down to staging area, add whatever staging has into it, and then let's recommit that. It's taking what was in last commit, bringing it down, adding new stuff to it and together we commit old and new changes and generating a new SHA in process.

- **Retrieve old versions**: We saw git only allows amending most recent commit, as git tries to maintain the data integrity along the chain of commits and if it were easy for us to start editing the history of commits, then we wouldn't have that data integrity. We wouldn't be able to trust that nothing had been changed. Instead, if we want to undo some changes that we have made the right way to do it in Git is to make those edits into new commits, so it accurately reflects what happened.

- At times we want to see what a file looked like several commits before, so that we can go back to it and make changes that will make the existing code closer to that version. We use `git log` to see what version we want to go back to, once we hash, we use the `git show SHA` to see our changes. We create a new commit that is based off of old commit in some way, so we pull up the old file, and then we can make changes from there on. We grab the sha of the commit we want to go to and we do this using `git checkout SHA_COMMIT_ID -- file.ext`, this will bring file.ext from the commit of given sha id on current branch. It will be placed on staging area and can be seen using `git diff --staged`, now you can make changes, add them to staging area and commit as needed.

- **Revert a commit**: We have seen how to undo changes after we have made commits to our repository. Here we see how to revert a commit. Reverting commit essentially means to just undo it, to do the opposite, that is going backwards. When we want to revert a commit, we don't want to go in and make the edits to the commit, as it's now part of the chain of commits, and git doesn't wants us to make changes once things are in the history and part of that chain, unless it's the very last commit on the chain.

- We will make a new commit and then simply reverse it. There's an easy way to revert. We can do so using `git revert SHA_ID`, this will open in our editor we can write message about what's been changed and this will undo the changes done in a specific commit and commit it where we undo changes. This is a good demonstration of why atomic commits are important and can help you when you are trying to revert back to fix issues.

- **Remove Untracked Files**: To remove untracked files from our repository such as log files, compiled code executables, node modules etc. We could remove these files manually one by one, but git also allows us to remove those files all at once. We can do `git clean -n` first to dry run and list out what files would be deleted and then we can do `git clean -f` will remove the untracked files that were showed in dry run.

> What is the difference between `git reset HEAD header.c` and `git checkout -- header.c`?

- `git reset` changes the staging index and `git checkout` changes the working directory. git reset HEAD unstages files, or removes the changes from the staging index, while git checkout pulls the last commit's version of a file from the repository and replaces the working directory version with it.

> Which command will replace the staging directory version "footer.css" with the repository version?

- `git reset HEAD footer.css` Since the HEAD points to the repository's current version of files, Git will reset the footer.css in the staging index with the repository version of footer.css.

> What is the output for the final command if file1.c is staged and file2.c is untracked? `git clean -f` `git reset HEAD -- file1.c` `git clean -n`

- Output would be: Would remove file1.c. The git clean -n would result in output.

> What is the result of the following commands if file1.c, file2.c, and file3.c are untracked? `git add file2.c` `git clean -f`

- file2.c will be staged for commit and the other two files will be removed. git clean -f will force clean file1.c and file3.c. The staged file2.c will remain in the working directory.

> You have found a commit message three generations back, with SHA fdda5e3d8, is poorly written. Which use of `git commit --amend` will allow you to edit the commit message for that commit?

- `git commit --amend` cannot be used in this situation. git commit --amend can only be used to edit the current HEAD. In this case, you would need to use git rebase -i HEAD~n to access all commits between HEAD and the nth commit prior to HEAD.

> You have made significant changes to your working directory, editing file1.c, file2.c, and file3.c. You also made changes to the inc/ directory and staged those changes for commit. Now you want to roll everything back and undo all changes. Which should you use?

- `git reset HEAD inc/` followed by `git checkout -- file1.c file2.c file3.c inc/` This use of git checkout will not result in the needed changes.

> Assuming the SHA of HEAD's parent commit is 9812aa1b, what is the result of `git revert 9812aa1b`?

- The repository will lose the changes from commit 9812aa1b. The changes made in HEAD's parent commit will be removed, and the changes made in the HEAD commit will be played over the new version to create a new commit.

> Which command will allow a user to preview a list of only untracked files to be deleted?

- `git clean -n` git clean specifically removes untracked files, and using the "-n" option allows the user to preview which files would be affected.

> Which use of `git commit --amend` is not allowed?

- changing the contents of HEAD's parent commit. The --amend option isn't allowed for older commits because the entire commit will change, which threatens the integrity of the data and ancestry.

> A client has decided they want to revert one page of their website generated by about.php to a version they had in the commit with SHA 53daff9b. Which process should you use?

- `git checkout 53daff9b -- about.php` and then `git commit -am "Reverts about.php to version live in January 2019"` git checkout will pull the version of about.php from the needed commit, and that version will be included in the new commit.

---

# 08. Ignore Files

- Git does a good job of noticing when new files are added to the working directory or when files that are in the repo are changed in our working directory. What if we want some files to not track and ignore files with specific extensions altogether. To tell git to ignore a folder, file we can add the path to that file in .gitignore file.

- Adding a file in `.gitignore` is a file where you tell git which files to ignore. Changes made to ignored files will be ignored by Git. Pattern matching (basic reg-ex) is allowed in .gitignore file. We can write file names, simple patterns such as _, ? and other similar regular expressions. E.g. if we want to ignore all txt files in logs directory we could add `logs/_.txt`in .gitignore file. We could use negative expressions, e.g. ignore all files that end in .php by adding`\*.php`but to include a specific php file we can do`!index.php`which means do not ignore index.php but ignore all other php extension files. If we want to ignore all files in the directory then we can just use a trailing slash after the name, e.g.`assets/videos/`would ignore all files that are inside videos directory.`#` can be used to add comments in .gitignore file.

- What to ignore in a project depends on you, what language, framework you are working with, GitHub provides templates for .gitignore based on what language you are working with, that's a good place to check, and this option is given as initialize .gitignore when you create a new git repo. Compiled source code, packages and compressed files, logs and databased, node modules, os generated files, user uploaded assets, images, pdfs you won't want to upload.

- If you go to [this](https://www.github.com/github/gitignore) link you can see github provided gitignore templates. There are gitignore files based on what language you are using.

- **Globally ignore files**: If we want to ignore files globally in all our repositories, for this we need .gitignore file that works globally. This way .gitignore file becomes user specific instead of being repo specific. `git config --global core.excludesfile ~/.gitignore_global`

- When we create a gitignore file, git ignores all the untracked files that matched a rule in the `.gitignore` file. However, git only applied those rules to untracked files, files that are already being tracked are not ignored. Say we have a file `db_config.txt` that has our database configuration and that has already been committed and is being tracked. Now we go to .gitignore file and tell it to ignore db_config.txt file. Now when we do changes to db_config.txt, .gitignore won't ignore the file, this is the problem we are trying to solve. So how to tell git to not track `db_config` file anymore ?

- To tell git to start ignoring a file either we can remove the file, another method is to remove db_config from staging index and we can do this using `git rm --cached db_config.txt` you can't use stage the synonym of cached. Once you do `git rm --cached` on a file it will remove it from the repo but file will stay in your project and untracked if added to .gitignore file.

- We can track empty directories in Git. Git be default is a file tracking system and tracks directories with files, individual files but ignores the directories with no files. It is useful when you want an empty directory to be included when user checks out the repo or clones it, maybe its a directory where users can place their images to be uploaded or some extra scripts. Most common way to do it is add a `.gitkeep` file into the directory. Now git will recognize this directory and directory will be tracked.

- `touch temp/.gitkeep` in UNIX based systems creates this file and then empty directory will be tracked.

> What steps can a user take to remove a personal file from the repository while keeping a local copy that won't be tracked by Git?

- `git rm --cached personal.txt` add personal.txt to .gitignore `git commit -a` Using the "--cached" option with git rm will remove the file from the index without affecting the local copy. When the file name is then added to .gitignore and all changes committed to the repository, the local copy will remain but will no longer be seen by Git.

> Why might packaging and distribution files and directories be included in a .gitignore template?

- The files are not edited as source code is. .gitignore should include any files that do not need to be tracked by Git, including those that will not be edited by developers but that might change.

> Using `git status` reveals Git does not see the directory "css". What steps can you take to troubleshoot?

- Ensure css/ does not appear in the .gitignore file, and ensure there is a file of any type in the directory. There is a third location to check, as well -- the file at .git/info/exclude in the repository.

> Which of these should not generally be included in the .gitignore file?

- directories containing project code. Any user-specific or system-specific files should be included in the .gitignore file.

> What is the conventional file name to ensure an otherwise empty directory is included in the repository?

- .gitkeep Using .gitkeep for the filename is the convention, though any file name is acceptable.

> Why might a user choose not to include a .gitignore file in the repository?

- The files to be ignored are user- or system-specific. Files specific to a user's development environment, account, or computer system are neither needed in a repository nor are they advisable additions to a repository for the sake of security, particularly if the repository is shared and not used only locally.

> After adding a file to your .gitignore, you type git status and see the file listed as untracked. Why is the .gitignore inclusion not successful?

- The file was tracked before inclusion in .gitignore. Running `git rm --cached <filename>` will remove the file from tracking, and Git will begin to ignore it.

> Which types of files should always be globally ignored?

- no file types should always be ignored. Build files might be ideal to ignore, but they do not always need to be global ignores.

> Which kind of file might be included in the file generated by this command: `git config --global core.excludesfile ./.gitignore_user`

- log files created by multiple projects in separate repositories. Log files are created during run-time, so they are not ideal files to track in version control.
