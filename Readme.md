# WebGi Jewelry Landing Page
A template for buildind scrollable landing pages with Gsap, ScrollTrigger and webgi engine in typescript using parcel bundler.

In <a href="https://www.youtube.com/watch?v=pN3bxj3Iep8" target="_blank">this video</a>, you can watch the design process of this page, using WEBGi. Using the scroll to tell stories is something very pleasant and simple to do with tools like WEBGI. It uses a <strong>modified version of Threejs</strong> to allow advanced effects rendering with good performance and ease of use.

All the code responsible for rendering is only 20 lines long. The rest of the code handles the interface, with the Scroll-based animations using the GSAP ScrollTrigger, which is quite powerful for building experiences like this.

<strong>by Anderson Mancini</strong>

<hr>

## Getting started
First install the dependencies:
```bash
npm install
```

The project uses Parcel 2 and requires Node.js 18 or newer. The `assets` directory contains the
3D models and media used by the viewer and must be included in deployments.

To run the project in development mode:
```bash
npm start
```
Then navigate to [http://localhost:1234/index.html](http://localhost:1234/index.html) in a web browser.

To build the project for production:
```bash
npm run build
```

The production output is written to `dist/`. To deploy with Vercel:
```bash
npm run deploy
```

## Deploy on Render

This project can be deployed as a Render Static Site.

1. Push the project to a GitHub repository.
2. In the [Render dashboard](https://dashboard.render.com/), select **New +** and then
   **Static Site**.
3. Connect the GitHub repository and select the branch to deploy.
4. Use the following settings:

   - **Build Command:** `npm ci && npm run build`
   - **Publish Directory:** `dist`
   - **Node Version:** `18` or newer

5. Select **Create Static Site**. Render will build and deploy the site whenever the selected
   branch is updated.

The `assets` directory is copied into `dist/assets` during the build, so the 3D models, audio,
images, and favicons are included automatically.

## Deploy with GitHub Pages

GitHub Pages can publish the Parcel output from the `gh-pages` branch. First, install the
deployment package:

```bash
npm install --save-dev gh-pages
```

Add this script to `package.json`:

```json
"predeploy": "npm run build",
"deploy:github": "gh-pages -d dist"
```

Then run:

```bash
npm run deploy:github
```

In the GitHub repository, open **Settings > Pages** and select **Deploy from a branch**,
the `gh-pages` branch, and the `/ (root)` folder. Your site will then be available at:

```text
https://<github-username>.github.io/<repository-name>/
```

If the repository is published under a project subpath, keep the Parcel build's
`--public-url ./` setting so the bundled JavaScript, stylesheets, and copied assets use
relative URLs.

### GitHub Actions deployment

For automatic deployments, create `.github/workflows/deploy-pages.yml` with:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: pages
  cancel-in-progress: true

jobs:
  deploy:
    runs-on: ubuntu-latest
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    steps:
      - name: Checkout
        uses: actions/checkout@v4

      - name: Set up Node.js
        uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: npm

      - name: Install dependencies
        run: npm ci

      - name: Build
        run: npm run build

      - name: Configure GitHub Pages
        uses: actions/configure-pages@v5

      - name: Upload site artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: dist

      - name: Deploy
        id: deployment
        uses: actions/deploy-pages@v4
```

Before using the workflow, open **Settings > Pages** and set **Source** to **GitHub Actions**.

## Documentation
For the latest version and documentation: [WebGi Docs](https://webgi.xyz/docs/).

Resources: <a href="https://webgi.xyz/docs/" target="_blank">WEBGi</a>, Parcel , TypeScript, Babel, gsap, scrollTrigger

## License 
For license and terms of use, see the [SDK License](https://webgi.xyz/docs/license).
