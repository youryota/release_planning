// シーンクラス
// 他のJSファイルから呼び出された場合はシーンを返す
class MainScene extends Phaser.Scene {
    // コンストラクタ
    constructor() {
        // 継承した「Phaser.Scene」クラスのコンストラクタの呼び出し
        super('MainScene');
    }
    // シーンの事前読み込み処理
    preload() {
        // 画像の読み込み(使用する時の名前, パス)
       this.load.image('background', 'assets/back.png');
       this.load.image('taro', 'assets/taro.png');
       this.load.image('hanako', 'assets/hanako.png');
       this.load.image('APPLE', 'assets/APPLE.png');
       this.load.image('ORANGE', 'assets/ORANGE.png');
   }
   // シーン初期化処理
   create() {
        // 単体画像をシーンに追加(X座標,Y座標,画像名)
       this.add.image(400, 300, 'background');
       const taro = this.physics.add.sprite(50, 50, 'taro')
       const hanako = this.physics.add.sprite(750, 400, 'hanako')
       this.taro = taro
       this.hanako = hanako
       for (let i = 0; i < 6; i++) {
        let randx = Phaser.Math.Between(25, 775);
        let randy = Phaser.Math.Between(25, 425);
        this.add.image(randx, randy, 'APPLE');
    }
    // ６つのORANGEをランダムに配置
    for (let i = 0; i < 6; i++) {
        let randxx = Phaser.Math.Between(25, 775);
        let randyy = Phaser.Math.Between(25, 425);
        this.add.image(randxx, randyy, 'ORANGE');
    }
       }
     // 毎フレーム実行される繰り返し処理
        update() {
            // キーボードの情報を取得
            let cursors = this.input.keyboard.createCursorKeys();
            if(cursors.up.isDown){
                console.log("Up!!");
                this.taro.setVelocityY(-200);// 上方向の速度を設定
                this.hanako.setVelocityY(200);
            } else if(cursors.down.isDown){
                console.log("down!!");
                this.taro.setVelocityY(200);// 下方向の速度を設定
                this.hanako.setVelocityY(-200);
            }else if(cursors.left.isDown){
                console.log("Left");
                this.taro.setVelocityX(-200);// 左方向の速度を設定
                this.hanako.setVelocityX(200);
            }else if(cursors.right.isDown){
                console.log("Right!!");
                this.taro.setVelocityX(200);// 右方向の速度を設定
                this.hanako.setVelocityX(-200);
            }else{
                this.taro.setVelocityX(0);// 横方向の速度を0
                this.taro.setVelocityY(0);// 縦方向の速度を0
                this.hanako.setVelocityX(0);// 横方向の速度を0
                this.hanako.setVelocityY(0);// 縦方向の速度を0
            }
    }
}
