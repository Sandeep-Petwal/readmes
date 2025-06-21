import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', '5ff'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', '5ba'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', 'a2b'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', 'c3c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', '156'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', '88c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', '000'),
    exact: true
  },
  {
    path: '/blog',
    component: ComponentCreator('/blog', '99c'),
    exact: true
  },
  {
    path: '/blog/archive',
    component: ComponentCreator('/blog/archive', '182'),
    exact: true
  },
  {
    path: '/blog/authors',
    component: ComponentCreator('/blog/authors', '0b7'),
    exact: true
  },
  {
    path: '/blog/authors/sandeep',
    component: ComponentCreator('/blog/authors/sandeep', '885'),
    exact: true
  },
  {
    path: '/blog/first-blog-post',
    component: ComponentCreator('/blog/first-blog-post', '89a'),
    exact: true
  },
  {
    path: '/blog/long-blog-post',
    component: ComponentCreator('/blog/long-blog-post', '9ad'),
    exact: true
  },
  {
    path: '/blog/mdx-blog-post',
    component: ComponentCreator('/blog/mdx-blog-post', 'e9f'),
    exact: true
  },
  {
    path: '/blog/tags',
    component: ComponentCreator('/blog/tags', '287'),
    exact: true
  },
  {
    path: '/blog/tags/documentation',
    component: ComponentCreator('/blog/tags/documentation', '08a'),
    exact: true
  },
  {
    path: '/blog/tags/docusaurus',
    component: ComponentCreator('/blog/tags/docusaurus', '704'),
    exact: true
  },
  {
    path: '/blog/tags/facebook',
    component: ComponentCreator('/blog/tags/facebook', '858'),
    exact: true
  },
  {
    path: '/blog/tags/hello',
    component: ComponentCreator('/blog/tags/hello', '299'),
    exact: true
  },
  {
    path: '/blog/tags/hola',
    component: ComponentCreator('/blog/tags/hola', '00d'),
    exact: true
  },
  {
    path: '/blog/tags/learning',
    component: ComponentCreator('/blog/tags/learning', '07d'),
    exact: true
  },
  {
    path: '/blog/tags/personal',
    component: ComponentCreator('/blog/tags/personal', 'f10'),
    exact: true
  },
  {
    path: '/blog/welcome',
    component: ComponentCreator('/blog/welcome', 'd2b'),
    exact: true
  },
  {
    path: '/blog/why-i-created-this-website',
    component: ComponentCreator('/blog/why-i-created-this-website', '5da'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', '65a'),
    routes: [
      {
        path: '/docs',
        component: ComponentCreator('/docs', '0d5'),
        routes: [
          {
            path: '/docs',
            component: ComponentCreator('/docs', '645'),
            routes: [
              {
                path: '/docs/Backend/googleAuth',
                component: ComponentCreator('/docs/Backend/googleAuth', 'fbe'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Backend/ReCaptcha',
                component: ComponentCreator('/docs/Backend/ReCaptcha', '213'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Backend/socket.io',
                component: ComponentCreator('/docs/Backend/socket.io', 'ef7'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/category/backend-technologies',
                component: ComponentCreator('/docs/category/backend-technologies', '151'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/category/frontend-technologies',
                component: ComponentCreator('/docs/category/frontend-technologies', '728'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Docker',
                component: ComponentCreator('/docs/Docker', '287'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Frontend/axios',
                component: ComponentCreator('/docs/Frontend/axios', '201'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Frontend/context-api',
                component: ComponentCreator('/docs/Frontend/context-api', 'c5d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Frontend/FileUpload',
                component: ComponentCreator('/docs/Frontend/FileUpload', '906'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Frontend/googleAuth',
                component: ComponentCreator('/docs/Frontend/googleAuth', '6cc'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Frontend/react-hook-form',
                component: ComponentCreator('/docs/Frontend/react-hook-form', '770'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Frontend/react-router-dom',
                component: ComponentCreator('/docs/Frontend/react-router-dom', '4c1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Frontend/ReactChart',
                component: ComponentCreator('/docs/Frontend/ReactChart', '86d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Frontend/ReCaptcha',
                component: ComponentCreator('/docs/Frontend/ReCaptcha', '73d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Frontend/Redux_Connect',
                component: ComponentCreator('/docs/Frontend/Redux_Connect', 'f6e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Frontend/redux-toolkit',
                component: ComponentCreator('/docs/Frontend/redux-toolkit', '716'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Frontend/setup',
                component: ComponentCreator('/docs/Frontend/setup', '789'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Frontend/Shadcn',
                component: ComponentCreator('/docs/Frontend/Shadcn', '031'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Frontend/socket.io',
                component: ComponentCreator('/docs/Frontend/socket.io', '319'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Git',
                component: ComponentCreator('/docs/Git', 'c79'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/intro',
                component: ComponentCreator('/docs/intro', '61d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Microservice-architecture',
                component: ComponentCreator('/docs/Microservice-architecture', 'c32'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Redis',
                component: ComponentCreator('/docs/Redis', 'a2c'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
