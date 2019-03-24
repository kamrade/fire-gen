import { AnimationTriggerMetadata, trigger, style, transition, animate } from '@angular/animations';

export class EnterLeaveHeightAnimation {

  static animations = EnterLeaveHeightAnimation.getAnimations();

  static getAnimations(): Array<AnimationTriggerMetadata> {
    return [
      trigger('enterLeaveAnimation', [
        transition(':enter', [
          style({ height: 0 }),
          animate('.25s cubic-bezier(0.35, 0, 0.25, 1)', style({ height: '*' }))
        ]),
        transition(':leave', [
          style({ height: '*' }),
          animate('.25s cubic-bezier(0.35, 0, 0.25, 1)', style({ height: 0}))
        ])
      ])
    ]
  }

}
