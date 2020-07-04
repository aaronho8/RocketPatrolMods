/* 
Name: Aaron Ho
 
Sources:
https://www.youtube.com/watch?v=zDq-9b0lqf0
https://www.youtube.com/watch?v=mRN_T6JkH-c

Point breakdown:
Add your own (copyright-free) background music to the Play scene (10)
Create a new scrolling tile sprite for the background (10)
Allow the player to control the Rocket after it's fired (10)
Create a new title screen (15)
Create a new spaceship type (w/ new artwork) that's smaller, moves faster, and is worth more points (25)
Create new artwork for all of the in-game assets (rocket, spaceships, explosion) (25) 
Added new explosion sound if player manages to hit the new spaceship type (5)

*/






// game configuration object
let config = {
    type: Phaser.AUTO,
    width: 640,
    height: 480,
    scene: [ Menu, Play ]
}

// main game object
let game = new Phaser.Game(config);

// define game settings
game.settings = {
    spaceshipSpeed: 3,
    specialspaceshipSpeed: 6,
    gameTimer: 60000   
}

// reserve keyboard vars
let keyF, keyLEFT, keyRIGHT;