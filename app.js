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
function create() {
    this.background = this.add.image(400, 300, 'sky')
    this.background = this.add.image(400, 300, 'star')

}

// this is executed multiple times per second
function update() {}
