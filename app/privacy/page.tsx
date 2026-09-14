import PolicyPage from '@/components/PolicyPage'
import { pageMetadata } from '@/lib/seo'

export const metadata = pageMetadata({
  title: 'Privacy Policy',
  description: 'How TradeSafe handles the email addresses collected through its waitlist: what is stored, why, which providers are involved and how to request deletion.',
  path: '/privacy',
})

const CONTACT = (
  <a href="mailto:hello@trade-safe.ai" className="text-primary-light hover:text-primary underline">
    hello@trade-safe.ai
  </a>
)

export default function PrivacyPage() {
  return (
    <PolicyPage
      label="Legal"
      title="Privacy Policy"
      lastUpdated="September 14, 2026"
      sections={[
        {
          title: 'Who we are',
          body: (
            <p>
              TradeSafe is a trading-technology project currently in research and development. This policy explains how
              we handle personal data collected through trade-safe.ai. For any question, contact us at {CONTACT}.
            </p>
          ),
        },
        {
          title: 'What we collect',
          body: (
            <>
              <p>
                When you join the waitlist, we collect your email address. We also store the date and time of your
                registration and the part of the website you signed up from (for example, the homepage or the
                “Follow the project” button). We do not ask for any other personal information.
              </p>
              <p>
                The website does not currently use advertising or analytics cookies. Our hosting provider may process
                technical data, such as IP addresses in server logs, to deliver and secure the website.
              </p>
            </>
          ),
        },
        {
          title: 'How we use your data',
          body: (
            <p>
              Your email address is used to send you a welcome email and updates about TradeSafe: product updates,
              development milestones and early-access opportunities. We do not use it for any other purpose.
            </p>
          ),
        },
        {
          title: 'Service providers',
          body: (
            <>
              <p>We rely on the following providers, which process data on our behalf only to provide their services:</p>
              <ul className="list-disc list-inside space-y-1">
                <li><strong className="text-[#e0e0e0]">Supabase</strong>: storage of the waitlist database;</li>
                <li><strong className="text-[#e0e0e0]">Resend</strong>: delivery of transactional emails;</li>
                <li><strong className="text-[#e0e0e0]">Vercel</strong>: hosting of the website.</li>
              </ul>
            </>
          ),
        },
        {
          title: 'Sharing',
          body: (
            <p>
              We do not sell, rent or trade your personal data, and we do not share it with third parties for advertising.
            </p>
          ),
        },
        {
          title: 'Your choices and rights',
          body: (
            <>
              <p>
                You can unsubscribe at any time by replying to any of our emails or by writing to {CONTACT}. You can
                also ask us to access, correct or delete your data using the same address.
              </p>
              <p>
                If you are located in the European Union, the European Economic Area or the United Kingdom, you may
                also lodge a complaint with your local data protection authority.
              </p>
            </>
          ),
        },
        {
          title: 'Changes to this policy',
          body: (
            <p>
              We may update this policy as the project evolves. The date at the top of this page shows the latest version.
            </p>
          ),
        },
      ]}
    />
  )
}
