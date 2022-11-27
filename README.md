## Getting Started

API for redirecting from short domain links to raw project oneliners, powered by NextJS 🚀

For example:

### `example.io/install` 👉🏻 `https://raw.githubusercontent.com/username/project/branch/install`

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

### 2. Redirects

Requests sent to `/` will be redirected with any parameters such as `/param?abc=123` passed along with the redirect.
