import PolicyPage from '@/components/PolicyPage'
import { pageMetadata } from '@/lib/seo'

export const metadata = pageMetadata({
  title: 'Terms of Service',
  description: 'Terms of use of trade-safe.ai: a project in research and development, no financial advice, no guarantee of trading results and no automated live trading offered.',
  path: '/terms',
})

export default function TermsPage() {
  return (
    <PolicyPage
      label="Legal"
      title="Terms of Service"
      lastUpdated="September 14, 2026"
      sections={[
        {
          title: 'About this website',
          body: (
            <p>
              trade-safe.ai presents TradeSafe, a trading-technology project currently in research and development,
              and lets you join its waitlist. By using the website, you agree to these terms.
            </p>
          ),
        },
        {
          title: 'No financial advice',
          body: (
            <p>
              The content of this website is provided for informational and product-development purposes only. It does
              not constitute investment, financial, legal or tax advice, nor a recommendation to buy or sell any
              financial instrument. TradeSafe does not provide individualized advice, brokerage or portfolio management
              services.
            </p>
          ),
        },
        {
          title: 'Risk and no guarantee of results',
          body: (
            <p>
              Trading involves a substantial risk of loss. TradeSafe does not guarantee profitability or any trading
              result. Historical or backtested results do not guarantee future results.
            </p>
          ),
        },
        {
          title: 'Product status',
          body: (
            <p>
              The features described on this website are under development and may change, be delayed or not be
              released. Automated live trading is not currently offered. Joining the waitlist is free and creates no
              obligation.
            </p>
          ),
        },
        {
          title: 'Intellectual property',
          body: (
            <p>
              The TradeSafe name, logo, website content and design belong to Trade-Safe. All rights reserved. They may
              not be reused without prior permission.
            </p>
          ),
        },
        {
          title: 'Availability',
          body: (
            <p>
              We do our best to keep this website accurate and available, but it is provided “as is”, without
              warranty of any kind.
            </p>
          ),
        },
        {
          title: 'Contact and changes',
          body: (
            <p>
              Questions about these terms can be sent to{' '}
              <a href="mailto:hello@trade-safe.ai" className="text-primary-light hover:text-primary underline">
                hello@trade-safe.ai
              </a>
              . We may update these terms as the project evolves; the date at the top of this page shows the latest version.
            </p>
          ),
        },
      ]}
    />
  )
}
