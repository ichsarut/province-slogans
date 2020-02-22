import { SloganRepository } from "../entities/SloganRepository"
import { Slogan } from "../entities/Slogan"

class SloganDTO {
  province: string = ""
  slogan: string = ""
}

export class SloganRepositoryImpl implements SloganRepository {
  jsonUrl = "..."

  async GetSlogans(): Promise<Slogan[]> {
    const resp = await fetch(this.jsonUrl)
    const jsonData = await resp.json()
    return jsonData.map(
      (slg: SloganDTO) => new Slogan(slg.province, slg.slogan)
    )
  }
}
