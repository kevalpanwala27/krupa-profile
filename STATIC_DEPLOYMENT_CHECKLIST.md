# ✅ Static Website Deployment Checklist

Simple checklist for deploying your static website to Hostinger.

---

## 📋 PRE-DEPLOYMENT

- [ ] Run `npm run build` locally
- [ ] Verify build succeeds (see "✓ Exporting")
- [ ] Check `out` folder is created
- [ ] Test locally if possible (use a local server)

---

## 📤 UPLOAD TO HOSTINGER

- [ ] Login to Hostinger hPanel
- [ ] Open File Manager
- [ ] Navigate to `public_html` folder
- [ ] Clear existing files (if any)
- [ ] Upload ALL contents from `out` folder:
  - [ ] `index.html`
  - [ ] `_next/` folder
  - [ ] Any other files/folders
- [ ] Upload `.htaccess` file (from `public/.htaccess`)

---

## 🔒 SSL SETUP

- [ ] Go to SSL section in hPanel
- [ ] Enable Free SSL / Let's Encrypt
- [ ] Select your domain
- [ ] Wait 5-10 minutes for activation
- [ ] Enable "Force HTTPS"

---

## ✅ TEST YOUR WEBSITE

- [ ] Visit your domain
- [ ] Check homepage loads
- [ ] Test navigation
- [ ] Verify images display
- [ ] Check mobile responsiveness
- [ ] Test product modals
- [ ] Verify HTTPS is active (lock icon)
- [ ] Check browser console for errors (F12)

---

## 🎉 DONE!

Your static website is live!

---

## 🔄 TO UPDATE LATER

1. Make changes locally
2. Run `npm run build`
3. Upload new `out` folder contents
4. Replace old files in `public_html`

---

**Need detailed instructions?** See `STATIC_DEPLOYMENT.md`

