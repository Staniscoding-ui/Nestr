# Security and privacy checklist

## Before the first push

- [ Yes ] `.gitignore` includes `.env`, and `git check-ignore -v .env` confirms it
- [ Yes ] `git ls-files | grep -iE '\.env$|\.pem$|id_rsa'` prints nothing
- [ Yes ] `.env.example` is committed, with **placeholder** values only
- [ Yes ] No connection string, key or password anywhere in the repository,
      including in a screenshot
- [ Yes ] No `student.json`, and no name, student number or email of yours or anyone
      else's

## The application

- [ Yes ] Every SQL query is parameterised. Values go in the array, never into the
      string. This is one line of defence you already know how to do
- [ Yes ] Input is validated **on the server**, not only in React. Length limits on
      every text field
- [ Yes ] `cors({ origin: allowedOrigins })` names your origins. Not `cors()` with no
      options, which allows every site on the internet
- [ Yes ] `NODE_ENV=production` on the host, and no stack trace in any response body
- [ Yes ] `helmet` installed, which is one line for several real protections
- [ Yes ] Anything that costs money or accepts a password is rate limited
- [ Yes ] Passwords, if you have accounts, are hashed with bcrypt and never logged
- [ Yes ] Every route that touches somebody's data has the ownership check **in the
      query**, as `AND user_id = $2`, not as an `if` above it
- [ Yes ] `npm audit` run once, and the easy fixes taken

```bash
npm install helmet
```

```js
import helmet from 'helmet'
app.use(helmet())
```

## Privacy

The half that matters more, because it is about other people.

- [ Yes ] **No real classmates' names, numbers, emails or photos**, anywhere. Not in
      seed data, not in screenshots, not in the demo video. Consent for a course
      project does not cover the next ten years of a public repository
- [ Yes ] Seed data is invented. Yours will be read
- [ Yes ] If real people tested your app, even three friends, their data is deleted
      before you submit
- [ Yes ] If your app collects anything about anyone, the app says what it collects
- [ Yes ] Any face in a screenshot is stock, generated, or yours

If your project handles personal information about real people, you are inside
the Philippine Data Privacy Act. Collect the minimum, say what you collect, and
do not collect anything you cannot justify.

## Asset Sources and Licensing

The following external assets are used in Nestr:

* **Pixel-art monster icons:** [CraftPix — Free Low Level Monsters Pixel Icons 32×32](https://craftpix.net/freebies/free-low-level-monsters-pixel-icons-32x32/)
* **Pixel-art eggs:** [Frostwindz — Fantasy Pixel Art Eggs](https://frostwindz.itch.io/fantasy-pixel-art-eggs)

The assets are subject to their respective licensing terms. The original source pages are retained for reference, and the assets are not redistributed or resold as standalone asset packs.


## What to write in your journal

The Riskiest thing about this project is the Authors name and email, which is already willingly put out in the readme.
