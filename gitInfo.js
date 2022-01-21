/*
    For this section of the assessment you will be putting together a cheat sheet for common git commands.  
    You'll provide the command as well as what it does. 
*/

//////////////////PROBLEM 1////////////////////
/*
    Create a variable called 'gitDefinition'.
    It should be a string containing your best definition of what Git is.
*/

const gitDefinition = "Git is version control. It stores a copy of all the versions of your code."
//console.log(gitDefinition)

//////////////////PROBLEM 2////////////////////
/*
    Create a variable called 'gitHubDefinition'.  
    It should be a string containing your best definition of what GitHub is.
*/

const gitHubDefinition = "GitHub is a platform to store your different versions of code and collaborate with others on coding projects."
//console.log(gitHubDefinition)

//////////////////PROBLEM 3////////////////////
/*
    Create a variable called 'gitInitDefinition'.  
    It should be a string containing your best definition of what 'git init' does.
*/

const gitInitDefinition = "Git init initializes a local repository in the folder you currently have open."

//////////////////PROBLEM 4////////////////////
/*
    Create a variable called 'gitCloneDefinition'.  
    It should be a string containing your best definition of what 'git clone' does.
*/

const gitCloneDefinition = "Git clone is used to point to an existing repository and make a copy of that repository in a new location or directory."

//////////////////PROBLEM 5////////////////////
/*
    Create a variable called 'gitStatusDefinition'.  
    It should be a string containing your best definition of what 'git status' does.
*/

const gitStatusDefinition = "The git status command gives you information about your current repository, like whether or not there are new changes to be committed."

//////////////////PROBLEM 6////////////////////
/*
    Create a variable called 'gitAddDefinition'.  
    It should be a string containing your best definition of what 'git add' does.

    Create another variable called 'gitAddCode'.  
    It should be a string containing the code to add all files.
*/

const gitAddDefinition = "The git add command adds a change to your repo and tells Git you want to add that change in the next commit."

const gitAddCode = "git add -a"

//////////////////PROBLEM 7////////////////////
/*
    Create a variable called 'gitCommitDefinition'.  
    It should be a string containing your best definition of what 'git commit' does.

    Create a variable called 'gitCommitCode'.  
    It should be a string containing the code to commit using the message "initial commit".
*/

const gitCommitDefinition = "The git commit command creates a snapshot of the files I'm tracking. This should be done frequently throughout a coding project in order to save your progress."

const gitCommitCode = "git commit -m 'initial commit'"


//////////////////PROBLEM 8////////////////////
/*
    Create a variable called 'gitPushDefinition'.  
    It should be a string containing your best definition of what 'git push' does.
*/

const gitPushDefinition = "The git push command pushes your local repo into a remote repo, like GitHub."