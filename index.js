import {
  Project,
  Sprite
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

import Stage from "./Stage/Stage.js";
import Beetle from "./Beetle/Beetle.js";
import Ladybug2 from "./Ladybug2/Ladybug2.js";

const stage = new Stage({ costumeNumber: 1 });

const sprites = {
  Beetle: new Beetle({
    x: 25.884497008182198,
    y: 120.40858843277469,
    direction: -111.53694730149275,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 40,
    visible: true,
    layerOrder: 1
  }),
  Ladybug2: new Ladybug2({
    x: 111.344,
    y: -22.59,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 40,
    visible: true,
    layerOrder: 2
  })
};

const project = new Project(stage, sprites, {
  frameRate: 30 // Set to 60 to make your project run faster
});
export default project;
