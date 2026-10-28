import{__decorate as e}from"../../../../../_virtual/_tslib.js";import"../../../../@lit/reactive-element/reactive-element.js";import{html as t}from"../../../../lit-html/lit-html.js";import"../../../../lit-element/lit-element.js";import{property as i}from"../../../../@lit/reactive-element/decorators/property.js";import{state as s}from"../../../../@lit/reactive-element/decorators/state.js";import l from"../../base/sgds-element.js";import o from"./masthead.js";import r from"../../styles/svg.js";import n from"../../styles/anchor.js";class a extends l{constructor(){super(...arguments),this.fluid=!1,this.toggleVisibility=!1}_handleKeydown(e){"Enter"!==e.key&&" "!==e.key||(e.preventDefault(),this._toggleVisibility())}_toggleVisibility(){this.toggleVisibility=!this.toggleVisibility}render(){return t`
      <div id="sgds-masthead" class="sgds-masthead">
        <div class="banner">
          <div class="container">
            <div class="masthead-layout">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                class="sg-crest"
                viewBox="0 0 20 20"
                fill="none"
              >
                <path
                  d="M4.31179 7.0109C4.31179 7.0109 3.78527 7.78129 4.4749 8.77746C4.4749 8.77746 4.58365 8.27018 5.67275 8.27018H6.97989C8.21435 8.27018 9.13979 7.04881 8.55889 5.78895C8.55889 5.78895 9.42995 5.88317 9.72123 5.31901C10.0114 4.75544 9.70292 4.52966 9.26739 4.52966H7.07088C7.07088 4.9341 6.32687 4.9904 6.32687 4.52966H5.09241C5.09241 4.52966 4.16643 4.52966 4.14867 5.33797C4.14867 5.33797 4.35784 5.20641 4.56589 5.18803V5.40346C4.56589 5.40346 4.31179 5.45057 4.19361 5.51664C4.07599 5.58213 3.90344 5.7608 4.06711 6.22154C4.23023 6.68171 4.29403 6.84142 4.29403 6.84142C4.29403 6.84142 4.55757 6.60588 4.98422 6.60588H5.48356C6.37237 6.60588 6.20925 7.49864 5.31989 7.49864C4.43052 7.49864 4.3129 7.01032 4.3129 7.01032L4.31179 7.0109Z"
                  fill="currentColor"
                />
                <path
                  d="M8.94948 6.0808C8.94948 6.0808 9.24908 6.09976 9.46657 5.90271C9.46657 5.90271 11.4362 7.49118 8.51395 10.6859C5.59118 13.8813 7.85094 15.9494 7.85094 15.9494C7.85094 15.9494 7.32498 16.4751 7.62402 17.5C7.62402 17.5 6.40843 16.7894 5.47856 15.5823C4.13479 13.8382 3.31367 11.1697 7.00374 9.04116C7.00374 9.04116 9.43938 7.77268 8.94948 6.0808Z"
                  fill="currentColor"
                />
                <path
                  d="M5.93914 4.22922C5.93914 4.22922 6.33251 3.50249 7.24573 3.50249C7.96588 3.50249 8.13011 3.11988 8.13011 3.11988C8.13011 3.11988 8.44413 2.5 10.0298 2.5C11.4829 2.5 12.4621 3.00153 13.2544 3.67139C13.2544 3.67139 11.1183 2.2995 9.01282 4.22922H5.93914Z"
                  fill="currentColor"
                />
                <path
                  d="M14.8217 8.828C14.7612 6.5599 13.0668 4.12922 9.42448 4.2671C12.9825 1.14703 19.1543 8.11333 14.0711 11.7734C14.0711 11.7734 14.9216 10.517 14.8217 8.828Z"
                  fill="currentColor"
                />
                <path
                  d="M9.96927 4.51761C14.4106 4.37973 15.9962 9.89315 13.1278 12.3744L10.2478 13.8158C10.2478 13.8158 9.87273 12.5628 11.2648 11.0961C12.6568 9.6306 13.9994 6.88625 10.1518 5.08177C10.1518 5.08177 10.2245 4.70605 9.97038 4.51819L9.96927 4.51761Z"
                  fill="currentColor"
                />
                <path
                  d="M9.73904 5.75795C9.73904 5.75795 9.95708 5.54481 10.0298 5.36959C13.3331 6.79778 12.8133 9.21697 10.8403 11.2467C9.63029 12.537 10.0053 13.9284 10.0053 13.9284C10.0053 13.9284 8.52954 14.8803 8.02078 15.7076C8.02078 15.7076 5.88363 13.8233 8.84357 10.6957C11.748 7.62563 9.73904 5.75795 9.73904 5.75795Z"
                  fill="currentColor"
                />
              </svg>
              <div class="masthead-text-layout">
                <span>A Singapore Government Agency Website</span>
                <div
                  class="sgds-masthead-button"
                  id="sgds-masthead-identify"
                  role="button"
                  tabindex="0"
                  aria-expanded="${this.toggleVisibility}"
                  aria-controls="sgds-masthead-content"
                  @keydown=${this._handleKeydown}
                  @click=${this._toggleVisibility}
                >
                  <span>How to identify</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    class="sgds-masthead-identify-icon ${this.toggleVisibility?"show":null}"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M9.64645 7.14645C9.84171 6.95118 10.1583 6.95118 10.3536 7.14645L15.3536 12.1464C15.5488 12.3417 15.5488 12.6583 15.3536 12.8536C15.1583 13.0488 14.8417 13.0488 14.6464 12.8536L10 8.20711L5.35355 12.8536C5.15829 13.0488 4.84171 13.0488 4.64645 12.8536C4.45118 12.6583 4.45118 12.3417 4.64645 12.1464L9.64645 7.14645Z"
                      fill="currentColor"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="panel">
          <div
            id="sgds-masthead-content"
            class="container sgds-masthead-content ${this.toggleVisibility?"show":null}"
          >
            <div class="content-grid">
              <div class="wrapper">
                <div class="icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    class="banner-icon"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M2 5.85166C2 5.61356 2.12699 5.39354 2.33315 5.27442L7.66648 2.19294C7.87284 2.07371 8.12716 2.07371 8.33352 2.19294L13.6669 5.27442C13.873 5.39354 14 5.61356 14 5.85166V6.66691C14 7.0351 13.7015 7.33357 13.3333 7.33357H12.6667V12.0002H13.3333C13.7015 12.0002 14 12.2987 14 12.6669V13.3336C14 13.7018 13.7015 14.0002 13.3333 14.0002H2.66667C2.29848 14.0002 2 13.7018 2 13.3336V12.6669C2 12.2987 2.29848 12.0002 2.66667 12.0002H3.33333V7.33357H2.66667C2.29848 7.33357 2 7.0351 2 6.66691V5.85166ZM5.33333 7.33357V12.0002H7V7.33357H5.33333ZM9 7.33357V12.0002H10.6667V7.33357H9ZM9 5.00024C9 5.55252 8.55229 6.00024 8 6.00024C7.44772 6.00024 7 5.55252 7 5.00024C7 4.44795 7.44772 4.00024 8 4.00024C8.55229 4.00024 9 4.44795 9 5.00024Z"
                      fill="currentColor"
                    />
                  </svg>
                </div>
                <div class="content">
                  <div class="title">Official website links end with .gov.sg</div>
                  <article>Government agencies communicate via .gov.sg websites (e.g. go.gov.sg/open).</article>
                  <a
                    href="https://www.gov.sg/trusted-sites#govsites"
                    class="trusted-websites-link"
                    rel="noreferrer"
                    target="_blank"
                    >Trusted websites</a
                  >
                </div>
              </div>
              <div class="wrapper">
                <div class="icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    class="banner-icon"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M5.3335 6.66683H5.00016C4.07969 6.66683 3.3335 7.41302 3.3335 8.3335V13.0002C3.3335 13.9206 4.07969 14.6668 5.00016 14.6668H12.3335C13.254 14.6668 14.0002 13.9206 14.0002 13.0002V8.3335C14.0002 7.41302 13.254 6.66683 12.3335 6.66683H12.0002V4.66683C12.0002 2.82588 10.5078 1.3335 8.66683 1.3335C6.82588 1.3335 5.3335 2.82588 5.3335 4.66683V6.66683ZM6.66683 6.66683H10.6668V4.66683C10.6668 3.56226 9.7714 2.66683 8.66683 2.66683C7.56226 2.66683 6.66683 3.56226 6.66683 4.66683V6.66683Z"
                      fill="currentColor"
                    />
                  </svg>
                </div>
                <div class="content">
                  <div class="title">Secure websites use HTTPS</div>
                  <article>
                    Look for a lock (<svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      class="banner-icon-inline"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M5.83331 8.33317H5.41665C4.26605 8.33317 3.33331 9.26591 3.33331 10.4165V16.2498C3.33331 17.4004 4.26605 18.3332 5.41665 18.3332H14.5833C15.7339 18.3332 16.6666 17.4004 16.6666 16.2498V10.4165C16.6666 9.26591 15.7339 8.33317 14.5833 8.33317H14.1666V5.83317C14.1666 3.53198 12.3012 1.6665 9.99998 1.6665C7.69879 1.6665 5.83331 3.53198 5.83331 5.83317V8.33317ZM7.49998 8.33317H12.5V5.83317C12.5 4.45246 11.3807 3.33317 9.99998 3.33317C8.61927 3.33317 7.49998 4.45246 7.49998 5.83317V8.33317Z"
                        fill="currentColor"
                      /></svg
                    >) or https:// as an added precaution. Share sensitive information only on official, secure
                    websites.
                  </article>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    `}}a.styles=[...l.styles,r,n,o],e([i({type:Boolean,reflect:!0})],a.prototype,"fluid",void 0),e([s()],a.prototype,"toggleVisibility",void 0);export{a as SgdsMasthead,a as default};
//# sourceMappingURL=sgds-masthead.js.map
