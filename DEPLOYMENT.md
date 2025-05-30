# Odysiq Deployment Guide

This guide will help you deploy your Odysiq interactive stories website to GitHub Pages and connect your custom domain.

## Quick Start

### 1. GitHub Repository Setup

1. Create a new repository on GitHub (if not already done)
2. Push your code to the repository:
   ```bash
   git remote add origin https://github.com/yourusername/odysiq.git
   git branch -M main
   git push -u origin main
   ```

### 2. Enable GitHub Pages

1. Go to your repository on GitHub
2. Click on **Settings** tab
3. Scroll down to **Pages** section
4. Under **Source**, select "GitHub Actions"
5. The automated deployment will trigger on the next push

### 3. Custom Domain Setup (odysiq.com)

#### For Squarespace Domain:

1. **In Squarespace:**
   - Go to Settings → Domains
   - Click on your domain (odysiq.com)
   - Go to DNS Settings
   - Add these DNS records:

   ```
   Type: A
   Host: @
   Value: 185.199.108.153
   
   Type: A
   Host: @
   Value: 185.199.109.153
   
   Type: A
   Host: @
   Value: 185.199.110.153
   
   Type: A
   Host: @
   Value: 185.199.111.153
   
   Type: CNAME
   Host: www
   Value: yourusername.github.io
   ```

2. **In GitHub:**
   - Go to repository Settings → Pages
   - Under "Custom domain", enter: `odysiq.com`
   - Check "Enforce HTTPS"
   - Wait for DNS verification (can take up to 24 hours)

#### For Other DNS Providers:

Follow the same DNS record setup but in your DNS provider's control panel.

## Advanced Configuration

### Environment Setup

The website is built with vanilla HTML, CSS, and JavaScript for maximum compatibility:

- **No build process required**
- **No dependencies to install**
- **Works on any web server**
- **Mobile responsive design**
- **SEO optimized**

### File Structure
```
website/
├── index.html              # Main landing page
├── final-seconds.html      # SWAT negotiation story
├── lost-horizons.html      # Survival island story
├── quantum-paradox.html    # Sci-fi quantum story
├── styles.css             # Shared styles
├── manifest.json          # PWA configuration
└── favicon.ico            # Site icon
```

### Custom Domain Verification

To verify your domain is working:

1. Check DNS propagation: `dig odysiq.com`
2. Test HTTPS: Visit `https://odysiq.com`
3. Verify redirect: `https://www.odysiq.com` should redirect to `https://odysiq.com`

### SSL Certificate

GitHub Pages automatically provides SSL certificates for custom domains. The certificate may take up to 24 hours to provision after DNS setup.

## Deployment Options

### Option 1: GitHub Pages (Recommended)
- ✅ Free hosting
- ✅ Automatic deployments
- ✅ Custom domain support
- ✅ SSL certificates
- ✅ CDN distribution

### Option 2: Netlify
1. Connect your GitHub repository to Netlify
2. Set build directory to `website`
3. Configure custom domain in Netlify dashboard

### Option 3: Vercel
1. Import project from GitHub
2. Set output directory to `website`
3. Configure domain in Vercel dashboard

### Option 4: Traditional Web Hosting
1. Upload contents of `website/` folder to your web server
2. Configure domain to point to your server
3. Ensure HTTPS is enabled

## Monitoring and Analytics

### Add Google Analytics (Optional)
Add this code before the closing `</head>` tag in each HTML file:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

### Performance Monitoring
The site is optimized for performance:
- Minimal JavaScript
- Optimized CSS
- Fast loading times
- Mobile-first design

## Troubleshooting

### Common Issues

**DNS not propagating:**
- Wait up to 48 hours for global DNS propagation
- Use online DNS checkers to verify records
- Clear your browser DNS cache

**HTTPS certificate issues:**
- Ensure DNS is properly configured
- Disable and re-enable custom domain in GitHub Pages
- Wait 24 hours for certificate provisioning

**404 errors:**
- Check that files are in the `website/` directory
- Verify GitHub Actions deployment succeeded
- Ensure file names match exactly (case-sensitive)

**Paywall not working:**
- Payment integration requires backend setup
- Consider using Stripe, PayPal, or other payment processors
- Implement server-side validation for security

### Support Resources

- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [Custom Domain Setup Guide](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site)
- [DNS Configuration Help](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site)

## Security Considerations

- All payment processing should be handled server-side
- Consider implementing rate limiting for API calls
- Use HTTPS for all traffic (enforced by GitHub Pages)
- Validate user input on any future backend integration

## Performance Optimization

The current setup is already optimized for performance:
- Minimal external dependencies
- Optimized image sizes
- Efficient CSS and JavaScript
- Mobile-responsive design
- Fast loading times

For further optimization:
- Consider implementing a Service Worker for offline functionality
- Add image lazy loading for future media content
- Implement code splitting for larger applications

---

**Next Steps:**
1. Follow the GitHub Pages setup above
2. Configure your domain DNS settings
3. Test the deployment
4. Monitor for any issues
5. Consider implementing payment processing for the paywall features 