/*
    Author: Mohammed Ismail
    EmailId: ikismail7@gmail.com
    websote: ikismail.github.io 
*/
// Game Instance
var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 300 },
            debug: false
        }
    },
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

// Creating Instance
var game = new Phaser.Game(config);

// load the game assets before the game starts
function preload() {
    this.load.image('sky', 'assets/sky.png');
    this.load.image('bomb','assets/bomb.png');
    this.load.image('platform','assets/platform.png');
    this.load.image('star','assets/star.png');    
    this.load.spritesheet('dude','assets/dude.png', {frameWidth:32, frameHeight:48});
}

// executed after everyting is loaded

var platforms,player;


function create() {
    this.background = this.add.image(400, 300, 'sky')

    platforms = this.physics.add.staticGroup();

    platforms.create(400, 568, 'platform').setScale(2).refreshBody();

    platforms.create(600, 400, 'platform');
    platforms.create(50, 250, 'platform');
    platforms.create(750, 220, 'platform');


    player = this.physics.add.sprite(100, 450, 'dude');

    player.setBounce(0.2);
    player.setCollideWorldBounds(true);

    this.anims.create({
        key: 'left',
        frames: this.anims.generateFrameNumbers('dude', { start: 0, end: 3 }),
        frameRate: 10,
        repeat: -1
    });

    this.anims.create({
        key: 'turn',
        frames: [ { key: 'dude', frame: 4 } ],
        frameRate: 20
    });

    this.anims.create({
        key: 'right',
        frames: this.anims.generateFrameNumbers('dude', { start: 5, end: 8 }),
        frameRate: 10,
        repeat: -1
    });
}

// this is executed multiple times per second
function update() {}
