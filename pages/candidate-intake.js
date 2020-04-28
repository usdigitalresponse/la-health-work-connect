// pages/candidate-intake.js

import { CANDIDATE_FORM } from "../utils/constants";

export default function () {
  return (
    <div>
      <p>
        Redirecting you to <a href={CANDIDATE_FORM}>{CANDIDATE_FORM}</a>
      </p>
      <script
        dangerouslySetInnerHTML={{
          __html: `
          window.location.href = "${CANDIDATE_FORM}";
        `,
        }}
      ></script>
    </div>
  );
}
