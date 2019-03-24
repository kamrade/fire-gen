import { AnimationTriggerMetadata, trigger, style, transition, animate } from '@angular/animations';

export class EnterLeaveOpacityDelayAnimation {

  static animations = EnterLeaveOpacityDelayAnimation.getAnimations();

  static getAnimations(): Array<AnimationTriggerMetadata> {
    return [
      trigger('enterLeaveAnimation', [
        transition(':enter', [
          style({ opacity: 0 }),
          animate('.25s 1s cubic-bezier(0.35, 0, 0.25, 1)', style({ opacity: '1' }))
        ]),
        transition(':leave', [
          style({ opacity: '1' }),
          animate('.25s cubic-bezier(0.35, 0, 0.25, 1)', style({ opacity: 0}))
        ])
      ])
    ]
  }

}
