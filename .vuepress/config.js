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
    'license',
    'contact'
  ] 
}

function getGuidesSidebar () {
  return [
    '',
    'faq',
    'step-by-step'
  ]
}

function getRessourcesSidebar () {
  return [
    '',
    { 
      title: 'Issues',
      children: ['issues/population', 'issues/communications' ]
    },
    {
      title: 'Natural risks',
      children: ['natural_risks/clay', 'natural_risks/earthquakes', 'natural_risks/floods', 'natural_risks/forest_fires', 'natural_risks/ground_movements', 'natural_risks/radon', 'natural_risks/underground_cavities', 'natural_risks/volcanism' ]      
    },
    { 
      title: 'technological_risks',
      children: ['technological_risks/classified_installations', 'technological_risks/pipe_networks', 'technological_risks/pollutant_emissions', 'technological_risks/soils_industrial_sites' ]
    }
  ]
}