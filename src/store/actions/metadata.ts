import { METADATA_SET } from '../types'
import { Action } from 'redux'

export interface IMetadataAction extends Action {
  payload: { mod: string; value: any }
}

export const setMetadata = (key: string, value: any): IMetadataAction => ({
  type: METADATA_SET,
  payload: { mod: key, value },
})
