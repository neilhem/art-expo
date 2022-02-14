import exhibitionReducer, { ExhibitionState } from './exhibitionSlice';

describe('chat reducer', () => {
  const initialState: ExhibitionState = {
    items: [],
    status: 'idle',
  };
  it('should handle initial state', () => {
    expect(exhibitionReducer(undefined, { type: 'unknown' })).toEqual({
      items: [],
      status: 'idle',
    });
  });
});
