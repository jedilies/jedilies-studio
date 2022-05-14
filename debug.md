
User:
  ID: [32m'pcz9yewkc'[39m
  Name: [32m'Julia Silver'[39m
  Email: [32m'julesrsilver@gmail.com'[39m

Project:
  ID: [32m'hz6n859k'[39m
  Display name: [32m'jedilies'[39m
  User role: [32m'administrator'[39m

Authentication:
  User type: [32m'normal'[39m
  Auth token: [32m'<redacted>'[39m

  (run with --secrets to reveal token)

Global config (/Users/julia/.config/sanity/config.json):
  {
    cliLastUpdateCheck: [33m1652550844229[39m,
    cliLastUpdateNag: [33m1652550844283[39m,
    cliHasUpdate: [32m'2.30.0'[39m
  }

Project config (/Users/julia/git/jules/jedilies/sanity.json):
  {
    root: [33mtrue[39m,
    project: { name: [32m'jedilies'[39m },
    __experimental_spaces: [
      {
        name: [32m'prod'[39m,
        title: [32m'Production'[39m,
        default: [33mtrue[39m,
        api: { projectId: [32m'hz6n859k'[39m, dataset: [32m'production'[39m }
      },
      {
        name: [32m'dev'[39m,
        title: [32m'Development'[39m,
        api: { projectId: [32m'hz6n859k'[39m, dataset: [32m'development'[39m }
      }
    ],
    api: { projectId: [32m'hz6n859k'[39m, dataset: [32m'production'[39m },
    plugins: [
      [32m'@sanity/base'[39m,
      [32m'@sanity/default-layout'[39m,
      [32m'@sanity/default-login'[39m,
      [32m'@sanity/desk-tool'[39m,
      [32m'@sanity/vision'[39m,
      [32m'@sanity/color-input'[39m,
      [32m'media-library'[39m,
      [32m'@sanity/rich-date-input'[39m,
      [32m'@sanity/code-input'[39m,
      [32m'content-calendar'[39m,
      [32m'asset-source-unsplash'[39m,
      [32m'url-metadata-input'[39m,
      [32m'color-list'[39m,
      [32m'asset-source-giphy'[39m
    ],
    env: { development: { plugins: [ [32m'@sanity/vision'[39m ] } },
    parts: [
      { name: [32m'part:@sanity/base/schema'[39m, path: [32m'./schemas/schema'[39m },
      {
        name: [32m'part:@sanity/desk-tool/structure'[39m,
        path: [32m'./structure/deskStructure'[39m
      },
      {
        implements: [32m'part:@sanity/base/theme/variables/override-style'[39m,
        path: [32m'./styles/style-override.css'[39m
      },
      {
        implements: [32m'part:@sanity/base/brand-logo'[39m,
        path: [32m'./components/logo'[39m
      },
      {
        implements: [32m'part:@sanity/form-builder/input/image/asset-sources'[39m,
        path: [32m'./plugins/assetSources'[39m
      }
    ]
  }

Package versions:
  @sanity/cli                   2.29.3 (latest: 2.30.0)
  @sanity/base                  2.30.0 (up to date)
  @sanity/cli                   2.30.0 (up to date)
  @sanity/code-input            2.30.0 (up to date)
  @sanity/color-input           2.30.0 (up to date)
  @sanity/core                  2.30.0 (up to date)
  @sanity/default-layout        2.30.0 (up to date)
  @sanity/default-login         2.30.0 (up to date)
  @sanity/desk-tool             2.30.0 (up to date)
  @sanity/eslint-config-studio   2.0.0 (up to date)
  @sanity/rich-date-input        2.0.9 (up to date)
  @sanity/types                 2.29.5 (up to date)
  @sanity/vision                2.30.0 (up to date)

