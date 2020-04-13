import {PaperSource} from "../enums/PaperSource";
import {PaperData} from "../dataClasses/PaperData";
import axios from 'axios';

export default class PapersService {

  private sourceEndpointsAdapter = (source: PaperSource): string => {
    switch (source) {
      case PaperSource.ARXIV:
        return "/arxiv";
      case PaperSource.GSCHOLAR:
        return '/googlescholar';
      case PaperSource.LANCET:
        return '/lancet';
      case PaperSource.MBIO:
        return '/mbio';
    }
  };

  public fetch(titleParam: string, contentParam: string, source: PaperSource): Promise<PaperData[]> {
    return axios.get(process.env.REACT_APP_API_ENDPOINT + this.sourceEndpointsAdapter(source) + '/papersOfInterest', {
      params: {
        'word_in_title': titleParam,
        'word_in_paper': contentParam,
      }
    })
      .then(results => {
      return results.data;
    })
      .catch((error: any) => {
        console.log(error);
        alert("Hubo un error, favor intentar más tarde.");
        return [];
    });
  }
}
