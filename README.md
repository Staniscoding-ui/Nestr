# Nestr

Nestr is an Activity Logger meant to game-ify your tasks, giving rewards to finished tasks with Creatures hatched from eggs.

**Live site:** https://github.com/Staniscoding-ui/Nestr/
**API:** **API:** http://localhost:3000/healthz
**Demo video:** (link)

![A screenshot of the main screen](docs/assets/screenshot.png)

## What it does

-Logs activities a user completes with a title, description and date.
-Hatch random pixel creatures whenever you finish said activity
-Hatched creatures go into your nest, where their collection may grow 
## Built with

* React
* Vite
* JavaScript
* Express
* PostgreSQL
* CSS

## How it works

Nestr uses a React frontend to provide the user interface and an Express API to handle activity data. PostgreSQL stores the activities, their completion status, and the creature assigned to each completed activity.

When a user creates an activity, it starts as an egg. Completing the activity changes its status to completed and assigns a random creature. The creature is then displayed in the user's nest.

## Running it locally

### Requirements

Before running Nestr, install:

* [Node.js](https://nodejs.org/)
* [PostgreSQL](https://www.postgresql.org/)

### 1. Clone the repository

```bash
git clone https://github.com/Staniscoding-ui/Nestr.git
cd Nestr
```

### 2. Set up the database

Create a PostgreSQL database named:

```text
nestr
```

Then go to the server folder:

```bash
cd server
```

Install the dependencies:

```bash
npm install
```

Copy the environment example:

**Windows:**

```powershell
copy .env.example .env
```

**macOS/Linux:**

```bash
cp .env.example .env
```

Open `.env` and replace `YOUR_PASSWORD` with the password for your local PostgreSQL installation.

Then run the database schema:

```bash
node --env-file=.env db/run.js db/schema.sql
```

Add the sample activities:

```bash
node --env-file=.env db/run.js db/seed.sql
```

### 3. Start the API

From the `server` folder:

```bash
node --env-file=.env server.js
```

The API will run at:

```text
http://localhost:3000
```

You can check that the API is running by opening:

```text
http://localhost:3000/healthz
```

The database connection can be checked at:

```text
http://localhost:3000/readyz
```

### 4. Start the client

Open another terminal and go to the client folder:

```bash
cd client
```

Install the dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

The client will normally be available at:

```text
http://localhost:5173
```

## Environment Variables

Environment files containing passwords are not committed to the repository.

### Server

| Variable       | Purpose                                    |
| -------------- | ------------------------------------------ |
| `DATABASE_URL` | PostgreSQL connection string               |
| `CORS_ORIGINS` | Frontend origins allowed to access the API |
| `NODE_ENV`     | Current environment                        |

The server uses `server/.env.example` as a template for the required variables.

### Client

The client connects to the local API at:

```text
http://localhost:3000
```

## Project Structure

```text
Nestr/
├── client/
│   ├── src/
│   │   ├── api/
│   │   ├── assets/
│   │   │   └── creatures/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── styles.css
│   └── package.json
│
├── server/
│   ├── db/
│   │   ├── pool.js
│   │   ├── run.js
│   │   ├── schema.sql
│   │   └── seed.sql
│   ├── activitiesRepo.js
│   ├── server.js
│   └── package.json
│
├── docs/
├── .gitignore
├── README.md
└── AI-USAGE.md
```

## Architecture

```text
React / Vite
     │
     │ HTTP requests
     ▼
Express API
     │
     │ SQL queries
     ▼
PostgreSQL
```

The React frontend communicates with the Express API using HTTP requests. The Express API validates requests and uses the repository layer to read and write activity data in PostgreSQL.

## Database

The database schema is stored in:

```text
server/db/schema.sql
```

Sample development data is stored in:

```text
server/db/seed.sql
```

A new PostgreSQL database can be created and initialized using these files, allowing the project to be set up on another computer without using the original data

## What I would do next

-More work with Front end
-focusing on learning how to use AI effectively
-More concrete Programming fundamentals
## Author

Predilla Stanley Emer M. CS-401

## AI use

AI assistance was used during the development of Nestr. OpenAI's ChatGPT (GPT-5.6 Luna) was used for programming guidance, debugging and PostgreSQL integration.
![Built with AI assistance](https://img.shields.io/badge/built%20with-AI%20assistance-0b5fff)

- a link to [AI-USAGE.md](AI-USAGE.md), where the full account lives

## Licence

MIT, see [LICENSE](LICENSE).
