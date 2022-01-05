
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
    path: '/blog',
    component: ComponentCreator('/blog','945'),
    exact: true
  },
  {
    path: '/blog/archive',
    component: ComponentCreator('/blog/archive','f4c'),
    exact: true
  },
  {
    path: '/blog/first-blog-post',
    component: ComponentCreator('/blog/first-blog-post','6c7'),
    exact: true
  },
  {
    path: '/blog/greetings',
    component: ComponentCreator('/blog/greetings','3aa'),
    exact: true
  },
  {
    path: '/blog/long-blog-post',
    component: ComponentCreator('/blog/long-blog-post','f06'),
    exact: true
  },
  {
    path: '/blog/mdx-blog-post',
    component: ComponentCreator('/blog/mdx-blog-post','bee'),
    exact: true
  },
  {
    path: '/blog/tags',
    component: ComponentCreator('/blog/tags','e13'),
    exact: true
  },
  {
    path: '/blog/tags/docusaurus',
    component: ComponentCreator('/blog/tags/docusaurus','ddf'),
    exact: true
  },
  {
    path: '/blog/tags/facebook',
    component: ComponentCreator('/blog/tags/facebook','ede'),
    exact: true
  },
  {
    path: '/blog/tags/greetings',
    component: ComponentCreator('/blog/tags/greetings','b86'),
    exact: true
  },
  {
    path: '/blog/tags/hello',
    component: ComponentCreator('/blog/tags/hello','4c2'),
    exact: true
  },
  {
    path: '/blog/tags/hola',
    component: ComponentCreator('/blog/tags/hola','752'),
    exact: true
  },
  {
    path: '/blog/welcome',
    component: ComponentCreator('/blog/welcome','bfa'),
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
    path: '/docs/next',
    component: ComponentCreator('/docs/next','7d3'),
    routes: [
      {
        path: '/docs/next/intro',
        component: ComponentCreator('/docs/next/intro','8d4'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/next/tutorial-basics/congratulations',
        component: ComponentCreator('/docs/next/tutorial-basics/congratulations','942'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/next/tutorial-basics/create-a-blog-post',
        component: ComponentCreator('/docs/next/tutorial-basics/create-a-blog-post','fbe'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/next/tutorial-basics/create-a-document',
        component: ComponentCreator('/docs/next/tutorial-basics/create-a-document','32a'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/next/tutorial-basics/create-a-page',
        component: ComponentCreator('/docs/next/tutorial-basics/create-a-page','24b'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/next/tutorial-basics/deploy-your-site',
        component: ComponentCreator('/docs/next/tutorial-basics/deploy-your-site','49e'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/next/tutorial-basics/markdown-features',
        component: ComponentCreator('/docs/next/tutorial-basics/markdown-features','bca'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/next/tutorial-extras/manage-docs-versions',
        component: ComponentCreator('/docs/next/tutorial-extras/manage-docs-versions','a0f'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/next/tutorial-extras/translate-your-site',
        component: ComponentCreator('/docs/next/tutorial-extras/translate-your-site','84b'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/next/tutorial-markdown/markdown-format',
        component: ComponentCreator('/docs/next/tutorial-markdown/markdown-format','58c'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/next/tutorial-markdown/mdx-format',
        component: ComponentCreator('/docs/next/tutorial-markdown/mdx-format','329'),
        exact: true,
        'sidebar': "tutorialSidebar"
      }
    ]
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs','36d'),
    routes: [
      {
        path: '/docs/intro',
        component: ComponentCreator('/docs/intro','f4f'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/tutorial-basics/congratulations',
        component: ComponentCreator('/docs/tutorial-basics/congratulations','61f'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/tutorial-basics/create-a-blog-post',
        component: ComponentCreator('/docs/tutorial-basics/create-a-blog-post','dcc'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/tutorial-basics/create-a-document',
        component: ComponentCreator('/docs/tutorial-basics/create-a-document','06c'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/tutorial-basics/create-a-page',
        component: ComponentCreator('/docs/tutorial-basics/create-a-page','a8a'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/tutorial-basics/deploy-your-site',
        component: ComponentCreator('/docs/tutorial-basics/deploy-your-site','996'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/tutorial-basics/markdown-features',
        component: ComponentCreator('/docs/tutorial-basics/markdown-features','b9e'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/tutorial-extras/manage-docs-versions',
        component: ComponentCreator('/docs/tutorial-extras/manage-docs-versions','43e'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/tutorial-extras/translate-your-site',
        component: ComponentCreator('/docs/tutorial-extras/translate-your-site','fa0'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/tutorial-markdown/markdown-format',
        component: ComponentCreator('/docs/tutorial-markdown/markdown-format','748'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/docs/tutorial-markdown/mdx-format',
        component: ComponentCreator('/docs/tutorial-markdown/mdx-format','c13'),
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
