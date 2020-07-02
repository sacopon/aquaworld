/**
 * スプライトシートを管理する
 */
export class SpriteSheetRepository {
  /** スプライトシートの連想配列 */
  private spriteSheetMap: Map<string, PIXI.Spritesheet>;

  /** シート内の各ファイル名からスプライトシートの名前を逆引きするための連想配列 */
  private reverseMap: Map<string, string>;

  /**
   * コンストラクタ
   */
  public constructor() {
    this.spriteSheetMap = new Map<string, PIXI.Spritesheet>();
    this.reverseMap = new Map<string, string>();
  }

  /**
   * 追加
   * 重複時は後勝ち
   *
   * @param name キー
   * @param sheet スプライトシート
   */
  public addSpriteSheet(name: string, sheet: PIXI.Spritesheet) {
    this.spriteSheetMap.set(name, sheet);
    this.addReverseMap(name, sheet);
  }

  /**
   * 削除
   *
   * @param name キー
   */
  public removeSpriteSheet(name: string) {
    this.spriteSheetMap.delete(name);
    this.removeReverseMap(name);
  }

  /**
   * スプライトシート取得
   *
   * @param name キー
   * @returns スプライトシート. 該当するキーがない場合は null
   */
  public getSpriteSheet(name: string): PIXI.Spritesheet | null {
    if (!this.spriteSheetMap.has(name)) {
      return null;
    }

    return this.spriteSheetMap.get(name) || null;
  }

  /**
   * スプライトシート内のテクスチャを取得
   *
   * @param name テクスチャ名
   * @returns テクスチャ. ない場合は null
   */
  public getTexture(name: string): PIXI.Texture | null {
    const spriteSheetName = this.reverseMap.get(name);

    if (!spriteSheetName) {
      return null;
    }

    const spriteSheet = this.getSpriteSheet(spriteSheetName);
    if (!spriteSheet) {
      return null;
    }

    return spriteSheet.textures[name];
  }

  private addReverseMap(name: string, sheet: PIXI.Spritesheet) {
    Object.keys(sheet.data.frames).forEach((key) => {
      this.reverseMap.set(key, name);
    });
  }

  private removeReverseMap(name: string) {
    const keys = [...this.reverseMap.entries()]
      .filter((entry: string[]) => entry[1] === name)
      .map((entry: string[]) => entry[0]);

    keys.forEach((key: string) => this.reverseMap.delete(key));
  }
}
