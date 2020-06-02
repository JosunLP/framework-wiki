const React = require('react');

const CompLibrary = require('../../core/CompLibrary.js');

const MarkdownBlock = CompLibrary.MarkdownBlock; /* Used to read markdown */
const Container = CompLibrary.Container;
const GridBlock = CompLibrary.GridBlock;

class HomeSplash extends React.Component {
        render() {
                const { siteConfig, language = '' } = this.props;
                const { baseUrl, docsUrl } = siteConfig;
                const docsPart = `${docsUrl ? `${docsUrl}/` : ''}`;
    const langPart = `${language ? `${language}/` : ''}`;
    const docUrl = doc => `${baseUrl}${docsPart}${langPart}${doc}`;

    const SplashContainer = props => (
      <div className="homeContainer">
        <div className="homeSplashFade">
          <div className="wrapper homeWrapper">{props.children}</div>
        </div>
      </div>
    );

    const Logo = props => (
      <div className="projectLogo">
        <img src={props.img_src} alt="Project Logo" />
      </div>
    );

    const ProjectTitle = props => (
      <h2 className="projectTitle">
        {props.title}
        <small>{props.tagline}</small>
      </h2>
    );

    const PromoSection = props => (
      <div className="section promoSection">
        <div className="promoRow">
          <div className="pluginRowBlock">{props.children}</div>
        </div>
      </div>
    );

    const Button = props => (
      <div className="pluginWrapper buttonWrapper">
        <a className="button" href={props.href} target={props.target}>
          {props.children}
        </a>
      </div>
    );

    return (
      <SplashContainer>
        <div className="inner">
          <ProjectTitle tagline={siteConfig.tagline} title={siteConfig.title} />
          <PromoSection>
            <Button href={docUrl('doc1.html')}>Try It Out</Button>
          </PromoSection>
        </div>
      </SplashContainer>
    );
  }
}

class Index extends React.Component {
  render() {
    const {config: siteConfig, language = ''} = this.props;
    const {baseUrl} = siteConfig;

    const Block = props => (
      <Container
        padding={['bottom', 'top']}
        id={props.id}
        background={props.background}>
        <GridBlock
          align="center"
          contents={props.children}
          layout={props.layout}
        />
      </Container>
    );

    const FeatureCallout = () => (
      <div
        className="productShowcaseSection paddingBottom"
        style={{textAlign: 'center'}}>
        <h2>Feature Callout</h2>
        <div id="features">
          <h3>Modularity</h3>
          <span>The framework can be modified extremely quickly to meet the requirements of many projects.</span>
          <h3>Flexibility</h3>
          <span>Because of the possibility to use third party plugins and the three native interfaces, the framework could be used for a large span of projects.</span>
        </div>
      </div>
    );

    const PublishButton = () => (
      <div
      className = "publishButton"
      style={{textAlign: 'center'}}
      >
      <h1>Get it now!</h1>
      < a href = "https://github.com/WAPS-Project/WAPS-Framework/archive/v1.5.3.zip" >
      <button
      className = "button"
      >
        Download v1.5.4
      </button>
      </a>
        
      </div>
    );

    const Description = () => (
      <Block background="dark">
        {[
          {
            content:
              'The WAPS framework is designed to accelerate the development of PHP backend applications.' +
                ' It offers the possibility of additional, flexible frontend and, thanks to its modularity and its mod support,' +
                ' offers the possibility to expand this with additional modules even after the development of a project.',
            image: `${baseUrl}img/waps.png`,
            imageAlign: 'right',
            title: 'Description',
          },
        ]}
      </Block>
    );

    const Features = () => (
      <Block layout="fourColumn">
        {[
          {
            content: 'Since the framework was designed modularly, ' +
                'an expansion using mods is quickly implemented. ' +
                'Framework components can also be quickly and easily adapted and expanded.',
            image: `${baseUrl}img/flex.svg`,
            imageAlign: 'top',
            title: 'Flexibility',
          },
          {
            content: 'With its three standardized interfaces for CLI,' +
                ' API and frontend, the framework is able to cover a wide range of application types.',
            image: `${baseUrl}img/vers.svg`,
            imageAlign: 'top',
            title: 'Versatility',
          },
        ]}
      </Block>
    );

    const Showcase = () => {
      if ((siteConfig.users || []).length === 0) {
        return null;
      }

      const showcase = siteConfig.users
        .filter(user => user.pinned)
        .map(user => (
          <a href={user.infoLink} key={user.infoLink}>
            <img src={user.image} alt={user.caption} title={user.caption} />
          </a>
        ));

      const pageUrl = page => baseUrl + (language ? `${language}/` : '') + page;

      return (
        <div className="productShowcaseSection paddingBottom">
          <h2>Who is Using This?</h2>
          <p>This project is used by these people</p>
          <div className="logos">{showcase}</div>
          <div className="more-users">
            <a className="button" href={pageUrl('users.html')}>
              More {siteConfig.title} Users
            </a>
          </div>
        </div>
      );
    };

    return (
      <div>
        <HomeSplash siteConfig={siteConfig} language={language} />
        <div className="mainContainer">
          <Features />          
          <FeatureCallout />
          <PublishButton />
          <Description />
          <Showcase />
        </div>
      </div>
    );
  }
}

module.exports = Index;