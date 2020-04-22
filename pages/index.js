// pages/index.js

import PageWrapper from "../components/page-wrapper";
import Link from "next/link";

export default function Home() {
  return (
    <PageWrapper
      metaTitle="Louisiana Health Work Connect"
      contentTitle="Louisiana Health Work Connect"
    >
      <div className="container">
        <main>
          <h3>
            <strong> Louisiana Health Work Connect</strong> is an initiative
            organized by the State of Louisiana Department of Health in response
            to COVID-19 to help facilities with acute healthcare staffing
            shortages fill those vacancies with qualified candidates who are
            otherwise out of work.
          </h3>

          <div style={{ width: "100%", marginTop: 18 }}>
            <h4>How does it work? </h4>
            <ol>
              <li>
                Interested health care workers submit their information and
                qualifications.{" "}
              </li>
              <li>
                Participating healthcare facilities regularly update the
                Louisiana Department of Health (LDH) on their staffing needs.{" "}
              </li>
              <li>
                LDH provides a list of candidates to facilities tailored to
                their staffing needs.{" "}
              </li>
              <li>
                A participating facility then contacts a health care worker to
                begin the hiring process.{" "}
              </li>
            </ol>
          </div>

          <div className="grid">
            <Link href="/candidate-intake?source=Landing%20Page">
              <div className="card">
                <h2>Get Involved &rarr;</h2>
                <p>Apply to a healthcare facility in need.</p>
              </div>
            </Link>
          </div>

          <div className="faq">
            <h2>Frequently Asked Questions</h2>

            <div className="grid">
              <div className="col">
                <h4>HEALTHCARE WORKERS </h4>

                <div>
                  <h5>What workers can participate? </h5>
                  <p>
                    Licensed or retired, furloughed, and out-of-work healthcare
                    workers willing to work in Louisiana can submit their
                    information to be considered for employment.
                  </p>

                  <h5>
                    I’m an interested healthcare worker. How do I participate?
                  </h5>
                  <p>
                    Please fill in{" "}
                    <Link href="/candidate-intake?souce=FAQ">
                      <a>this form</a>
                    </Link>{" "}
                    to submit your information.
                  </p>

                  <h5>
                    I don’t live in Louisiana but want to help. Can I
                    participate?
                  </h5>
                  <p>
                    Yes. We hope to find jobs for our furloughed neighbors so we
                    will be prioritizing filling open positions with qualified
                    Louisiana residents. However, if we aren’t able to fill a
                    critical hospital need with in-state providers, we will be
                    expanding the reach beyond state lines.
                  </p>

                  <h5>Do I need to have an active license?</h5>
                  <p>
                    No. Facilities are prioritizing workers who can begin
                    immediately, but will also consider recently retired
                    individuals who are in good standing with their respective
                    licensing board.
                  </p>

                  <h5>How much will I get paid? Do I have to travel?</h5>
                  <p>
                    The specific conditions of your employment, like pay and
                    location, will be negotiated between you and the individual
                    facilities. Before being hired, you will have an opportunity
                    to discuss details like this with your potential future
                    employer.
                  </p>

                  <h5>
                    I’m not looking for a job, but I want to help. What should I
                    do?{" "}
                  </h5>
                  <p>
                    Please sign up to be a volunteer through the Louisiana{" "}
                    <a href="https://www.lava.dhh.louisiana.gov/">
                      Volunteers in Action registry
                    </a>
                    . Medical and non-medical volunteers 18 years of age and
                    older are welcome.
                  </p>
                </div>
              </div>
              <div className="col">
                <h4>HEALTHCARE FACILITIES </h4>

                <div>
                  <h5>What facilities can participate? </h5>
                  <p>
                    The program is currently being piloted in Baton Rouge, LA.
                    Any licensed nursing home or hospital (both Tier 1 and 2) in{" "}
                    <a href="http://ldh.la.gov/assets/docs/OrgCharts/RegionMap.jpg">
                      Louisiana Department of Health Region 2
                    </a>{" "}
                    (Baton Rouge area) can participate in Louisiana Health Work
                    Connect.
                    <br />
                    <br />
                    <em>Coming soon:</em> any hospital or nursing home in the
                    state of Louisiana.
                  </p>

                  <h5>
                    I’m an interested Louisiana healthcare facility. How do I
                    participate?
                  </h5>
                  <p>
                    In recognition of the pressure many facilities are facing,
                    this program is being rolled out as quickly as possible. It
                    will initially launch as a pilot in the DoH Region 2 (Baton
                    Rouge area) for Tier 1 and Tier 2 hospitals, and nursing
                    homes. Based on the lessons learned during the pilot, it
                    will transition to a statewide program as rapidly as
                    possible.
                    <br />
                    <br />
                    If you are a Human Resources representative with a hospital
                    or nursing home in Region 2 and have not received
                    information about this program, please first contact your
                    internal LDH emergency preparedness liaison. For all other
                    inquiries, please use the{" "}
                    <a href="/feedback">feedback form</a>.
                  </p>

                  <h5>
                    How do I receive information about interested applicants?
                  </h5>
                  <p>
                    If you are a validated participating member of Louisiana
                    Health Work Connect, a tailored spreadsheet of applicants
                    will be emailed to the Human Resources representative
                    designated on the intake form.
                  </p>
                </div>
              </div>
            </div>
            <br />
            <p>
              If you have any additional questions or feedback, let us know at
              this <a href="/feedback">feedback form</a>.{" "}
            </p>

            <p>
              For press inquiries, email
              <a
                href="mailto:kelly.zimmerman@la.gov?subject=Louisiana Health Work Connect"
                target="_blank"
              >
                {" "}
                kelly.zimmerman@la.gov
              </a>
              .
            </p>
          </div>
        </main>

        <style jsx>{`
          .container {
            min-height: 50vh;
            max-width: 900px;
            padding: 0 1.5rem;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
          }

          main {
            padding: 5rem 0;
            flex: 1;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
          }

          footer {
            width: 100%;
            height: 100px;
            border-top: 1px solid #eaeaea;
            display: flex;
            justify-content: center;
            align-items: center;
          }

          footer img {
            margin-left: 0.5rem;
          }

          footer a {
            display: flex;
            justify-content: center;
            align-items: center;
          }

          a {
            text-decoration: none;
          }

          code {
            background: #fafafa;
            border-radius: 5px;
            padding: 0.75rem;
            font-size: 1.1rem;
            font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
              DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
          }

          .grid {
            display: flex;
            align-items: flex-start;
            justify-content: center;
            flex-wrap: wrap;
            margin-top: 3rem;
          }

          .col {
            flex: 1;
            margin-right: 1.5rem;
          }

          h3 {
            font-weight: normal;
          }

          h2,
          h4 {
            border-bottom: none;
          }

          h4 {
            font-weight: bold;
          }

          h5 {
            margin-top: 32px;
          }

          h5:first-child {
            margin-top: 16px;
          }

          .card {
            margin: 1rem;
            padding: 1.5rem;
            text-align: left;
            color: inherit;
            text-decoration: none;
            border: 1px solid #eaeaea;
            border-radius: 10px;
            transition: color 0.15s ease, border-color 0.15s ease;
            cursor: pointer;
            text-align: center;
          }

          .card:hover,
          .card:focus,
          .card:active {
            color: #0070f3;
            border-color: #0070f3;
          }

          .card h4 {
            margin: 0;
          }

          .card p {
            margin: 0;
            line-height: 1.5;
          }

          @media (max-width: 600px) {
            .grid {
              width: 100%;
              flex-direction: column;
            }
          }

          .faq {
            margin-top: 36px;
          }
        `}</style>

        <style jsx global>{`
          html,
          body {
            padding: 0;
            margin: 0;
            font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
              Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
              sans-serif;
          }

          * {
            box-sizing: border-box;
          }
        `}</style>
      </div>
    </PageWrapper>
  );
}
