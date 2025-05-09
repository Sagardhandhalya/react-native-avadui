export const ifNullOrUndefined = (value: any): boolean => {
  if (Array.isArray(value)) {
    let returnValue = false;
    value.forEach((element) => {
      if (element === null || element === undefined || element === '') {
        returnValue = true;
      }
    });
    return returnValue;
  }
  return value === null || value === undefined || value === '';
};

export interface StyleAttributes {
  m?: [number?, number?, number?, number?];
  p?: [number?, number?, number?, number?];
  mt?: number;
  mr?: number;
  mb?: number;
  ml?: number;
  pt?: number;
  pr?: number;
  pb?: number | string;
  pl?: number;
  mh?: number;
  mv?: number;
  ph?: number;
  pv?: number;
  br?: number;
  bg?: string;
  margin?: number;
  padding?: number;
  borderColor?: string;
}

export const parseStyleAttributes = ({
  m = [],
  p = [],
  mt: _mt,
  mr: _mr,
  mb: _mb,
  ml: _ml,
  pt: _pt,
  pr: _pr,
  pb: _pb,
  pl: _pl,
  mh,
  mv,
  br,
  bg,
  ph,
  pv,
  margin,
  borderColor,
  padding,
}: StyleAttributes): Record<string, any> => {
  const [mt = _mt, mr = _mr, mb = _mb, ml = _ml] = m;
  const [pt = _pt, pr = _pr, pb = _pb, pl = _pl] = p;

  const obj: Record<string, any> = {
    margin,
    padding,
    marginHorizontal: mh,
    marginVertical: mv,
    marginTop: mt,
    marginRight: mr,
    marginBottom: mb,
    marginLeft: ml,
    paddingTop: pt,
    paddingRight: pr,
    paddingBottom: pb,
    paddingLeft: pl,
    borderRadius: br,
    backgroundColor: bg,
    paddingHorizontal: ph,
    paddingVertical: pv,
    borderColor,
  };

  const final: Record<string, any> = {};

  Object.keys(obj).forEach((key) => {
    if (!ifNullOrUndefined(obj[key])) {
      final[key] = obj[key];
    }
  });

  return final;
};
