// pages/candidate-intake.js

import FormWrapper from "../components/form-wrapper";
import { useRouter } from 'next/router'


export default function CandidateIntake() {
  const router = useRouter();
  const { source } = router.query;
  const prefillParam = source != undefined ? `&prefill_Source=${source}` : '';
  const embedLink = `https://airtable.com/embed/shrSe8ynS4Q5WkNCP?backgroundColor=blue${prefillParam}`;
  return (
    <FormWrapper
      metaTitle="Louisiana Health Work Connect | Candidate Intake"
      contentTitle="Louisiana Health Work Connect"
      contentSubtitle="Candidate Intake"
    >
      <>
        <iframe
          className="airtable-embed airtable-dynamic-height"
          src={embedLink}
          frameBorder="0"
          width="100%"
          height="8680"
          onWheel={() => null}
        ></iframe>
        <style jsx>
          {`
            iframe {
              background: transparent;
              border: 1px solid #ccc;
            }
          `}
        </style>
      </>
    </FormWrapper>
  );
}
