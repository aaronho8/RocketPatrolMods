// Rocket prefab
class Rocket extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture, frame) {
        super(scene, x, y, texture, frame);
        scene.add.existing(this);   // add to existing scene, displayList, updateList
        this.sfxRocket = scene.sound.add('sfx_rocket'); // add rocket sfx
        this.isFiring = false;      // track rocket's firing status
    }

    update() {
        // left/right movement
        if (!this.isFiring) {
            if (this.game.input.mousePointer.x < this.world.width*0.5) {
                this.x -= 2;
            } else if (this.game.input.mousePointer.x > this.world.width*0.5) {
                this.x += 2;
            }
        }
        // fire button
        if (Phaser.Input.Keyboard.JustDown(keyF) && !this.isFiring) {
            this.isFiring = true;
            this.sfxRocket.play();  // play sfx
        }
        // if fired, move up
        if (this.isFiring && this.y >= 108) {
            this.y -= 2;
        }
        // reset on miss
        if (this.y <= 108) {
            this.reset();
        }
    }
    // reset rocket to "ground"
    reset() {
        this.isFiring = false;
        this.y = 431;
    }
}