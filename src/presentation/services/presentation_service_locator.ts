import { SpriteSheetRepository } from "presentation/services/sprite_sheet_repository";

/**
 * プレゼンテーション層のサービスロケータ
 * 共有インスタンスを配信する
 */
export class PresentationServiceLocator {
  private static _spriteSheetRepository?: SpriteSheetRepository;

  public static get spriteSheetRepository(): SpriteSheetRepository {
    return this._spriteSheetRepository!;
  }

  public static set spriteSheetRepository(repos: SpriteSheetRepository) {
    this._spriteSheetRepository = repos;
  }
}
