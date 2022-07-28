/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  docs: [
    {
      type: 'doc',
      label: 'What is Praise?',
      id: 'index', 
    },    
    {
      type: 'doc',
      label: 'Getting started', 
      id: 'getting-started', 
    },    
    {
      type: 'category',
      label: 'Run Praise on a server',
      link: {
        type: 'generated-index',
      },
      collapsed: false,
      items: [
        'server-setup/index',
        'server-setup/setup-firewall-and-user',
        'server-setup/configure-ufw-for-docker',
        'server-setup/create-discord-bot',
        'server-setup/upgrade-praise',
        'server-setup/server-scripts'
      ],
    },
    {
      type: 'doc',
      label: 'Run Praise locally', 
      id: 'local-setup/index', 
    },    
  ],
};

module.exports = sidebars;
