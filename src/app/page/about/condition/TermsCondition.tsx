import React from "react";

const TermsCondition: React.FC = () => {
  return (
    <div className="bg-[#f7f9fa] py-16">
      <div className="max-w-5xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold text-[#1877f2]">
            Terms and Conditions
          </h1>
          <p className="text-gray-600 mt-4 text-lg max-w-2xl mx-auto">
            Please read these terms carefully. By using Hostnin’s services, you
            agree to follow all the conditions stated below.
          </p>
        </div>

        {/* Section 1.0 */}
        <section className="mb-12 bg-white p-6 md:p-8 rounded-lg shadow-sm">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Section 1.0: Business Relationship
          </h2>
          <p className="text-gray-700 mb-4">
            The business relationship between Hostnin (referred to as “we,”
            “us,” or “our”) and the client (referred to as “the client,” “you,”
            or “your”) is governed by these terms and conditions. The applicable
            law is that which was in effect at the time the contract was
            executed. This agreement supersedes any prior agreements or
            understandings between the parties.
          </p>

          <h3 className="text-xl font-semibold mb-2">
            Section 1.1: Conflicting Terms
          </h3>
          <p className="text-gray-700 mb-4">
            Any terms or conditions proposed by the client that conflict with,
            contradict, or are inconsistent with these terms will not be
            considered part of the contract unless explicitly agreed upon by
            Hostnin in writing. Hostnin reserves the right to reject any such
            terms and will not be bound by them.
          </p>

          <h3 className="text-xl font-semibold mb-2">
            Section 1.2: Acceptance of Terms
          </h3>
          <p className="text-gray-700">
            By using Hostnin’s services, the client agrees to comply with these
            terms and conditions. The client acknowledges that continued use of
            the services constitutes acceptance of any updates or modifications
            to these terms. Any breach of these terms may result in suspension
            or termination of services, which may occur with or without prior
            notice.
          </p>
        </section>

        {/* Section 2.0 */}
        <section className="mb-12 bg-white p-6 md:p-8 rounded-lg shadow-sm">
          <h2 className="text-2xl font-bold mb-4">Section 2.0: Usage Policy</h2>
          <p className="text-gray-700 mb-4">
            Hostnin provides various hosting plans with specific resource
            allocations. Clients must adhere to the following policies:
          </p>

          <h3 className="text-xl font-semibold mb-2">
            2.1: Resource Allocation and Misuse
          </h3>
          <ul className="list-disc list-inside space-y-2 mb-6 text-gray-700">
            <li>
              <b>Resource Limits:</b> Each hosting plan includes specific
              resources such as bandwidth, storage, and processing power.
              Clients must not exceed these limits. Excessive resource
              consumption that adversely affects other clients or the overall
              performance of our servers may result in additional charges,
              suspension of services, or termination of the account.
            </li>
            <li>
              <b>Non-Website Data Storage:</b> Storage provided by Hostnin is
              intended solely for website-related data. The use of storage for
              non-website-related purposes, such as general file storage or
              personal data unrelated to the client’s website, is strictly
              prohibited. Hostnin reserves the right to terminate any data or
              account that violates this policy with or without prior notice.
            </li>
          </ul>

          <h3 className="text-xl font-semibold mb-2">
            2.2: Spamming and Phishing
          </h3>
          <ul className="list-disc list-inside space-y-2 mb-6 text-gray-700">
            <li>
              <b>Prohibition of Malicious Activities:</b> Spamming, phishing,
              and any form of fraudulent or illegal activities are strictly
              prohibited. This includes, but is not limited to, sending
              unsolicited emails, distributing malware or viruses, and engaging
              in deceptive practices. Hostnin will take immediate action against
              any accounts involved in such activities, which may include
              suspension, termination, and legal proceedings if necessary.
            </li>
            <li>
              <b>Account Monitoring:</b> Hostnin reserves the right to monitor
              accounts for compliance with these policies. Any account found to
              be involved in spamming or phishing will be subject to suspension
              or termination without prior notice.
            </li>
          </ul>

          <h3 className="text-xl font-semibold mb-2">2.3: Fair Usage</h3>
          <p className="text-gray-700">
            Clients must use hosting services in a manner that is fair and
            reasonable. This includes not engaging in activities that could
            disrupt or negatively affect other clients’ services. Hostnin
            reserves the right to adjust service limits or impose additional
            charges if fair usage policies are violated.
          </p>
        </section>

        {/* Section 3.0 */}
        <section className="mb-12 bg-white p-6 md:p-8 rounded-lg shadow-sm">
          <h2 className="text-2xl font-bold mb-4">
            Section 3.0: Server and Data Policies
          </h2>

          <h3 className="text-xl font-semibold mb-2">3.1: Server Availability</h3>
          <ul className="list-disc list-inside text-gray-700 mb-6">
            <li>
              <b>Uptime Guarantee:</b> Hostnin guarantees a 99.9% uptime for its
              hosting services. In the event of a server crash or other
              technical issues, we will work to restore services as quickly as
              possible. Data restoration will be completed within 24 hours. No
              refunds will be issued for service disruptions caused by factors
              beyond Hostnin’s control, including natural disasters or
              third-party service failures.
            </li>
          </ul>

          <h3 className="text-xl font-semibold mb-2">
            3.2: Data Backup and Recovery
          </h3>
          <ul className="list-disc list-inside text-gray-700">
            <li>
              <b>Automatic Backups:</b> Hostnin provides automatic backups for
              Web and BDIX hosting services, covering up to 3 days of backups.
              Clients using cloud hosting must purchase Timeline Backup Pro to
              access on-demand backups. Data recovery from non-Timeline Backup
              Pro services incurs a one-time fee of 150 BDT if data is
              accidentally deleted and no local backups are available.
            </li>
            <li>
              <b>Client Responsibility:</b> Clients are responsible for
              maintaining their own backups in addition to those provided by
              Hostnin. Hostnin is not liable for any data loss that occurs due
              to client negligence or failure to maintain proper backups.
            </li>
          </ul>
        </section>

        {/* Section 4.0 */}
        <section className="mb-12 bg-white p-6 md:p-8 rounded-lg shadow-sm">
          <h2 className="text-2xl font-bold mb-4">
            Section 4.0: Account Management and Responsibilities
          </h2>

          <h3 className="text-xl font-semibold mb-2">4.1: Misuse of Services</h3>
          <ul className="list-disc list-inside text-gray-700 mb-6">
            <li>
              <b>Prohibited Uses:</b> Clients must not use Hostnin services for
              illegal activities, including but not limited to hosting,
              distributing, or promoting illegal content such as pornography or
              child abuse material. Any account found to be engaging in such
              activities will be terminated immediately, and legal action may be
              pursued if necessary.
            </li>
            <li>
              <b>Client Liability:</b> The client is responsible for ensuring
              that all data and content stored on Hostnin’s servers comply with
              applicable laws and regulations. Hostnin is not liable for any
              legal consequences resulting from the client’s use of our
              services.
            </li>
          </ul>

          <h3 className="text-xl font-semibold mb-2">
            4.2: Data Retention and Termination
          </h3>
          <ul className="list-disc list-inside text-gray-700">
            <li>
              <b>Data Termination:</b> In cases of account termination, Hostnin
              will delete all data associated with the account, including
              backups. Clients will be notified of termination and given a
              period to retrieve their data before it is permanently deleted.
              Hostnin is not obligated to provide data beyond this period.
            </li>
          </ul>
        </section>

        {/* Section 5.0 */}
        <section className="mb-12 bg-white p-6 md:p-8 rounded-lg shadow-sm">
          <h2 className="text-2xl font-bold mb-4">Section 5.0: Refund Policy</h2>
          <ul className="list-disc list-inside text-gray-700">
            <li>
              <b>30-Day Refund Policy:</b> Hostnin offers a 30-day “No Questions
              Asked” refund policy for all hosting services. Refund requests
              will be honored within this period, provided the service
              disruption was not caused by the client’s actions or external
              factors beyond our control.
            </li>
            <li>
              <b>Refund Exclusions:</b> Refunds will not be granted if the issue
              prompting the request has been resolved or if the service
              disruption was due to factors outside Hostnin’s control. Changes
              of mind or misuse of the refund policy do not qualify for a
              refund.
            </li>
            <li>
              The Detailed information and policy will be found here:{" "}
              <a
                href="https://hostnin.com/refund-policy/"
                className="text-blue-600 underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://hostnin.com/refund-policy/
              </a>
            </li>
          </ul>
        </section>

        {/* Section 6.0 */}
        <section className="mb-12 bg-white p-6 md:p-8 rounded-lg shadow-sm">
          <h2 className="text-2xl font-bold mb-4">
            Section 6.0: Promotional Emails and Data Storage
          </h2>
          <ul className="list-disc list-inside text-gray-700">
            <li>
              <b>Email Consent:</b> By using Hostnin’s services, the client
              consents to receiving promotional emails regarding Hostnin’s
              products, services, and special offers. Clients may opt out of
              these communications at any time by following the unsubscribe
              instructions included in each email.
            </li>
            <li>
              <b>Data Storage:</b> Hostnin may store client data for the purpose
              of managing services and improving our offerings. This data will
              not be shared with third parties except as required by law or as
              part of the service contract.
            </li>
          </ul>
        </section>

        {/* Section 7.0 */}
        <section className="mb-12 bg-white p-6 md:p-8 rounded-lg shadow-sm">
          <h2 className="text-2xl font-bold mb-4">Section 7.0: Affiliate Program</h2>

          <h3 className="text-xl font-semibold mb-2">
            7.1: Commission Structure
          </h3>
          <ul className="list-disc list-inside text-gray-700 mb-6">
            <li>
              <b>Commission Rate:</b> Affiliates earn a 50% commission on the
              initial purchase of any hosting plan referred through their
              affiliate link. This applies to all hosting plans, and the
              commission is calculated based on the net sale amount, excluding
              taxes, fees, or discounts.
            </li>
            <li>
              <b>Minimum Payout:</b> A minimum of 5,000 BDT in commissions must
              be accumulated before a payout is made. Earnings below this
              threshold will roll over to the next period until the minimum is
              reached.
            </li>
          </ul>

          <h3 className="text-xl font-semibold mb-2">7.2: Payout Process</h3>
          <ul className="list-disc list-inside text-gray-700 mb-6">
            <li>
              <b>Payout Eligibility:</b> Commissions become eligible for payout
              after a 45-day holding period. This period allows for any
              potential refunds or disputes to be resolved. Payments will be
              processed within 10 business days after this period.
            </li>
            <li>
              <b>Payment Options:</b> Affiliates can choose to:
              <ul className="list-disc list-inside pl-6">
                <li>
                  Credit Balance: Apply earnings as a credit balance on their
                  Hostnin account for future service registrations or renewals.
                </li>
                <li>
                  Direct Withdrawal: Withdraw earnings directly to their Bkash
                  or Nagad number, provided payment details are accurate.
                </li>
              </ul>
            </li>
          </ul>

          <h3 className="text-xl font-semibold mb-2">
            7.3: Affiliate Responsibilities
          </h3>
          <ul className="list-disc list-inside text-gray-700 mb-6">
            <li>
              <b>Use of Affiliate Links:</b> Affiliates must use their unique
              affiliate link for referrals. Only sales made through this link
              will qualify for commission.
            </li>
            <li>
              <b>Compliance:</b> Affiliates must adhere to all applicable laws
              and Hostnin’s policies. Fraudulent activities or misleading
              promotions will result in termination from the program and
              forfeiture of any earned commissions.
            </li>
            <li>
              <b>Marketing Materials:</b> Affiliates may use approved marketing
              materials or create their own, provided they accurately represent
              Hostnin’s services and comply with these terms.
            </li>
          </ul>

          <h3 className="text-xl font-semibold mb-2">7.4: Program Modifications</h3>
          <ul className="list-disc list-inside text-gray-700">
            <li>
              <b>Right to Modify:</b> Hostnin reserves the right to modify the
              affiliate program terms, commission rates, and payout procedures
              at any time. Such changes may be made with or without prior notice
              to the affiliates.
            </li>
          </ul>
        </section>

        {/* Section 8.0 */}
        <section className="mb-12 bg-white p-6 md:p-8 rounded-lg shadow-sm">
          <h2 className="text-2xl font-bold mb-4">
            Section 8.0: Free Domain Policy
          </h2>

          <h3 className="text-xl font-semibold mb-2">
            8.1: Eligibility for Free Domain
          </h3>
          <ul className="list-disc list-inside text-gray-700 mb-6">
            <li>
              <b>Hosting Plan Requirement:</b> Clients who purchase a 3-year
              plan for Cloud, Web, or BDIX hosting are eligible for one free
              domain registration. This offer is valid only for the first domain
              registered in conjunction with the purchase of the hosting plan.
            </li>
            <li>
              <b>Domain Registration Period:</b> The free domain registration is
              valid for the first year only. Standard renewal fees will apply
              for subsequent years.
            </li>
          </ul>

          <h3 className="text-xl font-semibold mb-2">
            8.2: Domain Registration Process
          </h3>
          <ul className="list-disc list-inside text-gray-700 mb-6">
            <li>
              <b>Supported Extensions:</b> The free domain offer applies to a
              selection of popular domain extensions such as .com, .net, .org,
              and others specified by Hostnin.
            </li>
            <li>
              <b>Registration:</b> The domain must be registered at the time of
              hosting plan purchase. The offer is valid only for new domain
              registrations and cannot be applied retroactively.
            </li>
          </ul>

          <h3 className="text-xl font-semibold mb-2">
            8.3: Domain Ownership and Transferability
          </h3>
          <ul className="list-disc list-inside text-gray-700 mb-6">
            <li>
              <b>Ownership:</b> Clients retain full ownership of the domain.
              Hostnin facilitates domain registration but does not assume
              ownership or management responsibilities beyond the initial
              registration period.
            </li>
            <li>
              <b>Transferability:</b> Clients may transfer their domain to
              another registrar at any time. Hostnin will provide the necessary
              authorization code (EPP code) upon request to facilitate the
              transfer.
            </li>
          </ul>

          <h3 className="text-xl font-semibold mb-2">
            8.4: Exchange for Cash or Credit
          </h3>
          <ul className="list-disc list-inside text-gray-700">
            <li>
              <b>Cash or Credit Option:</b> Instead of registering the free
              domain, clients may choose to receive cash or credit up to a
              maximum of 999 BDT. This option is available at the time of
              purchase and can be used towards future service registrations or
              renewals.
            </li>
            <li>
              <b>Non-Transferability:</b> The free domain offer or its cash
              equivalent cannot be transferred or exchanged beyond the original
              purchase context.
            </li>
          </ul>
        </section>

        {/* Footer */}
        <div className="text-center mt-16">
          <p className="text-gray-600 text-sm">
            Last updated: July 2025 | For questions, contact{" "}
            <a
              href="mailto:support@hostnin.com"
              className="text-blue-600 underline"
            >
              support@hostnin.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default TermsCondition;
