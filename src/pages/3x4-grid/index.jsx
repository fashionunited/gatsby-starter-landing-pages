import React from "react";
import Img from "gatsby-image";
import { Grid, GridCell } from "rmwc/Grid";
import styled, { css } from "react-emotion";

const gridStyle = css`
  .gallery-list {
    display: grid;
    grid-gap: 40px 20px;
    grid-template-columns: repeat(2, 1fr);
  }
`;

const StyledIcon = styled.img`
  display: block;
  margin: 0 auto 20px;
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
            <Grid tag="section">
              <GridCell span="4">
                <StyledIcon src="./feature-inspector.1bea11fb2286.svg" alt="" />
                <h3 className="name">Inspector</h3>
                <p className="desc">
                  Inspecteer en verfijn code voor pixel-perfecte vormgevingen.
                </p>
              </GridCell>
              <GridCell span="4">
                <StyledIcon
                  src="/media/img/firefox/developer/feature-console.921a5b1b4ff3.svg"
                  alt=""
                />
                <h3 className="name">Console</h3>
                <p className="desc">
                  Volg problemen met CSS, JavaScript, beveiliging en netwerken.
                </p>
              </GridCell>
              <GridCell span="4">
                <StyledIcon
                  src="/media/img/firefox/developer/feature-debugger.565b6ace82b1.svg"
                  alt=""
                />
                <h3 className="name">Debugger</h3>
                <p className="desc">
                  Krachtige JavaScript-debugger met ondersteuning voor uw
                  framework.
                </p>
              </GridCell>
              <GridCell span="4">
                <StyledIcon
                  src="/media/img/firefox/developer/feature-network.8ed54213a63a.svg"
                  alt=""
                />
                <h3 className="name">Netwerk</h3>
                <p className="desc">
                  Monitor netwerkaanvragen die uw website kunnen vertragen of
                  blokkeren.
                </p>
              </GridCell>
              <GridCell span="4">
                <StyledIcon
                  src="/media/img/firefox/developer/feature-storage.e0bf29e53283.svg"
                  alt=""
                />
                <h3 className="name">Paneel Opslag</h3>
                <p className="desc">
                  Cache, cookies, databases en sessiegegevens toevoegen,
                  aanpassen en verwijderen.
                </p>
              </GridCell>
              <GridCell span="4">
                <StyledIcon
                  src="/media/img/firefox/developer/feature-responsive-mode.63f54a236d3c.svg"
                  alt=""
                />
                <h3 className="name">Responsive Design-modus</h3>
                <p className="desc">
                  Test websites op geëmuleerde apparaten in uw browser.
                </p>
              </GridCell>
              <GridCell span="4">
                <StyledIcon
                  src="/media/img/firefox/developer/feature-visual-editing.8bac0d404383.svg"
                  alt=""
                />
                <h3 className="name">Visueel bewerken</h3>
                <p className="desc">
                  Optimaliseer animaties, uitlijning en opvulling.
                </p>
              </GridCell>
              <GridCell span="4">
                <StyledIcon
                  src="/media/img/firefox/developer/feature-performance.72af346a9aa2.svg"
                  alt=""
                />
                <h3 className="name">Prestaties</h3>
                <p className="desc">
                  Verwijder knelpunten, stroomlijn processen, optimaliseer
                  middelen.
                </p>
              </GridCell>
              <GridCell span="4">
                <StyledIcon
                  src="/media/img/firefox/developer/feature-memory.b1745cbc4afa.svg"
                  alt=""
                />
                <h3 className="name">Geheugen</h3>
                <p className="desc">
                  Vind geheugenlekken en maak uw toepassing supersnel.
                </p>
              </GridCell>
              <GridCell span="4">
                <StyledIcon
                  src="/media/img/firefox/developer/feature-web-audio.0712147eeb45.svg"
                  alt=""
                />
                <h3 className="name">Webaudio</h3>
                <p className="desc">
                  Het enige ontwikkelaarshulpmiddel voor het inspecteren van de
                  Web Audio-API.
                </p>
              </GridCell>
              <GridCell span="4">
                <StyledIcon
                  src="/media/img/firefox/developer/feature-scratchpad.5900e2c49bcd.svg"
                  alt=""
                />
                <h3 className="name">Kladblok</h3>
                <p className="desc">
                  Bewerk, schrijf, test en voer JavaScript in realtime uit.
                </p>
              </GridCell>
              <GridCell span="4">
                <StyledIcon
                  src="/media/img/firefox/developer/feature-style-editor.0bcd5c450a72.svg"
                  alt=""
                />
                <h3 className="name">Stijleditor</h3>
                <p className="desc">
                  Bewerk en beheer al uw CSS-stijlbladen in uw browser.
                </p>
              </GridCell>
            </Grid>
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
