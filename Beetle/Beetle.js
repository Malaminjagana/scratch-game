/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Beetle extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("beetle", "./Beetle/costumes/beetle.svg", { x: 43, y: 38 })
    ];

    this.sounds = [
      new Sound("pop", "./Beetle/sounds/pop.wav"),
      new Sound("Big Boing", "./Beetle/sounds/Big Boing.wav"),
      new Sound("recording1", "./Beetle/sounds/recording1.wav")
    ];

    this.triggers = [
      new Trigger(
        Trigger.KEY_PRESSED,
        { key: "space" },
        this.whenKeySpacePressed
      ),
      new Trigger(
        Trigger.KEY_PRESSED,
        { key: "right arrow" },
        this.whenKeyRightArrowPressed
      ),
      new Trigger(
        Trigger.KEY_PRESSED,
        { key: "left arrow" },
        this.whenKeyLeftArrowPressed
      ),
      new Trigger(
        Trigger.KEY_PRESSED,
        { key: "up arrow" },
        this.whenKeyUpArrowPressed
      ),
      new Trigger(
        Trigger.KEY_PRESSED,
        { key: "down arrow" },
        this.whenKeyDownArrowPressed
      ),
      new Trigger(
        Trigger.KEY_PRESSED,
        { key: "space" },
        this.whenKeySpacePressed2
      )
    ];
  }

  *whenKeySpacePressed() {
    this.goto(this.random(-240, 240), this.random(-180, 180));
    this.stage.vars.speed = 1;
    this.size = 40;
    while (true) {
      this.move(this.toNumber(this.stage.vars.speed));
      /* TODO: Implement motion_ifonedgebounce */ null;
      yield;
    }
  }

  *whenKeyRightArrowPressed() {
    this.direction += 5;
  }

  *whenKeyLeftArrowPressed() {
    this.direction -= 5;
  }

  *whenKeyUpArrowPressed() {
    this.stage.vars.speed++;
  }

  *whenKeyDownArrowPressed() {
    this.stage.vars.speed--;
  }

  *whenKeySpacePressed2() {
    this.stage.costume = "Metro";
    while (true) {
      if (this.touching(this.sprites["Ladybug2"].andClones())) {
        this.stage.vars.speed = 0;
        this.move(-20);
        yield* this.playSoundUntilDone("recording1");
        this.stage.costume = "game over";
        /* TODO: Implement stop all */ null;
      }
      yield;
    }
  }
}
