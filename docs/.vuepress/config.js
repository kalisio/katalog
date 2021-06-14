module.exports = {
  base: '/katalog/',
  title: 'Katalog',
  description: 'The Kalisio geospatial catalog',
  head: [
    ['link', { rel: 'icon', href: `https://s3.eu-central-1.amazonaws.com/kalisioscope/kano/kano-icon-64x64.png` }],
    ['link', { rel: 'manifest', href: '/manifest.json' }]
  ],
  theme: 'kalisio',
  themeConfig: {
    docsDir: 'docs',
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
      children: ['natural_risks/global_information', 'natural_risks/floods', 'natural_risks/forest_fires', 'natural_risks/ground_movements', 'natural_risks/clay', 'natural_risks/earthquakes', 'natural_risks/underground_cavities', 'natural_risks/volcanism', 'natural_risks/radon']      
    },
    { 
      title: 'Technological_risks',
      children: ['technological_risks/global_information','technological_risks/classified_installations', 'technological_risks/pipe_networks', 'technological_risks/pollutant_emissions', 'technological_risks/soils_industrial_sites' ]
    }
  ]
}
