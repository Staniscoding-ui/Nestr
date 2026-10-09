# AI usage
## 1. How I used AI

### 2026-10-3 - First Draft

- **Tool:**
I asked GPT-5.6 Luna
- **What I asked for:**
How to start the file
- **What it gave back:**
Mainly App.jsx
- **What I kept, what I changed, and why:**
At first, I changed nothing  and worked on it.
- **Commit:** https://github.com/Staniscoding-ui/Nestr/commit/f798db27c5a8c4698beb87fbeb89bdb2c977f7c0

### 2026-10-7 - Nestr Components

- **Tool:**
I asked GPT-5.6 Luna
- **What I asked for:**
What should the pages look like and if I should fix my components
- **What it gave back:**
It gave back the first draft of the 4 pages
- **What I kept, what I changed, and why:**
I will eventually change this into a proper page, as it was a placeholder
- **Commit:** https://github.com/Staniscoding-ui/Nestr/commit/6c57a990dfbdd73108d0237dd8b93777187cfd5f


### 2026-10-8 - Add activity

- **Tool:**
I asked GPT-5.6 Luna
- **What I asked for:**
Aid on the AddActivity page
- **What it gave back:**
It used the components I gave it to make a template of the Add activity page
- **What I kept, what I changed, and why:**
Had to retweak some of the input, as it did not show properly in the browser
- **Commit:** https://github.com/Staniscoding-ui/Nestr/commit/248af4f4e0724c170e45398df06d29367ac6b588

### 2026-10-8 - Fixing Nest Page

- **Tool:**
I asked GPT-5.6 Luna
- **What I asked for:**
Aid on the Nestpage because it wasn't showing the nest properly
- **What it gave back:**
a solution to why my file was failing 
- **What I kept, what I changed, and why:**
I didn't change much
- **Commit:** https://github.com/Staniscoding-ui/Nestr/commit/248af4f4e0724c170e45398df06d29367ac6b588

### 2026-10-8 - Pen Page

- **Tool:**
I asked GPT-5.6 Luna
- **What I asked for:**
Aid on the Pen page, after realizing Home and Pen shared the same function
- **What it gave back:**
a pen page that focused on showing off the monsters.
- **What I kept, what I changed, and why:**
The padding and pen size was wrong and won't fix itself in the styles css, so I decided to try and fix it without ai.
- **Commit:** https://github.com/Staniscoding-ui/Nestr/commit/3212a98f88c7733adf07157b385189896dc9a1b8

### 2026-10-8 - Backend Implementation

- **Tool:**
I asked GPT-5.6 Luna
- **What I asked for:**
Backend refresher and fixes to some errors
- **What it gave back:**
It guided me through the errors by clarifying the proper steps
- **What I kept, what I changed, and why:**
I didn't change much
- **Commit:** https://github.com/Staniscoding-ui/Nestr/commit/823f7ddaaf4fb4af29b70e1b4328ada509b88dbe


## 2. Where the AI got it wrong
### Case 1 - nest growing 

- **What it gave me:**
It gave me a growing exp system in the nest page
- **What was wrong with it:**
There was no exp system
- **What I did instead:**
removed it and added features like normal
- **Commit:** https://github.com/Staniscoding-ui/Nestr/commit/248af4f4e0724c170e45398df06d29367ac6b588

### Case 2 - adding activities

- **What it gave me:**
It gave me a confusing exp system
- **What was wrong with it:**
There was no exp system in adding activities
- **What I did instead:**
Redid the prompt
- **Commit:** https://github.com/Staniscoding-ui/Nestr/commit/248af4f4e0724c170e45398df06d29367ac6b588

### Case 3 - pen page

- **What it gave me:**
Code to make the pen bigger
- **What was wrong with it:**
It overlapped with other parts of the code
- **What I did instead:**
Looked into what it was trying to do and added it to the code that already worked.
- **Commit:** https://github.com/Staniscoding-ui/Nestr/commit/3212a98f88c7733adf07157b385189896dc9a1b8


## 3. Who wrote what

At least a fifth of this project is code you wrote yourself. Name it, and explain
it in your own words.

> Group projects: give each member their own heading below, and use your GitHub
> handle as the heading. You are graded on your own section.

### Written by me

- **File:**
ActivityCard.jsx
- **Commit:**
https://github.com/Staniscoding-ui/Nestr/commit/6c57a990dfbdd73108d0237dd8b93777187cfd5f#diff-98ee3c9459c91207a7369c0324d5940d427330935d836b6ed2ca27a717419788
- **What it does and why it is built this way:**
It was built this way because it's a basic Activity card with a set of rules I could come back to.

- **File:**
BottomnNav.jsx
- **Commit:**
https://github.com/Staniscoding-ui/Nestr/commit/6c57a990dfbdd73108d0237dd8b93777187cfd5f#diff-98ee3c9459c91207a7369c0324d5940d427330935d836b6ed2ca27a717419788
- **What it does and why it is built this way:**
This was a draft of the BottomNav that was inspired from an old project to be able to save time and do the work I've already done before.

- **File:**
Components
- **Commit:**
https://github.com/Staniscoding-ui/Nestr/commit/6c57a990dfbdd73108d0237dd8b93777187cfd5f#diff-98ee3c9459c91207a7369c0324d5940d427330935d836b6ed2ca27a717419788
- **What it does and why it is built this way:**
A majority of these files were barebone placeholders I made at the time that helped me clarify in styles.css


### The AI-written part I understand best

- **File:**
App.jsx
- **Commit:**
https://github.com/Staniscoding-ui/Nestr/commit/3212a98f88c7733adf07157b385189896dc9a1b8
- **What it does and why we kept it:**
A lot of removal and addition of different redundant and new parts of the code, that I reviewed to see what it was doing to the application.