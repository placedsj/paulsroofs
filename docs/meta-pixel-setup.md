# Meta Pixel Setup Guide for Paul's Roofing

## 🚀 **Meta Integration Status: READY!**

Your website is now fully integrated with Meta/Facebook tracking! Here's what's been implemented and how to complete the setup.

## ✅ **What's Already Implemented:**

### 1. **Meta Pixel Component** (`MetaPixel.tsx`)
- Loads Facebook tracking pixel
- Tracks PageView events automatically
- Custom event tracking functions ready

### 2. **Site-wide Tracking** (`layout.tsx`)
- Meta Pixel loads on every page
- Automatic page view tracking

### 3. **Event Tracking Added:**
- **Quote Requests**: Tracks when contact forms are submitted
- **Phone Calls**: Tracks when phone number links are clicked
- **Custom Events**: Ready for lead tracking

### 4. **Environment Variables Ready**
Updated `.env.example` with:
```env
NEXT_PUBLIC_META_PIXEL_ID=your_pixel_id_here
```

## 🔧 **To Complete Setup:**

### Step 1: Get Your Meta Pixel ID
1. Go to [Facebook Business Manager](https://business.facebook.com/)
2. Navigate to **Events Manager**
3. Click **+ Add** → **Meta Pixel**
4. Create a new pixel or use existing one
5. Copy your **Pixel ID** (looks like: `123456789012345`)

### Step 2: Add Pixel ID to Environment
1. Create a `.env.local` file in your project root
2. Add your Pixel ID:
```env
NEXT_PUBLIC_META_PIXEL_ID=123456789012345
```

### Step 3: Deploy and Test
1. Deploy your website with the new environment variable
2. Visit your website
3. Use [Facebook Pixel Helper](https://chrome.google.com/webstore/detail/facebook-pixel-helper/) browser extension to verify pixel fires

## 📊 **Events Being Tracked:**

### Automatic Events:
- **PageView**: Every page visit
- **ViewContent**: When users view service pages

### Custom Events:
- **Lead**: When contact form is submitted
- **Contact**: When phone number is clicked
- **InitiateContact**: When quote button is clicked

## 🎯 **Facebook Ads Benefits:**

### With Meta Pixel Active, You Can:
1. **Retarget Website Visitors**: Show ads to people who visited your site
2. **Track Conversions**: See which ads lead to quote requests
3. **Create Lookalike Audiences**: Find people similar to your customers
4. **Optimize for Results**: Let Facebook find people most likely to request quotes

### Recommended Ad Campaigns:
1. **Website Retargeting**: Target people who visited but didn't submit quote
2. **Lead Generation**: Facebook Lead Ads that auto-populate forms
3. **Local Awareness**: Target homeowners in Southern New Brunswick

## 📱 **Testing Your Setup:**

### 1. Install Facebook Pixel Helper
- Chrome extension: [Facebook Pixel Helper](https://chrome.google.com/webstore/detail/facebook-pixel-helper/)
- Visit your website and check for green checkmark

### 2. Test Events:
- **Phone Call Tracking**: Click phone number → should see "Contact" event
- **Quote Request**: Submit contact form → should see "Lead" event
- **Page Views**: Navigate pages → should see "PageView" events

### 3. Facebook Events Manager:
- Go to Events Manager in Facebook Business Manager
- Check **Test Events** to see real-time data
- Verify events are coming through

## 🔍 **Advanced Tracking (Optional):**

### Add More Events:
```javascript
// Track when user views materials page
trackCustomEvent('ViewMaterials', { 
  content_name: 'Materials Guide',
  content_category: 'Service Page'
});

// Track when user downloads resources
trackCustomEvent('Download', {
  content_name: 'Roofing Guide PDF'
});
```

### Conversion Tracking:
- Set up **Custom Conversions** in Events Manager
- Define quote requests as conversions
- Track ROI of Facebook ads

## 🛡️ **Privacy Compliance:**

### GDPR/Privacy Considerations:
- Meta Pixel respects browser privacy settings
- Consider adding cookie consent banner
- Update privacy policy to mention Facebook tracking

### Cookie Consent Example:
```html
<!-- Add to your site if needed -->
<div id="cookie-banner">
  We use cookies and tracking pixels to improve your experience.
  <button onclick="acceptCookies()">Accept</button>
</div>
```

## 📈 **Facebook Business Setup:**

### Business Manager Checklist:
- [x] Facebook Business Account created
- [x] Page connected (ID: 722683144257830)
- [ ] Meta Pixel created and installed
- [ ] Ads Account set up
- [ ] Payment method added

### Ad Account Setup:
1. Go to **Ad Accounts** in Business Manager
2. Click **+ Add** → **Create New Ad Account**
3. Add your business details and payment method
4. Set up your first campaign targeting local homeowners

## 🚨 **Troubleshooting:**

### Common Issues:
1. **Pixel not firing**: Check environment variable is set correctly
2. **Events not tracking**: Verify functions are imported properly  
3. **No data in Facebook**: Allow 24-48 hours for data to appear

### Debug Commands:
```javascript
// Check if pixel is loaded (run in browser console)
console.log(window.fbq);

// Manually fire test event
fbq('track', 'Lead', { test: true });
```

## 🎉 **You're Ready!**

Your Meta integration is complete! Just add your Pixel ID to start tracking visitors and optimizing your Facebook ads for better results.

**Next Steps:**
1. Get Pixel ID from Facebook Business Manager
2. Add to `.env.local` file
3. Deploy website
4. Create your first retargeting campaign!

Need help with Facebook ads strategy? The pixel data will show you exactly which content converts best! 📊