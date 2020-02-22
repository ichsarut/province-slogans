import { Slogan } from "./Slogan"

export interface SloganRepository {
  GetSlogans(): Promise<Slogan[]>
}
