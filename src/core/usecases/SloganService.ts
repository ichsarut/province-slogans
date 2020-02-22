import { Slogan } from "../entities/Slogan"
import { SloganRepository } from "../entities/SloganRepository"

export interface SloganService {
  GetSlogans(): Promise<Slogan[]>
}

export class SloganServiceImpl implements SloganService {
  sloganRepo: SloganRepository

  constructor(ir: SloganRepository) {
    this.sloganRepo = ir
  }

  async GetSlogans(): Promise<Slogan[]> {
    return this.sloganRepo.GetSlogans()
  }
}
