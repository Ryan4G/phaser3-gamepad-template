import Phaser from 'phaser';

import GameScene from './scenes/GameScene'

const config: Phaser.Types.Core.GameConfig = {
	type: Phaser.AUTO,	
    scale: {
        mode: Phaser.Scale.RESIZE,
        parent: 'phaser-main',
		width: 480,
		height: 320
    },
    backgroundColor: '#7d7d7d',
	scene: [GameScene]
}

export default new Phaser.Game(config)

