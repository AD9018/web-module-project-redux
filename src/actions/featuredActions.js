export const ADD_FEATURE = "ADD_FEATURE";
export function addFeature(newFeature) {
  return { type: ADD_FEATURE, payload: newFeature };
}

export const REMOVE_FEATURE = "REMOVE_FEATURE";
export function removeFeature(newFeature) {
  return { type: REMOVE_FEATURE, payload: newFeature };
}
