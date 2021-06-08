module.exports = {
  base: '/kano/',
  port: 8888,
  title: 'Kano',
  description: 'The Kalisio geospatial application',
  head: [
    ['link', { rel: 'icon', href: `https://s3.eu-central-1.amazonaws.com/kalisioscope/kano/kano-icon-64x64.png` }],
    ['link', { rel: 'manifest', href: '/manifest.json' }]
  ],
  theme: 'kalisio',
  themeConfig: {
    nav: [
      { text: 'About', link: '/about/' },
      { text: 'Guides', link: '/guides/' },
      { text: 'Ressources', link: '/ressources/' }
    ],
    sidebar: {
      '/about/': getAboutSidebar(),
      '/guides/': getGuidesSidebar(),
      '/ressources/': getRessourcesSidebar()
    }
  }
}

function getAboutSidebar () {
  return [
    '',
    'roadmap',
    'contributing',
    'license',
    'contact'
  ] 
}

function getGuidesSidebar () {
  return [
    '',
    { 
      title: 'The Basics',
      children: [ 'basics/step-by-step' ]
    },
    {
      title: 'Development',
      children: ['development/setup', 'development/develop', 'development/configure', 'development/deploy', 'development/publish' ] 
    }
  ]
}

function getRessourcesSidebar () {
  return [
    '',
    { 
      title: 'Issues',
      children: ['ressources/issues/population', 'ressources/issues/communications' ]
    },
    {
      title: 'Natural risks',
      children: ['ressources/natural_risks/clay', 'ressources/natural_risks/earthquakes', 'ressources/natural_risks/floods', 'ressources/natural_risks/forest_fires', 'ressources/natural_risks/ground_movements', 'ressources/natural_risks/radon', 'ressources/natural_risks/underground_cavities', 'ressources/natural_risks/volcanism' ]      
    },
    { 
      title: 'technological_risks',
      children: ['ressources/technological_risks/classified_installations', 'ressources/technological_risks/pipe_networks', 'ressources/technological_risks/pollutant_emissions', 'ressources/technological_risks/soils_industrial_sites' ]
    }
  ]
}