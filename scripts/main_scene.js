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
        this.load.image('sky', 'assets/sky.png');
        this.load.image('back', 'assets/back.png');
        this.load.image('ground', 'assets/platform.png');
        this.load.image('alien1', 'assets/alien1.png');
        this.load.image('alien2', 'assets/alien2.png');
        this.load.image('alien3', 'assets/alien3.png');
        this.load.image('platform', 'assets/platform.png');
        this.load.image('block', 'assets/block.png');
        this.load.image('bomb', 'assets/bomb.png');
        this.load.image('star', 'assets/star.png');
        this.load.image('coin', 'assets/coin.png');
    }

    // シーン初期化処理
    create() {
         // 単体画像をシーンに追加(X座標,Y座標,画像名)
        this.add.image(400, 300, 'sky');
        // 星を(200,200)に追加
        this.add.image(200, 200, 'star');

        // Playerの画像を物理演算を持った画像にする
        const player = this.physics.add.sprite(500, 350, 'alien1');

        // MainSceneクラスのプロパティにplayerを設定
        this.player = player

        // Player3の画像を物理演算を持った画像にする

        const player2 = this.physics.add.sprite(500, 150, 'alien2');


        // MainSceneクラスのプロパティにplayerを設定

        this.player2 = player2
    }

    //矢印キーで移動 
    arrow_move(cursors, object){
    
        if(cursors.up.isDown){
            console.log("Up!!");
            object.setVelocityY(-200);// 上方向の速度を設定
            
        }else if(cursors.down.isDown){
            console.log("down!!");
            object.setVelocityY(200);// 下方向の速度を設定
    
        }else if(cursors.left.isDown){
            console.log("Left");
            object.setVelocityX(-200);// 左方向の速度を設定
    
    
        }else if(cursors.right.isDown){
            console.log("Right!!");
            object.setVelocityX(200);// 右方向の速度を設定
    
        }else{
            object.setVelocity(0,0);// 横方向の速度を0
        }
    }

     // 毎フレーム実行される繰り返し処理
    update() {
        // // キーボードの情報を取得
        let cursors = this.input.keyboard.createCursorKeys();

        this.arrow_move(cursors, this.player);
        this.arrow_move(cursors, this.player2);
    }

}