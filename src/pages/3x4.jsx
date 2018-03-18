import React from "react";
import Img from "gatsby-image";
import { Grid, GridCell } from "rmwc/Grid";
import styled, { css } from "react-emotion";

const gridStyle = css`
  .section-features {
    background: #1f2534;
    color: #fff;
    z-index: 10;
  }
  @media screen and (min-width: 760px) {
    .section-features:before {
      -webkit-background-size: 3000px 108px;
      background-size: 3000px 108px;
      background-position: center bottom;
      background-repeat: no-repeat;
      content: "";
      display: block;
      left: 0;
      position: absolute;
      width: 100%;
      visibility: visible;
      z-index: 10;
      background-image: url("/media/img/firefox/developer/curve-features-top.6f18a86e68c2.svg");
      height: 108px;
      top: -108px;
    }
    .section-features:after {
      -webkit-background-size: 3000px 182px;
      background-size: 3000px 182px;
      background-position: center bottom;
      background-repeat: no-repeat;
      content: "";
      display: block;
      left: 0;
      position: absolute;
      width: 100%;
      visibility: visible;
      z-index: 10;
      background-image: url("/media/img/firefox/developer/curve-features-bottom.016096b864a7.svg");
      bottom: -181px;
      height: 182px;
    }
    .section-features .features-list {
      margin: 40px auto -20px;
    }
  }
  .features-list .feature {
    text-align: center;
  }
  .features-list .icon {
    display: block;
    margin: 0 auto 20px;
  }
  .features-list .name {
    font-size: 14px;
    font-size: 0.77778rem;
    color: #fff;
    font-weight: 400;
    text-transform: uppercase;
  }
  @media screen and (min-width: 760px) {
    .features-list .name {
      font-size: 16px;
      font-size: 0.88889rem;
    }
  }
  @media screen and (min-width: 1000px) {
    .features-list .name {
      font-size: 18px;
      font-size: 1rem;
    }
  }
  .features-list .desc {
    font-size: 12px;
    font-size: 0.66667rem;
    margin: 1em 20px;
  }
  @media screen and (min-width: 760px) {
    .features-list .desc {
      font-size: 14px;
      font-size: 0.77778rem;
    }
  }
  .gallery-list {
    zoom: 1;
  }
  .gallery-list:after {
    clear: both;
    content: "";
    display: block;
    height: 0;
    visibility: hidden;
  }
  .gallery-list .gallery-item {
    margin-bottom: 40px;
  }
  @media screen and (min-width: 480px) {
    .gallery-list .gallery-item {
      -webkit-box-sizing: border-box;
      -moz-box-sizing: border-box;
      box-sizing: border-box;
      float: left;
      width: 49.998%;
      padding-left: 10px;
      padding-right: 10px;
    }
    .gallery-list .gallery-item:nth-child(2n + 1) {
      clear: left;
    }
  }
  @media screen and (min-width: 760px) {
    .gallery-list .gallery-item {
      -webkit-box-sizing: border-box;
      -moz-box-sizing: border-box;
      box-sizing: border-box;
      float: left;
      width: 33.332%;
      padding-left: 10px;
      padding-right: 10px;
    }
    .gallery-list .gallery-item:nth-child(2n + 1) {
      clear: none;
    }
    .gallery-list .gallery-item:nth-child(3n + 1) {
      clear: left;
    }
  }
  @supports (display: grid) {
    @media screen and (min-width: 480px) {
      .gallery-list {
        display: grid;
        grid-gap: 40px 20px;
        grid-template-columns: repeat(2, 1fr);
      }
      .gallery-list:after {
        content: none;
      }
      .gallery-list .gallery-item {
        clear: none;
        float: none;
        margin: 0;
        padding: 0;
        width: auto;
      }
    }
    @media screen and (min-width: 760px) {
      .gallery-list {
        grid-gap: 40px 60px;
        grid-template-columns: repeat(3, 1fr);
      }
    }
  }
`;

const Features = ({ data }) => (
  <div>
    <Grid tag="section">
      <GridCell span="3" />
      <GridCell span="6">
        <div className="content">
          <h2 className="section-title">
            <span>Ontwerp. Schrijf code. Test. Verfijn.</span>
          </h2>
          <div className="section-body">
            <h3 className="body-title">
              Bouw en optimaliseer uw websites met
              Firefox-ontwikkelaarshulpmiddelen
            </h3>
            <ul className="features-list gallery-list has-three-cols">
              <li className="gallery-item feature">
                <img
                  className="icon"
                  src="/media/img/firefox/developer/feature-inspector.1bea11fb2286.svg"
                  alt=""
                />
                <h3 className="name">Inspector</h3>
                <p className="desc">
                  Inspecteer en verfijn code voor pixel-perfecte vormgevingen.
                </p>
              </li>
              <li className="gallery-item feature">
                <img
                  className="icon"
                  src="/media/img/firefox/developer/feature-console.921a5b1b4ff3.svg"
                  alt=""
                />
                <h3 className="name">Console</h3>
                <p className="desc">
                  Volg problemen met CSS, JavaScript, beveiliging en netwerken.
                </p>
              </li>
              <li className="gallery-item feature">
                <img
                  className="icon"
                  src="/media/img/firefox/developer/feature-debugger.565b6ace82b1.svg"
                  alt=""
                />
                <h3 className="name">Debugger</h3>
                <p className="desc">
                  Krachtige JavaScript-debugger met ondersteuning voor uw
                  framework.
                </p>
              </li>
              <li className="gallery-item feature">
                <img
                  className="icon"
                  src="/media/img/firefox/developer/feature-network.8ed54213a63a.svg"
                  alt=""
                />
                <h3 className="name">Netwerk</h3>
                <p className="desc">
                  Monitor netwerkaanvragen die uw website kunnen vertragen of
                  blokkeren.
                </p>
              </li>
              <li className="gallery-item feature">
                <img
                  className="icon"
                  src="/media/img/firefox/developer/feature-storage.e0bf29e53283.svg"
                  alt=""
                />
                <h3 className="name">Paneel Opslag</h3>
                <p className="desc">
                  Cache, cookies, databases en sessiegegevens toevoegen,
                  aanpassen en verwijderen.
                </p>
              </li>
              <li className="gallery-item feature">
                <img
                  className="icon"
                  src="/media/img/firefox/developer/feature-responsive-mode.63f54a236d3c.svg"
                  alt=""
                />
                <h3 className="name">Responsive Design-modus</h3>
                <p className="desc">
                  Test websites op geëmuleerde apparaten in uw browser.
                </p>
              </li>
              <li className="gallery-item feature">
                <img
                  className="icon"
                  src="/media/img/firefox/developer/feature-visual-editing.8bac0d404383.svg"
                  alt=""
                />
                <h3 className="name">Visueel bewerken</h3>
                <p className="desc">
                  Optimaliseer animaties, uitlijning en opvulling.
                </p>
              </li>
              <li className="gallery-item feature">
                <img
                  className="icon"
                  src="/media/img/firefox/developer/feature-performance.72af346a9aa2.svg"
                  alt=""
                />
                <h3 className="name">Prestaties</h3>
                <p className="desc">
                  Verwijder knelpunten, stroomlijn processen, optimaliseer
                  middelen.
                </p>
              </li>
              <li className="gallery-item feature">
                <img
                  className="icon"
                  src="/media/img/firefox/developer/feature-memory.b1745cbc4afa.svg"
                  alt=""
                />
                <h3 className="name">Geheugen</h3>
                <p className="desc">
                  Vind geheugenlekken en maak uw toepassing supersnel.
                </p>
              </li>
              <li className="gallery-item feature">
                <img
                  className="icon"
                  src="/media/img/firefox/developer/feature-web-audio.0712147eeb45.svg"
                  alt=""
                />
                <h3 className="name">Webaudio</h3>
                <p className="desc">
                  Het enige ontwikkelaarshulpmiddel voor het inspecteren van de
                  Web Audio-API.
                </p>
              </li>
              <li className="gallery-item feature">
                <img
                  className="icon"
                  src="/media/img/firefox/developer/feature-scratchpad.5900e2c49bcd.svg"
                  alt=""
                />
                <h3 className="name">Kladblok</h3>
                <p className="desc">
                  Bewerk, schrijf, test en voer JavaScript in realtime uit.
                </p>
              </li>
              <li className="gallery-item feature">
                <img
                  className="icon"
                  src="/media/img/firefox/developer/feature-style-editor.0bcd5c450a72.svg"
                  alt=""
                />
                <h3 className="name">Stijleditor</h3>
                <p className="desc">
                  Bewerk en beheer al uw CSS-stijlbladen in uw browser.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </GridCell>
      <GridCell span="3" />
    </Grid>
  </div>
);

export default Features;

export const query = graphql`
  query FeaturesQuery {
    reddImageMobile: imageSharp(id: { regex: "/redd/" }) {
      resolutions(width: 125) {
        ...GatsbyImageSharpResolutions_withWebp
      }
    }
    reddImage: imageSharp(id: { regex: "/redd/" }) {
      resolutions(width: 200) {
        ...GatsbyImageSharpResolutions_withWebp
      }
    }
    kenImage: imageSharp(id: { regex: "/ken-treloar/" }) {
      sizes(maxWidth: 600) {
        ...GatsbyImageSharpSizes_withWebp
      }
    }
  }
`;
