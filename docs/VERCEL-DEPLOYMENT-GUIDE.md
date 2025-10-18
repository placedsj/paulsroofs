# 🚀 Vercel Deployment Guide - Paul's Roofing

## 📋 Pre-Deployment Checklist

### ✅ Build Status
- [x] Local build passes successfully (`npm run build`)
- [x] Database connection issues resolved (lazy loading)
- [x] Client component directives added
- [x] Payment integration complete
- [x] Meta Pixel tracking implemented

## 🔑 Required Environment Variables

### 1. **Meta Pixel & Facebook Integration**
```bash
# Meta Pixel (REQUIRED - Already configured)
NEXT_PUBLIC_META_PIXEL_ID=10150154950114406

# Facebook Page ID (REQUIRED - Already configured)  
FACEBOOK_PAGE_ID=722683144257830
```

### 2. **Database Configuration**
```bash
# Neon Database URL (REQUIRED for contact forms)
DATABASE_URL=postgresql://username:password@host/database?sslmode=require
```
**📝 Note:** Get this from your Neon.tech dashboard

### 3. **Email Configuration**
```bash
# Replit Email Service (REQUIRED for contact notifications)
REPL_IDENTITY=your_repl_identity_token
# OR
WEB_REPL_RENEWAL=your_web_repl_renewal_token
```
**📝 Note:** Only one of these is needed, get from Replit environment

### 4. **Payment Processing** 
```bash
# Stripe (REQUIRED for payment processing)
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_live_your_stripe_publishable_key
STRIPE_SECRET_KEY=sk_live_your_stripe_secret_key

# FinanceIt (OPTIONAL - for roofing financing)
NEXT_PUBLIC_FINANCEIT_MERCHANT_ID=your_financeit_merchant_id
```

### 5. **AI Features (OPTIONAL)**
```bash
# Google AI for Genkit workflows
GOOGLE_AI_API_KEY=your_google_ai_api_key
```

## 🌐 Vercel Deployment Steps

### Step 1: Connect Repository
1. Go to [vercel.com](https://vercel.com)
2. Click "New Project"
3. Import from GitHub: `placedsj/paulsroofs`
4. Select main branch

### Step 2: Configure Environment Variables
In Vercel dashboard:
1. Go to Project Settings → Environment Variables
2. Add **ALL** required variables from above
3. Set environment to: `Production`, `Preview`, `Development`

### Step 3: Deploy
1. Click "Deploy"
2. Wait for build to complete
3. Test functionality:
   - Contact form submission
   - Payment processing
   - Meta Pixel events

## 🧪 Testing After Deployment

### Critical Tests:
- [ ] **Homepage loads correctly**
- [ ] **Contact form works** (requires DATABASE_URL)
- [ ] **Payment portal accessible** (`/payment`)
- [ ] **Meta Pixel firing** (use Facebook Pixel Helper extension)
- [ ] **Phone tracking works** (Meta events)

### Payment Tests:
- [ ] **Stripe test mode** (use test cards)
- [ ] **FinanceIt integration** (if configured)
- [ ] **Success/cancellation pages**

## 🔧 Troubleshooting

### Build Fails with Database Error:
- ✅ **FIXED:** Database now lazy-loaded, won't fail build

### Payment Not Working:
- Check Stripe keys are live (not test) keys
- Verify webhook endpoints if using Stripe webhooks
- Ensure HTTPS is enabled (required for payments)

### Meta Pixel Not Tracking:
- Verify `NEXT_PUBLIC_META_PIXEL_ID=10150154950114406`
- Check browser console for errors
- Use Facebook Pixel Helper extension

### Contact Form Not Working:
- Verify `DATABASE_URL` is set correctly
- Check email configuration (`REPL_IDENTITY` or `WEB_REPL_RENEWAL`)
- Test database connection in Neon dashboard

## 📈 Post-Deployment Optimization

### 1. **Facebook Ads Setup**
- Meta Pixel is ready to collect data
- Create custom audiences from website visitors
- Set up conversion campaigns for roofing leads

### 2. **Payment Analytics**
- Monitor Stripe Dashboard for transactions
- Track conversion rates from Meta Pixel
- Analyze customer payment preferences

### 3. **Performance Monitoring**
- Vercel Analytics (built-in)
- Core Web Vitals monitoring
- Error tracking and alerts

## 🎯 Success Metrics

Once deployed, you should see:
- **Immediate:** Website loads fast and looks professional
- **Day 1:** Contact forms generating leads in database
- **Week 1:** Meta Pixel collecting visitor data for retargeting
- **Month 1:** Payment processing converting more quotes to jobs

## 🆘 Emergency Contacts

### Vercel Support Issues:
- Check Vercel Status page
- Review build logs in Vercel dashboard
- Contact Vercel support if critical

### Payment Processing Issues:
- Stripe Dashboard → Logs for transaction errors
- Test with Stripe test cards first
- Contact Stripe support for payment issues

---

## 🎉 You're Ready!

Your Paul's Roofing website now has:
- ✅ Professional payment processing
- ✅ Facebook marketing integration  
- ✅ Conversion tracking and analytics
- ✅ Mobile-optimized user experience
- ✅ Scalable, production-ready architecture

**Time to turn those Facebook visitors into paying customers!** 🏠💰

---

*Last updated: October 18, 2025*
*Build tested: ✅ Success*