ig.module( 'bootstrap.demos.jetroid.levels.demo' )
.requires( 'impact.image','bootstrap.demos.jetroid.entities.treasure','bootstrap.demos.jetroid.entities.alien-a','bootstrap.demos.jetroid.entities.energy-powerup','bootstrap.demos.jetroid.entities.health-powerup','bootstrap.demos.jetroid.entities.artifact','bootstrap.demos.jetroid.entities.air-powerup','bootstrap.entities.levelexit','bootstrap.demos.jetroid.entities.player','bootstrap.entities.particle-emitter','bootstrap.entities.void' )
.defines(function(){
LevelDemo=/*JSON[*/{"entities":[{"type":"EntityTreasure","x":24,"y":348},{"type":"EntityAlienA","x":240,"y":30,"settings":{"flip":"true","spriteOffset":2,"name":"alien1"}},{"type":"EntityEnergyPowerup","x":184,"y":268,"settings":{"name":"energy1"}},{"type":"EntityHealthPowerup","x":348,"y":188,"settings":{"name":"health1"}},{"type":"EntityArtifact","x":24,"y":28},{"type":"EntityAirPowerup","x":224,"y":228,"settings":{"name":"air1"}},{"type":"EntityAlienA","x":152,"y":70,"settings":{"name":"alien2"}},{"type":"EntityLevelexit","x":100,"y":-8,"settings":{"size":{"x":20,"y":8}}},{"type":"EntityArtifact","x":88,"y":188},{"type":"EntityPlayer","x":104,"y":2},{"type":"EntityTreasure","x":348,"y":348},{"type":"EntityArtifact","x":144,"y":152,"settings":{"id":2}},{"type":"EntityTreasure","x":348,"y":28},{"type":"EntityArtifact","x":24,"y":68,"settings":{"id":2}},{"type":"EntityAlienA","x":276,"y":344,"settings":{"spriteOffset":3}},{"type":"EntityAlienA","x":192,"y":150,"settings":{"flip":"true","spriteOffset":1}},{"type":"EntityParticleEmitter","x":288,"y":-28,"settings":{"size":{"x":8,"y":8},"target":{"1":"snow1","2":"snow2","3":"snow3","4":"snow4","5":"snow5"},"spawnEntity":"EntitySnowParticle","maxInstances":40,"particles":5}},{"type":"EntityVoid","x":104,"y":264,"settings":{"name":"snow3","size":{"x":52,"y":8}}},{"type":"EntityVoid","x":188,"y":104,"settings":{"name":"snow1","size":{"x":128,"y":8}}},{"type":"EntityVoid","x":264,"y":224,"settings":{"name":"snow2","size":{"x":52,"y":8}}},{"type":"EntityVoid","x":60,"y":104,"settings":{"name":"snow4","size":{"x":56,"y":8}}},{"type":"EntityVoid","x":100,"y":4,"settings":{"name":"snow5","size":{"x":20,"y":8}}}],"layer":[{"name":"main","width":19,"height":19,"linkWithCollision":false,"visible":1,"tilesetName":"media/bootstrap/demos/jetroid/images/tiles-b.png","repeat":false,"preRender":true,"distance":"1","tilesize":20,"foreground":false,"data":[[1,1,1,1,1,3,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,3,3,3,3,3,3,3,3,"3","3","3","3","3","3","3",3,3,1],[1,1,1,1,1,1,1,1,1,"3",1,1,1,1,1,"3",1,1,1],[1,3,3,3,3,3,3,3,3,"3","3","3","3","3",1,"3",3,3,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,3,1,"3",1,3,1],[1,3,3,"3","3","3",3,3,3,"3","3","3","3","3","3","3",1,3,1],[1,3,1,"3","3","3",1,1,1,"3","3","3","3","3","3","3",1,3,1],[1,3,1,"3","3","3",1,3,3,"3","3","3","3","3","3","3",3,3,1],[1,3,1,"3","3","3",1,1,1,1,1,3,1,3,1,1,1,3,1],[1,3,1,"3","3","3",1,3,3,3,1,3,3,3,1,3,3,3,1],[1,3,1,1,1,1,1,3,1,3,1,1,1,3,1,3,1,1,1],[1,3,3,3,3,3,1,3,1,3,1,3,3,"3","3","3",1,3,1],[1,3,1,1,1,3,1,3,1,3,1,1,1,"3","3","3",1,3,1],[1,3,1,3,3,"3","3","3",1,3,3,3,3,"3","3","3",3,3,1],[1,3,1,3,1,"3","3","3",1,1,1,1,1,"3","3","3",1,3,1],[1,3,1,3,1,"3","3","3",1,3,1,3,3,"3","3","3",1,3,1],[1,3,1,3,1,3,1,1,1,3,1,3,1,1,1,1,1,3,1],[1,3,1,3,3,3,3,3,3,3,1,3,3,3,3,3,3,3,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]]},{"name":"collision","width":19,"height":19,"linkWithCollision":false,"visible":1,"tilesetName":"","repeat":false,"preRender":false,"distance":1,"tilesize":20,"foreground":false,"data":[["1","1","1","1","1",12,"1","1","1","1","1","1","1","1","1","1","1","1","1"],["1","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","1"],["1","1","1","1","1","1","1","1",1,"0",1,1,1,1,1,"0","1","1","1"],["1","0","0","0","0","0","0","0","0","0","0","0","0","0",1,"0","0","0","1"],["1","1","1","1","1","1","1","1","1",1,1,1,1,0,1,"0","1","0","1"],["1","0","0","0","0","0","0","0","0","0","0","0","0","0","0","0","1","0","1"],["1","0","1","0","0","0","1","1","1","0","0","0","0","0","0","0","1","0","1"],["1","0","1","0","0","0","1","0","0","0","0","0","0","0","0","0","0","0","1"],["1","0","1","0","0","0","1","1","1","1","1","0","1","0","1","1","1","0","1"],["1","0","1","0","0","0","1","0","0","0","1","0","0","0","1","0","0","0","1"],["1","0","1","1","1","1","1","0","1","0","1","1","1","0","1","0","1","1","1"],["1","0","0","0","0","0","1","0","1","0","1","0","0","0","0","0","1","0","1"],["1","0","1","1","1","0","1","0","1","0","1","1","1","0","0","0","1","0","1"],["1","0","1","0","0","0","0","0","1","0","0","0","0","0","0","0","0","0","1"],["1","0","1","0","1","0","0","0","1","1","1","1","1","0","0","0","1","0","1"],["1","0","1","0","1","0","0","0","1","0","1","0","0","0","0","0","1","0","1"],["1","0","1","0","1","0","1","1","1","0","1","0","1","1","1","1","1","0","1"],["1","0","1","0","0","0","0","0","0","0","1","0","0","0","0","0","0","0","1"],["1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1"]]}]}/*]JSON*/;
LevelDemoResources=[new ig.Image('media/bootstrap/demos/jetroid/images/tiles-b.png')];
});