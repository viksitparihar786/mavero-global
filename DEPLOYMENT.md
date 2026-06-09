# Deployment — Mavero Global

## 1. Push to GitHub
```bash
git add .
git commit -m "Mavero Global — production ready"
git push origin main
```

## 2. Vercel Setup
1. Go to vercel.com → Import Git Repository
2. Select your repo
3. Framework: Next.js (auto-detected)
4. Build command: `npm run build` (default)
5. Output directory: `.next` (default)

## 3. Add Environment Variables in Vercel
Go to Project Settings → Environment Variables → Add:

| Variable | Value |
|---|---|
| `SMTP_HOST` | `smtp.gmail.com` |
| `SMTP_PORT` | `465` |
| `SMTP_SECURE` | `true` |
| `SMTP_USER` | `atifhameed2002@gmail.com` |
| `SMTP_PASS` | `hewm gdiv molg vfvx` |
| `CONTACT_EMAIL` | `atifhameed2002@gmail.com` |
| `SITE_URL` | `https://www.maveroglobal.com` |

## 4. Deploy
Click Deploy — site will be live at `your-project.vercel.app`

## 5. Custom Domain (when ready)
Vercel Dashboard → Domains → Add `maveroglobal.com`
