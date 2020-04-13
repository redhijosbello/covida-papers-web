import {PaperSource} from "../enums/PaperSource";
import {dummyPapers} from "../dummy/PapersDummy";
import {PaperData} from "../dataClasses/PaperData";

export default class PapersService {

  public fetch(titleParam: string, contentParam: string, source: PaperSource): Promise<PaperData[]> {
    return Promise.resolve(dummyPapers);
  }
}
