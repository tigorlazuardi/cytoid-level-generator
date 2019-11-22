import { METADATA_SET } from '../types'
import { AnyAction } from 'redux'

interface ChartState {
  type: string
  difficulty: number
  path: string
  storyboard?: { path: string }
  music_override?: { path: string }
}

export interface MetadataAction extends AnyAction {
  type: string
  payload: {
    mod: 'string'
    value: any
  }
}

export interface MetadataState {
  schema_version: number
  version: number
  id: string
  title: string
  title_localized?: string
  artist: string
  artist_localized?: string
  artist_source: string
  illustrator: string
  illustrator_source: string
  charter: string
  music: { path: string }
  music_preview: { path: string }
  background: { path: string }
  charts: ChartState[]
  [key: string]: any
}

const initialState: MetadataState = {
  schema_version: 2,
  version: 1,
  id: '',
  title: '',
  title_localized: '',
  artist: '',
  artist_localized: '',
  artist_source: '',
  illustrator: '',
  illustrator_source: '',
  charter: '',
  music: { path: '' },
  music_preview: { path: '' },
  background: { path: '' },
  charts: [],
}

export default (state = initialState, action: MetadataAction): any => {
  const { type, payload } = action
  switch (type) {
    case METADATA_SET:
      return {
        [state[payload.mod]]: payload.value,
        ...state,
      }
    default:
      return state
  }
}
