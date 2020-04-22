// pages/feedback.js

import FormWrapper from "../components/form-wrapper";

export default function Feedback() {
  return (
    <FormWrapper
      metaTitle="Louisiana Health Work Connect | Feedback"
      contentTitle="Louisiana Health Work Connect"
      contentSubtitle="Feedback"
    >
      <>
        <iframe
          className="airtable-embed airtable-dynamic-height"
          src="https://airtable.com/embed/shr4yfSgyOk9PCZGK?backgroundColor=blue"
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
