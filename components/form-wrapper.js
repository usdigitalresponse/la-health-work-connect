// components/form-wapper.js

import PageWrapper from "./page-wrapper";

export default function FormWrapper({ children, ...props }) {
  return (
    <PageWrapper {...props}>
      <script src="https://static.airtable.com/js/embed/embed_snippet_v1.js"></script>
      {children}
    </PageWrapper>
  );
}
