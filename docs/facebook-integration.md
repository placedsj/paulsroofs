# Facebook Integration Guide for Paul's Roofing

## Overview
This guide covers the Facebook integration features implemented for Paul's Roofing website, including social plugins, tracking, and lead generation.

## Facebook Page Information
- **Page ID**: 722683144257830
- **Page URL**: https://www.facebook.com/profile.php?id=722683144257830

## Implemented Features

### 1. Facebook Page Plugin (`FacebookPagePlugin.tsx`)
- Embeds Facebook page directly on your website
- Shows recent posts and follower count
- Customizable width, height, and display options
- Automatically loads Facebook SDK

**Usage:**
```tsx
import { FacebookPagePlugin } from '@/components/FacebookPagePlugin';

<FacebookPagePlugin 
  pageId="722683144257830"
  width={340}
  height={300}
  showFacepile={true}
  showPosts={true}
/>
```

### 2. Facebook Share Buttons (`FacebookShareButton.tsx`)
- Share website content to Facebook
- Two variants: full button and icon-only
- Customizable styling and titles

**Usage:**
```tsx
import { FacebookShareButton, FacebookShareIcon } from '@/components/FacebookShareButton';

<FacebookShareButton 
  url="https://paulroofs.com/projects/metal-roof-installation"
  title="Check out this amazing metal roof installation!"
/>

<FacebookShareIcon 
  url={window.location.href}
  title="Paul's Roofing Services"
/>
```

### 3. Meta Pixel Tracking (`MetaPixel.tsx`)
- Track website visitors and conversions
- Custom events for quote requests and phone calls
- GDPR-compliant implementation

**Usage:**
```tsx
import { MetaPixel, trackQuoteRequest, trackPhoneCall } from '@/components/MetaPixel';

// In your layout or main component
<MetaPixel pixelId="YOUR_PIXEL_ID" />

// Track events
trackQuoteRequest('website_form');
trackPhoneCall();
```

### 4. Facebook Lead Ads Webhook (`/api/facebook/webhook`)
- Receives lead data from Facebook Lead Ads
- Automatically creates contact submissions
- Sends email notifications
- Includes webhook verification

## Setup Instructions

### Step 1: Facebook Business Manager Setup
1. Go to [Facebook Business Manager](https://business.facebook.com/)
2. Create a business account if you don't have one
3. Add your Facebook page (ID: 722683144257830)

### Step 2: Create Facebook App (Optional - for advanced features)
1. Go to [Facebook Developers](https://developers.facebook.com/)
2. Create a new app
3. Add "Lead Ads" product
4. Get your App ID and App Secret

### Step 3: Meta Pixel Setup (Optional - for tracking)
1. In Facebook Business Manager, go to Events Manager
2. Create a new Meta Pixel
3. Get your Pixel ID
4. Add it to your `.env` file as `META_PIXEL_ID`

### Step 4: Environment Variables
Update your `.env` file with these values:

```env
# Facebook Integration
FACEBOOK_PAGE_ID=722683144257830
META_PIXEL_ID=your_pixel_id_here
FACEBOOK_APP_ID=your_app_id_here
FACEBOOK_VERIFY_TOKEN=your_webhook_verify_token
FACEBOOK_PAGE_ACCESS_TOKEN=your_page_access_token
```

### Step 5: Facebook Lead Ads Setup (Optional)
1. Create a lead ad campaign in Facebook Ads Manager
2. Create a lead form with fields: Name, Email, Phone, Message
3. Set up webhook:
   - Webhook URL: `https://your-domain.com/api/facebook/webhook`
   - Verify Token: Use the same token from your `.env` file
   - Subscribe to `leadgen` events

## Updated Links
The following existing Facebook links have been updated to use your correct Page ID:

- Footer Facebook icon: ✅ Updated
- Reviews section Facebook button: ✅ Updated

## Where to Add Facebook Components

### Recommended Locations:

1. **Facebook Page Plugin**:
   - Footer (alongside contact info)
   - Contact page sidebar
   - About page

2. **Facebook Share Buttons**:
   - Project gallery items
   - Blog posts
   - Service pages

3. **Meta Pixel**:
   - Add to root layout (`src/app/layout.tsx`)
   - Track events in contact forms and phone click handlers

### Example Implementation in Footer:
```tsx
import { FacebookPagePlugin } from '@/components/FacebookPagePlugin';

// Add to your footer component
<div className="grid grid-cols-1 md:grid-cols-4 gap-8">
  {/* Existing content */}
  <FacebookPagePlugin />
</div>
```

## Advanced Features (Future)

### 1. Facebook Comments
Add Facebook comments to blog posts:
```tsx
<div 
  className="fb-comments" 
  data-href={pageUrl}
  data-width="100%"
  data-numposts="5"
  data-colorscheme="dark"
>
</div>
```

### 2. Facebook Login
Allow customers to log in with Facebook:
```tsx
<div 
  className="fb-login-button" 
  data-width=""
  data-size="large"
  data-button-type="continue_with"
  data-layout="default"
  data-auto-logout-link="false"
  data-use-continue-as="false"
>
</div>
```

### 3. Instagram Integration
Display Instagram photos (requires Instagram Business API):
```tsx
// Future: Display recent roofing project photos from Instagram
```

## Testing

### Test Facebook Integration:
1. **Page Plugin**: Visit your website and verify Facebook page loads
2. **Share Buttons**: Click share buttons and verify they open Facebook with correct URL
3. **Meta Pixel**: Use Facebook Pixel Helper browser extension to verify pixel fires
4. **Webhook**: Use Facebook's webhook testing tool

### Debug Issues:
- Check browser console for Facebook SDK errors
- Use Facebook's debugging tools:
  - [Sharing Debugger](https://developers.facebook.com/tools/debug/)
  - [Pixel Helper](https://www.facebook.com/business/help/742478679120153)

## Privacy Considerations
- Meta Pixel tracking should comply with GDPR/privacy laws
- Consider adding privacy policy updates
- Implement cookie consent if required in your region

## Support
For Facebook integration issues:
- [Facebook Business Help Center](https://www.facebook.com/business/help)
- [Facebook Developers Documentation](https://developers.facebook.com/docs/)
- Check Facebook Business Manager for page insights and lead data