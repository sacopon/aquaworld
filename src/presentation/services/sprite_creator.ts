import * as PIXI from "pixi.js";
import { PresentationServiceLocator } from "presentation/services/presentation_service_locator";

/**
 * スプライトを作成する
 */
export class SpriteCreator {
  /**
   * スプライトを作成する
   * @param name テクスチャ名/スプライトシート内のテクスチャ名
   * @returns 作成したスプライト
   */
  static create(name: string) {
    const texture = PresentationServiceLocator.spriteSheetRepository.getTexture(name)!;
    return new PIXI.Sprite(texture);
  }
}
