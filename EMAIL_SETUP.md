# Contact Form Email Setup

The contact form automatically sends emails to chris@technika-design.com using Resend API.

## Setup Instructions

1. **Sign up for Resend** (free tier allows 100 emails/day):
   - Go to https://resend.com
   - Create a free account

2. **Get your API Key**:
   - Go to https://resend.com/api-keys
   - Click "Create API Key"
   - Give it a name (e.g., "Technika Website")
   - Copy the API key

3. **Add API Key to your project**:
   - Create a file named `.env.local` in the root directory (same folder as package.json)
   - Add this line:
     ```
     RESEND_API_KEY=re_your_actual_api_key_here
     ```
   - Replace `re_your_actual_api_key_here` with the API key you copied

4. **Restart your development server**:
   - Stop the current server (Ctrl+C)
   - Run `npm run dev` again

5. **Test the contact form**:
   - Go to http://localhost:3000/contact
   - Fill out and submit the form
   - You should receive an email at chris@technika-design.com

## Production Deployment

When deploying to production (Vercel, Netlify, etc.):
- Add `RESEND_API_KEY` as an environment variable in your hosting platform's settings
- The contact form will work automatically

## Optional: Verify Your Domain

For better email deliverability in production:
1. Go to https://resend.com/domains
2. Add and verify technika-design.com
3. Update `app/api/contact/route.ts` line 34 to use your verified domain:
   ```typescript
   from: 'Contact Form <noreply@technika-design.com>',
   ```

This allows emails to come from your actual domain instead of `onboarding@resend.dev`.
