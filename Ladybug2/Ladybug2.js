/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Ladybug2 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("ladybug2-a", "./Ladybug2/costumes/ladybug2-a.svg", {
        x: 49,
        y: 28
      }),
      new Costume("ladybug2-b", "./Ladybug2/costumes/ladybug2-b.svg", {
        x: 49,
        y: 28
      })
    ];

    this.sounds = [new Sound("Bell Toll", "./Ladybug2/sounds/Bell Toll.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "level 2" },
        this.whenIReceiveLevel2
      )
    ];
  }

  *whenGreenFlagClicked() {
    this.stage.vars.speedladybug = 2;
    this.goto(this.random(-240, 240), this.random(-180, 180));
    this.size = 40;
    while (true) {
      yield* this.glide(
        this.toNumber(this.stage.vars.speedladybug),
        this.random(-240, 240),
        this.random(-180, 180)
      );
      yield;
    }
  }

  *whenIReceiveLevel2() {
    this.stage.vars.speedladybug = 1;
  }
}
