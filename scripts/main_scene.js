class MainScene extends Phaser.Scene {
    // コンストラクタ
    constructor() {
        // 継承した「Phaser.Scene」クラスのコンストラクタの呼び出し
        super('MainScene');
        // クラスメンバーとしてfruitsカウンターを初期化
        this.fruits = 0;
        // 残り時間カウンターの初期値を設定
        this.timecount = 10000;
    }

    // シーンの事前読み込み処理
    preload() {
        // 画像の読み込み(使用する時の名前, パス)
       this.load.image('background', 'assets/back.png');
       this.load.image('taro', 'assets/taro.png');
       this.load.image('hanako', 'assets/hanako.png');
       this.load.image('apple', 'assets/APPLE.png');
       this.load.image('orange', 'assets/ORANGE.png');
   }
   // シーン初期化処理
   create() {
    // 単体画像をシーンに追加(X座標,Y座標,画像名)
   this.add.image(400, 300, 'background');
   const taro = this.physics.add.sprite(50, 50, 'taro')
   const hanako = this.physics.add.sprite(400, 400, 'hanako')
   this.taro = taro
   this.hanako = hanako
    // クラスメンバーとしてfruitsカウンターを初期化
   this.fruits = 0;
   
   // 残り時間表示用のテキストを追加
   this.timeText = this.add.text(50, 50, 'Time: ' + Math.ceil(this.timecount / 1000), { fontSize: '24px', fill: '#fff' });

    let staticGroup = this.physics.add.staticGroup();
        for (let i = 0; i < 6; i++) {
            let randx = Phaser.Math.Between(25, 775);
            let randy = Phaser.Math.Between(25, 425);
            staticGroup.create(randx, randy, 'apple');
        }
        for (let i = 0; i < 6; i++) {
            let randxx = Phaser.Math.Between(25, 775);
            let randyy = Phaser.Math.Between(25, 425);
            staticGroup.create(randxx, randyy, 'orange');
        }

        this.physics.add.overlap(hanako, staticGroup, this.collectFruits, null, this);
         // ゲームオーバー判定用のoverlapイベントを追加
         this.physics.add.overlap(hanako, staticGroup, this.collectFruits, null, this);
         this.physics.add.overlap(taro, staticGroup, this.gameOver, null, this);
// this.physics.add.overlap(taro, staticGroup, collectFruits, null, this);
//         function collectFruits(p,apple){
//             this.physics.pause();
//         }
// this.physics.add.overlap(hanako, staticGroup, collectFruits, null, this);
//         function collectFruits(p,apple){
//             this.physics.pause();
        //}
   }
   // クラスメソッドとしてcollectFruitsを定義
   collectFruits(hanako, fruit) {
    // 敵を消す
    fruit.destroy();

    // カウンターを増やす
    this.fruits++;

    // カウンターが10になったらゲームを停止
    if (this.fruits === 10) {
        this.add.text(400, 200, 'CLEAR', { fontSize: '32px', fill: '#fff' }).setOrigin(0.5);
        this.physics.pause();
    }
}
    // クラスメソッドとしてgameOverを定義
    gameOver(taro, fruit) {
        // ゲームオーバー時の処理
        this.add.text(400, 200, 'GAME OVER', { fontSize: '32px', fill: '#fff' }).setOrigin(0.5);
        this.physics.pause();
    }

// 毎フレーム実行される繰り返し処理
update(time, delta) {
    // キーボードの情報を取得
    let cursors = this.input.keyboard.createCursorKeys();

    // 残り時間カウンターを減らす
    this.timecount -= delta;

    // 残り時間を画面に表示
    this.timeText.setText('Time: ' + Math.ceil(this.timecount / 1000));

    // 残り時間が0になったらゲームを停止
    if (this.timecount <= 0) {
        this.add.text(400, 200, 'TimeOver', { fontSize: '32px', fill: '#fff' }).setOrigin(0.5);
        this.physics.pause();
    }

    // キー入力に応じた移動処理
    if (cursors.up.isDown) {
        this.taro.setVelocityY(-300); // 上方向の速度を設定
        this.hanako.setVelocityY(300); // 上方向の速度を設定
    } else if (cursors.down.isDown) {
        this.taro.setVelocityY(300); // 下方向の速度を設定
        this.hanako.setVelocityY(-300); // 下方向の速度を設定
    } else if (cursors.left.isDown) {
        this.taro.setVelocityX(-300); // 左方向の速度を設定
        this.hanako.setVelocityX(300); // 左方向の速度を設定
    } else if (cursors.right.isDown) {
        this.taro.setVelocityX(300); // 右方向の速度を設定
        this.hanako.setVelocityX(-300); // 右方向の速度を設定
    } else {
        this.taro.setVelocityX(0); // 横方向の速度を0
        this.taro.setVelocityY(0); // 縦方向の速度を0
        this.hanako.setVelocityX(0); // 横方向の速度を0
        this.hanako.setVelocityY(0); // 縦方向の速度を0
    }
}
}
