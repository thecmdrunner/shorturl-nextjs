## Shorturl Nextjs

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/thegamerhat/shorturl-nextjs/)
[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/thegamerhat/shorturl-nextjs)

**Say Hello 👋🏻 to short and tidy links.**

Fork and deploy this project on Netlify/Vercel to host your short links!

This project uses NextJS API for redirecting from short slug/param links to raw project oneliners 🚀




### For example: `example.io/install` 

##### ❌ `https://raw.githubusercontent.com/username/project/branch/install.sh`

<!-- `example.io/quick-vm` -> `https://raw.githubusercontent.com/thegamerhat/quick-vm/main/oneliner.sh` -->

## How to run?

1. Clone the repository

```bash
git clone git@github.com:thegamerhat/shortlinks-nextjs.git
```

2. Run the development server locally

```bash
yarn dev
```

3. Throw a `GET` request at `http://localhost:3000/` using Postman, Thunder Client, Insomnia or even `curl`.

---

## Docs

### 1. Projects API route

Projects API route can be accessed at [`http://localhost:3000/api/projects/[project]`](http://localhost:3000/api/projects/[project]`). This endpoint can be edited in `pages/api/projects/[project].js`.

### 2. Redirect from-to Links

For achieving ease of use, convenience, and transparency, the links redirected **from-to** are situated in [`links.json`](/links.json). All the redirect logic is present and easily editable in [`pages/api/projects/[project].js`](pages/api/projects/[project].js)

### 3. Redirects

Requests sent to `/` will be redirected with any parameters such as `/param?abc=123` passed along with the redirect.

This behaviour can be changed in [`next.config.js`](/next.config.js)
