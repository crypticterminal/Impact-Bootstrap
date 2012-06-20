ig.module(
    'bootstrap.demos.jetroid.entities.artifact'
)
    .requires(
    'bootstrap.demos.jetroid.entities.base-chachki',
    'impact.sound'
)
    .defines(function () {
        EntityArtifact = EntityBaseChachki.extend({
            _wmIgnore: false,
            animSheet:new ig.AnimationSheet('media/bootstrap/demos/jetroid/images/artifacts.png', 5, 9),
            name: "Artifact",
            types: ["Worthless", "Normal", "Special","Rare"],
            size: {x:5, y:9}
        })
    })