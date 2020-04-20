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
          <h2> Connecting Furloughed Health-Care Providers with Health-Care Facilities in need. </h2>
          <p className="description">
            <strong> Louisiana Health Work Connect</strong> is a program organized by
            the State of Louisiana Dept of Health in response to COVID-19 to help facilities
            with acute healthcare staffing shortages fill those vacancies with qualified candidates
            who are otherwise out of work.
          </p>
          <div className="grid">
            <Link href="/candidate-intake">
              <div className="card">
                <h3>Candidates &rarr;</h3>
                <p>
                  Apply to be considered for employeement at a medical facility
                  in need in need.
                </p>
              </div>
            </Link>

            <Link href="/facility-intake">
              <div className="card">
                <h3>Medical Facilities &rarr;</h3>
                <p>
                  Apply to receive information about the healthcare
                  professionals applying to this program.
                </p>
              </div>
            </Link>
          </div>

          <div className="faq">
            <h3>FAQ </h3>
            <h4>Who can participate? </h4>
            <p>
              Qualified healthcare facilities in the Baton Rouge area in the
              pilot phase that’s live now, then all qualified healthcare
              facilities in Louisiana can participate.

              Licensed or retired furloughed and out of work healthcare workers willing 
              to work in Louisiana can submit their info to be considered for employment.
            </p>

            <h4>How does it work? </h4>
            <p>
              Participating healthcare facilities will directly reach out to
              participating relevant Louisiana Health Work Connect candidates
              to determine whether they are a good fit for their needs.
            </p>

            <h4>I’m an interested healthcare worker.  How do I participate?</h4>
            <p>
              Please fill in <Link href="/candidate-intake">this form</Link> to submit your information.
            </p>

            <h4>I’m an interested Louisiana healthcare facility.  How do I participate?</h4>
            <p>
                Please reach out to your Louisiana Dept of Health representative
                and mention the Louisiana Health Work Connect program.
            </p>
            Other questions or feedback?  Let us know at <a href="mailto:replaceme!!!@example.com">replaceme!!!@example.com</a>.
            For press inquiries, email <a href="mailto:iAmAFakePressOffice@example.com">iAmAFakePressOffice@example.com</a>.
          </div>


        </main>

        <style jsx>{`
          .container {
            min-height: 50vh;
            max-width: 800px;
            padding: 0 0.5rem;
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

          .title a {
            color: #0070f3;
            text-decoration: none;
          }

          .title a:hover,
          .title a:focus,
          .title a:active {
            text-decoration: underline;
          }

          .title {
            margin: 0;
            line-height: 1.15;
            font-size: 4rem;
          }

          .title,
          .description {
            text-align: center;
          }

          .description {
            line-height: 1.5;
            font-size: 1.5rem;
            padding: 1.5rem;
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
            align-items: center;
            justify-content: center;
            flex-wrap: wrap;

            max-width: 800px;
            margin-top: 3rem;
          }

          .faq {
            padding 1.5rem;
          }

          .faq h4 {
            border-bottom: none;
            margin-top: 1rem;
          }

          h2 {
            text-align: center;
            border-bottom: none;
          }

          .card {
            margin: 1rem;
            flex-basis: 45%;
            padding: 1.5rem;
            text-align: left;
            color: inherit;
            text-decoration: none;
            border: 1px solid #eaeaea;
            border-radius: 10px;
            transition: color 0.15s ease, border-color 0.15s ease;
            cursor: pointer;
          }

          .card:hover,
          .card:focus,
          .card:active {
            color: #0070f3;
            border-color: #0070f3;
          }

          .card h3 {
            margin: 0 0 1rem 0;
            font-size: 1.5rem;
          }

          .card p {
            margin: 0;
            font-size: 1.25rem;
            line-height: 1.5;
          }

          @media (max-width: 600px) {
            .grid {
              width: 100%;
              flex-direction: column;
            }
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
