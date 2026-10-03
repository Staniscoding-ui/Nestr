# 1. App Proposal

Nestr is a program made in React that acts as a Task logger, making sure you are focused on current tasks by game-ifying their completion with rewards[cite: 4]. It starts off by asking for a task from you, and giving you an egg[cite: 4]. This egg will start to hatch when you start the task, and reveal what's inside once it's complete[cite: 4]. Depending on the intensity and how long it's been put back, it changes the property of the egg and its hatchling[cite: 4]. All hatchlings and eggs can be showed in Animal pens, which can be customized[cite: 4].

### App name
Nestr[cite: 4]

### What the app is for, in one sentence
A Task logger app that lets you collect hatchlings and grow your farm based on tasks finished in each day, giving incentives to finish tasks faster[cite: 4].

### Who is it for
This app is mainly for myself, and some close friends[cite: 4]. Giving my fellow slackers incentive to try to finish tasks earlier[cite: 4].

---

## Sections or routes this app needs

List every top-level screen. A single-page app (like the portfolio) has sections on one route; a multi-screen app uses routes (React Router). Aim for 3 to 5 either way. For each, one sentence on what it is for. If you go over 5, cut one[cite: 5].

| # | Section / route | What it is for |
|---|---|---|
| 1 | Home Page | Where the Current Egg is found. This acts as the hub for the rest of the routes[cite: 5]. |
| 2 | Egg Task Page | Where the Task is being made with parameters of when it will expire and estimate reward[cite: 5]. |
| 3 | Pen Page | Where the Hatchlings are stored and shown off[cite: 5]. |
| 4 | Nest Page | Where the Eggs that have been established are stored[cite: 5]. |

---

## State: what data does the app hold?

| Data | Shape (rough) | Who owns it (which component) | Changes when... |
|---|---|---|---|
| current Task | `{ id, description, expiresAt, estimatedReward }` | App | user creates, completes, or cancels a task[cite: 5] |
| currentEgg | `{ id, taskId, hatchTime, reward }` | App | user starts or completes a task[cite: 5] |
| eggs | `[ { id, taskId, hatchTime, reward } ]` | App | user creates, hatches, or removes an egg[cite: 6] |
| hatchlings | `[ { id, name, type, reward } ]` | App | an egg finishes hatching, or a hatchling is removed[cite: 6] |
| penSettings | `{ name, capacity, customization }` | Pen | user customizes the Animal Pen[cite: 6] |

---

## What each screen contains

### Screen: Home Page
* **Block 1:** Current Egg display[cite: 6]
* **Block 2:** Hatching progress[cite: 6]
* **Block 3:** Current Task information[cite: 6]
* **Block 4:** Navigation buttons[cite: 6]

### Screen: Egg Task Page
* **Block 1:** Task input[cite: 6]
* **Block 2:** Task expiration time[cite: 6]
* **Block 3:** Estimated egg reward[cite: 6]
* **Block 4:** Start Task button[cite: 6]

### Screen: Pen Page
* **Block 1:** Hatchling list[cite: 6]
* **Block 2:** Hatchling information[cite: 6]
* **Block 3:** Animal Pen customization[cite: 6]

### Screen: Nest Page
* **Block 1:** Established egg list[cite: 7]
* **Block 2:** Egg hatching timers[cite: 7]
* **Block 3:** Egg information and rewards[cite: 7]

---

## Content you need to gather

* Task descriptions and example tasks for the Task Logger[cite: 7]
* Egg names, types, rewards, and hatching times[cite: 7]
* Hatchling names and design[cite: 7]
* Images or icons for eggs and hatchlings[cite: 7]
* Animal Pen customization assets[cite: 7]
* App logo and basic UI icons[cite: 7]

---

## One risk

This application was generally a challenge for myself to be able to do basic UI/UX work to broaden my skills[cite: 7]. I'm not confident with how I could make the egg and widgets look as if they were hatching without cutting shortcuts[cite: 7].