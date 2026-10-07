# 1. App Proposal

Nestr is a program made in React that acts as a Task logger, making sure you are focused on current tasks by game-ifying their completion with rewards. It starts off by asking for a task from you, and giving you an egg. This egg will start to hatch when you start the task, and reveal what's inside once it's complete. Depending on the intensity and how long it's been put back, it changes the property of the egg and its hatchling. All hatchlings and eggs can be showed in Animal pens, which can be customized.

### App name
Nestr

### What the app is for, in one sentence
A Task logger app that lets you collect hatchlings and grow your farm based on tasks finished in each day, giving incentives to finish tasks faster.

### Who is it for
This app is mainly for myself, and some close friends[cite: 4]. Giving my fellow slackers incentive to try to finish tasks earlier.

---

## Sections or routes this app needs

List every top-level screen. A single-page app (like the portfolio) has sections on one route; a multi-screen app uses routes (React Router). Aim for 3 to 5 either way. For each, one sentence on what it is for. If you go over 5, cut one.

| # | Section / route | What it is for |
|---|---|---|
| 1 | Home Page | Where the Current Egg is found. This acts as the hub for the rest of the routes. |
| 2 | Egg Task Page | Where the Task is being made with parameters of when it will expire and estimate reward. |
| 3 | Pen Page | Where the Hatchlings are stored and shown off. |
| 4 | Nest Page | Where the Eggs that have been established are stored. |

---

## State: what data does the app hold?

| Data | Shape (rough) | Who owns it (which component) | Changes when... |
|---|---|---|---|
| current Task | `{ id, description, expiresAt, estimatedReward }` | App | user creates, completes, or cancels a task|
| currentEgg | `{ id, taskId, hatchTime, reward }` | App | user starts or completes a task|
| eggs | `[ { id, taskId, hatchTime, reward } ]` | App | user creates, hatches, or removes an egg |
| hatchlings | `[ { id, name, type, reward } ]` | App | an egg finishes hatching, or a hatchling is removed |
| penSettings | `{ name, capacity, customization }` | Pen | user customizes the Animal Pen |

---

## What each screen contains

### Screen: Home Page
* **Block 1:** Current Egg display
* **Block 2:** Hatching progress
* **Block 3:** Current Task information
* **Block 4:** Navigation buttons

### Screen: Egg Task Page
* **Block 1:** Task input
* **Block 2:** Task expiration time
* **Block 3:** Estimated egg reward
* **Block 4:** Start Task button

### Screen: Pen Page
* **Block 1:** Hatchling list
* **Block 2:** Hatchling information
* **Block 3:** Animal Pen customization

### Screen: Nest Page
* **Block 1:** Established egg list
* **Block 2:** Egg hatching timers
* **Block 3:** Egg information and rewards

---

## Content you need to gather

* Task descriptions and example tasks for the Task Logger
* Egg names, types, rewards, and hatching times
* Hatchling names and design
* Images or icons for eggs and hatchlings
* Animal Pen customization assets
* App logo and basic UI icons

---

## One risk

This application was generally a challenge for myself to be able to do basic UI/UX work to broaden my skills. I'm not confident with how I could make the egg and widgets look as if they were hatching without cutting shortcuts.