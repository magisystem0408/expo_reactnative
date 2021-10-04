## ビルドコマンド
```shell
expo build ios
```

## publishするとき
```shell
社内用
expo publish

リリース用
expo publish --release-channel production
```

## expoデメリット
ネイティブSDKが使えない。

- 基本的にExpoが提供しているAPIのみ

- サードパーティ製 npmモジュールには使えないものも

- ネイティブSDK使えない

## 開発のときにきおつけること
- https://docs.expo.dev/versions/latest/

## その他
- functionコンポーネントの色々な書き方
  - ()で囲むとそこがreturnの値として認識される
- react-native-debuggerのインストール
  - https://github.com/jhen0409/react-native-debugger
  - https://www.npmjs.com/package/redux-devtools-extension
    - デバッカーを立ち上げたい時は
      - 検索からReact Native Debuggerとうつ

  
- したタブを表示する
  - https://reactnavigation.org/docs/bottom-tab-navigator/
- アイコン
  - https://icons.expo.fyi


- スプラッシュアイコン
  - サイズ
    - 1242 * 2436 px