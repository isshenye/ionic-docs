module.exports = {
  docs: [
    {
      type: 'category',
      label: 'はじめ方',
      collapsed: false,
      items: ['index', 'intro/upgrading-to-ionic-6', 'intro/environment', 'intro/cli', 'intro/cdn', 'intro/next'],
    },
    {
      type: 'category',
      label: '開発',
      collapsed: false,
      items: [
        'developing/starting',
        'developing/previewing',
        'developing/scaffolding',
        'developing/ios',
        'developing/android',
        'developing/tips',
        'developing/hardware-back-button',
        'developing/keyboard',
      ],
    },
    {
      type: 'category',
      label: 'レイアウト',
      collapsed: false,
      items: ['layout/structure', 'layout/grid', 'layout/global-stylesheets', 'layout/css-utilities'],
    },
    {
      type: 'category',
      label: 'テーマ',
      collapsed: false,
      items: [
        'theming/basics',
        'theming/platform-styles',
        'theming/css-variables',
        'theming/css-shadow-parts',
        'theming/colors',
        'theming/themes',
        'theming/dark-mode',
        'theming/advanced',
        'theming/color-generator',
      ],
    },
    {
      type: 'category',
      label: 'Angular',
      collapsed: false,
      items: [
        'angular/overview',
        {
          type: 'category',
          label: 'Build Your First App',
          items: [
            'angular/your-first-app',
            'angular/your-first-app/taking-photos',
            'angular/your-first-app/saving-photos',
            'angular/your-first-app/loading-photos',
            'angular/your-first-app/adding-mobile',
            'angular/your-first-app/deploying-mobile',
            'angular/your-first-app/live-reload',
          ],
        },
        'angular/lifecycle',
        'angular/navigation',
        'angular/virtual-scroll',
        'angular/slides',
        'angular/config',
        'angular/platform',
        'angular/testing',
        'angular/storage',
        'angular/performance',
        'angular/pwa',
      ],
    },
    {
      type: 'category',
      label: 'React',
      collapsed: false,
      items: [
        'react',
        'react/quickstart',
        {
          type: 'category',
          label: 'Build Your First App',
          items: [
            'react/your-first-app',
            'react/your-first-app/taking-photos',
            'react/your-first-app/saving-photos',
            'react/your-first-app/loading-photos',
            'react/your-first-app/adding-mobile',
            'react/your-first-app/deploying-mobile',
            'react/your-first-app/live-reload',
          ],
        },
        'react/lifecycle',
        'react/navigation',
        'react/virtual-scroll',
        'react/slides',
        'react/config',
        'react/platform',
        'react/pwa',
        'react/overlays',
        'react/storage',
        'react/testing',
        'react/performance',
      ],
    },
    {
      type: 'category',
      label: 'Vue',
      collapsed: false,
      items: [
        'vue/overview',
        'vue/quickstart',
        {
          type: 'category',
          label: 'Build Your First App',
          items: [
            'vue/your-first-app',
            'vue/your-first-app/taking-photos',
            'vue/your-first-app/saving-photos',
            'vue/your-first-app/loading-photos',
            'vue/your-first-app/adding-mobile',
            'vue/your-first-app/deploying-mobile',
            'vue/your-first-app/live-reload',
          ],
        },
        'vue/lifecycle',
        'vue/navigation',
        'vue/virtual-scroll',
        'vue/slides',
        'vue/utility-functions',
        'vue/config',
        'vue/platform',
        'vue/pwa',
        'vue/storage',
        'vue/testing',
        'vue/troubleshooting',
        'vue/performance',
      ],
    },
    {
      type: 'category',
      label: 'ユーティリティ',
      collapsed: false,
      items: ['utilities/animations', 'utilities/gestures'],
    },
    {
      type: 'category',
      label: '開発',
      collapsed: false,
      items: [
        'deployment/app-store',
        'deployment/play-store',
        'deployment/progressive-web-app',
        'deployment/desktop-app',
      ],
    },
    {
      type: 'category',
      label: 'テクニック',
      collapsed: false,
      items: ['techniques/security'],
    },
    {
      type: 'category',
      label: 'トラブルシューティング',
      collapsed: false,
      items: [
        'troubleshooting/debugging',
        'troubleshooting/build',
        'troubleshooting/runtime',
        'troubleshooting/native',
        'troubleshooting/cors',
      ],
    },
    {
      type: 'category',
      label: 'コアコンセプト',
      collapsed: false,
      items: [
        'core-concepts/fundamentals',
        'core-concepts/cross-platform',
        'core-concepts/webview',
        'core-concepts/what-are-progressive-web-apps',
      ],
    },
    {
      type: 'category',
      label: 'Contributing',
      collapsed: false,
      items: ['contributing/how-to-contribute', 'contributing/coc'],
    },
    {
      type: 'category',
      label: 'リファレンス',
      collapsed: false,
      items: [
        'reference/glossary',
        'reference/versioning',
        'reference/release-notes',
        {
          type: 'link',
          label: 'GitHub Changelog',
          href: 'https://github.com/ionic-team/ionic/blob/master/CHANGELOG.md',
        },
        'reference/support',
        'reference/browser-support',
        'reference/migration',
      ],
    },
  ],

  api: [
    {
      type: 'category',
      label: 'はじめ方',
      collapsed: false,
      items: ['components'],
    },
    {
      type: 'category',
      label: 'アクションシート',
      collapsed: false,
      items: ['api/action-sheet'],
    },
    {
      type: 'category',
      label: 'アコーディオン',
      collapsed: false,
      items: ['api/accordion', 'api/accordion-group'],
    },
    {
      type: 'category',
      label: 'アラート',
      collapsed: false,
      items: ['api/alert'],
    },
    {
      type: 'category',
      label: 'バッジ',
      collapsed: false,
      items: ['api/badge'],
    },
    {
      type: 'category',
      label: 'パンくずリスト',
      collapsed: false,
      items: ['api/breadcrumb', 'api/breadcrumbs'],
    },
    {
      type: 'category',
      label: 'ボタン',
      collapsed: false,
      items: ['api/button', 'api/ripple-effect'],
    },
    {
      type: 'category',
      label: 'カード',
      collapsed: false,
      items: ['api/card', 'api/card-content', 'api/card-header', 'api/card-subtitle', 'api/card-title'],
    },
    {
      type: 'category',
      label: 'チェックボックス',
      collapsed: false,
      items: ['api/checkbox'],
    },
    {
      type: 'category',
      label: 'チップ',
      collapsed: false,
      items: ['api/chip'],
    },
    {
      type: 'category',
      label: 'コンテント',
      collapsed: false,
      items: ['api/app', 'api/content'],
    },
    {
      type: 'category',
      label: '日付 & タイムピッカー',
      collapsed: false,
      items: ['api/datetime', 'api/picker'],
    },
    {
      type: 'category',
      label: 'フローティングアクションボタン',
      collapsed: false,
      items: ['api/fab', 'api/fab-button', 'api/fab-list'],
    },
    {
      type: 'category',
      label: 'グリッド',
      collapsed: false,
      items: ['api/grid', 'api/col', 'api/row'],
    },
    {
      type: 'category',
      label: '無限スクロール',
      collapsed: false,
      items: ['api/infinite-scroll', 'api/infinite-scroll-content'],
    },
    {
      type: 'category',
      label: 'アイコン',
      collapsed: false,
      items: [
        {
          type: 'link',
          label: 'ion-icon',
          href: 'https://ionicons.com',
        },
      ],
    },
    {
      type: 'category',
      label: 'インプット',
      collapsed: false,
      items: ['api/input', 'api/textarea'],
    },
    {
      type: 'category',
      label: 'アイテム',
      collapsed: false,
      items: [
        'api/item',
        'api/item-divider',
        'api/item-group',
        'api/item-sliding',
        'api/item-options',
        'api/item-option',
        'api/label',
        'api/note',
      ],
    },
    {
      type: 'category',
      label: 'リスト',
      collapsed: false,
      items: ['api/list', 'api/list-header', 'api/virtual-scroll'],
    },
    {
      type: 'category',
      label: 'メディア',
      collapsed: false,
      items: [
        'api/avatar',
        {
          type: 'link',
          label: 'ion-icon',
          href: 'https://ionicons.com',
        },
        'api/img',
        'api/thumbnail',
      ],
    },
    {
      type: 'category',
      label: 'メニュー',
      collapsed: false,
      items: ['api/menu', 'api/menu-button', 'api/menu-toggle', 'api/split-pane'],
    },
    {
      type: 'category',
      label: 'モーダル',
      collapsed: false,
      items: ['api/modal', 'api/backdrop'],
    },
    {
      type: 'category',
      label: 'ナビゲーション',
      collapsed: false,
      items: ['api/nav', 'api/nav-link'],
    },
    {
      type: 'category',
      label: 'ポップオーバー',
      collapsed: false,
      items: ['api/popover'],
    },
    {
      type: 'category',
      label: '進捗インジケーター',
      collapsed: false,
      items: ['api/loading', 'api/progress-bar', 'api/skeleton-text', 'api/spinner'],
    },
    {
      type: 'category',
      label: 'ラジオ',
      collapsed: false,
      items: ['api/radio', 'api/radio-group'],
    },
    {
      type: 'category',
      label: 'レンジ',
      collapsed: false,
      items: ['api/range'],
    },
    {
      type: 'category',
      label: 'リフレッシャー',
      collapsed: false,
      items: ['api/refresher', 'api/refresher-content'],
    },
    {
      type: 'category',
      label: '並び替え',
      collapsed: false,
      items: ['api/reorder', 'api/reorder-group'],
    },
    {
      type: 'category',
      label: 'ルーティング',
      collapsed: false,
      items: ['api/router', 'api/router-link', 'api/router-outlet', 'api/route', 'api/route-redirect'],
    },
    {
      type: 'category',
      label: '検索バー',
      collapsed: false,
      items: ['api/searchbar'],
    },
    {
      type: 'category',
      label: 'セグメント',
      collapsed: false,
      items: ['api/segment', 'api/segment-button'],
    },
    {
      type: 'category',
      label: 'セレクト',
      collapsed: false,
      items: ['api/select', 'api/select-option'],
    },
    {
      type: 'category',
      label: 'スライド',
      collapsed: false,
      items: ['api/slides', 'api/slide'],
    },
    {
      type: 'category',
      label: 'タブ',
      collapsed: false,
      items: ['api/tabs', 'api/tab', 'api/tab-bar', 'api/tab-button'],
    },
    {
      type: 'category',
      label: 'トースト',
      collapsed: false,
      items: ['api/toast'],
    },
    {
      type: 'category',
      label: 'トグル',
      collapsed: false,
      items: ['api/toggle'],
    },
    {
      type: 'category',
      label: 'ツールバー',
      collapsed: false,
      items: ['api/toolbar', 'api/header', 'api/footer', 'api/title', 'api/buttons', 'api/back-button'],
    },
    {
      type: 'category',
      label: 'タイポグラフィ',
      collapsed: false,
      items: ['api/text'],
    },
    {
      type: 'category',
      label: 'リソース',
      collapsed: false,
      items: ['api'],
    },
  ],

  cli: [
    {
      type: 'category',
      label: 'CLIドキュメンテーション',
      collapsed: false,
      items: [
        'cli',
        'cli/configuration',
        'cli/livereload',
        'cli/using-a-proxy',
        {
          type: 'link',
          label: 'Changelog',
          href: 'https://github.com/ionic-team/ionic-cli/blob/develop/packages/@ionic/cli/CHANGELOG.md',
        },
      ],
    },
    {
      type: 'category',
      label: 'コマンドリファレンス',
      collapsed: false,
      items: [
        {
          type: 'autogenerated',
          dirName: 'cli/commands', // Generate section automatically based on files
        },
      ],
    },
  ],

  native: [
    {
      type: 'category',
      label: 'はじめ方',
      collapsed: false,
      items: [
        'native',
        'native-community',
        'native-faq',
        {
          type: 'link',
          label: 'Community vs. Enterprise',
          href: 'https://ionic.io/docs/premier-plugins',
        },
      ],
    },
    {
      type: 'category',
      label: 'プラグイン',
      collapsed: false,
      items: [
        {
          type: 'autogenerated',
          dirName: 'native', // Generate section automatically based on files
        },
      ],
    },
  ],
};