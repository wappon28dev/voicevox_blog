## はじめに

これはテキスト音声合成ソフトウェア「VOICEVOX」の使い方を紹介するドキュメントです。  
最初に[利用規約](https://voicevox.hiroshiba.jp/term)をご確認ください。

また、[使い方を軽めに紹介した動画](https://youtu.be/4yVpklclxwU)もあるので、よかったらご覧ください。

## 起動方法

### Windows 版

起動しようとすると「Windows によって PC が保護されました」というダイアログが表示されるかもしれません。その際は「詳細情報」をクリックし、「実行」を選んでください。

<img src="https://raw.githubusercontent.com/VOICEVOX/voicevox/0.10.4/public/res/image14.png" style="max-height: 16rem" alt="「Windows によって PC が保護されました」というダイアログ" /> → <img src="https://raw.githubusercontent.com/VOICEVOX/voicevox/0.10.4/public/res/image15.png" style="max-height: 16rem" alt="「詳細情報」をクリックし、「実行」を選んでいる様子。" />

### Mac 版

初回起動時は Apple に登録されていないアプリケーションとして警告ダイアログが表示されるかもしれません。  
<img src="https://raw.githubusercontent.com/VOICEVOX/voicevox/0.10.4/public/res/gatekeeper.png" style="max-height: 16rem" alt="「VOICEVOXは開発を検証できないため開けません」というダイアログ。" />

その際は Finder で、Control キーを押しながら VOICEVOX アプリケーションアイコンをクリックし、ショートカットメニューから「開く」を選択してから、「開く」をクリックしてください。

もしくは、アップルメニューから「システム環境設定」を選択して「セキュリティとプライバシー」 をクリックし、「一般」パネルで「このまま開く」選んでください。

#### Apple Silicon 搭載の Mac をお使いの場合

初めて VOICEVOX を機動する際に Rosetta のインストールを促される場合は、案内に従ってインストールしてください。

<img src="https://raw.githubusercontent.com/VOICEVOX/voicevox/0.10.4/public/res/macos-big-sur-software-update-rosetta-alert.jpg" style="max-height: 12rem" alt="Rosetta をインストールするかどうかを確認するメッセージ。" />

## 音声合成エンジンの起動

最初に音声合成エンジンが起動します。
メモリが 3GB 以上の NVIDIA 製 GPU をお持ちの方は、音声の生成がずっと速い GPU モードを快適にご利用いただけます。

※Mac 版では GPU モードに対応していないため GPU モードはご利用頂けません。

<img src="https://raw.githubusercontent.com/VOICEVOX/voicevox/0.10.4/public/res/image4.png" style="max-height: 8rem" alt="音声合成エンジンを起動している様子。" />

## 音声の生成

キャラクターアイコンの右にある空白をクリックしてテキストを入力してみてください。

<img src="https://raw.githubusercontent.com/VOICEVOX/voicevox/0.10.4/public/res/image19.png" style="max-height: 12rem" alt="キャラクターアイコンの右にある空白。" />

エンターボタンを押して文章を確定すると、画面の下の方に読みとアクセントが表示されます。（１回目は反映まで数秒ほど時間がかかることがあります。）

<img src="https://raw.githubusercontent.com/VOICEVOX/voicevox/0.10.4/public/res/image6.png" style="max-height: 14rem" alt="画面の下の方に読みとアクセントが表示された様子。" />

再生ボタンを押すと音声が生成され、音声が再生されます。

## 文章の追加・削除

右下の＋ボタンを押すとテキスト欄が増え、複数の文章を並べることができます。

<img src="https://raw.githubusercontent.com/VOICEVOX/voicevox/0.10.4/public/res/image10.png" style="max-height: 14rem" alt="テキスト欄が増えた様子。" />

## キャラクターの変更

テキスト入力欄の左にあるアイコンをクリックすると、テキストを読み上げてくれるキャラクターを変更することができます。

<img src="https://raw.githubusercontent.com/VOICEVOX/voicevox/0.10.4/public/res/image7.png" style="max-height: 12rem" alt="左にあるアイコンをクリックしてほかのキャラクターアイコンが表示されている様子。" />

## 単語の接続変更

意図しない箇所で単語が分離していた場合や、意図しない形で結合してしまっている場合は、アクセント項目で文字の間をクリックすることで修正できます。

例えば「ディープラーニング」がこのように分かれてしまった場合は、

<img src="https://raw.githubusercontent.com/VOICEVOX/voicevox/0.10.4/public/res/image9.png" style="max-height: 16rem" alt="「ディープラーニング」が「ディープ」と「ラーニング」に分かれた様子。" />

２つの隙間をクリックすると

<img src="https://raw.githubusercontent.com/VOICEVOX/voicevox/0.10.4/public/res/image3.png" style="max-height: 8rem" alt="「ディープ」と「ラーニング」の間にマウスカーソルを合わせている様子。マウスカーソルが当たっている部分が青色になります。" />

このように１語にまとめることができます

<img src="https://raw.githubusercontent.com/VOICEVOX/voicevox/0.10.4/public/res/image8.png" style="max-height: 7rem" alt="「ディープ」と「ラーニング」が「ディープラーニング」の１語にまとまった様子。" />

逆に切り離したい場合は、文字の間をクリックして切り離すことができます。

<img src="https://raw.githubusercontent.com/VOICEVOX/voicevox/0.10.4/public/res/image13.png" style="max-height: 8rem" alt="「ディープ」と「ラーニング」の間にマウスカーソルを合わせている様子。マウスカーソルが当たっている部分が青色になります。"/>

## アクセントの変更

音声の抑揚が意図しないものだった場合に、抑揚を変える方法が２つあります。まずはアクセント箇所を変えてみることをおすすめします。

アクセント箇所を変えるには、読みの上にあるバーを左右に動かします。
例えば「ディープラーニング」を「↑ ディープラ ↓ アニング」と読んでほしい場合は、「ラ」の位置まで丸をスライドします。

<img src="https://raw.githubusercontent.com/VOICEVOX/voicevox/0.10.4/public/res/image8.png" style="max-height: 8rem" alt="「ディープラーニング」" /> → <img src="https://raw.githubusercontent.com/VOICEVOX/voicevox/0.10.4/public/res/image1.png" style="max-height: 8rem" alt="「↑ ディープラ ↓ アニング」" />

## イントネーションの変更

アクセントを変更してもうまく行かなかったときや、抑揚をより拘りたいときに、文字ごとの音の高さ（イントネーション）を直接変更することができます。

「イントネーション」をクリックして現れる縦線のバーを上下させることで抑揚を表現できます。

<img src="https://raw.githubusercontent.com/VOICEVOX/voicevox/0.10.4/public/res/image2.png" style="max-height: 8rem" alt="「イントネーション」をクリックして現れる縦線のバー。" />

イントネーション調整スペースを縦に広くすることで、より細かく抑揚を調整することもできます。

<img src="https://raw.githubusercontent.com/VOICEVOX/voicevox/0.10.4/public/res/image18.png" style="max-height: 14rem" alt="イントネーション調整スペースを縦に広くした様子。" />

マウスホイールで調整することもできます。Ctrl キーを押しながらマウスホイールを使うと更に細かく調整できます。

また、「キ」や「ツ」や「ス」などが無声化されている場合、バーが灰色になっています。イントネーション欄のテキストをクリックすることで無声化を解くことができます。

<img src="https://raw.githubusercontent.com/VOICEVOX/voicevox/0.10.4/public/res/image5.png" style="max-height: 10rem" alt="「キツツキデス」の「キ」と「ツ」と「ス」のバーが灰色になっている様子" /> → <img src="https://raw.githubusercontent.com/VOICEVOX/voicevox/0.10.4/public/res/image12.png" style="max-height: 10rem" alt="「キツツキデス」のすべての文字のバーが青色で表示されている様子。" />

無声化できるものはイ行とウ行だけです。

## 読みの修正

読みが思っているものと違う場合は、アクセント欄で読みをクリックすることで後から修正することもできます。テキスト欄と同様に、ひらがなや句読点、漢字も入力できます。

<img src="https://raw.githubusercontent.com/VOICEVOX/voicevox/0.10.4/public/res/image20.png" style="max-height: 12rem" alt="アクセント欄で読みをクリックした様子。修正したいテキストが表示されたテキストボックスが表示されています。テキストボックスの内容を書き換えることで読みを修正できます。" />

## スタイルの変更

キャラクターによっては複数のスタイル（喋り方）を変えることができます。キャラクターの変更と同様に、テキスト欄左のアイコンから選択できます。

<img src="https://raw.githubusercontent.com/VOICEVOX/voicevox/0.10.4/public/res/image21.png" style="max-height: 12rem" alt="キャラクターのアイコンをクリックすると別のキャラクターアイコンが表示されている様子。" />

キャラクターを選択したときに適用されるスタイルは、設定の「デフォルトスタイル」で変更できます。

## 音の長さの変更

文字ごとに、音の長さを変えることが可能です。語尾を少し伸ばしたい、無音の長さを調整したいときなどに便利です。

「長さ」をクリックして現れる縦線のバーを上げるとその音を長く、下げると短くできます。
右のバーが母音、左のバーが子音に対応しています。

<img src="https://raw.githubusercontent.com/VOICEVOX/voicevox/0.10.4/public/res/image22.png" style="max-height: 12rem" alt="一つの文字のバーが中央で縦に分かれている様子。" />

## 音声ファイルの書き出し

メニュにある「ファイル」の「音声書き出し」ボタンを押すと、全テキスト欄の音声が WAV ファイルとして書き出されます。
ファイル保存時、ファイル名は `[何行目]_[キャラ名]_[テキスト冒頭].wav` として保存されます。設定でテキストファイルも一緒に書き出すこともできます。

## テキストファイルの読み込み

読み込みボタンを押すとテキストファイルを読み込めます。テキストは改行または半角コンマ（,）で区切ることで分割できます。また、キャラクター名だけで区切ることで、そのキャラクターとして読み込むことができます。

例えばこのようなテキストを読み込むと、

```txt
四国めたん,おはようございます,こんにちは
ずんだもん,こんばんは
四国めたん,さようなら
```

このように読み込まれます。

<img src="https://raw.githubusercontent.com/VOICEVOX/voicevox/0.10.4/public/res/image17.png" style="max-height: 12rem" alt="テキストがと見込まれた様子。四国めたん「おはようございます」、四国めたん「こんにちは」、ずんだもん「こんばんは」、四国めたん「さようなら」のように、キャラクターと文章が読み込まれています。" />

## プロジェクトファイルの保存・読み込み

入力したテキストやキャラクター、アクセント修正やイントネーションの調整結果は、プロジェクトファイルとして保存し、ソフトウェアを起動し直した後で読み込むことができます。プロジェクトファイルの拡張子は`.vvproj`です。

## ショートカットキー

「設定」の「キー割り当て」で変更することができます。

- 上下キー
  - 上下のテキスト欄に移動
- Space
  - 音声を再生
- Shift + Enter
  - テキスト欄を追加
- Shift + Delete
  - テキスト欄を消去
- Ctrl + S
  - プロジェクトの保存
- Ctrl + E
  - 音声を書き出し
- Ctrl + Z
  - 元に戻す
- Ctrl + Y
  - やり直す
- Esc
  - テキスト欄からカーソルを外す
- 1
  - アクセント欄を表示
- 2
  - イントネーション欄を表示
- 3
  - 長さ欄を表示
- スライダーの上でマウスホイール
  - スライダーの値を変更します（スライダー →<img src="https://raw.githubusercontent.com/VOICEVOX/voicevox/0.10.4/public/res/image16.png" style="max-height: 1rem" alt="スライダー、緑色の棒。" />）
  - Ctrl キーを押しながらマウスホイールを使うと更に細かく調整できます
  - Alt キーを押しながらイントネーションや長さを調整することで、同じアクセント区間内を同時に調整できます

## ツールバーのカスタマイズ

画面上部にあるツールバーのボタンの種類や配置を変更することができます。

<img src="https://raw.githubusercontent.com/VOICEVOX/voicevox/0.10.4/public/res/toolbar-customize.png" style="max-height: 12rem" alt="ツールバーカスタマイズ画面。" />

## デフォルトスタイル・試聴

「設定」の「デフォルトスタイル」で、キャラクターごとのデフォルトのスタイルを変更することができます。  
また、キャラクターごとのサンプルボイスを試聴することもできます。

## オプション

「設定」の「オプション」でいろいろな設定を変更することができます。

### 「エンジン」項目

エンジンの起動モードの起動モードを変更できます。
GPU モードを利用するには、3GB 以上のメモリがある NVIDIA 製 GPU が必要です。

### 「操作」項目

#### パラメータの引き継ぎ

テキスト欄を追加する際、和速や抑揚といったパラメータを引き継ぐようになります。

#### 再生位置を追従

再生中の単語が画面内に収まるよう、自動的にスクロールして追従するようになります。

### 「保存」項目

#### 文字コード

読み込み・書き込み用の文字コードを選択できます。

#### 書き出し先を固定

音声ファイルを書き出すディレクトリを固定し、毎回ディレクトリを選択しなくても同じディレクトリに書き出し続けるようにします。

#### 上書き防止

同じファイル名のファイルがあった場合に連番として保存します。

#### txt ファイルを書き出し

テキスト内容を一緒に保存します。

#### lab ファイルを書き出し

リップシンクなどに便利な、音声の音素情報とそのタイミング情報が書かれたラベルファイルを一緒に保存します。

### 「高度な設定」項目

#### 音声をステレオ化

音声をモノラルからステレオに変換して再生・保存します。

#### 再生デバイス

音声を再生するデバイスを変更できます。

#### 音声のサンプリングレート

音声のサンプリングレートを変更して再生・保存します。  
サンプリングレートを高くしても音声の品質は上がりません。

### 「実験的機能」項目

開発中で未完成な便利機能を利用することができます。

#### プリセット機能

話速や抑揚などのパラメータをまとめて登録できる機能です。  
ソフトウェアが終了しても設定したプリセットは残ります。

#### 疑問文自動調整

疑問文のときに自動的に語尾の音を上げて、疑問文っぽい音声を生成するようになります。

#### テキスト欄の並び替え

テキスト欄左のキャラクターアイコンをドラッグすることで、テキスト欄の順番を並び替えられるようになります。

### 「データ収集」項目

#### ソフトウェア利用状況のデータ収集を許可する

各 UI の利用率などのデータを送信して VOICEVOX の改善に役立てます。  
入力されたテキストデータや音声データの情報は収集しておりませんのでご安心ください。

## その他

右上のピンボタンでウィンドウを最前面に固定できます。

## ヘルプ

利用規約などを確認することができます。

## アンインストール方法

### Windows 版

インストーラー版でインストールした場合、インストールしたディレクトリの中にある Uninstall VOICEVOX.exe を実行してください。  
ZIP ファイルを解凍した場合、ダウンロードした ZIP ファイルと、展開したディレクトリを消去すればアンインストール完了です。

### Mac 版

インストーラー版でインストールした場合、「アプリケーション」ディレクトリにある VOICEVOX を「ゴミ箱」にドラッグ＆ドロップしてください。  
ZIP ファイルを解凍した場合、ダウンロードした ZIP ファイルと、展開したディレクトリを消去すればアンインストール完了です。

## よくあるご質問

[Q&A](https://voicevox.hiroshiba.jp/qa) をご参照ください。

## ご感想・ご要望・バグ報告など

ご感想・ご要望は、ぜひ Twitter にてハッシュタグ `#VOICEVOX` を付けてツイートしてください。開発の励みになります。

うまく動かない場合や不具合を見つけられた方は、Twitter にて不具合をハッシュタグ `#VOICEVOX` を付けてツイートしていただくか、VOICEVOX 公式（[@voicevox_pj](https://twitter.com/voicevox_pj)）までご報告ください。

その他、 Q&A に掲載されていないご質問があれば VOICEVOX 公式（[@voicevox_pj](https://twitter.com/voicevox_pj)）にお問い合わせください。