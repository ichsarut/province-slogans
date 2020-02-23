import { SloganRepository } from "../entities/SloganRepository"
import { Slogan } from "../entities/Slogan"

class SloganDTO {
  province: string = ""
  slogan: string = ""
}

export class SloganRepositoryImpl implements SloganRepository {
  jsonUrl =
    "https://gist.githubusercontent.com/ichsarut/357f38a3cde12de454089368f105a0fd/raw/7e2e8b346b79dcb0f36adf05bfffeef8ae757cfe/slogans.json"

  async GetSlogans(): Promise<Slogan[]> {
    const resp = await fetch(this.jsonUrl)
    const jsonData = await resp.json()

    return Object.keys(jsonData).map(key => {
      return new Slogan(jsonData[key].province, jsonData[key].slogan)
    })
  }
}
