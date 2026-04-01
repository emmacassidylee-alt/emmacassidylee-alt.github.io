# GitHub Pages Deployment Guide

This project is configured to automatically deploy to GitHub Pages using GitHub Actions.

## Setup Instructions

### 1. Push to GitHub
First, push your code to a GitHub repository:

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
git push -u origin main
```

### 2. Enable GitHub Pages
1. Go to your repository on GitHub
2. Click **Settings** → **Pages** (in the left sidebar)
3. Under **Source**, select **GitHub Actions**
4. Save the settings

### 3. Configure Base Path (if needed)
If your site will be at `https://username.github.io/repo-name/` (not a custom domain):

1. Open `vite.config.ts`
2. Change `base: '/'` to `base: '/repo-name/'` (replace with your actual repo name)
3. Commit and push:
   ```bash
   git add vite.config.ts
   git commit -m "Update base path for GitHub Pages"
   git push
   ```

If using a custom domain, keep `base: '/'`

### 4. Automatic Deployment
- Every push to the `main` branch will trigger an automatic deployment
- The workflow will build the project and deploy to GitHub Pages
- Check the **Actions** tab in your repository to monitor deployment progress

### 5. Access Your Site
Once deployed, your site will be available at:
- With custom domain: `https://yourdomain.com`
- Without custom domain: `https://username.github.io/repo-name/`

## Manual Deployment (Alternative)

If you prefer to deploy manually without GitHub Actions:

1. Install `gh-pages` package:
   ```bash
   npm install --save-dev gh-pages
   ```

2. Add deploy script to `package.json`:
   ```json
   "scripts": {
     "deploy": "npm run build && gh-pages -d dist"
   }
   ```

3. Deploy:
   ```bash
   npm run deploy
   ```

## Local Preview

To preview the production build locally:

```bash
npm run build
npm run preview
```

This will start a local server serving the built files from the `dist` directory.

## Troubleshooting

### Routes not working (404 errors)
If you get 404 errors on routes other than the home page, you may need to:
1. Add a `404.html` file that redirects to `index.html`
2. Or use hash-based routing instead of browser routing

### Assets not loading
- Verify the `base` path in `vite.config.ts` matches your deployment URL
- Check that all asset imports use relative paths (e.g., `../../assets/image.png`)

### Build fails
- Check the Actions tab for error details
- Ensure all dependencies are listed in `package.json`
- Test the build locally with `npm run build`