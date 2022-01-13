
import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug','3d6'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config','914'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content','c28'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData','3cf'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata','31b'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry','0da'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes','244'),
    exact: true
  },
  {
    path: '/blog/archive',
    component: ComponentCreator('/blog/archive','f4c'),
    exact: true
  },
  {
    path: '/Foo/',
    component: ComponentCreator('/Foo/','1a8'),
    exact: true
  },
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page','be1'),
    exact: true
  },
  {
    path: '/docs/1.0',
    component: ComponentCreator('/docs/1.0','0f6'),
    routes: [
      {
        path: '/docs/1.0/intro',
        component: ComponentCreator('/docs/1.0/intro','848'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/1.0/tutorial-basics/congratulations',
        component: ComponentCreator('/docs/1.0/tutorial-basics/congratulations','6cd'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/1.0/tutorial-basics/create-a-blog-post',
        component: ComponentCreator('/docs/1.0/tutorial-basics/create-a-blog-post','ce3'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/1.0/tutorial-basics/create-a-document',
        component: ComponentCreator('/docs/1.0/tutorial-basics/create-a-document','afa'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/1.0/tutorial-basics/create-a-page',
        component: ComponentCreator('/docs/1.0/tutorial-basics/create-a-page','002'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/1.0/tutorial-basics/deploy-your-site',
        component: ComponentCreator('/docs/1.0/tutorial-basics/deploy-your-site','d3b'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/1.0/tutorial-basics/markdown-features',
        component: ComponentCreator('/docs/1.0/tutorial-basics/markdown-features','8f7'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/1.0/tutorial-extras/manage-docs-versions',
        component: ComponentCreator('/docs/1.0/tutorial-extras/manage-docs-versions','7af'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/1.0/tutorial-extras/translate-your-site',
        component: ComponentCreator('/docs/1.0/tutorial-extras/translate-your-site','7a3'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/1.0/tutorial-markdown/markdown-format',
        component: ComponentCreator('/docs/1.0/tutorial-markdown/markdown-format','0e0'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/1.0/tutorial-markdown/mdx-format',
        component: ComponentCreator('/docs/1.0/tutorial-markdown/mdx-format','f03'),
        exact: true,
        'sidebar': "tutorialSidebar"
      }
    ]
  },
  {
    path: '/docs/1.1',
    component: ComponentCreator('/docs/1.1','7a3'),
    routes: [
      {
        path: '/docs/1.1/components/button',
        component: ComponentCreator('/docs/1.1/components/button','93a'),
        exact: true,
        'sidebar': "tutorialSidebar"
      }
    ]
  },
  {
    path: '/docs/next',
    component: ComponentCreator('/docs/next','edf'),
    routes: [
      {
        path: '/docs/next/components/button',
        component: ComponentCreator('/docs/next/components/button','7f7'),
        exact: true,
        'sidebar': "tutorialSidebar"
      }
    ]
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs','0d7'),
    routes: [
      {
        path: '/docs/components/button',
        component: ComponentCreator('/docs/components/button','680'),
        exact: true,
        'sidebar': "tutorialSidebar"
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/','f49'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*')
  }
];
