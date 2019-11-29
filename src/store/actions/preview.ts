import { PREVIEW_SET } from '../types'
import { Action } from 'redux'

export interface IPreviewAction extends Action {
  payload: { mod: string; value: any }
}

export const setPreview = (key: string, value: any): IPreviewAction => ({
  type: PREVIEW_SET,
  payload: { mod: key, value },
})
