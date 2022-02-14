import { API_URL } from './constants';
import { ExhibitionReqParams } from './exhibitionModel';

// A mock function to mimic making an async request for data
export function fetchExhibitionList(params: ExhibitionReqParams) {
  return fetch(`${API_URL}?page=${params.page}`).then((res) => res.json());
}

export function fetchExhibitionDetail(id: string) {
  return fetch(`${API_URL}/${id}`).then((res) => res.json());
}
