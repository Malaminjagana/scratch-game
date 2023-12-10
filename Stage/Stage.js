/* eslint-disable require-yield, eqeqeq */

import {
  Stage as StageBase,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Stage extends StageBase {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("game over", "./Stage/costumes/game over.svg", {
        x: 153.2460992883635,
        y: 127.75
      }),
      new Costume("Metro", "./Stage/costumes/Metro.png", { x: 480, y: 360 })
    ];

    this.sounds = [new Sound("Plopp", "./Stage/sounds/Plopp.wav")];

    this.triggers = [
      new Trigger(
        Trigger.KEY_PRESSED,
        { key: "space" },
        this.whenKeySpacePressed
      ),
      new Trigger(
        Trigger.KEY_PRESSED,
        { key: "space" },
        this.whenKeySpacePressed2
      )
    ];

    this.vars.speed = 0;
    this.vars.time = 9;
    this.vars.speedladybug = 2;

    this.watchers.speed = new Watcher({
      label: "speed",
      style: "normal",
      visible: true,
      value: () => this.vars.speed,
      x: 246,
      y: 165
    });
    this.watchers.time = new Watcher({
      label: "time",
      style: "normal",
      visible: true,
      value: () => this.vars.time,
      x: 245,
      y: 137
    });
    this.watchers.speedladybug = new Watcher({
      label: "speedladybug",
      style: "normal",
      visible: true,
      value: () => this.vars.speedladybug,
      x: 245,
      y: 109
    });
  }

  *whenKeySpacePressed() {
    this.vars.time = 0;
    while (true) {
      yield* this.wait(1);
      this.vars.time++;
      yield;
    }
  }

  *whenKeySpacePressed2() {
    while (true) {
      if (this.toNumber(this.vars.time) === 20) {
        this.broadcast("level 2");
        return;
      }
      yield;
    }
  }
}
