export const content = {
  en: {
    nav: {
      profile: 'Profile',
      projects: 'Projects',
      homelab: 'Homelab',
      test: 'Test'
    },
    profile: {
      title: 'Profile',
      sections: [
        {
          id: 'experience',
          title: 'Experience',
          paragraphs: [
            'Software developer focused on practical tools, compact interfaces, and local-first workflows. Recent work connects desktop overlays, mobile utilities, OCR pipelines, location tracking, and small Linux systems.',
            'Strongest project evidence is in building complete small products: defining the user problem, choosing a simple stack, separating platform-specific code from testable logic, and documenting the current limits clearly.',
            'Comfortable moving between React/Vite interfaces, Electron desktop shells, Python worker processes, Kotlin/Wear OS apps, Git workflows, Docker previews, and Linux service setup.'
          ]
        },
        {
          id: 'languages',
          title: 'Languages',
          paragraphs: [
            'English and Portuguese for daily work and documentation. Japanese is an active study target, especially around reading support, interface localization, and Japan-focused applications.',
            'This portfolio keeps English and Japanese content in one explicit data model, with automatic browser-language selection and a manual override for review.'
          ]
        },
        {
          id: 'studies',
          title: 'Studies',
          paragraphs: [
            'Computer science and IT practice built through complete project loops: app design, implementation, testing, packaging notes, deployment checks, and maintenance documentation.',
            'Current study areas include Japanese language tooling, OCR/reading extraction, Wear OS constraints, foreground location services, Linux administration, and clean public project presentation.',
            'I prefer direct project evidence over broad claims, with each app showing the problem, the technical choices, what is finished, and what still needs real-device validation.'
          ]
        },
        {
          id: 'extra',
          title: 'Extra',
          paragraphs: [
            'Interested in Japan, language-learning tools, wearable utilities, local-first software, and reliable personal infrastructure.',
            'I value clear documentation, simple operations, small readable modules, and code that another developer can continue without a long handover.',
            'Public portfolio focus stays intentionally narrow: Giina as the main Japan-facing technical case study, Laila as a secondary compact mobile/Wear OS project.'
          ]
        }
      ]
    },
    projects: {
      title: 'Projects',
      sections: [
        {
          id: 'giina',
          title: 'Giina',
          paragraphs: [
            'Giina is a Steam Deck-focused Electron overlay for Japanese game or video text. It captures a saved screen area, runs local OCR, and renders furigana readings over detected text boxes.',
            'The stack combines Electron, React/Vite, TypeScript, transparent overlay windows, global hotkeys, a line-oriented Python OCR worker, PaddleOCR, fugashi, pykakasi, and local JMdict/KANJIDIC-backed dictionary data.',
            'The Steam Deck flow is intentionally simple: map a Deck control to F8 to select the OCR area, map another to F9 to refresh OCR, and keep the only visible UI as a tiny top-right status strip.',
            'Architecture highlights include a preload bridge instead of raw renderer Node access, persisted OCR-area settings, runtime logs, JSON-line worker communication, and clear diagnostics when OCR packages are missing.',
            'Current limits are documented: SteamOS Desktop Mode and borderless/windowed games are the first target, exclusive fullscreen is unsupported, and Game Mode overlay stacking still needs target Deck testing.'
          ]
        },
        {
          id: 'laila',
          title: 'Laila',
          paragraphs: [
            'Laila is a Wear OS destination alarm. Pick a place, choose an arrival radius, start tracking, and the watch vibrates silently when you arrive.',
            'Built with Kotlin, Jetpack Compose, Wear Compose components, osmdroid/OpenStreetMap, Android Geocoder, foreground location tracking, saved/recent destinations, and configurable vibration strength.',
            'The app supports radius choices from 100m to 10km, distance-scaled GPS polling, provider/check-interval details, direction hints, silent foreground notification, snooze, dismiss, and test vibration.',
            'Architecture highlights include a foreground TripService, SharedPreferences-backed saved destinations, pure GeoMath/TripRules/TrackingCadence modules, and a UI state model split away from service behavior.',
            'Current limits are documented: CLI build verification depends on a proper Android toolchain, and real Wear OS hardware should be used to validate GPS behavior, notification permissions, vibration strength, and battery impact.'
          ]
        }
      ]
    },
    homelab: {
      title: 'Homelab',
      heading: 'Machines',
      items: ['rasp', 'rasp', 'subpc', 'mainpc']
    },
    test: {
      title: 'Test',
      visuals: [
        {
          type: 'bars',
          title: 'Work Focus',
          rows: [
            { label: 'Compact UI', value: 92 },
            { label: 'Local-first tools', value: 88 },
            { label: 'Documentation', value: 84 },
            { label: 'Deployment checks', value: 76 }
          ]
        },
        {
          type: 'bars',
          title: 'Technical Spread',
          rows: [
            { label: 'React / Vite', value: 86 },
            { label: 'Electron', value: 82 },
            { label: 'Kotlin / Wear OS', value: 74 },
            { label: 'Linux / Docker', value: 72 }
          ]
        },
        {
          type: 'flow',
          title: 'Giina OCR Flow',
          steps: ['F8 area', 'screen crop', 'Python OCR', 'readings', 'overlay']
        },
        {
          type: 'flow',
          title: 'Laila Trip Flow',
          steps: ['pick place', 'set radius', 'track', 'arrive', 'vibrate']
        },
        {
          type: 'tree',
          title: 'Project Tree',
          root: 'Portfolio',
          branches: ['Profile', 'Giina', 'Laila', 'Homelab']
        },
        {
          type: 'matrix',
          title: 'Project Fit',
          columns: ['Japan', 'UX', 'Systems'],
          rows: [
            { label: 'Giina', values: [3, 3, 3] },
            { label: 'Laila', values: [1, 3, 3] },
            { label: 'Homelab', values: [1, 1, 3] }
          ]
        },
        {
          type: 'timeline',
          title: 'Case Study Order',
          items: ['problem', 'stack', 'architecture', 'limits']
        },
        {
          type: 'chips',
          title: 'Public Stack',
          items: ['React', 'Vite', 'Electron', 'Python', 'Kotlin', 'Wear OS', 'Docker']
        },
        {
          type: 'ladder',
          title: 'Readiness Ladder',
          items: ['documented', 'build checked', 'previewed', 'deployed']
        },
        {
          type: 'checklist',
          title: 'Employer View',
          items: ['concise CV', 'public-safe content', 'clear project limits', 'bilingual switch']
        }
      ]
    }
  },
  ja: {
    nav: {
      profile: 'プロフィール',
      projects: 'プロジェクト',
      homelab: 'ホームラボ',
      test: 'テスト'
    },
    profile: {
      title: 'プロフィール',
      sections: [
        {
          id: 'experience',
          title: '経験',
          paragraphs: [
            '実用的なツール、コンパクトなUI、ローカル中心のワークフローを重視するソフトウェア開発者です。最近はデスクトップオーバーレイ、モバイルユーティリティ、OCR、位置情報、小さな Linux 環境に取り組んでいます。',
            '強みは、小さく完結したプロダクトを作ることです。課題を整理し、シンプルな技術を選び、プラットフォーム依存部分とテストしやすいロジックを分け、現在の制限も明確に書きます。',
            'React/Vite、Electron、Python ワーカー、Kotlin / Wear OS、Git、Docker プレビュー、Linux サービス設定を組み合わせて作業できます。'
          ]
        },
        {
          id: 'languages',
          title: '言語',
          paragraphs: [
            '英語とポルトガル語で日常的に作業とドキュメント作成ができます。日本語は学習中で、読解支援、UI ローカライズ、日本向けアプリに関心があります。',
            'このポートフォリオは英語と日本語の内容を一つの明確なデータ構造で管理し、ブラウザ言語による自動選択と手動切り替えに対応しています。'
          ]
        },
        {
          id: 'studies',
          title: '学習',
          paragraphs: [
            'アプリ設計、実装、テスト、パッケージングメモ、デプロイ確認、保守ドキュメントまで、小さなプロジェクトを一通り完成させる形で学んでいます。',
            '現在の学習領域は、日本語支援ツール、OCR と読み抽出、Wear OS の制約、フォアグラウンド位置情報サービス、Linux 管理、公開用プロジェクト整理です。',
            '広い主張よりも、課題、技術選択、完了したこと、実機検証が必要なことを示す具体的な成果物を重視しています。'
          ]
        },
        {
          id: 'extra',
          title: 'その他',
          paragraphs: [
            '日本、語学学習ツール、ウェアラブルアプリ、ローカル中心のソフトウェア、安定した個人インフラに興味があります。',
            '分かりやすいドキュメント、単純な運用、小さく読みやすいモジュール、別の開発者が引き継ぎやすいコードを大切にしています。',
            '公開ポートフォリオでは、Giina を日本語関連の主な技術事例、Laila をコンパクトな Wear OS / 位置情報アプリの事例として扱います。'
          ]
        }
      ]
    },
    projects: {
      title: 'プロジェクト',
      sections: [
        {
          id: 'giina',
          title: 'Giina',
          paragraphs: [
            'Giina は日本語のゲームや動画テキストを読むための Steam Deck 向け Electron オーバーレイです。保存した画面範囲をキャプチャし、ローカルOCRを実行して、検出した文字位置にふりがなを表示します。',
            'Electron、React/Vite、TypeScript、透明オーバーレイウィンドウ、グローバルホットキー、Python OCR ワーカー、PaddleOCR、fugashi、pykakasi、JMdict/KANJIDIC ベースのローカル辞書を組み合わせています。',
            'Steam Deck での操作はシンプルです。F8 にマップしたボタンでOCR範囲を選び、F9 にマップしたボタンでOCRを更新し、表示UIは右上の小さなステータスだけにしています。',
            '構成上のポイントは、preload ブリッジ、保存済みOCR範囲、実行ログ、JSON lines によるワーカー通信、OCRパッケージ不足時の診断です。',
            '現在の制限も明記しています。SteamOS Desktop Mode とボーダーレス/ウィンドウ表示を主な対象にし、排他フルスクリーンは非対応、Game Mode の重なり表示は実機検証が必要です。'
          ]
        },
        {
          id: 'laila',
          title: 'Laila',
          paragraphs: [
            'Laila は Wear OS 用の目的地アラームです。目的地と到着半径を選び、追跡を開始すると、到着時に時計が無音で振動します。',
            'Kotlin、Jetpack Compose、Wear Compose、osmdroid/OpenStreetMap、Android Geocoder、フォアグラウンド位置情報サービス、保存/最近の目的地、振動強度設定を使っています。',
            '100m から 10km までの到着半径、距離に応じたGPS確認間隔、プロバイダー/確認間隔表示、方向ヒント、無音通知、スヌーズ、停止、テスト振動に対応しています。',
            '構成上のポイントは、TripService、SharedPreferences による保存先管理、GeoMath / TripRules / TrackingCadence の純粋ロジック、サービス処理と分けたUI状態モデルです。',
            '現在の制限も明記しています。CLIビルド検証には Android 環境が必要で、GPS、通知権限、振動強度、バッテリー影響は Wear OS 実機で確認する必要があります。'
          ]
        }
      ]
    },
    homelab: {
      title: 'ホームラボ',
      heading: 'マシン',
      items: ['rasp', 'rasp', 'subpc', 'mainpc']
    },
    test: {
      title: 'テスト',
      visuals: [
        {
          type: 'bars',
          title: '作業の軸',
          rows: [
            { label: 'コンパクトUI', value: 92 },
            { label: 'ローカル中心', value: 88 },
            { label: 'ドキュメント', value: 84 },
            { label: 'デプロイ確認', value: 76 }
          ]
        },
        {
          type: 'bars',
          title: '技術範囲',
          rows: [
            { label: 'React / Vite', value: 86 },
            { label: 'Electron', value: 82 },
            { label: 'Kotlin / Wear OS', value: 74 },
            { label: 'Linux / Docker', value: 72 }
          ]
        },
        {
          type: 'flow',
          title: 'Giina OCR フロー',
          steps: ['F8 範囲', '画面切取', 'Python OCR', '読み', '表示']
        },
        {
          type: 'flow',
          title: 'Laila 追跡フロー',
          steps: ['場所選択', '半径設定', '追跡', '到着', '振動']
        },
        {
          type: 'tree',
          title: 'プロジェクト構成',
          root: 'Portfolio',
          branches: ['Profile', 'Giina', 'Laila', 'Homelab']
        },
        {
          type: 'matrix',
          title: '見せ方の適性',
          columns: ['日本', 'UX', '構成'],
          rows: [
            { label: 'Giina', values: [3, 3, 3] },
            { label: 'Laila', values: [1, 3, 3] },
            { label: 'Homelab', values: [1, 1, 3] }
          ]
        },
        {
          type: 'timeline',
          title: '事例の順番',
          items: ['課題', '技術', '構成', '制限']
        },
        {
          type: 'chips',
          title: '公開スタック',
          items: ['React', 'Vite', 'Electron', 'Python', 'Kotlin', 'Wear OS', 'Docker']
        },
        {
          type: 'ladder',
          title: '準備段階',
          items: ['文書化', 'ビルド確認', 'プレビュー', 'デプロイ']
        },
        {
          type: 'checklist',
          title: '採用側ビュー',
          items: ['簡潔なCV', '公開可能な内容', '制限の明記', '言語切替']
        }
      ]
    }
  }
};
