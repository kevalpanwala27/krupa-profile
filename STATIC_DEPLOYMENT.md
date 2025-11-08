# 🚀 Static Website Deployment Guide for Hostinger

Your website is now configured as a **static website** - much simpler to deploy! No Node.js needed!

---

## 📋 STEP 1: Build Your Static Website

### Step 1.1: Build Locally
Open terminal in your project folder and run:

```bash
npm run build
```

**Expected output:** You should see:
```
✓ Compiled successfully
✓ Generating static pages (5/5)
✓ Exporting (2/2)
```

### Step 1.2: Check the Output
After building, you'll have an `out` folder containing all your static files.

**Location:** `krupa-profile/out/`

This folder contains everything you need to upload!

---

## 📦 STEP 2: Prepare Files for Upload

### Step 2.1: Find the `out` Folder
After running `npm run build`, you'll see a new folder called `out` in your project.

**This folder contains:**
- `index.html` (your homepage)
- `_next/` (JavaScript and CSS files)
- All other static assets

### Step 2.2: Create ZIP of `out` Folder (Optional)
1. Right-click on the `out` folder
2. Select "Compress" (Mac) or "Send to → Compressed folder" (Windows)
3. Name it `website-static.zip`

**OR** just upload the entire `out` folder contents directly.

---

## 🌐 STEP 3: Access Hostinger Control Panel

1. Go to https://www.hostinger.com/
2. Click **"Login"** (top right)
3. Enter your credentials
4. Click **"hPanel"** or **"Manage"**

---

## 📁 STEP 4: Upload Files to Hostinger

### Step 4.1: Open File Manager
1. In hPanel, click **"File Manager"** (usually in "Files" section)

### Step 4.2: Navigate to Your Domain Directory
1. Go to `public_html` folder
   - This is your website's root directory
   - **If you have multiple domains:** Go to `domains/yourdomain.com/public_html`

### Step 4.3: Clear Existing Files (If Any)
1. Select all existing files in `public_html`
2. Delete them (or move to backup folder)
3. **Keep the folder empty** (except maybe `.htaccess` if it exists)

### Step 4.4: Upload Your Files

**Option A: Upload ZIP File**
1. Click **"Upload"** button
2. Select your `website-static.zip` file
3. Wait for upload to complete
4. Right-click the ZIP file → **"Extract"**
5. Delete the ZIP file after extraction

**Option B: Upload Folder Contents Directly**
1. Click **"Upload"** button
2. Select **ALL files and folders** from your `out` folder:
   - `index.html`
   - `_next/` folder
   - Any other files/folders
3. Wait for upload to complete

### Step 4.5: Upload .htaccess File
1. In File Manager, go to `public_html`
2. Click **"Upload"**
3. Select the `.htaccess` file from `public/.htaccess` in your project
4. This file helps with routing and performance

**Important:** Make sure `index.html` and `_next` folder are in `public_html` root!

---

## ✅ STEP 5: Verify File Structure

Your `public_html` folder should look like this:

```
public_html/
├── index.html
├── _next/
│   ├── static/
│   └── ...
├── .htaccess
└── (other static files if any)
```

---

## 🔒 STEP 6: Enable SSL/HTTPS

1. In hPanel, go to **"SSL"** section
2. Click **"Enable Free SSL"** or **"Let's Encrypt"**
3. Select your domain
4. Click **"Install SSL"**
5. Wait 5-10 minutes for activation
6. Enable **"Force HTTPS"** (redirects HTTP to HTTPS)

---

## ✅ STEP 7: Test Your Website

1. Open a new browser tab
2. Visit your domain: `https://yourdomain.com`
3. Check:
   - [ ] Homepage loads correctly
   - [ ] All navigation works
   - [ ] Images display properly
   - [ ] Mobile view is responsive
   - [ ] Product modals open correctly
   - [ ] HTTPS is active (lock icon in browser)
   - [ ] No console errors (F12 → Console)

---

## 🎉 STEP 8: You're Done!

Your static website is now live! 🚀

---

## 🔄 Updating Your Website

When you make changes:

1. **Make changes** to your code locally
2. **Build again:** `npm run build`
3. **Upload new `out` folder contents** to `public_html` (replace old files)
4. **Clear browser cache** (Ctrl+Shift+R or Cmd+Shift+R)

---

## 🆘 Troubleshooting

### Issue: Website shows "Index of /" or file list
**Solution:**
- Make sure `index.html` is in `public_html` root
- Check file permissions (should be 644 for files, 755 for folders)
- Verify `.htaccess` file is uploaded

### Issue: 404 errors on navigation
**Solution:**
- Make sure `.htaccess` file is uploaded
- Check that `_next` folder is uploaded correctly
- Clear browser cache

### Issue: Images not loading
**Solution:**
- Verify `public/images/` folder was copied to `out/`
- Check image paths in your code
- Clear browser cache

### Issue: CSS/JavaScript not loading
**Solution:**
- Make sure `_next` folder is uploaded
- Check file permissions
- Verify all files uploaded completely

### Issue: White screen or blank page
**Solution:**
- Check browser console (F12) for errors
- Verify `index.html` exists in root
- Check that all files uploaded correctly
- Try clearing browser cache

---

## 📝 Quick Reference

### Build Command
```bash
npm run build
```

### Output Location
```
out/
```

### Upload Location
```
public_html/
```

### Files to Upload
- Everything inside `out/` folder
- `.htaccess` file (from `public/.htaccess`)

---

## ✨ Advantages of Static Website

✅ **Faster** - No server processing needed  
✅ **Cheaper** - Works on basic hosting plans  
✅ **More Secure** - No server-side vulnerabilities  
✅ **Easier to Deploy** - Just upload files  
✅ **Better Performance** - Can be served from CDN  

---

## 📞 Need Help?

1. **Hostinger Support:**
   - Live Chat in hPanel
   - Email: support@hostinger.com

2. **Check File Permissions:**
   - Files: 644
   - Folders: 755

3. **Verify Upload:**
   - All files should be in `public_html` root
   - `index.html` must be present
   - `_next` folder must be present

---

**Congratulations! Your static website is live! 🎊**

