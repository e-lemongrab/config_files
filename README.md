# Settings configurations


## General
### Pull requests
 - Always suggest updating pull request branches
 - Automatically delete head branches 

### Rulesets
#### Bypass list
 - Repository adminRole
#### Branch rules
 - name: Protect-master
 - bypass: Repository adminRole
 - Target branches: default (master)
 - Restrict deletions
 - Require a pull request before merging - required approvals - Require review from Code Owners
 - Block force pushes

