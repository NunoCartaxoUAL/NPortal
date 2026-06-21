export const content = {
  en: {
    nav: {
      profile: 'Profile',
      projects: 'Projects',
      homelab: 'Homelab'
    },
    profile: {
      title: 'Profile',
      sections: [
        {
          id: 'experience',
          title: 'Experience',
          paragraphs: [
            'Software developer focused on practical tools, compact interfaces, and local-first workflows.',
            'Recent work includes Electron overlays, Android/Wear OS apps, OCR pipelines, location tracking, and small Linux home-server setups.'
          ]
        },
        {
          id: 'languages',
          title: 'Languages',
          paragraphs: [
            'English and Portuguese for daily work. Japanese is an active study target, especially for reading tools and Japan-focused applications.',
            'Comfortable building bilingual interfaces when the content model stays simple and explicit.'
          ]
        },
        {
          id: 'studies',
          title: 'Studies',
          paragraphs: [
            'Computer science and IT practice built through small complete projects: desktop apps, mobile apps, Linux services, and deployment flows.',
            'I prefer direct project evidence over broad claims, with each app showing the problem, the technical choices, and the current limits.'
          ]
        },
        {
          id: 'extra',
          title: 'Extra',
          paragraphs: [
            'Interested in Japan, language-learning tools, wearable utilities, and reliable personal infrastructure.',
            'I value clear documentation, simple operations, and code that another developer can continue without a long handover.'
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
            'Steam Deck-focused Electron overlay for Japanese game or video text. It captures a saved screen area, runs local OCR, and renders furigana readings over the detected text.',
            'The stack combines Electron, React/Vite, TypeScript, a Python OCR worker, hotkeys, transparent overlay windows, and local dictionary data.',
            'Current flow: map Deck controls to F8 for selecting an OCR area and F9 for refreshing OCR. Desktop Mode and borderless/windowed games are the intended target.'
          ]
        },
        {
          id: 'laila',
          title: 'Laila',
          paragraphs: [
            'Wear OS destination alarm. Pick a place, choose an arrival radius, start tracking, and the watch vibrates silently when you arrive.',
            'Built with Kotlin, Jetpack Compose, osmdroid/OpenStreetMap, Android Geocoder, foreground location tracking, saved destinations, and configurable vibration.',
            'The app keeps arrival and distance logic in smaller modules so behavior can be tested outside the Android UI where possible.'
          ]
        }
      ]
    },
    homelab: {
      title: 'Homelab',
      heading: 'Machines',
      items: ['rasp', 'rasp', 'subpc', 'mainpc']
    }
  },
  ja: {
    nav: {
      profile: 'プロフィール',
      projects: 'プロジェクト',
      homelab: 'ホームラボ'
    },
    profile: {
      title: 'プロフィール',
      sections: [
        {
          id: 'experience',
          title: '経験',
          paragraphs: [
            '実用的なツール、コンパクトなUI、ローカル中心のワークフローを重視するソフトウェア開発者です。',
            '最近は Electron オーバーレイ、Android / Wear OS アプリ、OCR 処理、位置情報トラッキング、小さな Linux サーバー環境に取り組んでいます。'
          ]
        },
        {
          id: 'languages',
          title: '言語',
          paragraphs: [
            '英語とポルトガル語で日常的に作業できます。日本語は学習中で、特に読解支援ツールや日本向けのアプリに関心があります。',
            'コンテンツ構造をシンプルに保ちながら、英語と日本語の両方に対応するUIを作れます。'
          ]
        },
        {
          id: 'studies',
          title: '学習',
          paragraphs: [
            'デスクトップアプリ、モバイルアプリ、Linux サービス、デプロイ手順など、小さく完結したプロジェクトを通してITを学んできました。',
            '広い主張よりも、課題、技術選択、現在の制限が分かる具体的な成果物を重視しています。'
          ]
        },
        {
          id: 'extra',
          title: 'その他',
          paragraphs: [
            '日本、語学学習ツール、ウェアラブルアプリ、安定した個人インフラに興味があります。',
            '分かりやすいドキュメント、単純な運用、別の開発者が引き継ぎやすいコードを大切にしています。'
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
            '日本語のゲームや動画テキストを読むための Steam Deck 向け Electron オーバーレイです。保存した画面範囲をキャプチャし、ローカルOCRを実行して、検出した文字の上にふりがなを表示します。',
            'Electron、React/Vite、TypeScript、Python OCR ワーカー、ホットキー、透明オーバーレイウィンドウ、ローカル辞書データを組み合わせています。',
            '基本操作は、F8 でOCR範囲を選択し、F9 でOCRを更新します。SteamOS Desktop Mode とボーダーレス/ウィンドウ表示のゲームを主な対象にしています。'
          ]
        },
        {
          id: 'laila',
          title: 'Laila',
          paragraphs: [
            'Wear OS 用の目的地アラームです。目的地と到着半径を選び、追跡を開始すると、到着時に時計が無音で振動します。',
            'Kotlin、Jetpack Compose、osmdroid/OpenStreetMap、Android Geocoder、フォアグラウンド位置情報サービス、保存済み目的地、振動設定を使っています。',
            '到着判定や距離計算は小さなモジュールに分け、可能な部分は Android UI から独立してテストしやすくしています。'
          ]
        }
      ]
    },
    homelab: {
      title: 'ホームラボ',
      heading: 'マシン',
      items: ['rasp', 'rasp', 'subpc', 'mainpc']
    }
  }
};
