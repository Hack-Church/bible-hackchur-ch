import React from "react";

import Layout from "@rocketseat/gatsby-theme-docs/src/components/Layout";
import SEO from "@rocketseat/gatsby-theme-docs/src/components/SEO";

export default function NotFound() {
  return (
    <Layout title="Whoops, this page doesn't exist yet">
      <SEO title="404" />
      <img
        src="https://media.giphy.com/media/YQitE4YNQNahy/giphy.gif"
        alt="super 1337"
      />
      <br />
      <p>
        {"Why don't you "}
        <a href="https://github.com/Hack-Church/bible-hackchur-ch">write it</a>
        {"!?"}
      </p>
    </Layout>
  );
}
