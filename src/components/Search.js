import React, { Fragment, useState, useEffect } from 'react';
import { Global, css } from '@emotion/core';
import { DocSearch } from '@docsearch/react';

const Search = () => (
  <Fragment>
    <Global
      styles={css`
        :root {
          --docsearch-primary-color: #ff6b81;
          --docsearch-text-color: rgb(245, 246, 247);
          --docsearch-container-background: rgba(9, 10, 17, 0.8);
          --docsearch-modal-background: #281e36;
          --docsearch-modal-shadow: inset 1px 1px 0 0 rgb(44, 46, 64),
            0 3px 8px 0 rgb(0, 3, 9);
          --docsearch-searchbox-background: rgb(9, 10, 17);
          --docsearch-searchbox-focus-background: #000;
          --docsearch-hit-color: rgb(190, 195, 201);
          --docsearch-hit-shadow: none;
          --docsearch-hit-background: rgb(9, 10, 17);
          --docsearch-key-gradient: linear-gradient(
            -26.5deg,
            rgb(114 86 111) 0%,
            rgb(65 46 80) 100%
          );
          --docsearch-key-shadow: inset 0 -2px 0 0 rgb(81 31 82),
            inset 0 0 1px 1px rgb(125 81 111), 0 2px 2px 0 rgba(3, 4, 9, 0.3);
          --docsearch-footer-background: #2f263c;
          --docsearch-footer-shadow: inset 0 1px 0 0 rgba(73, 76, 106, 0.5),
            0 -4px 8px 0 rgba(0, 0, 0, 0.2);
          --docsearch-logo-color: #fff;
          --docsearch-muted-color: rgb(127, 132, 151);
          --docsearch-key-shadow: inset 0 -2px 0 0 rgb(40, 45, 85),
            inset 0 0 1px 1px rgb(81, 87, 125), 0 2px 2px 0 rgba(3, 4, 9, 0.3);
          --docsearch-footer-background: #2f263c;
          --docsearch-footer-shadow: inset 0 1px 0 0 rgba(73, 76, 106, 0.5),
            0 -4px 8px 0 rgba(0, 0, 0, 0.2);
          --docsearch-logo-color: rgb(255, 255, 255);
          --docsearch-muted-color: rgb(127, 132, 151);

          .DocSearch-Button {
            --docsearch-searchbox-background: rgb(235, 237, 240);
            --docsearch-searchbox-focus-background: #fff;
            --docsearch-text-color: rgb(28, 30, 33);
            --docsearch-muted-color: rgb(150, 159, 175);
            --docsearch-key-gradient: linear-gradient(
              -225deg,
              rgb(213, 219, 228) 0%,
              rgb(248, 248, 248) 100%
            );
            --docsearch-searchbox-shadow: 0 0 0 4px rgba(0, 0, 0, 0.3);
            --docsearch-key-shadow: inset 0 -2px 0 0 rgb(205, 205, 230),
              inset 0 0 1px 1px #fff, 0 1px 2px 1px rgba(30, 35, 90, 0.4);
          }
        }

        .DocSearch-Button {
          margin: 10px;
          height: 39px;
        }

        .DocSearch-Button-Placeholder {
          width: 100%;
          text-align: left;
        }

        .DocSearch-Search-Icon {
          width: 28px;
        }

        .DocSearch-Modal {
          a {
            border-bottom-style: none;
          }
        }

        @media (max-width: 750px) {
          .DocSearch-Button-KeySeparator,
          .DocSearch-Button-Key {
            display: flex;
          }

          .DocSearch-Button-Placeholder {
            display: flex;
          }
        }
      `}
    />
    <DocSearch apiKey="d5fa05c4e33e776fbf2b8021cbc15b37" indexName="popper" />
  </Fragment>
);

export default Search;
