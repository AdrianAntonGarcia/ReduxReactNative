export interface MovieAction {
  type: string;
  payload?: any;
}

export const GET_MOVIES: MovieAction = {type: 'GET_MOVIES'};
