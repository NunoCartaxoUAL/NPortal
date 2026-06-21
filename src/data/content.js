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
          ],
          entries: [
            {
              title: 'Software Developer',
              meta: 'Capgemini - Lisbon, Portugal - 10/2024 to Present',
              summary:
                'Works across backend and frontend tasks in a multi-team environment, contributing to enterprise software projects and day-to-day delivery.',
              points: [
                'Started as an intern in October 2024 and continued as a full-time software developer from January 2025.',
                'Works with Kubernetes, Helm, Java, Spring, React Admin, Jenkins, Git, and SIP-related systems.',
                'Contributes to backend and frontend work while coordinating with multiple project teams.'
              ],
              tags: ['Java', 'Spring', 'Kubernetes', 'Helm', 'React Admin', 'Jenkins']
            },
            {
              title: 'Software Developer Intern',
              meta: 'Inetum - Lisbon, Portugal - 01/2024 to 07/2024',
              summary:
                'Worked on maintenance and development tasks involving enterprise systems, database work, and testing.',
              points: [
                'Developed and maintained software using COBOL and SQL.',
                'Troubleshot COBOL and SQL issues and validated behavior through testing.',
                'Built experience working with existing business systems rather than only greenfield projects.'
              ],
              tags: ['COBOL', 'SQL', 'Testing', 'Troubleshooting']
            },
            {
              title: 'Dedicated Technical Support',
              meta: 'NOS SGPS - Lisbon, Portugal - 11/2019 to 01/2020',
              summary:
                'Provided technical support and troubleshooting for network-related issues in a professional support context.',
              points: [
                'Supported BPI-related technical requests and network troubleshooting.',
                'Worked with Cisco technologies and network support processes.',
                'Early professional exposure to customer-facing technical investigation.'
              ],
              tags: ['Technical support', 'Networking', 'Cisco']
            }
          ]
        },
        {
          id: 'languages',
          title: 'Languages',
          paragraphs: [
            'English and Portuguese for daily work and documentation. Japanese is an active study target, especially around reading support, interface localization, and Japan-focused applications.',
            'This portfolio keeps English and Japanese content in one explicit data model, with automatic browser-language selection and a manual override for review.'
          ],
          entries: [
            {
              title: 'Portuguese',
              meta: 'Mother tongue',
              summary: 'Native language used for daily communication and work.',
              tags: ['Native']
            },
            {
              title: 'English',
              meta: 'C1-C2 working proficiency',
              summary:
                'Used for technical documentation, code review, international teamwork, and employer-facing writing.',
              tags: ['Listening C2', 'Reading C1', 'Speaking C1-C2', 'Writing C1']
            },
            {
              title: 'Japanese',
              meta: 'JLPT N3 - 07/2023',
              summary:
                'Conversation-level Japanese with active focus on reading, software vocabulary, and Japan-focused work.',
              tags: ['Listening B2', 'Reading A2', 'Speaking B1', 'Writing A1']
            },
            {
              title: 'Spanish / French',
              meta: 'Basic user',
              summary: 'Spanish at A1-A2 level and French at A1 level.',
              tags: ['Spanish A2', 'French A1']
            }
          ],
          levels: [
            { label: 'Portuguese', value: 100, detail: 'Native' },
            { label: 'English', value: 92, detail: 'C1-C2' },
            { label: 'Japanese', value: 58, detail: 'JLPT N3 / B1 conversation' },
            { label: 'Spanish', value: 32, detail: 'A1-A2' },
            { label: 'French', value: 18, detail: 'A1' }
          ],
          certifications: [
            'Japanese Language Proficiency Test JLPT N3 - 07/2023',
            'Oracle Certified Java Programmer, Java SE 8 Associate - 10/2024',
            'Professional Scrum Master I - Scrum.org - 12/2024'
          ]
        },
        {
          id: 'studies',
          title: 'Studies',
          paragraphs: [
            'Computer science and IT practice built through complete project loops: app design, implementation, testing, packaging notes, deployment checks, and maintenance documentation.',
            'Current study areas include Japanese language tooling, OCR/reading extraction, Wear OS constraints, foreground location services, Linux administration, and clean public project presentation.',
            'I prefer direct project evidence over broad claims, with each app showing the problem, the technical choices, what is finished, and what still needs real-device validation.'
          ],
          entries: [
            {
              title: "Bachelor's Degree, Computer Engineering",
              meta: 'Universidade Autonoma de Lisboa - Lisbon, Portugal - 10/2020 to 07/2023',
              summary:
                'Completed a Computer Engineering degree with a practical focus on programming, databases, web applications, and cloud/deployment tooling.',
              points: [
                'Worked with Python, Java, JavaScript, Vue.js, MySQL, MongoDB, Firebase, GitHub, Heroku, and AWS.',
                'Built academic projects including an Express.js webstore with MySQL, a Vue.js webstore, and a socket-based chat application.',
                'Final grade: 16/20. EQF level 6 / QRQ level 6.'
              ],
              tags: ['Computer Engineering', 'Python', 'Java', 'JavaScript', 'Vue.js', 'Databases']
            },
            {
              title: 'Specialist in Network and Computer Systems Management',
              meta: 'ATEC - Academia de Formacao - Palmela, Portugal - 09/2018 to 02/2020',
              summary:
                'Technical specialization covering programming, operating systems, network administration, and Cisco-oriented networking concepts.',
              points: [
                'Studied SQL, Java, C#, Linux, Windows, network management, Cisco equipment, and Cisco protocols.',
                'Built a base across software, systems, and networking before the university degree.',
                'Final grade: 17/20. EQF level 5.'
              ],
              tags: ['Networks', 'Linux', 'Windows', 'Cisco', 'SQL', 'Java', 'C#']
            }
          ]
        },
        {
          id: 'extra',
          title: 'Extra',
          paragraphs: [
            'Interested in Japan, language-learning tools, wearable utilities, local-first software, and reliable personal infrastructure.',
            'I value clear documentation, simple operations, small readable modules, and code that another developer can continue without a long handover.',
            'Public portfolio focus stays intentionally narrow: Giina as the main Japan-facing technical case study, Laila as a secondary compact mobile/Wear OS project.'
          ],
          entries: [
            {
              title: 'Working Style',
              meta: 'Practical, direct, and maintainable',
              summary:
                'Optimizes for software that can be understood later: clear names, small modules, useful docs, and honest status notes.',
              points: [
                'Shows the strongest public projects only.',
                'Keeps private, incomplete, or local-only work out of the employer-facing site.',
                'Prefers simple deployment and review paths over unnecessary backend complexity.'
              ],
              tags: ['maintainability', 'public portfolio', 'clarity']
            }
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
          ],
          tagline: 'Japanese OCR and furigana overlay for Steam Deck / desktop play.',
          summary:
            'Giina turns a selected screen area into readable Japanese assistance without sending the image to a remote service. It is designed for a small number of repeat actions: select the text area once, refresh OCR when needed, and keep the overlay out of the way.',
          facts: [
            { label: 'Role', value: 'Desktop app / OCR pipeline' },
            { label: 'Target', value: 'SteamOS Desktop Mode first' },
            { label: 'Status', value: 'Documented prototype, v0.3.0' }
          ],
          features: [
            'F8 drag selector stores the OCR area for repeated use.',
            'F9 refresh captures the selected area and updates the overlay.',
            'Python worker extracts text, readings, and dictionary-backed information locally.',
            'Tiny status window reports hotkey, OCR, and close states without a full control panel.'
          ],
          stack: ['Electron', 'React', 'Vite', 'TypeScript', 'Python', 'PaddleOCR', 'SQLite'],
          flow: ['Deck hotkey', 'screen crop', 'OCR worker', 'reading extraction', 'transparent overlay'],
          limits: [
            'Use Desktop Mode and borderless/windowed games first.',
            'Exclusive fullscreen is intentionally unsupported.',
            'Game Mode overlay stacking still needs target Deck testing.'
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
          ],
          tagline: 'Wear OS destination alarm for silent arrival reminders.',
          summary:
            'Laila is a compact watch utility for trips where sound is inconvenient. The user picks a destination, selects an arrival radius, starts tracking, and receives vibration feedback when entering the target zone.',
          facts: [
            { label: 'Role', value: 'Wear OS app / location service' },
            { label: 'Target', value: 'Watch or Wear OS emulator' },
            { label: 'Status', value: 'Documented prototype, v0.3.0' }
          ],
          features: [
            'Map picker and geocoder search for choosing destinations.',
            'Saved and recent places keep repeated trips fast.',
            'Distance-scaled polling reduces unnecessary checks when far away.',
            'Arrival screen supports vibration strength, snooze, dismiss, and test vibration.'
          ],
          stack: ['Kotlin', 'Jetpack Compose', 'Wear OS', 'osmdroid', 'Geocoder', 'Foreground service'],
          flow: ['pick place', 'set radius', 'start service', 'compute distance', 'vibrate on arrival'],
          limits: [
            'CLI build needs Android SDK, Java, and a Gradle runner.',
            'GPS, notification, vibration, and battery behavior should be validated on real hardware.',
            'The project is best shown as a focused mobile utility rather than the main Japan-facing case study.'
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
          type: 'flowchart',
          title: 'Portfolio Release Flow',
          nodes: [
            { id: 'A', label: 'edit content' },
            { id: 'B', label: 'build Vite' },
            { id: 'C', label: 'Docker preview' },
            { id: 'D', label: 'push vercel' }
          ],
          edges: ['A -> B', 'B -> C', 'C -> D']
        },
        {
          type: 'sequence',
          title: 'Giina OCR Sequence',
          actors: ['User', 'Electron', 'Worker', 'Overlay'],
          messages: ['User -> Electron: F9', 'Electron -> Worker: image crop', 'Worker -> Electron: OCR lines', 'Electron -> Overlay: readings']
        },
        {
          type: 'componentMap',
          title: 'NPortal Component Map',
          groups: [
            { name: 'Shell', items: ['App', 'Sidebar', 'language state'] },
            { name: 'Views', items: ['Profile', 'Projects', 'Homelab', 'Test'] },
            { name: 'Data', items: ['content.js', 'EN/JA sections'] }
          ]
        },
        {
          type: 'plantuml',
          title: 'PlantUML Style Draft',
          lines: [
            '@startuml',
            'actor Reviewer',
            'Reviewer -> NPortal: open portfolio',
            'NPortal -> Content: load language',
            'Content --> NPortal: CV + projects',
            '@enduml'
          ]
        },
        {
          type: 'classDiagram',
          title: 'Giina Class Sketch',
          classes: [
            { name: 'OverlayApp', fields: ['state', 'windows'], methods: ['registerHotkeys()', 'broadcastState()'] },
            { name: 'CaptureArea', fields: ['x', 'y', 'width', 'height'], methods: ['normalize()', 'persist()'] },
            { name: 'OcrWorker', fields: ['process', 'dictionary'], methods: ['requestOcr()', 'parseLines()'] }
          ],
          relations: ['OverlayApp -> CaptureArea', 'OverlayApp -> OcrWorker']
        },
        {
          type: 'erd',
          title: 'Laila Data Sketch',
          entities: [
            { name: 'Destination', fields: ['id', 'name', 'lat', 'lon', 'radius'] },
            { name: 'TripState', fields: ['phase', 'distance', 'bearing', 'provider'] },
            { name: 'TrackingRule', fields: ['radius', 'interval', 'arrived'] }
          ],
          relations: ['Destination 1 -> many TripState', 'TripState many -> 1 TrackingRule']
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
          ],
          entries: [
            {
              title: 'ソフトウェア開発者',
              meta: 'Capgemini - リスボン、ポルトガル - 2024年10月から現在',
              summary:
                '複数チームが関わる企業向けソフトウェア開発で、バックエンドとフロントエンドの両方に取り組んでいます。',
              points: [
                '2024年10月にインターンとして入社し、2025年1月から正社員のソフトウェア開発者として継続。',
                'Kubernetes、Helm、Java、Spring、React Admin、Jenkins、Git、SIP 関連システムを使用。',
                '複数プロジェクトの中で、実装、調整、チーム連携を担当。'
              ],
              tags: ['Java', 'Spring', 'Kubernetes', 'Helm', 'React Admin', 'Jenkins']
            },
            {
              title: 'ソフトウェア開発インターン',
              meta: 'Inetum - リスボン、ポルトガル - 2024年01月から2024年07月',
              summary:
                '企業システムの保守、開発、データベース作業、テストに関わりました。',
              points: [
                'COBOL と SQL を使った開発と保守を担当。',
                'COBOL / SQL の問題調査、トラブルシューティング、テストを実施。',
                '既存の業務システムを扱う実務経験を積みました。'
              ],
              tags: ['COBOL', 'SQL', 'テスト', 'トラブルシューティング']
            },
            {
              title: '専任テクニカルサポート',
              meta: 'NOS SGPS - リスボン、ポルトガル - 2019年11月から2020年01月',
              summary:
                'ネットワーク関連の問題について、技術サポートと調査を担当しました。',
              points: [
                'BPI 向けサポートとネットワークトラブルシューティングを担当。',
                'Cisco 技術とネットワークサポートの流れを経験。',
                '顧客対応を含む技術調査の初期実務経験。'
              ],
              tags: ['テクニカルサポート', 'ネットワーク', 'Cisco']
            }
          ]
        },
        {
          id: 'languages',
          title: '言語',
          paragraphs: [
            '英語とポルトガル語で日常的に作業とドキュメント作成ができます。日本語は学習中で、読解支援、UI ローカライズ、日本向けアプリに関心があります。',
            'このポートフォリオは英語と日本語の内容を一つの明確なデータ構造で管理し、ブラウザ言語による自動選択と手動切り替えに対応しています。'
          ],
          entries: [
            {
              title: 'ポルトガル語',
              meta: '母語',
              summary: '日常会話と仕事で使用する母語です。',
              tags: ['ネイティブ']
            },
            {
              title: '英語',
              meta: 'C1-C2 レベル',
              summary:
                '技術ドキュメント、コードレビュー、国際チームでの作業、採用向け文章に使用できます。',
              tags: ['聞く C2', '読む C1', '話す C1-C2', '書く C1']
            },
            {
              title: '日本語',
              meta: 'JLPT N3 - 2023年07月',
              summary:
                '会話レベルの日本語を学習中で、読解、IT用語、日本での仕事に向けた表現を重点的に伸ばしています。',
              tags: ['聞く B2', '読む A2', '話す B1', '書く A1']
            },
            {
              title: 'スペイン語 / フランス語',
              meta: '初級',
              summary: 'スペイン語は A1-A2、フランス語は A1 レベルです。',
              tags: ['スペイン語 A2', 'フランス語 A1']
            }
          ],
          levels: [
            { label: 'ポルトガル語', value: 100, detail: '母語' },
            { label: '英語', value: 92, detail: 'C1-C2' },
            { label: '日本語', value: 58, detail: 'JLPT N3 / 会話 B1' },
            { label: 'スペイン語', value: 32, detail: 'A1-A2' },
            { label: 'フランス語', value: 18, detail: 'A1' }
          ],
          certifications: [
            '日本語能力試験 JLPT N3 - 2023年07月',
            'Oracle Certified Java Programmer, Java SE 8 Associate - 2024年10月',
            'Professional Scrum Master I - Scrum.org - 2024年12月'
          ]
        },
        {
          id: 'studies',
          title: '学習',
          paragraphs: [
            'アプリ設計、実装、テスト、パッケージングメモ、デプロイ確認、保守ドキュメントまで、小さなプロジェクトを一通り完成させる形で学んでいます。',
            '現在の学習領域は、日本語支援ツール、OCR と読み抽出、Wear OS の制約、フォアグラウンド位置情報サービス、Linux 管理、公開用プロジェクト整理です。',
            '広い主張よりも、課題、技術選択、完了したこと、実機検証が必要なことを示す具体的な成果物を重視しています。'
          ],
          entries: [
            {
              title: 'コンピュータ工学 学士',
              meta: 'Universidade Autonoma de Lisboa - リスボン、ポルトガル - 2020年10月から2023年07月',
              summary:
                'プログラミング、データベース、Webアプリ、クラウド/デプロイ関連の実践を含むコンピュータ工学の学士課程を修了しました。',
              points: [
                'Python、Java、JavaScript、Vue.js、MySQL、MongoDB、Firebase、GitHub、Heroku、AWS を使用。',
                'Express.js + MySQL の Web ストア、Vue.js Web ストア、ソケット通信チャットアプリなどを作成。',
                '最終成績: 16/20。EQF レベル6 / QRQ レベル6。'
              ],
              tags: ['コンピュータ工学', 'Python', 'Java', 'JavaScript', 'Vue.js', 'データベース']
            },
            {
              title: 'ネットワーク・コンピュータシステム管理 専門課程',
              meta: 'ATEC - Academia de Formacao - パルメラ、ポルトガル - 2018年09月から2020年02月',
              summary:
                'プログラミング、OS管理、ネットワーク管理、Cisco 関連技術を学ぶ専門課程を修了しました。',
              points: [
                'SQL、Java、C#、Linux、Windows、ネットワーク管理、Cisco 機器、Cisco プロトコルを学習。',
                '大学前に、ソフトウェア、システム、ネットワークの基礎を広く習得。',
                '最終成績: 17/20。EQF レベル5。'
              ],
              tags: ['ネットワーク', 'Linux', 'Windows', 'Cisco', 'SQL', 'Java', 'C#']
            }
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
          ],
          tagline: 'Steam Deck / デスクトップ向けの日本語OCR・ふりがなオーバーレイ。',
          summary:
            'Giina は、選択した画面範囲をローカルでOCRし、日本語読解を補助するためのオーバーレイです。リモートサービスに画像を送らず、範囲選択、OCR更新、表示の邪魔にならないUIに絞っています。',
          facts: [
            { label: '役割', value: 'デスクトップアプリ / OCR パイプライン' },
            { label: '対象', value: 'SteamOS Desktop Mode 優先' },
            { label: '状態', value: 'ドキュメント済みプロトタイプ v0.3.0' }
          ],
          features: [
            'F8 のドラッグ選択でOCR範囲を保存。',
            'F9 で保存済み範囲をキャプチャし、オーバーレイを更新。',
            'Python ワーカーがローカルで文字、読み、辞書情報を抽出。',
            '小さなステータスウィンドウだけでホットキー、OCR状態、終了を表示。'
          ],
          stack: ['Electron', 'React', 'Vite', 'TypeScript', 'Python', 'PaddleOCR', 'SQLite'],
          flow: ['Deck ホットキー', '画面切り取り', 'OCR ワーカー', '読み抽出', '透明オーバーレイ'],
          limits: [
            'まず Desktop Mode とボーダーレス/ウィンドウ表示で使用。',
            '排他フルスクリーンは対象外。',
            'Game Mode の重なり表示は Steam Deck 実機で追加検証が必要。'
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
          ],
          tagline: '無音の到着リマインダーとして使う Wear OS 目的地アラーム。',
          summary:
            'Laila は、音を出しにくい移動中に使う小さな腕時計アプリです。目的地と到着半径を選び、追跡を開始すると、範囲内に入った時に振動で通知します。',
          facts: [
            { label: '役割', value: 'Wear OS アプリ / 位置情報サービス' },
            { label: '対象', value: 'Wear OS 時計またはエミュレータ' },
            { label: '状態', value: 'ドキュメント済みプロトタイプ v0.3.0' }
          ],
          features: [
            '地図ピッカーと Geocoder 検索で目的地を選択。',
            '保存済み/最近の目的地で繰り返し利用を短縮。',
            '距離に応じてGPS確認間隔を変え、不要な確認を減らす。',
            '到着画面で振動強度、スヌーズ、停止、テスト振動に対応。'
          ],
          stack: ['Kotlin', 'Jetpack Compose', 'Wear OS', 'osmdroid', 'Geocoder', 'Foreground service'],
          flow: ['場所選択', '半径設定', 'サービス開始', '距離計算', '到着時に振動'],
          limits: [
            'CLIビルドには Android SDK、Java、Gradle ランナーが必要。',
            'GPS、通知、振動、バッテリーは実機で検証する必要がある。',
            '日本向けの主事例ではなく、集中したモバイルユーティリティとして見せるのが適切。'
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
          type: 'flowchart',
          title: 'ポートフォリオ公開フロー',
          nodes: [
            { id: 'A', label: '内容編集' },
            { id: 'B', label: 'Vite ビルド' },
            { id: 'C', label: 'Docker 確認' },
            { id: 'D', label: 'vercel に push' }
          ],
          edges: ['A -> B', 'B -> C', 'C -> D']
        },
        {
          type: 'sequence',
          title: 'Giina OCR シーケンス',
          actors: ['User', 'Electron', 'Worker', 'Overlay'],
          messages: ['User -> Electron: F9', 'Electron -> Worker: 画像切取', 'Worker -> Electron: OCR行', 'Electron -> Overlay: 読み表示']
        },
        {
          type: 'componentMap',
          title: 'NPortal コンポーネント図',
          groups: [
            { name: 'Shell', items: ['App', 'Sidebar', '言語状態'] },
            { name: 'Views', items: ['Profile', 'Projects', 'Homelab', 'Test'] },
            { name: 'Data', items: ['content.js', 'EN/JA sections'] }
          ]
        },
        {
          type: 'plantuml',
          title: 'PlantUML 風ドラフト',
          lines: [
            '@startuml',
            'actor Reviewer',
            'Reviewer -> NPortal: open portfolio',
            'NPortal -> Content: load language',
            'Content --> NPortal: CV + projects',
            '@enduml'
          ]
        },
        {
          type: 'classDiagram',
          title: 'Giina クラス案',
          classes: [
            { name: 'OverlayApp', fields: ['state', 'windows'], methods: ['registerHotkeys()', 'broadcastState()'] },
            { name: 'CaptureArea', fields: ['x', 'y', 'width', 'height'], methods: ['normalize()', 'persist()'] },
            { name: 'OcrWorker', fields: ['process', 'dictionary'], methods: ['requestOcr()', 'parseLines()'] }
          ],
          relations: ['OverlayApp -> CaptureArea', 'OverlayApp -> OcrWorker']
        },
        {
          type: 'erd',
          title: 'Laila データ案',
          entities: [
            { name: 'Destination', fields: ['id', 'name', 'lat', 'lon', 'radius'] },
            { name: 'TripState', fields: ['phase', 'distance', 'bearing', 'provider'] },
            { name: 'TrackingRule', fields: ['radius', 'interval', 'arrived'] }
          ],
          relations: ['Destination 1 -> many TripState', 'TripState many -> 1 TrackingRule']
        }
      ]
    }
  }
};
